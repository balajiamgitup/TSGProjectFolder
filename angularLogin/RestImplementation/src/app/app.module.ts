import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ToastrModule } from 'ngx-toastr';
import { OrdersComponent } from './components/orders/orders.component';
import { CommonModule } from '@angular/common';
import { provideRouter, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ItemComponent } from './components/item/item.component';
@NgModule({
  providers: [provideRouter(AppRoutingModule)],
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    OrdersComponent,
    ItemComponent,
  ],
  exports:[FormsModule],
  imports: [
    FormsModule,
    RouterModule,
    BrowserModule,
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    ToastrModule.forRoot(),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
