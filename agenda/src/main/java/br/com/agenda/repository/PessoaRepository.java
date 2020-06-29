package br.com.agenda.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import br.com.agenda.model.Pessoa;

public interface PessoaRepository extends JpaRepository<Pessoa, Long> {

}
