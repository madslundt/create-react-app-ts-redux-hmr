import * as React from 'react';
import { IMail } from '@Components/MailItem/mailItem';

const MailViewer = (props: IMail) => (
    <h2 style={{color: 'red'}}>{props.title} ups typo!!</h2>
);

export default MailViewer;
