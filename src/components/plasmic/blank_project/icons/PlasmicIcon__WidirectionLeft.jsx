// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function WidirectionLeftIcon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 40 40"}
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
          "M9.453 19.947c0 .493.16.906.494 1.226l5.12 5c.293.334.68.507 1.133.507.467 0 .867-.16 1.187-.467a1.58 1.58 0 00.493-1.173c0-.467-.16-.867-.493-1.187L15.2 21.667h13.733c.467 0 .854-.16 1.16-.494.307-.333.454-.733.454-1.2 0-.466-.147-.866-.454-1.2a1.574 1.574 0 00-1.16-.52H15.2l2.187-2.213c.32-.32.493-.707.493-1.147 0-.466-.16-.866-.493-1.186-.334-.32-.72-.507-1.2-.507-.427 0-.814.187-1.134.547l-5.12 5c-.32.333-.48.72-.48 1.2z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default WidirectionLeftIcon;
/* prettier-ignore-end */
