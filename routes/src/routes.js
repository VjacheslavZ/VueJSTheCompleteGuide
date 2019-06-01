import UserComp from './Components/User';
import AboutComp from './Components/About/About_us';
import HomeComp from  './Components/Home';
import AboutContentComp from './Components/About/About_content';

export const routes = [
  { path: '/user', component: UserComp, children: [
      { path: ':id', component: UserComp },
  ]},
  { path: '/about_us', component: AboutComp, children: [
      { path: 'show', component: AboutContentComp },
    ]},
  { path: '', component: HomeComp },
];
