import Home from './views/Home.vue';
import Employee from './views/Employee.vue';
import DataDetails from './views/DataDetails.vue';

export const routes = [
  { path: '/home', component: Home, name: 'home' },
  { path: '/employee', component: Employee, name: 'employee' },
  { path: '/data-details', component: DataDetails, name: 'data-details' },
];