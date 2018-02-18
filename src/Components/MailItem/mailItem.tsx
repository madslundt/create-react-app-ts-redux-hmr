import * as React from 'react';

interface IMail {
    id: string;
    title: string;
}

const MailItem = (props: IMail) => (
    <p>{props.title}</p>
);

export default MailItem;

export {
    IMail,
};
