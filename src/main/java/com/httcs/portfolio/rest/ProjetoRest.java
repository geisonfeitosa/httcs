package com.httcs.portfolio.rest;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
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
	
	@GetMapping
	public List<Projeto> findall() {
		List<Projeto> result = new ArrayList<Projeto>();
		projetoDao.findAll().forEach(p-> {
			result.add(p);
		});
		return result;
	}
	
	@DeleteMapping("/{id}")
	public void delete(@PathVariable("id") Integer id) {
		projetoDao.deleteById(id);
	}
	

}
