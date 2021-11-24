import React, {useState} from "react";
import {Form} from "react-bootstrap";



const UsuarioFuncional=()=> {

    var nombreCapturado = "";


    function handleClick () {
       
        nombreCapturado = document.getElementById("name");
    }

   

    return (
        <div>
            Hello from user funtional component 
            
            <Form>
                <div>
                    <input type="text" id="name" placeholder="ingrese aqui su nombre" autoFocus value={nombreCapturado}/>
                </div>
                <div>
                    <button onClick={handleClick()}  >
                        cargar
                    </button>
                
                    <br/>

                    El nombre ingresado es {nombreCapturado}
                </div>
            
            </Form>

          
        </div>
    );
}


export default UsuarioFuncional;