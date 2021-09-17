export type TIconSize =
    | "xs"
    | "s"
    | "m"
    | "l"
    | "xl"
    | "xxl"
    | "xxxl";

type TRole = "img";

type TArialLabelledBy = "title desc";

export type TComplexPath = { fill: string; d: string };

export interface IDataProps {
    title: string;
    desc: string;
    size: TIconSize;
    fill?: string;
    fillOpacity?: number;
    viewBox?: string;
    pathSet: any[];
}

export interface ISVGProps {
    data: IDataProps;
    complex?: boolean;
    styles?: object;
    className?: string;
    degrees?: number;
    margin?: string;
    role?: TRole;
    ariaLabelledBy?: TArialLabelledBy;
}
