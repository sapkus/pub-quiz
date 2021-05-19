import { useSelector } from "react-redux";
import TeamItem from "./TeamItem";

const TeamsList = () => {
  const teams = useSelector((state) => state.teamsList);
  const spotsLeft = useSelector((state) => state.spotsLeft);
  const spotsTotal = useSelector((state) => state.spotsTotal);

  if (teams === undefined || teams.length === 0) {
    return <p>No registrations yet.</p>;
  }

  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Team Name</th>
            <th scope="col">Captain's Name</th>
            <th scope="col">Email</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {teams.map((team, index) => (
            <TeamItem key={team.id} team={team} index={index+1}/>
          ))}
        </tbody>
      </table>
      <span className="bg-warning p-2">
        Spots left <span className="badge bg-success">{spotsLeft}</span> of
        total <span className="badge bg-secondary">{spotsTotal}</span>
      </span>
    </>
  );
};

export default TeamsList;
