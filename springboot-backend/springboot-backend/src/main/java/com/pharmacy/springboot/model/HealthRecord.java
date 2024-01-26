package com.pharmacy.springboot.model;


import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "healthrecords")

public class HealthRecord {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(name="enrollment_no")
    private String enrollmentNo;

    @Column(name="doctor_report")
    private String doctorReport;


    public void setEnrollmentNo(String enrollmentNo) {
        this.enrollmentNo=enrollmentNo;
    }

    public void setDoctorReport(String doctorReport) {
        this.doctorReport=doctorReport;
    }

    public String getEnrollmentNo() {
        return enrollmentNo;
    }
    public String getDoctorReport() {
        return doctorReport;
    }
}
