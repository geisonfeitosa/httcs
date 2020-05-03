package com.httcs.portfolio.rest;

import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.httcs.portfolio.bo.AuthBo;
import com.httcs.portfolio.bo.UserBo;
import com.httcs.portfolio.security.JWTUtil;
import com.httcs.portfolio.security.UserSS;

@RestController
@RequestMapping("rest/auth")
public class AuthRest {
	
	@Autowired
	private JWTUtil jwtUtil;
	
	@Autowired
	private AuthBo authBo;

	
	@PostMapping("/refresh_token")
	public ResponseEntity<Void> refreshToken(HttpServletResponse response) {
		UserSS user = UserBo.authenticated();
		String token = jwtUtil.generateToken(user.getUsername());
		response.addHeader("Authorization", "Bearer " + token);
		response.addHeader("access-control-expose-headers", "Authorization");
		response.addHeader("access-control-expose-headers", "Authorization");
		return ResponseEntity.noContent().build();
	}
	
	@PostMapping("/forgot")
	public String forgot(@RequestBody String email) {
		return authBo.sendNewPassword(email);
	}
	
}
