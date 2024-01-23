/* eslint-disable */
import asyncLoader from '../../../phet-core/js/asyncLoader.js';

const image = new Image();
const unlock = asyncLoader.createLock( image );
image.onload = unlock;
image.src = `data:image/svg+xml;base64,${btoa('<svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" width="548" height="373" viewBox="0 0 548 373"><defs><style>.cls-1,.cls-2,.cls-4,.cls-5{fill:none}.cls-1,.cls-2{stroke-linejoin:round}.cls-1,.cls-2,.cls-4,.cls-5{stroke-linecap:round}.cls-1,.cls-4{stroke:#231f20}.cls-2,.cls-5{stroke:#000}.cls-4,.cls-5{stroke-miterlimit:10}.cls-8{fill:#fff}.cls-12,.cls-13,.cls-15,.cls-16,.cls-8,.cls-9{stroke-width:0}.cls-12{fill:#3b2310}.cls-13{fill:#17baac}.cls-15{fill:#c27557}.cls-16{fill:#00a553}</style></defs><path d="M0 0h548v373H0z" style="stroke-width:0;fill:#f4fcfe"/><path d="M115.6 102.8h229.6v229.6H115.6z" style="stroke-width:3px;stroke:#414042;fill:#fff"/><path d="M254 102.3v229.6m-138.4-79.3h229.6" style="fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:3px"/><path d="M508 36.3c-4.6 3.8-9.5 11-14.6 14-4.4-.8-11.4-3.4-16.5-4.9 3.9 8 4.6 10.5 7.1 16.3-3.7 5.2-6 11.9-10.4 16.4 8.6-1.3 20.2-3.4 20.2-3.4s6.3 7.2 11.6 14.8c-.8-3.6 2.8-12.2 1.8-16.4 3.1-1.3 11.1-5.4 17.8-6.3-5.2-3.5-16.1-9.7-16.1-9.7s-.3-13-1-20.9" style="stroke-linejoin:round;stroke-linecap:round;stroke:#000;fill:#fcee21;stroke-width:2px"/><path d="M166.6 42.7v-5.9H199v4.8c-3.2 3.4-6.4 7.9-9.5 13.5s-5.6 11.4-7.3 17.4q-1.8 6.3-2.4 13.8h-6.3c0-3.9.8-8.7 2.3-14.3s3.6-11 6.4-16.2 5.7-9.6 8.8-13.1h-24.5Z" class="cls-16"/><path d="M179.5 188.6v-1.8c0-2.4.3-4.5 1-6.3.5-1.3 1.3-2.7 2.4-4 .8-1 2.3-2.4 4.4-4.3q3.15-2.85 4.2-4.5c.6-1.1 1-2.3 1-3.7 0-2.4-.9-4.5-2.8-6.3q-2.85-2.7-6.9-2.7c-4.05 0-4.8.8-6.6 2.5-1.8 1.6-2.9 4.2-3.5 7.7l-6.3-.8c.6-4.7 2.3-8.2 5.1-10.7s6.5-3.7 11.2-3.7 8.8 1.3 11.7 4 4.4 5.9 4.4 9.7-.5 4.2-1.5 6-3 4.1-6 6.7q-3 2.7-3.9 3.9c-.6.8-1.1 1.8-1.4 2.9s-.5 2.9-.5 5.3h-5.9Zm-.4 12.3v-7h7v7zm119.1-12.3v-1.8c0-2.4.3-4.5 1-6.3.5-1.3 1.3-2.7 2.4-4 .8-1 2.3-2.4 4.4-4.3q3.15-2.85 4.2-4.5c.6-1.1 1-2.3 1-3.7 0-2.4-.9-4.5-2.8-6.3q-2.85-2.7-6.9-2.7c-4.05 0-4.8.8-6.6 2.5-1.8 1.6-2.9 4.2-3.5 7.7l-6.3-.8c.6-4.7 2.3-8.2 5.1-10.7s6.5-3.7 11.2-3.7 8.8 1.3 11.7 4 4.4 5.9 4.4 9.7-.5 4.2-1.5 6-3 4.1-6 6.7q-3 2.7-3.9 3.9c-.6.8-1.1 1.8-1.4 2.9s-.5 2.9-.5 5.3h-5.9Zm-.4 12.3v-7h7v7zm.4 103.8v-1.8c0-2.4.3-4.5 1-6.3.5-1.3 1.3-2.7 2.4-4 .8-1 2.3-2.4 4.4-4.3q3.15-2.85 4.2-4.5c.6-1.1 1-2.3 1-3.7 0-2.4-.9-4.5-2.8-6.3q-2.85-2.7-6.9-2.7c-4.05 0-4.8.8-6.6 2.5-1.8 1.6-2.9 4.2-3.5 7.7l-6.3-.8c.6-4.7 2.3-8.2 5.1-10.7s6.5-3.7 11.2-3.7 8.8 1.3 11.7 4 4.4 5.9 4.4 9.7-.5 4.2-1.5 6-3 4.1-6 6.7q-3 2.7-3.9 3.9c-.6.8-1.1 1.8-1.4 2.9s-.5 2.9-.5 5.3h-5.9Zm-.4 12.3v-7h7v7zm-118.3-12.3v-1.8c0-2.4.3-4.5 1-6.3.5-1.3 1.3-2.7 2.4-4 .8-1 2.3-2.4 4.4-4.3q3.15-2.85 4.2-4.5c.6-1.1 1-2.3 1-3.7 0-2.4-.9-4.5-2.8-6.3q-2.85-2.7-6.9-2.7c-4.05 0-4.8.8-6.6 2.5-1.8 1.6-2.9 4.2-3.5 7.7l-6.3-.8c.6-4.7 2.3-8.2 5.1-10.7s6.5-3.7 11.2-3.7 8.8 1.3 11.7 4 4.4 5.9 4.4 9.7-.5 4.2-1.5 6-3 4.1-6 6.7q-3 2.7-3.9 3.9c-.6.8-1.1 1.8-1.4 2.9s-.5 2.9-.5 5.3h-5.9Zm-.4 12.3v-7h7v7z" class="cls-9"/><path d="M46.8 201h-6.2v-39.2c-1.5 1.4-3.4 2.8-5.8 4.2s-4.6 2.5-6.5 3.2v-5.9c3.4-1.6 6.4-3.6 9-5.9s4.4-4.5 5.5-6.7h4zm15.7-24.7c0-5.9.6-10.7 1.8-14.3q1.8-5.4 5.4-8.4c2.4-2 5.4-2.9 9.1-2.9s5 .5 7.1 1.6c2 1.1 3.7 2.6 5 4.7 1.3 2 2.4 4.5 3.1 7.5.8 2.9 1.1 6.9 1.1 11.8s-.6 10.6-1.8 14.2q-1.8 5.4-5.4 8.4c-2.4 2-5.4 3-9.1 3s-8.6-1.7-11.4-5.2c-3.3-4.2-5-11-5-20.4Zm6.3 0c0 8.2 1 13.7 2.9 16.4s4.3 4.1 7.1 4.1 5.2-1.4 7.1-4.1 2.9-8.2 2.9-16.4-1-13.7-2.9-16.4-4.3-4.1-7.2-4.1-5.1 1.2-6.8 3.6c-2.1 3.1-3.2 8.7-3.2 16.9Zm26.1 134.8v5.9H61.8c0-1.5.2-2.9.7-4.3.8-2.3 2.2-4.5 4-6.7s4.5-4.7 8-7.6c5.4-4.5 9.1-8 11-10.6s2.9-5.1 2.9-7.4-.9-4.5-2.6-6.2-4-2.5-6.8-2.5-5.3.9-7.1 2.7-2.7 4.2-2.7 7.4l-6.3-.6c.4-4.7 2.1-8.3 4.9-10.8s6.6-3.7 11.4-3.7 8.6 1.3 11.4 4 4.2 6 4.2 9.9-.4 4-1.2 5.9-2.2 4-4.1 6.1-5.1 5.1-9.5 8.8c-3.7 3.1-6.1 5.2-7.1 6.3s-1.9 2.2-2.6 3.3h24.6Z" style="stroke-width:0;fill:#5b2ac2"/><path d="m285 73.1 6.2-.8q1.05 5.25 3.6 7.5c1.7 1.5 3.8 2.3 6.2 2.3s5.3-1 7.3-3q3-3 3-7.5c0-4.5-.9-5.2-2.8-7-1.8-1.8-4.2-2.8-7-2.8s-2.6.2-4.3.7l.7-5.4h1c2.6 0 5-.7 7.1-2.1s3.1-3.5 3.1-6.3-.8-4.1-2.3-5.6-3.5-2.2-5.9-2.2-4.4.8-6 2.3-2.6 3.8-3.1 6.8l-6.2-1.1q1.2-6.15 5.1-9.6c2.7-2.3 6-3.4 9.9-3.4s5.3.6 7.6 1.8 4.1 2.8 5.3 4.8 1.8 4.2 1.8 6.5-.6 4.1-1.7 5.9-2.9 3.2-5.2 4.2c3 .7 5.3 2.1 6.9 4.3s2.5 4.8 2.5 8.1-1.6 8.1-4.8 11.1-7.2 4.6-12.1 4.6-8-1.3-11-3.9c-2.9-2.6-4.6-6-5-10.2Z" class="cls-16"/><path d="M378.1 96.7c-2.1-.3-3.4-2.8-3.7-5.3 3 0 5.6.4 5.4 2.6-.6.8-1.1 1.7-1.4 2.7zM455 326.4c-5.7 8-24.7 7.5-30.1.5 6.4-1.7 13.9-3.3 20.4-1.9h.3c0-3.2-.5-6.5-.4-9.7q-2.1-.9-4.2-1.5c2.7 11.2-12 5.7-18.7 9.8l.5 1.6c-3.4-4-7-5-11.3-8.7-.5 1.9 0 3.5 0 3.5 7.7 3.3 8.3 5.1 15.5 12.5 7.7 6.4 21.9 3.9 27.1-1.5v-.2c.6-1.3.9-2.8.8-4.3Z" class="cls-12"/><path d="M438.9 320.7c-5.5.6-11.2.7-16.5 2.8l.5 1.6c-3.3-4.2-7.8-5.1-11.7-9.2-.5-1.6 3.6-10.8 3.6-10.8 2.1-10.7 4.1-31.8 6.3-39.4 5.6 1.7 11.3 2.9 16.7 3.1-1.6 6.4-10.8 31.1-10.8 37.3 3.3 4.4 8.9 6 13.9 7.7.5 2.4.5 5.9-2.2 7Z" class="cls-15"/><path d="M453.1 321.1c-1.9-2.7-4.8-4.5-7.9-5.8 0 3.2.3 6.4.4 9.7h-.3c-6.5-1.3-14 .2-20.4 2 5.3 7 24.4 7.6 30.1-.5-.1-1.9-.8-3.8-1.9-5.3Zm7.7-147.7-.6.9c-1.8 3.7 1.9 7.9-1 11.9 2.1-.3.1-2.7 2.4-2.6 0 0 .8.2.8.3-.5 7.1-7.8 9.1-13.7 6.8-.1-4.4-.3-9.6-.5-14.3 1.4-3.2 5.4-3.3 6.9-6.5 1-3 2.8-14.8 5.3-23.5 4.7.3 9.4 1.5 13.1 4.6-2.1 8.5-8.7 15.4-12.8 22.2Z" class="cls-15"/><path d="M431.3 73.7c.2 4.2 0 5.8.3 10-.8 0-1.8.4-2.1.6-.9-5.8-1.4-14.8-7.4-16.5-7.1-6.4-5.7-3.3-12.9 0-9.5-1.5-6.1-3.5-14.2 3.2-5.2 1.2-11.2-.1-7.8 7.5-6.2 5-5.1-.8-9.6-.5-.6.4-.5 1.3-.4 2.1.4 2.1-.5 4.9-2.4 6.4 1.7-11.8-6.1-11.1 5.8-20.1 2.5-7.2.5-10.1 9.7-11.4 3.2-1.2 5.4-4.7 8.8-5.1 4.3-.6 8.2 3.9 12.5 4.2 3.4.2 7.1-2.2 10 0 2.1 1.6 2.5 4.8 3.9 7.1 3.2 3.5 6.3 7.1 5.8 12.3Z" class="cls-12"/><path d="M433.7 85.7c-.1-2.3-2.9-2.3-4.2-1.4-.9-5.8-1.4-14.8-7.4-16.5-7.1-6.4-5.7-3.3-12.9 0-9.5-1.5-6.1-3.5-14.2 3.2-5.2 1.2-11.2-.1-7.8 7.5.9-.7 2.1-1.4 3-.4 1.2 2.4-1.5 4.8-1.9 7.2-1 1.8 3.9 3.6 4.4 5.6 0 1.9-2.6 2.2-4.7 2-3.7-.2-2.7 6.4-5.1 7.2-2.3-.3-2.2-4.6-3-6.2-5.1 4.8 2.5 14.8 7.4 12.9 2.5 6.5 7.8 8.6 13 11.8s1.2 8.8.8 8.4c4.8 13.4 31.7 16.3 23.8-2.8-.5.1-1.1.3-1.6.4l-1.5-6.8c3.8-6 8.6-13.2 8.9-20.2 5.1-.5 4-8.4 3.1-12Zm-42.6-.9c-2.5-.3.4-3.2 2.7-4.2 2.4-1.6 10.8-1.2 6.1 2.5-3.1.2-5.7.6-8.8 1.7m8.9 12.3c-2.6.6-4.1-7.7-1.5-8.1 2.6-.6 4.1 7.7 1.5 8.1m16.4 16.2c-4.9.8-8.5.5-12.7-3.9 1.4 1 13 1.6 18.2-1.9-.9 3-2.2 4.8-5.5 5.8m6.4-21.1c-2.2.5-3.5-6.9-1.3-7.2 2.2-.5 3.6 6.9 1.3 7.2m1.4-13.4c-.8.6-5.2 1.4-6.5 1.9-2.3.2-2.7-2.8-.8-3.8 2-1.4 7.3-.8 7.4 1.9Z" class="cls-15"/><path d="M424.2 77.9c.4.6-.1 1.3-.8 1.3-.3 0-4.9 1.4-5.6 1.5-6-1.5 2.1-7.5 6.5-2.7Z" class="cls-12"/><path d="M423.9 88.3c.9 4.7-2.6 5.3-3.4.6-.9-4.7 2.6-5.3 3.4-.6" class="cls-9"/><path d="M421.9 107.4c-2.1 8-12.7 8-18.2 1.9 1.4 1 13 1.6 18.2-1.9" class="cls-8"/><path d="M401.3 92.7c1 5.2-3.2 6-4.1.7-1-5.2 3.2-6 4.1-.7" class="cls-9"/><path d="M393.9 80.6c1.7-.8 7.7-2 7.4 1-.3 2.1-3.2 1.6-4.7 1.8-1.9.4-3.3.8-5.4 1.4-2.5-.3.4-3.2 2.7-4.2" class="cls-12"/><path d="M384.8 184.5c-6.7-4.6-14.9-10.5-23.3-16.6-.8-5.6 2.8-11.1 8.8-11.2 7.9 7 13.7 14.9 21.7 22 1.9 1.5 3.4 2.5 4.6 3.3 3.7 2.6 4.4 3.3 5.7 10.3-.5 1.5-3.1 3.5-6.7 4.5-1.7.4-3.6.6-5.5.4-1.3-.5-7.5-9.8-3-7.5-.4-1.8 0-3.3-2.1-5.3Zm9.1 79.7c-6.3 12.7-18.1 32.3-20.8 38.5-3.3 4.3 0 10.6-.4 16-4-10.3-10-7.8-18.9-18.5.9-1.7.5-4.6 1.1-8.6 3.7 5 4.8 7.9 10.5-2 2.9-8.8 7.5-25.5 14.3-35.6 6-.4 12.7-.2 17.8 1.5-.6 2-1.9 5-3.6 8.6Z" class="cls-15"/><path d="M472 129.8c-1.8 2.8-9.2.7-9.4-2.8-2.1-.5-4.2-.9-6.1-1.3-3.3 3-7 1.1-9-1.3-4.4-.6-8.8-1.3-13.3-1.3v.4c9.6 13.1-5.2 26.7-18.4 23-14.2-3.3-25-12.5-27.2-19.9-16.2 3.8-60.2 20-34.2 36.9l.2-.2c0-5.5 3.6-12.2 9.8-11.4.4.2.9.6 1.3.9 7.1-3.8 19.3-7.2 25.8-3.5l-.4.9c3.8 13.4 5.3 23.3 5.5 31.8 3.7 2.6 4.4 3.3 5.7 10.3-.5 1.5-3.1 3.5-6.7 4.5v.5c-2.6 5.9-6.7 17-10.8 28.2 27.1-3.9 38.4 19 63.1 15.6 1.1-36.9 2.6-66.2-3.3-98.9 1.7-.2 15.1 0 17.4 0 .5-1.3 1-2.4 1.6-3.2 4.8-.4 9.6 1.2 13.2 4.3.5-6.2-.8-11.8-4.7-13.6Zm-106.6 9.3c-1.5 1.8-4.4 2-6.6 1.6 1.4-2.1 4.1-3.1 6.6-2.8.3.3.2.9 0 1.2m8.4-3.6c-6.9-1.5 6-6.3 6.1-2.8-.2 1.9-4.7 2.8-6.1 2.8m41.1 56c-.4 2.1-1.5 3.8-2.3 5.7-2.3 4.3 1.2 23.9-7 20-2-4.3 2.9-7.8 1.2-17.4 4.2-10.9.9-14.9 1.3-25.2 3-6.4 1.5-11.4-1.8-17-1.1-2.9-1.3-8.7 2.5-6.2 2.6 1.9 2.7 6.6 4.3 9.3 5.4 6.4 2.9 8.4-.3 14.8-1.4 5.2 3.2 10.6 2.2 16Zm28.2 13.8c2.2 7.1-9.3 22.1-8.3 11.1 5.6-6.2 4-12.7 3-20.3 4.4-13.9 1.6-9.5-2.9-21.1-.4-3.6 2-6.9 2-10.5 0-2.3-1.1-4.4-1.8-6.6-1.4-4.6 1-9.8 4.3-5.3 5.5 6.3 1.6 14.7.7 21.9 9.5 18-.4 13.9 2.9 30.8Zm-15.8 41.9c-14.7-7.2-28.8-14.9-45.9-12.7-1.4 3.8-2.8 7.5-4.1 10.8h.2c24.3-9.2 44.6 18.3 69.3 13.7.2-2.8.4-5.9.6-9.2-6.8.2-13.6-.3-20.1-2.6m-36.5-6.4c-5.2.1-5.6-3.7 0-3.6 5-.2 5.7 3.7 0 3.6m21.1 4c-.7 2.2-8.6-.6-7.8-3 .7-2.2 8.7.7 7.8 3m16.7 8.1c-.7 2.1-8.5-.5-7.8-3 1.5-2.3 8.6.9 7.8 3m12.2 3.6c-5.4-.2-5.3-4 .2-3.6 5.4.3 5.3 4-.2 3.6" style="stroke-width:0;fill:#af52c2"/><path d="M390.6 88.8c-5.8-3.3 1.4-6.6-.4-10.5-2-1.7-5.2 2.7-7 2.6-1.9-.4-6.8-5.7-6.1-.6.8 4.5-2.6 6.4-5.7 8.7-.8 4.3 8.8 1.1 8.3 4.6.9 1.8.8 6.2 3.1 6.7 1.4 0 1.9-3.7 2.3-5 .6-1.7 2.3-2.3 3.7-2.1 4.1.6 4.9-2.9 1.7-4.3Zm-9.4-2.2c.5-.7 2.4-1.6 3.3.5.8 3.3-5 2.5-3.3-.5" class="cls-8"/><path d="M384.5 87.1c.8 3.3-5 2.5-3.3-.5.5-.7 2.4-1.6 3.3.5" style="stroke-width:0;fill:#f8ad3b"/><path d="M423 255.8c-13.5-6.3-30.2-17-45.5-10.5h-.2c-1.6 3.9-3.1 7.2-4.3 9.6.5 2.3 1.7 3.3 3.2 5.1 1.1-2.1 2.2-4.1 3.4-5.9 6-.4 12.7-.2 17.8 1.5-.6 2-1.9 5-3.6 8.6 8.5.6 18.6 1.1 27.1 2.1l.2-.7c8.2 2.5 16.4 4 24.6 2.7.4-2.5.8-5.7 1.1-9.4-8.2.5-16.1-.2-23.8-3.1m-6.8-88.8c-.2-2.6-2.2-4.2-3.3-6.3-1.6-2.7-1.7-7.4-4.3-9.3-3.8-2.6-3.5 3.3-2.5 6.2 1.2 3.2 3.8 6.1 3.7 10 0 2.5-1.3 4.6-1.8 7-1.1 5.4 1.9 11.1 1 16.6-2.2 5.7-2.3 11.4-2.2 17.3-.9 2.7-4.3 10.2 1.1 9.4 6.1-5.2 1.3-17.4 6.8-26.4.9-5.4-3.6-10.8-2.2-16 .9-3.1 3.8-5.2 3.6-8.6Z" class="cls-13"/><path d="M424 253c2.2.8 4.2.7 4.6-.2.3-4.8-14.4-5-4.6.2m-59.7-101c-6.2-.7-9.9 6-9.8 11.5l-.2.2c2.5 2.3 5.2 4.7 7.5 6.3-1.7-6.1 1.4-13.3 8.5-13.4-1.8-1.6-3.8-3.2-5.9-4.7Zm99.1-12.9c-1.3 2.1-2.2 4.8-3 7.4 5.3.3 10.6 2 14.5 5.8.9-2.9 1.5-5.9 1.7-8.9-3.6-3.1-8.5-4.7-13.2-4.3m8.6-9.3c-2.3-1-5-1.7-9.4-2.8.2 3.4 7.7 5.5 9.4 2.8m-24.7-5.3c2 2.4 5.7 4.3 9 1.4v-.1c-3.3-.6-5.9-.7-9-1.2Zm-22.5 112.7c-14.8-7.7-22.3-13.5-40.1-11.7-1.1 3-2.2 6-3.3 8.9 27.7-3.6 39.8 17.3 66 15.3.1-2.7.3-5.6.4-8.6-9.1.8-11.2.4-23-4Zm20.2 17.6c.2-2.3-8.4-2.8-8.4-.4-.3 2.4 8.4 2.8 8.4.4m-9.9-96.8c3.4 5.7.1 11.3-.2 17.1.5 4.3 4.7 6.7 5.2 11-.8 7-3.7 10.5-1.2 18.2 1.8 6.8-6.5 11.4-3.8 15.6.8.7 1.9.2 2.7-.5 6.1-4.5 5.5-14 4.3-21.1 2.8-14.8 4.1-10-2-23.8-.3-2.9 1.2-5.6 1.9-8.4 3.5-8.5-8.6-24.7-6.9-8.3Zm-19.4-11.3c13.2 3.7 27.9-9.9 18.4-23v-.4c-3 0-6.1.3-9.3 1.1 7.9 19.1-19.1 16.1-23.8 2.8-4.2-.8-8.5-.9-12.5-.2 2.2 7.4 13 16.6 27.2 19.9Z" class="cls-13"/><path d="M407.3 244.9c10.8 2.7-.3-6.9-3.3-3.2-.5.9 1.6 2.7 3.3 3.2m-16.9-4.2c4.6.4 6.8-3.1 1.3-3.6-4.9-.7-7.5 3.2-1.3 3.6m-10.6-107.9c.2-2.2-5.1-.7-6.2-.3-6.4 3.9 5.6 4 6.2.3m-15.7 7.3c.9-.3 1.8-1.3 1.1-2.2-2.5-.3-5.1.7-6.6 2.8 1.8.4 3.7.2 5.4-.6Z" class="cls-13"/><path d="M366.8 311.1c-4.6-3.6-5.9-3-13-10.8.9-1.7.5-4.6 1.1-8.6-.7-1.1-1.4-2.2-1.8-3.4-.2 2-1 5.3-1.8 6.7-2.1-5.8-4-14-7.2-14.1v-.3c-1 .2-1.9.6-2.8 1-5.8 1.5-7.3 12.4-4.5 17.6 7.2 12.3 15.2 7.7 22.9 24.8 6.8 9.2 20.1-5.5 7.1-13Z" class="cls-12"/><path d="M353.1 288.4c-.2 2-1 5.3-1.8 6.7-2.1-5.8-4-14-7.2-14.1v-.3c5.3-1.8 8.4 1.2 9.1 7.6Z" class="cls-15"/><path d="M379.7 254.1s0 0 0 0c-6.9 10.2-11.4 26.8-14.3 35.6m32.1-34.1c-4.8 13.6-21.1 39.1-24.5 47.1m41.8 2.3c2-10.2 4.2-31.6 6.1-38.7" class="cls-4"/><path d="M437.9 268.8c-1.6 6.4-10.8 31.1-10.8 37.3 7.2 9.6 32.6 7.5 27 24.7" class="cls-5"/><path d="M340.7 281.7c-5.2 2.5-6.9 12.3-4 17.6 3.2 7.9 13.9 10.2 17.9 16.3 3.3 6.2 8.6 17.2 15.7 8.1 3.1-6.3-6.8-12.3-12.3-15.4-13.2-8.3-10.3-26.4-17.3-26.6" class="cls-1"/><path d="M373.1 302.7c-4.6 6.1 3.9 16.5-3.7 22.1m-30-42.2c4.8-2.5 12.4-4.9 13.2 3.9" class="cls-1"/><path d="M372.7 318.9c-3.9-10.4-10.1-7.9-18.9-18.6-3.5-4.3-5.3-19.1-9.7-19.3m9 7.4c-.2-.6-.4-1.3-.5-1.9" class="cls-1"/><path d="M365.4 289.7c-6.4 12.2-8.7 4.6-12.3-1.4m61.7 16.7c-4.9 11.9-6 10 5.1 17.1 2 2.2 8 7.9 10.6 9 4 1.6 21.5 1.9 24.4-4.8" class="cls-1"/><path d="M454.2 330.9c-5.2 5.4-19.6 8-27.1 1.5-7.3-7.5-7.7-9.2-15.5-12.5 0 0-.5-1.6 0-3.5m32.2-176.5c4.4 16 4.5 40.1 5.2 58.4m-57.9-48c3.8 13.4 5.3 23.3 5.5 31.8m50.7-57.6c1.7.3 3.4.5 5.1.7" class="cls-1"/><path d="M423.4 124.7c8-2.4 16-1.3 24-.2m-51.8 27.8c-4.8-4.5-10.7-5.4-18.7-3.7M401 127c-10.4-2.2-18.7 1.1-28.8 5.1m80.3-6.9q1.65.15 3.9.6h0c4.1.7 12 2.6 14.7 3.7m-26.5 12.7c1.5-.2 14.9.2 17 0" class="cls-1"/><path d="M464.1 138.2c-5.6 8-7.2 27.5-9.3 32.4-2 2.7-5.4 2.9-6.7 6.1m25.5-25.6s0 0 0 0c-2.3 9.3-9.6 16.3-13.9 24m11.4-45.6c7.6 2.5 6.2 15.7 3.9 22.8m-113.6 15.6c8.5 6.1 16.6 12 23.3 16.7" class="cls-1"/><path d="M372.2 132.1c-27.8 11.8-36 20.3-10.5 38" class="cls-1"/><path d="M361.7 150.3c12.1 7.6 19.6 18.9 30.2 28.5" class="cls-1"/><path d="M376.9 148.6c-2.3.8-9 3.1-11.3 4.3m22.9-26c2.2 7.3 13 16.5 27.2 19.8 13.2 3.7 27.9-9.9 18.4-23" class="cls-1"/><path d="M383.9 183.8c4.5 3 1.3 6.5 5.4 9.8m1.3-15.9c6.3 5.3 10.6 4.9 11.7 15.1" class="cls-4"/><path d="M387 189.8c-4.6-2.4 1.6 7 2.9 7.5 4.2.8 11.7-2 12.4-5.2" class="cls-4"/><path d="M448.8 190.8c5.9 2.3 13.1.2 13.7-6.8 0 0-.8-.2-.8-.3-2.3-.2-.3 2.3-2.4 2.6 2.9-4-.8-8.2 1-11.9" class="cls-1"/><path d="M373.1 254.9c27.1-6.7 45.5 18.1 72.7 13.5q0 0 0 0h.6m-73.3-13.5c7.7-15.6 16.2-43.7 22.5-57.5" class="cls-5"/><path d="M449 198.3c-.7 16.3-.5 50-3.3 70.1m-52.2-4.3c8.6.6 18.9 1.1 27.5 2.2m-47.9-11.4c.5 2.4 1.8 3.4 3.3 5.2" class="cls-5"/><path d="M425.4 326.8c4.9-1.8 28.8-6.2 18.2 4.6m-21.4-7.8c6.9-4.1 21.6 1.5 18.8-9.9" class="cls-1"/><path d="M445.1 315.5c.2 3.2.3 6.3.4 9.5m-92.3-37v.4q0 0 0 0c-.2 2-1 5.3-1.8 6.7m3.4-3.4c-.5 3.9-.2 6.8-1.1 8.6m16.6-143.6c-7.1 0-10.3 7.2-8.6 13.4 0 0 0-.2.1-.3m2.5-17.7c-6.2-.8-9.9 6-9.8 11.4m46.5-36.4c4.8 13.4 31.7 16.3 23.8-2.8m36.1 22.3c5.2 0 10.3 2.1 14 5.7m-11.6-13.2c4.8-.4 9.8 1.2 13.4 4.3m-99.2 101.9c24.2-9.4 44.4 18.2 69 13.6M382 234.7c24.5-4.6 41.3 17.6 65.2 15.1M385 225.7c26.2-4.3 39 19.4 63.4 15.5m-38.6-73.6c0 2.5-1.3 4.6-1.8 7-1.1 5.4 1.9 11.1 1 16.6-.5 3-2 5.6-2.3 8.7-.2 2.9.7 5.9.1 8.7-.9 2.7-4.3 10.2 1.1 9.4 6.1-5.2 1.3-17.4 6.8-26.4.9-5.4-3.6-10.8-2.2-16 .9-3.1 3.8-5.2 3.6-8.6-.2-2.6-2.2-4.2-3.3-6.3-1.6-2.7-1.7-7.4-4.3-9.3-3.8-2.6-3.5 3.3-2.5 6.2 1.2 3.2 3.8 6.1 3.7 10Zm25.3-9.6c3.4 5.7.1 11.3-.2 17.1.5 4.3 4.7 6.7 5.2 11-.8 7-3.7 10.5-1.2 18.2 1.8 6.8-6.5 11.4-3.8 15.6.8.7 1.9.2 2.7-.5 6.1-4.5 5.5-14 4.3-21.1 2.8-14.8 4.1-10-2-23.8-.3-2.9 1.2-5.6 1.9-8.4 3.5-8.5-8.6-24.7-6.9-8.3Zm-61.6-25.5c-6.4 3.9 5.6 4 6.2.3.2-2.2-5.1-.7-6.2-.3m-8.6 5.4c-2.4-.3-4.8.9-6.1 2.8 1.9.5 7.9 0 6.4-3m82.1-13.2c2 2.4 5.7 4.4 9.1 1.5m6.1 1c.1 3.5 7.7 5.7 9.5 2.9q0 0 0 0" class="cls-1"/><path d="M391.6 237.1c9.6 1.9-3.9 6-5 1.8-.1-1.2 3-2.1 5-1.8m17.4 4.6c5.6 2.5 2.1 5.3-2.4 3-5-2.4-1.9-5 2.4-3m13.5 7.3c1.9-.2 6.7 2.1 6 3.8-.9 3-12.3-2.8-6-3.8m22.5 5.8c0 2.4-8.6 1.9-8.4-.4 0-2.4 8.6-1.9 8.4.4" class="cls-1"/><path d="M423.6 126.9c-.3-1.5-1.6-7.5-2-9.1" class="cls-2"/><path d="M427.2 72.9c2 10.7 6.9 24-.3 36.3-7.1 16.3-16.4 17.3-33.7 5" class="cls-2"/><path d="M401 127s0 0 0 0c.4.4-.8-8.4-.8-8.4m20.3-29.7c.8 4.7 4.3 4 3.4-.6-.8-4.7-4.3-4.1-3.4.6m-23.3 4.6c.9 5.3 5.1 4.5 4.1-.7-.9-5.2-5.1-4.5-4.1.7m22.2 5.7c.3 5.2-4.5 4.6-8.2 5.2m10.7 3c-5.1 3.6-16.8 2.9-18.2 1.9 5.4 6.1 16 6.1 18.2-1.9M379.8 94c-5.1 4.8 2.5 14.8 7.4 12.9 2.5 5.3 2.4 4.2 6.3 7.8m7.7-33.1c-.3 2.1-3.2 1.6-4.7 1.8-1.9.4-3.3.8-5.4 1.4-2.5-.3.4-3.2 2.7-4.2 1.7-.8 7.7-2 7.4 1m15.7-4.7c-1.8 1-1.5 4 .8 3.8 1.4-.5 5.7-1.3 6.5-1.9 0-2.7-5.4-3.3-7.4-1.9Zm12.6 7.5s0 0 0 0c6.4-4.1 6.5 12.8 1.6 13.4" class="cls-2"/><path d="M374.7 86.7c1.7-11.8-6.1-11.1 5.8-20.1 2.5-7.2.5-10.1 9.7-11.4 3.2-1.2 5.4-4.7 8.8-5.1 4.3-.6 8.2 3.9 12.5 4.2 3.4.2 7.1-2.2 10 0 9.6 16.6 9.9 9.1 10.1 29.4m-53.5 13c-2.1-.3-3.4-2.8-3.7-5.3" class="cls-2"/><path d="M387.2 78.7c-3.3-7.7 2.6-6.4 7.8-7.5 8.1-6.7 4.7-4.7 14.2-3.2 2.9-.5 4.7-4.2 7.6-3.8 2.2.3 3.3 2.8 5.3 3.8 1.3.6 4.5 1.9 5.1 5" class="cls-2"/><path d="M383.2 80.8c-1.9-.4-6.8-5.7-6.1-.6.9 4.4-2.6 6.5-5.7 8.7-.8 4.3 8.8 1.1 8.3 4.6.3 1.3.8 2.3 1.1 3.8.3 1.3.8 2.9 2.1 2.9 2.4-.7 1.5-7.4 5.1-7.2 2.1.2 4.7-.1 4.7-2-.4-2-5.4-3.8-4.4-5.6.7-2.2 4.8-8.9-.4-7.3-1.3.9-3.7 2.6-4.7 2.7" class="cls-2"/><path d="M384.5 87.1c-1.6-3.2-5 .1-2.9 1.8 1.2 1 3.5-.2 2.9-1.8m-8.1-1.6c1-.3 2.2-.2 3 .4m3.8-4.9c.9.4 1.5 1.4 1.4 2.4m3.5 2.1c-.3.8-1 1.5-1.8 1.8m1.7 5.8c-1.4-.3-2.8-.8-4.1-1.5m-4 1.1c-.2-.9 0-1.8.4-2.6 0 .1-.2.2-.3.3" class="cls-2"/></svg>')}`;
export default image;