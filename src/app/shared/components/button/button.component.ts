import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  @Input() action : string = 'Editar'
  @Output() enviar = new EventEmitter<Event>()

  constructor() { }

  ngOnInit(): void {
  }

  enviarEvento(event: Event){
    this.enviar.emit(event)
  }

}
