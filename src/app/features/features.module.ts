import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home/home.component';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from '../core/components/navbar/navbar.component';
import { MainComponent } from './main/main.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [HomeComponent, NavbarComponent, MainComponent],
  imports: [CommonModule, RouterModule, SharedModule],
  exports: [MainComponent],
})
export class FeaturesModule {}
