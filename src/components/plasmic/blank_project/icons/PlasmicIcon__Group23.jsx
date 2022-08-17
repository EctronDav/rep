// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Group23Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 118 93"}
      height={"1em"}
      width={"1em"}
      style={{
        stroke: "currentcolor",
        ...(style || {}),
      }}
      className={classNames("plasmic-default__svg", className)}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M18.2 92.074h1.044a9.588 9.588 0 01.828-7.413h-1.836c-5.307 0-9.625-4.048-9.625-9.014V63.99c0-5.164 4.138-9.374 9.247-9.374h.648l5.002-4.876v4.876h12.846c9.284 0 16.858-7.538 16.858-16.786V17.426c0-4.965 4.138-9.013 9.248-9.013h29.56V2.637l5.506 5.776h1.925c5.091 0 9.247 4.048 9.247 9.013V38.82c0 4.965-4.138 9.013-9.247 9.013h-7.053c.432 1.206.666 2.483.666 3.815 0 1.241-.216 2.446-.576 3.598h6.963c9.283 0 16.858-7.359 16.858-16.426V17.425C116.309 8.376 108.752 1 99.451 1H62.46c-9.284 0-16.858 7.359-16.858 16.426V37.83c0 5.164-4.138 9.374-9.248 9.374H17.859C8.574 47.203 1 54.74 1 63.989v11.658c-.054 9.05 7.683 16.427 17.2 16.427z"
        }
        stroke={"currentColor"}
        strokeWidth={"1.799"}
        strokeMiterlimit={"10"}
      ></path>
    </svg>
  );
}

export default Group23Icon;
/* prettier-ignore-end */
