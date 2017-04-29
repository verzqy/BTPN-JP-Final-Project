package com.employee.app;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.Bean;

import com.employee.app.employee.Employee;
import com.employee.app.employee.EmployeeRepository;
import com.employee.app.location.Location;
import com.employee.app.location.LocationRepository;

@SpringBootApplication
public class EmployeeAppApplication {

	public static void main(String[] args) {
		SpringApplication.run(EmployeeAppApplication.class, args);
	}

	@Autowired
	private EmployeeRepository employeeRepository;
	@Autowired
	private LocationRepository locationRepository;

	List<Location> dummyLocation = new ArrayList<Location>();
	List<Employee> dummyEmployee = new ArrayList<Employee>();
	
	@Bean
	public CommandLineRunner printAll(ApplicationContext ctx){
		return args -> {
			initialLocationDummy();
			initialEmployeeDummy();
		};
	}
	
	private void initialLocationDummy()
	{
		dummyLocation.add(new Location("Australia"));
		dummyLocation.add(new Location("Bali"));
		dummyLocation.add(new Location("Bandung"));
		dummyLocation.add(new Location("Jakarta"));
		dummyLocation.add(new Location("Singapura"));
		dummyLocation.add(new Location("Vietnam"));
		dummyLocation.add(new Location("Yogyakarta"));
		locationRepository.save(dummyLocation);
	}
	
