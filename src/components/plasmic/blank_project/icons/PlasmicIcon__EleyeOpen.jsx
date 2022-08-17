// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function EleyeOpenIcon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 28 28"}
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
          "M18.196 13.998c0 2.225-1.882 4.028-4.204 4.028-2.321 0-4.204-1.803-4.204-4.028 0-2.224 1.883-4.027 4.204-4.027 2.322 0 4.204 1.803 4.204 4.027zM14 5.612c-2.404.01-4.896.596-7.254 1.716a18.478 18.478 0 00-4.94 3.597C1.078 11.695.15 12.81 0 14c.018 1.03 1.123 2.302 1.806 3.074 1.39 1.45 3.052 2.637 4.94 3.598A17.005 17.005 0 0014 22.388c2.406-.011 4.897-.603 7.253-1.716a18.482 18.482 0 004.941-3.598c.728-.77 1.656-1.885 1.806-3.074-.018-1.03-1.123-2.303-1.806-3.075-1.39-1.45-3.052-2.636-4.94-3.597A17.103 17.103 0 0014 5.612zm-.002 2.083c3.643 0 6.596 2.823 6.596 6.306 0 3.482-2.953 6.305-6.596 6.305-3.643 0-6.596-2.823-6.596-6.306 0-3.482 2.953-6.305 6.596-6.305z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default EleyeOpenIcon;
/* prettier-ignore-end */
