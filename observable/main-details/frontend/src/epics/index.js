import { ofType } from 'redux-observable';
import { ajax } from 'rxjs/ajax';
import { map, tap, retry, filter, debounceTime, switchMap, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { FETCH_SERVICES_REQUEST } from '../actions/actionTypes';
import { fetchServicesFailure, fetchServicesSuccess } from '../actions/actionCreators';


export const fetchServiceList = action$ => action$.pipe(
    ofType(FETCH_SERVICES_REQUEST),
    map(o => o.payload.id ? `${o.payload.id}` : ''), 
    switchMap(o => ajax.getJSON(`${process.env.REACT_APP_LOCAL_URL}/${o}`).pipe(
        retry(3),
        map(items => fetchServicesSuccess(items)),
        catchError(e => of(fetchServicesFailure(e))),
      )),
)