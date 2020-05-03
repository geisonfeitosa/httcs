package com.httcs.portfolio.rest;

import java.util.ArrayList;
import java.util.Collections;
import java.util.Comparator;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.httcs.portfolio.dao.QuemSomosDao;
import com.httcs.portfolio.model.QuemSomos;

@RestController
@RequestMapping("rest/quem-somos")
public class QuemSomosRest {

	@Autowired
	private QuemSomosDao quemSomosDao;

	@PreAuthorize("hasAnyRole('ADMIN')")
	@PostMapping
	public QuemSomos save(@RequestBody QuemSomos quemSomos) {
		return quemSomosDao.save(quemSomos);
	}

	@GetMapping
	public List<QuemSomos> findall() {
		List<QuemSomos> result = new ArrayList<QuemSomos>();
		quemSomosDao.findAll().forEach(p -> {
			result.add(p);
		});
		
		Collections.sort(result, new Comparator<QuemSomos>() {
			@Override
			public int compare(QuemSomos p1, QuemSomos p2) {
				return p1.getAno().compareTo(p2.getAno());
			}
		});
		
		return result;
	}

	@PreAuthorize("hasAnyRole('ADMIN')")
	@DeleteMapping("/{id}")
	public void delete(@PathVariable("id") Integer id) {
		quemSomosDao.deleteById(id);
	}

}
