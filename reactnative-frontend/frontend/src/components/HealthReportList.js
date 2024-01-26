import React, {useState, useEffect} from 'react'
import HealthRecordService from '../services/HealthRecordService'
import { Link } from 'react-router-dom'

const HealthReportList = () => {

    const [healthrecords, setHealthRecords] = useState([])

    useEffect(() => {

        getAllRecords();
    }, [])
    
    const getAllRecords = () => {
        HealthRecordService.getAllRecords().then((response) => {
            setHealthRecords(response.data)
            console.log(response.data);
        }).catch(error =>{
            console.log(error);
        })
    }

    const deleteHealthRecord = (recordId) => {
        HealthRecordService.deleteHealthRecord(recordId).then((response) =>{
            getAllRecords();
 
        }).catch(error =>{
            console.log(error);
        })
         
     }

    return (
        <div className = "container">
            <h2 className = "text-center"> Health Records List </h2>
              <Link to = "/add-healthrecord" className = "btn btn-primary mb-2" > Add Employee </Link>
         
               <table className="table table-bordered table-striped">
                <thead>
                    <th> ID </th>
                    <th> Enrollment No </th>
                    <th> Doctor Report </th>
                </thead>
                <tbody>
                    {
                        healthrecords.map(
                            healthrecord =>
                            <tr key = {healthrecord.id}> 
                                <td> {healthrecord.id} </td>
                                <td> {healthrecord.enrollmentNo} </td>
                                <td>{healthrecord.doctorReport}</td>
                                <td>
                                    <Link className="btn btn-info" to={`/edit-healthrecord/${healthrecord.id}`} >Update</Link>
                                    <button className = "btn btn-danger" onClick = {() => deleteHealthRecord(healthrecord.id)}
                                    style = {{marginLeft:"10px"}}> Delete</button>
                              
                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}

export default HealthReportList