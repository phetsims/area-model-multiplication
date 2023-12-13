/* eslint-disable */
import asyncLoader from '../../../phet-core/js/asyncLoader.js';

const image = new Image();
const unlock = asyncLoader.createLock( image );
image.onload = unlock;
image.src = `data:image/svg+xml;base64,${btoa('<?xml version="1.0" encoding="UTF-8"?><svg id="Layer_1" xmlns="http://www.w3.org/2000/svg" width="548" height="373" viewBox="0 0 548 373"><defs><style>.cls-1,.cls-2,.cls-3,.cls-4,.cls-5,.cls-6{fill:none;}.cls-1,.cls-2,.cls-3,.cls-7{stroke-linejoin:round;}.cls-1,.cls-2,.cls-3,.cls-7,.cls-5,.cls-6{stroke-linecap:round;}.cls-1,.cls-5{stroke:#231f20;}.cls-2,.cls-4,.cls-7,.cls-6{stroke:#000;}.cls-3{stroke:#009245;}.cls-4,.cls-5,.cls-6{stroke-miterlimit:10;}.cls-4,.cls-8{stroke-width:3px;}.cls-7{fill:#fcee21;stroke-width:2px;}.cls-8{fill:#fff;stroke:#414042;}.cls-9,.cls-10,.cls-11,.cls-12,.cls-13,.cls-14,.cls-15,.cls-16,.cls-17,.cls-18,.cls-19{stroke-width:0px;}.cls-10{fill:#f3f2f4;}.cls-11{fill:#28180d;}.cls-12{fill:#5b2ac2;}.cls-13{fill:#d1d1d1;}.cls-14{fill:#ad7153;}.cls-15{fill:#d94e6a;}.cls-16{fill:#00a553;}.cls-17{fill:#ffcf69;}.cls-18{fill:#f4fcfe;}.cls-19{fill:#0071b5;}</style></defs><rect class="cls-18" y="0" width="548" height="373"/><rect class="cls-8" x="115.6" y="102.8" width="229.6" height="229.6"/><line class="cls-4" x1="254" y1="102.3" x2="254" y2="331.9"/><line class="cls-4" x1="115.6" y1="252.6" x2="345.2" y2="252.6"/><path class="cls-7" d="m508,36.3c-4.6,3.8-9.5,11-14.6,14-4.4-.8-11.4-3.4-16.5-4.9,3.9,8,4.6,10.5,7.1,16.3-3.7,5.2-6,11.9-10.4,16.4,8.6-1.3,20.2-3.4,20.2-3.4,0,0,6.3,7.2,11.6,14.8-.8-3.6,2.8-12.2,1.8-16.4,3.1-1.3,11.1-5.4,17.8-6.3-5.2-3.5-16.1-9.7-16.1-9.7,0,0-.3-13-1-20.9"/><path class="cls-16" d="m166.6,42.7v-5.9h32.4v4.8c-3.2,3.4-6.4,7.9-9.5,13.5-3.1,5.6-5.6,11.4-7.3,17.4-1.2,4.2-2,8.8-2.4,13.8h-6.3c0-3.9.8-8.7,2.3-14.3,1.5-5.6,3.6-11,6.4-16.2,2.8-5.2,5.7-9.6,8.8-13.1h-24.5Z"/><path class="cls-9" d="m179.5,188.6c0-.8,0-1.4,0-1.8,0-2.4.3-4.5,1-6.3.5-1.3,1.3-2.7,2.4-4,.8-1,2.3-2.4,4.4-4.3,2.1-1.9,3.5-3.4,4.2-4.5.6-1.1,1-2.3,1-3.7,0-2.4-.9-4.5-2.8-6.3-1.9-1.8-4.2-2.7-6.9-2.7s-4.8.8-6.6,2.5c-1.8,1.6-2.9,4.2-3.5,7.7l-6.3-.8c.6-4.7,2.3-8.2,5.1-10.7,2.8-2.5,6.5-3.7,11.2-3.7s8.8,1.3,11.7,4c2.9,2.7,4.4,5.9,4.4,9.7s-.5,4.2-1.5,6c-1,1.8-3,4.1-6,6.7-2,1.8-3.3,3.1-3.9,3.9-.6.8-1.1,1.8-1.4,2.9-.3,1.1-.5,2.9-.5,5.3h-5.9Zm-.4,12.3v-7h7v7h-7Z"/><path class="cls-9" d="m298.2,188.6c0-.8,0-1.4,0-1.8,0-2.4.3-4.5,1-6.3.5-1.3,1.3-2.7,2.4-4,.8-1,2.3-2.4,4.4-4.3,2.1-1.9,3.5-3.4,4.2-4.5.6-1.1,1-2.3,1-3.7,0-2.4-.9-4.5-2.8-6.3-1.9-1.8-4.2-2.7-6.9-2.7s-4.8.8-6.6,2.5c-1.8,1.6-2.9,4.2-3.5,7.7l-6.3-.8c.6-4.7,2.3-8.2,5.1-10.7,2.8-2.5,6.5-3.7,11.2-3.7s8.8,1.3,11.7,4c2.9,2.7,4.4,5.9,4.4,9.7s-.5,4.2-1.5,6c-1,1.8-3,4.1-6,6.7-2,1.8-3.3,3.1-3.9,3.9-.6.8-1.1,1.8-1.4,2.9-.3,1.1-.5,2.9-.5,5.3h-5.9Zm-.4,12.3v-7h7v7h-7Z"/><path class="cls-9" d="m298.2,304.7c0-.8,0-1.4,0-1.8,0-2.4.3-4.5,1-6.3.5-1.3,1.3-2.7,2.4-4,.8-1,2.3-2.4,4.4-4.3,2.1-1.9,3.5-3.4,4.2-4.5.6-1.1,1-2.3,1-3.7,0-2.4-.9-4.5-2.8-6.3-1.9-1.8-4.2-2.7-6.9-2.7s-4.8.8-6.6,2.5c-1.8,1.6-2.9,4.2-3.5,7.7l-6.3-.8c.6-4.7,2.3-8.2,5.1-10.7,2.8-2.5,6.5-3.7,11.2-3.7s8.8,1.3,11.7,4c2.9,2.7,4.4,5.9,4.4,9.7s-.5,4.2-1.5,6c-1,1.8-3,4.1-6,6.7-2,1.8-3.3,3.1-3.9,3.9-.6.8-1.1,1.8-1.4,2.9-.3,1.1-.5,2.9-.5,5.3h-5.9Zm-.4,12.3v-7h7v7h-7Z"/><path class="cls-9" d="m179.5,304.7c0-.8,0-1.4,0-1.8,0-2.4.3-4.5,1-6.3.5-1.3,1.3-2.7,2.4-4,.8-1,2.3-2.4,4.4-4.3,2.1-1.9,3.5-3.4,4.2-4.5.6-1.1,1-2.3,1-3.7,0-2.4-.9-4.5-2.8-6.3-1.9-1.8-4.2-2.7-6.9-2.7s-4.8.8-6.6,2.5c-1.8,1.6-2.9,4.2-3.5,7.7l-6.3-.8c.6-4.7,2.3-8.2,5.1-10.7,2.8-2.5,6.5-3.7,11.2-3.7s8.8,1.3,11.7,4c2.9,2.7,4.4,5.9,4.4,9.7s-.5,4.2-1.5,6c-1,1.8-3,4.1-6,6.7-2,1.8-3.3,3.1-3.9,3.9-.6.8-1.1,1.8-1.4,2.9-.3,1.1-.5,2.9-.5,5.3h-5.9Zm-.4,12.3v-7h7v7h-7Z"/><path class="cls-12" d="m46.8,201h-6.2v-39.2c-1.5,1.4-3.4,2.8-5.8,4.2-2.4,1.4-4.6,2.5-6.5,3.2v-5.9c3.4-1.6,6.4-3.6,9-5.9,2.6-2.3,4.4-4.5,5.5-6.7h4v50.3Z"/><path class="cls-12" d="m62.5,176.3c0-5.9.6-10.7,1.8-14.3,1.2-3.6,3-6.4,5.4-8.4,2.4-2,5.4-2.9,9.1-2.9s5,.5,7.1,1.6c2,1.1,3.7,2.6,5,4.7,1.3,2,2.4,4.5,3.1,7.5.8,2.9,1.1,6.9,1.1,11.8s-.6,10.6-1.8,14.2c-1.2,3.6-3,6.4-5.4,8.4-2.4,2-5.4,3-9.1,3s-8.6-1.7-11.4-5.2c-3.3-4.2-5-11-5-20.4Zm6.3,0c0,8.2,1,13.7,2.9,16.4,1.9,2.7,4.3,4.1,7.1,4.1s5.2-1.4,7.1-4.1,2.9-8.2,2.9-16.4-1-13.7-2.9-16.4c-1.9-2.7-4.3-4.1-7.2-4.1s-5.1,1.2-6.8,3.6c-2.1,3.1-3.2,8.7-3.2,16.9Z"/><path class="cls-12" d="m94.9,311.1v5.9h-33.1c0-1.5.2-2.9.7-4.3.8-2.3,2.2-4.5,4-6.7s4.5-4.7,8-7.6c5.4-4.5,9.1-8,11-10.6,1.9-2.6,2.9-5.1,2.9-7.4s-.9-4.5-2.6-6.2c-1.7-1.7-4-2.5-6.8-2.5s-5.3.9-7.1,2.7c-1.8,1.8-2.7,4.2-2.7,7.4l-6.3-.6c.4-4.7,2.1-8.3,4.9-10.8,2.8-2.5,6.6-3.7,11.4-3.7s8.6,1.3,11.4,4,4.2,6,4.2,9.9-.4,4-1.2,5.9c-.8,1.9-2.2,4-4.1,6.1-1.9,2.1-5.1,5.1-9.5,8.8-3.7,3.1-6.1,5.2-7.1,6.3-1,1.1-1.9,2.2-2.6,3.3h24.6Z"/><path class="cls-16" d="m285,73.1l6.2-.8c.7,3.5,1.9,6,3.6,7.5,1.7,1.5,3.8,2.3,6.2,2.3s5.3-1,7.3-3c2-2,3-4.5,3-7.5s-.9-5.2-2.8-7c-1.8-1.8-4.2-2.8-7-2.8s-2.6.2-4.3.7l.7-5.4c.4,0,.7,0,1,0,2.6,0,5-.7,7.1-2.1,2.1-1.4,3.1-3.5,3.1-6.3s-.8-4.1-2.3-5.6c-1.5-1.5-3.5-2.2-5.9-2.2s-4.4.8-6,2.3c-1.6,1.5-2.6,3.8-3.1,6.8l-6.2-1.1c.8-4.1,2.5-7.3,5.1-9.6,2.7-2.3,6-3.4,9.9-3.4s5.3.6,7.6,1.8c2.3,1.2,4.1,2.8,5.3,4.8,1.2,2,1.8,4.2,1.8,6.5s-.6,4.1-1.7,5.9-2.9,3.2-5.2,4.2c3,.7,5.3,2.1,6.9,4.3,1.6,2.2,2.5,4.8,2.5,8.1s-1.6,8.1-4.8,11.1c-3.2,3-7.2,4.6-12.1,4.6s-8-1.3-11-3.9c-2.9-2.6-4.6-6-5-10.2Z"/><path class="cls-19" d="m442.8,155.9c-.3.8-1,1.5-1.8,1.9,4.6.8,1.7,7.2-1.9,4.4,0,5.1-6.5.8-3.1-2.6-3.2-.2-2.5-5.2.7-4.1,0,.3.3.7.5.9h.6c-.3-.5-.7-.8-1.1-.9-.6-2.3,2.9-3,3.4-.7.4-2.4,3.6-.7,2.7,1.2Z"/><path class="cls-19" d="m443.3,249.7c3-2.6,3.9,3.3-.3,3.4,3.7,2.1-1.6,5.3-2.1,1.3-.5,1.4-1.9,2.3-3.1.9.3-.7.6-1.4.8-2.2-4.1,2.4-3.7-4.8,1.2-3.3-1.7-3.7,4.6-3.8,3.5-.1Z"/><path class="cls-19" d="m437.9,156.3h-.6c-.3-.2-.4-.5-.5-.8.5.1.9.4,1.1.8Z"/><path class="cls-17" d="m431,125.9c0,0,.1,0,.2,0,0,.1-.1.1-.2,0Z"/><path class="cls-11" d="m424.2,57.4c10.3,6.9,11.6,18.6,11.6,31.1-.5-.5-2.7-.1-3.2.3-.1-3.8-1.2-7.9-1.8-11.2.2,2.5,0,5-.6,7.4-1.7-6.1-5.3-11.7-10.2-15.8,1.7,3.5,2.1,7.6,1.4,11.4-1.7.4-3,2.9-1.1,3.9-.7,1.8-1.7,3.5-3,4.9-3.2-6.6-8.1-12.3-14.1-16.4.7,3.1.2,6.4-1.4,9.1-2.8-2.9-10.3-10.2-12.9-3.8-2.1,4.3-3.4,12.3-1.7,16.6-2.4-.8-4.4,1.7-5.1,4.3l-.6-.2c-17.1-29,16.4-55.2,42.9-41.7Z"/><path class="cls-9" d="m426.9,92.4c.7,4.6-2.8,5.1-3.4.5-.7-4.6,2.8-5,3.4-.5Z"/><path class="cls-19" d="m428.8,156.6c2.5,1.5.8,4.9-1.5,5.6,3.9,2.3-1.4,6.9-3.1,2.6-1.5,4.4-5.6-.9-2-3.7-4.8.5-2.1-6.3,1.1-2.8-.4-1.8,0-3.6,2.3-3,.2.9.4,1.8.6,2.7-.1-1.2,1.5-2.1,2.6-1.6Z"/><path class="cls-19" d="m428.9,245.7c0,.8.1,1.5.2,2.3,2.6-4,5.4,2.7.3,3.5,3.1,2.5-2.3,5.4-3.1,1.7-2,3.5-4.7-1.6-1.2-3.3-4.2-.3-.8-5.5,1.3-2.1-.1-1.6.7-2.9,2.4-2.1Z"/><path class="cls-11" d="m420.2,84.6c.5-1.2.9-2.5,1.1-3.9,1.9-.7,6.5,0,6.3,2.5-.2.3-.6.4-.9.4-.9,0-5.4,1.7-6.6,1Z"/><path class="cls-11" d="m421.4,80.7c-.2,1.3-.6,2.6-1.1,3.9-1.9-1-.6-3.5,1.1-3.9Z"/><path class="cls-19" d="m415,244h-.4c-.2-.3-.3-.6-.3-.9.3.2.6.5.7.9Z"/><path class="cls-19" d="m415,244c-.1-.4-.4-.7-.7-.9-.2-2.1,2.4-2.4,2.5-.2,1.8-3.1,3,2.4.3,3,2.9.9.6,6.9-1.9,3.7-.8,4.8-4.6-.6-1.9-2.8-2-.4-1.4-5,1-3.6,0,.3.1.6.3.9h.4Z"/><path class="cls-19" d="m405,158.2c1.3-.5,2.3.5,3.4,1-.7-5.3,7.1-2.9,3.4,1.1,3.5-1.2,4.8,4.4,1.2,4.9,2.2,4.9-6.1,5.9-5.1.6-2.8,3.9-5.9-2.6-2-4.2-2.5,1.2-3.4-2.9-.9-3.4Z"/><path class="cls-9" d="m404.7,95.8c.8,5.1-3.3,5.7-4,.6-.8-5.1,3.3-5.7,4-.6Z"/><path class="cls-19" d="m405.1,242.8c3.1,2.5-2.3,5.4-3.1,1.7-2,3.5-4.7-1.6-1.2-3.3-4.3-.3-.8-5.5,1.3-2.1-.1-1.6.7-2.9,2.4-2.1,0,.8.1,1.5.2,2.3,2.6-4,5.4,2.7.3,3.5Z"/><path class="cls-13" d="m401.2,254.6c5.9,3.1,12.9,6.3,20.2,8.5l-.2.7c-8.2-1-18.1-1.5-26.4-2.1,1.7-3.5,3-6.4,3.5-8.3,1,.3,2,.7,2.8,1.2Z"/><path class="cls-11" d="m395.7,116.3c2.2,1.6,4.3,3.1,6.2,4.2.5,3.3.1,5.6-.6,8.4-2.6-2.2-7.1-1.6-10.3-1.9-.4-4.8,1.4-7.3,3.6-11.7.3.3.7.6,1.1,1Z"/><path class="cls-11" d="m397.8,83.9c1.7-.7,7.6-1.7,7.2,1.2-.3,2.1-3.2,1.4-4.7,1.5-1.9.3-3.3.7-5.4,1.2-2.5-.4.6-3.1,2.8-4Z"/><path class="cls-10" d="m451.8,127.3c0-.3,0-.7,0-1-11.3-.6-15.7-3.3-24.9-.5,11.3,14.2,5.7,17-8.9,16.9-13.3,1.3-11.1-8.3-16.7-13.8h0c-9.4-4.3-19.2-1.2-29.2,2.4,5,4.8,5.9,12.5,6.9,18.5,4.4.2,9.4.2,13,.9h0c3.6,13.2,6,20.1,6.5,30.8l-1,.3c3.6,2.5,4.2,3.2,5.4,10-.5,1.4-3.1,3.4-6.6,4.3v.5c-5.5,11.9-14.3,40.5-21.8,56,25.9-6.6,44.8,17.7,70.8,13.1,3.7-41.5,4.9-82.6-.7-120.8,3.6-1.3,3.3-.8,6.8-1.6.9-5.5.2-10.5.4-16Zm-11.7,27.4c1.8-3.7,4.6,1.7.9,3.1,4.6.8,1.7,7.2-1.9,4.4,0,5.1-6.5.8-3.1-2.6-3.2-.2-2.5-5.2.7-4.1-.6-2.3,2.9-3,3.4-.7Zm5.4,94.8c1.3,1.8-.8,3.4-2.6,3.5,3.7,2.1-1.6,5.3-2.1,1.3-.5,1.4-1.9,2.3-3.1.9.3-.7.6-1.4.8-2.2-4.1,2.4-3.7-4.8,1.2-3.3-1.7-3.7,4.6-3.8,3.5-.1.3-.8,1.7-.9,2.3-.2Zm-13.5.4c-.5.9-1.6,1.4-2.6,1.7,3.1,2.5-2.3,5.4-3.1,1.7-2,3.5-4.7-1.6-1.2-3.3-4.2-.3-.8-5.5,1.3-2.1-.1-1.6.7-2.9,2.4-2.1,0,.8.1,1.5.2,2.3.7-2.6,4.5-.4,2.9,1.8Zm-13.5-5.5c-.3.7-.9,1.2-1.5,1.4,2.9.9.6,6.9-1.9,3.7-.8,4.8-4.6-.6-1.9-2.8-2-.4-1.4-5,1-3.6-.2-2.1,2.4-2.4,2.5-.2.7-2.2,2.6.1,1.8,1.5Zm-13.5-86.1c1.3-.5,2.3.5,3.4,1-.7-5.3,7.1-2.9,3.4,1.1,3.5-1.2,4.8,4.4,1.2,4.9,2.2,4.9-6.1,5.9-5.1.6-2.8,3.9-5.9-2.6-2-4.2-2.5,1.2-3.4-2.9-.9-3.4Zm14.7.3c.6-1.4,3-1.5,3.6-.2-.4-1.8,0-3.6,2.3-3,.2.9.4,1.8.6,2.7,2-5.1,6.7,2.1,1.1,4.1,3.9,2.3-1.4,6.9-3.1,2.6-1.5,4.4-5.6-.9-2-3.7-1.4.5-3.1-1.2-2.5-2.6Zm11.3-32.6c0,0,.1,0,.2,0,0,.1-.1.1-.2,0Zm-32,112.9c.7-1.1,2.8-.9,3.2.4-.1-1.6.7-2.9,2.4-2.1,0,.8.1,1.5.2,2.3,2.6-4,5.4,2.7.3,3.5,3.1,2.5-2.3,5.4-3.1,1.7-2,3.5-4.7-1.6-1.2-3.3-1.3.2-2.5-1.4-1.9-2.5Zm-12.8-2.3c.3-.7.9-1.3,1.7-1.6-3.6,0-.6-4.8,2.1-1.5,0-4,5.6-1.2,2.4,1.2,2.7-.5,3,3.8.3,3.7,1,3.9-5.2,3.6-3.8-.2-1.1,1.7-3.4,0-2.6-1.7Z"/><path class="cls-10" d="m411.1,115.5c5,2.4,11.6.9,13.1-4.6-5.2,3.3-16.6,2.2-17.9,1.2,2.8,3.2,2.6,2.4,4.8,3.4Z"/><path class="cls-19" d="m392.3,234.7c2.7-.5,3,3.8.3,3.7,1,3.9-5.2,3.6-3.8-.2-2.5,2.5-4-2.7-1-3.3-3.6,0-.6-4.8,2.1-1.5,0-4,5.6-1.2,2.4,1.2Z"/><path class="cls-13" d="m381,251.8c-1.2,1.8-2.3,3.7-3.3,5.7-1.5-1.7-2.6-2.7-3.1-5,1.9-.3,4.1-.6,6.5-.7Z"/><path class="cls-14" d="m444.8,311.4c0,3.1.3,6.3.4,9.4h-.3c-6.4-1.3-13.6.2-19.8,1.9,5.3,6.8,23.7,7.4,29.3-.4-.3-5.3-4.9-9-9.5-10.9Z"/><path class="cls-14" d="m459.9,173.2c7-8.9,23.7-36.2,10-42.7-2.8-1.1-14.1-2.1-18.1-3.2-.2,5.3.4,9.9-.3,15.1h.4c1.5,0,7.1.5,9.2.5-3.3,8.3-5.4,23.5-6.6,26.9-1.3,2.8-5,3.6-6.7,6.6.2,4.5.4,9.4.5,13.7,5.8,2.2,12.8.2,13.3-6.7,0,0-.8-.2-.8-.3-2.2-.2-.3,2.2-2.3,2.5,2.8-3.9-.8-8,1-11.6h0c.2-.3.4-.6.6-.9Z"/><path class="cls-14" d="m418,142.8c14.6.1,20.3-2.7,8.9-16.9-.7.2-1.4.4-2.2.7-.8-1.7-1.2-3.5-1.3-5.4,4.1-5.7,9.1-12.6,9.7-19.4,5.4.8,6-17-.5-13-.1-3.8-1.2-7.9-1.8-11.2.2,2.5,0,5-.6,7.4-1.7-6.1-5.3-11.7-10.2-15.8,1.7,3.5,2.1,7.6,1.4,11.4,1.9-.7,6.5,0,6.3,2.5-.2.3-.6.4-.9.4-.9,0-5.4,1.7-6.6,1-.7,1.8-1.7,3.5-3,4.9-3.2-6.6-8.1-12.3-14.1-16.4.7,3.1.2,6.4-1.4,9.1-2.8-2.9-10.3-10.2-12.9-3.8-2.1,4.3-3.4,12.3-1.7,16.6-3.3-1.1-6,4.3-5.2,7.2,1.1,3.6,5.8,8.1,8.5,6.7,2.5,6.7,6.8,8.1,11.6,11.5.5,3.3.1,5.6-.6,8.4,5.5,5.6,3.3,15.1,16.7,13.8Zm6.8-53.6c2.2-.4,3.2,6.8,1,7-2.2.4-3.2-6.8-1-7Zm-.6,21.7c-2.4,7.7-12.8,7.3-17.9,1.2,1.3,1,12.7,2.1,17.9-1.2Zm-29.2-23c-2.5-.4.6-3.1,2.8-4,2.4-1.4,10.7-.8,5.8,2.7-3,0-5.6.4-8.7,1.3Zm5.7,8.6c-.8-5.1,3.3-5.7,4-.6.8,5.1-3.3,5.7-4,.6Z"/><path class="cls-14" d="m436.3,317c4.1.6,5.2-3.9,4.4-7.1-4.9-1.6-10.4-3.2-13.6-7.5,0-6,9-30.1,10.5-36.3-5.3-.2-10.9-1.4-16.3-3.1-2.2,7.4-4.1,28-6.1,38.4,0,0-4.1,8.9-3.5,10.5,3.9,4,8.2,4.9,11.4,9l-.5-1.5c4.4-1.5,9.1-2.4,13.8-2.4Z"/><path class="cls-14" d="m397.5,181.8c-11.7-7.7-18.7-20.1-30.3-28.4,2.5-1.4,9-3.7,11.6-4.4-.8-5.1-1.7-11.3-5.2-15.9-52,19.8-10.3,33.9,12.2,51.1,0,0,0,0,0-.1,2.1,1.9,1.7,3.4,2.1,5.1-4.3-2.2,1.6,6.9,2.9,7.3,1.9.2,3.8,0,5.4-.4,3.5-.9,6.1-2.9,6.6-4.3-1.2-6.7-1.9-7.5-5.4-10Z"/><path class="cls-14" d="m381,251.8c-6.7,9.9-11.2,26.1-14,34.7-5.5,9.6-6.6,6.8-10.2,1.9h0c-.5,3.8-.2,6.7-1.1,8.4,8.6,10.4,14.5,8,18.4,18,.5-5.3-2.8-11.5.4-15.7,3.3-7.8,19.1-32.6,23.8-45.8-5-1.7-11.6-1.9-17.4-1.5Z"/><path class="cls-14" d="m346.5,277.7v.4c3,.8,4.9,8.3,6.8,13.7,3.5-5.7,1.3-17.1-6.8-14.1Z"/><path class="cls-15" d="m454.3,322.3c-5.6,7.8-24,7.3-29.3.4,6.3-1.7,13.5-3.2,19.8-1.9h.3c0-3.1-.4-6.3-.4-9.4-1.3-.6-2.7-1-4.1-1.5,2.5,10.9-11.7,5.6-18.2,9.5l.5,1.5c-3.3-3.9-6.8-4.9-11-8.4-.5,1.9,0,3.4,0,3.4,7.5,3.2,8,4.9,15.1,12.2,7.3,6.3,21.5,3.8,26.4-1.5v-.2c.6-1.3.9-2.8.8-4.2Z"/><path class="cls-15" d="m368.4,307.3c-4.4-3.5-5.7-2.9-12.7-10.5.9-1.7.5-4.5,1.1-8.3h0c-.7-1-1.3-2.1-1.7-3.2-.2,2-1,5.2-1.8,6.5-1.9-5.4-3.8-12.9-6.7-13.7v-.4c-1.2.3-2.2.6-3.1,1-5.6,1.4-7.1,12.1-4.4,17.1,7,11.9,14.8,7.6,22.3,24.1,6.7,9,19.6-5.4,7-12.7Z"/><path class="cls-5" d="m381,251.8c-6.7,9.9-11.2,26.1-14,34.7"/><path class="cls-5" d="m398.3,253.4c-4.7,13.3-20.5,38-23.8,45.8"/><path class="cls-5" d="m415.2,301.4c1.9-9.9,4-30.7,5.9-37.7"/><path class="cls-6" d="m437.6,266.2c-1.5,6.2-10.5,30.3-10.5,36.3,7,9.4,31.8,7.4,26.3,24.1"/><path class="cls-1" d="m343,278.7c-5.1,2.4-6.7,12-3.9,17.1,3.1,7.7,13.5,9.9,17.5,15.9,3.2,6,8.4,16.8,15.3,7.9,3-6.2-6.6-12-12-15-12.9-8.1-10-25.7-16.9-25.9"/><path class="cls-1" d="m374.5,299.2c-4.5,5.9,3.8,16.1-3.6,21.5"/><path class="cls-1" d="m341.8,279.6c4.7-2.4,12.1-4.7,12.9,3.8"/><path class="cls-1" d="m374.2,315c-3.8-10.2-9.8-7.7-18.4-18.1-3.5-4.3-4.9-18.2-9.5-18.8"/><path class="cls-1" d="m367,286.6c-2.9,6.4-6.5,6.8-6.9,6.2-1.8-2.5-5.2-5.8-5.5-9.4"/><path class="cls-1" d="m415.2,301.4c-4.8,11.6-5.9,9.8,5,16.6,2,2.2,7.8,7.7,10.4,8.8,3.9,1.6,20.9,1.9,23.8-4.6"/><path class="cls-1" d="m453.5,326.7c-5,5.3-19.1,7.8-26.4,1.5-7-7.3-7.6-9-15.1-12.2,0,0-.5-1.6,0-3.5"/><path class="cls-1" d="m443.4,140.6c4.3,16,4.3,39.1,5.1,56.8"/><path class="cls-1" d="m392,150.8c3.6,13.1,6,20,6.5,30.7"/><path class="cls-1" d="m424.3,126.7c10.1-3.9,15.3-1.1,27.5-.4-.3,5.9.5,11.2-.5,17-3.5.8-3.2.3-6.8,1.6"/><path class="cls-1" d="m396.5,152.7c-4.3-3.5-11.5-2.3-17.5-2.9"/><path class="cls-1" d="m400.2,128c-10-2.1-18.2-.7-28.1,3.3,5,4.8,5.9,12.5,6.9,18.5"/><path class="cls-1" d="m451.9,127.3c4.1,1.1,15.3,2,18.1,3.2"/><path class="cls-1" d="m451.9,142.5c1.4-.2,6.9.5,9,.4"/><path class="cls-1" d="m463.2,138.9c-5.5,8-7,26.9-9,31.6-1.9,2.6-6.2,3.9-7.1,7.6"/><path class="cls-1" d="m469.9,130.5c7,2.2,5.6,12.3,2.1,22.6-2.8,8.1-8.7,14.4-12.7,21.1h0c-.2.3-.3.5-.5.8"/><path class="cls-1" d="m373.7,133.1c-52,19.8-10.3,33.9,12.2,51.1"/><path class="cls-1" d="m363.5,150.8c12,7.5,19.1,18.5,29.4,27.7"/><path class="cls-1" d="m378.3,149.1c-2.2.8-8.8,3-11,4.2"/><path class="cls-1" d="m401.3,128.9c5.5,5.6,3.3,15.1,16.7,13.8,13.8.2,20.8-2.7,9-16.5"/><path class="cls-1" d="m400.2,128c.4.3.7.6,1.1,1"/><path class="cls-5" d="m385.1,183.4c4.4,2.9,1.3,6.3,5.2,9.5"/><path class="cls-5" d="m391.6,177.5c6.2,5.2,10.3,4.8,11.4,14.7"/><path class="cls-5" d="m388.1,189.2c-4.5-2.3,1.5,6.8,2.9,7.3,4.1.8,11.4-1.9,12-5.1"/><path class="cls-1" d="m448.3,190.2c5.8,2.2,12.8.2,13.3-6.7,0,0-.8-.2-.8-.3-2.2-.2-.3,2.2-2.3,2.5,2.8-3.9-.8-8,1-11.6"/><path class="cls-6" d="m374.5,252.6c25.9-6.6,44.8,17.7,70.8,13.1,0,0,0,0,0,0,.2,0,.4,0,.6,0"/><path class="cls-6" d="m374.5,252.6c7.5-15.4,16.3-44.1,21.9-56"/><path class="cls-6" d="m448.5,197.5c-.7,15.3-.4,48.5-3.2,68.2"/><path class="cls-6" d="m394.4,261.7c8.4.6,18.4,1.1,26.7,2.1"/><path class="cls-6" d="m374.5,252.6c.5,2.3,1.7,3.3,3.2,5.1"/><path class="cls-2" d="m430.8,77.7c1.5,10.5,5.8,23.5-1.8,35.1-7.6,15.3-16.5,16.3-33.2,3.6"/><path class="cls-2" d="m401.3,128.9c.7-2.8,1-5.1.6-8.5"/><path class="cls-2" d="m423.6,92.9c.6,4.6,4.1,4.1,3.4-.5-.6-4.6-4.1-4.1-3.4.5Z"/><path class="cls-2" d="m400.6,96.4c.7,5.1,4.8,4.5,4-.6-.7-5.1-4.8-4.5-4,.6Z"/><path class="cls-2" d="m422.1,102.8c.1,5.1-4.6,4.3-8.2,4.7"/><path class="cls-2" d="m424.2,110.8c-5.2,3.3-16.6,2.2-17.9,1.2,5.1,6.1,15.4,6.5,17.9-1.2Z"/><path class="cls-2" d="m429.3,71.3c1.7,4.3,2,9.2.8,13.7-1.7-6.1-5.3-11.7-10.2-15.8,3.1,6.5,2,14.8-2.7,20.2-3.2-6.6-8.1-12.3-14.1-16.4.7,3.1.2,6.4-1.4,9.1-2.8-2.9-10.3-10.2-12.9-3.8-2.1,4.3-3.4,12.3-1.7,16.6-3.3-1.1-6,4.3-5.2,7.2,1.1,3.6,5.8,8.1,8.5,6.7,2.1,5.3,2.7,4.7,5.9,7.7"/><path class="cls-2" d="m381.3,99.2c-24.5-47.4,60.1-67.7,54.5-10.7"/><path class="cls-2" d="m405,85.1c-.3,2.1-3.2,1.4-4.7,1.5-1.9.3-3.3.7-5.4,1.2-2.5-.4.6-3.1,2.8-4,1.7-.7,7.6-1.7,7.2,1.2Z"/><path class="cls-2" d="m421.4,80.7c-2.3.4-3,4.1-.2,4.1,1.4-.4,5.7-1,6.5-1.6.1-2.4-4.4-3.2-6.3-2.5Z"/><path class="cls-2" d="m432.6,88.8c6.4-3.8,5.8,12.6,1.1,13"/><path class="cls-2" d="m394.6,115.3c-2.2,4.3-4,6.9-3.6,11.7"/><path class="cls-2" d="m423.4,121.1c0,2.5.8,5,2.2,7.2"/><path class="cls-3" d="m431.2,126c0-.2.1-1.2-.1-.7"/><path class="cls-3" d="m431.2,126c0,0-.1,0-.2,0,0,.2.1.2.2,0Z"/><path class="cls-3" d="m396.4,127.5c-1-.6-3.4,2.1-3.1,3.2.6,2.2,4.3,3.1,3.9,5.7-.3,1.3-1.8,2.4-1.2,3.5.7,1.4,3,.1,4.4.8,1.9,1.1.2,4.6,2,5.9,1.4,1.1,3.6-.6,5.3,0,2.6.8,2.5,5.7,5.2,5.8,2.4,0,3-4.1,5.4-4.5,2.8-.6,5,4.2,7.5,2.9,1.6-.9,1.5-3.9,3.3-4.3,1.4-.4,2.6,1.2,4,1.6,3,1,5.1-3.3,2.4-5,1-1.1,2.1-2.1,3.1-3.2-2.8-.9-4-3.3-1.3-5.2.9-2.4-2.7-3-3.7-4.5-.6-.9,0-2.5,1-2.3-1.2-.7-2.3-1.3-3.5-2"/><path class="cls-3" d="m397.4,175.9c3.6-8.6,13.1,3.4,18.7-1,10.5-7.7,6.6-4.3,16.8-1.7,1.9-.1,6-4.6,7.9-4.7,1.7,0,6.8,1.8,7.3,4.4"/><path class="cls-3" d="m378.2,244.9c4.7-8.7,7.8,2.3,13.1,1.3,6.6-4.2,4.8,1.2,8.8,3.9,2.5,1,5.5-2.4,8-1,1.7,1.1.9,3.8,2.4,5.1,2.2,1.8,5.8-1.2,8.4,0,6.8,4.7,6.4,6.8,13.9,2.9,4.7.6,3.6,3.2,6,3.8,2.5.5,7.6-2,7.4-4.6"/><path class="cls-1" d="m425.5,322.7c4.8-1.7,28.1-6,17.7,4.5"/><path class="cls-1" d="m422.4,319.5c6.7-4,21,1.4,18.4-9.7"/><path class="cls-1" d="m444.7,311.6c.2,3.1.3,6.2.4,9.2"/><path class="cls-1" d="m355.1,284.9c-.2,2.1-.9,5.4-1.9,7"/><path class="cls-1" d="m356.8,288.5c-.5,3.8-.2,6.7-1.1,8.3"/><path class="cls-2" d="m424.2,164.7c0,0,0,.1,0,.2"/><path class="cls-2" d="m423.3,158.4c-3.2-3.6-5.9,3.2-1.1,2.8-3.6,2.7.4,8.1,2,3.7,1.7,4.2,7-.3,3.1-2.6,5.7-2,1-9.2-1.1-4.1-.2-.9-.4-1.8-.6-2.7-2.2-.6-2.7,1.2-2.3,3Z"/><path class="cls-2" d="m407.8,159.1c-3.4-3.5-6.9,3.5-2,2.6-3.9,1.6-.8,8.1,2,4.2-1,5.3,7.3,4.3,5.1-.6,3.6-.5,2.3-6.1-1.2-4.9,3.7-4-4.2-6.4-3.4-1.1l-.5-.2Z"/><path class="cls-2" d="m436.8,155.4c-3.2-1.1-3.9,4-.7,4.1-3.4,3.4,3,7.8,3.1,2.6,3.6,2.8,6.5-3.6,1.9-4.4,3.7-1.4.9-6.8-.9-3.1-.5-2.2-4-1.6-3.4.7Z"/><path class="cls-2" d="m436.8,155.4c0,.3.3.7.5.9h.6c-.3-.5-.7-.8-1.1-.9Z"/><path class="cls-2" d="m402,244.4c.6,3.8,6.2,1,3.1-1.6,5.1-.8,2.3-7.4-.3-3.5,0-.8-.1-1.5-.2-2.3-1.7-.8-2.5.6-2.4,2.1-2.1-3.4-5.6,1.8-1.3,2.1-3.5,1.7-.8,6.8,1.2,3.3"/><path class="cls-2" d="m426.3,253.1s0,0,0,.1"/><path class="cls-2" d="m426.3,253.2c.8,3.7,6.2.8,3.1-1.7,5.1-.8,2.3-7.4-.3-3.5,0-.8-.1-1.5-.2-2.3-1.7-.8-2.5.5-2.4,2.1-2.1-3.3-5.6,1.8-1.3,2.1-3.5,1.7-.8,6.8,1.2,3.3Z"/><path class="cls-2" d="m440.8,254.4c.5,3.9,5.8.8,2.1-1.3,4.2,0,3.3-6,.3-3.4,1.2-3.7-5.2-3.6-3.5.1-4.9-1.5-5.3,5.7-1.2,3.3-.3.7-.6,1.4-.8,2.2,1.1,1.4,2.6.6,3.1-.9Z"/><path class="cls-2" d="m389.6,233.2c-2-3-5.5,1.8-1.8,1.7-3.1.6-1.5,5.8,1,3.3-1.3,3.8,4.8,4,3.8.2,2.7,0,2.4-4.2-.3-3.7,3.2-2.5-2.3-5.2-2.4-1.2l-.3-.2Z"/><path class="cls-2" d="m414.3,243c-2.4-1.4-3,3.2-1,3.6-2.7,2.2,1,7.6,1.9,2.8,2.5,3.2,4.8-2.8,1.9-3.7,2.7-.6,1.5-6-.3-3-.1-2.2-2.7-1.9-2.5.2Z"/><path class="cls-2" d="m414.3,243c0,.3.1.6.3.9h.4c-.1-.4-.4-.7-.7-.9Z"/></svg>')}`;
export default image;