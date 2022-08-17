// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Group107Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 118 94"}
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
          "M18.254 92.11h1.044a9.588 9.588 0 01.828-7.413H18.29c-5.307 0-9.626-4.048-9.626-9.014V64.025c0-5.164 4.139-9.374 9.248-9.374h.648l5.002-4.876v4.876h12.846c9.283 0 16.858-7.538 16.858-16.786V17.426c0-4.965 4.138-9.013 9.248-9.013h29.56V2.637l5.505 5.776h1.925c5.092 0 9.248 4.048 9.248 9.013V38.82c0 4.965-4.138 9.013-9.248 9.013h-7.052c.431 1.206.665 2.483.665 3.815 0 1.241-.216 2.446-.575 3.598h6.962c9.284 0 16.859-7.359 16.859-16.426V17.425C116.363 8.376 108.806 1 99.504 1h-36.99c-9.284 0-16.86 7.359-16.86 16.426v20.42c0 5.165-4.138 9.375-9.247 9.375h-18.55C8.575 47.22 1 54.759 1 64.007v11.658C1 84.751 8.754 92.11 18.254 92.11z"
        }
        stroke={"currentColor"}
        strokeWidth={"1.799"}
        strokeMiterlimit={"10"}
      ></path>
    </svg>
  );
}

export default Group107Icon;
/* prettier-ignore-end */
