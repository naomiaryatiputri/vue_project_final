import Home from './views/Home.vue';
import Applicant from './views/Applicant.vue';
import Attendance from './views/Attendance.vue';
import Employee from './views/Employee.vue';
import EmployeeAdd from './views/EmployeeAdd.vue';
import EmployeeEdit from './views/EmployeeEdit.vue';
import EventAdd from './views/EventAdd.vue';
import ApplicantAdd from './views/ApplicantAdd.vue';
import ApplicantEdit from './views/ApplicantEdit.vue';
import DataDetails from './views/DataDetails.vue';
import LeaveRequestAdd from './views/LeaveRequestAdd.vue';
import LeaveRequestEdit from './views/LeaveRequestEdit.vue';
import LeaveRequest from './views/LeaveRequest.vue';
import Login from './views/Login.vue';

export const routes = [
  
  { path: '/attendance', component: Attendance, name:'attendance'},  
  { path: '/employee', component: Employee, name:'employee'},
  { path: '/employee/add', component: EmployeeAdd, name: 'employeeadd' },
  { path: '/event/add', component: EventAdd, name: 'eventadd' },
  { path: '/employee/edit/:id', component: EmployeeEdit, name: 'employeeedit' },
  { path: '/applicant', component: Applicant, name:'applicant'},
  { path: '/applicant/add', component: ApplicantAdd, name: 'applicantadd' },
  { path: '/applicant/edit/:id', component: ApplicantEdit, name: 'applicantedit' },
  { path: '/data-details', component: DataDetails, name: 'data-details' },
  { path: '/home', component: Home, name: 'home' },
  { path: '/', component: Login, name: 'login' },
  { path: '/leave-request', component: LeaveRequest , name: 'leave-request' },
  { path: '/leave-request/add', component: LeaveRequestAdd , name: 'leave-requestadd' },
  { path: '/leave-request/edit/:id', component: LeaveRequestEdit, name: 'leave-requestedit' },
];