package com.httcs.portfolio.rest;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("rest/token")
public class TokenRest {
	
	@GetMapping("/validar")
	public void validar() {
		
	}

}
