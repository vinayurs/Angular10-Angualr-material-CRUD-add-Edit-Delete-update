import { Component, OnInit } from '@angular/core';
import {UserService} from './user.service';
import { FormGroup, FormControl, FormBuilder, Validators} from '@angular/forms';
import {HttpErrorResponse} from '@angular/common/http';
import {MatDialogModule} from '@angular/material/dialog';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import {UpdateUserComponent} from './update-user/update-user.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'user';

  public insertDataForm: FormGroup;
 
  displayedColumns: string[] = [ 'name', 'email','customColumn1'];
  PeriodicElement;

  constructor(private userService: UserService, 
    private formbuilder: FormBuilder, 
    public dialog: MatDialog){

    this.insertDataForm = this.formbuilder.group({
      name: ['', Validators.required],
      email: ['', Validators.required]
    });

    this.getUserdata()
  }
  ngOnInit(){

  }
  getUserdata(){
    debugger
    this.userService.getUser().subscribe((result:any)=>{
      debugger
      console.log(result)
      this.PeriodicElement=result
    },
    (err:HttpErrorResponse)=>{
      console.log(err.toString());
    })
  }

  insertUser(){
    debugger
   let data ={
      "name": this.insertDataForm.controls["name"].value,
      "email": this.insertDataForm.controls["email"].value
  }

  this.userService.insertUser(data).subscribe((result:any)=>{
    console.log("Inserted Succesfully")
  },
  (err:HttpErrorResponse)=>{
    console.log(err.toString());
  })

  this.getUserdata()
  }



  deleteUser(id){
debugger
    this.userService.deleteUser(id).subscribe((result:any)=>{
      console.log("user deleted")
    },
    (err:HttpErrorResponse)=>{
      console.log(err.toString());
    }
    
    )

    this.getUserdata()
  }

  openpopup(element){
    debugger

    const dialogRef = this.dialog.open(UpdateUserComponent, {
      data: element
    });

    dialogRef.afterClosed().subscribe(result =>{
      debugger
      this.getUserdata()
    });

  }




}


