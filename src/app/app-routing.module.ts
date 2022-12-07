import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DepartmentComponent } from './department/department.component';
import { CategoryComponent } from './category/category.component';
import { OrderEntryComponent } from './order-entry/order-entry.component';
import { CreateCagtComponent } from './category/create-cagt/create-cagt.component';
import { UpdateCagtComponent } from './category/update-cagt/update-cagt.component';
import { AddEditDeprtComponent } from './department/add-edit-deprt/add-edit-deprt.component';
import { AddOrdentryComponent } from './order-entry/add-ordentry/add-ordentry.component';
import { OrderComponent } from './order/order.component';
import { CreateOrderComponent } from './order/create-order/create-order.component';
import { DeleteCagtComponent } from './category/delete-cagt/delete-cagt.component';
import { UpdateDeprtComponent } from './department/update-deprt/update-deprt.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  // {path: '' ,redirectTo: '/home', pathMatch: 'full'},

  {path: '' ,redirectTo: '/home', pathMatch: 'full'},

  {
    //{ path: '**', redirectTo: '' }
    path: 'home' ,
    component: HomeComponent,
    children: [
      //#region  login
      { path: 'login' , component:LoginComponent},
      //#endregion
      //#region Components
      {path:'category',component:CategoryComponent},
      {path:'department',component:DepartmentComponent},
      {path:'orderentry',component:OrderEntryComponent},
      {path:'Order',component:OrderComponent},
      //#endregion
      //#region CategoryCRUD
      {path:'CreateCategory',component:CreateCagtComponent},
      // {path:'EditCategory/id',component:UpdateCagtComponent},
      {path: 'Category/edit/:id',component: UpdateCagtComponent,data: { title: 'Update Category' }},
      {path: 'Category/delete/:id', component:DeleteCagtComponent},
      //#endregion
      //#region  DepartmentCRUD
      {path:'CreateDepartment',component:AddEditDeprtComponent},
      {path: 'department/edit/:id',component: UpdateDeprtComponent},
      //#endregion
      //#region OrderEntryCRUD
      {path:'CreateOrderEntry',component:AddOrdentryComponent},
      //#endregion
      //#region OrderCRUD
      {path:'CreateOrder',component:CreateOrderComponent}
      //#endregion
    ]

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
