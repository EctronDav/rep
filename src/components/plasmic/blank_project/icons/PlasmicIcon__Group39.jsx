// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Group39Icon(props) {
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
          "M97.4 1h-1.008a9.836 9.836 0 01-.81 7.485H97.4c5.218 0 9.464 4.066 9.464 9.085v11.767c0 5.217-4.066 9.463-9.086 9.463h-.63l-4.911 4.912V38.8h-12.63c-9.14 0-16.57 7.593-16.57 16.949v20.6c0 5.002-4.067 9.104-9.087 9.104H24.893V91.3l-5.434-5.847H17.57c-5.001 0-9.085-4.066-9.085-9.104V54.741c0-5.002 4.066-9.086 9.085-9.086h6.927a11.924 11.924 0 01-.648-3.85c0-1.26.216-2.483.558-3.634H17.57C8.43 38.17 1 45.6 1 54.74v21.572c0 9.14 7.43 16.57 16.57 16.57h36.361c9.14 0 16.57-7.43 16.57-16.57V55.695c0-5.218 4.067-9.464 9.087-9.464h18.171c9.14 0 16.57-7.61 16.57-16.948V17.516C114.347 8.431 106.737 1 97.399 1z"
        }
        stroke={"currentColor"}
        strokeWidth={"1.799"}
        strokeMiterlimit={"10"}
      ></path>
    </svg>
  );
}

export default Group39Icon;
/* prettier-ignore-end */
