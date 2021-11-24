import React from "react";
import { Form } from "react-bootstrap";

const NombreAtrapado = () =>{


    return(
        <Form>
            <div>
                <input type="text" name="name" />
            </div>
           <div>
                <button name="buttom"/* onClick={handleClick()} */ >
                    cargar
                </button>
                
           </div>
            
        </Form>
        
    );
}

export default NombreAtrapado;


