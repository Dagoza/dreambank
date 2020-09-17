import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatButtonModule,
  MatToolbarModule,
  MatIconModule,
  MatBadgeModule,
  MatSidenavModule,
  MatListModule,
  MatGridListModule,
  MatFormFieldModule,
  MatInputModule,
  MatSelectModule,
  MatRadioModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatChipsModule,
  MatTooltipModule,
  MatTableModule,
  MatPaginatorModule,
  MatSnackBarModule,
  MatCardModule,
  MatMenuModule
} from '@angular/material';


@NgModule({
  imports: [
    CommonModule,
      MatButtonModule,
      MatToolbarModule,
      MatIconModule,
      MatSidenavModule,
      MatBadgeModule,
      MatListModule,
      MatGridListModule,
      MatFormFieldModule,
      MatInputModule,
      MatSelectModule,
      MatSnackBarModule,
      MatCardModule,
      MatMenuModule,
      MatRadioModule,
      MatDatepickerModule,
      MatNativeDateModule,
      MatChipsModule,
      MatTooltipModule,
      MatTableModule,
      MatPaginatorModule
  ],
  exports: [
     MatButtonModule,
     MatToolbarModule,
     MatIconModule,
     MatSidenavModule,
     MatBadgeModule,
     MatListModule,
     MatSnackBarModule,
     MatGridListModule,
     MatInputModule,
     MatCardModule,
     MatFormFieldModule,
     MatSelectModule,
     MatRadioModule,
     MatMenuModule,
     MatDatepickerModule,
     MatChipsModule,
     MatTooltipModule,
     MatTableModule,
     MatPaginatorModule
  ],
  providers: [
     MatDatepickerModule,
  ]
})
export class AngularMaterialModule { }
