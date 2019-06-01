import UserComp from './Components/User';
import AboutComp from  './Components/About_us';
import HomeComp from  './Components/Home';

export const routes = [
  { path: '/user', component: UserComp },
  { path: '/about_us', component: AboutComp },
  { path: '', component: HomeComp },
];
