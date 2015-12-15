package util;

import java.io.BufferedReader;

import javax.servlet.http.HttpServletRequest;

import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.json.simple.parser.ParseException;

public class ParseData {

	private StringBuffer sb;

	public ParseData() {
		sb = new StringBuffer();
	};

	public JSONObject parseRequest(HttpServletRequest request) {

		try {
			BufferedReader reader = request.getReader();
			String line = null;
			while ((line = reader.readLine()) != null) {
				sb.append(line);
			}
		} catch (Exception e) {
			e.printStackTrace();
		}

		JSONParser parser = new JSONParser();
		JSONObject req = null;
		try {
			req = (JSONObject) parser.parse(sb.toString());
		} catch (ParseException e) {
			System.out.println("=====================");
			e.printStackTrace();
		}

		return req;
	}

}
