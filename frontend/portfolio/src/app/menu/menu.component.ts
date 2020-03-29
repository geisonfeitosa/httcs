import { Component, OnInit } from '@angular/core';
import { PortfoliosService } from '../services/portfolios.service';

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

  ngOnInit(): void {
    this.listPortfolios();
  }

  listPortfolios() {
    this.portfoliosService.listPortfolios().subscribe(r=> {
      this.portfolios = r;
      console.log(this.portfolios);
    })
  }

}
