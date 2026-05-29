import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { Sidebar } from '../../shared/sidebar/sidebar';

interface Etudiant {
  id: number;
  nom: string;
  email: string;
  filiere: string;
  niveau: string;
  actif: boolean;
}

@Component({
  selector: 'app-etudiants',
  imports: [
    Sidebar,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatIconModule
  ],
  templateUrl: './etudiants.html',
  styleUrl: './etudiants.scss',
})
export class Etudiants {
  searchText = '';
  showForm = false;
  isEditing = false;

  etudiants: Etudiant[] = [
    { id: 1, nom: 'Kamga Jean', email: 'kamga@uy1.cm', filiere: 'Informatique', niveau: 'Licence 1', actif: true },
    { id: 2, nom: 'Nguemo Marie', email: 'nguemo@uy1.cm', filiere: 'Mathématiques', niveau: 'Master 1', actif: true },
    { id: 3, nom: 'Talla Pierre', email: 'talla@uy1.cm', filiere: 'Physique', niveau: 'Licence 3', actif: false },
    { id: 4, nom: 'Foko Sarah', email: 'foko@uy1.cm', filiere: 'Chimie', niveau: 'Licence 2', actif: true },
  ];

  currentEtudiant: Etudiant = this.emptyEtudiant();

  emptyEtudiant(): Etudiant {
    return { id: 0, nom: '', email: '', filiere: '', niveau: 'Licence 1', actif: true };
  }

  filteredEtudiants() {
    if (!this.searchText) return this.etudiants;
    return this.etudiants.filter(e =>
      e.nom.toLowerCase().includes(this.searchText.toLowerCase()) ||
      e.filiere.toLowerCase().includes(this.searchText.toLowerCase())
    );
  }

  openForm() {
    this.showForm = true;
    this.isEditing = false;
    this.currentEtudiant = this.emptyEtudiant();
  }

  closeForm() {
    this.showForm = false;
  }

  saveEtudiant() {
    if (this.isEditing) {
      const index = this.etudiants.findIndex(e => e.id === this.currentEtudiant.id);
      this.etudiants[index] = { ...this.currentEtudiant };
    } else {
      this.currentEtudiant.id = Date.now();
      this.etudiants.push({ ...this.currentEtudiant });
    }
    this.closeForm();
  }

  editEtudiant(etudiant: Etudiant) {
    this.currentEtudiant = { ...etudiant };
    this.isEditing = true;
    this.showForm = true;
  }

  deleteEtudiant(id: number) {
    this.etudiants = this.etudiants.filter(e => e.id !== id);
  }
}
