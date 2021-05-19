import { createSlice, configureStore } from "@reduxjs/toolkit";

const team1 = {
  id: 1,
  name: "Avengers",
  captain: "Captain America",
  email: "captain@america.com",
  approved: false,
  round1: 0,
  round2: 0,
  round3: 0,
  total: 0,
};

const team2 = {
  id: 2,
  name: "Iron man",
  captain: "Tony Stark",
  email: "tony@stark-industriess.com",
  approved: true,
  round1: 0,
  round2: 0,
  round3: 0,
  total: 0,
};

const team3 = {
  id: 3,
  name: "Asgardian",
  captain: "Thor",
  email: "thor@gmail.com",
  approved: true,
  round1: 0,
  round2: 0,
  round3: 0,
  total: 0,
};
const team4 = {
  id: 4,
  name: "Wakanda",
  captain: "Black Panther",
  email: "wakanda@forever.com",
  approved: true,
  round1: 0,
  round2: 0,
  round3: 0,
  total: 0,
};

const initialState = {
  spotsTotal: 15,
  spotsLeft: 11,
  teamsList: [team1, team2, team3, team4],
  sortedTeams:[team1, team2, team3, team4],
};

const teamsSlice = createSlice({
  name: "teams",
  initialState,
  reducers: {
    addNewTeam(state, action) {
      state.teamsList.push(action.payload);
    },
    toggleApproval(state, action) {
      // Finds team and toogles approval status
      const selected = state.teamsList.find(({ id }) => id === action.payload);
      selected.approved = !selected.approved;
      //updates spotLeft: total - approved
      const approved = state.teamsList.filter((team) => team.approved === true);
      state.spotsLeft = state.spotsTotal - approved.length;
    },
    deleteTeam(state, action) {
      state.teamsList = state.teamsList.filter(
        (team) => team.id !== action.payload
      );
    },
    calculateTotal(state, action) {
      const { teamId, points, round } = action.payload;
      const selected = state.teamsList.find(({ id }) => id === teamId);
      if (round === 1) {
        selected.round1 = points;
      }
      if (round === 2) {
        selected.round2 = points;
      }
      if (round === 3) {
        selected.round3 = points;
      }
      selected.total = selected.round1 + selected.round2 + selected.round3;

      //sort
      const sortTeams = [...state.teamsList]
      sortTeams.sort(function (a, b) {
        return b.total - a.total;
      });
      state.sortedTeams=[...sortTeams];
      ;
    },
  },
});

const store = configureStore({ reducer: teamsSlice.reducer });

export const teamsActions = teamsSlice.actions;

export default store;
