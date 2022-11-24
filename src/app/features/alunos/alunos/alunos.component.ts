import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Aluno } from '../model/aluno';
import { AlunoService } from './../service/aluno.service';

@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.scss']
})
export class AlunosComponent implements OnInit {
  alunos!: Observable<Aluno[]>

  constructor(private alunoService: AlunoService) { }

  ngOnInit(): void {
    this.getAlunos()
  }

  getAlunos(): void {
    this.alunos = this.alunoService.getAlunos()
  }

}
