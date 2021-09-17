import cls from "classnames";
import React from "react";

import styled from "./SVG.module.scss";
import { ISVGProps, TComplexPath } from "./types";

const SVG = ({
    data = {
        title: "",
        desc: "",
        size: "s",
        fill: "#999999",
        fillOpacity: 1,
        viewBox: "0 0 20 20",
        pathSet: [],
    },
    complex = false,
    role = "img",
    ariaLabelledBy = "title desc",
    styles = {},
    className = "",
    degrees = 0,
    margin = "",
}: ISVGProps): JSX.Element => {
    const baseclass = "svg-icon";

    const classes = cls(
        baseclass,
        styled.svgIcon,
        className || "",
        `${baseclass}--${data.size}`,
    );

    const extraStyles = {
        transform: `rotate(${degrees}deg)`,
        margin,
    };

    return (
        <svg
            className={classes}
            style={{ fill: "white" }}
            viewBox={data.viewBox}
            preserveAspectRatio="xMidYMid meet"
            role={role}
            aria-labelledby={ariaLabelledBy}
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink">
            <title id="title">{data.title}</title>
            <desc id="desc">{data.desc}</desc>
            {complex
                ? data.pathSet.map((path: TComplexPath) => (
                      <path
                          fill={path.fill || data.fill}
                          fillOpacity={data.fillOpacity}
                          d={path.d}
                      />
                  ))
                : data.pathSet.map((path: string) => (
                      <path
                          fill={data.fill}
                          fillOpacity={data.fillOpacity}
                          d={path}
                      />
                  ))}
        </svg>
    );
};

export default SVG;
