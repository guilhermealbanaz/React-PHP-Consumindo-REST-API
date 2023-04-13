import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {Container, ContentTitle, ButtonAction, ButtonSubmit, Table, Title } from './style';

export const Home = () => {

  const [dt, setDt] = useState([]);

  const getProdutos = async () => {
    fetch("http://localhost/project/index.php").then((res) => res.json()).then((data) => (
      setDt(data.records)
    ));
  }

  useEffect(() => {
    getProdutos();
  }, [])
  return (
    <Container>
      <ContentTitle>
        <Title>Listar</Title>
        <ButtonAction>
          <Link to="/cadastrar">
            <ButtonSubmit>Cadastrar Novas Descrições</ButtonSubmit>
          </Link>
        </ButtonAction>
      </ContentTitle>
      <Table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Título</th>
            <th>Descrição</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {Object.values(dt).map(product => ( 
            <tr key={product.id}>
              <td>
                {product.id}
              </td>
              <td>
                {product.titulo}
              </td>
              <td>
                {product.descricao}
              </td>
              <td>
                Visualizar/editar/apagar
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
}