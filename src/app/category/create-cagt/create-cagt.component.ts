import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder ,FormControl, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Category_create } from 'src/app/Models/Category/Category_create';
import { CategoryserviceService } from 'src/app/Services/categoryservice.service';

@Component({
  selector: 'app-create-cagt',
  templateUrl: './create-cagt.component.html',
  styleUrls: ['./create-cagt.component.css']
})
export class CreateCagtComponent implements OnInit {
  Category_create_Form:FormGroup;
  category_Create:Category_create;
  showAlert:boolean;
  showAlertMessage:string;
  result:any;
  Catg:any;
  constructor(private toastr: ToastrService,public Categoryservice : CategoryserviceService,private router: Router,private fb:FormBuilder)
  {
    this.showAlert=false;
    this.category_Create=new Category_create();
    this.Category_create_Form=new FormGroup({});
  }

  ngOnInit(): void {
    this.Category_create_Form= this.fb.group({
      Hqid:['',[Validators.required]],
      DepartmentId:['',[Validators.required]],
      Name:['',[Validators.required,Validators.minLength(8)]],
      Code:['']
    });
  }
  onCreateSubmit(){

    this.category_Create=this.Category_create_Form.value;
    debugger;
    this.Categoryservice.AddCategory(this.category_Create).subscribe((data:any)=>{
      debugger;
      this.result=data;
      if(this.result.isError)
      {
        this.toastr.error(this.result.message);
      }
      else{
        this.toastr.success(this.result.message);
      }
    });
  }
  closeClick(){
    this.router.navigate(['/category']);
  }
}
