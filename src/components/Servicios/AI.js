import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import AILogo from '../../assets/img/AIcircle-cropped.png';

const AI = props => {
    return (
        <div className='card-body'>
            <h5 align="center"><img src={AILogo} alt="AI-logo" width={65} height={60} ></img></h5>
            <h4 align="center" className="card-title"> AI
            <br></br>
            <br></br>
                <p align="center" className='card-text text-seconday'>
                Para alcanzar máximo potencial, integramos Data Science, ML y NPLG
                </p>
            </h4>
        </div>
    );

};

export default AI;