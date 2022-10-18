
import React, {useState} from 'react'
import logoImg from '../../assets/logo.svg'
import {Container, Logo, Form, FormTitle} from './styles'
import Input from '../../components/Input'
import Button from '../../components/Button'
import { useAuth } from '../../hooks/auth'
import {MdInfo} from 'react-icons/md'

export const SignIn: React.FC = () => {
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const { signIn } = useAuth()


  return (
        <Container>
          <Logo>
            <img src={logoImg} alt="Minha Carteira"/>
            <h2>Minha Carteira</h2>

          </Logo>

          <Form onSubmit={() => signIn(email, password)}>
            <FormTitle>
               Entrar                
            </FormTitle>

            <h3><MdInfo/> Clique em Acessar</h3>

            <Input
              type="email"
              placeholder="E-mail"
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              type="password"
              placeholder="Senha"
              onChange={(e) => setPassword(e.target.value)}

            />

            <Button type="submit">
              ACESSAR
            </Button>

          </Form>
        </Container>
      
  )
}

export default SignIn
