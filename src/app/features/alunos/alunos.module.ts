import { AlunosRoutes } from './alunos.routing';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlunosComponent } from './alunos/alunos.component';
import { DetalhesAlunoComponent } from './detalhes-aluno/detalhes-aluno.component';
import { FormAlunoComponent } from './form-aluno/form-aluno.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [AlunosComponent, DetalhesAlunoComponent, FormAlunoComponent],
  imports: [CommonModule, FormsModule, AlunosRoutes, SharedModule],
})
export class AlunosModule {}
