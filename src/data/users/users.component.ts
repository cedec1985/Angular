import { Component, OnInit } from '@angular/core';
import { DataService }from '../../app/data.service';
import { CommonModule } from '@angular/common';

@Component({
selector: 'app-users',
standalone: true,
imports: [CommonModule],
templateUrl: './users.component.html',
styleUrl: './users.component.css'
})

export class UsersComponent implements OnInit {

  data: any[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.loadData();
  }

  loadData(): void {
    this.dataService.fetchData().subscribe(
      (data) => {
        this.dataService.setData(data);
        alert('Données récupérées:');
      },
      (error) => {
        console.error('Erreur lors de la récupération des données:', error);
      }
    );
  }
  // Sauvegarde des données dans le localStorage
device =localStorage.setItem('mesDonnees', JSON.stringify(this.data));

downloadData(): void {
const data = this.dataService.getData();
const jsonData = JSON.stringify(data);

const blob = new Blob([jsonData], { type: 'application/json' });
const url = window.URL.createObjectURL(blob);

const a = document.createElement('a');
a.href = url;
a.download = 'donnees.json';
document.body.appendChild(a);
a.click();
document.body.removeChild(a);
window.URL.revokeObjectURL(url);
}

}
function setItem(arg0: string, arg1: string): any {
throw new Error('Function not implemented.');
}

