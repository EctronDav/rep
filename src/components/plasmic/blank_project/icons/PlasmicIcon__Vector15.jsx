// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Vector15Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 25 35"}
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
          "M3.167 34.801c7.117 0 12.908-5.786 12.908-12.903v-8.7c0-4.061 3.172-7.37 7.075-7.37h1.126a7.687 7.687 0 01-.937-3.682c0-.747.11-1.462.31-2.146h-.499c-7.085 0-12.856 5.876-12.903 13.108 0 .016-.005.032-.005.042v8.738c0 3.903-3.178 7.08-7.08 7.08H.067A9.161 9.161 0 010 34.796h3.167v.005z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector15Icon;
/* prettier-ignore-end */
