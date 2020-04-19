import React from 'react'

export const CursosSimples = () => {
    return (


        <div style={{display: 'flex', justifyContent: 'center'}} >

        <div class="row">
          <div class="column" >
            <h6 align="center">Curso:</h6>
              <ol type="1" > 
                <li>Introductorio</li>
                <li>Intermedio</li>
              </ol>
            </div>
            
            <div class="column" >
              <h6 align="center" >Duración:</h6>
              <ul style={{ listStyleType: "none" }}>
                <li>1 Hora</li>
                <li>1 Dia</li>
              </ul>
            </div>
            </div>
        </div>
    )
}

export default CursosSimples;