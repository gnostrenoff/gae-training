package com.gae;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.json.simple.JSONObject;

import model.gae.TrainingModel;

import com.google.appengine.api.datastore.DatastoreService;
import com.google.appengine.api.datastore.DatastoreServiceFactory;
import com.google.appengine.api.datastore.Entity;
import com.google.appengine.api.datastore.PreparedQuery;
import com.google.appengine.api.datastore.Query;


@SuppressWarnings("serial")
public class TrainingSearchServlet extends HttpServlet {
	
	public void doGet(HttpServletRequest req, HttpServletResponse resp)
			throws IOException {
		
		//get all trainings
		DatastoreService datastore = DatastoreServiceFactory.getDatastoreService();
		Query query = new Query("Training");
		PreparedQuery pq = datastore.prepare(query);
		
		//prepare response
		JSONObject responseJson = new JSONObject();
		
		for (Entity result : pq.asIterable()){
			//create training object
			JSONObject trainingJsonObj = new JSONObject();
			trainingJsonObj.put("title", result.getProperty("title").toString());
			trainingJsonObj.put("description", result.getProperty("description").toString());
			responseJson.put(result.getKey().toString(), trainingJsonObj);
		}

		resp.setContentType("application/json");
		resp.getOutputStream().print(responseJson.toJSONString());
		resp.getOutputStream().flush();
		
}
		
	
	@Override
	protected void doPost(HttpServletRequest req, HttpServletResponse resp)
			throws ServletException, IOException {

		DatastoreService datastore = DatastoreServiceFactory.getDatastoreService();

		//create new training
		Entity training = new Entity("Training");
		training.setProperty("title", req.getParameter("title"));
		training.setProperty("description", req.getParameter("description") );

		//put it in datastore
		datastore.put(training); 

	/*	Key userKey = user.getKey();
		try {
			Entity employee = datastore.get(userKey);
		} catch (EntityNotFoundException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		*/
		
	}
}
