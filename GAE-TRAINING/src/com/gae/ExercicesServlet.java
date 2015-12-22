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
public class ExercicesServlet extends HttpServlet {
	public static final String EXERCICE_ENTITY_KEY = "Exercice";
	public static final String WELCOME_MSG_MSG_ENTITY_PROPERTY = "msg";

	@Override
	protected void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {

		ParseData pD = new ParseData();
		JSONObject req = pD.parseRequest(request);
		PreparedQuery pq;
		Key parentKey = null;
		JSONArray json = new JSONArray();

		DatastoreService datastore = DatastoreServiceFactory
				.getDatastoreService();
		
		//get parent's key
		Filter propertyFilter = new Query.FilterPredicate("title",FilterOperator.EQUAL, request.getParameter("trainingTitle"));
		Query query = new Query("Training").setFilter(propertyFilter);
		pq = datastore.prepare(query);	
		parentKey = pq.asSingleEntity().getKey();
		
		//get childs
		query = new Query("Exercice");
		query.setAncestor(parentKey);
		pq = datastore.prepare(query);
		
		for (Entity result : pq.asIterable()) {
			System.out.println(result);
			// create exercice object
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

		// Create new exercice
		Entity exo = new Entity("Exercice");
		exo.setProperty("title", req.get("title"));
		exo.setProperty("description", req.get("description"));

		// Put it in datastore
		Key exoKey = datastore.put(exo);

		response.setContentType("application/json");
		response.getOutputStream().print(exoKey.toString());
		response.getOutputStream().flush();

	}
}
