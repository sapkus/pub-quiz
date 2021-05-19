import background from "../quiz_team.jpeg";

const EventImage = (props) => {

  const startRegistrationHandler = () =>{
    props.onRegistrationStarted();
  };

  return (
    <div
      className="d-flex align-items-center justify-content-center"
      style={{
        backgroundImage: `url(${background})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        height: "600px",
      }}
    >
      <button
        type="button"
        class="btn btn-warning btn-large align-self-center"
        onClick={startRegistrationHandler}
      >
        Register your team
      </button>
    </div>
  );
};

export default EventImage;
