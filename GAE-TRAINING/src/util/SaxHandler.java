package util;


import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.xml.sax.Attributes;
import org.xml.sax.SAXException;
import org.xml.sax.helpers.DefaultHandler;


 
public class SaxHandler extends DefaultHandler {
	
	private boolean buildingItem = false;
	private String currentProperty = "";
	private JSONArray itemsList;
	private JSONObject itemJson;
	
	@Override
	public void startDocument(){
		itemsList = new JSONArray();
	}

    @Override
    public void startElement(String uri, String localName, String qName, Attributes attributes)
            throws SAXException {
    	//System.out.println(qName);
    	currentProperty = qName;
    	
    	if(qName.equals("item")){
    		buildingItem = true;
    		itemJson = new JSONObject();
    	}
    		

    }
 
 
    @Override
    public void endElement(String uri, String localName, String qName) throws SAXException {
    	//System.out.println(qName);
    	if(qName.equals("item")){		
    		itemsList.add(itemJson);
    		buildingItem = false;
    		itemJson = null;
    	}
    }
 
 
    @Override
    public void characters(char ch[], int start, int length) throws SAXException {
    	String data = new String(ch, start, length);
    	
    	if(itemsList != null && buildingItem && itemJson.get(currentProperty) == null)
    	itemJson.put(currentProperty, data);

    	
    }

	public JSONArray getItemsList() {
		return itemsList;
	}
}