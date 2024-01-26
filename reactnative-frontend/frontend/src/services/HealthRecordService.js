import axios from 'axios'

const HEALTHRECORD_BASE_REST_API_URL = 'http://localhost:8080/api/v1/healthrecords';

class HealthRecordService{

    getAllRecords(){
        return axios.get(HEALTHRECORD_BASE_REST_API_URL)
    }

    createHealthRecord(healthrecord){
        return axios.post(HEALTHRECORD_BASE_REST_API_URL, healthrecord)
    }

    getHealthRecordById(healthrecordId){
        return axios.get(HEALTHRECORD_BASE_REST_API_URL + '/' + healthrecordId);
    }

    updateHealthRecord(healthrecordId, healthrecord){
        return axios.put(HEALTHRECORD_BASE_REST_API_URL + '/' +healthrecordId, healthrecord );
    }

    deleteHealthRecord(healthrecordId){
        return axios.delete(HEALTHRECORD_BASE_REST_API_URL + '/' + healthrecordId);
    }
}

export default new HealthRecordService();