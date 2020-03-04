/* SELECTORS */

export const getAllFilters = ({ filters }) => filters;

/* ACTIONS */

// action name creator
const reducerName = 'filters';
const createActionName = name => `app/${reducerName}/${name}`;

// action types
export const CHANGE_PHRASE = createActionName('CHANGE_PHRASE');
export const CHANGE_DURATION = createActionName('CHANGE_DURATION');
export const ADD_TAG = createActionName('CHANGE_TAGS');
export const REMOVE_TAG = createActionName('REMOVE_TAG');

// action creators
export const changeSearchPhrase = payload => ({ payload, type: CHANGE_PHRASE });
export const changeTripDuration = payload => ({ payload, type: CHANGE_DURATION });
export const addTripTag = payload => ({ payload, type: ADD_TAG });
export const removeTripTag = payload => ({ payload, type: REMOVE_TAG });

// reducer
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case CHANGE_PHRASE:
      return {
        ...statePart,
        searchPhrase: action.payload,
      };
    case CHANGE_DURATION:
      return {
        ...statePart,
        duration: {
          ...statePart.duration,
          [action.payload.type]: action.payload.value,
        },
      };
    case ADD_TAG:
      return {
        ...statePart,
        tags: [
          ...statePart.tags,
          action.payload.tag,
        ],
      };
    case REMOVE_TAG:
      return {
        ...statePart,
        tags: [
          ...statePart.tags.filter(tag => tag != action.payload.tag),
        ],
      };
    default:
      return statePart;
  }
}
