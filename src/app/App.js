import React, { useState } from 'react';
import classnames from 'classnames';
import IconLogo from './icon/logo.svg';
import { useMediaQuery } from 'react-responsive';
import { auxSetMethod } from './helpers/helpers'

import imagine from './__img/plitca.jpg'

import './app.scss';



function SinglePageApp() {

  const [statusPreparing, setStatusPreparing] = useState(false)

  const allMediaQuery = {
    ms: useMediaQuery({ maxWidth: '376px', }), xs: useMediaQuery({ maxWidth: '576px', }),
    sm: useMediaQuery({ maxWidth: '768px', }), md: useMediaQuery({ maxWidth: '992px', }),
    lg: useMediaQuery({ maxWidth: '1200px' }),
  }

  console.log(statusPreparing)
  return (
    <>
      <div className="container-grid">

        <div className={classnames(auxSetMethod.createMediaClass("wrapper-header", allMediaQuery))}>
          <div className={classnames(auxSetMethod.createMediaClass("header-logo", allMediaQuery))}>
            <img src={IconLogo} alt='Logo' width="35px" />
            <h1>Git Stroy</h1>
          </div>

          <div className={classnames(auxSetMethod.createMediaClass("header-search", allMediaQuery))}>
            <input placeholder="Поиск..." type="text" />
            <button type="button">
              <i class="fa fa-shopping-cart" aria-hidden="true"></i>
            </button>
          </div>

        </div>


        <div className={classnames(auxSetMethod.createMediaClass("main-menu", allMediaQuery))}>

        </div>



        <div className={`container-content`}>

          <div className="wrapper-card-group-left">

            <div className="wrapper-card__item-vertical" 
              style={{ backgroundImage: `url(${imagine})` }} 
              onMouseOver={(e) => console.dir(e)}
              onMouseOut={(e) => {
                e.stopPropagation()
                e.preventDefault()
              }}>
              <div className="title-card-item" >
                <h3>Укладка плитки </h3>
                <span>1200р/м&#178;</span>
              </div>
              <div className="hover-button"></div>
            </div>

            
            <div className="wrapper-card__item-horizontal-top"></div>
            <div className="wrapper-card__item-horizontal-bottom"></div>
          </div>

          <div className="wrapper-card-group-right">
            <div className="wrapper-card__item-vertical"></div>
            <div className="wrapper-card__item-horizontal-top"></div>
            <div className="wrapper-card__item-horizontal-bottom"></div>
          </div>

          <div className="wrapper-card-group-left">
            <div className="wrapper-card__item-vertical"></div>
            <div className="wrapper-card__item-horizontal-top"></div>
            <div className="wrapper-card__item-horizontal-bottom"></div>
          </div>


        </div>
      </div>
    </>
  )
}

export default SinglePageApp;
