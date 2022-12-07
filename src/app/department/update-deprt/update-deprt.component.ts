import { Component, OnInit } from '@angular/core';
import { FormBuilder ,FormGroup} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { ToastrService } from 'ngx-toastr';
import { Update_department } from 'src/app/Models/Department/Department-Update';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-update-deprt',
  templateUrl: './update-deprt.component.html',
  styleUrls: ['./update-deprt.component.css']
})
export class UpdateDeprtComponent implements OnInit {
  updatedeprt:Update_department;
  showAlert:boolean;
  Department_Update_Form:FormGroup;
  id:number;
  updatedepartmentobject:any;
  showAlertMessage:string;
  constructor(private sharedService:SharedService,private fb: FormBuilder ,private taoster:ToastrService,private activeAouter: ActivatedRoute, private router: Router ) { 
    this.updatedeprt=new Update_department();
    this.showAlert=false;
    this.Department_Update_Form= new FormGroup({});
  }
  
  ngOnInit(): void {
    this.getDetail(this.activeAouter.snapshot.params['id']);
    this.Department_Update_Form= this.fb.group({
      Name: [''],
      HQID:[''],
      Code:['']
    });
  }
  getDetail(id)
  {
    this.sharedService.GetDepartment(id)
    .subscribe((data:any)=>{
      debugger;
      this.Department_Update_Form.setValue({
        Name: data.result.name,
        HQID: data.result.hqid,
        Code: data.result.code
      });
      this.id=id;
      console.log(data);
    });
  }
  

  onUpdateSubmit(){
    this.updatedeprt=this.Department_Update_Form.value;
    this.sharedService.UpdateDepartment(this.id,this.updatedeprt).subscribe((data:any)=>{
        debugger;
        this.updatedepartmentobject=data;
        this.showAlert=true;
      if(this.updatedepartmentobject.isError)
      {
        this.taoster.error(this.updatedepartmentobject.message);
      }
      else
      {
        this.taoster.success(this.updatedepartmentobject.message);
      }
    });
  }
  closeClick(){
    this.router.navigate(['/department']); 
  }
  // OnInput(id,hqid,name,code){
  //   this.updatedeprt.hqid=hqid;
  //   this.updatedeprt.name=name;
  //   this.updatedeprt.code=code;
  //   debugger;
  //   this.sharedService.UpdateDepartment(id,this.updatedeprt).subscribe((data:any)=>{
  //     debugger; 
  //     this.updatedepartmentobject=data;
  //     this.showResult=true;
  //   });
  // }

}
