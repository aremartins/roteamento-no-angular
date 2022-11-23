import { Injectable } from '@angular/core';
import { map, Observable, of } from 'rxjs';
import { ALUNOS } from '../mock/aluno.mock';
import { Aluno } from '../model/aluno';

@Injectable({
  providedIn: 'root',
})
export class AlunoService {
  private readonly API = of(ALUNOS);

  getAlunos(): Observable<Aluno[]> {
    return this.API;
  }

  getAlunoById(id: number): Observable<Aluno | undefined> {
    return this.API.pipe(
      map((alunos) => alunos.find((aluno) => aluno.id === id))
    );
  }



}
