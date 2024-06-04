function Hospital(name, doctors, patients) {
    this.name = name;
    this.doctors = doctors;
    this.patients = patients;

    // add patient
    this.addPatients = function addPatients (id,name) {
        return this.patients[`patient_${id}`] = {
            name,
            diseases : {},
            doctors: {}
        }
    };

    //add diseases
    this.addDiseases = function addDiseases(patient_id, disease_id, name) {
        return this.patients[`patient_${patient_id}`].diseases[`disease_${disease_id}`] = {
            name
        }
    };

    //remove disease from a patient 
    this.removeDisease = function removeDisease(patient_id, disease_id) { 
        delete this.patients[`patient_${patient_id}`].diseases[`disease_${disease_id}`]
    };

    //remove patient 
    this.removePatient = function removePatient(patient_id) {
        delete this.patients[`patient_${patient_id}`]
    };

    //add doctor 
    this.addDoctors = function addDoctors (id,name) {
        return this.doctors[`doctor_${id}`] = {
            name
        }
    };

    //remove doctor
    this.removeDoctor = function removeDoctor(doctor_id) {
        delete this.doctors[`doctor_${doctor_id}`]
    };

    //update doctor name 
    this.updateDoctorName = function updateDoctorName(doctor_id, name) {
        return this.doctors[`doctor_${doctor_id}`] = {
            name
        }
    };

    //assign doctor to patient  ??
    this.assignDoctorToPatient = function assignDoctorToPatient(patient_id, doctor_id) {
        return this.patients[`patient_${patient_id}`].doctors[`doctor_${doctor_id}`] = this.doctors[`doctor${doctor_id}`]
    };

    //get the doctor of specific patient ??
};

let hospital = new Hospital('new hospital', doctors = {} , patients = {});
