package com.httcs.portfolio.rest;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.httcs.portfolio.bo.UsuarioBo;
import com.httcs.portfolio.model.Usuario;

@RestController
@RequestMapping("rest/usuario")
public class UsuarioRest {
	
	@Autowired
	private UsuarioBo usuarioBo;
	
	
	@PostMapping("/login")
	public Map<String, Object> login(@RequestBody Usuario usuario) {
		return usuarioBo.login(usuario);
	}
	

}
