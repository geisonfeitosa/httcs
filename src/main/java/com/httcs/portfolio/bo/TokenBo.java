package com.httcs.portfolio.bo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.httcs.portfolio.dao.TokenDao;

@Service
public class TokenBo {
	
	@Autowired
	private TokenDao tokenDao;
	
	public boolean validar(String token) {
		return tokenDao.findByToken(token) != null ? true : false;
	}

}
