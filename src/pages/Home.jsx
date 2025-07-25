import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { WelcomeWindow } from "../components/WelcomeWindow.jsx";

export const Home = () => {

	const { store, dispatch } = useGlobalReducer()

	return (
		<WelcomeWindow/>
	);
}; 