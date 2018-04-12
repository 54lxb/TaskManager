import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatSidenavModule, MatButtonModule, MatToolbarModule,MatCheckboxModule,
  MatIconModule, MatCardModule,MatInputModule, MatListModule,MatRadioModule, 
  MatSlideToggleModule, MatGridListModule, MatAutocompleteModule, MatMenuModule, MatSliderModule,
  MatSelectModule, MatTooltipModule, MatDatepickerModule, MatNativeDateModule, MatDialogModule } from "@angular/material";
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';

@NgModule({
  declarations: [ConfirmDialogComponent],
  imports: [
    CommonModule,
    RouterModule,
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
    MatMenuModule,
    MatCheckboxModule,
    MatRadioModule,
    MatSelectModule,
    MatTooltipModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatDialogModule,
    MatSliderModule
  ],
  exports:[
    CommonModule,
    RouterModule,
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
    MatMenuModule,
    MatCheckboxModule,
    MatRadioModule,
    MatSelectModule,
    MatTooltipModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatDialogModule,
    MatSliderModule
  ],
  entryComponents:[
    ConfirmDialogComponent
  ]
})
export class SharedModule { }
