package com.httcs.portfolio;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class PortfolioApplication {
	
//	@Autowired  //implements CommandLineRunner 
//	private BCryptPasswordEncoder encrypt;
//	
//	@Autowired
//	private UsuarioDao usuarioDao;

	public static void main(String[] args) {
		SpringApplication.run(PortfolioApplication.class, args);
	}
	
//	@Override
//	public void run(String... args) throws Exception {
//		Usuario usuario = new Usuario();
//		usuario.setEmail("geisonlealfeitosa.glf@gmail.com");
//		usuario.setSenha(encrypt.encode("1313feitosa"));
//		usuario.addPerfil(EnumPerfil.ADMIN);
//		usuarioDao.save(usuario);
//	}

}
