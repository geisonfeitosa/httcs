import { Component, OnInit } from '@angular/core';
import { PortfoliosService } from '../services/portfolios.service';
import { Portfolio } from '../menu/portfolio';

@Component({
  selector: 'p-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private portfoliosService: PortfoliosService
  ) { }

  title = 'portfolio';
  portfolios = [];
  portfolio = new Portfolio();
  
  ngOnInit(): void {
    this.listPortfolios();
  }

  listPortfolios() {
    this.portfoliosService.listPortfolios().subscribe(r=> {
      this.portfolios = r;
    });
  }

  openModal(portfolio) {
    this.portfolio = new Portfolio();
    this.portfolio = portfolio;
  }

}
