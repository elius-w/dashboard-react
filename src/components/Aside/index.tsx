import React, {useState} from 'react'
import logoImg from '../../assets/logo.svg'
import { Link } from 'react-router-dom';
import { useAuth } from '../../hooks/auth'
import { useTheme} from '../../hooks/theme'

import Toggle from '../Toggle'

import {
  MdDashboard,
  MdArrowDownward,
  MdArrowUpward,
  MdExitToApp,
  MdClose,
  MdMenu, 
} from 'react-icons/md'

import {
  Container,
  Header,
  LogImg,
  MenuContainer,
  Title,
  MenuItemButton,
  ToggleMenu,
  ThemeToggleFooter,
} from './styles'

export const Aside = () => {


  const { signOut } = useAuth()
  const { toggleTheme, theme } = useTheme();

  const [toggleMenuIsOpened, setToggleMenuIsOpened] = useState(false)
  const [darkTheme, setDarkTheme] = useState(() => theme.title === 'dark' ? true : false)

  const handleToggleMenu = () =>{
    setToggleMenuIsOpened(!toggleMenuIsOpened)
  }

  const handleChangeTheme = () => {
    setDarkTheme(!darkTheme)
    toggleTheme()
  }

  return (

        <Container menuIsOpen={toggleMenuIsOpened}>          
           <Header>

            <ToggleMenu onClick={handleToggleMenu}>
              { toggleMenuIsOpened ? <MdClose/> : <MdMenu/>}
            </ToggleMenu>

              <LogImg src={logoImg} alt="Logo Minha Carteira"/>
              <Title>Minha Carteira</Title>
            
           </Header>

            <MenuContainer>
                <Link to="/dashboard">
                  <MdDashboard />
                  Dashboard
                </Link>

                <Link to="/list/entry-balance">
                  <MdArrowUpward/>
                  Entradas
                </Link>

                <Link to="/list/exit-balance">
                  <MdArrowDownward/>
                  Saídas
                </Link>

                <MenuItemButton  onClick={signOut}>
                  <MdExitToApp/>
                  Sair
                </MenuItemButton>

                <ThemeToggleFooter menuIsOpen={toggleMenuIsOpened}>
                  <Toggle
                    labelLeft="Light"
                    labelRight="Dark"
                    checked={darkTheme}
                    onChange={handleChangeTheme}

                  />
                </ThemeToggleFooter>

            </MenuContainer>

        </Container>
       
      
  )
}

export default Aside
