import React from 'react';
import MvpJumbottron from '../components/MvpJumbottron';
import './mvp.css'
import duke_wip from "../duke-wip.png";

const Mvp = () => {
    return (
        <article className="jumbo-box max-width max-height">
            <MvpJumbottron />
            <img src={duke_wip} alt="Duke holding sign that says Work in Progress" className="mvp-duke-wip" />
        </article>
    );
}

export default Mvp;
