import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';
import { Router } from '@angular/router';
declare var $: any;

@Component({
  selector: 'p-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private loginService: LoginService,
    private router: Router
  ) { }
  usuario = {email:'', senha:''};

  ngOnInit() {
    console.log(localStorage.getItem('access_token'));
    if(localStorage.getItem('access_token') != null) {
      this.router.navigate(['/menu']);
    }
  }

  logar() {
    localStorage.clear();
    this.loginService.login(this.usuario).subscribe(r=> {
      console.log(r.access_token);
      if(r.access_token != undefined) {
        localStorage.setItem('access_token', r.access_token);
        this.usuario = {email:'', senha:''};
        this.router.navigate(['/menu']);
      } else {
        $('#myModal').modal('show');
        document.getElementById('msgT').innerHTML = "Erro!";
        document.getElementById('msgC').innerHTML = "Email ou senha incorretos.";
      }
    })
  }

}
