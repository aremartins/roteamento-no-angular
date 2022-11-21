import { AlunosRoutes } from './alunos.routing';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlunosComponent } from './alunos/alunos.component';
import { DetalhesAlunoComponent } from './detalhes-aluno/detalhes-aluno.component';
import { FormAlunoComponent } from './form-aluno/form-aluno.component';



@NgModule({
  declarations: [
    AlunosComponent,
    DetalhesAlunoComponent,
    FormAlunoComponent
  ],
  imports: [
    CommonModule,
    AlunosRoutes
  ]
})
export class AlunosModule { }
