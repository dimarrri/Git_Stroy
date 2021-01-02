import React from 'react';
import IconLogo from './icon/logo.svg';
import { useMediaQuery } from 'react-responsive';

import './app.scss';


function createMediaClass(mediaQuery, prefClass) {
  for (let prop in mediaQuery) {
    if (mediaQuery[prop]) return `${prefClass}-${prop}`
  }
}


function SinglePageApp() {

  const mediaQuery = {
    ms: useMediaQuery({ maxWidth: '376px', }), xs: useMediaQuery({ maxWidth: '576px', }),
    sm: useMediaQuery({ maxWidth: '768px', }), md: useMediaQuery({ maxWidth: '992px', }), lg: useMediaQuery({ maxWidth: '1200px' }),
  }

  return (
    <>
      <div className="container-grid">

        <div className={`wrapper-header`}>
          <div className={`header-logo ${createMediaClass(mediaQuery, "header-logo")}`}>
            <img src={IconLogo} alt='Logo' width="35px" />
            <h1>Git Stroy</h1>
          </div>

          <div className={`header-search ${createMediaClass(mediaQuery, "header-search")}`}>
            <input placeholder="Поиск..." type="text" />
            <button type="button" >
              <i class="fa fa-shopping-cart" aria-hidden="true"></i>
            </button>
          </div>
        </div>


        <div className={`main-menu`}>

        </div>



        <div className={`container-content`}>

          <div className="wrapper-card-group">

          </div>
          <div className="wrapper-card-group">

          </div>
          <div className="wrapper-card-group">

          </div>


        </div>
      </div>
    </>
  )
}

export default SinglePageApp;
