"use cliente" 

//importar requerimientos
import { useState } from "react";
import "bootstrap/dis/css/bootstrap.min.css";
import { FormCheck, Toast, ToastContainer } from "react-bootstrap";
import Styles from "@/styles/PQR.module.css";



//importaciones de los estilos
import React from 'react'

export default function page() {

    const [fromData, setFromData] = useState({
        name:"",
        email:"",
        message:"",
    });


    //manejando el estado de carga
    const [loading, setLoading] = useState(false);
    //Estado para mostrar la notificacion
    const [showToast, setShowToast] = useState(false);
    // manejo de mensaje del toast
    const [toastMessage, setToasMessage] = useState("");
    // color del toast
    const [toastVariant, setToasVariant] = useState("Success");


    //Manejando el cambio de los inputs
    const handleChange = (e) =>{
        setForData({...ForData, [e.target.name]: e.target.value});

    }

    //Manejo del envio del formulario
    const handleSubmit = async (e) =>{
        e.preventDefault();
        setLoading(true);

        // try
        
    }

















  return (
    <div>
      
    </div>
  )
}
