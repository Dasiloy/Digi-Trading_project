// SVG Optimiser: https://jakearchibald.github.io/svgomg/

import { TIconSize } from "./types";

const defaultSize = "s" as TIconSize;
const defaultViewBox = "0 0 20 20";

export const Archive = {
    title: "Archive",
    desc: "Archive",
    size: defaultSize,
    viewBox: defaultViewBox,
    pathSet: [
        `M14.527 0H.473a.482.482 0 00-.334.133A.447.447 0 000 .456v17.088c0 .121.05.237.139.322A.482.482 0 00.473 18h14.054a.482.482 0 00.335-.134.447.447 0 00.138-.322V.456c0-.121-.05-.237-.139-.323A.482.482 0 0014.527 0zm-.473 10.082H.946v-.626h13.108v.626zM.946 2.45h13.108v6.095H.946V2.45zM14.054.911v.627H.946V.911h13.108zm0 16.178H.946v-6.095h13.108v6.095z`,
        `M9.822 4.229a.482.482 0 00-.335.133.447.447 0 00-.138.323v1.169H5.65v-1.17c0-.12-.05-.236-.139-.322a.482.482 0 00-.668 0 .447.447 0 00-.139.323v1.624c0 .121.05.237.139.322a.482.482 0 00.334.134h4.644a.482.482 0 00.334-.134.447.447 0 00.139-.322V4.685c0-.121-.05-.237-.139-.323a.482.482 0 00-.334-.133zM5.178 15.31h4.644a.482.482 0 00.334-.134.447.447 0 00.139-.322v-1.625c0-.12-.05-.237-.139-.322a.482.482 0 00-.669 0 .448.448 0 00-.138.322v1.169H5.65v-1.169c0-.12-.05-.237-.139-.322a.482.482 0 00-.668 0 .448.448 0 00-.139.322v1.625c0 .12.05.237.139.322a.482.482 0 00.334.133z`,
    ],
};

export const Trash = {
    title: "Trash",
    desc: "Trash",
    size: defaultSize,
    viewBox: defaultViewBox,
    pathSet: [
        `M50.094 12c-3.486 0-5.904 1.296-7.688 2.656-1.784 1.36-3.03 2.653-5.156 3.5A2.052 2.052 0 0035.937 20H17v4h66v-4H64.062a2.052 2.052 0 00-1.312-1.844c-2.141-.85-3.452-2.152-5.219-3.5C55.765 13.308 53.416 12 50.094 12zM23 26v53.031C23 85.014 25.985 88 32.031 88h36C73.991 88 77 85.014 77 79.031V26zm11 13h4v36h-4zm14 0h4v36h-4zm14 0h4v36h-4z`,
    ],
};
