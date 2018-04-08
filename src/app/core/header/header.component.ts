import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Output() toggleEvent = new EventEmitter<void>();
  @Output() changeThemeEvent = new EventEmitter<Boolean>();

  constructor() { }

  ngOnInit() { }

  openSidebar() {
    this.toggleEvent.emit();
  }

  changeTheme(checked: boolean) {
    this.changeThemeEvent.emit(checked);
  }

}
