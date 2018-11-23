import React from 'react'
import Header from '../../components/routers/header.jsx'

export const Template = (props) => (
  <div>
    <Header/>
    {props.children}
  </div>
);
