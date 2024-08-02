import { NgModule } from "@angular/core";
import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from "@angular/common";


@NgModule({
    imports: [
        MatTabsModule,
        MatIconModule,
        CommonModule
      
      ],
      declarations: [
       
      
      ],

      exports: [
        MatTabsModule,
        MatIconModule,
        CommonModule
        
      ],

      providers: []
    })
export class AngularPortofolioModule {}