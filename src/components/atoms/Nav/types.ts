export interface INavChild {
    title: string;
    url: string;
}

export interface INavHeader {
    title: string;
    url?: string;
    src?: string;
    children?: Array<INavChild>;
}
