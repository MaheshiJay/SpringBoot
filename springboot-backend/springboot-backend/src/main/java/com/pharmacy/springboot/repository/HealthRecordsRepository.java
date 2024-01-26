package com.pharmacy.springboot.repository;

import com.pharmacy.springboot.model.HealthRecord;
import org.springframework.data.jpa.repository.JpaRepository;

public interface HealthRecordsRepository extends JpaRepository<HealthRecord,String> {
     //crud methods

}