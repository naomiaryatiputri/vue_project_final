import Home from './views/Home.vue';
import Employee from './views/Employee.vue';
import Applicant from './views/Applicant.vue';
import DataDetails from './views/DataDetails.vue';
import Login from './views/Login.vue';

export const routes = [
  { path: '/login', component: Login, name: 'login' },  
  { path: '/home', component: Home, name: 'home' },
  { path: '/employee', component: Employee, name: 'employee' },
  { path: '/applicant', component: Applicant, name: 'applicant' },
  { path: '/data-details', component: DataDetails, name: 'data-details'},
];