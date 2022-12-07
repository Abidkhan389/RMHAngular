import { Component, OnInit,Input } from '@angular/core';
import { FormGroup,FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { ToastrService } from 'ngx-toastr';
import { updatecategory } from 'src/app/Models/Category/CategoryUpdate';

import { CategoryserviceService } from 'src/app/Services/categoryservice.service';

@Component({
  selector: 'app-update-cagt',
  templateUrl: './update-cagt.component.html',
  styleUrls: ['./update-cagt.component.css']
})
export class UpdateCagtComponent implements OnInit {
  categoryupdate:updatecategory;
  showAlert:boolean;
  updatecategoryobject:any;
  showAlertMessage:string;
  result:any;
  Category_update_Form:FormGroup;
  id:number;
  constructor(public Categoryservice: CategoryserviceService, private fb: FormBuilder , private toastr: ToastrService,private activeAouter: ActivatedRoute, private router: Router) { 
    this.categoryupdate= new updatecategory();
    this.showAlert=false;
    this.Category_update_Form= new FormGroup({});
  }


  ngOnInit(): void {
   
    this.getDetail(this.activeAouter.snapshot.params['id']);
    this.Category_update_Form= this.fb.group({
      Hqid:[''],
      DepartmentId:[''],
      Name:[''],
      Code:['']
    });
    // Editcategory(this.categoryupdate.Id, this.categoryupdate)
    // {

    // }
  }

  getDetail(id)
  {
    this.Categoryservice.GetCategory(id)
        .subscribe((data:any) => {
          debugger;
          this.Category_update_Form.setValue({
            Hqid: data.result.hqid,
            DepartmentId:data.result.departmentId,
            Name:data.result.name,
            Code:data.result.code
          });
          this.id=id;
          console.log(data);
        });
  }
  onUpdateSubmit(){
    this.categoryupdate=this.Category_update_Form.value;
    debugger;
    this.Categoryservice.Updatecategory(this.id,this.categoryupdate).subscribe((data:any)=>{
      debugger;
     this.updatecategoryobject=data;
     this.showAlert=true;
     
      if(this.updatecategoryobject.isError)
      {
        this.toastr.error(this.updatecategoryobject.message);
      }
      else
      {
         this.toastr.success(this.updatecategoryobject.message);
      }
    });
    
  }
  closeClick(){
    this.router.navigate(['/category']); 
  }
  

  // OnInput(id,hqid,departid,name,code){
  //   this.categoryupdate.HQID=hqid;
  //   this.categoryupdate.DepartmentID=departid;
  //   this.categoryupdate.Name=name;
  //   this.categoryupdate.Code=code;
  //   debugger;
  //   this.Categoryservice.Updatecategory(id,this.categoryupdate).subscribe((data:any)=>{
  //     debugger;
  //    this.updatecategoryobject=data;
  //    this.showResult=true;
  //   });
  // }
}
