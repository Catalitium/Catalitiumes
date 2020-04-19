import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import BotLogo from '../../assets/img/Botcircle-cropped.png';

const Robotica = props => {
    return (
        <div className='card-body'>
            <h5 align="center"><img src={BotLogo} alt="Robotics-logo" width={65} height={60} ></img></h5>
            <h4 align="center" className="card-title"> Robótica
            <br></br>
            <br></br>
                <p align="center" className='card-text text-seconday'>
                Líderes y expertos en el desarrollo, diseño y producción de automatismos 
                </p>
            </h4>
        </div>
    );

};

export default Robotica;