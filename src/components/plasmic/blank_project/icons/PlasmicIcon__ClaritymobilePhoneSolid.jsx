// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function ClaritymobilePhoneSolidIcon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 36 36"}
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
          "M24 4H10a2 2 0 00-2 2v24a2 2 0 002 2h14a2 2 0 002-2V6a2 2 0 00-2-2zm-6 26h-2v-2h2v2zm-8-4V6h14v20H10z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default ClaritymobilePhoneSolidIcon;
/* prettier-ignore-end */
