import React from 'react'
import styled from "styled-components"
import { NavLink as Link, NavLink } from 'react-router-dom';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import navimage from "../img/WhatsApp_Image_2022-07-26_at_11.03.05_PM-removebg-preview.png"
import {ThemeProvider} from "styled-components";
import {darkTheme,lightTheme} from "../theam"

import Prices from './Prices';
const Container = styled.div`
    height: 64px;
    width: 100vw;
    box-shadow: 0px 0px 8px -1px rgb(128, 128, 128);
    -webkit-box-shadow: 0px 0px 8px -1px rgb(128, 128, 128);
    -moz-box-shadow: 0px 0px 8px -1px rgb(128, 128, 128);
    display: flex;
    background-color: white;
    align-items: center;
    position: sticky;
    top: 0;
    background-color:${({ theme }) => theme.bgLighter};

    @media only screen and (max-width: 600px) {
        background-color: red;
        
      
  
  
}
`
const Left = styled.div`
     flex: 1;
    font-weight: bold;
    letter-spacing: 2px;
    margin-left: 20px;
    cursor: pointer;
    
`
const Right = styled.div`
     flex: 2;
    display: flex;

    margin-left: 20px;
`
const Center = styled.div`
     flex: 2;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 40px;
`
const NavbarLinks = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

width: 320px;
    padding-left: 140px;
`
const Btn = styled.div`
      flex: 1;
    display: flex;
    justify-content: center;
    margin-right: 10px;
`
const Links = styled.div`
    margin-right: 24px;
    cursor: pointer;
    letter-spacing: 1px;
    color: ${({ theme }) => theme.text};
   
    font-weight: bold;
    font-family: sans-serif;
    text-decoration: none;
    font-size: 14px;
    :hover{
    color: rgba(0, 0, 255, 0.994);
    /* border-bottom: 1px solid blue; */
  
}
`
const ImageNav = styled.img`
      width: 200px;
    height: 70px;
`
const SignIn = styled.div`
   background-color: white;
    height: 40px;
    width: 120px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: green;
    border-radius: 20px;
    border: 1px solid green;
    margin-right: 10px;
    letter-spacing: 1px;
    cursor: pointer;
    transition: 0.7s all ease;
    text-decoration: none;
    :hover{
        background-color: green;
        color: white;

    }
`
const Modes = styled.div`
    
`

function Navbar({ darkMode, setDarkmode }) {
    return (
        <>

            <Container>
                <Left>
                    <ImageNav src={navimage} />

                </Left>
                <Center></Center>
                <Right>
                    <NavbarLinks>
                        <NavLink to="/home">  <Links>HOME</Links></NavLink>
                      
                        <Links>HOW TO USE</Links>

                        {/* <NavLink className="links" to='/home'>Home</NavLink>
                    <NavLink className="links" to='/iomodule'>How to use</NavLink> */}
                    </NavbarLinks>

                    <Btn>

                        {/* <NavLink className="signin" to='./page2'>Join Us</NavLink> */}
                        <SignIn>JOIN US</SignIn>

                    </Btn>
                    <Modes>

                        <Brightness4Icon  onClick={() => setDarkmode(!darkMode)} />
                    </Modes>

                </Right>

            </Container>
            <Prices/>
        </>

    )
}

export default Navbar