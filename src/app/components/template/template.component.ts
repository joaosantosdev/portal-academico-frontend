import { Component, OnInit } from '@angular/core';
import { $ } from 'protractor';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.scss']
})
export class TemplateComponent implements OnInit {
  public itensSidebarAluno = [
      {
        'texto':'Início',
        'link':'aluno/dashboard',
        'icon':'fas fa-home',
        'class':''
      },
      {
        'texto':'Minhas disciplinas',
        'link':'aluno/disciplinas',
        'icon':'fas fa-book',
        'class':''
      },
      {
        'texto':'Notas e Faltas',
        'link':'aluno/notas-faltas',
        'icon':'fas fa-chalkboard-teacher',
        'class':''
      }
  ];
  constructor() { 
      for(let item of this.itensSidebarAluno){
        if(location.pathname == "/"+item.link){
            item.class = "item-sidebar-selecionado";
            break;
        }
      }
  }

  ngOnInit() {
  }
  public page:number;

  public ir(pagina:number) {
    this.page = pagina;
  }

  

}
