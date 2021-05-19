import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import {teamsActions} from "../store/index" 


const RegistratinForm = () => {
  const [formIsValid, setFromIsValid] = useState(true)
  const teamName = useRef();
  const captainsName = useRef();
  const captainsEmail = useRef();
  const dispatch = useDispatch();
  const history = useHistory();

  const formSubmitHandler = (event) => {
    event.preventDefault();
    const enteredTeamName = teamName.current.value;
    const enteredCaptainsName = captainsName.current.value;
    const enteredCaptaisEmail = captainsEmail.current.value;
    
    if (enteredTeamName==='' || enteredCaptainsName === '' || enteredCaptaisEmail === ''){
      setFromIsValid(false);
      return
    };
    
    const teamInfo = {
      id: Math.random(),
      name: enteredTeamName,
      captain: enteredCaptainsName,
      email: enteredCaptaisEmail,
      approved: false,
    }
    dispatch(teamsActions.addNewTeam(teamInfo))
    history.push("/completed")

    // console.log(enteredTeamName, enteredCaptainsName, enteredCaptaisEmail)
  };

  return (
    <div
      className="d-flex flex-column  justify-content-center px-5"
      style={{ height: "100%" }}
    >
      <h2 className="display-5">Team Registration</h2>

      <form onSubmit={formSubmitHandler}>
        <div className="">
          <label htmlFor="teamName" class="form-label">
            
            Team's name
          </label>
          <input
            type="text"
            id="teamName"
            class="form-control"
            ref={teamName}
          />
        </div>
        <div className="">
          <label htmlFor="captainName" class="form-label">
            {" "}
            Name of the team's captain
          </label>
          <input
            type="text"
            id="captainName"
            class="form-control"
            ref={captainsName}
          />
        </div>
        <div className="">
          <label htmlFor="captainsEmail" class="form-label">
            Captain's email
          </label>
          <input
            type="email"
            id="captainsEmail"
            class="form-control"
            ref={captainsEmail}
          />
        </div>
        <div className="mt-3 ">
          {!formIsValid && <div className="text-danger"> Please fill in all fields.</div>}
          <button type="submit" className="btn btn-warning mt-3">
            {" "}
            Register
          </button>
        </div>
      </form>
    </div>
  );
};

export default RegistratinForm;
