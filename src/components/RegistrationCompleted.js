import background from "../quiz_team.jpeg";

const RegistrationCompleted = (props) => {
  return (
    <div
      className="container d-flex align-items-center justify-content-center w-75 mt-5"
      style={{
        backgroundImage: `url(${background})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        height: "700px",
      }}
    >
      <div className=" display-2 bg-warning text-dark p-5 text-center">
        <span className="display-4">Registration succesful!</span>
        <br></br>See you at pub!
      </div>
    </div>
  );
};

export default RegistrationCompleted;
