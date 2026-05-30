import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { Sidebar } from '../../shared/sidebar/sidebar';

interface CoursItem {
  id: number;
  intitule: string;
  professeur: string;
  filiere: string;
  credits: number;
  semestre: string;
  volume: number;
}

@Component({
  selector: 'app-cours',
  imports: [
    Sidebar,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule
  ],
  templateUrl: './cours.html',
  styleUrl: './cours.scss',
})
export class Cours {
  searchText = '';
  showForm = false;
  isEditing = false;

  coursList: CoursItem[] = [
    { id: 1, intitule: 'Algorithmique', professeur: 'Dr. Mbarga Paul', filiere: 'Informatique', credits: 6, semestre: 'Semestre 1', volume: 45 },
    { id: 2, intitule: 'Analyse Mathématique', professeur: 'Pr. Atangana Claire', filiere: 'Mathématiques', credits: 5, semestre: 'Semestre 1', volume: 40 },
    { id: 3, intitule: 'Réseaux Informatiques', professeur: 'Dr. Biya Marc', filiere: 'Informatique', credits: 4, semestre: 'Semestre 2', volume: 35 },
    { id: 4, intitule: 'Base de données', professeur: 'Dr. Nkoa Julie', filiere: 'Informatique', credits: 5, semestre: 'Semestre 2', volume: 40 },
  ];

  currentCours: CoursItem = this.emptyCours();

  emptyCours(): CoursItem {
    return { id: 0, intitule: '', professeur: '', filiere: '', credits: 3, semestre: 'Semestre 1', volume: 30 };
  }

  filteredCours() {
    if (!this.searchText) return this.coursList;
    return this.coursList.filter(c =>
      c.intitule.toLowerCase().includes(this.searchText.toLowerCase()) ||
      c.professeur.toLowerCase().includes(this.searchText.toLowerCase()) ||
      c.filiere.toLowerCase().includes(this.searchText.toLowerCase())
    );
  }

  openForm() {
    this.showForm = true;
    this.isEditing = false;
    this.currentCours = this.emptyCours();
  }

  closeForm() {
    this.showForm = false;
  }

  saveCours() {
    if (this.isEditing) {
      const index = this.coursList.findIndex(c => c.id === this.currentCours.id);
      this.coursList[index] = { ...this.currentCours };
    } else {
      this.currentCours.id = Date.now();
      this.coursList.push({ ...this.currentCours });
    }
    this.closeForm();
  }

  editCours(cours: CoursItem) {
    this.currentCours = { ...cours };
    this.isEditing = true;
    this.showForm = true;
  }

  deleteCours(id: number) {
    this.coursList = this.coursList.filter(c => c.id !== id);
  }
}
