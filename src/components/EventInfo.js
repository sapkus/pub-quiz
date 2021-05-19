import { useSelector } from "react-redux";

const EventInfo = () => {
  const spotsLeft = useSelector((state) => state.spotsLeft);   
  const eventDate = "31 May, 2021";

  return (
    <div
      className=" d-flex bg-dark  w-50 me-md-3 pt-3  pt-md-5 px-5 px-md-5 text-center text-white overflow-hidden"
      style={{ height: "600px" }}
    >
      <div className="align-self-center w-100 text-end mx-5">
        <h2 className="display-5">Next pub quiz:</h2>
        <p className="lead">{eventDate}</p>
        <h6>
          Spots left: <span className="badge bg-secondary">{spotsLeft}</span>
        </h6>
      </div>
    </div>
  );
};

export default EventInfo;
