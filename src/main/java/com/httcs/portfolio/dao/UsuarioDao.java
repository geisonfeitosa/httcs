package com.httcs.portfolio.dao;

import org.springframework.data.repository.CrudRepository;

import com.httcs.portfolio.model.Usuario;

public interface UsuarioDao extends CrudRepository<Usuario, Integer> {
	
	Usuario findByEmailAndSenha(String email, String senha);

}
