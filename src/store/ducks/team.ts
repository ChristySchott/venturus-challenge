import { Team } from 'shared/types/Team';
import { typedAction } from '../actionCreator';

const initialState: Team[] = [];

export function createTeam(team: Team) {
  return typedAction('team/CREATE_TEAM', team);
}

export function updateTeam(team: Team) {
  return typedAction('team/UPDATE_TEAM', team);
}

export function deleteTeam(team: Team) {
  return typedAction('team/DELETE_TEAM', team);
}

type TeamAction = ReturnType<
  typeof createTeam | typeof updateTeam | typeof deleteTeam
>;

export function teamReducer(state = initialState, action: TeamAction): Team[] {
  switch (action.type) {
    case 'team/CREATE_TEAM':
      return {
        ...state,
        ...action.payload,
      };

    case 'team/UPDATE_TEAM':
      return (state.map(t =>
        t.id === action.payload.id ? action.payload : t,
      ) as unknown) as Team[];

    case 'team/DELETE_TEAM':
      return (state.filter(
        t => !(t.id === action.payload.id),
      ) as unknown) as Team[];

    default:
      return state;
  }
}
