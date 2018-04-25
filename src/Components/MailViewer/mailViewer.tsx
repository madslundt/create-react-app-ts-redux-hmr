import * as React from 'react';
import { IMail } from '@Components/MailItem/mailItem';

const MailViewer = (props: IMail) => (
    <div>
        <h2 style={{color: 'red'}}>{props.title}</h2>
        <p>1. {props.description}</p>
        <p>2. {props.description}</p>
        <p>3. {props.description}</p>
        <p>4. {props.description}</p>
        <p>5. {props.description}</p>
    </div>
);

export default MailViewer;
