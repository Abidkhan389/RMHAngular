import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder, } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { ToastrService } from 'ngx-toastr';
import { CategoryserviceService } from 'src/app/Services/categoryservice.service';


@Component({
  selector: 'app-delete-cagt',
  templateUrl: './delete-cagt.component.html',
  styleUrls: ['./delete-cagt.component.css']
})
export class DeleteCagtComponent implements OnInit {
  showResult:boolean;
  deleteCategory:any;
  //Category_delete_Form:FormGroup;
  constructor(private Categoryservice:CategoryserviceService,private toastr : ToastrService,
    private activeAouter: ActivatedRoute, private fb:FormBuilder, private router: Router ) {
    this.showResult=false;
    //this.Category_delete_Form= new FormGroup({});
   }

  ngOnInit(): void {
    this.OnDelete(this.activeAouter.snapshot.params['id']);
    // this.Category_delete_Form= this.fb.group({
    //   Hqid:[''],
    //   DepartmentId:[''],
    //   Name:[''],
    //   Code:[''],
    //   dbtimeStamp:[]
    // });
    
  }
  // getDetails (id:number)
  // {
  //   this.OnInput(id);
  // }
  OnDelete(val:number){
    this.Categoryservice.DeleteCategory(val).subscribe((data:any)=>{
      this.deleteCategory=data;
      this.showResult=true;
    });
  }
  closeClick(){
    this.router.navigate(['/category']); 
  }

}
