import { Component, OnInit, HostBinding, HostListener } from '@angular/core';
import { MatDialog } from "@angular/material";
import { NewProjectComponent } from "../new-project/new-project.component";
import { InviteComponent } from "../invite/invite.component";
import { ConfirmDialogComponent } from "../../shared/confirm-dialog/confirm-dialog.component";
import { slideToRight } from "../../anima/router.anima";
import { listAnima } from '../../anima/list.anima';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss'],
  animations: [ 
    slideToRight,
    listAnima
  ]
})
export class ProjectListComponent implements OnInit {

@HostBinding('@routerAnima') state;

  projects = [
    {
      "id": 1,
      "name":"企业协作平台",
      "coverImg":"assets/images/covers/0.jpg",
      "desc":"这是一个企业内部项目！"
    },
    {
      "id": 2,
      "name":"自动化测试项目",
      "coverImg":"assets/images/covers/1.jpg",
      "desc":"这是一个企业内部项目！"
    },
    {
      "id": 3,
      "name":"小宝购物商城",
      "coverImg":"assets/images/covers/2.jpg",
      "desc":"这是一个企业内部项目！"
    }
  ]

  constructor(private dialog: MatDialog) { }

  ngOnInit() { }

  openNewProjectDialog() {
    const dialogRef = this.dialog.open(NewProjectComponent, {data:{  title: "新增项目" }});
    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      this.projects = [
        ... this.projects, 
        { id: 4, name: '微服务商城系统', coverImg:'assets/images/covers/0.jpg', desc:'这是一个企业内部项目！'}
      ]
    });
  }

  launchInviteDialog(project) {
    this.dialog.open(InviteComponent);
  }

  launchEditDialog(project) {
    const dialogRef = this.dialog.open(NewProjectComponent, {data:{ title: "修改项目" }});
    dialogRef.afterClosed().subscribe(result => console.log(result));
  }

  launchDeleteDialog(project) {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {data:{ title: "删除项目", content: "您确认删除该项目吗？" }});
    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      this.projects = this.projects.filter(p => p.id !== project.id);
    });
  }

}
