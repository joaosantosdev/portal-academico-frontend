import {Disciplina} from './../../../models/Disciplina';
import {Component, Input, OnInit} from '@angular/core';
import {DisciplinaProvider} from '../services/disciplina.provider';
import {MinhasDisciplinasModel} from '../../../models/aluno/MinhasDisciplinas';
import {TratarError} from '../../../security/tratar.error';

@Component({
  selector: 'app-disciplinas-aluno',
  templateUrl: './disciplinas-aluno.component.html',
  styleUrls: ['./disciplinas-aluno.component.scss']
})

export class DisciplinasAlunoComponent implements OnInit {
  public minhasDisciplinas: MinhasDisciplinasModel;
  @Input()
  public isTemplate = true;
  constructor(public disciplinaProvider: DisciplinaProvider, public tratarErro: TratarError) {
    this.getMinhasDisciplinas();
  }

  ngOnInit() {


  }

  public getMinhasDisciplinas() {

    this.disciplinaProvider.minhasDisciplinas().subscribe((res) => {
      if(res.resposta != null) {
        this.minhasDisciplinas = Object.assign(new MinhasDisciplinasModel(), res.resposta).model();
      }else{
        this.tratarErro.tratar(res.erros);
      }
    }, (erro) => {
      this.tratarErro.tratar(erro, true);
    });
  }


}
