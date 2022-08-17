// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Vector8Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 392 705"}
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
        opacity={".37"}
        d={
          "M148.236 673.381c1.707 7.227 5.053 13.582 9.656 18.656.356.387.709.774 1.085 1.144 5.589 5.688 12.853 9.594 21.234 11.08a31.46 31.46 0 001.953.307 29.99 29.99 0 001.987.208c3.349.286 6.85.207 10.458-.301.024.007.034.003.055-.004l.007-.013c.014-.038.024-.042.069-.004l174.445-43.888c16.392-6.314 25.961-23.898 21.825-41.409L252.227 31.239C247.389 10.75 225.733-2.47 201.572.387L35.961 1.711c-1.839.035-3.615.097-5.45.29a57.87 57.87 0 00-16.15 9.719C3.865 20.712-1.983 36.226.613 46.878L148.236 673.38z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector8Icon;
/* prettier-ignore-end */
