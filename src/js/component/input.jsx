import React, { useState } from "react";


const Input = ({ onEnter }) => {
    const [entrada_Valor, setEntrada_Valor] = useState('');

    const presionar_Tecla = (e) => {
        if (e.key === 'Enter' && entrada_Valor.trim() !== '') {
            onEnter(entrada_Valor.trim());
            setEntrada_Valor('');
        }
    };

    return (
        <div>
            <h1 className="mt-4 pt-1">TODO List </h1>
            <div className="input-group mx-auto mt-1 pt-0 w-50 align-items-center" style={{ maxWidth: '600px', height: '40px' }}>

                <div className="form-floating">
                    <input type="text" className="form-control" id="floatingInputGroup1" placeholder="Ingreso texto" value={entrada_Valor}
                        onChange={(e) => setEntrada_Valor(e.target.value)}
                        onKeyPress={presionar_Tecla} style={{ height: 'calc(1.5em + 0.50rem + 2px)' }} />

                </div>
            </div>
        </div>
    )
};
export default Input;