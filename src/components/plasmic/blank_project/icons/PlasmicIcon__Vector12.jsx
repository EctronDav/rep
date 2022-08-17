// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Vector12Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 26 88"}
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
        opacity={".45"}
        d={
          "M.012 1.558a.06.06 0 00-.01.048l20.106 85.177a.06.06 0 00.049.045l2.177.297h.02l.954-.225a3.207 3.207 0 002.385-3.856L6.671 2.47A3.207 3.207 0 002.814.086L1.85.314A3.117 3.117 0 00.012 1.558zM1.59 3.773l18.974 80.373c.238 1.01 1.123 1.818 2.16 1.773a2.1 2.1 0 001.997-2.34c0-.086-.017-.159-.035-.238L5.642 2.654c-.02-.083-.034-.153-.076-.232a2.097 2.097 0 00-2.833-1.2c-.947.426-1.38 1.542-1.141 2.551z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector12Icon;
/* prettier-ignore-end */
