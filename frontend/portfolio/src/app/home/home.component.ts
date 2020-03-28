import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'p-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  title = 'portfolio';
  
  ngOnInit(): void {
    
  }

}
