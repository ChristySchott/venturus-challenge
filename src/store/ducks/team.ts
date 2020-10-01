import { Team } from 'shared/types/Team';
import { typedAction } from '../actionCreator';

export type TeamState = {
  teams: Team[];
  teamToEdit: Team;
};

const initialState: TeamState = {
  teams: [],
  teamToEdit: new Team(),
};

export function createTeam(team: Team) {
  return typedAction('team/CREATE_TEAM', team);
}

export function setTeamToUpdate(team: Team) {
  return typedAction('team/SET_TEAM_TO_UPDATE', team);
}

export function updateTeam(team: Team) {
  return typedAction('team/UPDATE_TEAM', team);
}

export function deleteTeam(team: Team) {
  return typedAction('team/DELETE_TEAM', team);
}

type TeamAction = ReturnType<
  | typeof createTeam
  | typeof updateTeam
  | typeof deleteTeam
  | typeof setTeamToUpdate
>;

export function teamReducer(
  state = initialState,
  action: TeamAction,
): TeamState {
  switch (action.type) {
    case 'team/CREATE_TEAM':
      return {
        ...state,
        teams: [...state.teams, action.payload],
      };

    case 'team/SET_TEAM_TO_UPDATE':
      return {
        ...state,
        teamToEdit: action.payload,
      };

    case 'team/UPDATE_TEAM':
      return {
        ...state,
        teams: [
          ...state.teams.map(t =>
            t.id === action.payload.id ? action.payload : t,
          ),
        ],
      };

    case 'team/DELETE_TEAM':
      return {
        ...state,
        teams: [...state.teams.filter(t => !(t.id === action.payload.id))],
      };

    default:
      return state;
  }
}
