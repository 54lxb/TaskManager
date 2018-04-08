import { Component } from '@angular/core';
import { OverlayContainer } from '@angular/cdk/overlay';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  darkTheme = false;

  constructor(private overlayContainer: OverlayContainer) { }

  switchThemes(dark) {
    this.darkTheme = dark;
    this.overlayContainer.getContainerElement().classList.add('app-night-theme');
  }
}
