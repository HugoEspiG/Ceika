import React from 'react';
import PItem from '../../atoms/PItem';
import img1 from '../../../assets/ImagenFamilia1.png';
import img2 from '../../../assets/ImagenTrabajador1.jpg';
import { useNavigate } from 'react-router-dom';
import Button from '../../atoms/button'
import { useState } from 'react';
import ClientForm from '../ClientForm';

const Paragraphs = () => {
    const navigateFn = useNavigate();

    const charge = () => {

    }

    const handleSubmitForm = (event) => {
        event.preventDefault(); // Para prevenir que el formulario se envíe de forma predeterminada
      
        // Accede a los datos del formulario a través del objeto `event.target.elements`
        const formData = new FormData(event.target);
        const data = Object.fromEntries(formData.entries());
        console.log(data);
      
        // Luego, puedes realizar las acciones que desees con los datos del formulario.
      };
      

    return (
        <div className='mx-auto container'>
            <div className="row justify-content-center">
                <div className="col-lg-8 order-lg-1">
                    <PItem variant={"h2"} color={"dark"} className={"mt-5"}>
                        ¿Pensando en comprar Vivienda Usada?
                    </PItem>
                    <PItem variant={"h2"} color={"dark"} className={"m-1 me-5"}>
                        Pero tienes dudas con el estado del inmueble
                    </PItem>
                    <PItem variant={"fs-3"} color={"dark"} className={"mt-2 me-5"}>
                        En Ceika, hemos diseñado un servicio de inspección técnica de
                        inmuebles, el cual es realizado por un profesional independiente, con
                        experiencia en construcción e instalaciones domiciliarias, entregándote
                        un informe detallado del estado actual del inmueble.
                    </PItem>
                </div>
                <div className="col-lg-4 order-lg-2 text-center"> {/* Agregamos la clase text-center para centrar la imagen */}
                    <img src={img1} alt="Logo" className="img-fluid mt-4" /> {/* Agregamos la clase img-fluid para que la imagen sea responsive */}
                </div>
            </div>
            <div className="divider my-4"></div>
            <div className="row justify-content-start">
                <div className="col-lg-8 order-lg-2">
                    <PItem variant={"h2"} color={"dark"} className={"mt-5"}>
                        ¿Por qué es importante realizar la inspección técnica de una Vivienda?
                    </PItem>
                    <PItem variant={"fs-3"} color={"dark"} className={"mt-2 me-5"}>
                        Toda construcción se deteriora con el uso y el paso del
                        tiempo, lo que hace que una vivienda usada, sea susceptible
                        a que sus componentes no se encuentren en buenas
                        condiciones. Por lo tanto, conocer el estado real de una
                        vivienda se convierte en una herramienta clave al momento
                        de tomar la decisión de compra.
                    </PItem>
                </div>
                <div className="col-lg-4 order-lg-1 text-center mt-5"> {/* Agregamos la clase text-center para centrar la imagen */}
                    <img src={img2} alt="Logo" className="img-fluid mt-4 rounded" /> {/* Agregamos la clase img-fluid para que la imagen sea responsive */}
                </div>
            </div>
            <div className='row justify-content-center'>
                <div className='col-lg-4 justify-content-center'>
                    <Button variant={"primary"} size={"lg"} className={"my-3 mx-auto"} data-bs-toggle="modal" data-bs-target="#exampleModal"> Conoce mas</Button>
                </div>
            </div>
            <div  className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="staticBackdropLabel">Modal title</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <ClientForm  onSubmit={handleSubmitForm}></ClientForm>
                        </div>
                        <div className="modal-footer">
                            <Button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</Button>
                            <Button type="button" className="btn btn-primary" onClick={handleSubmitForm}>Enviar</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Paragraphs;