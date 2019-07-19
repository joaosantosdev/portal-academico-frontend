import { Disciplina } from './../../../models/Disciplina';
import { NotasFaltasProvider } from './../services/notas-faltas-provider';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notas-faltas',
  templateUrl: './notas-faltas.component.html',
  styleUrls: ['./notas-faltas.component.scss']
})
export class NotasFaltasComponent implements OnInit {
  public disciplinasFaltas;
  constructor(public notasFaltasProvider:NotasFaltasProvider) { 
    this.getFaltas();

  }

  ngOnInit() {
  }

  public async getFaltas(){
      this.disciplinasFaltas = await this.notasFaltasProvider.getFaltas();
      console.log(this.disciplinasFaltas.frequencia);
  }

  public getSemestreLabels(){

    if(this.disciplinasFaltas.semestre == 1){
      return [
        'JAN',
        'FEV',
        'MAR',
        'ABR',
        'MAI',
        'JUN'
      ]
    }

    return [
      'AGO',
      'SET',
      'OUT',
      'NOV',
      'DEZ',
    ]
  }

}
