import { Component, OnInit, Input, Output, EventEmitter, HostListener } from '@angular/core';
import { itemAnima } from "../../anima/item.anima";

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.scss'],
  animations:[ itemAnima ]
})
export class TaskItemComponent implements OnInit {

  widerPriority = 'in';

  @Input() item;
  @Input() avatar;
  @Output() taskClick = new EventEmitter<void>();

  constructor() { }

  ngOnInit() { 
    this.avatar = this.item.owner ? this.item.owner.avatar : 'unassigned';
  }

  @HostListener('mouseenter')
  onMouseEnter() {
    this.widerPriority = 'out';
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.widerPriority = 'in';
  }

  onItemClick() {
    this.taskClick.emit();
  }

  onCheckboxClick(ev: Event) {
    // 阻止当前事件继续传播
    ev.stopPropagation();
  }

}
