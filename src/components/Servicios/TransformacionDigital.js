import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import TDLogo from '../../assets/img/Codecircle-cropped.png';
       

const TransformacionDigital = props => {
    return (
        <div className='card-body'>
                 <h5 align="center"><img src={TDLogo} alt="TD-logo" width={65} height={65} ></img></h5>
            <h4 align="center" className="card-title"> Transformación Digital 
            <br></br>
            <br></br>
                <p align="center" className='card-text text-seconday'>
                Optimizamos sus procesos y presencia digital preparando a su plantilla
                </p>
            </h4>
        </div>
    );

};

export default TransformacionDigital;