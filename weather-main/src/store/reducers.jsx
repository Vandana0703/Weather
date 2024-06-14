import { feedbackData } from "../MockupData";
import {
    FETCH_WEATHER_REQUEST,
    FETCH_WEATHER_SUCCESS,
    FETCH_WEATHER_FAILURE,
    FETCH_FEEDBACK_DATA,
    SAVE_FEEDBACK_DATA
  } from "./actions";
  
  // Stato iniziale
  const initialState = {
    loading: false,
    weatherData: null,
    error: null,
    feedbackData: feedbackData
  };
  
  // Riduttore
  const weatherReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_WEATHER_REQUEST:
        return {
          ...state,
          loading: true,
        };
      case FETCH_WEATHER_SUCCESS:
        return {
          ...state,
          loading: false,
          weatherData: action.payload,
          error: null,
        };
      case FETCH_WEATHER_FAILURE:
        return {
          ...state,
          loading: false,
          weatherData: null,
          error: action.payload,
        };
        case FETCH_FEEDBACK_DATA:
        return {
          ...state,
          loading: true,
        };
      case SAVE_FEEDBACK_DATA:
        const feedbackList = [...state.feedbackData,action.payload]
        return{
          ...state,
          feedbackData:feedbackList
        }
      default:
        return state;
    }
  };

  export default weatherReducer;
