import { Component, OnInit , Inject} from '@angular/core';
import {UserService} from '../user.service';
import {FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms';
import {MatDialog, MatDialogRef,MAT_DIALOG_DATA} from '@angular/material/dialog';
import { HttpErrorResponse } from '@angular/common/http';


@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {
  updateDataForm:FormGroup;
  
  constructor(private formbuilder: FormBuilder,
  private userservice: UserService,
  private dialogref: MatDialogRef<UpdateUserComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any
  ) { 

    this.updateDataForm = this.formbuilder.group({
      name: ['', Validators.required],
      email: ['', Validators.required]
    });


  }

  ngOnInit(): void {
    debugger
    this.updateDataForm.controls['name'].setValue(this.data.name);
    this.updateDataForm.controls['email'].setValue(this.data.email);


  }

  updateUser(){
    let updateddata={
      "id": this.data["id"],
      "name": this.updateDataForm.controls['name'].value,
      "email": this.updateDataForm.controls['email'].value
  }
    

  this.userservice.updateUser(updateddata).subscribe((result:any)=>{
    console.log("user dfdsfsdfdsfdsf")
  },
  (err:HttpErrorResponse)=>{
    console.log(err.toString());
  }
  
  )



  }




}
