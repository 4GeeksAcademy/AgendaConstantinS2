import useGlobalReducer from "../hooks/useGlobalReducer";
import Carousel from 'react-bootstrap/Carousel';
import { Link } from "react-router-dom";


export const WelcomeWindow = () => {
  const { store, dispatch } = useGlobalReducer();

  return (
    <div className="container">
      <div className="d-flex justify-content-center align-items-center">
        <Carousel slide={false}>
          <Carousel.Item>
            <img className="rounded-circle" src="src/assets/img/bienvenido.png" alt="" />
            <Carousel.Caption>
              <h1>Principal</h1>
              <p>Bienvenido a tu agenda online</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="rounded-circle" src="src/assets/img/Agenda.jpg" alt="" />
            <Carousel.Caption style={{ position: "absolute", right: "500px", bottom: "100px" }}>
              <h1 style={{ fontSize: "2rem", color: "purple" }}>Ingresa el usuario para ver la agenda.</h1>

              <input type="text" placeholder="Ingresa el usuario aquí" />
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="rounded-circle" src="src/assets/img/Formulario.jpg" alt="" />
            <Carousel.Caption>
              <h3 style={{ color: "white" }}>Third slide label</h3>
              <div className="container">
                <div className="d-flex justify-content-center align-items-center">
                  <p style={{ color: "white", fontSize: "1.5rem", color: "purple", position: "absolute", bottom: "240px", marginLeft: "50px" }} >
                    ¿ Qué deseas hacer ?
                  </p>
                  <p style={{ color: "white", fontSize: "1.5rem", color: "purple", position: "absolute", bottom: "165px", marginLeft: "50px" }} >
                    <Link to="/AddDiaryWindow" style={{ color: "purple", textDecoration: "none" }}>
                      Ir al diario
                    </Link>
                  </p>
                  <p style={{ color: "white", fontSize: "1.5rem", color: "purple", position: "absolute", bottom: "85px", marginLeft: "50px" }} >
                    ¿ Qué deseas hacer ?
                  </p>

                </div>
              </div>

            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
}

