import { Component } from '@angular/core';
import { FakeAuthService } from '../fake-auth/fake-auth.service';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-fake-auth',
  templateUrl: './fake-auth.component.html',
  styleUrls: ['./fake-auth.component.css'],
  imports: [CommonModule,FormsModule,ReactiveFormsModule],
  standalone: true
})
export class FakeAuthComponent {

  username: string = '';
  password: string = '';

  constructor(private _authService: FakeAuthService) { }

  login() { 
    
    if (this._authService.login(this.username, this.password)) {
      localStorage.setItem('user', this.username)
      console.log('Login réussi');

    } else {
      console.log('Mauvais identifiant');
    }
  }

}
