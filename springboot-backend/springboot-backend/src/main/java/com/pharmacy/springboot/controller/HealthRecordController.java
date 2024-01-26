package com.pharmacy.springboot.controller;

import com.pharmacy.springboot.exception.ResourceNotFoundException;
import com.pharmacy.springboot.model.HealthRecord;
import com.pharmacy.springboot.repository.HealthRecordsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/v1/healthrecords")
public class HealthRecordController {

    @Autowired
    private HealthRecordsRepository healthRecordsRepository;

    @GetMapping
    public List<HealthRecord> getAllHealthRecords(){

        return healthRecordsRepository.findAll();
    }

    //create Health record REST API
    @PostMapping
    public HealthRecord createHealthRecord(@RequestBody HealthRecord healthrecord){
        return healthRecordsRepository.save(healthrecord);
    }

    // build get record by id REST API
     @GetMapping("{id}")
     public ResponseEntity<HealthRecord> getHealthRecordById(@PathVariable  long id){
        HealthRecord healthrecord = healthRecordsRepository.findById(String.valueOf(id))
                .orElseThrow(() -> new ResourceNotFoundException("Record not exist with id:" + id));
        return ResponseEntity.ok(healthrecord);
    }

    // build update employee REST API
    @PutMapping("{id}")
    public ResponseEntity<HealthRecord> updateHealthRecord(@PathVariable long id,@RequestBody HealthRecord healthRecordDetails) {
        HealthRecord updateHealthRecord = healthRecordsRepository.findById(String.valueOf(id))
                .orElseThrow(() -> new ResourceNotFoundException("Record not exist with id: " + id));

        updateHealthRecord.setEnrollmentNo(healthRecordDetails.getEnrollmentNo());
        updateHealthRecord.setDoctorReport(healthRecordDetails.getDoctorReport());

        healthRecordsRepository.save(updateHealthRecord);

        return ResponseEntity.ok(updateHealthRecord);
    }

    // build delete employee REST API
    @DeleteMapping("{id}")
    public ResponseEntity<HttpStatus> deleteEmployee(@PathVariable long id){

        HealthRecord healthRecord = healthRecordsRepository.findById(String.valueOf(id))
                .orElseThrow(() -> new ResourceNotFoundException("Record not exist with id: " + id));

        healthRecordsRepository.delete(healthRecord);

        return new ResponseEntity<>(HttpStatus.NO_CONTENT);

    }

}
