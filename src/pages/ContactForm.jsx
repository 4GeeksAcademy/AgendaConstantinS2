import { useParams } from "react-router-dom"
import { AddContact } from "../components/AddContact"

export const ContactForm = () => {
const params = useParams()
    return(
        params ? <AddContact id = {params.id} /> : <AddContact/>
    )
}