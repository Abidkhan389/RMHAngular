import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { CategoryserviceService } from 'src/app/Services/categoryservice.service';
@Component({
  selector: 'app-list-cagt',
  templateUrl: './list-cagt.component.html',
  styleUrls: ['./list-cagt.component.css']
})
export class ListCagtComponent implements OnInit {
  showResult:boolean;
  categoryList:any=[];
  constructor(public categorysevice:CategoryserviceService,public bsModalRef:BsModalRef) { 
    this.showResult=false;
  }

  ngOnInit(): void {
  }
  OnInput(val1,val2){
    this.categorysevice.ListCategopry(val1,val2).subscribe((data:any)=>{
      this.categoryList=data;
      this.showResult=true;
    });
  }
}
