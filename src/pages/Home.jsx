
import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { useEffect, useState } from "react";




export const Home = () => {

	const [contacto, setContacto] = useState([])

	async function getContacts() {
		const response = await fetch("https://playground.4geeks.com/contact/agendas/trivm")
		const data = await response.json()
		setContacto(data.contacts)

	}
	const eliminarContacto = async (id) => {
		const response = await fetch(`https://playground.4geeks.com/contact/agendas/trivm/contacts/${id}`, {
			method: "DELETE"
		})
		getContacts()
	};


	useEffect(() => {
		getContacts()
	}, [])

	return (
		<div className="container">
			<h2>Contacto</h2>



			<div className="row">
				{contacto.map((contacto, id) => (
					<div className="col-md-4 mb-4" key={id}>
						<div className="card h-100 shadow p-3">
							<h5>{contacto.name}</h5>
							<p>{contacto.address}</p>
							<p>{contacto.phone}</p>
							<p>{contacto.email}</p>
						</div>
						<button onClick={() => eliminarContacto(contacto.id)}>Bórrame</button>
						<Link to={"/edit/"+contacto.id} className="btn btn-primary">
							Modificar contacto
						</Link>

					</div>
				))}
			</div>

		</div>

	)

}








