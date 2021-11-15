import React from 'react';
import MvpJumbottron from '../components/MvpJumbottron';
import './mvp.css'

const Mvp = () => {
  return (
    <article className="jumbo-box max-width max-height">
      <MvpJumbottron />
      <img src="images/duke-wip.png" alt="Duke holding sign that says Work in Progress" className="mvp-duke-wip"/>
    </article>
  );
}

export default Mvp;
