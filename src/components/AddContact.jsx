import { useEffect, useState} from "react";




export const AddContact = ({id}) => {

    const [nuevoContacto, setNuevoContacto] = useState({
        nombre: "",
        direccion: "",
        telefono: "",
        email: ""
    })

    

    const handleInput = (e) => {
        setNuevoContacto({ ...nuevoContacto, [e.target.name]: e.target.value })
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        fetch("https://playground.4geeks.com/contact/agendas/trivm/contacts", {

            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                "name": nuevoContacto.nombre,
                "phone": nuevoContacto.telefono,
                "email": nuevoContacto.email,
                "address": nuevoContacto.direccion
            })

        }
        )
        setNuevoContacto({
            nombre: "",
            direccion: "",
            telefono: "",
            email: ""
        })
        
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text"
                name="nombre"
                placeholder="nombre"
                className="form-control"
                onChange={handleInput}
                value={nuevoContacto.nombre}
                required

            />
            <input type="text"
                name="direccion"
                placeholder="direccion"
                className="form-control"
                onChange={handleInput}
                value={nuevoContacto.direccion}
                required

            />
            <input type="tel"
                name="telefono"
                placeholder="telefono"
                className="form-control"
                onChange={handleInput}
                value={nuevoContacto.telefono}
                required

            />
            <input type="email"
                name="email"
                placeholder="email"
                className="form-control"
                onChange={handleInput}
                value={nuevoContacto.email}
                required

            />
            <button className="btn btn-success" type="submit">Agregar Contacto</button>
        </form>

    )




}