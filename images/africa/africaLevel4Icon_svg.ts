/* eslint-disable */
/* @formatter:off */

import asyncLoader from '../../../phet-core/js/asyncLoader.js';

const image = new Image();
const unlock = asyncLoader.createLock( image );
image.onload = unlock;
image.src = `data:image/svg+xml;base64,${btoa('<svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" width="150" height="196" viewBox="0 0 150 196"><defs><style>.cls-1,.cls-3{stroke:#000;fill:none}.cls-1{stroke-linejoin:round;stroke-linecap:round}.cls-3{stroke-miterlimit:10}.cls-10,.cls-6{stroke-width:0}.cls-10{fill:#8c6649}</style></defs><path d="M45.3 81.4c.7-2.1 3.3-2.3 5-1.1-3.7-10-4.8-16.7-2.3-24.3.4-1.2 6.9-2.2 8.2-2.2 3.6-.2 4.2.7 14.9-2.7 7.8-2.5 11.1-6.8 12.7-5.8 7.1 5.2 8.3 8.8 9.4 17.9.6 7.5 3.5 5.1 4.8 16.2 1.3 11.4-5.5 16.9-10.1 20.4-.9.6-2.7 3.2-2.5 4.9-1.2 5.3-18.7 5.8-20.6.8-1.1-6.1-2.8-7.8-10-13.3-4.7 1.7-9.9-6.8-9.4-10.8ZM88 68.2c1.8-.6-.9-7.3-2.5-6.5-1.7.6.9 7.3 2.5 6.5M80.9 88c6.8-1.2 7-5.9 6.8-6.2-.3-.3-10.4 4.1-14.8 2.7 2 2.3 5 4.1 8 3.5M67.7 74.6c2.1-.7-.9-8.1-2.8-7.2-2.1.7.9 8.1 2.8 7.2" class="cls-10"/><path d="M89.6 50.8c.1.2.8 1.1 1.6 3.1-8.6-13.2-5.7-8.4-20.1-2.8-14.5 5.2-13.7.3-23.2 4.9-2.5 7.6-1.4 14.2 2.3 24.3-1.6-1.2-4.2-1-5 1.1-20.6-36 27.5-57.2 44.4-30.6" style="stroke-width:0;fill:#231c19"/><path d="M88 64.5c1.7 4.2-1 5.3-2.6 1-1.7-4.2 1-5.3 2.6-1" class="cls-6"/><path d="M106.3 177.3c-3.2-20.4.4-47.2-9.6-65.7-2.2 0-4.5 0-6.7.1-3 8-23.1 8.9-28.9 2.2-2.8.9-5.6 1.8-8.3 2.9 4.1 8.5 1.4 19.3.2 28.8 3.2 9.9 5 36 1.9 46 8.4 2.5 17.5 4.1 26.5 4.3 2.3 0 5.8-7.2 8.1-7.4 8.5 8.7 1.9 9.8 17.5 3.1.1-6.8-.2-9.6-.7-14.2ZM80.8 88.1c6.8-1.2 7-5.9 6.8-6.2-.3-.3-10.4 4.1-14.8 2.7 2 2.3 5 4.1 8 3.5" style="stroke-width:0;fill:#fff"/><path d="M67.8 70.5c1.9 4.6-1.3 5.9-3.1 1.2-1.9-4.6 1.3-5.9 3.1-1.2" class="cls-6"/><path d="M120 158.6c-1.5-3.1-1.1-10 2.9-11.6 0-.4-.2-.8-.5-1.2-2-.9-4.6-1.3-6.9-.9-2.3-9.8-5.2-26.4-8.4-31-1.9-2.7-12.2-5-16.8-5.7 0-2.3-.5-6.6-3.5-6.7h-.2c-.6.8-1.3 2-1.2 3.4.1 2.1-4.8 3.8-8.5 4.2-6.7.2-12.6-.3-13-7.1-4.7 1.4-4.1 4.4-4 7.4l-12.8 3.3c-11.7 4.4-10.8 40.9-13.7 50.7l.3.3c2.5-.9 5.4-.9 7.6.5 3.9 1.1 7.4 2 8.5 6.6-.3-11.5 9.4-40.2 3.2-54 2.7-1.2 5.5-2 8.3-2.9 5.8 6.7 25.9 5.9 28.9-2.2 2.2 0 4.5 0 6.7-.1 7.9 13.2 6.8 34.2 8.3 49.4 3.1 7 12 1.4 16.7-.5-.7-.4-1.3-1.1-1.7-1.8Z" style="stroke-width:0;fill:#383838"/><path d="M144.9 139.5c-4.5-1.6-10.1.2-13.8 3.2-2.8-1.2-7.3 1-7.4 4.1-5.8 1.4-6.3 13.5-.1 14.3-1.8 5.9 7.7 5.6 5.5-.4 1.1-.3 2-1.1 2.5-2 2.2 1.8 6.2 1.9 6.6-1.6 1.2-.1 2.8.6 3.8-.4 1.6-2.6 4.3-9.3-1.6-6.7-2.4.5-5.1-1.2-3.5-3.7 1.9-2.8 6.9-3.8 8-6.8m-89.6 33.6c-2.8-2.8-3.1 3.8-5.6 2.4.6-1.4 1.3-3.6 0-4.8-1.1-4.6-4.5-5.5-8.5-6.6-7.3-6.2-25.1 12.7-7.4 5.6 2.8 2.6-1 13.4 6.6 8.7 1.1 2.5 4.4 2.1 6.2.5 3.8 3.6 11.6-1 8.6-5.9Z" class="cls-10"/><path d="M45.3 81.5C21 38.9 89.8 20.7 93.1 63.2c.6 7.5 3.5 5.1 4.8 16.2 1.2 12.9-6.3 16.6-11.4 21.8-.6.9-1.3 2.1-1.2 3.5-1.2 5.3-18.7 5.8-20.6.8-1.1-6.2-2.7-7.4-9.8-13.3" class="cls-3"/><path d="M85.4 65.5c1.6 4.2 4.3 3.2 2.6-1-1.6-4.2-4.3-3.2-2.6 1m-20.8 6.2c1.8 4.7 5 3.4 3.1-1.2-1.8-4.7-5-3.4-3.1 1.2" class="cls-1"/><path d="M72.8 84.5c4.8 7 15.9 2 14.8-2.7-.3-.3-10.4 4.1-14.8 2.7Z" class="cls-3"/><path d="M50.2 80.3c-8.5-3.4-4.2 7.3-.7 10.1 1.6 2.8 7.3 3.1 6.1-1.2m21.2-10.1c1.3-3.3 7.1-6.8 9.3-2.5" class="cls-1"/><path d="M91.2 53.9c-8.6-13.2-5.7-8.4-20.1-2.8-14.5 5.2-13.7.3-23.2 4.9-2.5 7.6-1.4 14.2 2.3 24.3m-.6 90.5c0-5.2 3.8-26.5 5-36.2m5.2-25.3L47 112.6c-11.7 4.4-10.8 40.9-13.7 50.7l.3.3m56.6-55.4c4.6.7 14.9 3 16.8 5.7 3.3 4.5 5.9 20.9 8.4 30.7m-6.4 19.6c4.4 1.2 8.9-2.5 12.7-3.7" class="cls-3"/><path d="M122.9 147c0-.4-.2-.8-.5-1.2-7.4-3.9-15.5 2.7-15.8 10-.3 1.9-1.1 7.2 2 8.2" class="cls-3"/><path d="M109 164.2c-2.4-.8-3.2-1.1-4-3.2" class="cls-3"/><path d="M107 191.5c-15.7 6.7-9 5.6-17.5-3.1-2.3.2-5.8 7.4-8.1 7.4-9-.1-18.1-1.7-26.5-4.3 3.2-9.9 1.3-36-1.9-46m48.9-18.5c2.8 22.3 3.9 42 5.1 64.5" style="stroke-linecap:round;stroke:#000;fill:none;stroke-miterlimit:10"/><path d="M66.2 62.8c-3-1.6-8.3 1.6-8.2 3.7M80.1 59c3.8-3.8 7.9-1.3 8.8-.1m-42 53.7c9.8 3 8 13.6 7.7 22m42.1-23c-1-1.6-1.8-2.5-1.8-2.5m7 17.9c-.3-5.6-3.3-12.7-5.2-15.4m-33-9.7c-6 1.9-4.3 8.1-2.5 11.9 2.1 3.6 11.8 4.8 15.6 4.5 7.2-1 14.9-3.3 13.4-10.2 0-2.3-.5-6.6-3.5-6.7" class="cls-3"/><path d="M61.5 113.8c-2.9.9-5.7 1.8-8.5 2.9m36.9-5c2.3 0 4.6 0 6.8-.1m-16.3 5.8c6.7 23.2 10.2 46.8 9.1 70.9m-36.6-71.6 30.9 14.2" class="cls-3"/><path d="M96.8 111.6c0 .1-12.9 19.2-13 19.3m18.1-7.3-.4.4c-.2.2-15.3 17.6-15.5 17.8m-31.1-11.2L86 141.8m-32.6 1.9L88 156m15.6-15.6L88 156m-32.7.7L88.5 167m16-14.2-15.2 13.5-.8.7m-32.5-.9 33.7 12.5m15.3-13.4-15.3 13.4m-33.2-.3s33.1 7.6 33.1 7.7m16.7-8.7-16.6 8.6m34-37.6c-1.1-3.9 3.9-7 7.4-5.6 3.7-3 9.2-4.7 13.8-3.2-1.1 3-6.1 4-8 6.8-1.7 2.5 1 4.2 3.4 3.6m-8.5 3.6c1.5 2.5 3.4-2 5.2-1.3 3.4 4.1-.3 10.7-5.7 6.4" class="cls-3"/><path d="M123.6 146.8c-5.8 1.4-6.3 13.8 0 14.3m14.1-8.4c.8-2.1 4.5-4.7 6.2-2.3.3 2.1-1.2 4.5-2.1 6.4-1 1-2.5.2-3.7.4" class="cls-3"/><path d="M129 160.7c-2.1-8.4-7.4-.7-5.2 3.7 2.9 2.1 6.7.2 5.2-3.7Z" class="cls-3"/><path d="M129 160.7c1.1-.3 2.1-1.1 2.5-2.2m-81.9 12.3c-1.1-4.6-4.5-5.6-8.5-6.6-7.3-6.2-25.1 12.7-7.4 5.6 2.7 2.3-.5 8 3.1 9.7 3.8.8 6.8-4.3 8.3-7.3.4-4.9-5.5-1.4-7 .8" class="cls-3"/><path d="M49.6 175.6c.6-1.4 1.3-3.6 0-4.8-1.6-1.2-3.6.3-4.6 1.6" class="cls-3"/><path d="M40.3 178.3c2.1 4.5 8 .5 9.3-2.8" class="cls-3"/><path d="M46.3 178.8c5.9 5.6 13.8-5.1 7.2-6.2-1.6.5-1.7 4.1-3.8 3" class="cls-3"/><path d="M117 103.9h20.8v20.8H117z" style="stroke-width:0;fill:#00a553" transform="rotate(-26.2 127.191 114.308)"/><path d="M95.8 13.9h20.7v20.7H95.8z" style="stroke-width:0;fill:#0047fd" transform="rotate(-31 106.1 24.182)"/><path d="m37.3 38.3-11 17.6-17.6-11 11-17.6z" style="stroke-width:0;fill:#5b2ac2"/><path d="m91.976 20.674 17.743-10.661 10.661 17.743-17.743 10.661zm21.476 88.795 18.663-9.183 9.183 18.663-18.663 9.183zM37.3 38.3l-11 17.6-17.6-11 11-17.6z" style="fill:none;stroke-miterlimit:10;stroke:#fff"/><path d="M41.1 148.3h20.8v20.8H41.1z" style="stroke-miterlimit:10;fill:#b52d00;stroke:#fff" transform="rotate(-79.7 51.419 158.682)"/></svg>')}`;
export default image;