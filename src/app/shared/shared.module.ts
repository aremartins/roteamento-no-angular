import { NotFoundComponent } from './pages/not-found/not-found.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './components/button/button.component';



@NgModule({
  declarations: [NotFoundComponent, ButtonComponent],
  imports: [
    CommonModule
  ],
  exports:[NotFoundComponent, ButtonComponent]
})
export class SharedModule { }
