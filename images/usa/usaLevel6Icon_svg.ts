/* eslint-disable */
/* @formatter:off */

import asyncLoader from '../../../phet-core/js/asyncLoader.js';

const image = new Image();
const unlock = asyncLoader.createLock( image );
image.onload = unlock;
image.src = `data:image/svg+xml;base64,${btoa('<svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" width="150" height="196" viewBox="0 0 150 196"><defs><style>.cls-1,.cls-2{stroke:#000;fill:none}.cls-1{stroke-linecap:round;stroke-linejoin:round}.cls-2{stroke-miterlimit:10}.cls-10,.cls-11,.cls-13,.cls-6,.cls-7,.cls-8,.cls-9{stroke-width:0}.cls-7{fill:#5b2ac2}.cls-8{fill:#1a1a1a}.cls-9{fill:#3e1f14}.cls-10{fill:#cb8b7d}.cls-11{fill:#b52d00}.cls-13{fill:#fff}</style></defs><path d="M104.1 77.5c2.5 12.1-3.2 21.7-15.4 24.1.4-1.3.8-2.1.8-2.1 16.7-10 10.5-29.7 4-41.3-12.3-26.8-48.9-8.1-41.3 18.5-8.6-3-6.2 11.2 2.8 10.1v.2c4.5 3.5 7.2 9.6 9 15-27.2 4.3-25.8-35.3-15.5-51.2 7.7-14.6 31.2-15.3 41-5.5 11.3 10.4 13.4 19.2 14.9 32.3Z" class="cls-9"/><path d="M66.2 110.1v-.3c-2.1-7.3-4.7-17.8-11.3-22.9v-.2c-9 1-11.4-13.1-2.8-10.1-7.6-26.6 29-45.3 41.3-18.5 6.5 11.6 12.7 31.4-4 41.3-2.6 5.1-1.9 12.3-4.2 17.8-4.7 1-9.6 1-14.4.8-1.5-2.2-4-3.9-4.6-7.9m24.7-39.7c1.8-.6-.9-7.4-2.6-6.6-1.8.6.9 7.4 2.6 6.6m-3.4 17.7c2.7-1.4 3.7-4.9 3.4-7.9-4.8 3.6-11.8 5.7-17 3.8 3 3.9 8.9 6.3 13.6 4Zm2.8-31.7c1.3-1.4-11.1-.7-8.7 1.8 3.3-1.2 5.8-1.7 8.7-1.8M70.8 75.1c2.1-.7-.9-8.2-2.9-7.3-2.1.7.9 8.2 2.9 7.3M70 61.5c.8-2.9-4.4-1.5-6.5-.2-.9.6-4.3 3.6-3.7 5.1.7.6 2.8-4.1 10.2-4.9m24.1 49h.3c-1 2.7-3.2 4.6-5.6 5.7.6-2.1 1.7-3.8 1.6-6.2 1.2.2 2.3.3 3.8.5Z" class="cls-10"/><path d="M91 66.6c1.7 4.3-1.1 5.3-2.7 1-1.7-4.3 1-5.3 2.7-1" class="cls-6"/><path d="M90.9 80.2c1.4 10.6-12.3 10.8-17 3.8 5.2 1.8 12.2-.3 17-3.8" class="cls-13"/><path d="M90.3 110c.1 2.4-.9 4.1-1.6 6.2-1.1.5-2.3.9-3.6 1.1.7-2.8 1.7-5.1 2.1-7.9 1.2.3 2.1.5 3 .6Z" class="cls-9"/><path d="M83.7 56.1c2.9-.7 6.9-.7 6.6.2-2.9 0-5.3.6-8.7 1.8-.7-.7-.8-1.3 2.1-2" class="cls-8"/><path d="M70.9 70.8c1.9 4.7-1.3 6-3.2 1.2-1.9-4.7 1.4-6 3.2-1.2" class="cls-6"/><path d="M69.6 60c.3.2.9.8.4 1.4-7.4.8-9.5 5.5-10.2 4.9 0-4 6.9-7.5 9.9-6.3Z" class="cls-8"/><path d="M70.8 118c-1.5 0-2.9-.2-4.4-.3-1.1-2.4-3.5-4.7-3.6-7.3l3.3-.5c.6 4 3.1 5.9 4.7 8.1" class="cls-9"/><path d="M66.4 117.7c-3.9 0-8.8-1.9-9.2-6.3l5.6-.9c0 2.6 2.5 4.9 3.6 7.3Z" class="cls-10"/><path d="M49.1 171.8c.1.3.3.7.4 1-.2-.1-.3-.2-.5-.3 0-.2 0-.5.1-.7" style="stroke-width:0;fill:#926350"/><path d="M145.9 141.2c-4.6-1.6-10.2.2-14 3.2-2.8-1.2-7.2.9-7.5 3.9-2.2-.8-5.1-.8-7.8-.2-1.5-3.3-3.6-6.9-5.4-11.4-1.5 1.4-4.4.7-6.2 0-.4 1.1-1.1 2.1-2.1 2.8 0 3.5-.1 7.3-.4 13 7.1 13 5.3 19.5 21.6 11.1-1.4 5.6 7.9 4.8 5.7-.8 1.1-.3 2-1.1 2.5-2.1 2.2 1.8 6.3 1.9 6.7-1.6 1.2-.1 2.8.6 3.8-.4 1.7-2.6 4.3-9.5-1.6-6.8-2.4.6-5.2-1.1-3.5-3.6 1.9-2.8 7-3.8 8.1-6.9Zm-92.5 33.4c-1.6.5-1.7 4.1-3.9 3 .7-1.5 1.5-4.3-.6-5.1.8-10.7 2.5-17.4 6.9-31.8-2.3 4.3-11.3 3.5-9.4-2.1-1.6 1-3.7 1.6-5.7 1.6 0 0-4.6 21.7-4.5 21.8q-.3 1.5-.3 3c-7.5.7-17.3 12.9-2.4 6.9 2.8 2.5-1.1 13.5 6.7 8.8 1.1 2.5 4.5 2.1 6.3.6 5.9 5.1 13.6-5.5 6.9-6.5Z" class="cls-10"/><path d="M115.6 130.6c-.3-.3-2.6-1.9-3.3-2.5h-.2c1.3-1.5-1.3-2.5-4-4.5.7-.1 1.4-.4 2.1-.8.5-2.3-10.6-11.4-15.5-12.9-1 10.4-37 12-37.4 1.5-8.2 2.5-14.5 6.3-20.3 12.4.6.4 1.2.8 1.8 1.1-2.2 1.5-5 2.3-6 5.2.4.3.8.6 1.3.8-9.3 4.3-1.7 6.2 3.7 3.1-6.8 5.7 4.9 8 8.6 4.6-1.8 6.3 7.4 6.1 9.8 1.6 14.9 53.3-26.9 60.5 51 52.3-3.3-17.5-5.8-37.8-4.3-53.1 1-.7 1.7-1.7 2.1-2.8 3.8 1.9 8 .8 6.8-3.9 1.7 1 4.8 0 3.6-2.1Z" class="cls-13"/><path d="M66.2 110.1c-2.1-7.4-4.7-17.9-11.4-23.2" class="cls-2"/><path d="M66.6 111.1c-.1-.3-.2-.6-.3-1m27.1-52c6.5 11.6 12.7 31.4-4 41.3-1 2.3-2.6 6.9-2.1 9.9m-5.7-51.2c-2.5-2.5 10-3.2 8.7-1.8-2.9 0-5.3.6-8.7 1.8M70 61.4c.8-2.9-4.4-1.5-6.5-.2-.9.6-4.3 3.6-3.7 5.1.7.6 2.8-4.1 10.2-4.9m18.3 6.3c1.6 4.3 4.4 3.2 2.7-1-1.6-4.3-4.4-3.2-2.7 1m-20.5 4.4c1.8 4.7 5.1 3.5 3.2-1.2-1.8-4.7-5.1-3.4-3.2 1.2" class="cls-1"/><path d="M73.9 84.1c5.2 1.8 12.2-.3 17-3.8 1.4 10.6-12.3 10.8-17 3.8m8.6-6.5c.9-2.9 4.7-5.7 6.9-2.3m4-17.2C81.1 31.3 44.5 50 52.1 76.6c-2-1.5-5.3.1-5.5 3.3 0 4.3 6.1 8.8 9.8 6.1" class="cls-1"/><path d="M49.5 166.1c.7-5 3.2-15.5 6.4-25.6m-15.1-.2-4.6 21.6m30-52c-2 .3-6.9 1.1-8.9 1.5m53.9 25.1c1.8 4.3 3.7 8.2 5.4 11.2m-29.3-38.3c2.6.6 4.2.7 6.8 1.1m13.2 51c2.5 9.9 10.8 4.5 16.9 2" class="cls-2"/><path d="M124.4 148.3c-7.6-2.6-22 3.5-17.1 13.2m-58.2 10.3c.4-2.4.2-4.5.4-5.7m-13.2-4.8c-.2 1.2-.4 2.4-.4 3.6m67.1-26.2c-1.4 15.7.9 36 4.3 53.8" class="cls-2"/><path d="M102.6 152.4c1.5 3.4 3.1 5.7 4.7 9.1m17.2-11.4c-1.1-3.9 4-7.1 7.5-5.7 3.7-3 9.4-4.8 14-3.2-1.1 3-6.2 4-8.1 6.9-1.7 2.5 1.1 4.2 3.5 3.6m-8.7 3.6c1.7 2.9 4.1-3.3 5.9-.7 2.2 4.9-1.5 9.8-6.4 5.9" class="cls-2"/><path d="M124.4 148.5c-5.8 1.3-6.5 14 0 14.5m14.3-8.5c.9-2.1 4.5-4.8 6.3-2.4.3 2.1-1.2 4.5-2.1 6.5-1 1-2.5.2-3.8.4" class="cls-2"/><path d="M126.8 158.7c-2.6.9-3.2 5.5-2.2 7.7 1.1 1 3.4 1.1 4.6.4 2.2-1.8 0-8.3-2.5-8Z" class="cls-2"/><path d="M129.9 162.6c1.1-.3 2.1-1.2 2.6-2.2m-83 12.4c-1.1-4.6-4.6-5.6-8.6-6.7-7.4-6.2-25.4 12.8-7.4 5.7 2.7 2.3-.5 8.1 3.1 9.8 3.9.8 7-4.4 8.4-7.5.1-4.8-5.6-1.2-7.1.9" class="cls-2"/><path d="M40.1 180.4c2.1 4.5 8.1.5 9.4-2.8 2.4-4.2-1.1-7.4-4.5-3.6" class="cls-2"/><path d="M46.2 180.9c6 5.7 14-5.2 7.2-6.3-1.6.5-1.7 4.1-3.9 3" class="cls-2"/><path d="M56.1 139.7c15.3 53.1-27 61.2 51.2 52.8" class="cls-2"/><path d="M57.3 111.3c-3.4.9-6.6 2.6-8.5 3.4m8.5-3.4c.5 10.5 36.3 9 37.4-1.5" class="cls-1"/><path d="M48.8 114.8c-3 1-9.4 6.3-11.8 9 2.7 2.1 6.7 2.3 9.6.6-2.4 6.6 7 5.7 9.8 2.1 2.6 4.6 9.7 4.9 12.6.5 3.5 4.5 11 4.1 14.1-.6 2.3 5.6 11.1 4.5 11.9-1.6 2.4 3.7 8.5 2.8 9.7-1.4 1.7.8 3.8.6 5.4-.4.5-2.3-10.6-11.4-15.5-12.9" class="cls-1"/><path d="M34.2 130.8c2.7 1.4 7.2 2 9.8.4-2.4 6.7 7 5.7 9.8 2.1 2.6 4.6 9.7 4.9 12.6.5 3.5 4.5 11 4.1 14.1-.6 2.3 5.6 11.1 4.5 11.9-1.6 2.4 3.7 8.5 2.8 9.7-1.4 4.5.8 16.4-1.2 6-6.6m-69.3 1.2s0 0 0 0c-2.2 1.5-5 2.3-6 5.2.4.3.8.6 1.3.8" class="cls-1"/><path d="M34.2 130.8c-9.3 4.3-1.7 6.2 3.7 3.1-6.8 5.7 4.9 8 8.6 4.6-1 1.3.1 3.4 1.4 4.3 3.3 2 6.8-.6 8.9-3.1 2.6 4.6 9.7 4.9 12.6.5 3.5 4.5 11 4.1 14.1-.6 2.3 5.6 11.1 4.5 11.8-1.6 2.4 3.7 8.5 2.8 9.7-1.4 3.8 1.9 8 .8 6.8-3.9 1.7 1 4.8 0 3.6-2.1-.3-.3-2.6-1.9-3.3-2.5m-49.2-17.4c.1 2.4 2.5 4.7 3.5 6.9m-.2-7.7c.5 4 3.1 5.9 4.6 8.2m16.5-8.7c-.4 2.8-1.4 5.1-2.1 7.8m5.1-7.3c.1 2.4-.9 4.2-1.6 6.3M64 101.9c-10.2 1.2-18-1.9-20.2-12.7-6.7-18.8 1.2-48 23.9-50.6 23.9-1.7 35.4 20.1 36.5 39 2.5 12.1-3.2 21.7-15.4 24.1" class="cls-1"/><path d="m112.82 45.408 17.79-15.961 15.96 17.789-17.789 15.961z" class="cls-11"/><path d="m113.786 108.421 21.445-10.552 10.552 21.445-21.445 10.552z" class="cls-7"/><path d="m95.8 7.1-4.1 23.5-23.5-4.1L72.3 3z" style="fill:#00a553;stroke-width:0"/><path d="M44.1 25.3 29.6 44.2l-19-14.5 14.6-19z" class="cls-11"/><path d="m26.5 78.5 6 23.1-23.2 6-5.9-23.1z" class="cls-7"/><path d="m68.2 26.5 23.5 4.1 4.1-23.5L72.3 3zm45.586 81.721 21.445-10.552 10.552 21.445-21.445 10.552zM32.5 101.6l-23.2 6-5.9-23.1 23.1-6zm-2.9-57.4-19-14.5 14.6-19 18.9 14.6zm83.312 1.301 17.817-15.93 15.93 17.817-17.816 15.93z" style="fill:none;stroke-miterlimit:10;stroke:#fff"/><path d="M41.1 149.3h20.8v20.8H41.1z" style="stroke-miterlimit:10;stroke:#fff;fill:#00a553" transform="rotate(-79.7 51.448 159.621)"/></svg>')}`;
export default image;