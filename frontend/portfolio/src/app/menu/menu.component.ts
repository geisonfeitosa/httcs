import { Component, OnInit } from '@angular/core';
import { PortfoliosService } from '../services/portfolios.service';
import { Portfolio } from './portfolio';
import { element } from 'protractor';
import { LoginService } from '../services/login.service';
import { Router } from '@angular/router';
import { QuemSomos } from './quemSomos';
import { QuemSomosService } from '../services/quemSomos.service';
declare var $: any;


@Component({
  selector: 'p-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(
    private portfoliosService: PortfoliosService,
    private quemSomosService: QuemSomosService,
    private loginService: LoginService,
    private router: Router
  ) { }

  portfolios = [];
  quemSomosList = [];

  novoPortfolio: boolean;
  novoQuemSomos: boolean;

  portfolio = new Portfolio();
  quemSomos = new QuemSomos();

  salvando = false;
  idSelected;

  ngOnInit(): void {
    let token = localStorage.getItem('access_token');
    if(token != null && token != '') {
      this.loginService.validar().subscribe(r=> {
        this.list();
      });
    } else {
      localStorage.removeItem('access_token');
      this.router.navigate(['/login']);
    }
  }

  list() {
    this.portfoliosService.listPortfolios().subscribe(p=> {
      this.portfolios = p;
    });
    this.quemSomosService.listQuemSomos().subscribe(q=> {
      this.quemSomosList = q;
    })
  }

  changeListenerPortfolios(event): void {
    let file: File = event.target.files[0];
    let myReader: FileReader = new FileReader();
    myReader.onloadend = (e) => {
      this.portfolio.imagem = myReader.result as string;
    }
    myReader.readAsDataURL(file);
  }

  changeListenerQuemSomos(event): void {
    let file: File = event.target.files[0];
    let myReader: FileReader = new FileReader();
    myReader.onloadend = (e) => {
      this.quemSomos.imagem = myReader.result as string;
    }
    myReader.readAsDataURL(file);
  }

  cancelarPortfolio() {
    this.novoPortfolio = false;
    this.portfolio = new Portfolio();
  }

  cancelarQuemSomos() {
    this.novoQuemSomos = false;
    this.quemSomos = new QuemSomos();
  }

  savePortfolio() {
    this.salvando = true;
    this.portfoliosService.save(this.portfolio).subscribe(r => {
      this.salvando = false;
      $('#myModal').modal('show');
      document.getElementById('msgT').innerHTML = "Sucesso";
      document.getElementById('msgC').innerHTML = "O portfólio foi salvo com sucesso.";
      this.portfolio = new Portfolio();
      this.novoPortfolio = false;
      this.list();
    }, ()=> {
      this.salvando = false;
      this.list();
    });
  }

  saveQuemSomos() {
    this.salvando = true;
    this.quemSomosService.save(this.quemSomos).subscribe(r => {
      this.salvando = false;
      $('#myModal').modal('show');
      document.getElementById('msgT').innerHTML = "Sucesso";
      document.getElementById('msgC').innerHTML = "O dado foi salvo com sucesso.";
      this.quemSomos = new QuemSomos();
      this.novoQuemSomos = false;
      this.list();
    }, ()=> {
      this.salvando = false;
      this.list();
    });
  }

  deletePortfolio(id) {
    this.idSelected = id;
    $('#modalExcluirPortfolio').modal('show');
    document.getElementById('msgTP').innerHTML = "Atenção!";
    document.getElementById('msgCP').innerHTML = "O dado será permanentemente excluido.";
  }
    
  confirmDeletePortfolio() {
    this.portfoliosService.delete(this.idSelected).subscribe(r => {
      this.closeModal();
      this.idSelected = '';
      this.list();
    });
  }

  deleteQuemSomos(id) {
    this.idSelected = id;
    $('#modalExcluirQuemSomos').modal('show');
    document.getElementById('msgTQ').innerHTML = "Atenção!";
    document.getElementById('msgCQ').innerHTML = "O dado será permanentemente excluido.";
  }

  confirmDeleteQuemSomos() {
    this.quemSomosService.delete(this.idSelected).subscribe(r => {
      this.closeModal();
      this.idSelected = '';
      this.list();
    });
  }

  editarPortfolio(portfolio) {
    this.portfolio = portfolio;
    this.novoPortfolio = true;
  }

  editarQuemSomos(quemSomos) {
    this.quemSomos = quemSomos;
    this.novoQuemSomos = true;
  }

  validarCamposPortfolio() {
    if(this.portfolio.titulo && this.portfolio.descricao && this.portfolio.imagem) {
      return true;
    } else {
      return  false;
    }
  }

  validarCamposQuemSomos() {
    if(this.quemSomos.titulo && this.quemSomos.ano && this.quemSomos.descricao && this.quemSomos.imagem) {
      return true;
    } else {
      return  false;
    }
  }

  closeModal() {
    $('#myModal').modal('hide');
    $('#modalExcluirPortfolio').modal('hide');
    $('#modalExcluirQuemSomos').modal('hide');
    this.idSelected = '';
  }

}
