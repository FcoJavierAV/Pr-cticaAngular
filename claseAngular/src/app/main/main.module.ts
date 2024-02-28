import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { MainComponent } from './main/main.component';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  declarations: [
    MenuComponent,
    MainComponent
  ],
  imports: [
    AppRoutingModule,
    CommonModule
  ]
})
export class MainModule { }
