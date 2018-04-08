import { Component, OnInit } from '@angular/core';
import { MatDialog } from "@angular/material";
import { NewProjectComponent } from "../new-project/new-project.component";
import { InviteComponent } from "../invite/invite.component";

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss']
})
export class ProjectListComponent implements OnInit {

  projects = [
    {
      "name":"企业协作平台",
      "coverImg":"assets/images/covers/0.jpg",
      "desc":"这是一个企业内部项目！"
    },
    {
      "name":"自动化测试项目",
      "coverImg":"assets/images/covers/1.jpg",
      "desc":"这是一个企业内部项目！"
    },
    {
      "name":"小宝购物商城",
      "coverImg":"assets/images/covers/2.jpg",
      "desc":"这是一个企业内部项目！"
    }
  ]

  constructor(private dialog: MatDialog) { }

  ngOnInit() { }

  openNewProjectDialog() {
    const dialogRef = this.dialog.open(NewProjectComponent, {data:{ dark: true }});
    dialogRef.afterClosed().subscribe(result => console.log(result));
  }

  launchInviteDialog() {
    this.dialog.open(InviteComponent);
  }

}
