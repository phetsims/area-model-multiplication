/* eslint-disable */
import asyncLoader from '../../../phet-core/js/asyncLoader.js';

const image = new Image();
const unlock = asyncLoader.createLock( image );
image.onload = unlock;
image.src = `data:image/svg+xml;base64,${btoa('<svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" width="150" height="196" viewBox="0 0 150 196"><defs><style>.cls-1{stroke-linejoin:round;stroke-linecap:round}.cls-1,.cls-3{stroke:#000}.cls-1,.cls-3,.cls-4{fill:none}.cls-3,.cls-4{stroke-miterlimit:10}.cls-4{stroke:#fff}.cls-11,.cls-12,.cls-7{stroke-width:0}.cls-11{fill:#c1272d}.cls-12{fill:#a76541}</style></defs><path d="M42.5 146.9c-.3 1.2-.6 2.5-1.9 2.9l-10.9-2c-1.4-1-2.7-2.6-4.1-4.1 6.1-26.7-.5-24.1 26.6-32 4 9.2 20.5 9.9 19.7-.2 3.8.6 14.4 2.5 16.1 5 2.8 3.9 8 18.7 10.4 27.7-4.1 2.3-6.2 3.4-10 3.4.5 15.4 2.7 28.8 2.8 43.7-14.7 5.8-32 6-47.1 1.4 3.6-10.9-1.7-29.2 1.9-42h-.2l-2.2-.4c-.3-1.6-.7-2.8-1.1-3.5Zm37.2-2.8c.5-3 .2-6.3 1.9-8.7-6.8 1.7-14.1-2.2-19.1 5.5-2.3 0-3.9 2.7-3.3 5.1-5.1-3.6-7.2 5.5-2.1 6.5-3.5 6.2 4.9 8.6 7.7 1.9 1.5 1.5 6.3 2.3 6-1.4 4.5.3 8.3-4.5 8.9-8.9" style="stroke-width:0;fill:#eebede"/><path d="M80.7 74.3c9 26.4-6.7 19.3-8.7 37.3.6 9.8-14.3 9.3-19.5.9-1.1-4.1-3.4-9.3-9.5-13.8-4.2 1.5-9-6.2-8.5-9.8 1.6-4.8 8.8 3.5 6.7-3.6-2.3-5.3-3.8-6-.8-9.6.7-1.5-1-3.5 0-4.9 1.7-2.3 5.3.2 7.5-.7 2.1-.9 1.3-4.6 3.6-5 1.3-.2 3.8 1.2 5.2.8 3.2-.9 1.1-6.8 4.8-7.2 10.9 4.9 11.3-6.4 14.9 3.6 1.2 5.4 2.4 7.7 4.4 12Zm-6.5 2c1.6-.5-.8-6.6-2.3-5.9-1.6.5.8 6.6 2.3 5.9m-18.4 5.8c1.9-.6-.8-7.3-2.6-6.5-1.9.6.8 7.3 2.6 6.5" class="cls-12"/><path d="M38.1 87.4c-7-1.3-2.4 7.6.4 9.8-3.3 2.4-6.2-4.1-9.1-5.8-1.8-.9-3.2-.2-4.9-1.3-2.3-1.8-1.1-5.5-2.5-8-.7-2.6-2.5-3.6-2-6.3 1.2-4 3.8-7.3 1.2-11.3-.5-5.7 5-4 7.1-7.9 1.3-2.7 2.7-3.2 5.3-5 1.9-1.3 2.3-5.9 4.5-6.7 2.8-1.1 5.3-.5 8.2-.5 1.7 0 3.7-2.6 6.3-3s3.9 1.5 6.5.5c8.1-3.1 7.6.6 12 5.3 5.8 1.6 4.8 1.3 6.2 6.9 1.1 1.7 3.1 1.6 4.4 5 1 2.5-2.5 4.6-.2 6.3 1 .7 2.1 3.3.7 4.9-.6.8-.2 3.5-1.3 3.9-2.1-4.3-3.3-6.6-4.4-12-3.6-10-4 1.3-14.9-3.6-3.6.4-1.5 6.3-4.8 7.2-1.3.3-3.8-1.1-5.2-.8-3.5 1.7-.8 6.9-7.5 4.8-5.5-.8-3.2 2.6-3.5 5.8-.5 1.2-1.3 1.8-1.8 3-.9.7 7.4 13.3-.4 8.8Z" style="stroke-width:0;fill:#d7ad75"/><path d="M81.7 135.4c-2.8 6-1.1 17.6-10.8 17.6 0-1.1-.6-2.3-1.5-2.7 5.3-2.7 1.7-9.4-3.2-5.4-.2-2-1.9-3.8-3.6-3.9v-.1c5-7.7 12.3-3.8 19.1-5.5" style="stroke-width:0;fill:#6bc297"/><path d="M74.2 72.8c1.5 3.8-.9 4.8-2.4.9-1.5-3.8.9-4.8 2.4-.9" class="cls-7"/><path d="M70.9 153c.3 3.7-4.6 2.9-6 1.4-2.8 6.8-11.1 4.2-7.7-1.9-5-1-2.9-10.2 2.1-6.5-1.3-5.7 6.3-6.7 6.8-1.1 5-4 8.6 2.6 3.2 5.4.9.4 1.5 1.6 1.5 2.7Z" style="stroke-width:0;fill:#f3eccf"/><path d="M55.9 78.3c1.7 4.2-1.2 5.3-2.8 1.1-1.7-4.2 1.2-5.3 2.8-1.1" class="cls-7"/><path d="m46.1 150.9-1.5 8.3c-.3-.5 1.2-7.7 1.3-8.3z" class="cls-11"/><path d="m44.6 159.2-1.6 8.7h-.2l1.8-9.8v1Z" class="cls-11"/><path d="M41.2 149.7v.2h-.4c.2-.1.3-.2.5-.2Z" style="stroke-width:0;fill:#8b7461"/><path d="M37 167.5h-.1z" style="stroke-width:0;fill:#b2784d"/><path d="M43.7 150.4c-3.2-.6-12.3-2.3-15.6-2.9-.2.9-3.2 17.5-3.3 17.8 2 .4 10.2 1.9 12.2 2.2 1.3.3 4.3.8 5.6 1 .8-4.5 2.4-13.3 3.3-17.8l-2.2-.4Z" style="stroke-width:0;fill:#3246ff"/><path d="M105.5 161.7c-1.7 5.3 7 5 5-.4.9-.3 1.8-1 2.2-1.8 2 1.6 5.6 1.7 6-1.4 1.1-.1 2.5.6 3.4-.3 1.5-2.3 3.9-8.5-1.4-6.1-2.2.5-4.6-1-3.1-3.3 1.7-2.6 6.3-3.4 7.3-6.1-4.1-1.4-9.1.2-12.5 2.9-2.4-1-6.1.7-6.7 3.1-.1-.7-.2-1.4-.6-2-1.8-.8-4.1-1.1-6.2-.8 0-.4-.2-.8-.3-1.1-4.1 2.3-6.2 3.4-10 3.4.3 4.4.5 8.5.8 12.3 2.3 5.5 9.7 2.3 13.4.2q1.1-.4 0 0c.7.9 1.7 1.5 2.8 1.6m-62 10.7c-2.5-2.5-2.8 3.5-5.1 2.2.6-1.3 1.2-3.3 0-4.3-.4-1-.8-2-1.5-2.9h-.1c-1.9-.4-10.1-1.9-12-2.2l.2-1s0-.1-.1-.2c0 0 0 .1.1.2v-.6h.1l3-16.1 1.7.3c-.8-.6-1.5-1.3-2.3-2.2-.3 2.8-4.2 15.5-2.7 18.1-6.6 2.2-12.6 10.8-.6 5.8 2.5 2.3-.9 12.1 6 7.9.9 2.3 4 1.9 5.7.5 3.5 3.2 10.5-.9 7.8-5.4Zm-18.7-8.9h-.2z" class="cls-12"/><path d="M52.5 112.5c-1.1-4.2-3.3-8.9-9.3-13.7M72 111.6c.6 9.8-14.3 9.3-19.5.9" class="cls-3"/><path d="M76.2 62.3c3.9 13.9 14.5 28.6-1.7 40.1 0 0-2.6 6.7-2.5 9.2" class="cls-3"/><path d="M71.8 73.8c1.5 3.8 3.9 2.9 2.4-.9s-3.9-2.9-2.4.9M53 79.4c1.6 4.2 4.5 3.1 2.8-1.1-1.6-4.2-4.5-3.1-2.8 1.1" class="cls-1"/><path d="M38.9 87.8c-7.7-3.1-3.7 6.9-.4 9.4 1.5 2.4 6.4 2.3 5.3-1.3" class="cls-3"/><path d="M66.1 85.6c2.9-4.6 6-4.3 6.3-1.1" class="cls-1"/><path d="M45.7 72.2c1.5-1.9 4.2-3.8 6.9-4.1" class="cls-3"/><path d="M40.7 149.8c3.8-3.6 1.3-5.6 2.9-13.8m8.9-24.3c-27.3 7.9-20.8 5.3-26.8 32 1.4 1.5 2.7 3.1 4.1 4.1M72 111.6c3.8.6 14.4 2.5 16.1 5 3 4.2 8.3 19.7 10.7 28.8" class="cls-1"/><path d="M43.7 150.4c-.3-1.6-.7-2.8-1.1-3.5m48.7 44.5c-14.7 5.8-32 6-47.1 1.4 2.6-8.4.6-22.7.4-33.7m41.9-30c2.6 21.1 3.9 41.5 4.8 62.2m-50.2-41.4v-.2m-13.7-4c-.3 2.8-4.2 15.5-2.7 18.1m68.2-.9c3.3.9 7-1.5 9.8-2.7m2.9-12c-.1-.7-.2-1.4-.6-2-6.7-3.5-14 2.4-14.3 9.1-.3 1.8-1 6.5 1.8 7.4" class="cls-1"/><path d="M92.9 162.9c-2.1-.7-2.9-1-3.6-2.9m-.8-12.3c3.8 0 5.9-1.1 10-3.4" class="cls-1"/><path d="M105.7 150.2c-1-3.5 3.6-6.3 6.7-5.1 3.3-2.7 8.4-4.3 12.5-2.9-1 2.7-5.6 3.6-7.3 6.1-1.5 2.2.9 3.8 3.1 3.3m-7.7 3.2c1.4 2.3 3-1.8 4.7-1.1 3.1 3.7-.3 9.7-5.2 5.8" class="cls-3"/><path d="M105.6 148.8c-5.2 1.1-5.8 12.6 0 13m12.8-7.7c.8-1.9 4.1-4.3 5.7-2.1.3 1.9-1.1 4.1-1.9 5.8-.9.9-2.3.2-3.4.3" class="cls-3"/><path d="M106.7 158.4c-1.2 1.6-1.8 4.5-1 6.3 1.3 1.2 4.6 1.2 4.9-1 .4-2-1.5-7.6-4-5.3Z" class="cls-3"/><path d="M110.5 161.4c1-.3 1.8-1.1 2.3-2m-87.6 4.2c-6.6 1.8-13.4 11-1 5.9 2.4 2.1-.4 7.2 2.8 8.7 3.5.7 6.2-3.9 7.5-6.6.3-4.4-5-1.2-6.3.7m10.3-1.8c-.4-1-.8-2.1-1.5-3" class="cls-3"/><path d="M30.1 177.3c1.9 4.1 7.2.4 8.4-2.5 2.3-3.9-1.4-6.6-4.2-2.9" class="cls-3"/><path d="M35.6 177.8c5.2 5 12.6-4.5 6.5-5.6-1.4.5-1.5 3.7-3.5 2.7" class="cls-3"/><path d="M65.4 64.4c2.2-2.2 5.2-2.6 7.6-2.1" class="cls-1"/><path d="M60.3 91.4c3.8 1 8 .5 11.5-1.2" style="stroke-linecap:round;stroke:#000;fill:none;stroke-miterlimit:10"/><path d="M42.7 167.9h.2c.8-4.2 2.4-12.7 3.1-17h-.2m-8.9 16.6h.1" class="cls-4"/><path d="m40.4 168.2 2.2.4c.8-4.5 2.4-13.3 3.3-17.8-4.4-.8-13.3-2.4-17.8-3.3-.2.9-3.2 17.5-3.3 17.8.2 0 10 1.8 10.6 1.9" class="cls-4"/><path d="M26.7 165.6c1.2.2 9.4 1.7 10.3 1.9s3.4.6 3.4.6" class="cls-4"/><path d="M37.9 87.3c8 4.9 0-7.8.6-8.6 3.4-4.5 1-3.8 1.7-7.9 1.7-2.3 5.3.2 7.5-.7 2.1-.9 1.3-4.6 3.6-5 3.5.4 7 2.5 7.3-2.9.6-6.6 6.6-.8 10.4-2.3 4.3-2.6 5.3-2.7 7.1 2.5" class="cls-1"/><path d="M38.7 97.1c-3.3 2.7-6.3-4-9.2-5.7-1.8-.9-3.2-.2-4.9-1.3-2.3-1.8-1.1-5.5-2.5-8-.7-2.6-2.5-3.6-2-6.3 1.2-4 3.8-7.3 1.2-11.3-.5-5.7 5-4 7.1-7.9 1.3-2.7 2.7-3.2 5.3-5 1.9-1.3 2.3-5.9 4.5-6.7 2.8-1.1 5.3-.5 8.2-.5 1.7 0 3.7-2.6 6.3-3s3.9 1.5 6.5.5c8.1-3.1 7.6.6 12 5.3 5.9 1.6 4.8 1.3 6.2 6.9 1.1 1.7 3.1 1.6 4.4 5 1 2.5-2.5 4.6-.2 6.3 1 .7 2.1 3.3.7 4.9-.7.8-.2 3.6-1.3 3.9M62.6 141c-2.3-.2-3.9 2.6-3.3 5-5.1-3.6-7.2 5.5-2.1 6.5-3.5 6.2 4.9 8.6 7.7 1.9 3.6 3.3 8.8-.3 4.5-4.1 5.3-2.7 1.7-9.4-3.2-5.4-.2-2-1.9-3.8-3.6-3.9" class="cls-1"/><path d="M62.6 140.9c5-7.7 12.3-3.8 19.1-5.5-2.8 6-1.1 17.6-10.8 17.6" class="cls-1"/><path d="M109.1 83.3h20.8v20.8h-20.8z" style="stroke-miterlimit:10;stroke:#fff;fill:#5b2ac2" transform="rotate(-26.2 119.36 93.46)"/><path d="M26.1 148.3h20.8v20.8H26.1z" style="stroke-miterlimit:10;fill:#00a553;stroke:#fff" transform="rotate(-79.7 36.403 158.65)"/></svg>')}`;
export default image;