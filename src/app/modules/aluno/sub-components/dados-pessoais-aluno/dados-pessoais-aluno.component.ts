import {Component, Input, OnInit} from '@angular/core';
import {DadosPessoaisAluno} from '../../../../models/aluno/DadosPessoaisAluno';

@Component({
  selector: 'app-dados-pessoais-aluno',
  templateUrl: './dados-pessoais-aluno.component.html',
  styleUrls: ['./dados-pessoais-aluno.component.scss']
})
export class DadosPessoaisAlunoComponent implements OnInit {


  @Input() dadosPessoaisAluno: DadosPessoaisAluno;

  constructor() {

  }

  ngOnInit() {
    console.log(this.dadosPessoaisAluno);
  }

}
