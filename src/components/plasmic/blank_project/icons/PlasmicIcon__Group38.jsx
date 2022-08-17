// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Group38Icon(props) {
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
          "M18.2 92.092h1.044a9.59 9.59 0 01.828-7.413h-1.836c-5.308 0-9.625-4.048-9.625-9.014V64.007c0-5.164 4.138-9.374 9.247-9.374h.648l5.002-4.876v4.876h12.846c9.283 0 16.858-7.538 16.858-16.786v-20.42c0-4.966 4.138-9.014 9.248-9.014h29.56V2.637l5.505 5.776h1.925c5.092 0 9.248 4.048 9.248 9.013V38.82c0 4.965-4.138 9.013-9.247 9.013h-7.053c.432 1.206.666 2.483.666 3.815 0 1.241-.216 2.446-.576 3.598h6.963c9.283 0 16.858-7.359 16.858-16.426V17.425C116.309 8.376 108.752 1 99.451 1H62.46C53.176 1 45.6 8.359 45.6 17.426v20.42c0 5.165-4.138 9.375-9.247 9.375H17.858C8.575 47.22 1 54.759 1 64.007v11.658c-.036 9.068 7.683 16.427 17.2 16.427z"
        }
        stroke={"currentColor"}
        strokeWidth={"1.799"}
        strokeMiterlimit={"10"}
      ></path>
    </svg>
  );
}

export default Group38Icon;
/* prettier-ignore-end */
