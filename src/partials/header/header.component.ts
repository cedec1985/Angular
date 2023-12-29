import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PartialsModule } from '../partials.module';

@Component({
  selector: 'app-header',
standalone: true,
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
  imports: [HeaderComponent]
})
export class HeaderComponent {

}
