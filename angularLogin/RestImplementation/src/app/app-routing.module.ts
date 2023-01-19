
import { Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { AuthGuard } from './guards/auth.guard';
import { OrdersComponent } from './components/orders/orders.component';
import { ItemComponent } from './components/item/item.component';

export const AppRoutingModule: Routes = [
  {path:"login",component:LoginComponent},
  {path:"register",component:RegisterComponent},
 {path:"dashboard",component:DashboardComponent,canActivate:[AuthGuard]},
 {path:"",component:LoginComponent},
 {path:"orders",component:OrdersComponent},
 {path:"item",component:ItemComponent}
];

