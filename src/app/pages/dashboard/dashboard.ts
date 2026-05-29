import { Component } from '@angular/core';
import { Sidebar } from '../../shared/sidebar/sidebar';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-dashboard',
  imports: [
    Sidebar,
    MatIconModule
  ],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
})
export class Dashboard {
  isSidebarCollapsed = false;
}
