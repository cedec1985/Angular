import { Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, FormBuilder, ReactiveFormsModule, Validators} from '@angular/forms';
import { MaterialDesignModule } from './material-design.module';


@Component({
  selector: 'app-form-register',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule,FormRegisterComponent,MaterialDesignModule],
  templateUrl: './form-register.component.html',
  styleUrl: './form-register.component.css'
})

     //Validating input in reactive forms
export class FormRegisterComponent implements OnInit {

  lastName : string ="";
  firstName :string ="";
  pseudo :string ="";
  code :string ="";
  city :string ="";
  phone :string ="";
  rue : string ="";
  numero : any = "";
  password : string ="";
  confirmer : string ="";
  submitted: boolean = false;
  acceptTerms :boolean = false;
  title :string = "";
  registerForm!: FormGroup ;


  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {        

      this.registerForm = this.formBuilder.group({ 
      
      lastName:['',[Validators.minLength(4),Validators.required]],

      firstName : ['',[Validators.minLength(4),Validators.required]],

      pseudo : ['',[Validators.minLength(6),Validators.required]],

      code : ['',[Validators.minLength(4),Validators.required]],

      city : ['',Validators.required],

      phone :['',[Validators.minLength(9),Validators.required]],

      rue : ['',Validators.required],

      numero :['',Validators.required],

      password : ['',[Validators.minLength(8),Validators.pattern('^[a-zA-Z0-9]+$'),Validators.required]],

      confirmer : ['',Validators.required]
      });

this.registerForm.valueChanges.subscribe((formValues: any) => { // si le formulaire est modifié (quel que soit le champ)
        console.log(formValues);    
    });  
    
}
onSubmit(): void {                        // à la soumission du formulaire, clique sur le bouton: "s'enregistrer"
  this.submitted = true;

  // on arrête ici si le formulaire est invalide
  if (this.registerForm.valid) {      // s’il y a une erreur, le formulaire est invalide
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value, null, 4));
  }
}
  onReset(): void {                 // clique sur le bouton: "annuler"
      this.submitted = false;
      this.registerForm.reset();    // on efface tout le formulaire
  }
}

  
  

