import * as React from 'react';
import { RouteComponentProps } from 'react-router';

type IProps = RouteComponentProps<{}>;

class CounterPage extends React.Component<IProps, any> {
    interval: any;

    constructor(props: IProps) {
        super(props);

        this.state = {
            count: 0
        };

        this.increment = this.increment.bind(this);
    }

    increment() {
        this.setState({
            count: this.state.count + 1
        });
    }

    componentDidMount() {
        this.interval = setInterval(this.increment, 1000);
    }

    componentWillMount() {
        clearInterval(this.interval);
    }

    render() {
        const { count } = this.state;

        return (
            <div>
                <h1>Counter</h1>
                <div>{count}</div>
            </div>
        );
    }
}

export default CounterPage;
