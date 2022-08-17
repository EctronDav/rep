// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Group8Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 116 94"}
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
          "M97.381 1h-1.007a9.836 9.836 0 01-.81 7.485h1.817c5.218 0 9.464 4.066 9.464 9.085v11.767c0 5.217-4.066 9.463-9.086 9.463h-.63l-4.911 4.912V38.8h-12.63c-9.14 0-16.57 7.593-16.57 16.949v20.618c0 5.002-4.067 9.104-9.087 9.104H24.875v5.847l-5.433-5.847h-1.89c-5.001 0-9.085-4.066-9.085-9.104V54.795c0-5.002 4.066-9.086 9.085-9.086h6.927a11.924 11.924 0 01-.648-3.85c0-1.26.216-2.483.558-3.634h-6.837C8.431 38.207 1 45.637 1 54.777V76.35c0 9.14 7.43 16.57 16.57 16.57h36.361c9.14 0 16.57-7.43 16.57-16.57v-20.6c0-5.218 4.067-9.464 9.087-9.464h18.171c9.14 0 16.57-7.61 16.57-16.948V17.57C114.347 8.43 106.737 1 97.381 1z"
        }
        stroke={"currentColor"}
        strokeWidth={"1.799"}
        strokeMiterlimit={"10"}
      ></path>
    </svg>
  );
}

export default Group8Icon;
/* prettier-ignore-end */