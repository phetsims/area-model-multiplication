/* eslint-disable */
import asyncLoader from '../../../phet-core/js/asyncLoader.js';

const image = new Image();
const unlock = asyncLoader.createLock( image );
image.onload = unlock;
image.src = `data:image/svg+xml;base64,${btoa('<svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" width="150" height="196" viewBox="0 0 150 196"><defs><style>.cls-1{stroke-linejoin:round}.cls-1,.cls-2{stroke-linecap:round}.cls-1,.cls-2,.cls-3{stroke:#000;fill:none}.cls-2,.cls-3{stroke-miterlimit:10}.cls-10,.cls-11,.cls-12,.cls-13,.cls-14,.cls-15,.cls-16,.cls-17,.cls-21,.cls-7,.cls-8,.cls-9{stroke-width:0}.cls-8{fill:#77533a}.cls-9{fill:#2d251c}.cls-10{fill:#5b2ac2}.cls-11{fill:#369a52}.cls-12{fill:#1a1a1a}.cls-13{fill:#126321}.cls-14{fill:#de8d1f}.cls-15{fill:#ad442d}.cls-16{fill:#cf713f}.cls-17{fill:#b52d00}.cls-21{fill:#f1ba0d}</style></defs><path d="M107.2 188.9c.2.9.3 1.7.4 2.4-3 .7-6.2 1.3-9.4 1.7 0-.9-.2-2-.3-3.2 4.1-.2 7.2-.5 9.3-1Z" class="cls-15"/><path d="M107.2 188.9c-2 .5-5.2.8-9.3 1-.1-1.4-.3-3-.5-4.7 3.4 0 6.4-.2 9-.2.3 1.3.6 2.6.8 3.9" class="cls-16"/><path d="M105.2 180q.6 2.7 1.2 5.1c-2.5 0-5.5 0-9 .2-.2-1.6-.4-3.3-.6-5 3.3-.2 6 0 8.4-.2Z" class="cls-15"/><path d="M105.2 180c-2.4.2-5.1 0-8.4.2-.2-1.3-.3-2.6-.5-3.9 2.7 0 5.4-.1 8-.2z" class="cls-16"/><path d="M103.1 171.3c.4 1.6.7 3.1 1.1 4.7-2.6 0-5.2.2-7.9.2-.2-1.7-.5-3.4-.7-5.1 2.8 0 5.3 0 7.5.2" class="cls-15"/><path d="M102.2 167.3c.3 1.3.6 2.7.9 4-2.2-.1-4.7-.2-7.5-.2-.2-1.5-.4-2.9-.6-4.3 3 0 5.4.2 7.3.4Z" class="cls-16"/><path d="M100.8 135.3c.6 3.7.7 5.6.7 7.4-.7-1-3.1-1.6-6.4-1.9 1.5-1.7 2.3-4 3.7-5.7.8 0 1.5.1 2.1.2Z" class="cls-21"/><path d="M101.4 162.9c.3 1.4.5 2.9.9 4.4-1.8-.3-4.3-.4-7.3-.4-.2-1.5-.5-2.9-.7-4.2 2.7 0 5.1.1 7.1.2" class="cls-15"/><path d="M101.5 142.7c0 1.6-.2 3.2-.5 5.9-.7-.4-1.7-.8-3-1.1-1.3-2.3-1.6-4.1-3.1-6.6l.1-.1c3.4.3 5.8 1 6.4 1.9Z" class="cls-9"/><path d="M100.9 159.6c.1 1.1.3 2.2.5 3.3-2-.1-4.4-.2-7.1-.2-.2-1.6-.6-3-.8-4.2 3 .2 5.5.6 7.4 1.1" class="cls-16"/><path d="M100.7 134.6c0 .2 0 .5.1.7-.6 0-1.4-.1-2.1-.2v-.1c-1.1-1.7-3.1-5-4.5-6.4 1.9 0 3.5.1 4.7.3.8 1.9 1.5 3.8 1.8 5.7" class="cls-11"/><path d="M101 148.7q-.15 1.95-.3 4.8c-1.7-.9-3.6-1.6-5.8-2.1 1.3-1.1 2.1-2.1 3.3-3.6 0 0-.1-.2-.2-.3 1.3.4 2.3.7 3 1.1Z" class="cls-21"/><path d="M94.8 151.4c2.2.5 4.1 1.2 5.8 2.1-.2 2 0 3.7.3 6.1-12.6-2.8-27.6-.9-40.4 2.3-.1-1.8-.5-4.4-1-6.9 11.2-3.6 24-5.9 35.3-3.6" class="cls-14"/><path d="M68.5 113.9c-1.5-4.2-3.4-8.9-10-14.1-7.4 3.1-17.9-15.6-5.1-12.3 1.7-4-.9-12.6 3.1-23 4-8.9 9-13.4 14-14 6.7-.1 19.6 6.7 22.6 14 1 1.6 1.1 8 2.4 9.8 7.6 9.2 6 20.8-6.9 31.4 0 0-2.1 4.3-2 7.9 1.1.2 2.2.5 3.2.6 1.1 12-25.5 12.3-25 0l3.8-.3Zm21.4-36.5c1.7-.5-.8-6.8-2.4-6.1-1.6.5.8 6.8 2.4 6.1m-3.2 16.4c2.5-1.3 3.5-4.5 3.2-7.3-4.4 3.3-11 5.3-15.8 3.6 2.8 3.6 8.3 5.8 12.6 3.7m2.6-29.5c1.2-1.3-10.3-.6-8.1 1.7 3.1-1.1 5.4-1.6 8.1-1.7M71.2 81.7c1.9-.6-.8-7.6-2.7-6.7-1.9.6.8 7.6 2.7 6.7M70.4 69c.7-2.7-4.1-1.4-6-.2-.9.6-4 3.4-3.5 4.8.7.5 2.6-3.8 9.5-4.6" class="cls-8"/><path d="M98.8 135v.1c-3.5-.3-8.3-.5-13.4-.5.8-2.2 2.3-3.9 3.5-5.9h5.5c1.5 1.4 3.4 4.7 4.5 6.4Z" class="cls-21"/><path d="M98 147.5s.1.2.2.3c-1.2 1.5-2 2.5-3.3 3.6-1.5-.3-3.2-.6-4.9-.7-1.3-1.4-2.7-3.3-4-4.7 4.9.2 9.2.8 12 1.5" class="cls-9"/><path d="M96.3 124.2c1 1.4 2 3 2.7 4.7-1.2-.2-2.9-.2-4.7-.3.2-1 1.4-3.4 2.1-4.4Z" class="cls-21"/><path d="M97.9 189.9c.1 1.2.2 2.3.3 3.2q-5.7.75-11.7.9v-3.7c4.3 0 8.2-.1 11.5-.3Z" class="cls-13"/><path d="M97.4 185.2c.2 1.7.4 3.3.5 4.7-3.3.2-7.2.3-11.5.3 0-1.5 0-3.1-.1-4.7 4.1-.1 7.8-.3 11.1-.3m-8.3-45.1c-1.3-1.8-2.5-3.6-3.8-5.4 5.1 0 9.9.2 13.4.5-1.3 1.6-2.2 4-3.7 5.7-1.8-.2-4-.3-6.3-.3 0-.1.2-.4.3-.5Z" class="cls-11"/><path d="M96.8 180.2c.2 1.7.4 3.4.6 5-3.3 0-7 .2-11.1.3 0-1.6-.1-3.2-.2-4.9 3.8-.2 7.5-.3 10.7-.4" class="cls-13"/><path d="M94.9 140.9c1.5 2.5 1.8 4.3 3.1 6.6-2.8-.8-7.1-1.4-12-1.5 1-2.2 1.6-3.5 2.8-5.5q3.45 0 6.3.3l-.1.1Z" class="cls-21"/><path d="M96.3 176.3c.2 1.3.3 2.6.5 3.9-3.2.1-6.9.3-10.7.4 0-1.4-.2-2.8-.3-4.2 3.6 0 7.1-.1 10.5-.2Z" class="cls-11"/><path d="M95.6 171.2c.2 1.7.5 3.4.7 5.1-3.4 0-6.9.1-10.5.2-.1-1.7-.2-3.4-.4-5 3.7-.2 7.1-.2 10.2-.2Z" class="cls-13"/><path d="M95.6 171.2c-3.1 0-6.5 0-10.2.2-.1-1.5-.3-2.9-.4-4.3 3.6-.2 7-.2 10-.2.2 1.4.4 2.8.6 4.3" class="cls-11"/><path d="M96.3 124.2c-.6 1-1.8 3.4-2.1 4.4h-5.5c-1-1-1.5-2.1-2.5-3 2.7-.9 5.5-2.6 6.6-5.3 1.2 1 2.3 2.3 3.4 3.8Z" class="cls-9"/><path d="M95 166.9c-2.9 0-6.3 0-10 .2-.2-1.5-.3-2.9-.5-4.3 3.5-.1 6.8-.1 9.8-.1.2 1.3.5 2.7.7 4.2" class="cls-13"/><path d="M94.3 162.7c-2.9 0-6.2 0-9.8.1-.2-1.6-.4-3.1-.6-4.4 3.5-.2 6.8-.1 9.6 0 .2 1.2.5 2.6.8 4.2Z" class="cls-11"/><path d="M92.9 120.4c-5.3 10.5-34.6 9.1-31.3-5.9l3.1-.3c-.5 12.2 26.1 11.9 25 0 .9.1 1.8.2 2.6.4 1.3 1.6 1.4 3.9.6 5.8" class="cls-14"/><path d="M89.9 73.8c1.6 4-1 5-2.5 1-1.6-3.9 1-4.9 2.5-1" class="cls-7"/><path d="M89.8 86.5c1.3 9.8-11.4 10.1-15.8 3.6 4.9 1.7 11.4-.3 15.8-3.6" style="stroke-width:0;fill:#fff"/><path d="M83.1 64.1c2.7-.7 6.4-.7 6.1.2-2.7 0-5 .5-8.1 1.7-.7-.6-.7-1.2 1.9-1.9Z" class="cls-12"/><path d="M85.2 134.7c1.3 1.8 2.6 3.6 3.8 5.4-.2 0-.2.3-.3.5-4.2 0-9 .2-13.6.5 1.7-3.1 2-4.4 3.3-6.3 2.3 0 4.6-.1 6.9 0Z" class="cls-21"/><path d="M75.1 141c4.6-.4 9.4-.6 13.6-.5-1.2 2-1.8 3.3-2.8 5.5h-6.6v-.1c-2.1-2.1-2.2-2.9-4.4-4.8v-.1Z" class="cls-11"/><path d="M88.7 128.7c-4.4.1-9.3.4-14 .7.3-1 .7-1.7 1.4-2.5 3.4.2 6.9 0 10.2-1.2.9.9 1.4 2 2.5 3ZM86 146c1.3 1.4 2.7 3.3 4 4.7-4.2-.4-9-.2-13.9.5q1.2-2.85 3.3-5.1 3.45-.15 6.6 0Z" class="cls-21"/><path d="M86.4 190.2v3.7c-6.2.1-12.7-.2-19.3-.9.2-.9.3-1.9.5-2.9 6.6.1 13.1.2 18.9.1Z" class="cls-15"/><path d="M86.3 185.6c0 1.6 0 3.2.1 4.7-5.8 0-12.2 0-18.9-.1.2-1.2.4-2.6.5-4 6.6-.2 12.7-.4 18.2-.6Z" class="cls-16"/><path d="M86.1 180.6c0 1.7.2 3.3.2 4.9-5.5.2-11.6.4-18.2.6.2-1.5.4-3.1.5-4.7 5.9-.2 11.9-.5 17.5-.8" class="cls-15"/><path d="M85.8 176.4c0 1.4.2 2.8.3 4.2-5.6.3-11.6.5-17.5.8.1-1.4.3-2.9.4-4.4 5.8-.4 11.4-.5 16.8-.6" class="cls-16"/><path d="M88.7 128.7c-1.1 2-2.7 3.7-3.5 5.9-2.2 0-4.6 0-6.9.1-1-2.1-2.5-3.2-3.7-5.2v-.1c4.7-.3 9.7-.6 14-.7Z" class="cls-9"/><path d="M85.4 171.4c.1 1.7.3 3.4.4 5-5.4.1-11.1.3-16.8.6.1-1.5.3-3.1.4-4.6 5.8-.5 11.2-.9 16.1-1.1Z" class="cls-15"/><path d="M85 167.1c.2 1.4.3 2.8.4 4.3-4.9.2-10.2.6-16.1 1.1q.15-2.25.3-4.2c5.2-.5 10.5-.9 15.4-1.1Z" class="cls-16"/><path d="M84.5 162.8c.2 1.4.3 2.8.5 4.3-4.9.2-10.2.6-15.4 1.1.1-1.6.2-3 .2-4.4 5-.6 10-.9 14.7-1" class="cls-15"/><path d="M83.9 158.5c.2 1.3.4 2.8.6 4.3-4.6.2-9.6.5-14.7 1v-3.9c4.8-.8 9.6-1.3 14-1.5Z" class="cls-16"/><path d="M79.5 146v.1c-5.1.3-10.5 1-15.8 2.5 1-2 1.8-4.6 2.8-6.6 2.7-.4 5.7-.7 8.7-.9v.1c2.2 2 2.3 2.7 4.4 4.8Zm-1.1-11.3c-5.4.2-10.8.7-15.4 1.6.8-2.1 1.7-4.2 2.6-6.2 2.8-.2 5.9-.5 9.2-.7v.1c1.2 2 2.7 3.1 3.7 5.2Z" class="cls-21"/><path d="M78.4 134.7c-1.2 1.9-1.6 3.2-3.3 6.3-3.1.2-6 .6-8.7.9v-.1c-.9-1.7-2.7-3.8-3.5-5.5 4.6-1 10-1.4 15.4-1.6Z" class="cls-9"/><path d="M79.4 146.1q-1.95 2.4-3.3 5.1c-3.2.4-6.4 1.1-9.7 1.9-1.1-1.6-1.9-2.9-2.9-4.5 5.3-1.5 10.8-2.3 15.8-2.5Zm-3.3-19.2c-.7.9-1.1 1.5-1.4 2.5-3.2.2-6.4.5-9.2.7-.8-1.4-1.2-2.9-2.3-4 .5-1 .9-1.8 1.5-2.5 3.2 2.4 7.5 3.1 11.4 3.3" class="cls-11"/><path d="M71.3 77.7c1.8 4.4-1.2 5.6-2.9 1.2s1.3-5.5 2.9-1.2" class="cls-7"/><path d="M70 67.7c.3.2.8.8.3 1.3-6.9.8-8.8 5.1-9.5 4.6 0-3.7 6.4-7 9.2-5.9" class="cls-12"/><path d="M69.9 159.9v3.9c-3.2.3-6.3.8-9.4 1.3v-3.2c3.1-.9 6.3-1.5 9.5-2.1Z" class="cls-21"/><path d="M69.9 163.8c0 1.3-.1 2.8-.2 4.4-3.2.3-6.4.7-9.4 1.1.1-1.5.2-2.9.2-4.1 3.1-.5 6.2-1 9.4-1.3Z" class="cls-14"/><path d="M69.6 168.2c0 1.4-.2 2.8-.3 4.2-3 .3-6.2.6-9.5 1 .1-1.4.2-2.8.3-4.1 3-.4 6.2-.8 9.4-1.1Z" class="cls-21"/><path d="M69.4 172.5c-.1 1.5-.2 3-.4 4.6-3.1.2-6.3.4-9.5.8.2-1.5.3-3 .4-4.4 3.3-.4 6.4-.7 9.5-1" class="cls-14"/><path d="M69 177c-.1 1.5-.3 2.9-.4 4.4-3.3.1-6.5.3-9.6.3.2-1.3.3-2.6.5-3.9 3.2-.3 6.4-.6 9.5-.8" class="cls-21"/><path d="M68.6 181.4c-.2 1.6-.3 3.2-.5 4.7-3.2 0-6.4.2-9.8.3.3-1.4.5-3 .7-4.7 3.1 0 6.3-.2 9.6-.3" class="cls-14"/><path d="M68.1 186.2c-.2 1.4-.3 2.8-.5 4-3.3 0-6.7-.1-10-.2.3-.9.5-2.1.8-3.5 3.4 0 6.7-.2 9.8-.3Z" class="cls-21"/><path d="M67.5 190.1c-.2 1.1-.3 2-.5 2.9-3.4-.4-6.8-.8-10.2-1.4.2-.4.4-1 .6-1.7 3.3 0 6.7.2 10 .2Z" class="cls-14"/><path d="M66.5 141.8v.1c-4.2.6-7.7 1.3-9.6 2.1.7-2.3 1.4-4.5 2.2-6.6 1.2-.4 2.5-.7 3.9-1 .9 1.7 2.7 3.8 3.5 5.5Z" class="cls-21"/><path d="M65.5 130.1c-.8 2.1-1.8 4.2-2.6 6.2-1.4.3-2.8.6-4 1 .9-2.3 1.5-4.6 2.3-6.9 1.3-.1 2.7-.2 4.3-.4Z" class="cls-11"/><path d="M66.4 142c-1 2-1.8 4.6-2.8 6.6-1.8.5-3.5 1.1-5.2 1.7-.5-1.7-1.1-3.1-1.8-4.1h-.4c.2-.8.4-1.5.6-2.2 1.9-.8 5.4-1.5 9.6-2.1Z" class="cls-9"/><path d="M63.6 148.6c1.1 1.6 1.9 2.9 2.9 4.5-2.3.6-4.7 1.2-7 2-.3-1.6-.7-3.3-1.2-4.7 1.7-.7 3.5-1.3 5.2-1.7Zm-.3-22.4c.9 1.2 1.5 2.6 2.2 3.9-1.6.1-3 .3-4.3.4.6-1.6 1.2-3.1 1.9-4.4h.1Z" class="cls-21"/><path d="M50.9 171.6c.1.3.3.6.4.9-.2-.1-.3-.2-.5-.3 0-.2 0-.4.1-.7Z" style="stroke-width:0;fill:#926350"/><path d="M105.3 44.6c-1.4-4.3-4.5-3.3-6.2-3.3 3.1-5.5-5.3-10.4-8.5-4.9-1.5-5.3-8.3-5-7.8 1.1-3.8-.7-7.9.4-5.9 4.6-5.4-1.5-11.2-1.5-15 2.1-3.1-.7-10.2.6-13.3 5.8-1.6-4.4-7.2-4-9.9-.7-.3-5.9-6.6-6.1-7.4-.3-4.8-6.2-13.6-1.5-9.4 5.3-6.3-.8-7.6 8.8-1.3 9.8-4.3 3.4-1.4 9.6 4 6.8 1.3 5.2 4.6 7.2 8.1 2.1 4.3 6.3 6.8-.7 6.7-4.6-.6 8.4 1.3 16.7 7.9 22.4-.6-3.4 3.5-4.6 6-3.3 1.7-4-.9-12.6 3.1-23 4-8.9 9-13.4 14-14 6.7-.1 19.6 6.7 22.6 14 1 1.6 1.1 8 2.4 9.8q.45-4.5.3-8.4c3.5-1.6 4.3-2.8 1.7-7.1 5.5 2 8.1-3.8 3.1-6.7 2.8-1.5 6.1-2.3 4.9-7.4Zm-62.6 24c-9.7 3.1.4-19.5 3.3-8.9-1.6 2.9-2.6 4.9-3.3 8.9" style="stroke-width:0;fill:#332921"/><path d="M140.9 143.1c-4.3-1.5-9.5.2-13 3-2.6-1.1-6.7.9-7 3.6-2-.7-4.8-.7-7.2-.2-4.8-9.1-11-28.2-14-32.6-1.2-1.7-4-2-7.4-2.4 1.3 1.6 1.4 3.9.6 5.8 9.6 8.6 9 21.5 7.7 33.1 6.5 12 5.1 18.2 20.1 10.3-1.3 5.2 7.4 4.4 5.3-.8 1-.3 1.8-1 2.3-1.9 2.1 1.7 5.9 1.8 6.2-1.5 1.2-.1 2.6.6 3.6-.3 1.5-2.4 4-8.8-1.5-6.4-2.3.5-4.8-1.1-3.2-3.4 1.8-2.7 6.5-3.6 7.5-6.4Zm-79.3-28.4v-.2l-5.1.4c-3.9.5-8.9 11.6-10 15.3 0 1.7-8.9 34-8 35-6.9.8-15.8 12-2.1 6.4 2.6 2.4-1 12.6 6.2 8.2 1 2.4 4.2 1.9 5.9.5 10 5.8 10.5-10.6 5.3-4.9-.4 1-1.3 2.4-2.5 1.6.7-1.4 1.4-4.1-.5-4.8.7-9.2 2.5-16.7 6-28.2 2.5-6.9 4-14.3 7.9-20.5-2.7-2-4.3-5.7-3.1-8.9Z" class="cls-8"/><path d="M44.2 56.9c1.1.4 1.5 1.1 1.8 2.8-1.6 2.9-2.6 4.9-3.3 8.9-7.5 2.4-3.4-12 1.5-11.7" class="cls-21"/><path d="M68.9 115.1c-1.8-5.1-3.3-9.5-10.4-15.2m27.9 13.7v1.2" class="cls-3"/><path d="M95.4 74.3c7.6 9.2 6 20.8-6.9 31.3 0 0-2.1 4.3-2 7.9" class="cls-1"/><path d="M93 64.6c1 1.6 1 8 2.4 9.8" class="cls-3"/><path d="M81.2 66c-2.3-2.3 9.2-3 8.1-1.7-2.7 0-5 .5-8.1 1.7m-10.8 3c.7-2.7-4.1-1.4-6-.2-.9.6-4 3.4-3.5 4.8.7.5 2.6-3.8 9.5-4.6m17 5.8c1.5 4 4.1 3 2.5-1-1.5-4-4.1-3-2.5 1m-19.1 4.1c1.7 4.4 4.7 3.2 2.9-1.2-1.7-4.4-4.7-3.2-2.9 1.2M74 90c4.9 1.7 11.4-.3 15.8-3.6C91.1 96.2 78.4 96.5 74 90m-20.6-2.5c-4.1-1.8-7.4 1.2-5.6 5.3 1.7 2.9 6.4 8.9 10.8 7 .6-.3.9-.9.7-1.7m22.7-14c.8-2.7 4.4-5.3 6.4-2.1" class="cls-1"/><path d="M93 64.6c-3.5-7.8-17.1-15.4-24.7-13.7-15.1 7-13.8 25.9-15 36.6" class="cls-1"/><path d="M56.8 144c1-3.4 2.1-6.5 3.3-9.6m-8.8 31.9c.6-4.2 3.1-14.6 5.5-22.3m4.8-29.5c-16.5-2.3-18.7 37.3-22.8 48m25.9-48.3-3.1.3m6.9-.6-3.8.3m21.8-.6c3.9 1.2 11 .6 13.2 3.4 3.1 4.3 8.9 23.3 14 32.2M105 162c2.3 9.2 10.1 4.2 15.7 1.8m.3-14c-2-.7-4.8-.7-7.2-.2-6 1.4-12 6-8.7 12.4m-54.2 9.6c.4-2.3.2-4.2.4-5.3m-12.6-3.8c-.2 1-.2 1.8-.2 2.7" class="cls-3"/><path d="M107.6 191.4c-16.4 3.9-33.9 3-50.7.3 3.4-14.3 6.3-31.6-.4-45.4m47.8 29.8c1.2 5.1 2.5 10.2 3.3 15.3m-6.7-31.8c.7 5.5 2.1 11 3.4 16.4" class="cls-2"/><path d="M92.7 120.2c12.2 10.3 7.4 25.7 8.2 39.5" class="cls-3"/><path d="M48.6 50.1c3.1-5.2 10.2-6.6 13.3-5.8 5.7-5.3 15.8-2.6 22.3.9 11.1 5.5 12.6 17.6 11.3 29.3M47.6 91.1c-6.7-5.8-8.9-14-8.2-22.7" class="cls-1"/><path d="M64.5 123.8c-1.9 3.1-3.5 6.8-4.4 10.5m40.6 19.2c1.4 3.2 2.8 5.3 4.3 8.5m-45.7-6.9c13.1-3.9 28.7-7.5 41.4-1.6M60.3 162c12.9-3.3 28-5.2 40.6-2.4m20.1-8.2c-1-3.7 3.7-6.5 6.9-5.3 3.5-2.8 8.7-4.4 13-3-1 2.8-5.8 3.7-7.5 6.4-1.6 2.3 1 3.9 3.2 3.4m-8 3.3c1.4 2.4 3.2-1.8 4.9-1.2 3.3 3.8-.4 10.1-5.4 6" class="cls-3"/><path d="M120.9 150c-5.4 1.2-6 13 0 13.5m13.3-8c.8-1.9 4.2-4.4 5.9-2.2.3 2-1.2 4.2-2 6-.9.9-2.4.2-3.5.3" class="cls-3"/><path d="M123.1 159.4c-2.4.8-2.9 5.1-2 7.1 1 .9 3.1 1 4.3.3 2-1.6 0-7.7-2.3-7.5Z" class="cls-3"/><path d="M126 163c1.1-.3 1.9-1.1 2.4-2.1m-77.1 11.6c-1.1-4.3-4.3-5.3-8-6.2-6.9-5.8-23.6 11.9-6.9 5.3 2.5 2.2-.5 7.5 2.9 9.1 3.6.7 6.5-4.1 7.8-7 .1-4.4-5.2-1.1-6.6.9" class="cls-3"/><path d="M42.6 179.6c2 4.2 7.5.5 8.7-2.6 2.3-3.8-1.2-6.9-4.2-3.3" class="cls-3"/><path d="M48.3 180.1c5.5 5.3 13-4.7 6.7-5.8-1.5.5-1.6 3.8-3.6 2.8m10.2-62.4c-4.6 16.7 38.1 16.5 30.7-.2" class="cls-3"/><path d="M64.7 114.4c-.3 12.3 26 11.4 24.9.2" class="cls-3"/><path d="M63.6 148.6c11.8-3.1 26.8-4.1 37.5.1m-42.8 1.6c1.7-.7 3.5-1.3 5.2-1.7m-6.7-4.6c12-2.8 33.1-6.1 44.7-1.3M59 137.4c12.5-3.6 29.2-3 41.8-2.1m-39.5-4.8c12.1-.9 25.7-2.4 37.7-1.6" class="cls-1"/><path d="M78.4 134.7s0 0 0 0c-1.2 1.8-1.6 3.3-3.3 6.4m10.1-6.4c1.3 1.8 2.6 3.7 3.9 5.5m-14.1.9c2.2 2 2.3 2.7 4.4 4.8m9.5-5.8c-1.2 2.1-2 3.5-3 5.8m-.6-11.5c1-2.1 2.3-3.7 3.5-5.7q0 0 0 0m-14.1.8c1.2 2 2.7 3.1 3.7 5.2m-15.5 1.7c.9 1.7 2.7 3.8 3.5 5.5-1.1 2.1-1.8 4.7-2.9 6.7m30.7-20c1.5 1.5 3.5 4.7 4.6 6.5-1.4 1.7-2.3 4.2-3.9 5.9 1.5 2.6 1.8 4.5 3.2 6.9m-34.5.7c1.1 1.6 1.9 2.9 2.9 4.5m13-7.1c-1.4 1.6-2.5 3.3-3.3 5.2m9.7-5.2c1.3 1.4 2.8 3.4 4.1 4.8" class="cls-1"/><path d="M98.1 147.8c-1.2 1.5-2 2.5-3.3 3.6m-20.1-21.9c.3-1.1.7-1.8 1.5-2.6m12.5 1.8c-1-1-1.5-2.1-2.5-3m8 2.9c.2-1 1.4-3.4 2.1-4.4m-35.8 41c13.3-2.3 27.8-2.8 40.9-2.2m-43.9 26.9c16.1.2 34.5 1.3 49.6-1m-46.8-19.6c13.5-1.6 28.8-3.2 42-2m-42.4 6.1c14.6-1.6 29.2-2.7 43.2-2.1m-43.6 6.5c15-1.6 30-1.3 44.8-1.8M59 181.8c15-.4 31.3-1.6 45.9-1.7" class="cls-1"/><path d="M97.4 185.2c3.4 0 6.4-.2 9-.2" class="cls-2"/><path d="M58.3 186.4c13.2-.3 26.7-.9 39.1-1.2" class="cls-1"/><path d="M83.9 158.5c1.8 11.5 2.5 23.8 2.5 35.5m7.1-35.4c2.1 11.1 3.6 23.2 4.6 34.5m-28.2-33.2c-.2 10.8-1.2 22.5-2.9 33.2m-3.7-66.9c.9 1.2 1.5 2.6 2.2 3.9-.9 2.1-1.7 4.1-2.6 6.2m-1.1-92.1c3.8.9 6.3 3 8.6 6.1-.2-.1-.3-.2-.5-.3M44 57c10.2-4.4 1.7-15.1-5.3-7.6-.3-5.9-6.6-6.1-7.4-.3-4.8-6.2-13.6-1.5-9.4 5.3-6.3-.8-7.6 8.8-1.3 9.8-4.3 3.4-1.4 9.6 4 6.8 1.3 5.2 4.6 7.2 8.1 2.1 4.2 6.5 7.1-1.1 6.7-4.6" class="cls-1"/><path d="M39.5 68.4c-3.5-3.2 4.2-17.5 6.5-8.7-1.6 2.9-2.6 4.9-3.3 8.9-1.2.3-2.4.5-3.2-.2m56.2-2.5c3.5-1.6 4.3-2.8 1.7-7.1 5.5 2 8.1-3.8 3.1-6.7 7.6-2.1 6.5-12-1.4-10.7 3.1-5.5-5.3-10.4-8.5-4.9-1.5-5.3-8.3-5-7.8 1.1-3.8-.7-7.9.4-5.9 4.7" class="cls-1"/><path d="m112.82 45.408 17.79-15.961 15.96 17.789-17.789 15.961z" class="cls-17"/><path d="m113.786 108.421 21.445-10.552 10.552 21.445-21.445 10.552z" class="cls-10"/><path d="m95.8 7.1-4.1 23.5-23.5-4.1L72.3 3z" style="fill:#00a553;stroke-width:0"/><path d="M44.1 25.3 29.6 44.2l-19-14.5 14.6-19z" class="cls-17"/><path d="m26.5 78.5 6 23.1-23.2 6-5.9-23.1z" class="cls-10"/><path d="m68.2 26.5 23.5 4.1 4.1-23.5L72.3 3zm45.586 81.721 21.445-10.552 10.552 21.445-21.445 10.552zM32.5 101.6l-23.2 6-5.9-23.1 23.1-6zm-2.9-57.4-19-14.5 14.6-19 18.9 14.6zm83.312 1.301 17.817-15.93 15.93 17.817-17.816 15.93z" style="fill:none;stroke-miterlimit:10;stroke:#fff"/><path d="M43.1 148.3h20.8v20.8H43.1z" style="stroke-miterlimit:10;stroke:#fff;fill:#00a553" transform="rotate(-79.7 53.407 158.614)"/></svg>')}`;
export default image;