import {
  CHANGE_SERVICE_FIELD,
  FETCH_SERVICES_REQUEST,
  FETCH_SERVICES_FAILURE,
  FETCH_SERVICES_SUCCESS,
  ADD_SERVICE_REQUEST,
  ADD_SERVICE_FAILURE,
  ADD_SERVICE_SUCCESS,
  REMOVE_SERVICE_REQUEST,
  REMOVE_SERVICE_SUCCESS,
  // REMOVE_SERVICE_FAILURE,
} from './actionTypes';

export const fetchServicesRequest = () => ({
  type: FETCH_SERVICES_REQUEST,
});

export const fetchServicesFailure = error => ({
  type: FETCH_SERVICES_FAILURE,
  payload: {
    error,
  },
});

export const fetchServicesSuccess = items => ({
  type: FETCH_SERVICES_SUCCESS,
  payload: {
    items,
  },
});

export const addServiceRequest = (name, price) => ({
  type: ADD_SERVICE_REQUEST,
  payload: {
    name,
    price,
  },
})

export const addServiceFailure = error => ({
  type: ADD_SERVICE_FAILURE,
  payload: {
    error,
  },
});

export const addServiceSuccess = () => ({
  type: ADD_SERVICE_SUCCESS,
});

export const changeServiceField = (name, value) => ({
  type: CHANGE_SERVICE_FIELD,
  payload: {
    name,
    value,
  },
});

export const removeServiceRequest = () => ({
  type: REMOVE_SERVICE_REQUEST,
});

export const removeServiceSuccess = () => ({
  type: REMOVE_SERVICE_SUCCESS
});


export const fetchServices = async (dispatch, id = null) => {
  dispatch(fetchServicesRequest());
  try {
    const response = (id !== null) ? await fetch(`${process.env.REACT_APP_API_URL}/${id}`) : await fetch(`${process.env.REACT_APP_API_URL}`)
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    const data = await response.json();
    console.log(data);
    dispatch(fetchServicesSuccess(data));
  } catch (e) {
    dispatch(fetchServicesFailure(e.message));
  }
}

export const addService = async (dispatch, name, price) => {
  dispatch(addServiceRequest()); // loading true
  try {
    const response = await fetch(`${process.env.REACT_APP_API_URL}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, price }),
    })
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    dispatch(addServiceSuccess()); // стерли инпут
  } catch (e) {
    dispatch(addServiceFailure(e.message)); // loading false, error message 
  }
  fetchServices(dispatch);
}


export const removeService = async (dispatch, id) => {
    dispatch(removeServiceRequest()) // loading true
    try {
      const responce = await fetch(`${process.env.REACT_APP_API_URL}/${id}`, {method: 'DELETE'})
      if (!responce.ok) {
        throw new Error(responce.statusText);
      }
      dispatch(removeServiceSuccess()); // loading false
    } catch (e) {
      dispatch(fetchServicesFailure(e.message))
    }
  fetchServices(dispatch);
}