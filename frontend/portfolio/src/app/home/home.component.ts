import { Component, OnInit } from '@angular/core';
import { PortfoliosService } from '../services/portfolios.service';
import { Portfolio } from '../menu/portfolio';
import { QuemSomos } from '../menu/quemSomos';
import { QuemSomosService } from '../services/quemSomos.service';

@Component({
  selector: 'p-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private portfoliosService: PortfoliosService,
    private quemSomosService: QuemSomosService,
  ) { }

  title = 'portfolio';

  portfolios = [];
  quemSomosList = [];

  portfolio = new Portfolio();
  quemSomos = new QuemSomos();
  
  ngOnInit(): void {
    localStorage.removeItem('access_token');
    this.list();
  }

  list() {
    this.portfoliosService.listPortfolios().subscribe(p=> {
      this.portfolios = p;
    });
    this.quemSomosService.listQuemSomos().subscribe(q=> {
      this.quemSomosList = q;
    })
  }

  openModal(portfolio) {
    this.portfolio = new Portfolio();
    this.portfolio = portfolio;
  }

}
