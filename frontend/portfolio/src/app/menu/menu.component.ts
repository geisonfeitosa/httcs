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

  ngOnInit(): void {
    this.loginService.validar(localStorage.getItem('access_token')).subscribe(r=> {
      if(!r) {
        localStorage.clear();
        this.router.navigate(['/login']);
      } else {
        this.list();
        this.novoPortfolio = false;
        this.novoQuemSomos = false;
      }
    })
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
    }, err=> {
      this.salvando = false;
      $('#myModal').modal('show');
      document.getElementById('msgT').innerHTML = "Erro";
      document.getElementById('msgC').innerHTML = err.message;
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
    }, err=> {
      this.salvando = false;
      $('#myModal').modal('show');
      document.getElementById('msgT').innerHTML = "Erro";
      document.getElementById('msgC').innerHTML = err.message;
    });
  }

  deletePortfolio(id) {
    this.portfoliosService.delete(id).subscribe(r => {
      this.list();
    })
  }

  deleteQuemSomos(id) {
    this.quemSomosService.delete(id).subscribe(r => {
      this.list();
    })
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
    return true;
    // if(this.portfolio.titulo && this.portfolio.descricao && this.portfolio.linkRepositorio && this.portfolio.linkAplicacao) {
    //   return true;
    // } else {
    //   return  false;
    // }
  }

  validarCamposQuemSomos() {
    return true;
    // if(this.quemSomos.titulo && this.quemSomos.ano && this.quemSomos.descricao) {
    //   return true;
    // } else {
    //   return  false;
    // }
  }

}
