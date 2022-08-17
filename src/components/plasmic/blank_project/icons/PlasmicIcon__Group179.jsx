// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Group179Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 21 16"}
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
          "M10.301 0h-.58C4.353 0 0 4.083 0 9.117v.745a3.178 3.178 0 003.18 3.176h11.164v1.995l1.995-1.995h.504a3.18 3.18 0 003.18-3.176v-.745C20.017 4.083 15.67 0 10.3 0z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Group179Icon;
/* prettier-ignore-end */
