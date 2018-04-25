import { delay } from '@infrastructure/constants';
import { IMail } from '@Components/MailItem/mailItem';

const fetchMailsData: IMail[] = [];

for (let i = 100; i > 0; i--) {
    fetchMailsData.push({
        id: `${i}`,
        title: `Mail item ${i}`,
        description: `
            Dolor ad nulla sunt elit tempor Lorem exercitation ex ut laboris cupidatat do.
            Consectetur non irure labore eiusmod reprehenderit.
            Eu non nulla aliquip laborum duis deserunt minim.
        `
    });
}

class MailContainerApi {
    static fetchMails(): Promise<IMail[]> {
        return new Promise<IMail[]>((resolve, rejet) => {
            setTimeout(() => {
                resolve(fetchMailsData);
            },         delay);
        });
    }
}

export default MailContainerApi;
