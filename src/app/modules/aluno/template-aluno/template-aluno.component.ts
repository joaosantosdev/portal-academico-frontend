import {Component, OnInit} from '@angular/core';
import * as jsPDF from 'jspdf';
@Component({
  selector: 'app-template-aluno',
  templateUrl: './template-aluno.component.html',
  styleUrls: ['./template-aluno.component.scss']
})
export class TemplateAlunoComponent implements OnInit {
  constructor() {
    for (const item of this.itensSidebarAluno) {
      if (location.pathname === '/' + item.link) {
        item.class = 'item-sidebar-selecionado';
        break;
      }
    }
  }

  public itensSidebarAluno = [
    {
      texto: 'Início',
      link: '/aluno/dashboard',
      icon: 'fas fa-home',
      class: ''
    },
    {
      texto: 'Perfil',
      link: '/aluno/perfil',
      icon: 'fas fa-id-card',
      class: ''
    },
    {
      texto: 'Minhas disciplinas',
      link: '/aluno/disciplinas',
      icon: 'fas fa-book',
      class: ''
    },
    {
      texto: 'Notas e Faltas',
      link: '/aluno/notas-faltas',
      icon: 'fas fa-chalkboard-teacher',
      class: ''
    }
    ,
    {
      texto: 'Materiais',
      link: '/aluno/materiais',
      icon: 'fas fa-folder-open',
      class: ''
    },
    {
      texto: 'Histórico',
      link: '/aluno/historico',
      icon: 'fas fa-clipboard-list',
      class: ''
    },
    {
      texto: 'Quadro de Horário',
      link: '/aluno/historico',
      icon: 'fas fa-calendar-alt',
      class: ''
    }



  ];

  ngOnInit(): void {
  }

  gerarPDF() {
    const documento = new jsPDF();
    documento.text('Declaração', 10, 10);
    documento.output('dataurlnewwindow');
  }



}
