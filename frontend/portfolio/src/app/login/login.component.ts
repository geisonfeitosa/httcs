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
  logando = false;
  botao = "Entrar";

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
    this.logando = true;
    this.botao = "Logando...";
    localStorage.removeItem('access_token');
    this.loginService.login(this.usuario).subscribe(r=> {
      let access_token = r.headers.get('Authorization').replace("Bearer ", '');
      this.logando = false;
      this.botao = "Entrar";
      localStorage.setItem('access_token', access_token);
      this.usuario = {email:'', senha:''};
      this.router.navigate(['/menu']);
    }, err=> {
      this.logando = false;
      this.botao = "Entrar";
      let erro = JSON.parse(err.error);
      $('#myModal').modal('show');
      document.getElementById('msgT').innerHTML = "Erro!";
      document.getElementById('msgC').innerHTML = `${erro.message}`;
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
