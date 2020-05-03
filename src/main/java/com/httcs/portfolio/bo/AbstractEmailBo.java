package com.httcs.portfolio.bo;

import java.util.Date;

import org.springframework.mail.SimpleMailMessage;
import org.springframework.stereotype.Service;

import com.httcs.portfolio.model.Usuario;

@Service
public abstract class AbstractEmailBo implements EmailBo {
	
//	@Value("${default.sender}")
	private String sender = "geisonlealfeitosa.glf@gmail.com";
	
	
	@Override
	public void sendNewPasswordEmail(Usuario usuario, String newPass) {
		SimpleMailMessage sm = prepareNewPasswordEmail(usuario, newPass);
		sendEmail(sm);
	}

	protected SimpleMailMessage prepareNewPasswordEmail(Usuario usuario, String newPass) {
		SimpleMailMessage sm = new SimpleMailMessage();
		sm.setTo(usuario.getEmail());
		sm.setFrom(sender);
		sm.setSubject("Solicitação de nova senha");
		sm.setSentDate(new Date(System.currentTimeMillis()));
		sm.setText("Nova senha: " + newPass);
		return sm;
	}
}