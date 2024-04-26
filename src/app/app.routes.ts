import { Routes } from '@angular/router';
import { ContactComponent } from './pages/contact/contact.component';
import { ShopComponent } from './pages/shop/shop.component';
import { ProyectosComponent } from './pages/proyectos/proyectos.component';
import { IndexComponent } from './pages/index/index.component';
import { ProyectoIdComponent } from './pages/proyecto-id/proyecto-id.component';

export const routes: Routes = [
    {path:'',component:IndexComponent},
    {path:'proyectos',component:ProyectosComponent},
    {path:'contact', component:ContactComponent},
    {path:'shop',component:ShopComponent},
    {path:'proyectos/:id',component:ProyectoIdComponent},
];
