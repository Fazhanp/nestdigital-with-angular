import { Routes } from '@angular/router';
import { Navbar } from './navbar/navbar';
import { Home } from './page/home/home';
import { Aboutus } from './page/aboutus/aboutus';
import { Services } from './page/services/services';
import { Contactus } from './page/contactus/contactus';
import { Digital } from './page/digital/digital';
import { Cyber } from './page/cyber/cyber';
import { Software } from './page/software/software';
import { Cloud } from './page/cloud/cloud';

export const routes: Routes = [
    {path:"", component:Home},
    {path:'about', component:Aboutus},
    {path:'services', component:Services},
    {path:'contactus', component:Contactus},
    {path:'digital', component:Digital},
    {path:'cyber', component:Cyber},
    {path:'software', component:Software},
    {path:'cloud', component:Cloud},
    {path:'home',component:Home},
];
