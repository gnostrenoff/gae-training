package com.gae;

import java.io.IOException;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.appengine.api.datastore.DatastoreService;
import com.google.appengine.api.datastore.DatastoreServiceFactory;
import com.google.appengine.api.datastore.Entity;
import com.google.appengine.api.datastore.FetchOptions;
import com.google.appengine.api.datastore.PreparedQuery;
import com.google.appengine.api.datastore.Query;
import com.google.appengine.labs.repackaged.org.json.JSONObject;

@SuppressWarnings("serial")
public class TrainingSearchServlet extends HttpServlet {
	
	public void doGet(HttpServletRequest req, HttpServletResponse resp)
			throws IOException {
		
		//get all trainings
		DatastoreService datastore = DatastoreServiceFactory.getDatastoreService();
		
		Query query = new Query("Training");
		PreparedQuery pq = datastore.prepare(query);
		
		for (Entity result : pq.asIterable()){
			//responseJson.put(result.getProperty("key"), result.getLogin());
		}
		
		//prepare response
		@SuppressWarnings("unused")
		JSONObject responseJson = new JSONObject();
		
		/*Query q = new Query("Person") 
        PreparedQuery pq = datastore.prepare(q);  
    for (Entity result : pq.asIterable()) {   
       String firstName = (String) result.getProperty("firstName");   
       String lastName = (String) result.getProperty("lastName");   
       Long height = (Long) result.getProperty("height");   
       System.out.println(lastName + " " + firstName + ", " + height.toString() + "inches tall");*/ 
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
