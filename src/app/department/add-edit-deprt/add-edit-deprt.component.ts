import { Component, OnInit } from '@angular/core';
import { Department_Create } from 'src/app/Models/Department/Department-Create';
import { SharedService } from 'src/app/shared.service';
import { FormGroup, FormControl } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-edit-deprt',
  templateUrl: './add-edit-deprt.component.html',
  styleUrls: ['./add-edit-deprt.component.css']
})
export class AddEditDeprtComponent implements OnInit {
  Department_Create_Form:FormGroup;
  Depart_Create:Department_Create;
  showAlert:boolean;
  //showAlertErrorMessage:string;
  //showAlertSucess:boolean;
  showAlertMessage:string;
  result:any;
  constructor(private sharedService:SharedService,private toastr: ToastrService,private router: Router) {
    this.showAlert=false;
    
    //this.showAlertSucess=false;

    this.Depart_Create=new Department_Create();
    this.Department_Create_Form= new FormGroup({});
   }
   
  ngOnInit(): void {
    this.Department_Create_Form=new FormGroup({
      Name: new FormControl(),
      HQID:new FormControl(),
      Code:new FormControl()
    });
  }
  onCreateSubmit(){
    this.Depart_Create=this.Department_Create_Form.value;
    debugger;
    this.sharedService.AddDepartment(this.Depart_Create).subscribe((data:any)=>{
      debugger; 
    this.result=data;
    
      if(this.result.isError)
      {
        this.toastr.error(this.result.message);
        //this.showAlert=true;
        //this.showAlertSucess=false;
        //this.showAlertMessage=this.result.message;
      }
      else{
        this.toastr.success(this.result.message);
        //this.showAlert=true;
        //this.showAlertError=false;
        //this.showAlertMessage=this.result.message;
      }
    });
  }
  closeClick(){
    this.router.navigate(['/department']); 
  }
}
