package com.employee.app.location;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Table;
import javax.persistence.Id;


@Entity
@Table(name="LOCATION")
public class Location {	
	
	    @Id
	    @GeneratedValue
	    @Column(name="LOCATION_ID")
	    private long Id;

	    @Column(name="LOCATION_NAME")
	    private String locationName;

		public long getId() {
			return Id;
		}

		public void setId(long id) {
			Id = id;
		}

		public String getLocationName() {
			return locationName;
		}

		public void setLocationName(String locationName) {
			this.locationName = locationName;
		}
	    
}
