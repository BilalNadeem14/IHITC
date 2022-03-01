export const urls = {
  v1: 'https://beta.lmis.gov.pk/ihitc/api/',
  // 'https://beta.lmis.gov.pk/kpivp/api/save_patient?token=aY9d3eR&patient_name=abc&village=aaa&phone=123'
};
export const base_url = urls.v1;
export const endpoints = {
  auth: {
    // login: '/user/login',   //'/auth/login'
    // signup: '/user/signup',
  },
  TestReults: 'patient_lab_info',
  ResultDetails: 'patient_see_report'
  // registerPatient: '/save_patient',
  // searchPatient: '/search',
  // saveAdditionalInfo: '/save_patient_additional_info',
  // saveLabOrder: '/save_patient_lab_order',
  // saveNotes: '/save_patient_notes',
  // saveDiagnosis: '/save_patient_diagnosis',

  // addClient: '/add_client.php',
  // searchClients: '/search_clients.php',
  // addVisit: '/add_visit.php',
  // viewDetails: '/client_detail.php'
};
const configs = {
  endpoints: endpoints,
  base_url: base_url,
};

export default configs;
