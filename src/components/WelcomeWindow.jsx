import useGlobalReducer from "../hooks/useGlobalReducer";

export const WelcomeWindow = () => {
  const {store, dispatch} = useGlobalReducer();

  return (
    <div id="carouselExample" className="carousel slide">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src="https://via.placeholder.com/800x400" className="d-block w-100" alt="First Slide" />
        </div>
        <div className="carousel-item">
          <img src="https://via.placeholder.com/800x400" className="d-block w-100" alt="Second Slide" />
        </div>
        <div className="carousel-item">
          <img src="https://via.placeholder.com/800x400" className="d-block w-100" alt="Third Slide" />
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};