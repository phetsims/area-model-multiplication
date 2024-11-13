/* eslint-disable */
/* @formatter:off */

import asyncLoader from '../../../phet-core/js/asyncLoader.js';

const image = new Image();
const unlock = asyncLoader.createLock( image );
image.onload = unlock;
image.src = `data:image/svg+xml;base64,${btoa('<svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" width="150" height="196" viewBox="0 0 150 196"><defs><style>.cls-1{stroke-linejoin:round}.cls-1,.cls-2{stroke-linecap:round}.cls-1,.cls-2,.cls-3{stroke:#000;fill:none}.cls-2,.cls-3{stroke-miterlimit:10}.cls-10,.cls-11,.cls-12,.cls-13,.cls-15,.cls-7,.cls-8,.cls-9{stroke-width:0}.cls-8{fill:#5b2ac2}.cls-9{fill:#2e2c2d}.cls-10{fill:#1a1a1a}.cls-11{fill:#b0e2ee}.cls-12{fill:#b52d00}.cls-13{fill:#87654b}.cls-15{fill:#fff}</style></defs><path d="M101.1 152.7c-.9 6 .2 14.3 1.6 23.1-12.6 3.3-27.4 4.7-43.4.3 1-13.1 1.6-21.7-2.8-32h-.1c.5-1.6 1-3.1 1.5-4.6-4-2.7-8.4-4.6-13-5.8 2.7-16.7 8.1-15.5 22.6-21.1 2.9 8.9 12.5 9 15.5 7.5 3.4-1.7 3.7-6.9 3.7-8 19 3.2 18.8 9.4 23.1 26.9-3.3.7-4.6.6-7.2 2.6h-.2c-.2 2.5-.6 5.8-1.3 11.1m3.2 32.3c.3 1.6.6 3.2.8 4.6-15.5 6.1-32.3 4.8-48.2 0 .4-.8.8-2.4 1.2-4.3 17.1 4.3 32.1 4.3 46.2-.3" style="stroke-width:0;fill:#ffcf66"/><path d="M102.6 175.8c.5 3.2 1.1 6.4 1.6 9.3-14.1 4.6-29.1 4.6-46.2.3.5-2.6.9-5.9 1.2-9.2 16 4.4 30.7 3 43.4-.3Z" class="cls-15"/><path d="M58.3 99.4c-2.9 1.2-6-1.6-6.9-3.9 1.4-.9.6-3.9-1.2-3.6 1.3-.5 1.4-2.7.3-3.5.4-4.6 1-11.9 1.8-14.3.1 3.4.3 6.8.6 10.4-1.1 1.1-.5 3.5 1.1 3.7-2.1.3-2.1 4 0 4.3.7 3.1 3.1 3.7 2.2-.2 1.9-.5 1.2-4.4-.8-4.2 2.1 0 2.6-3.5.6-4.2.2-4.3.5-17 2.6-22 9.1-17.7 26.9-13.4 34.8 1.6.2.4 1.3 4.2 1.3 5.8 0 5.8 2.6 6.4 3.8 15.7 2.2 12.9-9.9 14.7-11.9 27 0 1.2-.3 6.3-3.7 8-3 1.5-12.6 1.4-15.5-7.5-1.5-4.6-1.8-7.5-9.1-13.2Zm31.9-22.9c1.7-.5-.8-7-2.4-6.2-1.7.5.8 6.9 2.4 6.2m-8.3-9.7c3-1.6 5.4-2 8.3-1.2.2-3.5-11.9-4.2-8.3 1.2M71.2 80.9c2-.7-.8-7.7-2.7-6.9-2 .7.8 7.7 2.7 6.9m.2-11.2c.5-3.3-4.8-3.4-7-1.9-.9.6-3.8 4-2.8 6.2 1 1 2-5 9.9-4.3Z" class="cls-13"/><path d="M52.3 74c-.8 2.4-1.4 9.7-1.8 14.3-1-.7-2.8 0-3.6.7-.8-4.5-1.1-7.2-1-12-.5 4.5-.4 7.3-.2 11.3-.9-1.1-3.1-.2-4 .6-1.2-9.3-2.8-10.6-1.4-24.1 3.1-16.2 24.3-22.7 37.2-20.9C88 45.4 95.6 61.2 94.8 69.3c-.4-11.3-13-19.9-22-19.1C57.3 53.5 56.1 70 56.1 83.8c-.9-.2-2.4-.3-3.1.5-.3-3.6-.5-7.1-.6-10.4Z" class="cls-9"/><path d="M90.2 72.9c1.6 4-1 5-2.5 1-1.6-4 1-5 2.5-1" class="cls-7"/><path d="M90.2 65.6c-2.9-.8-5.3-.4-8.3 1.2-3.6-5.4 8.6-4.7 8.3-1.2" class="cls-10"/><path d="M71.3 76.9c1.8 4.4-1.3 5.6-3 1.2-1.8-4.4 1.3-5.6 3-1.2" class="cls-7"/><path d="M70.6 67.7c.4.3 1.2 1.4.7 2-7.8-.7-8.9 5.3-9.9 4.3-1-5.2 5.4-8.8 9.1-6.3Z" class="cls-10"/><path d="M57.4 90.2c.3 3-5 3.1-4.9.2-.2-3 4.9-3.2 4.9-.2" class="cls-15"/><path d="M57.3 85.9c.1 2.9-4.9 3.2-4.9.2-.2-2.9 4.9-3.2 4.9-.2" class="cls-11"/><path d="M56.5 94.1c.1 1-1.4 1-1.8 0-.3-.8-.5-1-.6-1.8.5 0 1.7-.1 2.2-.2 0 1 0 .9.2 1.9Z" class="cls-9"/><path d="M48.6 96.2c-1.6-.3-1.8-3.2-.3-3.8.3 0 1.6-.4 1.9-.6 1.8-.3 2.5 2.7 1.2 3.6-.7.3-2 .8-2.7.7Z" class="cls-15"/><path d="M51.6 96.9c-.2 2.7-2.8 1.4-2.9-.7.7.1 2.1-.4 2.7-.7 0 .7.2.7.2 1.4" class="cls-9"/><path d="M46.8 89c.8-.7 2.7-1.4 3.6-.7 1.1.8 1 3-.3 3.5-.3 0-1.6.4-1.9.6-1.6.3-2.5-2.3-1.5-3.4Z" class="cls-11"/><path d="M50.4 171c.1.3.3.6.4.9-.2-.1-.3-.2-.5-.3 0-.2 0-.4.1-.7Z" style="stroke-width:0;fill:#926350"/><path d="M45 100.2c-2 .4-2.8-3.1-1-3.9.3 0 1.7-.5 2-.6 1.8-.3 2.6 2.6 1.3 3.6-.4.4-1.8.7-2.3.8Z" class="cls-11"/><path d="M47.4 99.4c.6 2.9-1.5 3.2-2.3.8.5-.2 1.9-.4 2.3-.8" class="cls-9"/><path d="M47.1 93.5c.2.9-.2 1.9-1 2.2-.3 0-1.7.5-2 .6-2.1.3-2.6-3.5-.7-4 1.4-.6 3.4-.9 3.6 1.1Z" class="cls-15"/><path d="M141.9 142.1c-4.3-1.5-9.7.2-13.2 3-2.6-1.1-6.8.9-7.1 3.7-2.3-.8-5.4-.7-8.2 0-1.6-2.8-2.7-6.2-3.7-9.8-3.3.7-4.6.6-7.2 2.6h-.2c-.2 2.5-.6 5.8-1.3 11.1 1.4 3.2 2.9 5.4 4.4 8.6 2.4 9.3 10.2 4.3 16 1.9-1.3 5.3 7.5 4.6 5.3-.8 1-.3 1.9-1 2.4-2 2.1 1.7 5.9 1.8 6.3-1.5 1.2-.1 2.6.6 3.6-.3 1.6-2.5 4.1-8.9-1.5-6.4-2.3.5-4.9-1.1-3.3-3.5 1.8-2.7 6.6-3.6 7.7-6.5ZM50.4 171c.4-9.5 3.6-19.8 7.4-31.5-4-2.7-8.4-4.6-13-5.8-.2 1.4-7.7 30.1-6.9 30.8-7.1.8-16.1 12.2-2.2 6.5 2.7 2.5-.9 12.8 6.3 8.3 1 2.4 4.3 2 6 .5 5.5 4.8 12.9-5.1 6.6-6.2-1.5.5-1.6 3.9-3.7 2.9.7-1.5 1.4-4.1-.5-4.9 0-.2 0-.4.1-.7Z" class="cls-13"/><path d="M41.6 88.9c.8-.8 3-1.7 4-.6.9 1 .7 3.1-.7 3.4-2.4 1.2-4.6-.2-3.3-2.8" class="cls-11"/><path d="M93.4 63.5c.2.4 1.3 4.2 1.3 5.8 2.6 14.3 9.7 20.9-5.9 35.9 0 0-2.2 4.1-2.2 6.8s-.3 6.3-3.7 8c-3 1.5-12.6 1.4-15.5-7.5-1.5-4.6-1.8-7.5-9.1-13.2" class="cls-3"/><path d="M81.9 66.8c-3.6-5.4 8.6-4.7 8.3-1.2-2.9-.8-5.3-.4-8.3 1.2m-10.6 2.9c.5-3.3-4.8-3.4-7-1.9-.9.6-3.8 4-2.8 6.2 1 1 2-5 9.9-4.3Zm16.4 4.2c1.6 4 4.1 3 2.5-1-1.5-4-4.1-3-2.5 1m-19.4 4.2c1.7 4.5 4.8 3.3 3-1.2-1.7-4.4-4.8-3.3-3 1.2m7.3 12.2c4.9 1.7 10.1.6 14.6-2.8m-38.8 7.9c.6 3.2 8.2 6.9 8.3 1.5m22.5-13.6c.8-2.7 4.5-5.4 6.5-2.2" class="cls-1"/><path d="M93.4 63.5c-7.9-15-25.7-19.3-34.8-1.6" class="cls-1"/><path d="M57.8 139.5c.7-2.1 1.4-4.1 2.1-5.9m-9.1 32c.7-5.1 4.1-17.9 7-26.1m9.6-26.9-14.2 5.3c-7.2 4-6.5 9.9-8.4 15.8l-6.8 28M86.6 112c25.1 3.3 17.7 18.6 26.9 36.7m-8.1 12.6c2.4 9.3 10.2 4.3 16 1.9" class="cls-3"/><path d="M121.6 148.8c-7.2-2.5-20.8 3.3-16.2 12.5m-55 9.7c.4-2.3.2-4.3.4-5.4M38 161.8c-.2 1-.2 1.9-.2 2.8" class="cls-3"/><path d="M105.1 189.6c-15.5 6.1-32.3 4.8-48.2 0 3.6-14.4 5-32.8-.4-45.5" class="cls-2"/><path d="M101.1 152.7c-1.4 9.6 2.1 25.9 4 37" class="cls-2"/><path d="M101.8 132.7c1.2 8 .3 10.5-.8 19.9" class="cls-3"/><path d="M40.2 64.8c3.1-16.2 24.3-22.7 37.2-20.9 10.5 1.5 18.1 17.3 17.3 25.4" class="cls-1"/><path d="M101 152.7c1.4 3.2 2.9 5.4 4.4 8.6m16.3-10.8c-1-3.7 3.8-6.7 7-5.4 3.5-2.8 8.8-4.5 13.2-3-1 2.9-5.9 3.8-7.7 6.5-1.6 2.4 1 4 3.3 3.4m-8.1 3.4c1.5 2.4 3.2-1.9 5-1.2 3.3 3.9-.4 10.2-5.5 6.1" class="cls-3"/><path d="M121.6 149c-5.5 1.2-6.1 13.3 0 13.7m13.5-8.1c.8-2 4.3-4.5 6-2.2.3 2-1.2 4.3-2 6.1-1 .9-2.4.2-3.6.3" class="cls-3"/><path d="M123.8 158.6c-2.4.9-3 5.1-2 7.2 1 1 3.2 1 4.4.3 2.1-1.7 0-7.8-2.3-7.6Z" class="cls-3"/><path d="M126.8 162.3c1.1-.3 2-1.1 2.4-2.1M50.9 172c-1.1-4.4-4.3-5.3-8.1-6.3-7-5.9-24 12.1-7 5.4 2.6 2.2-.5 7.6 3 9.2 3.7.7 6.6-4.2 7.9-7.1.1-4.5-5.3-1.1-6.7.9" class="cls-3"/><path d="M42 179.1c2 4.3 7.6.5 8.9-2.6 2.3-3.8-1.2-7-4.3-3.4" class="cls-3"/><path d="M47.7 179.6c5.6 5.3 13.3-4.8 6.8-5.9-1.5.5-1.6 3.9-3.7 2.9M45 133.8c4.7 1.2 9.1 3.2 13.1 5.9m51.1-.6c-3.3.6-4.1.6-6.6 2.5m-44.5 43.7c17.1 4.3 32.1 4.3 46.2-.3" class="cls-3"/><path d="M56 83.9c.2-4.3.5-17 2.6-22m-4.5 30.5c.7 3.1 3.1 3.7 2.2-.2m-3.4-31.5c-1.1 8.2-.6 15.5 0 23.7" class="cls-1"/><path d="M50.5 88.4c.4-4.6 1-11.9 1.8-14.4m-3.7 22.2c.6 3.5 3.8 2.6 2.7-.7m-4.2-28.7c-1.8 7.6-1.7 14.9-.3 22.3" class="cls-1"/><path d="M45.6 88.4c-.2-4.1-.3-6.8.2-11.4m-.8 23.2s0 0 0 0c.8 2.4 2.9 2.1 2.3-.8m-7.1-34.6c-1.4 13.5.2 14.9 1.4 24.2" class="cls-1"/><path d="M46 95.8c1.8-.3 2.6 2.6 1.3 3.6-1.3.8-3.7 1.6-4.2-.6-.7-2 1.4-2.8 2.9-3.1" class="cls-1"/><path d="M46 95.8c-.3.1-1.7.5-2 .6-2.1.3-2.6-3.5-.7-4l1.6-.5c2.1-.6 3 3.1 1.1 3.8q0 0 0 0Z" class="cls-1"/><path d="M45.6 88.3c1.6 2-.2 3.7-2.2 3.9-1.7.5-2.8-2.1-1.8-3.3.8-.8 3-1.7 4-.6m4.6 3.5c2.1-.3 2.6 3.4.7 3.9-.5.1-1.7.6-2.2.5-1.6-.3-1.8-3.2-.3-3.8m-.1 0c.3-.1 1.6-.5 1.9-.6" class="cls-1"/><path d="M50.2 91.8c-.3.1-1.6.5-1.9.6-1.6.3-2.5-2.3-1.5-3.4.8-.7 2.7-1.4 3.6-.7 1.1.8 1 3-.3 3.5Zm5.2-3.7c2.1-.2 2.8 3.6.8 4.2-.5 0-1.7.2-2.2.2-2.8-.7-1.6-5.1 1.2-4.3" class="cls-1"/><path d="M55.4 88.1c-3.1 1-4.4-3.8-1.2-4.3 3.1-.9 4.4 3.8 1.2 4.3" class="cls-1"/><path d="M59.1 176.1c15.8 4.3 30.7 3.1 43.1-.2" class="cls-3"/><path d="m112.82 45.408 17.79-15.961 15.96 17.789-17.789 15.961z" class="cls-12"/><path d="m113.786 108.421 21.445-10.552 10.552 21.445-21.445 10.552z" class="cls-8"/><path d="m95.8 7.1-4.1 23.5-23.5-4.1L72.3 3z" style="fill:#00a553;stroke-width:0"/><path d="M44.1 25.3 29.6 44.2l-19-14.5 14.6-19z" class="cls-12"/><path d="m26.5 78.5 6 23.1-23.2 6-5.9-23.1z" class="cls-8"/><path d="m68.2 26.5 23.5 4.1 4.1-23.5L72.3 3zm45.586 81.721 21.445-10.552 10.552 21.445-21.445 10.552zM32.5 101.6l-23.2 6-5.9-23.1 23.1-6zm-2.9-57.4-19-14.5 14.6-19 18.9 14.6zm83.312 1.301 17.817-15.93 15.93 17.817-17.816 15.93z" style="fill:none;stroke-miterlimit:10;stroke:#fff"/><path d="M43.1 148.3h20.8v20.8H43.1z" style="stroke-miterlimit:10;stroke:#fff;fill:#00a553" transform="rotate(-79.7 53.407 158.614)"/></svg>')}`;
export default image;