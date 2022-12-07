import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxPaginationModule } from 'ngx-pagination';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DepartmentComponent } from './department/department.component';
import { ShowDeleteDeprtComponent } from './department/show-delete-deprt/show-delete-deprt.component';
import { AddEditDeprtComponent } from './department/add-edit-deprt/add-edit-deprt.component';
import { CategoryComponent } from './category/category.component';
import { ShowDeleteCatgComponent } from './category/show-delete-catg/show-delete-catg.component';
import { AddEditCatgComponent } from './category/add-edit-catg/add-edit-catg.component';
import { SharedService } from './shared.service';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { DeleteDeprtComponent } from './department/delete-deprt/delete-deprt.component';
import { ListDeprtComponent } from './department/list-deprt/list-deprt.component';
import { UpdateDeprtComponent } from './department/update-deprt/update-deprt.component';
import { GetbyidDeprtComponent } from './department/getbyid-deprt/getbyid-deprt.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ModalModule } from 'ngx-bootstrap/modal';
import { GetbyidCagtComponent } from './category/getbyid-cagt/getbyid-cagt.component';
import { DeleteCagtComponent } from './category/delete-cagt/delete-cagt.component';
import { CreateCagtComponent } from './category/create-cagt/create-cagt.component';
import { ListCagtComponent } from './category/list-cagt/list-cagt.component';
import { UpdateCagtComponent } from './category/update-cagt/update-cagt.component';
import { ToastrModule } from 'ngx-toastr';
import {CategoryserviceService} from './Services/categoryservice.service';
import { OrderEntryComponent } from './order-entry/order-entry.component';
import { AddOrdentryComponent } from './order-entry/add-ordentry/add-ordentry.component';
import { DeleteOrdentryComponent } from './order-entry/delete-ordentry/delete-ordentry.component';
import { UpdateOrdentryComponent } from './order-entry/update-ordentry/update-ordentry.component';
import { GetByIDOrdentryComponent } from './order-entry/get-by-id-ordentry/get-by-id-ordentry.component';
import { GetListOrdentryComponent } from './order-entry/get-list-ordentry/get-list-ordentry.component';
import { ListOrdentryComponent } from './order-entry/list-ordentry/list-ordentry.component';
import {OrderEntryService} from './Services/order-entry.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { OrderComponent } from './order/order.component';
import { ListOrderComponent } from './order/list-order/list-order.component';
import { EditOrderComponent } from './order/edit-order/edit-order.component';
import { DeleteOrderComponent } from './order/delete-order/delete-order.component';
import { CreateOrderComponent } from './order/create-order/create-order.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component'

@NgModule({
  declarations: [
    AppComponent,
    DepartmentComponent,
    ShowDeleteDeprtComponent,
    AddEditDeprtComponent,
    CategoryComponent,
    ShowDeleteCatgComponent,
    AddEditCatgComponent,
    DeleteDeprtComponent,
    ListDeprtComponent,
    UpdateDeprtComponent,
    GetbyidDeprtComponent,
    GetbyidCagtComponent,
    DeleteCagtComponent,
    CreateCagtComponent,
    ListCagtComponent,
    UpdateCagtComponent,
    OrderEntryComponent,
    AddOrdentryComponent,
    DeleteOrdentryComponent,
    UpdateOrdentryComponent,
    GetByIDOrdentryComponent,
    GetListOrdentryComponent,
    ListOrdentryComponent,
    OrderComponent,
    ListOrderComponent,
    EditOrderComponent,
    DeleteOrderComponent,
    CreateOrderComponent,
    HomeComponent,
    LoginComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ModalModule.forRoot(),
    ToastrModule.forRoot(),
    NgbModule,
    NgxPaginationModule,
  ],
  providers: [SharedService,CategoryserviceService,OrderEntryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
