import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.scss','./css/material.css','./css/style.css']
})
export class TemplateComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  public page:number;

  public ir(pagina:number) {
    this.page = pagina;
  }

}
