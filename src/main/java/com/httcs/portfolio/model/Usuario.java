package com.httcs.portfolio.model;

import java.util.HashSet;
import java.util.Set;
import java.util.stream.Collectors;

import javax.persistence.CollectionTable;
import javax.persistence.ElementCollection;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.httcs.portfolio.enuns.EnumPerfil;


@Entity
public class Usuario {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;
	
	private String email;
	
	@JsonIgnore
	private String senha;
	
	@ElementCollection(fetch = FetchType.EAGER)
	@CollectionTable(name="PERFIS")
	private Set<Integer> perfis = new HashSet<Integer>();
	

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getSenha() {
		return senha;
	}

	public void setSenha(String senha) {
		this.senha = senha;
	}
	
	public Set<EnumPerfil> getPerfis() {
		return perfis.stream().map(p-> EnumPerfil.toEnum(p)).collect(Collectors.toSet());
	}
	
	public void addPerfil(EnumPerfil perfil) {
		perfis.add(perfil.getCodigo());
	}

	public Integer getId() {
		return id;
	}

}
