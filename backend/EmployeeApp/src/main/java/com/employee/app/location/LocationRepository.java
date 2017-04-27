package com.employee.app.location;

import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.repository.query.Param;

public interface LocationRepository extends PagingAndSortingRepository<Location,Long> {
	public Location findByLocationCityIgnoreCase(@Param("locationCity") String locationCity);
}
