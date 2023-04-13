import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import {Title, AlertSuccess, AlertDanger, ContentForm, Container, Form, Label, Input, ButtonSubmit, ContentTitle, ButtonAction, BtnA } from './style';

export const Cadastrar = () => {

  const [prod, setProd] = useState({
    titulo: '',
    descricao: ''
  });

  const [status, setStatus] = useState({
    type: "",
    message: ""
  });


  const valueInput = e => setProd({ ...prod, [e.target.name]: e.target.value });
 
  const cadProduct = async e =>{
    e.preventDefault();

    await fetch("http://localhost/project/cadastrar.php", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ prod })
    })
      .then((response) => response.json())
      .then((responseJson) => {
        if (responseJson.erro) {
          setStatus({
            type: 'erro',
            message: responseJson.message
          });   
        } else {
          setStatus({
            type: 'success',
            message: responseJson.message
          });   
        }
      }).catch (() => {
        setStatus({
          type: 'erro',
          message: 'Não foi possível cadastrar o produto!',
        });    
  });
  }

  return (
    <Container>
      <ContentForm>
        <ContentTitle>
          <Title>Cadastrar</Title>
          <ButtonAction>
            <Link to="/">
              <BtnA>
                Voltar para listagem
              </BtnA>
            </Link>
          </ButtonAction>
        </ContentTitle>
        {status.type === 'erro' ? <AlertDanger> {status.message} </AlertDanger> : "" }
        {status.type === 'success' ? <AlertSuccess> {status.message} </AlertSuccess> : "" }
        <Form onSubmit={cadProduct}>
          <Label>Título:</Label>
          <Input type="text" name='titulo' placeholder='Titulo do produto' onChange={valueInput}></Input> <p></p>
            <Label>
              Descrição:
            </Label>
          <Input name='descricao' type='text' placeholder='Descrição do produto'onChange={valueInput} ></Input> <p></p>
          <ButtonSubmit type='submit'>
            Cadastrar
          </ButtonSubmit>
        </Form>
      </ContentForm>
    </Container>
  );
}