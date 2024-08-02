// app.component.ts (Updated)
import { Component, NgModule } from '@angular/core';
import {
  trigger,
  state,
  style,
  transition,
  animate,
} from '@angular/animations';
import { CommonModule } from '@angular/common';
import { AngularPortofolioModule } from '../module';
import { BottomSheetComponent } from './bottom-sheet/bottom-sheet.component';
import { MatBottomSheet } from '@angular/material/bottom-sheet';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [CommonModule, AngularPortofolioModule,],
  animations: [
    trigger('panelState', [
      state(
        'hidden',
        style({
          transform: 'translateY(100%)',
        })
      ),
      state(
        'visible',
        style({
          transform: 'translateY(0)',
        })
      ),
      transition('hidden <=> visible', animate('300ms ease-in-out')),
    ]),
  ],
})

export class AppComponent {
  constructor(private bottomSheet: MatBottomSheet) {}

  openBottomSheet(panel: string): void {
    this.bottomSheet.open(BottomSheetComponent, {
      data: { panel }
    });
  }
}