package com.httcs.portfolio.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.httcs.portfolio.model.Usuario;

public interface UsuarioDao extends JpaRepository<Usuario, Integer> {
	
	Usuario findByEmailAndSenha(String email, String senha);
	
	@Query("select u from Usuario u where u.email = :email")
	Usuario findByEmail(@Param("email") String email);

}
