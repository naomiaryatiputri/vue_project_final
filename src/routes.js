import Home from './views/Home.vue';
import Applicant from './views/Applicant.vue';
import Employee from './views/Employee.vue';
import EmployeeAdd from './views/EmployeeAdd.vue';
import EmployeeEdit from './views/EmployeeEdit.vue';
import Applicant from './views/Employee.vue';
import ApplicantAdd from './views/ApplicantAdd.vue';
import ApplicantEdit from './views/EmployeeEdit.vue';
import DataDetails from './views/DataDetails.vue';
import Login from './views/Login.vue';

export const routes = [
  { path: '/login', component: Login, name: 'login' },
  { path: '/applicant', component: Applicant, name:'applicant'},  
  { path: '/home', component: Home, name: 'home' },
  { path: '/employee', component: Employee, name:'employee'},
  { path: '/employee/add', component: EmployeeAdd, name: 'employeeadd' },
  { path: '/employee/edit/:id', component: EmployeeEdit, name: 'employeeedit' },
  { path: '/applicant', component: Employee, name:'applicant'},
  { path: '/applicant/add', component: ApplicantAdd, name: 'applicantadd' },
  { path: '/applicant/edit/:id', component: ApplicantAdd, name: 'applicantedit' },
  { path: '/data-details', component: DataDetails, name: 'data-details' },
];