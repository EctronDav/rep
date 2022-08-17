// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Group170Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 28 44"}
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
          "M22.198 43.367H4.936C2.212 43.367 0 41.072 0 38.256V5.11C0 2.29 2.212 0 4.936 0h17.262c2.724 0 4.936 2.295 4.936 5.112v33.144c0 2.816-2.212 5.111-4.936 5.111zM4.936 3.091c-1.075 0-1.944.904-1.944 2.015v33.145c0 1.11.874 2.015 1.944 2.015h17.262c1.075 0 1.943-.904 1.943-2.015V5.105c0-1.11-.873-2.015-1.943-2.015H4.936z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Group170Icon;
/* prettier-ignore-end */
