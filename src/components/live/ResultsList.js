import { useSelector } from "react-redux";
import TeamResults from "./TeamResults";


const ResultsList = () => {
  const teams = useSelector((state) => state.teamsList);
  
  if (teams === undefined || teams.length === 0) {
    return <p>No tems, no results.</p>;
  }

  return (
    <div className="container">
    
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Position</th>
            <th scope="col">Team Name</th>
            <th scope="col">Round 1</th>
            <th scope="col">Round 2</th>
            <th scope="col">Round 3</th>
            <th scope="col">Total</th>
          </tr>
        </thead>
        <tbody>
            {teams.map(team=><TeamResults team={team} key={team.id}/>)};
          
        </tbody>
      </table>
      
    </div>
  );
};

export default ResultsList;
// {teams.map((team) => (
//     <TeamItem key={team.id} team={team} />
//   ))}