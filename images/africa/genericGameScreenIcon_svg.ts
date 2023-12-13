/* eslint-disable */
import asyncLoader from '../../../phet-core/js/asyncLoader.js';

const image = new Image();
const unlock = asyncLoader.createLock( image );
image.onload = unlock;
image.src = `data:image/svg+xml;base64,${btoa('<?xml version="1.0" encoding="UTF-8"?><svg id="Layer_1" xmlns="http://www.w3.org/2000/svg" width="548" height="373" viewBox="0 0 548 373"><defs><style>.cls-1,.cls-2,.cls-3,.cls-4,.cls-5{fill:none;}.cls-1,.cls-2,.cls-6{stroke-linejoin:round;}.cls-1,.cls-2,.cls-6,.cls-4,.cls-5{stroke-linecap:round;}.cls-1,.cls-4{stroke:#231f20;}.cls-2,.cls-3,.cls-6,.cls-5{stroke:#000;}.cls-3,.cls-4,.cls-5{stroke-miterlimit:10;}.cls-3,.cls-7{stroke-width:3px;}.cls-6{fill:#fcee21;stroke-width:2px;}.cls-7{stroke:#414042;}.cls-7,.cls-8{fill:#fff;}.cls-9,.cls-10,.cls-11,.cls-12,.cls-13,.cls-14,.cls-15,.cls-16,.cls-17,.cls-18,.cls-19,.cls-8,.cls-20,.cls-21,.cls-22{stroke-width:0px;}.cls-10{fill:#5b2ac2;}.cls-11{fill:#54ab80;}.cls-12{fill:#9b9898;}.cls-13{fill:#e1a639;}.cls-14{fill:#e0bfa4;}.cls-15{fill:#d8d8d7;}.cls-16{fill:#af877b;}.cls-17{fill:#666363;}.cls-18{fill:#332921;}.cls-19{fill:#00a553;}.cls-20{fill:#ffcf69;}.cls-21{fill:#eb80ac;}.cls-22{fill:#f4fcfe;}</style></defs><rect class="cls-22" y="0" width="548" height="373"/><rect class="cls-7" x="115.6" y="102.8" width="229.6" height="229.6"/><line class="cls-3" x1="254" y1="102.3" x2="254" y2="331.9"/><line class="cls-3" x1="115.6" y1="252.6" x2="345.2" y2="252.6"/><path class="cls-6" d="m508,36.3c-4.6,3.8-9.5,11-14.6,14-4.4-.8-11.4-3.4-16.5-4.9,3.9,8,4.6,10.5,7.1,16.3-3.7,5.2-6,11.9-10.4,16.4,8.6-1.3,20.2-3.4,20.2-3.4,0,0,6.3,7.2,11.6,14.8-.8-3.6,2.8-12.2,1.8-16.4,3.1-1.3,11.1-5.4,17.8-6.3-5.2-3.5-16.1-9.7-16.1-9.7,0,0-.3-13-1-20.9"/><path class="cls-19" d="m166.6,42.7v-5.9h32.4v4.8c-3.2,3.4-6.4,7.9-9.5,13.5-3.1,5.6-5.6,11.4-7.3,17.4-1.2,4.2-2,8.8-2.4,13.8h-6.3c0-3.9.8-8.7,2.3-14.3,1.5-5.6,3.6-11,6.4-16.2,2.8-5.2,5.7-9.6,8.8-13.1h-24.5Z"/><path class="cls-9" d="m179.5,188.6c0-.8,0-1.4,0-1.8,0-2.4.3-4.5,1-6.3.5-1.3,1.3-2.7,2.4-4,.8-1,2.3-2.4,4.4-4.3,2.1-1.9,3.5-3.4,4.2-4.5.6-1.1,1-2.3,1-3.7,0-2.4-.9-4.5-2.8-6.3-1.9-1.8-4.2-2.7-6.9-2.7s-4.8.8-6.6,2.5c-1.8,1.6-2.9,4.2-3.5,7.7l-6.3-.8c.6-4.7,2.3-8.2,5.1-10.7,2.8-2.5,6.5-3.7,11.2-3.7s8.8,1.3,11.7,4c2.9,2.7,4.4,5.9,4.4,9.7s-.5,4.2-1.5,6c-1,1.8-3,4.1-6,6.7-2,1.8-3.3,3.1-3.9,3.9-.6.8-1.1,1.8-1.4,2.9-.3,1.1-.5,2.9-.5,5.3h-5.9Zm-.4,12.3v-7h7v7h-7Z"/><path class="cls-9" d="m298.2,188.6c0-.8,0-1.4,0-1.8,0-2.4.3-4.5,1-6.3.5-1.3,1.3-2.7,2.4-4,.8-1,2.3-2.4,4.4-4.3,2.1-1.9,3.5-3.4,4.2-4.5.6-1.1,1-2.3,1-3.7,0-2.4-.9-4.5-2.8-6.3-1.9-1.8-4.2-2.7-6.9-2.7s-4.8.8-6.6,2.5c-1.8,1.6-2.9,4.2-3.5,7.7l-6.3-.8c.6-4.7,2.3-8.2,5.1-10.7,2.8-2.5,6.5-3.7,11.2-3.7s8.8,1.3,11.7,4c2.9,2.7,4.4,5.9,4.4,9.7s-.5,4.2-1.5,6c-1,1.8-3,4.1-6,6.7-2,1.8-3.3,3.1-3.9,3.9-.6.8-1.1,1.8-1.4,2.9-.3,1.1-.5,2.9-.5,5.3h-5.9Zm-.4,12.3v-7h7v7h-7Z"/><path class="cls-9" d="m298.2,304.7c0-.8,0-1.4,0-1.8,0-2.4.3-4.5,1-6.3.5-1.3,1.3-2.7,2.4-4,.8-1,2.3-2.4,4.4-4.3,2.1-1.9,3.5-3.4,4.2-4.5.6-1.1,1-2.3,1-3.7,0-2.4-.9-4.5-2.8-6.3-1.9-1.8-4.2-2.7-6.9-2.7s-4.8.8-6.6,2.5c-1.8,1.6-2.9,4.2-3.5,7.7l-6.3-.8c.6-4.7,2.3-8.2,5.1-10.7,2.8-2.5,6.5-3.7,11.2-3.7s8.8,1.3,11.7,4c2.9,2.7,4.4,5.9,4.4,9.7s-.5,4.2-1.5,6c-1,1.8-3,4.1-6,6.7-2,1.8-3.3,3.1-3.9,3.9-.6.8-1.1,1.8-1.4,2.9-.3,1.1-.5,2.9-.5,5.3h-5.9Zm-.4,12.3v-7h7v7h-7Z"/><path class="cls-9" d="m179.5,304.7c0-.8,0-1.4,0-1.8,0-2.4.3-4.5,1-6.3.5-1.3,1.3-2.7,2.4-4,.8-1,2.3-2.4,4.4-4.3,2.1-1.9,3.5-3.4,4.2-4.5.6-1.1,1-2.3,1-3.7,0-2.4-.9-4.5-2.8-6.3-1.9-1.8-4.2-2.7-6.9-2.7s-4.8.8-6.6,2.5c-1.8,1.6-2.9,4.2-3.5,7.7l-6.3-.8c.6-4.7,2.3-8.2,5.1-10.7,2.8-2.5,6.5-3.7,11.2-3.7s8.8,1.3,11.7,4c2.9,2.7,4.4,5.9,4.4,9.7s-.5,4.2-1.5,6c-1,1.8-3,4.1-6,6.7-2,1.8-3.3,3.1-3.9,3.9-.6.8-1.1,1.8-1.4,2.9-.3,1.1-.5,2.9-.5,5.3h-5.9Zm-.4,12.3v-7h7v7h-7Z"/><path class="cls-10" d="m46.8,201h-6.2v-39.2c-1.5,1.4-3.4,2.8-5.8,4.2-2.4,1.4-4.6,2.5-6.5,3.2v-5.9c3.4-1.6,6.4-3.6,9-5.9,2.6-2.3,4.4-4.5,5.5-6.7h4v50.3Z"/><path class="cls-10" d="m62.5,176.3c0-5.9.6-10.7,1.8-14.3,1.2-3.6,3-6.4,5.4-8.4,2.4-2,5.4-2.9,9.1-2.9s5,.5,7.1,1.6c2,1.1,3.7,2.6,5,4.7,1.3,2,2.4,4.5,3.1,7.5.8,2.9,1.1,6.9,1.1,11.8s-.6,10.6-1.8,14.2c-1.2,3.6-3,6.4-5.4,8.4-2.4,2-5.4,3-9.1,3s-8.6-1.7-11.4-5.2c-3.3-4.2-5-11-5-20.4Zm6.3,0c0,8.2,1,13.7,2.9,16.4,1.9,2.7,4.3,4.1,7.1,4.1s5.2-1.4,7.1-4.1,2.9-8.2,2.9-16.4-1-13.7-2.9-16.4c-1.9-2.7-4.3-4.1-7.2-4.1s-5.1,1.2-6.8,3.6c-2.1,3.1-3.2,8.7-3.2,16.9Z"/><path class="cls-10" d="m94.9,311.1v5.9h-33.1c0-1.5.2-2.9.7-4.3.8-2.3,2.2-4.5,4-6.7s4.5-4.7,8-7.6c5.4-4.5,9.1-8,11-10.6,1.9-2.6,2.9-5.1,2.9-7.4s-.9-4.5-2.6-6.2c-1.7-1.7-4-2.5-6.8-2.5s-5.3.9-7.1,2.7c-1.8,1.8-2.7,4.2-2.7,7.4l-6.3-.6c.4-4.7,2.1-8.3,4.9-10.8,2.8-2.5,6.6-3.7,11.4-3.7s8.6,1.3,11.4,4,4.2,6,4.2,9.9-.4,4-1.2,5.9c-.8,1.9-2.2,4-4.1,6.1-1.9,2.1-5.1,5.1-9.5,8.8-3.7,3.1-6.1,5.2-7.1,6.3-1,1.1-1.9,2.2-2.6,3.3h24.6Z"/><path class="cls-19" d="m285,73.1l6.2-.8c.7,3.5,1.9,6,3.6,7.5,1.7,1.5,3.8,2.3,6.2,2.3s5.3-1,7.3-3c2-2,3-4.5,3-7.5s-.9-5.2-2.8-7c-1.8-1.8-4.2-2.8-7-2.8s-2.6.2-4.3.7l.7-5.4c.4,0,.7,0,1,0,2.6,0,5-.7,7.1-2.1,2.1-1.4,3.1-3.5,3.1-6.3s-.8-4.1-2.3-5.6c-1.5-1.5-3.5-2.2-5.9-2.2s-4.4.8-6,2.3c-1.6,1.5-2.6,3.8-3.1,6.8l-6.2-1.1c.8-4.1,2.5-7.3,5.1-9.6,2.7-2.3,6-3.4,9.9-3.4s5.3.6,7.6,1.8c2.3,1.2,4.1,2.8,5.3,4.8,1.2,2,1.8,4.2,1.8,6.5s-.6,4.1-1.7,5.9-2.9,3.2-5.2,4.2c3,.7,5.3,2.1,6.9,4.3,1.6,2.2,2.5,4.8,2.5,8.1s-1.6,8.1-4.8,11.1c-3.2,3-7.2,4.6-12.1,4.6s-8-1.3-11-3.9c-2.9-2.6-4.6-6-5-10.2Z"/><path class="cls-16" d="m461.2,173.2c-.2.3-.4.6-.6,1h0c-1.8,3.7,1.9,8-1,12,2.1-.3.1-2.8,2.4-2.6,0,0,.8.2.9.3-.6,7.3-8,9-14,6.9-.3-4.1-.8-8.5-1.3-12.4,0,0,.2,0,.2,0,1.2-4.4,6-5.1,7.6-8.5,1.6,1.4,3.4,2.9,5.6,3.4h0Z"/><path class="cls-21" d="m452.9,125.7c4.2,1.1,15.8,2.1,18.7,3.3,14.2,6.8-3.1,34.9-10.4,44.2h0c-2.2-.5-4-2-5.6-3.4,1.2-3.5,3.4-19.3,6.8-27.8-2.4-.1-8-.5-9.8-.6.8-5.4,0-10.2.3-15.7h0Z"/><path class="cls-13" d="m452.8,125.7c-.2,5.7.5,10.8-.4,16.5-1.5.3-2.6.5-3.6.7.6-6.2.9-12.3.7-18.5,1,.1,2.1.2,3.3.2,0,.4,0,.7,0,1Z"/><path class="cls-20" d="m402.3,192.3c-.9-5.3-1.6-7-3.4-8.7-.2-2.8-.4-5.4-.6-7.8,11.8,3.3,37.4,7.1,48.6-5.9h0c3.9,26.5,2.1,57.7-1.5,84.3-35.5,6.4-44.1-14.7-65.5-14.9,5.9-11.2,13.6-31.7,19.2-43.9,1.7-1,2.9-2.1,3.2-3Z"/><path class="cls-13" d="m446.9,169.9h0c-11.2,13-36.9,9.2-48.6,5.9-.3-2.6-.6-5.1-1-7.6,14.8,3.3,38.9,5.6,49.1-7.2.2,3,.4,6,.6,8.9Z"/><path class="cls-9" d="m431.1,85.3c.7,4.6-2.8,5-3.4.5-.6-4.6,2.8-5.1,3.4-.5Z"/><path class="cls-16" d="m441.4,88.7c-.7-3.7-1.5-6-3.7-5.2h-.4c0-10.7-3.3-24.1-20.4-18.8-6.5-1.8-26.5-3.6-28,25.5-9.4-4.7-8.8,14.2,1.4,10.4.7,6.8,7.2,14.8,11.4,15.8.4,2.9.3,2.2.4,5.2,1.3,6.7,18.8,8.3,20.3-.2,9.5-3.8,15.9-15.6,14.5-26.5,1.1-.2,5.1-1.7,4.5-6.1Zm-35.2-4.1c2.7-.5,3.8,7.9,1.1,8.1-2.7.5-3.8-7.9-1.1-8.1Zm14.6,26.9c-5.5,1.1-9.8.5-14.2-4.5,1.3.9,14.3,2.1,19.9-.7h0c-1.1,2.8-2.5,4.3-5.8,5.2Zm9.1-22.5c-2.2.4-3.1-6.9-.9-7,2.1-.4,3.1,6.9.9,7Z"/><path class="cls-8" d="m406.6,107c1.3.9,14.3,2.1,19.9-.7h0c-3.2,7.8-14.7,7.4-20,.7Z"/><path class="cls-12" d="m418.9,324.5c-1.1-.6-7.2-3.8-7.2-3.8,0,0-.6-1.7,0-3.6,1.6,1.8,7.7,4.9,8.4,5.8.7.9,6.3,6.4,9.6,8.5,3.5,2.1,19.4,4.3,24.3-3,.1,1.1.2,2.2.2,3.4l.2.2c-13.9,10.6-26.3,4.4-35.4-7.6Z"/><path class="cls-11" d="m415,305.7c2.6-18.6,5.7-36,8.3-51.4,6.3,1,12.8,1.2,19.1.3-5.3,15.8-7.6,32.9-13.6,46.7-3.8-.3-8.5,2.7-5.7,6.9h0c-3.9-2.2-5.1,2.9-8.2-2.5h.1Z"/><path class="cls-13" d="m423.2,254.4c-7.3-.7-16.4,0-23.7-.8,1.7-2,3.2-3.8,3.5-6.1,6.3,3.4,13.2,5.6,20.2,6.8h0Z"/><path class="cls-9" d="m408.8,88.4c.8,5.3-3.5,5.8-4.1.6-.7-5.3,3.5-5.8,4.1-.6Z"/><path class="cls-21" d="m425.5,126c-.4-.3-.7-.6-1-.9.4-.1.7-.2,1-.3-.1-1.5-.6-3-1-4.2-.7.4-1.4.7-2.1.9-1.9,9.2-22.5,7-20.3-2.6-3.1.2-3.2,4.3-2.6,7.5-1.3-.2-2.6-.4-3.8-.6,0,0,0,.2,0,.2h0c7.2,5.5,7.5,24.4,22.1,23.1,2.2-.2,12.8-.4,14.5-2.9,4.1-5.9-.9-14.7-6.7-20.1Z"/><path class="cls-18" d="m424,52.3c-25.1-8.7-51.7,9.4-40.4,38.3,1.3-1.6,3.9-2,5.4-.5,1.5-29.1,21.6-27.3,28-25.5,17.1-5.3,20.5,8.2,20.4,18.8h.4c.4-.3.9-.3,1.4,0-.8-18.4-4.5-26.8-15.1-31.1Z"/><path class="cls-18" d="m392.4,107.1c-.9-1.8-1.6-3.9-2.1-6.5-1.2.2-2.5.4-3.7.2,1.5,2.5,3.3,4.5,5.4,6.5-1.8,8.3-3.5,11.2-2.5,18.1,3.2,0,6.6.3,9.9.9-.6-3.2-.5-7.3,2.6-7.5,0-.5-.1-1.2-.3-2.4-2.5-1.1-6.6-3.4-9.3-9.3Z"/><path class="cls-14" d="m390.6,177.6s0,0,0,0c0,0-.1.2-.2.2,0-.1,0-.2,0-.3Z"/><path class="cls-14" d="m389.8,178.9c-1,1.4-2.4,3.1-4.1,4.3,1.2-1.5,3-3.1,4.1-4.3Z"/><path class="cls-16" d="m389.9,197.2c-1.3-.5-7.5-9.9-3-7.6-.4-1.8,0-3.3-2-5.2,1.6-2.4,4.5-4.3,5.8-6.8,3,2.4,6.9,4.8,8.2,6,1.6,1.2,6.2,9.5.2,11.7h0c-2.3,1.3-5.6,2.3-9.2,1.9Z"/><path class="cls-13" d="m385.8,239.5c-.6,2-1.9,4-3,6.3h0c-1.6-1.9-2.8-4-3.3-6.4,2.1-.3,4.2-.3,6.3.2Z"/><path class="cls-21" d="m384.7,184.4c-23.4-17.8-66.3-32.3-12.6-52.8,3.6,4.7,4.5,11.2,5.4,16.4-2.7.7-9.4,3.2-12,4.5h0c10.1,7.6,16.4,16.7,25.3,24.9,0,0,0,0,0,.1,0,0,0,0,0,0-1.1,2.5-4.4,4.2-5.7,6.9,0,0,0,0-.1,0h0Z"/><path class="cls-20" d="m393.2,149.1c-4-.8-9.1-.2-13.3-.1.3-7-1.9-14.7-5.9-20.5,7.4-2.6,14-3.7,21.6-2.8,0,0,0,.2,0,.2h0c7.2,5.5,7.5,24.4,22.1,23.1,2.2-.2,12.8-.4,14.5-2.9,4.1-5.9-.9-14.7-6.7-20.1,0-.4,0-.9,0-1.3,10.7-3.5,14.3-1.1,24.1-.2.2,6.2-.1,12.4-.7,18.5-1.3.3-2.5.6-4.6,1.3,1.2,4.7,1.7,10.7,2.1,16.7-10.2,12.8-34.3,10.5-49.1,7.2-1-5.6-2.3-11.2-4.2-17.8h0l.2-1.3Z"/><path class="cls-13" d="m377.4,148.1c-1-6-2.1-13.6-7-18.3,1.2-.5,2.4-.9,3.6-1.3,4,5.8,6.2,13.4,5.9,20.5-.8,0-1.6,0-2.4,0,0-.3,0-.6-.2-.9Z"/><path class="cls-11" d="m373.6,302c-.2.5-.5,1-.7,1.4-2.4.4-3.2,3.7-6.3-3.4,2.8-1.5,2.4-3.6,2.6-6.2-1.4-1.6-2.5-2.6-4-3.6,2.9-8.9,8-26.3,15-36.8,0,.1,0,.2,0,.3,0-.1.1-.4.2-.5,0,0,0,.1-.1.2.6-4.9,4-9.6,5.6-14,6,1.2,11.8,5.2,17.2,8-1.5,6.1-7.4,8.4-9.1,15.6-2.4,8.7-15.9,29.8-20.3,38.8Z"/><path class="cls-12" d="m366.6,315c-2.9-2.9-4.8-3.5-8.8-6-13-8.2-10.7-26-16.9-26.7.9-.4,1.9-.6,2.8-.8h0c4.9.9,6.8,16.9,9.8,19.5,8.9,10.8,15.1,8.2,19.1,18.7h.1c-.4,2.3-1.3,4.4-3.5,5.9,3.5-3.1,1.1-7-2.6-10.7Z"/><path class="cls-15" d="m443,315.6l-11.2-7.2c4.2-9.7-13.1-8.6-8.7,0h0c-3.9-2.2-5.1,2.9-8.2-2.5h.1c.2-.9.3-1.7.5-2.7-1.1-.3-3-.5-3,2,.5,2.2-2.2,10.2-.7,12,1.6,1.8,7.7,4.9,8.4,5.8.7.9,6.3,6.4,9.6,8.5,3.5,2.1,19.4,4.3,24.3-3-1.1-8.3-7.1-12.2-11-12.8Z"/><path class="cls-15" d="m372.9,303.4c-2.4.4-3.2,3.7-6.3-3.4,2.8-1.5,2.4-3.6,2.6-6.2-2.1-2.4-3.9-3.7-6.7-5-2.3,0-3.6,4.5-4.1,3.8-1.6-2.3-3.8-5.9-4.8-7.1h-.1c-1.2-2.4-5.8-5.5-9.8-4.2h0c4.9.9,6.8,16.9,9.8,19.5,8.9,10.8,15.1,8.2,19.1,18.7h.1c.8-4.9-.7-10.8,2.5-15,.2-1.3-.8-1.8-1.6-2.8-.2.5-.5,1-.7,1.4Z"/><path class="cls-17" d="m340.9,282.2c6.2.7,4,18.5,16.9,26.7,5.5,3.2,15.5,9.2,12.4,15.5-7.1,9.2-12.4-1.9-15.8-8.2-4.1-6.2-14.8-8.5-18.1-16.4-2.9-5.2-1.3-16.3,4.6-17.7Z"/><path class="cls-4" d="m380.4,253.3c-7.1,10.5-12.2,28.1-15.2,37"/><path class="cls-4" d="m380.2,253.9c0-.1.1-.5.2-.6"/><path class="cls-4" d="m385.7,239.9c-1.9,4.2-5,9.1-5.6,13.9"/><path class="cls-4" d="m403,247.5c-1.5,6.1-7.4,8.4-9.1,15.6-2.7,9.4-16.5,30.5-21,40.2"/><path class="cls-4" d="m415,305.7c2.6-18.5,5.7-36,8.3-51.3"/><path class="cls-4" d="m428.8,301.4s0,0,0,0"/><path class="cls-5" d="m442.4,254.7c-5.3,15.8-7.6,32.9-13.6,46.7"/><path class="cls-4" d="m366.6,300c3.1,7.1,3.9,3.8,6.3,3.4"/><path class="cls-1" d="m340.4,282.2c-5.2,2.5-6.9,12.4-4,17.7,3.2,7.9,14,10.2,18.1,16.4,3.4,6.2,8.7,17.4,15.8,8.1,3.1-6.4-6.9-12.4-12.4-15.5-13.3-8.3-10.3-26.5-17.5-26.7"/><path class="cls-1" d="m372.5,303.4c.3-.3.6-1,.9-1.5.8,1,1.9,1.5,1.7,2.9-4.7,6,.9,15.9-5.9,20.9"/><path class="cls-1" d="m362.4,288.8c2.9,1.3,4.7,2.6,6.9,5-1.2,15.6-9.7-2.5-17.1-5.8"/><path class="cls-1" d="m339.1,283.1c4.6-3.2,12.5-2.1,14.4,2.5.5,2.1-2.9,2.9-4.6,4.4"/><path class="cls-1" d="m372.6,319.7c-4-10.5-10.1-7.9-19.1-18.8-3-2.7-4.9-18.6-9.8-19.4"/><path class="cls-1" d="m362.9,288.9c-7.3,2.5-.6,8.7-9.3-3.3"/><path class="cls-1" d="m454.2,331.8c.3-21.8-24.7-20.4-24.4-.4"/><path class="cls-1" d="m414.2,302.9s-2.1.5-1.8,2.2c.3,1.8-1.6,9.8-1.1,11.4,1.3,2.3,7.9,5.3,8.8,6.3.9,1,7.2,7.4,10.7,9.1,2.9,1.2,19.3,3.5,23.3-3.9"/><path class="cls-1" d="m436.2,317.8c-.4,0-11.2-9.6-15.3-10.2-3.8,2.2-5.5-.6-7-3.4"/><path class="cls-1" d="m443.1,315.6c0,0-11.2-7.2-11.3-7.3,0,0,1.3-3.7.2-4.7-3.4-2-10.2-.4-6.2,6.4,0,0,0,0,0,0"/><path class="cls-1" d="m423.1,308.3c-3.8-5.6,6.6-10,9.2-4.1"/><path class="cls-1" d="m454.6,331.8c-5.5,5.8-20.4,7.7-27.3,1.5-7.3-7.6-7.8-9.3-15.6-12.6,0,0-.6-1.7,0-3.6"/><path class="cls-1" d="m440.8,137.1c1.6,1.7,2.6,4.2,3.4,7.2h0c2.7,17,3.6,36.5,5.2,53.9"/><path class="cls-1" d="m393,150.4c3.5,12,5.2,21.3,5.9,33.2"/><path class="cls-1" d="m424.4,125.1c11.6-4.3,17.5-.8,28.4-.4-.4,6.1.5,11.6-.5,17.6-3.6.8-4.4.7-8.2,2"/><path class="cls-1" d="m399.1,153.4c-3.6-7.6-14.7-3.8-21.5-4.5"/><path class="cls-1" d="m399.5,126.4c-10-2.2-19.6-.5-29.1,3.5,5.1,4.9,6.1,12.9,7.1,19.2"/><path class="cls-1" d="m452.9,125.7c4.2,1.1,15.8,2.1,18.7,3.3"/><path class="cls-1" d="m452.9,141.4c1.5-.2,7.1.6,9.3.4"/><path class="cls-1" d="m464.6,137.7c-5.7,8.2-7.2,27.9-9.3,32.7-2,2.7-6.2,3.8-7.4,7.9"/><path class="cls-1" d="m471.6,129c7.3,2.2,5.8,12.8,2.2,23.4-3,8.7-9.5,15.3-13.6,22.6"/><path class="cls-1" d="m372.1,131.7c-53.7,20.4-10.7,35,12.6,52.8h0"/><path class="cls-1" d="m361.5,149.9c12.3,7.8,19.9,19.2,30.4,28.6"/><path class="cls-1" d="m376.8,148.2c-2.3.8-9.1,3.1-11.3,4.4"/><path class="cls-1" d="m395.6,125.9c7.2,5.5,7.5,24.4,22.1,23.1,2.2-.2,12.8-.4,14.5-2.9,4.3-6.3-1.6-15.8-7.8-21"/><path class="cls-4" d="m383.9,183.6c.3.2.6.5.9.7h0c3.5,3.4.6,5.9,4.5,9.1"/><path class="cls-4" d="m390.6,177.6c7.3,5.9,10.5,4.9,11.8,15.2"/><path class="cls-4" d="m399.1,195.4c1.9-1.1,3-2.1,3.3-3.4"/><path class="cls-4" d="m387,189.7c-4.6-2.4,1.6,7,2.9,7.5,3.6.4,6.9-.6,9.2-1.8"/><path class="cls-1" d="m449.2,190.7c5.9,2.3,13.2.2,13.8-6.9,0,0-.8-.2-.9-.3-2.3-.2-.3,2.3-2.4,2.6,2.9-4-.8-8.3,1-12"/><path class="cls-5" d="m379.9,239.3c21.4.2,30.3,21.5,66.1,14.8"/><line class="cls-4" x1="399.1" y1="195.4" x2="399.1" y2="195.4"/><path class="cls-5" d="m379.9,239.3c5.9-11.2,13.5-31.7,19.2-43.9"/><path class="cls-5" d="m449.4,198.2c-.6,15.5-1.6,40.6-4,55.9"/><path class="cls-5" d="m399.1,253.5c7.4,1,16.7.2,24.1.9"/><path class="cls-5" d="m379.5,239.3c.6,2.4,1.7,4.6,3.3,6.4"/><path class="cls-5" d="m390.8,177.3c-1.8,2.5-4.1,4.7-6.8,6.2"/><path class="cls-5" d="m455.8,169.9c1.4,1.6,3.3,2.7,5.3,3.2"/><path class="cls-5" d="m397.2,168.2c14.8,3.3,38.9,5.6,49.1-7.2"/><path class="cls-5" d="m398.2,175.8c11.8,3.3,37.4,7.1,48.6-5.9"/><path class="cls-2" d="m437.2,79.5c.7,8.5-.8,2.1-.3,15.4,1.4,10.9-5.1,22.7-14.5,26.5-4,1.7-11.8-.9-20.6-5-4.2-1-10.7-9-11.4-15.8"/><path class="cls-2" d="m432.4,77.2c-2.4-2.1-6.2-1.3-8,.2"/><path class="cls-2" d="m409.9,79.2c-3.7-2-8-.2-8.4,1.8"/><path class="cls-2" d="m412.9,127.1c-4.7.3-10.6-2-10.8-5.5,0-3,0-2.4-.4-5.3"/><path class="cls-2" d="m422.3,121.4c-1.8,5-4,5.4-9.5,5.7"/><path class="cls-2" d="m400.4,129.5c-1.4-2.7-2.6-10.3,1.5-10.7"/><path class="cls-2" d="m424.4,120.5c6.4,12.9-15.8,17.1-24,9.1"/><path class="cls-2" d="m427.8,85.8c.6,4.6,4,4.1,3.4-.5-.6-4.6-4-4.1-3.4.5Z"/><path class="cls-2" d="m404.7,88.9c.7,5.3,4.9,4.7,4.1-.6-.7-5.3-4.9-4.7-4.1.6Z"/><path class="cls-2" d="m425.6,97.5c.4,2.9-5.4,3.7-7.5,3.8"/><path class="cls-2" d="m427,106.1c-5.5,3.1-19.1,1.8-20.4.9,5.3,6.7,16.8,7.1,20-.6"/><path class="cls-1" d="m383.5,90.7c-8.4-22.2,4.7-39.9,26.3-40.3,19.6-.6,28.7,8.3,29.2,33.1"/><path class="cls-2" d="m416.9,64.7c.7-5.9-5.5-13.3-9.7-13.9"/><path class="cls-2" d="m437.2,79.5c-1-9.6-5-19.4-20.2-14.8-6.5-1.8-26.5-3.6-28,25.5"/><path class="cls-2" d="m388.9,90.2c-9.4-4.7-8.8,14.2,1.4,10.4"/><path class="cls-2" d="m437.6,83.5c4.2-1.4,6,10.8-.8,11.3"/><path class="cls-2" d="m386.4,100.5c1.5,2.6,3.4,4.7,5.5,6.8"/><path class="cls-2" d="m391.9,107.3c-1.9,8.4-3.5,11.3-2.4,18.4"/><path class="cls-1" d="m374,128.5c4,5.8,6.2,13.4,5.9,20.5"/><path class="cls-1" d="m449.5,124.7c.2,6.1,0,12.1-.7,18.1"/></svg>')}`;
export default image;