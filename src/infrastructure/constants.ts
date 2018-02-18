const delay = 2000;

interface IAction<T> {
    readonly type?: string;
    readonly payload: T;
    readonly error?: boolean;
    readonly meta?: any;
}

interface IHttpAction<T> {
    readonly type: string;
    readonly payload: T;
    readonly error?: boolean;
    readonly showLoad: boolean;
}

export {
    IAction,
    IHttpAction,
    delay,
};