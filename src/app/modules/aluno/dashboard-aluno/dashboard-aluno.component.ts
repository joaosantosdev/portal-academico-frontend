import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-dashboard-aluno',
  templateUrl: './dashboard-aluno.component.html',
  styleUrls: ['./dashboard-aluno.component.scss']
})
export class DashboardAlunoComponent implements OnInit {
  public progresso = 10;
  @Input()
  public isTemplate = true;
  constructor() {
  }

  ngOnInit() {
  }


}
