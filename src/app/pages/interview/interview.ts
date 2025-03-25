import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { INTERVIEWS } from '../../data/interview.data';
import AOS from 'aos';
import 'aos/dist/aos.css';

@Component({
  selector: 'app-interview',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './interview.html',
  styleUrls: ['./interview.scss']
})
export class InterviewComponent implements OnInit {
  interviews = INTERVIEWS;

  ngOnInit(): void {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true
    });
  }
}
