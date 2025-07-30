import { useEffect, useState } from "react";




    const modificarContacto = async (id) => {
        fetch(`https://playground.4geeks.com/contact/agendas/trivm/contacts/${id}`, {

            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                "name": contacto.nombre,
                "phone": contacto.telefono,
                "email": contacto.email,
                "address": contacto.direccion
            })

        }
        )
        setContacto({
            name: "",
            address: "",
            phone: "",
            email: ""
        })
    }
