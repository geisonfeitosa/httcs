package com.httcs.portfolio.dao;

import org.springframework.data.repository.CrudRepository;

import com.httcs.portfolio.model.Token;
import com.httcs.portfolio.model.Usuario;

public interface TokenDao extends CrudRepository<Token, Integer> {
	
	Token findByUsuario(Usuario usuario);
	Token findByToken(String token);

}
