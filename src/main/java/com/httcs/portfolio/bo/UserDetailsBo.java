package com.httcs.portfolio.bo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.httcs.portfolio.dao.UsuarioDao;
import com.httcs.portfolio.model.Usuario;
import com.httcs.portfolio.security.UserSS;


@Service
public class UserDetailsBo implements UserDetailsService {
	
	@Autowired
	private UsuarioDao usuarioDao;

	@Override
	public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
		Usuario usuario = usuarioDao.findByEmail(email);
		if(usuario == null) {
			throw new UsernameNotFoundException(email);
		}
		return new UserSS(usuario.getId(), usuario.getEmail(), usuario.getSenha(), usuario.getPerfis());
	}

}
