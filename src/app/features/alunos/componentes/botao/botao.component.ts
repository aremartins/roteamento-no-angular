import { outputAst } from '@angular/compiler';
import { Component, Input, Output,OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-botao',
  templateUrl: './botao.component.html',
  styleUrls: ['./botao.component.scss']
})
export class BotaoComponent implements OnInit {
  @Input() action : string = 'Editar'
  @Output() enviar = new EventEmitter<Event>()

 constructor() { }

  ngOnInit(): void {
  }

  enviarEvento(event: Event){
    this.enviar.emit(event)
  }


}
