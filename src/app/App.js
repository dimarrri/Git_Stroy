import React, { useState, useRef } from 'react';
import classnames from 'classnames';
import IconLogo from './icon/logo.svg';
import { useMediaQuery } from 'react-responsive';
import { auxSetMethod, createFakeDate } from './helpers/helpers'; 
import { ContainerProductGroup } from "./components/index";


import "./app.scss";

function SinglePageApp() {

  const allMediaQuery = {
    ms: useMediaQuery({ maxWidth: '376px', }), xs: useMediaQuery({ maxWidth: '576px', }),
    sm: useMediaQuery({ maxWidth: '768px', }), md: useMediaQuery({ maxWidth: '992px', }),
    lg: useMediaQuery({ maxWidth: '1200px' }),
  }

  return (
    <>
      <div className="container-grid">

        <div className={classnames(auxSetMethod.createMediaClass("wrapper-header", allMediaQuery))}>
          <div className={classnames(auxSetMethod.createMediaClass("header-logo", allMediaQuery))}>
            <img src={IconLogo} alt='Logo' width="28px" />
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

          <ContainerProductGroup locationBlock="left" ></ContainerProductGroup>   
          <ContainerProductGroup locationBlock="right" ></ContainerProductGroup>   
          <ContainerProductGroup locationBlock="left" ></ContainerProductGroup>   

        </div>
      </div>
    </>
  )
}

export default SinglePageApp;
