import React from 'react';
import classnames from 'classnames';
import IconLogo from './icon/logo.svg';
import { useMediaQuery } from 'react-responsive';

import imagine from './__img/plitca.jpg'

import './app.scss';



function createMediaClass(mainClass, allMediaQuery) {
  for (let typeMediaKey in allMediaQuery) {
    if (allMediaQuery[typeMediaKey]) return {
      [mainClass]: true,
      [`${mainClass}-${typeMediaKey}`]: true,
    }
    else continue;
  }
  return { [mainClass]: true }
}


function SinglePageApp() {

  const allMediaQuery = {
    ms: useMediaQuery({ maxWidth: '376px', }), xs: useMediaQuery({ maxWidth: '576px', }),
    sm: useMediaQuery({ maxWidth: '768px', }), md: useMediaQuery({ maxWidth: '992px', }),
    lg: useMediaQuery({ maxWidth: '1200px' }),
  }

  return (
    <>
      <div className="container-grid">

        <div className={classnames(createMediaClass("wrapper-header", allMediaQuery))}>
          <div className={classnames(createMediaClass("header-logo", allMediaQuery))}>
            <img src={IconLogo} alt='Logo' width="35px" />
            <h1>Git Stroy</h1>
          </div>

          <div className={classnames(createMediaClass("header-search", allMediaQuery))}>
            <input placeholder="Поиск..." type="text" />
            <button type="button" >
              <i class="fa fa-shopping-cart" aria-hidden="true"></i>
            </button>
          </div>

        </div>


        <div className={classnames(createMediaClass("main-menu", allMediaQuery))}>

        </div>



        <div className={`container-content`}>

          <div className="wrapper-card-group">

            <div className="wrapper-card__item-vertical" style={{backgroundImage: `url(${imagine})`}}>
              
              <h1>Укладка плитки</h1>
            </div>

            <div className="wrapper-card__item-horizontal-top">

            </div>
            <div className="wrapper-card__item-horizontal-bottom">

            </div>


          </div>
          <div className="wrapper-card-group">
            <div className="wrapper-card__item-vertical"></div>
            <div className="wrapper-card__item-horizontal-top"></div>
            <div className="wrapper-card__item-horizontal-bottom"></div>
          </div>

          <div className="wrapper-card-group">
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
