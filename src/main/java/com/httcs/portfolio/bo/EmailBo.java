package com.httcs.portfolio.bo;

import org.springframework.mail.SimpleMailMessage;

import com.httcs.portfolio.model.Usuario;


public interface EmailBo {
	
	void sendEmail(SimpleMailMessage msg);
	
	void sendNewPasswordEmail(Usuario usuario, String newPass);
}
