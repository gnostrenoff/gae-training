package com.gae;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.json.simple.JSONObject;

import com.google.appengine.api.datastore.DatastoreService;
import com.google.appengine.api.datastore.DatastoreServiceFactory;
import com.google.appengine.api.datastore.Entity;
import com.google.appengine.api.datastore.Key;

import util.ParseData;


@SuppressWarnings("serial")
public class ExercicesServlet extends HttpServlet {
	public static final String EXERCICE_ENTITY_KEY = "Exercice";
	public static final String WELCOME_MSG_MSG_ENTITY_PROPERTY = "msg";

	@Override
	protected void doGet(HttpServletRequest req, HttpServletResponse resp)
			throws ServletException, IOException {
		// TODO
		// if req.exerciceId return exerciceId from cache or from db
		// else return list exercices from cache or from db
	}

	@Override
	protected void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {

		ParseData pD = new ParseData();
		JSONObject req = pD.parseRequest(request);
		
		DatastoreService datastore = DatastoreServiceFactory.getDatastoreService();

		//create new training
		Entity exo = new Entity("Exercice");
		exo.setProperty("title", req.get("title"));
		exo.setProperty("description", req.get("description") );

		//put it in datastore
		Key exoKey = datastore.put(exo);
		
		response.setContentType("application/json");
		response.getOutputStream().print(exoKey.toString());
		response.getOutputStream().flush();

	}
}
