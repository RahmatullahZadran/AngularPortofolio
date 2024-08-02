// src/app/bottom-sheet/bottom-sheet.component.ts
import { Component, Inject } from '@angular/core';
import { MAT_BOTTOM_SHEET_DATA } from '@angular/material/bottom-sheet';
import { AngularPortofolioModule } from '../../module';

@Component({
  selector: 'app-bottom-sheet',
  standalone: true,
  imports: [AngularPortofolioModule],
  templateUrl: './bottom-sheet.component.html',
  styleUrls: ['./bottom-sheet.component.css']
})
export class BottomSheetComponent {
  projects = [
    {
      name: 'Project One',
      description: 'Description for project one.',
      image: 'https://via.placeholder.com/100'
    },
    {
      name: 'Project Two',
      description: 'Description for project two.',
      image: 'https://via.placeholder.com/100'
    },
    {
      name: 'Project Three',
      description: 'Description for project three.',
      image: 'https://via.placeholder.com/100'
    }
  ];

  videos = [
    {
      title: 'Video One',
      description: 'Description for video one.',
      thumbnail: 'https://via.placeholder.com/100'
    },
    {
      title: 'Video Two',
      description: 'Description for video two.',
      thumbnail: 'https://via.placeholder.com/100'
    },
    {
      title: 'Video Three',
      description: 'Description for video three.',
      thumbnail: 'https://via.placeholder.com/100'
    }
  ];

  aboutMe = 'I am a software developer with a passion for creating dynamic user experiences. My skills include Angular, TypeScript, and more. I love solving complex problems and learning new technologies.';

  constructor(@Inject(MAT_BOTTOM_SHEET_DATA) public data: { panel: string }) {}
}
