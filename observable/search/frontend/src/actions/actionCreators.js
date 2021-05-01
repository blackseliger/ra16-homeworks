import {
  CHANGE_SEARCH_FIELD,
  SEARCH_SKILLS_REQUEST,
  SEARCH_SKILLS_FAILURE,
  SEARCH_SKILLS_SUCCESS,
  SEARCH_SKILLS_INIT,
} from './actionTypes';


export const searchSkillsRequest = search => ({
  type: SEARCH_SKILLS_REQUEST,
  payload: {search},
});

export const searchSkillsFailure = error => ({
  type: SEARCH_SKILLS_FAILURE,
  payload: {error},
});

export const searchSkillsSuccess = items => ({
  type: SEARCH_SKILLS_SUCCESS,
  payload: {items},
});

export const searchSkillsInit = () => ({
  type: SEARCH_SKILLS_INIT,
})

export const changeSearchField = search => ({
  type: CHANGE_SEARCH_FIELD,
  payload: {search},
});