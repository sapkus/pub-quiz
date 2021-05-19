import { useDispatch } from "react-redux";
import { teamsActions } from "../../store/index";

const TeamResults = (props) => {
  const dispatch = useDispatch();
  const teamId = props.team.id;
  const pointsData = {
    teamId,
    points: 8,
    round: 1,
  };
  const enterPointsHandler = () => {
    dispatch(teamsActions.calculateTotal(pointsData));
  };

  return (
    <tr>
      <th scope="row">1</th>
      <td>{props.team.name}</td>
      <td>{props.team.round1}</td>
      <td>{props.team.round2}</td>
      <td>{props.team.round3}</td>
      <td>{props.team.total}</td>
      <td>
        <button
          onClick={enterPointsHandler}
          className="btn btn-outline-success"
        >
          Enter 8 points
        </button>
      </td>
    </tr>
  );
};

export default TeamResults;
