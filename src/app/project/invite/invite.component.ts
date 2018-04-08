import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-invite',
  templateUrl: './invite.component.html',
  styleUrls: ['./invite.component.scss']
})
export class InviteComponent implements OnInit {

  items = [
    {id:1,name:"小宝"},
    {id:2,name:"大锤"},
    {id:3,name:"宏宏"},
    {id:4,name:"强哥"},
    {id:5,name:"兄帅"}
  ];

  constructor() { }

  ngOnInit() { }

  displayUser(user: {id: String; name: string}) {
    return user ? user.name : "";
  }
}
