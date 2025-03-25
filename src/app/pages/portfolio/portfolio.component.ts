import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import AOS from 'aos';
import {PROJECTS} from '../../data/projects.data';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})

export class PortfolioComponent {
  projects = PROJECTS;
  filteredProjects = this.projects;

  ngOnInit(): void {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true
    });
  }

  filterProjects(type: string) {
    this.filteredProjects = type === 'all' ? this.projects : this.projects.filter(p => p.type === type);
  }
}
