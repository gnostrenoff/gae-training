package com.gae;

import java.io.BufferedReader;
import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

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
	protected void doPost(HttpServletRequest req, HttpServletResponse resp)
			throws ServletException, IOException {

		StringBuffer sb = new StringBuffer();

		try {
			BufferedReader reader = req.getReader();
			String line = null;
			while ((line = reader.readLine()) != null) {
				sb.append(line);
			}
		} catch (Exception e) {
			e.printStackTrace();
		}

//		JSONParser parser = new JSONParser();
//		JSONObject req = null;
//		try {
//			req = (JSONObject) parser.parse(sb.toString());
//		} catch (ParseException e) {
//			e.printStackTrace();
//		}
//
//		String login = (String) req.get("login");
//		String pwd = (String) req.get("pwd");

		// DatastoreService datastore =
		// DatastoreServiceFactory.getDatastoreService();
		// UUID keyExercice = UUID.randomUUID();
		// Entity exercice = new Entity(EXERCICE_ENTITY_KEY);
		// exercice.setProperty(keyExercice.toString(), );
		//
		// datastore.put(exercice);
	}
}