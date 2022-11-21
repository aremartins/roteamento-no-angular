import { DetalhesAlunoComponent } from './detalhes-aluno/detalhes-aluno.component';
import { Routes, RouterModule } from '@angular/router';
import { AlunosComponent } from './alunos/alunos.component';
import { FormAlunoComponent } from './form-aluno/form-aluno.component';

const routes: Routes = [
  {
    path: 'alunos',
    component: AlunosComponent,
    children: [
      { path: 'novo', component: FormAlunoComponent },
      { path: ':id', component: DetalhesAlunoComponent },
      { path: ':id/editar', component: FormAlunoComponent },
    ],
  },
];

export const AlunosRoutes = RouterModule.forChild(routes);
