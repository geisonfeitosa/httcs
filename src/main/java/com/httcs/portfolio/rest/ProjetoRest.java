package com.httcs.portfolio.rest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.httcs.portfolio.dao.ProjetoDao;
import com.httcs.portfolio.model.Projeto;

@RestController
@RequestMapping("rest/projeto")
public class ProjetoRest {
	
	@Autowired
	private ProjetoDao projetoDao;
	
	
	@PostMapping
	public Projeto save(@RequestBody Projeto projeto) {
		return projetoDao.save(projeto);
	}

}
