import Home from './views/Home.vue';
import Employee from './views/Employee.vue';

export const routes = [
  { path: '/', component: Home, name: 'home' },
  { path: '/employee', component: Employee, name: 'employee' },
];