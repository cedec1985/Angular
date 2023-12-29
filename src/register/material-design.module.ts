import { NgModule } from '@angular/core';                
import { CommonModule } from '@angular/common';
// Material
import { MatGridListModule } from '@angular/material/grid-list';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { ReactiveFormsModule } from '@angular/forms';
import { FormRegisterComponent } from './form-register.component';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatFormFieldModule,               // on importe uniquement les composants dont on a besoin
    MatGridListModule,              
    MatInputModule,
    MatButtonModule,
    MatCheckboxModule,
    ReactiveFormsModule,FormRegisterComponent
  ],
  exports: [
    MatFormFieldModule,               // ne pas oublier d'exporter pour qu'il puisse être importé dans le module qui le demande
    MatGridListModule,
    MatInputModule,
    MatButtonModule,
    MatCheckboxModule,
    ReactiveFormsModule
  ]
})
export class MaterialDesignModule { }