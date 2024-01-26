package com.pharmacy.springboot;

import com.pharmacy.springboot.model.HealthRecord;
import com.pharmacy.springboot.repository.HealthRecordsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class SpringbootBackendApplication implements CommandLineRunner {

	public static void main(String[] args) {
		SpringApplication.run(SpringbootBackendApplication.class, args);

	}

	@Autowired
	private HealthRecordsRepository healthRecordsRepository;

	@Override
	public void run(String... args) throws Exception {

		//HealthRecord healthrecord1 = new HealthRecord();
		//healthrecord1.setEnrollmentNo("SCI-001");
		//healthrecord1.setDoctorReport("Fever");
		//healthRecordsRepository.save(healthrecord1);

		//HealthRecord healthrecord2 = new HealthRecord();
		//healthrecord2.setEnrollmentNo("ART-002");
		//healthrecord2.setDoctorReport("Cold");
		//healthRecordsRepository.save(healthrecord2);

		//HealthRecord healthrecord3 = new HealthRecord();
		//healthrecord3.setEnrollmentNo("COM-001");
		//healthrecord3.setDoctorReport("Vomit");
		//healthRecordsRepository.save(healthrecord3);



	}
}
