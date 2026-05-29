import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { Sidebar } from '../../shared/sidebar/sidebar';

interface Professeur {
  id: number;
  nom: string;
  email: string;
  specialite: string;
  grade: string;
}

@Component({
  selector: 'app-professeurs',
  imports: [
    Sidebar,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule
  ],
  templateUrl: './professeurs.html',
  styleUrl: './professeurs.scss',
})
export class Professeurs {
  searchText = '';
  showForm = false;
  isEditing = false;

  professeurs: Professeur[] = [
    { id: 1, nom: 'Dr. Mbarga Paul', email: 'mbarga@uy1.cm', specialite: 'Algorithmique', grade: 'Maître de conférences' },
    { id: 2, nom: 'Pr. Atangana Claire', email: 'atangana@uy1.cm', specialite: 'Mathématiques', grade: 'Professeur' },
    { id: 3, nom: 'Dr. Biya Marc', email: 'biya@uy1.cm', specialite: 'Réseaux', grade: 'Assistant' },
    { id: 4, nom: 'Dr. Nkoa Julie', email: 'nkoa@uy1.cm', specialite: 'Base de données', grade: 'Chargé de cours' },
  ];

  currentProfesseur: Professeur = this.emptyProfesseur();

  emptyProfesseur(): Professeur {
    return { id: 0, nom: '', email: '', specialite: '', grade: 'Assistant' };
  }

  filteredProfesseurs() {
    if (!this.searchText) return this.professeurs;
    return this.professeurs.filter(p =>
      p.nom.toLowerCase().includes(this.searchText.toLowerCase()) ||
      p.specialite.toLowerCase().includes(this.searchText.toLowerCase())
    );
  }

  openForm() {
    this.showForm = true;
    this.isEditing = false;
    this.currentProfesseur = this.emptyProfesseur();
  }

  closeForm() {
    this.showForm = false;
  }

  saveProfesseur() {
    if (this.isEditing) {
      const index = this.professeurs.findIndex(p => p.id === this.currentProfesseur.id);
      this.professeurs[index] = { ...this.currentProfesseur };
    } else {
      this.currentProfesseur.id = Date.now();
      this.professeurs.push({ ...this.currentProfesseur });
    }
    this.closeForm();
  }

  editProfesseur(professeur: Professeur) {
    this.currentProfesseur = { ...professeur };
    this.isEditing = true;
    this.showForm = true;
  }

  deleteProfesseur(id: number) {
    this.professeurs = this.professeurs.filter(p => p.id !== id);
  }
}
