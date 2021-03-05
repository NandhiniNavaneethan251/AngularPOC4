import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, FormBuilder, Validators } from '@angular/forms'




@Component({
  selector: 'app-datefilter',
  templateUrl: './datefilter.component.html',
  styleUrls: ['./datefilter.component.css']
})
export class DatefilterComponent implements OnInit {
  public min=new Date();
  name = 'Angular';
  min_length=5;
  count=0;
  
  dateForm: FormGroup;

  constructor(private fb:FormBuilder) {this.dateForm = this.fb.group({
    name: '',
    datefilter: this.fb.array([]) ,
  }); }

  ngOnInit(): void {

  }
  datefilter() : FormArray {
    return this.dateForm.get("datefilter") as FormArray
  }
   
  newDateFilter(): FormGroup {
    return this.fb.group({
      from: '',
      to: '',
    })
  }
   
  addDateFilter() { 
    this.datefilter().push(this.newDateFilter());
    this.count+=1;
    this.min=new Date();

  }
   
  removeDateFilter(i:number) {
    this.datefilter().removeAt(i);
    this.count-=1;
  }
   
  onSubmit() {
    console.log(this.dateForm.value);
  }
}
