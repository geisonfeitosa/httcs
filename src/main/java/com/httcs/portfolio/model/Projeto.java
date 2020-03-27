package com.httcs.portfolio.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Projeto {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;
	
	private String titulo;
	
	private String descricao;
	
	private String linkRepositorio;
	
	private String linkAplicacao;
	
	private String imagem;

	
	public String getTitulo() {
		return titulo;
	}

	public void setTitulo(String titulo) {
		this.titulo = titulo;
	}

	public String getDescricao() {
		return descricao;
	}

	public void setDescricao(String descricao) {
		this.descricao = descricao;
	}

	public String getLinkRepositorio() {
		return linkRepositorio;
	}

	public void setLinkRepositorio(String linkRepositorio) {
		this.linkRepositorio = linkRepositorio;
	}

	public String getLinkAplicacao() {
		return linkAplicacao;
	}

	public void setLinkAplicacao(String linkAplicacao) {
		this.linkAplicacao = linkAplicacao;
	}

	public String getImagem() {
		return imagem;
	}

	public void setImagem(String imagem) {
		this.imagem = imagem;
	}

	public Integer getId() {
		return id;
	}
	

}
