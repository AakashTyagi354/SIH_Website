import React from 'react'
import "./home.css"
import imgChart from '../img/Screenshot (796).png'
import footerimage from '../img/WhatsApp_Image_2022-07-26_at_10.23.03_PM__1_-removebg-preview.png'
import imgpoint from '../img/MyJoining - Revolutionize Onboarding.png'
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined';
import CopyrightOutlinedIcon from '@mui/icons-material/CopyrightOutlined';
import { NavLink as Link, NavLink } from 'react-router-dom';

function Home() {
  return (
    <>
      <div className='home2'>
        <div className="home2Left">
          <div className="homeLeft">
            <div className="homeTitle">
              <h4 data-aos="fade-left"></h4>
              <p className='homeP' data-aos="zoom-out">Investing and trading made simple, affordable <br /> and accessible for you.</p>
            </div>
            {/* <NavLink to="/model">
            <div className="homeBtn2" >Get Started</div>
            </NavLink> */}
            <NavLink to="/model">
            <div className='homeBtn2'>get started</div>
            </NavLink>
          </div>
        </div>

        <div className="home2Right">
          <img className='chartImg' src={imgChart} data-aos="fade-up" alt="" />
        </div>

      </div>
      <div className="home3">
        <div className="home3Left">
          <div className="home3video">
            <iframe
              width="90%"
              height="260"
              src="https://www.youtube.com/embed/AgyTHzjBS-c"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        </div>
        <div className="home3Right">
          <div className="script">
            <div className="title">Problem Description </div>
            <div className="problemDesc">

              From commodity traders, procurement team and risk management teams, procure physical commodities like crude oil, natural gases, coal etc. by looking at market trends and rudimentary indicators. Experiential trading decisions, based on market sentiments can lead to huge losses and opportunity cost. Inaccurate planning and forecasting often leads to poor service levels, loss of revenue and profit.
            </div>
            <div className="title2">Forecasting Engine</div>
            <div className="problemDesc">

              Our forecasting engine contains diverse, state of the art deep learning algorithms to generate bang on! predictions well before the time. The forecast is available for various commodities, which entails dedicated models for different time horizons, right from days to months to years, from short term to long forecasting, just on a single click! We have deployed our forecasting engine as an API service which can be easily integrate with public websites, mobile apps, cloud dashboards and various other online platforms.
            </div>

          </div>
        </div>
      </div>
      <div className="home5">
        <div className="home5left">
          <img src={imgpoint} className="pointImage" alt="" />
        </div>
        <div className="home5right">

          <div className="points">
            <div className="point">
              <CheckCircleOutlineOutlinedIcon className="pointIcon" />
              <p className='subPoint'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur eum inventore molestias!</p>
            </div>
            <div className="point">
              <CheckCircleOutlineOutlinedIcon className="pointIcon" />
              <p className='subPoint'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur eum inventore molestias!</p>
            </div>
            <div className="point">
              <CheckCircleOutlineOutlinedIcon className="pointIcon" />
              <p className='subPoint'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur eum inventore molestias!</p>
            </div>
            <div className="point">
              <CheckCircleOutlineOutlinedIcon className="pointIcon" />
              <p className='subPoint'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur eum inventore molestias!</p>
            </div>
            <div className="point">
              <CheckCircleOutlineOutlinedIcon className="pointIcon" />
              <p className='subPoint'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur eum inventore molestias!</p>
            </div>
            <div className="point">
              <CheckCircleOutlineOutlinedIcon className="pointIcon" />
              <p className='subPoint'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur eum inventore molestias!</p>
            </div>
            <div className="point">
              <CheckCircleOutlineOutlinedIcon className="pointIcon" />
              <p className='subPoint'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur eum inventore molestias!</p>
            </div>

          </div>
        </div>
      </div>
      <div className="home6">
        <div className="home6Top">
          <div className="home6left">
            <img src={footerimage} className="imageFooter" alt="" />
          </div>
          <div className="home6center">
            <div className="titlecenter">About Us</div>
            <div className="subcenter">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis sapiente possimus officiis perferendis fugiat! Assumenda cum nihil omnis accusamus odio!</div>
          </div>
          <div className="home6right">
            <div className="titleright">Contact Us</div>
            <div className="info">
              <div className="email">suport@gamil.com</div>
              <div className="number">+91-9008218354</div>
              <div className="address">Lorem ipsum dolor sit amet consectetur adipisicing elit. </div>
            </div>
            <div className="footersocial">
              <div className="socialfooter">
                <YouTubeIcon className='footericons' />
              </div>
              <div className="socialfooter">
                <LinkedInIcon className='footericons' />
              </div>
              <div className="socialfooter">
                <TwitterIcon className='footericons' />
              </div>
            </div>
          </div>
        </div>
        <div className="home6Bottom">
          <CopyrightOutlinedIcon style={{ color: "white" }} /> <p className='copyRight'>2020-2024 codeParwaha. All right reserved</p>
        </div>
      </div>
    </>
  )
}

export default Home