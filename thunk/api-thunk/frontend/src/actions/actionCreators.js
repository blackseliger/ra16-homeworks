import {

  // INPUT FIELD 
  CHANGE_SERVICE_FIELD,

  // FETCH
  FETCH_SERVICES_REQUEST,
  FETCH_SERVICES_FAILURE,
  FETCH_SERVICES_SUCCESS,

  // ADD SERVICE
  ADD_SERVICE_REQUEST,
  ADD_SERVICE_FAILURE,
  ADD_SERVICE_SUCCESS,

  // REMOVE SERVICE
  REMOVE_SERVICE_REQUEST,
  REMOVE_SERVICE_SUCCESS,
  
  // EDIT CHANGE

  CHANGE_SERVICE_REQUEST,
  CHANGE_SERVICE_SUCCESS,
  CHANGE_SERVICE_FAILURE,
  CHANGE_SERVICE_DATA,

} from './actionTypes';

// CHANGE INPUT

export const changeServiceField = (nameField, value) => ({
  type: CHANGE_SERVICE_FIELD,
  payload: {
    nameField,
    value,
  },
});


// FETCH
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

// ADD SERVICE

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


// REMOVE SERVICE

export const removeServiceRequest = () => ({
  type: REMOVE_SERVICE_REQUEST,
});

export const removeServiceSuccess = () => ({
  type: REMOVE_SERVICE_SUCCESS
});

// EDIT CHANGE

export const changeServiceRequest = () => ({
  type: CHANGE_SERVICE_REQUEST,
});

export const changeServiceSuccess = () => ({
  type: CHANGE_SERVICE_SUCCESS,
});

export const changeServiceFailure = (error) => ({
  type: CHANGE_SERVICE_FAILURE, payload: error,
})

export const changeServiceData = (data) => ({
  type: CHANGE_SERVICE_DATA, payload: data
})

export const fetchServices = (id = null) => async (dispatch) => {
  dispatch(fetchServicesRequest());
  try {
    const response = id ? await fetch(`${process.env.REACT_APP_API_URL}/${id}`) : await fetch(`${process.env.REACT_APP_API_URL}`)
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    const data = await response.json();
    if (id) {
      dispatch(changeServiceData(data)) 
    }
    else {
      dispatch(fetchServicesSuccess(data));
    }  
  } catch (e) {
    dispatch(fetchServicesFailure(e.message));
  }
}

export const addService = (name, price) => async (dispatch) => {
  dispatch(addServiceRequest()); // loading true
  try {
    const response = await fetch(`${process.env.REACT_APP_API_URL}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, price, }),
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

export const changeService = (id, name, price, content) => async (dispatch) => {
  console.log( id, name, price, content)
  dispatch(changeServiceRequest()) ;
  try {
    const responce = await fetch(`${process.env.REACT_APP_API_URL}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify({id, name, price, content})
    })
    console.log(responce)
    if (!responce.ok) {
      throw new Error(responce.statusText);
    }
    dispatch(changeServiceSuccess())
  } catch(e) {
    console.log(e)
    dispatch(changeServiceFailure({error:e.message}));
  }
}


export const removeService = (id) => async (dispatch) => {
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