import { useSelector } from "react-redux";
import TeamResults from "./TeamResults";


const ResultsList = () => {
  const teams = useSelector((state) => state.sortedTeams);
  
  if (teams === undefined || teams.length === 0) {
    return <p>No teams, no results.</p>;
  }

  return (
    <div className="container pt-5">
    
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Position</th>
            <th scope="col">Team Name</th>
            <th scope="col">Round 1</th>
            <th scope="col">Round 2</th>
            <th scope="col">Round 3</th>
            <th scope="col">Total</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
            {teams.map((team, index)=><TeamResults team={team} key={team.id} index={index+1}/>)}; 
        </tbody>
      </table>
      
    </div>
  );
};

export default ResultsList;
