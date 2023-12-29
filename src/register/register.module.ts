import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormRegisterComponent } from './form-register.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialDesignModule } from './material-design.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
   FormRegisterComponent,   
   ReactiveFormsModule,    // IMPORTANT : le module Angular pour les formulaires
                                  // si vous utilisez les formulaires dans plusieurs composants
                                  // vous pouvez importer ce module à un niveau plus haut, par exemple dans : app.module.ts
                                  // car il faut éviter d'importer un module dans plusieurs endroits

    MaterialDesignModule,         // le module material de : /shared/material-design/material-design.module.ts
    NoopAnimationsModule,         // pas d'animation
  ],
  exports: [
    FormRegisterComponent,        // on exporte le composant pour qu'il soit disponible à la racine (qui va l'importer)
  ]

})
export class RegisterModule { }


