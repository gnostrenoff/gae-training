package com.gae;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

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
public class ScoresServlet extends HttpServlet {

	public void doGet(HttpServletRequest request, HttpServletResponse response)
			throws IOException {
		
		DatastoreService datastore = DatastoreServiceFactory.getDatastoreService();
		PreparedQuery pq;
		JSONArray json = new JSONArray();
		Query query;
		
		query = new Query("Score");
		
		pq = datastore.prepare(query);

		for (Entity result : pq.asIterable()) {
			// create training object
			JSONObject trainingJsonObj = new JSONObject();
			trainingJsonObj
					.put("date", result.getProperty("date").toString());
			trainingJsonObj.put("exoTitle", result
					.getProperty("exoTitle").toString());
			trainingJsonObj.put("result", result
					.getProperty("result").toString());
			trainingJsonObj.put("time", result
					.getProperty("time").toString());
			trainingJsonObj.put("trainingTitle", result
					.getProperty("trainingTitle").toString());
			trainingJsonObj.put("userId", result
					.getProperty("userId").toString());
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
		Entity score = new Entity("Score");
		score.setProperty("date", req.get("date"));
		score.setProperty("userId", req.get("userId"));
		score.setProperty("trainingTitle", req.get("trainingTitle"));
		score.setProperty("exoTitle", req.get("exoTitle"));
		score.setProperty("result", req.get("result"));
		score.setProperty("time", req.get("time"));

		//put it in datastore
		datastore.put(score);
		
		// Send back json
		JSONObject scoreJsonObj = new JSONObject();
		scoreJsonObj.put("date", req.get("date"));
		scoreJsonObj.put("userId", req.get("userId"));
		scoreJsonObj.put("trainingTitle", req.get("trainingTitle"));
		scoreJsonObj.put("exoTitle", req.get("exoTitle"));
		scoreJsonObj.put("result", req.get("result"));
		scoreJsonObj.put("time", req.get("time"));
		

		response.setContentType("application/json");
		response.getOutputStream().print(scoreJsonObj.toJSONString());
		response.getOutputStream().flush();

	}
}
