package com.gae;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.json.simple.JSONObject;

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
		
		System.out.println(req.get("title"));

		/* DatastoreService datastore =
		 DatastoreServiceFactory.getDatastoreService();
		 UUID keyExercice = UUID.randomUUID();
		 Entity exercice = new Entity(EXERCICE_ENTITY_KEY);
		 exercice.setProperty(keyExercice.toString(), );
		
		 datastore.put(exercice);*/
	}
}
