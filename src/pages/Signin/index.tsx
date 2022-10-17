
import React from 'react'
import logoImg from '../../assets/logo.svg'
import {Container, Logo, Form, FormTitle} from './styles'
import Input from '../../components/Input'
import Button from '../../components/Button'

export const SignIn: React.FC = () => {
  return (
        <Container>
          <Logo>
            <img src={logoImg} alt="Minha Carteira"/>
            <h2>Minha Carteira</h2>
          </Logo>

          <Form onSubmit={() =>{}}>
            <FormTitle> Entrar </FormTitle>

            <Input
              type="email"
              required
              placeholder="E-mail"
            />
            <Input
              type="password"
              required
              placeholder="Senha"
            />

            <Button type="submit">
              ACESSAR
            </Button>

          </Form>
        </Container>
      
  )
}

export default SignIn
