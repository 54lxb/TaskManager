import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSidenavModule, MatButtonModule, MatToolbarModule,
  MatIconModule, MatCardModule,MatInputModule, MatListModule,
  MatSlideToggleModule, MatGridListModule, MatAutocompleteModule, MatMenuModule } from "@angular/material";

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatSidenavModule,
    MatButtonModule,
    MatToolbarModule, 
    MatIconModule, 
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatListModule,
    MatSlideToggleModule,
    MatGridListModule, 
    MatAutocompleteModule, 
    MatMenuModule
  ],
  exports:[
    CommonModule,
    MatSidenavModule,
    MatButtonModule,
    MatToolbarModule, 
    MatIconModule, 
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatListModule,
    MatSlideToggleModule,
    MatGridListModule, 
    MatAutocompleteModule, 
    MatMenuModule
  ]
})
export class SharedModule { }
