package com.httcs.portfolio.rest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.httcs.portfolio.bo.TokenBo;

@RestController
@RequestMapping("rest/token")
public class TokenRest {
	
	@Autowired
	private TokenBo tokenBo;
	
	
	@PostMapping("/validar")
	public boolean validar(@RequestBody String token) {
		return tokenBo.validar(token);
	}

}
