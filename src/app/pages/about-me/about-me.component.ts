// src/app/pages/about-me/about-me.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ABOUT_ME } from '../../data/about-me.data';
import {INTERVIEWS} from '../../data/interview.data';

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [CommonModule],
  templateUrl: 'about-me.component.html',
  styleUrls: ['about-me.component.scss']
})
export class AboutMeComponent {
  aboutMe = ABOUT_ME;
  interviews = INTERVIEWS;
}
