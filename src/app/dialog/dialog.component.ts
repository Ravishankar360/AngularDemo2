import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormsModule, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {
  freshnesslist=["New Brand","Second version","refurness"];
  productForm!: FormGroup   ;
  constructor(private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.productForm= this.formBuilder.group({
      productName:['',Validators.required],
      category:['',Validators.required],
      freshness:['',Validators.required],
      date:['',Validators.required],
      price:['',Validators.required],
      comment:['',Validators.required]
    }) 
  }

  addProduct(){
    console.log(this.productForm.value);
  }

}
