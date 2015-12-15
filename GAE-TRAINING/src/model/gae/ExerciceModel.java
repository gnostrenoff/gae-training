package model.gae;

public class ExerciceModel {
	private String title;
	private String description;
	private String id;
	
	public ExerciceModel(String title, String description, String id) {
		this.title = title;
		this.id = id;
		this.description = description;
	}

	public String getId() {
		return id;
	}

}
