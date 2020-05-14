import { Component, OnInit, Inject } from '@angular/core';
import { IdentityUser } from 'src/app/models/identity-user';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IdentityUserService } from 'src/app/services/identity-user.service';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {

  model:IdentityUser=new IdentityUser();
  isNew:boolean=true;
  password:string;
  hide = true;
  submitted = false;

  constructor(private service:IdentityUserService,  
    public dialogRef: MatDialogRef<UserFormComponent>,
    @Inject(MAT_DIALOG_DATA) data,
    private formBuilder: FormBuilder) { 
         
    if(data!=null){
      this.model = {...data};
      this.isNew = false;
    }    
  }  

  userForm = this.formBuilder.group({   
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]]  ,
    isAdmin:[]
});

  ngOnInit(): void {
  }


  onSubmit() {
    console.log(this.userForm);
    this.submitted = true;

    // stop here if form is invalid
    if (this.userForm.invalid) {
        return;
    }
    if(this.isNew){
      this.onSave();
    }else{
      this.onUpdate();
    }

}


  onSave(){   
    this.model.userName = this.model.email;
    this.service.post(this.model,this.password).subscribe(
      (success)=>{
        console.log(success);
        this.dialogRef.close();
      },
      (error)=>{

      }
    );
  }
  onUpdate(){
    this.model.userName = this.model.email;
    this.service.put(this.model).subscribe(
      (success)=>{
        console.log(success);
        this.dialogRef.close();
      },
      (error)=>{

      }
    );
  }

}
