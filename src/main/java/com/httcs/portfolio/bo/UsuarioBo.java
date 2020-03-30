package com.httcs.portfolio.bo;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.httcs.portfolio.dao.TokenDao;
import com.httcs.portfolio.dao.UsuarioDao;
import com.httcs.portfolio.model.Token;
import com.httcs.portfolio.model.Usuario;

@Service
public class UsuarioBo {
	
	@Autowired
	private TokenDao tokenDao;
	
	@Autowired
	private UsuarioDao usuarioDao;
	
	public Map<String, Object> login(Usuario usuario) {
		Map<String, Object> result = new HashMap<String, Object>();
		usuario = usuarioDao.findByEmailAndSenha(usuario.getEmail(), usuario.getSenha());
		Token token = tokenDao.findByUsuario(usuario);
		if(usuario != null && token != null) {
			result.put("email", usuario.getEmail());
			result.put("access_token", token.getToken());
		}
		return result;
	}

}
