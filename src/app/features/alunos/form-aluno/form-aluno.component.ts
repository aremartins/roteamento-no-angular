import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AlunoService } from '../service/aluno.service';
import { Aluno } from '../model/aluno';

@Component({
  selector: 'app-form-aluno',
  templateUrl: './form-aluno.component.html',
  styleUrls: ['./form-aluno.component.scss'],
})
export class FormAlunoComponent implements OnInit {
  aluno?: Aluno

  constructor(
    private route: ActivatedRoute,
    private alunoService: AlunoService
  ) {}

  ngOnInit(): void {
    this.getAluno()
  }

  getAluno(): void{
    const id = Number(this.route.snapshot.paramMap.get('id'))
    this.alunoService.getAlunoById(id).subscribe(aluno => this.aluno = aluno)
  }

  goBack(){
    window.history.back()
  }


}
