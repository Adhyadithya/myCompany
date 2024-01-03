import { Component } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent {
   httpdata:any;
   constructor(public usersServiceObj:UsersService){}
   ngOnInit():void{
    this.usersServiceObj.getUsers().
    subscribe((users)=>{
      this.httpdata=users;
      console.log(this.httpdata);
    })
   }
}
