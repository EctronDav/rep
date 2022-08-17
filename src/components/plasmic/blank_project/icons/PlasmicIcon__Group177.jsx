// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Group177Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 27 20"}
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
        fillRule={"evenodd"}
        clipRule={"evenodd"}
        d={
          "M13.445 0h-.758C5.681 0 0 5.329 0 11.899v.973a4.147 4.147 0 004.15 4.145h14.57v2.603l2.605-2.603h.657a4.15 4.15 0 004.15-4.145v-.973C26.128 5.329 20.453 0 13.446 0z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Group177Icon;
/* prettier-ignore-end */
