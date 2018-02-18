import { delay } from '@infrastructure/constants';
import { IMail } from '@Components/MailItem/mailItem';

const fetchMailsData: IMail[] = [
    {
        id: '1',
        title: 'test',
    },
    {
        id: '2',
        title: 'test2',
    },
    {
        id: '3',
        title: 'test3',
    },
    {
        id: '4',
        title: 'test4',
    }
];

class MailboxApi {
    static fetchMails(): Promise<IMail[]> {
        return new Promise<IMail[]>((resolve, rejet) => {
            setTimeout(() => {
                resolve(fetchMailsData);
            },         delay);
        });
    }
}

export default MailboxApi;
