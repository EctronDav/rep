// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Vector20Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 68 55"}
      height={"1em"}
      width={"1em"}
      style={{
        fill: "currentcolor",
        ...(style || {}),
      }}
      className={classNames("plasmic-default__svg", className)}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M57.504 0h-.608a5.898 5.898 0 01-.476 4.466h1.084c3.116 0 5.647 2.434 5.647 5.424v7.025c0 3.111-2.43 5.646-5.425 5.646h-.375L54.417 25.5v-2.94h-7.533c-5.453 0-9.886 4.535-9.886 10.112v12.293c0 2.99-2.43 5.425-5.42 5.425h-17.34v3.486l-3.232-3.486h-1.12a5.428 5.428 0 01-5.421-5.425v-12.88a5.431 5.431 0 015.42-5.426h4.131a7.018 7.018 0 01-.052-4.465H9.886C4.433 22.195 0 26.628 0 32.08v12.88c0 5.454 4.437 9.887 9.886 9.887h21.695c5.453 0 9.887-4.433 9.887-9.886V32.669c0-3.115 2.434-5.646 5.42-5.646H57.73c5.453 0 9.886-4.538 9.886-10.112V9.886C67.616 4.437 63.078 0 57.504 0z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector20Icon;
/* prettier-ignore-end */
