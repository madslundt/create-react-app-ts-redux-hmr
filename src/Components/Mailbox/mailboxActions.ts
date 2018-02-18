import { createAction } from 'redux-actions';
import MailboxApi from './mailboxMockApi';
import { IMail } from '@Components/MailItem/mailItem';
import { Dispatch } from 'react-redux';

export const FETCH_MAILS_REQUEST = 'FETCH_MAILS_REQUEST';
export const FETCH_MAILS_SUCCESS = 'FETCH_MAILS_SUCCESS';
export const FETCH_MAILS_ERROR = 'FETCH_MAILS_ERROR';

const fetchMailsRequest = createAction(
    FETCH_MAILS_REQUEST
);

const fetchMailsSuccess = createAction<IMail[], IMail[]>(
    FETCH_MAILS_SUCCESS,
    (mails: IMail[]) => mails
);

const fetchMailsError = createAction<any, any>(
    FETCH_MAILS_ERROR,
    (error: any) => error
);

const fetchMails = () => (dispatch: Dispatch<IMail>) => {
    dispatch(fetchMailsRequest());

    return MailboxApi.fetchMails().then((response: any) => {
        dispatch(fetchMailsSuccess(response));
    }).catch((error: any) => {
        dispatch(fetchMailsError(error));
        throw(error);
    });
};

export default {
    fetchMails,
};
