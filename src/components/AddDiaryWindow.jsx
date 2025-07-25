import { useState } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer";


export const AddDiaryWindow = () => {
    const { store, dispatch } = useGlobalReducer();


    const [newIn, setNewIn] = useState({
        nombre: "",
        direccion: "",
        telephone: "",
        email: ""

    })
    const [showAlert, setShowAlert] = useState(false);

    const handInputsChange = (e) => {
        setNewIn({ ...newIn, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!newIn.nombre || !newIn.direccion || !newIn.telephone || !newIn.email) {
            showAlert(true)
            setTimeout(() => setShowAlert(false), 2000);
            return;
        }
    }



    return (
        <div className="container d-flex align-items-center justify-content-center " style={{ width: "60%", height: "600px"}}>
            <div className="border rounded">
                <div className="imagen cover d-flex">
                    <div className="rounded-circle p-3 mr-4">
                        <img
                            className="rounded-circle border border-3"
                            src="src/assets/img/rigo-baby.jpg"
                            alt=""
                            style={{ width: "190px", height: "190px" }}
                        />
                    </div>

                    <form className="mb-5" onSubmit={handleSubmit}>
                        <input type="text"
                        className="form-control mb-2"
                        placeholder="Nombre"
                        name="nombre"
                        value={newIn.nombre}
                        onChange={handInputsChange}
                        />

                        <input type="text"
                        className="form-control mb-2"
                        placeholder="direccion"
                        name="direccion"
                        value={newIn.direccion}
                        onChange={handInputsChange}
                        />

                        <input type="text"
                        className="form-control mb-2"
                        placeholder="telephone"
                        name="telephone"
                        value={newIn.telephone}
                        onChange={handInputsChange}
                        />

                        <input type="text"
                        className="form-control mb-2"
                        placeholder="email"
                        name="email"
                        value={newIn.email}
                        onChange={handInputsChange}
                        />
                        <button className="btn btn-succes w-100">Agregar contacto</button>
                    </form>
                </div>
            </div>
        </div>
    );
};


