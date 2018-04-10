import { Component, ViewChild } from '@angular/core';
import { OverlayContainer } from '@angular/cdk/overlay';
import { MatSidenavContainer } from "@angular/material";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  darkTheme = false;

  @ViewChild(MatSidenavContainer) sidenavContainer: MatSidenavContainer;

  constructor(private overlayContainer: OverlayContainer) {
    
  }

  switchThemes(dark) {
    this.darkTheme = dark;
    if (dark) {
      this.overlayContainer.getContainerElement().classList.add('app-night-theme');
      this.overlayContainer.getContainerElement().classList.remove('app-day-theme');
    } else {
      this.overlayContainer.getContainerElement().classList.remove('app-night-theme');
      this.overlayContainer.getContainerElement().classList.add('app-day-theme');
    }
    
  }
}
