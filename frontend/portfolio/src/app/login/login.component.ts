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
  lembrarDados = false;

  ngOnInit() {
    this.usuario.email = localStorage.getItem('email');
    this.usuario.senha = localStorage.getItem('senha');
    this.lembrarDados = (this.usuario.email != null && this.usuario.senha != null) ? true : false;
    if(localStorage.getItem('access_token') != null) {
      this.router.navigate(['/menu']);
    }
  }

  home() {
    this.router.navigate(['/']);
  }

  logar() {
    localStorage.removeItem('access_token');
    this.loginService.login(this.usuario).subscribe(r=> {
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

  lembrar() {
    this.lembrarDados = !this.lembrarDados;
    if(this.lembrarDados) {
      localStorage.setItem('email', this.usuario.email);
      localStorage.setItem('senha', this.usuario.senha);
    } else {
      localStorage.removeItem('email');
      localStorage.removeItem('senha');
    }
  }

  closeModal() {
    $('#myModal').modal('hide');
  }

}
