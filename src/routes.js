import Home from './views/Home.vue';
import Applicant from './views/Applicant.vue';
import Employee from './views/Employee.vue';
import EmployeeAdd from './views/EmployeeAdd.vue';
import EmployeeEdit from './views/EmployeeEdit.vue';
import DataDetails from './views/DataDetails.vue';
import Login from './views/Login.vue';

export const routes = [
  { path: '/login', component: Login, name: 'login' },
  { path: '/applicant', component: Applicant, name:'applicant'},  
  { path: '/home', component: Home, name: 'home' },
  { path: '/employee', component: Employee, name:'employee'},
  { path: '/employee/add', component: DataDetails, name: 'employeeadd' },
  { path: '/employee/edit/:id', component: EmployeeEdit, name: 'employeeedit' },
  { path: '/data-details', component: DataDetails, name: 'data-details' },
];