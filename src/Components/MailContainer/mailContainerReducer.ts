import { handleActions, Action } from 'redux-actions';
import { IAction } from '@infrastructure/constants';
import { IMail } from '@Components/MailItem/mailItem';
import {
    FETCH_MAILS_REQUEST,
    FETCH_MAILS_SUCCESS,
    FETCH_MAILS_ERROR,
} from './mailContainerActions';

const initialState: IAction<IMail[]> = {
    payload: [],
    error: false,
    meta: {
        isFetching: false,
    },
};

export default handleActions<IAction<IMail[]>, IMail[]>({
    [FETCH_MAILS_REQUEST]: (state: IAction<IMail[]>, action: Action<IMail[]>): IAction<IMail[]> => {
        return {
            ...state,
            meta: {
                isFetching: true,
            },
        };
    },
    [FETCH_MAILS_ERROR]: (state: IAction<IMail[]>, action: Action<any>): IAction<IMail[]> => {
        return {
            ...state,
            error: true,
            meta: {
                isFetching: false,
                error: action.payload
            },
        };
    },
    [FETCH_MAILS_SUCCESS]: (state: IAction<IMail[]>, action: Action<IMail[]>): IAction<IMail[]> => {
        return {
            ...state,
            ...action,
            meta: {
                isFetching: false,
            },
        };
    },
}, initialState);

export {
    initialState
};
