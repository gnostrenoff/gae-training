package com.gae;

import java.io.IOException;
import java.net.URL;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.xml.sax.InputSource;
import org.xml.sax.SAXException;
import org.xml.sax.XMLReader;
import org.xml.sax.helpers.XMLReaderFactory;

import util.SaxHandler;

import com.google.appengine.api.datastore.DatastoreService;
import com.google.appengine.api.datastore.DatastoreServiceFactory;
import com.google.appengine.api.datastore.Entity;
import com.google.appengine.api.datastore.PreparedQuery;
import com.google.appengine.api.datastore.Query;
import com.google.appengine.api.datastore.Query.Filter;
import com.google.appengine.api.datastore.Query.FilterOperator;

@SuppressWarnings("serial")
public class SearchServlet extends HttpServlet {
	
	public void doGet(HttpServletRequest request, HttpServletResponse response)
			throws IOException {
		
		DatastoreService datastore = DatastoreServiceFactory
				.getDatastoreService();
		PreparedQuery pq;
		JSONArray json = new JSONArray();
		Query query;

		//create filter
		Filter propertyFilter = new Query.FilterPredicate("title",
				FilterOperator.EQUAL, request.getParameter("search"));
		
		//looking matching trinings
		JSONArray jsonTrainings = new JSONArray();
		query = new Query("Training").setFilter(propertyFilter);
		pq = datastore.prepare(query);		
		getMatchingEntity(pq, jsonTrainings);
		json.add(jsonTrainings);
		
		//looking matching exercices
		JSONArray jsonExos = new JSONArray();
		query = new Query("Exercice").setFilter(propertyFilter);
		pq = datastore.prepare(query);		
		getMatchingEntity(pq, jsonExos);
		json.add(jsonExos);
		
		//get news using RSS
		SaxHandler handler = new SaxHandler();
		URL url = new URL("http://feeds.bbci.co.uk/sport/0/rss.xml");
		
		try {
			XMLReader myReader = XMLReaderFactory.createXMLReader();
			myReader.setContentHandler(handler);	
			myReader.parse(new InputSource(url.openStream()));

		} catch (SAXException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
		
		//keep only 3 first news
		JSONArray itemsListJson = handler.getItemsList();
		while(itemsListJson.size() > 3){
			itemsListJson.remove(itemsListJson.size() - 1);
		}

		//add news to response
		json.add(itemsListJson);
		
		//send back an array containing 3 arrays (trainings, exos, and news)
		JSONObject responseJson = new JSONObject();
		responseJson.put("data",json);
		
		response.setContentType("application/json");
		response.getOutputStream().print(responseJson.toJSONString());
		response.getOutputStream().flush();
	}

	@Override
	protected void doPost(HttpServletRequest request,
			HttpServletResponse response) throws ServletException, IOException {
	}
	
	//search
	private void getMatchingEntity(PreparedQuery pq, JSONArray json){
		
		for (Entity result : pq.asIterable()) {
			// create training object
			JSONObject jsonObj = new JSONObject();
			jsonObj.put("title", result.getProperty("title").toString());
			jsonObj.put("description", result.getProperty("description").toString());
			jsonObj.put("time", result.getProperty("time").toString());
			jsonObj.put("id", result.getKey().getId());
			if(result.getProperty("trainingParent") != null)
				jsonObj.put("trainingParent", result.getProperty("trainingParent").toString());
			json.add(jsonObj);
		}
		
	}
}
