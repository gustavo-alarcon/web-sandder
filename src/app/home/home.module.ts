import { HomeComponent } from './home.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';

import { NgScrollbarModule } from 'ngx-scrollbar';
import { GalleryModule } from  '@ngx-gallery/core';

import {  MatToolbarModule,
          MatButtonModule,
          MatIconModule,
          MatMenuModule} from "@angular/material";

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    NgScrollbarModule,
    GalleryModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule
  ]
})
export class HomeModule { }
