import {Component, Input, OnInit} from '@angular/core';
import {DadosAcademicoAluno} from '../../../../models/aluno/DadosAcademicoAluno';

@Component({
  selector: 'app-dados-academico-aluno',
  templateUrl: './dados-academico-aluno.component.html',
  styleUrls: ['./dados-academico-aluno.component.scss']
})
export class DadosAcademicoAlunoComponent implements OnInit {
  @Input() dadosAcademicoAluno: DadosAcademicoAluno;
  constructor() { }

  ngOnInit() {
    console.log(this.dadosAcademicoAluno);
  }

}
