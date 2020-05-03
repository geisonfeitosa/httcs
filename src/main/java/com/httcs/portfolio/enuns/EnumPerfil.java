package com.httcs.portfolio.enuns;

public enum EnumPerfil {
	
	ADMIN(1, "ROLE_ADMIN"),
	USER(2, "ROLE_USER");
	
	private Integer codigo;
	private String descricao;
	
	private EnumPerfil(Integer codigo, String descricao) {
		this.codigo = codigo;
		this.descricao = descricao;
	}

	public Integer getCodigo() {
		return codigo;
	}

	public String getDescricao() {
		return descricao;
	}
	
	public static EnumPerfil toEnum(Integer codigo) {
		if(codigo == null) {
			return null;
		}
		for(EnumPerfil p : EnumPerfil.values()) {
			if(codigo.equals(p.getCodigo())) {
				return p;
			}
		}
		throw new IllegalArgumentException("Codigo " + codigo + " inválido");
	}

}
