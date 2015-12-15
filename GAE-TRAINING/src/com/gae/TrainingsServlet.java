package com.gae;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.json.simple.JSONArray;
import org.json.simple.JSONObject;

import util.ParseData;

import com.google.appengine.api.datastore.DatastoreService;
import com.google.appengine.api.datastore.DatastoreServiceFactory;
import com.google.appengine.api.datastore.Entity;
import com.google.appengine.api.datastore.Key;
import com.google.appengine.api.datastore.PreparedQuery;
import com.google.appengine.api.datastore.Query;
import com.google.appengine.api.datastore.Query.Filter;
import com.google.appengine.api.datastore.Query.FilterOperator;

@SuppressWarnings("serial")
public class TrainingsServlet extends HttpServlet {

	public void doGet(HttpServletRequest request, HttpServletResponse response)
			throws IOException {
		
		DatastoreService datastore = DatastoreServiceFactory
				.getDatastoreService();
		PreparedQuery pq;
		JSONArray json = new JSONArray();
		
		if (request.getParameter("search") != null) {
			Filter propertyFilter = new Query.FilterPredicate("title",
					FilterOperator.EQUAL, request.getParameter("search"));
			Query query = new Query("Training").setFilter(propertyFilter);
			pq = datastore.prepare(query);
		} else {
			Query query = new Query("Training");
			pq = datastore.prepare(query);
		}

		for (Entity result : pq.asIterable()) {
			// create training object
			JSONObject trainingJsonObj = new JSONObject();
			trainingJsonObj
					.put("title", result.getProperty("title").toString());
			trainingJsonObj.put("description", result
					.getProperty("description").toString());
			trainingJsonObj.put("id", result.getKey().getId());
			json.add(trainingJsonObj);
		}
		JSONObject responseJson = new JSONObject();
		responseJson.put("data",json);
		response.setContentType("application/json");
		response.getOutputStream().print(responseJson.toJSONString());
		response.getOutputStream().flush();

	}

	@Override
	protected void doPost(HttpServletRequest request,
			HttpServletResponse response) throws ServletException, IOException {

		ParseData pD = new ParseData();
		JSONObject req = pD.parseRequest(request);

		DatastoreService datastore = DatastoreServiceFactory
				.getDatastoreService();

		// Create new training
		Entity training = new Entity("Training");
		training.setProperty("title", req.get("title"));
		training.setProperty("description", req.get("description"));

		// Put it in datastore
		datastore.put(training);
		
		// Send back json
		JSONObject trainingJsonObj = new JSONObject();
		trainingJsonObj
				.put("title", training.getProperty("title").toString());
		trainingJsonObj.put("description", training
				.getProperty("description").toString());
		trainingJsonObj.put("id", training.getKey().getId());
		

		response.setContentType("application/json");
		response.getOutputStream().print(trainingJsonObj.toJSONString());
		response.getOutputStream().flush();

	}
}
