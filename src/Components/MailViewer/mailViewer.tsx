import * as React from 'react';
import { IMail } from '@Components/MailItem/mailItem';

const MailViewer = (props: IMail) => (
    <h2>{props.title}</h2>
);

export default MailViewer;
