import { Team } from 'shared/types/Team';
import { typedAction } from '../actionCreator';

const initialState = new Team();

export function setTeamToEdit(team: Team) {
  return typedAction('team/CREATE_TEAM', team);
}

export function updateSelectedTeam(team: Team) {
  return typedAction('team/UPDATE_SELECTED_TEAM', team);
}

type EditingTeamAction = ReturnType<
  typeof setTeamToEdit | typeof updateSelectedTeam
>;

export function editingReducer(
  state = initialState,
  action: EditingTeamAction,
): Team {
  switch (action.type) {
    case 'team/CREATE_TEAM':
      return action.payload;

    case 'team/UPDATE_SELECTED_TEAM':
      return {
        ...state,
        ...action.payload,
      };

    default:
      return state;
  }
}
