import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSidenavModule, MatButtonModule, MatToolbarModule,MatCheckboxModule,
  MatIconModule, MatCardModule,MatInputModule, MatListModule,MatRadioModule,
  MatSlideToggleModule, MatGridListModule, MatAutocompleteModule, MatMenuModule,
  MatSelectModule, MatTooltipModule, MatDatepickerModule,MatNativeDateModule } from "@angular/material";
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';

@NgModule({
  declarations: [ConfirmDialogComponent],
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
    MatMenuModule,
    MatCheckboxModule,
    MatRadioModule,
    MatSelectModule,
    MatTooltipModule,
    MatDatepickerModule,
    MatNativeDateModule
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
    MatMenuModule,
    MatCheckboxModule,
    MatRadioModule,
    MatSelectModule,
    MatTooltipModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  entryComponents:[
    ConfirmDialogComponent
  ]
})
export class SharedModule { }
