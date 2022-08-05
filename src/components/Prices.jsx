import React, { useEffect } from 'react'
import styled from "styled-components"
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import AOS from 'aos'
import 'aos/dist/aos.css'


const Price = styled.div`
    width: 100vw;
    height: 70px;
    position: sticky;
    top: 80px;
   
    margin-top: 10px;
    background-color: rgb(255, 255, 255);
`
const Main = styled.div`
   height: 60px;
    border: 2px dotted rgba(128, 128, 128, 0.51);
    display: flex;
    align-items: center;
`
const One = styled.div`
      flex: 1;
    border-right: 1px dotted gray;
   display: flex;
   flex-direction: column;
    height: 100%;
    padding-top: 5px;
    cursor: pointer;
    transition: 0.8s all ease;

    :hover{
   
   background-color: rgba(128, 128, 128, 0.182);
}
`
const Top = styled.div`
      display: flex;
    font-family: 'Anton', sans-serif;
    letter-spacing: 1px;
`
const Down = styled.div`
    display: flex;
    justify-content: space-evenly;
`
const First = styled.div`
  font-family: 'Anton', sans-serif;
    color: red;
    font-size: 14px;
    letter-spacing: 1px;
`
const Second = styled.div`
font-family: Arial, Helvetica, sans-serif;
    font-size: 14px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: gray;
`
const Third = styled.div`
font-family: Arial, Helvetica, sans-serif;
    font-size: 14px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: gray;
`


function Prices() {
    useEffect(() => {
        AOS.init({ duration: 3000 });
      }, [])
    return (
        <Price>
            <Main>
                <One data-aos="fade-left">
                    <Top>
                        <ArrowDropDownIcon style={{color:"red"}}/>
                        DOW 30
                    </Top>
                    <Down>
                        <First>-0.5%</First>
                        <Second>-46.40</Second>
                        <Third>31,338.15</Third>
                    </Down>
                </One>

                <One data-aos="fade-right"><Top>
                    <ArrowDropDownIcon style={{color:"red"}} />
                    S&P 500
                  </Top>
                    <Down>
                        <First>-0.08%</First>
                        <Second>-3.34</Second>
                        <Third>3,899.45</Third>
                    </Down>
                </One>
                <One data-aos="fade-up"><Top>
                    <ArrowDropUpIcon style={{color:"green"}} />
                    NASDAQ 100
                </Top>
                    <Down>
                        <First style={{ color: "green" }}>+0.14%</First>
                        <Second>-46.40</Second>
                        <Third>31,338.15</Third>
                    </Down></One>

                <One data-aos="fade-down"><Top>
                    <ArrowDropUpIcon style={{color:"green"}} />
                    GOLD
                </Top>
                    <Down>
                        <First style={{ color: "green" }}>+0.5%</First>
                        <Second>-46.40</Second>
                        <Third>31,338.15</Third>
                    </Down></One>
                <One data-aos="fade-left"><Top>
                    <ArrowDropUpIcon style={{color:"green"}}/>
                    OIL
                </Top>
                    <Down>
                        <First style={{ color: "green" }}>+2.67%</First>
                        <Second>-46.40</Second>
                        <Third>31,338.15</Third>
                    </Down></One>
                <One data-aos="fade-right"><Top>
                    <ArrowDropDownIcon style={{color:"red"}} />
                    BTC/USD
                </Top>
                    <Down>
                        <First>-1.58%</First>
                        <Second>-46.40</Second>
                        <Third>31,338.15</Third>
                    </Down></One>
            </Main>
        </Price>
    )
}

export default Prices