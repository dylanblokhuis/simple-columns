import { Path, SVG } from '@wordpress/components';

export const alignEqual = (
  <SVG xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <Path d="M5 5v1.5h14V5H5zm0 7.8h14v-1.5H5v1.5zM5 19h14v-1.5H5V19z" />
  </SVG>
)

export const alignBottom = (
  <SVG xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <Path d="M15 4H9v11h6V4zM4 18.5V20h16v-1.5H4z" />
  </SVG>
);

export const alignCenter = (
  <SVG xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <Path d="M20 11h-5V4H9v7H4v1.5h5V20h6v-7.5h5z" />
  </SVG>
);

export const alignTop = (
  <SVG xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <Path d="M9 20h6V9H9v11zM4 4v1.5h16V4H4z" />
  </SVG>
);