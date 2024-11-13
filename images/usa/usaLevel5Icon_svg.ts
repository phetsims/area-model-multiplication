/* eslint-disable */
/* @formatter:off */

import asyncLoader from '../../../phet-core/js/asyncLoader.js';

const image = new Image();
const unlock = asyncLoader.createLock( image );
image.onload = unlock;
image.src = `data:image/svg+xml;base64,${btoa('<svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" width="150" height="196" viewBox="0 0 150 196"><defs><style>.cls-3{fill:none;stroke:#000;stroke-miterlimit:10}.cls-10,.cls-13,.cls-7{stroke-width:0}.cls-7{fill:#e1c0a5}.cls-10{fill:#fff}.cls-13{fill:#050504}.cls-3{stroke-width:1px}</style></defs><path d="M71.9 113.8c0-2.1-1.5-7.9-1.8-8.3-3.8-1.1-7.6-4.3-7.9-4.5 3.3-2.3 7.2-4.3 8.9-4.8-16.3-7.5-19.3-23.1-19.3-23.1l-.3-.2c1.6-2.4 6.1-7.2 7.1-8.2C58 62 58 51.1 58 51.1s2.7 7.2 4.3 12.4c11-4.2 21.9-4.7 30.8-4 1.3 9.5 6.9 8.8 8.3 15.2.2 1.5 5.3 21.1-14.5 29.8-2.3 2.2-.3 8 0 11.3-.5 2.3-1.9 7-5.2 8.1-4.2.9-10-6.3-9.9-10.1Zm16.4-43.4c1.4-.5-.3-5-1.7-4.5s.3 5 1.7 4.5m-6.8 17.7c6.2-.3 8.6-5.9 8.6-5.9-1.6-.2-16.9.6-18.4.9 0 0 3.6 5.2 9.8 4.9ZM68.3 72.2c1.6-.5-.4-5.7-1.9-5.1-1.6.5.4 5.7 1.9 5.1" class="cls-7"/><path d="M88.5 67.8c1.1 2.9-1.1 3.7-2.1.8-1.1-2.9 1.1-3.7 2.1-.8" class="cls-13"/><path d="M90.2 82.2c-3.2 7.8-14.5 7.2-18.4.9 1.5-.3 16.8-1.1 18.4-.9" class="cls-10"/><path d="M68.6 69.2c1.2 3.3-1.2 4.2-2.4.9-1.3-3.3 1.2-4.2 2.4-.9" class="cls-13"/><path d="M102.1 72c-1.4-3.3-2.6-7.2-3.5-11.8 8.2 1.3 13.5 3.3 13.5 3.3-23.2-36.1-59.3-22.3-56.6-16.9l-2.2 3.3c-2.1 0-2.8.6-4.3 3.6-13.1 20.8-4 45 8.2 56.6.8.1 8.8.2 14.1-.4-.6-2.7-1.2-4.3-1.2-4.3-3.8-1.1-7.6-4.3-7.9-4.5 3.3-2.3 7.2-4.3 8.9-4.8C54.8 88.6 51.8 73 51.8 73l-.3-.2c1.6-2.4 6.1-7.2 7.1-8.2C58 61.9 58 51 58 51s2.7 7.2 4.3 12.4c11-4.2 21.9-4.7 30.8-4 1.3 9.5 6.9 8.8 8.3 15.2.2 1.5 5.3 21.1-14.5 29.8-.7.2-1 1.4-1 3 11.5-2.7 23.8-8 31.2-18.2 0 0-9.1-3.5-15-17.3Z" style="stroke-width:0;fill:#967246"/><path d="M112.7 142.1c-1.9-4.1-9.4-24.2-9.4-24.2-3.4-1.1-13.1-.8-13.3-.8-1.3-2.4-3.1-4.4-3.6-4.3.2 1 .3 2 .5 3-.5 2.3-1.9 7-5.2 8.1-4.2.9-10-6.3-9.9-10.1-.3 0-3-.3-3.7 2.9-.1.2-10.4-2.5-13.4-1-1.2 1.5-8.5 19.4-12.6 22.1 2.4 5.4 10.4 13.8 18.2 10.4 0 0 .2-1.2.6-3.1 3.8 10.3 8.3 28.9 2.8 40.4 17.6 10.8 27.7 10.3 42.3.2-.3.5-4.1-24.8-3.7-35 1-.1 3.8-1.3 3.7-1.4.8-2.3 2.7-5.3 6.8-6.5l-.2-.9Z" style="stroke-width:0;fill:#ffd204"/><path d="M136.3 138c2.6-1.8 1.8-2.1 1.8-2.1s-4.7-1.2-8.3 1.5c-3.5 2.7-.9.4-.9.4-.7.4-8.2 1.1-8.1 3.7 0 0-.7.3-1.6.9-5.8-.9-12 2.5-13.1 7.1s-.9.5-2.5 1l.9 3.1s-.2 1.9 1 2.5c6.4 3.8 9.3 3.5 14.3-1.8.3.1.7.2 1 .2-1.1 4.2 5.8 4.1 4.3-.5.8 0 2.5-1.5 2.5-1.6 2.3 1.8 4.5 1.2 5-1.9h.2c.4 1 3.6.3 3.5-.6-.1-.8.9-2.9.9-2.9 1.6-2.1-2.4-3-3.7-1.4h-.1c-1.6-.3-2.5-1-2.5-1 .6-3.3 1.1-3.3 5.4-6.6M57 171.9c-.7-.5-1.9.9-2.6 1.8-.3 0-.9-.2-1.2-.2 1.1-1 .9-4-1.5-3.4l-.7-.2 6.3-20.9c-4 .3-7.3-1.5-9.7-3.7l-1.8 7.7s-2.6 1.4-4.1 10.1c-5.9-1.3-16.7 11.9-2.6 5.3l1.5 3.9c-.2.6-1 3-.7 3.8.5 1.2 3.8 1.7 4.9.3.6 1.6 4.3 3.1 5.7.8 3.3 3 10.3-.6 6.5-5.2Z" class="cls-7"/><path d="M47.6 145.3c-.1.5-2 8.3-2 8.5" class="cls-3"/><path d="M45.8 153s-2.6 1.4-4.1 10.1M56 48.1c-5.6-7.3 33.3-20.6 56.1 15.5-11.6-4.5-34.4-6.6-49.8 0-1.5-5.2-4.3-12.4-4.3-12.4s0 10.9.6 13.6c-1.2 1.3-6.1 6.4-7.6 9.1-.5-5.6.9-16.9 2.6-20.2" class="cls-3"/><path d="M85.6 107.6c11.7-2.7 24.1-8 31.6-18.3-4.2-.2-17.3-15.5-18.5-29.1m-29 49.8c.6 0 1.2-.1 1.8-.2m-16-63.1L53.3 50c-2.1 0-2.8.6-4.3 3.6-13.1 20.8-4 45 8.2 56.6 1.5 0 5.6.2 12.1-.2" class="cls-3"/><path d="M51.7 73.2s3 15.6 19.3 23.1c-11.7 4.7-24.2 15.4-1.4 13.7m23.5-50.4c1.3 9.5 6.9 8.8 8.3 15.2.2 1.5 5.3 21.1-14.5 29.8-2.3 2.2-.3 8 0 11.3" class="cls-3"/><path d="M62.1 101.1c.3.2 4 3.4 7.9 4.5.7 1.3 2.1 8.1 2.1 10.8m12.2-18.8s-2.3 2.6-5.1.6" class="cls-3"/><path d="M71.9 113.8c-9.7 0 4 17.4 10.7 17.2 6.7 0 7.6-12.1 7.4-14-1.3-2.4-3.1-4.4-3.6-4.3" class="cls-3"/><path d="M71.5 115.3c5.6 10.2 13.5 12.6 15.7-.8m-19 2.3c-.1.2-10.4-2.5-13.4-1-1.2 1.5-8.5 19.4-12.6 22.1 2.4 5.4 10.4 13.8 18.2 10.4.8-4.1 3.3-16.9 3.6-18.1m26-13.1c.2 0 9.9-.3 13.3.8 0 0 7.5 20 9.4 24.2m-7.2 10.8c-.3-5.9 6.4-11.9 13.7-10.5" class="cls-3"/><path d="M106.1 149.5c.1 0-2.9 1.3-4 1.4" class="cls-3"/><path d="m103.6 150.5.9 3.1s-.2 1.9 1 2.5c6.5 3.8 9.4 3.4 14.4-1.9m.5-10.5c0-.2.5-3.1 1.1-3.6.7-.8 7.5-2.3 7.5-2.3s-2.6 2.3.9-.4 8.3-1.5 8.3-1.5.8.4-1.8 2.1c-4.4 3.3-4.8 3.3-5.4 6.6 0 0 .9.7 2.5.9" class="cls-3"/><path d="M120.8 141.5c-4.8 1.5-6.7 11.1-.5 12.9m12.1-6.8c0-3 6.3-4.3 4.8-.6 0 0-1 2.1-.9 2.9s-3.1 1.6-3.5.6" class="cls-3"/><path d="M128.5 149.7c0-.7 2.1-4.1 3.7-1.8 1.4 3.8-1.1 7.7-5.2 4.2m.3-3.5s.7-.5 1.3-.2" class="cls-3"/><path d="M127.6 152.4s-1.6 1.5-2.4 1.5m-.2 0c0 1.1 1.2 3-1.8 3.5-5.9.3-.4-11.5 1.8-3.5ZM57.4 149c0 .1-6.3 20.9-6.3 21m2.7 4.6c5.8-9.1 6.3 8.4-3.3 2.5" class="cls-3"/><path d="M48.7 172s2.9-2.8 4.2-1.9c1.6 1 .8 2.5.2 3.4-2.2 3.2-4.9 7.5-8.4 2.9" class="cls-3"/><path d="M42.2 172.4c1.3-1.1 5.1-4.2 6.3-2.9 1.8 2.6-2 5.4-3.7 6.8-1.1 1.4-4.4.9-4.9-.3-.3-.8.5-3.2.7-3.8l-1.5-3.9c-14.3 6.6-2.9-6.9 3.1-5.3m58.1-33.1c1 2.8 4 55.4 5.8 55.9-14.5 10.1-24.6 10.7-42.3-.2 5.5-11.4 1-30.2-2.8-40.4m-4.5-28.4s6 1.3 7.2 9.2m36.3 2.2s1.3-1.8 1.4-8.8m-47.2 54.2c-.4 0-.7.2-1.1.2M63.7 67c-.3-2.3 2.1-3.7 4-2.7m17.1-1.9c.6-1.1 3.1-.7 3.6 0m-19.8 6.8c1.2 3.3-1.2 4.2-2.4.9-1.3-3.3 1.2-4.2 2.4-.9Zm19.9-1.4c1.1 2.9-1.1 3.7-2.1.8-1.1-2.9 1.1-3.7 2.1-.8Zm-8.7 3.3c.7 1.4 1.3 1.6 2.2.5 1 1.8 1.4 3.6.5 4.7" class="cls-3"/><path d="M90.2 82.2c-3.2 7.8-14.5 7.2-18.4.9 1.5-.3 16.8-1.1 18.4-.9" style="stroke-linecap:round;stroke-linejoin:round;stroke-width:1px;fill:none;stroke:#000"/><path d="m71.1 153.8 19.3-20 1.8 25.7-9.9-3 4.6-12.9-7.2 12.8m3.2 2.3 3.7 1.3-2.3 5.8" class="cls-10"/><path d="M120.7 34.1h24v24h-24z" style="fill:#5b2ac2;stroke-width:0" transform="rotate(-41.9 132.537 46.102)"/><path d="M120.7 101.7h24v24h-24z" style="stroke-width:0;fill:#0047fd" transform="rotate(-26.2 132.798 113.575)"/><path d="M59.7 2.3h24v24h-24z" style="stroke-width:0;fill:#00a553" transform="rotate(-6.6 71.374 14.556)"/><path d="m23.9 48.3 4.5 23.6-23.6 4.5L.4 52.8z" style="stroke-width:0;fill:#b52d00"/><path d="M58.377 3.727 82.222 1.01l2.717 23.846-23.846 2.717zM116.7 108.061l21.534-10.596L148.831 119l-21.535 10.597zM28.4 71.9 4.8 76.4.4 52.8l23.5-4.5zm87.408-26.73 17.891-15.997 15.997 17.892-17.892 15.997z" style="fill:none;stroke:#fff;stroke-miterlimit:10"/><path d="M43.1 148.3h20.8v20.8H43.1z" style="stroke:#fff;stroke-miterlimit:10;fill:#5b2ac2" transform="rotate(-79.7 53.407 158.614)"/></svg>')}`;
export default image;