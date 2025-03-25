import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutMeComponent } from './pages/about-me/about-me.component';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import AOS from 'aos';
import 'aos/dist/aos.css';
import {InterviewComponent} from './pages/interview/interview';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, AboutMeComponent, InterviewComponent,PortfolioComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-in-out'
    });
  }
}
