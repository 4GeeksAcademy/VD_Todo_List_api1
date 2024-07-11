import React, { useState } from 'react';

const List = ({ palabras, onDelete, onEdit }) => {
    console.log(palabras)

    const [tareaModificada, setTareaModificada] = useState("");
    const contador_lineas = palabras.length;

    return (
        <div className="container mt-1">

            <ul className="list-group mx-auto mt-0" style={{ maxWidth: '600px' }}>
                {palabras.map((palabra, index) => (
                    <li key={index} className="w-100 border text-start list-group-item">
                        {palabra.label}
                        
                        <button className="btn btn-outline-danger btn-sm float-end"
                            onClick={() => onDelete(palabra.id)}>

                            <i className="fa fa-trash"></i>
                        </button>
                        <button type="button" className="btn btn-outline-primary btn-sm float-end mx-2" data-bs-toggle="modal" data-bs-target="#exampleModal">
                        <i className="fa fa-pen"></i>
                        </button>

                        {/* <!-- Modal --> */}
                        <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div className="modal-dialog">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h5 className="modal-title" id="exampleModalLabel">Editar</h5>
                                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div className="modal-body">
                                        <input type="text" className="form-control" id="floatingInputGroup1" placeholder="Ingreso texto"
                                            value={tareaModificada}
                                            onChange={(e) => setTareaModificada(e.target.value)}
                                        />
                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                        <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={() => onEdit(palabra.id, tareaModificada)}>
                                            editar
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </li>

                ))}
                <li className="list-group-item text-muted small text-start">{contador_lineas} item left</li>
            </ul>
        </div>
    );
};

export default List;