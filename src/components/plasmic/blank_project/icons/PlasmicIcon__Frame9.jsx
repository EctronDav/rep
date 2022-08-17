// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Frame9Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 1643 1088"}
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

      <g filter={"url(#Eth5Hqyg8a)"}>
        <ellipse
          cx={"1400.5"}
          cy={"229.5"}
          rx={"212.5"}
          ry={"203.5"}
          fill={"currentColor"}
        ></ellipse>
      </g>

      <defs>
        <filter
          id={"Eth5Hqyg8a"}
          x={"1158"}
          y={"0"}
          width={"485"}
          height={"467"}
          filterUnits={"userSpaceOnUse"}
          colorInterpolationFilters={"sRGB"}
        >
          <feFlood floodOpacity={"0"} result={"BackgroundImageFix"}></feFlood>

          <feColorMatrix
            in={"SourceAlpha"}
            values={"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"}
            result={"hardAlpha"}
          ></feColorMatrix>

          <feMorphology
            radius={"10"}
            operator={"dilate"}
            in={"SourceAlpha"}
            result={"effect1_dropShadow_406_11875"}
          ></feMorphology>

          <feOffset dy={"4"}></feOffset>

          <feGaussianBlur stdDeviation={"10"}></feGaussianBlur>

          <feComposite in2={"hardAlpha"} operator={"out"}></feComposite>

          <feColorMatrix
            values={"0 0 0 0 0 0 0 0 0 0.470588 0 0 0 0 0.941176 0 0 0 0.25 0"}
          ></feColorMatrix>

          <feBlend
            in2={"BackgroundImageFix"}
            result={"effect1_dropShadow_406_11875"}
          ></feBlend>

          <feBlend
            in={"SourceGraphic"}
            in2={"effect1_dropShadow_406_11875"}
            result={"shape"}
          ></feBlend>
        </filter>
      </defs>
    </svg>
  );
}

export default Frame9Icon;
/* prettier-ignore-end */