	private void initialEmployeeDummy()
	{
		dummyEmployee.add(new Employee("Steve","Jobs","Male",convertDate("24-02-1955"),"American","Married", "+6281245681891"
				,"Java Bootcamp", "Contract", null, convertDate("07-04-1990"), "SE - AN", "CDC AsteRx","stevejobs@gmail.com", dummyLocation.get(4)));
		dummyEmployee.add(new Employee("Jackie","Chan","Male",convertDate("07-04-1954"),"Hong Kong","Married", "+6281245681845"
					,"Java Bootcamp", "Contract", null, convertDate("06-05-1992"), "SE - AN", "CDC AsteRx","jackiechan@gmail.com", dummyLocation.get(0)));
		dummyEmployee.add(new Employee("Donny","Yen","Male",convertDate("27-07-1963"),"China","Married", "+6281245681891"
				,"Sub Division1", "Permanent", null, convertDate("10-04-1996"), "SE - AN", "SWD Red","yen.donny@gmail.com", dummyLocation.get(1)));
		dummyEmployee.add(new Employee("Andy","Lau","Male",convertDate("27-09-1961"),"Hong Kong","Single", "+6281245681873"
				,"Java Bootcamp", "Contract", null, convertDate("05-04-1992"), "SE - AN", "SWD Red","andy.lau@gmail.com", dummyLocation.get(2)));
		dummyEmployee.add(new Employee("Steven","Chow","Male",convertDate("22-06-1962"),"Hong Kong","Single", "+6281245681888"
				,"Java Bootcamp", "Permanent", null, convertDate("06-11-1997"), "SE - AP", "CDC AsteRx","stevenchow@gmail.com", dummyLocation.get(3)));
		dummyEmployee.add(new Employee("Jet","Li","Male",convertDate("26-04-1963"),"China","Single", "+6281245681823"
				,"Java Bootcamp", "Contract", null, convertDate("06-12-1992"), "SE - AN", "SWD Green","jetli@gmail.com", dummyLocation.get(3)));
		dummyEmployee.add(new Employee("Bruce","Lee","Male", convertDate("27-11-1940"),"Hong Kong","Married", "+6281245681899"
				,"Java Bootcamp", "Contract", convertDate("06-10-2007"), convertDate("06-04-1988"), "SE - AN", "CDC AsteRx","lee.brucee@gmail.com", dummyLocation.get(4)));
		dummyEmployee.add(new Employee("Sammo","Hung","Male",convertDate("07-01-1952"),"Hong Kong","Married", "+6281245681877"
				,"Java Bootcamp", "Contract", null, convertDate("06-01-1992"), "SE - AP", "SWD Blue","sammo.hung@gmail.com", dummyLocation.get(5)));
		dummyEmployee.add(new Employee("John","Travolta","Male",convertDate("18-02-1954"),"American","Married", "+62812456818271"
				,"Sub Division2", "Permanent", null, convertDate("07-04-1998"), "SE - PG", "SWD Green","travolta.john@gmail.com", dummyLocation.get(0)));
		dummyEmployee.add(new Employee("John","Cena","Male",convertDate("23-04-1977"),"American","Married", "+6281245681864"
				,"Java Bootcamp", "Contract", convertDate("06-03-2012"), convertDate("15-07-2001"), "SE - JP", "SWD Blue","cena.john@gmail.com", dummyLocation.get(1)));
		dummyEmployee.add(new Employee("Steve","Austin","Male",convertDate("18-12-1964"),"American","Married", "+6281245681851"
				,"Java Bootcamp", "Contract", convertDate("06-09-2008"), convertDate("06-04-2005"), "SE - JP", "SWD Green","steve.austin@gmail.com", dummyLocation.get(4)));
		dummyEmployee.add(new Employee("Dwayne","Johnson","Male",convertDate("02-05-1972"),"American","Married", "+6281245681825"
				,"Java Bootcamp", "Contract", null, convertDate("06-09-2007"), "SE - PG", "CDC AsteRx","johnson.dwayne@gmail.com", dummyLocation.get(4)));
		dummyEmployee.add(new Employee("Jason","Statham","Male",convertDate("26-07-1967"),"British","Single", "+6281245681826"
				,"Java Bootcamp", "Permanent", null, convertDate("06-07-2001"), "SE - AP", "CDC AsteRx","jasonstatham@gmail.com", dummyLocation.get(0)));		
		dummyEmployee.add(new Employee("Johnny","Deep","Male",convertDate("09-06-1963"),"American","Married", "+6281245681874"
				,"Java Bootcamp", "Contract", null, convertDate("06-05-1999"), "SE - AP", "SWD Blue","johnny.deep@gmail.com", dummyLocation.get(6)));
		dummyEmployee.add(new Employee("Gal ","Gadot","Female",convertDate("30-04-1985"),"Israel","Single", "+6281245681911"
				,"Java Bootcamp", "Contract", null, convertDate("19-04-2010"), "SE - PG", "CDC AsteRx","gal.gadot@gmail.com", dummyLocation.get(5)));
		dummyEmployee.add(new Employee("Emma","Stone","Female",convertDate("06-11-1988"),"American","Single", "+6281245681789"
				,"Java Bootcamp", "Permanent", null, convertDate("21-04-2012"), "SE - JP", "SWD Pink","emma.stone@gmail.com", dummyLocation.get(1)));
		dummyEmployee.add(new Employee("Scarlett","Johansson","Female",convertDate("22-11-1984"),"American","Widowed", "+6281245681212"
				,"Java Bootcamp", "Contract", null, convertDate("06-07-2008"), "FA-FA4", "Finance & Accounting","scarlett.johansson@gmail.com", dummyLocation.get(2)));
		dummyEmployee.add(new Employee("Angelina","Jolie","Female",convertDate("04-06-1975"),"American","Single", "+6281245681616"
				,"Java Bootcamp", "Permanent", convertDate("22-06-2015"), convertDate("22-08-2001"), "SE - AP", "CDC AsteRx","angelina.jolie@gmail.com", dummyLocation.get(5)));		
		dummyEmployee.add(new Employee("Michelle","Rodriguez","Female",convertDate("12-07-1978"),"American","Single", "+6281245681518"
				,"Java Bootcamp", "Contract", null, convertDate("25-04-2015"), "SE - JP", "SWD Pink","rodriguez.michelle@gmail.com", dummyLocation.get(6)));		
		employeeRepository.save(dummyEmployee);
	}
	
	private Date convertDate(String d) {
        SimpleDateFormat formatter = new SimpleDateFormat("dd-MM-yyyy");
        try {
            Date date = formatter.parse(d);
            return date;
        } catch (ParseException e) {
            e.printStackTrace();
            return new Date();
        }
	}
}


