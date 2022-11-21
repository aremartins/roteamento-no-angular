import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Aluno } from '../model/aluno';
import { AlunoService } from './../service/aluno.service';

@Component({
  selector: 'app-detalhes-aluno',
  templateUrl: './detalhes-aluno.component.html',
  styleUrls: ['./detalhes-aluno.component.scss']
})
export class DetalhesAlunoComponent implements OnInit {

  id!: number
  aluno? : Aluno

  constructor(private route : ActivatedRoute, private alunoService: AlunoService) { }

  ngOnInit(): void {
    this.getAluno()
  }

  getAluno(): void {
    this.route.params.subscribe(params => {
      this.id = Number(params['id'])
      this.alunoService.getAlunoById(this.id).subscribe(
        aluno => this.aluno = aluno as Aluno
      )
    })

  }

}
