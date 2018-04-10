import { Component, OnInit } from '@angular/core';
import { MatDialog } from "@angular/material/";
import { NewTaskComponent } from "../new-task/new-task.component";
import { CopyTaskComponent } from '../copy-task/copy-task.component';
import { ConfirmDialogComponent } from '../../shared/confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-task-home',
  templateUrl: './task-home.component.html',
  styleUrls: ['./task-home.component.scss']
})
export class TaskHomeComponent implements OnInit {
  lists = [
    {
      id: 1,
      name: "待办",
      tasks: [
        {
          id: 1,
          desc: "去星巴克买咖啡",
          priority: 1,
          completed: true,
          owner: {
            id: 1,
            name: "大锤",
            avatar: "avatars:svg-11"
          },
          dueDate: new Date()
        }, 
        {
          id: 2,
          desc: "完成老板布置的PPT",
          completed: false,
          priority: 2,
          owner: {
            id: 2,
            name: "熊帅",
            avatar: "avatars:svg-12"
          },
          dueDate: new Date()
        }
      ]
    },
    {
      id: 2,
      name: "进行中",
      tasks: [
        {
          id: 1,
          desc: "项目代码评审",
          completed: false,
          priority: 3,
          owner: {
            id: 1,
            name: "强哥",
            avatar: "avatars:svg-13"
          },
          dueDate: new Date(),
          reminder: new Date()
        },
        {
          id: 1,
          desc: "定制项目计划",
          priority: 2,
          completed: false,
          owner: {
            id: 1,
            name: "宏宏",
            avatar: "avatars:svg-14"
          },
          dueDate: new Date(),
          reminder: new Date()
        }
      ]
    }
  ];
  
  constructor(private dialog: MatDialog) { }

  ngOnInit() { }

  launchNewTaskDialog() {
    this.dialog.open(NewTaskComponent,{data:{title:"新建任务", task:''}});
  }

  launchCopyTaskDialog() {
    const dialogRef = this.dialog.open(CopyTaskComponent, {data:{lists:this.lists}});
  }

  launchUpdateDialog(item) {
    const dialogRef = this.dialog.open(NewTaskComponent, {data:{title:"修改任务", task:item}});
  }

  launchDeleteTaskDialog() {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {data:{title:"删除任务", content:"您确认要删除该类型下的所有任务吗？"}});
    dialogRef.afterClosed().subscribe(result => console.log(result));
  }

}
