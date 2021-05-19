import { useDispatch } from "react-redux";
import { teamsActions } from "../store/index";

const TeamItem = (props) => {
  const dispatch = useDispatch();
  const teamId = props.team.id;
  const toggleAprovalHandler = () => {
    dispatch(teamsActions.toggleApproval(teamId));
  };

  const deleteHandler = () => {
    dispatch(teamsActions.deleteTeam(teamId));
  };

  return (
    <tr>
      <th scope="row">1</th>
      <td>
        {props.team.name}{" "}
        {props.team.approved && <span className="badge bg-success">Approved</span>}
      </td>
      <td>{props.team.captain}</td>
      <td>{props.team.email}</td>
      <td>
        <button
          onClick={toggleAprovalHandler}
          className={`btn btn-outline-${
            props.team.approved ? "danger" : "success"
          }`}
        >
          {props.team.approved ? "Remove approval" : "Approve"}
        </button>
        
        <button onClick={deleteHandler} className="btn btn-danger">
          Delete
        </button>

      </td>
    </tr>
  );
};

export default TeamItem;
