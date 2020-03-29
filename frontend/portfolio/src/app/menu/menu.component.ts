import { Component, OnInit } from '@angular/core';
import { PortfoliosService } from '../services/portfolios.service';
import $ from "jquery";
import { Portfolio } from './portfolio';

@Component({
  selector: 'p-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(
    private portfoliosService: PortfoliosService
  ) { }

  portfolios = [];
  novo:boolean;
  portfolio = new Portfolio();

  ngOnInit(): void {
    this.listPortfolios();
    this.novo = false;
  }

  listPortfolios() {
    this.portfoliosService.listPortfolios().subscribe(r=> {
      this.portfolios = r;
    });
  }

  save() {
    this.portfoliosService.save(this.portfolio).subscribe(r=> {
      this.portfolio = new Portfolio();
      this.novo = false;
      this.listPortfolios();
    });
  }

  delete(id) {
    this.portfoliosService.delete(id).subscribe(r=> {
      this.listPortfolios();
    })
  }

  editar(portfolio) {
    this.portfolio = portfolio;
    this.novo = true;
  }

}
