import { AlunoService } from './../service/aluno.service';
import { Component, OnInit } from '@angular/core';
import { Aluno } from '../model/aluno';
import { Observable } from 'rxjs';

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
