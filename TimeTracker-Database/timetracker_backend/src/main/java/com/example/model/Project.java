package com.example.model;

import org.springframework.data.domain.Persistable;
 
public class Project implements Persistable<Long>{

	private static final long serialVersionUID = 8691351324070609515L;

    private long pid;
     
    private String projectName;
    
    private String projectOwner;
    
	public Project() { }
 
    public Project(long pid, String projectName, String projectOwner) {
       this.pid = pid;
       this.projectName = projectName;
       this.projectOwner = projectOwner;
    }

	@Override
	public Long getId() {
		return pid;
	}

	public String getProjectName() {
		return projectName;
	}

	public void setProjectName(String projectName) {
		this.projectName = projectName;
	}
	
	public String getProjectOwner() {
		return projectOwner;
	}
	
	public void setProjectOwner(String projectOwner) {
		this.projectOwner = projectOwner;
	}
	
	@Override
	public boolean isNew() {
		// TODO Handle this in the future in the controller
		return true;
	}
}