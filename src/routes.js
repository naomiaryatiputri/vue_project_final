import Home from './views/Home.vue';
import Applicant from './views/Applicant.vue';
import Attendance from './views/Attendance.vue';
import Employee from './views/Employee.vue';
import EmployeeAdd from './views/EmployeeAdd.vue';
import EmployeeEdit from './views/EmployeeEdit.vue';
import DataDetails from './views/DataDetails.vue';
import AddLeaveRequest from './views/AddLeaveRequest.vue';
import LeaveRequest from './views/LeaveRequest.vue';
import Login from './views/Login.vue';

export const routes = [

  { path: '/applicant', component: Applicant, name:'applicant'},  
  { path: '/attendance', component: Attendance, name:'attendance'},  
  { path: '/employee', component: Employee, name:'employee'},
  { path: '/employee/add', component: DataDetails, name: 'employeeadd' },
  { path: '/employee/edit/:id', component: EmployeeEdit, name: 'employeeedit' },
  { path: '/data-details', component: DataDetails, name: 'data-details' },
  { path: '/home', component: Home, name: 'home' },
  { path: '/login', component: Login, name: 'login' },
  { path: '/leave-request', component: LeaveRequest , name: 'leave-request' },
  { path: '/leave-request/add', component: AddLeaveRequest , name: 'leave-requestadd' },

];