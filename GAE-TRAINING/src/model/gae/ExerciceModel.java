package model.gae;

public class ExerciceModel {
	private String title;
	private String description;
	private String id;
	private String time;
	
	public ExerciceModel(String title, String description, String id, String time) {
		this.title = title;
		this.id = id;
		this.description = description;
		this.time = time;
	}

	public String getId() {
		return id;
	}

}
