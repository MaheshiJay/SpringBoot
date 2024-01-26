import React, {useState, useEffect} from 'react'
import {Link, useHistory, useParams } from 'react-router-dom';
import HealthRecordService from '../services/HealthRecordService.js';


const AddHealthReport = () => {

    const [enrollmentNo, setenrollmentNo] = useState('')
    const [doctorReport, setdoctorReport] = useState('')
    const history = useHistory();
    const {id} = useParams();

    const saveOrUpdateHealthRecord = (e) => {
        e.preventDefault();

        const healthrecord = {enrollmentNo, doctorReport}

        if(id){
            HealthRecordService.updateHealthRecord(id, healthrecord).then((response) => {
                history.push('/healthrecords')
            }).catch(error => {
                console.log(error)
            })

        }else{
            HealthRecordService.createHealthRecord(healthrecord).then((response) =>{

                console.log(response.data)
    
                history.push('/healthrecords');
    
            }).catch(error => {
                console.log(error)
            })
        }
        
    }

    useEffect(() => {

        HealthRecordService.getHealthRecordById(id).then((response) =>{
            setenrollmentNo(response.data.enrollmentNo)
            setdoctorReport(response.data.doctorReport)
        }).catch(error => {
            console.log(error)
        })
    }, [])

    const title = () => {

        if(id){
            return <h2 className = "text-center">Update Record</h2>
        }else{
            return <h2 className = "text-center">Add Record</h2>
        }
    }

    return (
        <div>
           <br /><br />
           <div className = "container">
                <div className = "row">
                    <div className = "card col-md-6 offset-md-3 offset-md-3">
                       {
                           title()
                       }
                        <div className = "card-body">
                            <form>
                                <div className = "form-group mb-2">
                                    <label className = "form-label"> Enrollment No :</label>
                                    <input
                                        type = "text"
                                        placeholder = "Enrollment No"
                                        name = "enrollmentNo"
                                        className = "form-control"
                                        value = {enrollmentNo}
                                        onChange = {(e) => setenrollmentNo(e.target.value)}
                                    >
                                    </input>
                                </div>

                                <div className = "form-group mb-2">
                                    <label className = "form-label"> Doctor Report :</label>
                                    <input
                                        type = "text"
                                        placeholder = "Doctor Report"
                                        name = "doctorReport"
                                        className = "form-control"
                                        value = {doctorReport}
                                        onChange = {(e) => setdoctorReport(e.target.value)}
                                    >
                                    </input>
                                </div>


                                <button className = "btn btn-success" onClick = {(e) => saveOrUpdateHealthRecord(e)} >Submit </button>
                                <Link to="/healthrecords" className="btn btn-danger"> Cancel </Link>
                            </form>

                        </div>
                    </div>
                </div>

           </div>

        </div>
    )
}

export default AddHealthReport