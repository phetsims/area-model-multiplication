/* eslint-disable */
import asyncLoader from '../../../phet-core/js/asyncLoader.js';

const image = new Image();
const unlock = asyncLoader.createLock( image );
image.onload = unlock;
image.src = `data:image/svg+xml;base64,${btoa('<?xml version="1.0" encoding="UTF-8"?><svg id="Layer_1" xmlns="http://www.w3.org/2000/svg" width="548" height="373" viewBox="0 0 548 373"><defs><style>.cls-1,.cls-2,.cls-3,.cls-4{stroke:#000;}.cls-1,.cls-2,.cls-4{fill:none;}.cls-1,.cls-3{stroke-linecap:round;stroke-linejoin:round;}.cls-1,.cls-4{stroke-width:1.4px;}.cls-2,.cls-4{stroke-miterlimit:10;}.cls-2,.cls-5{stroke-width:3px;}.cls-3{fill:#fcee21;stroke-width:2px;}.cls-5{fill:#fff;stroke:#414042;}.cls-6,.cls-7,.cls-8,.cls-9,.cls-10,.cls-11,.cls-12,.cls-13,.cls-14,.cls-15,.cls-16{stroke-width:0px;}.cls-7{fill:#4f484a;}.cls-8{fill:#5b2ac2;}.cls-9{fill:#895a26;}.cls-10{fill:#d50700;}.cls-11{fill:#e2b992;}.cls-12{fill:#310b0e;}.cls-13{fill:#6c6360;}.cls-14{fill:#00a553;}.cls-15{fill:#fcd607;}.cls-16{fill:#f4fcfe;}</style></defs><rect class="cls-16" y="0" width="548" height="373"/><rect class="cls-5" x="115.6" y="102.8" width="229.6" height="229.6"/><line class="cls-2" x1="254" y1="102.3" x2="254" y2="331.9"/><line class="cls-2" x1="115.6" y1="252.6" x2="345.2" y2="252.6"/><path class="cls-14" d="m166.6,42.7v-5.9h32.4v4.8c-3.2,3.4-6.4,7.9-9.5,13.5-3.1,5.6-5.6,11.4-7.3,17.4-1.2,4.2-2,8.8-2.4,13.8h-6.3c0-3.9.8-8.7,2.3-14.3,1.5-5.6,3.6-11,6.4-16.2,2.8-5.2,5.7-9.6,8.8-13.1h-24.5Z"/><path class="cls-6" d="m179.5,188.6c0-.8,0-1.4,0-1.8,0-2.4.3-4.5,1-6.3.5-1.3,1.3-2.7,2.4-4,.8-1,2.3-2.4,4.4-4.3,2.1-1.9,3.5-3.4,4.2-4.5.6-1.1,1-2.3,1-3.7,0-2.4-.9-4.5-2.8-6.3-1.9-1.8-4.2-2.7-6.9-2.7s-4.8.8-6.6,2.5c-1.8,1.6-2.9,4.2-3.5,7.7l-6.3-.8c.6-4.7,2.3-8.2,5.1-10.7,2.8-2.5,6.5-3.7,11.2-3.7s8.8,1.3,11.7,4c2.9,2.7,4.4,5.9,4.4,9.7s-.5,4.2-1.5,6c-1,1.8-3,4.1-6,6.7-2,1.8-3.3,3.1-3.9,3.9-.6.8-1.1,1.8-1.4,2.9-.3,1.1-.5,2.9-.5,5.3h-5.9Zm-.4,12.3v-7h7v7h-7Z"/><path class="cls-6" d="m298.2,188.6c0-.8,0-1.4,0-1.8,0-2.4.3-4.5,1-6.3.5-1.3,1.3-2.7,2.4-4,.8-1,2.3-2.4,4.4-4.3,2.1-1.9,3.5-3.4,4.2-4.5.6-1.1,1-2.3,1-3.7,0-2.4-.9-4.5-2.8-6.3-1.9-1.8-4.2-2.7-6.9-2.7s-4.8.8-6.6,2.5c-1.8,1.6-2.9,4.2-3.5,7.7l-6.3-.8c.6-4.7,2.3-8.2,5.1-10.7,2.8-2.5,6.5-3.7,11.2-3.7s8.8,1.3,11.7,4c2.9,2.7,4.4,5.9,4.4,9.7s-.5,4.2-1.5,6c-1,1.8-3,4.1-6,6.7-2,1.8-3.3,3.1-3.9,3.9-.6.8-1.1,1.8-1.4,2.9-.3,1.1-.5,2.9-.5,5.3h-5.9Zm-.4,12.3v-7h7v7h-7Z"/><path class="cls-6" d="m298.2,304.7c0-.8,0-1.4,0-1.8,0-2.4.3-4.5,1-6.3.5-1.3,1.3-2.7,2.4-4,.8-1,2.3-2.4,4.4-4.3,2.1-1.9,3.5-3.4,4.2-4.5.6-1.1,1-2.3,1-3.7,0-2.4-.9-4.5-2.8-6.3-1.9-1.8-4.2-2.7-6.9-2.7s-4.8.8-6.6,2.5c-1.8,1.6-2.9,4.2-3.5,7.7l-6.3-.8c.6-4.7,2.3-8.2,5.1-10.7,2.8-2.5,6.5-3.7,11.2-3.7s8.8,1.3,11.7,4c2.9,2.7,4.4,5.9,4.4,9.7s-.5,4.2-1.5,6c-1,1.8-3,4.1-6,6.7-2,1.8-3.3,3.1-3.9,3.9-.6.8-1.1,1.8-1.4,2.9-.3,1.1-.5,2.9-.5,5.3h-5.9Zm-.4,12.3v-7h7v7h-7Z"/><path class="cls-6" d="m179.5,304.7c0-.8,0-1.4,0-1.8,0-2.4.3-4.5,1-6.3.5-1.3,1.3-2.7,2.4-4,.8-1,2.3-2.4,4.4-4.3,2.1-1.9,3.5-3.4,4.2-4.5.6-1.1,1-2.3,1-3.7,0-2.4-.9-4.5-2.8-6.3-1.9-1.8-4.2-2.7-6.9-2.7s-4.8.8-6.6,2.5c-1.8,1.6-2.9,4.2-3.5,7.7l-6.3-.8c.6-4.7,2.3-8.2,5.1-10.7,2.8-2.5,6.5-3.7,11.2-3.7s8.8,1.3,11.7,4c2.9,2.7,4.4,5.9,4.4,9.7s-.5,4.2-1.5,6c-1,1.8-3,4.1-6,6.7-2,1.8-3.3,3.1-3.9,3.9-.6.8-1.1,1.8-1.4,2.9-.3,1.1-.5,2.9-.5,5.3h-5.9Zm-.4,12.3v-7h7v7h-7Z"/><path class="cls-8" d="m46.8,201h-6.2v-39.2c-1.5,1.4-3.4,2.8-5.8,4.2-2.4,1.4-4.6,2.5-6.5,3.2v-5.9c3.4-1.6,6.4-3.6,9-5.9,2.6-2.3,4.4-4.5,5.5-6.7h4v50.3Z"/><path class="cls-8" d="m62.5,176.3c0-5.9.6-10.7,1.8-14.3,1.2-3.6,3-6.4,5.4-8.4,2.4-2,5.4-2.9,9.1-2.9s5,.5,7.1,1.6c2,1.1,3.7,2.6,5,4.7,1.3,2,2.4,4.5,3.1,7.5.8,2.9,1.1,6.9,1.1,11.8s-.6,10.6-1.8,14.2c-1.2,3.6-3,6.4-5.4,8.4-2.4,2-5.4,3-9.1,3s-8.6-1.7-11.4-5.2c-3.3-4.2-5-11-5-20.4Zm6.3,0c0,8.2,1,13.7,2.9,16.4,1.9,2.7,4.3,4.1,7.1,4.1s5.2-1.4,7.1-4.1,2.9-8.2,2.9-16.4-1-13.7-2.9-16.4c-1.9-2.7-4.3-4.1-7.2-4.1s-5.1,1.2-6.8,3.6c-2.1,3.1-3.2,8.7-3.2,16.9Z"/><path class="cls-8" d="m94.9,311.1v5.9h-33.1c0-1.5.2-2.9.7-4.3.8-2.3,2.2-4.5,4-6.7s4.5-4.7,8-7.6c5.4-4.5,9.1-8,11-10.6,1.9-2.6,2.9-5.1,2.9-7.4s-.9-4.5-2.6-6.2c-1.7-1.7-4-2.5-6.8-2.5s-5.3.9-7.1,2.7c-1.8,1.8-2.7,4.2-2.7,7.4l-6.3-.6c.4-4.7,2.1-8.3,4.9-10.8,2.8-2.5,6.6-3.7,11.4-3.7s8.6,1.3,11.4,4,4.2,6,4.2,9.9-.4,4-1.2,5.9c-.8,1.9-2.2,4-4.1,6.1-1.9,2.1-5.1,5.1-9.5,8.8-3.7,3.1-6.1,5.2-7.1,6.3-1,1.1-1.9,2.2-2.6,3.3h24.6Z"/><path class="cls-14" d="m285,73.1l6.2-.8c.7,3.5,1.9,6,3.6,7.5,1.7,1.5,3.8,2.3,6.2,2.3s5.3-1,7.3-3c2-2,3-4.5,3-7.5s-.9-5.2-2.8-7c-1.8-1.8-4.2-2.8-7-2.8s-2.6.2-4.3.7l.7-5.4c.4,0,.7,0,1,0,2.6,0,5-.7,7.1-2.1,2.1-1.4,3.1-3.5,3.1-6.3s-.8-4.1-2.3-5.6c-1.5-1.5-3.5-2.2-5.9-2.2s-4.4.8-6,2.3c-1.6,1.5-2.6,3.8-3.1,6.8l-6.2-1.1c.8-4.1,2.5-7.3,5.1-9.6,2.7-2.3,6-3.4,9.9-3.4s5.3.6,7.6,1.8c2.3,1.2,4.1,2.8,5.3,4.8,1.2,2,1.8,4.2,1.8,6.5s-.6,4.1-1.7,5.9-2.9,3.2-5.2,4.2c3,.7,5.3,2.1,6.9,4.3,1.6,2.2,2.5,4.8,2.5,8.1s-1.6,8.1-4.8,11.1c-3.2,3-7.2,4.6-12.1,4.6s-8-1.3-11-3.9c-2.9-2.6-4.6-6-5-10.2Z"/><path class="cls-13" d="m445,212.8h.1c0,1.7-.1,3.3-.1,5-1.7-.4-5-2.1-7.5-2.3h0s0,0,0,0c0-.2.4-2,.7-2.9,2.4,0,4.6.6,6.8.2Z"/><path class="cls-11" d="m439.4,255.9c-4.3,13.7-6.5,28.7-11.7,40.4h0c-4.6.6-5.9,4.8-4,7.4-4.6-2.5-5.4,3.5-9.2-3.3h0c2-16.7,4.1-30.2,6.4-44.5,6.1.1,12.3.1,18.4,0Z"/><path class="cls-13" d="m429.4,206.6c0,4.4-.5,9.7-1.7,13.8-.6-.2-.9-.7-1.8-.5.5-4.3.4-8.8.4-13.3,1,0,2.1,0,3.1,0Z"/><path class="cls-7" d="m429.4,206.6c0,4.4-.5,9.7-1.7,13.8-.6-.2-.9-.7-1.8-.5.5-4.3.4-8.8.4-13.3-7.8,0-15.7-.8-23.4-1.5.1.9-.3,2.4-.2,3.5-.8,0-2.2-.1-2.9-.4.2-1,.6-2.2,1.2-3.1h0c-.7-.2-1.5-.2-2.2-.3-5.7,13.2-12.4,25.5-17.6,38,8.6.2,15.7,5,20.6,12.3,5.4-8.9,9.3-17.3,15.7-24.6,1.2,6.9.5,17,.7,25.3,8,.2,16.1.2,24.2,0,2.4-12.3,2.3-25.1,2.6-38-1.7-.4-5-2.1-7.5-2.3h0s0,0,0,0c.1-.2.4-2,.7-2.9,2.4,0,4.6.5,7,.2,0-2.9.2-5.8.4-8.7-5.2,1.6-10.6,2.3-16.2,2.5Zm-29.1,10.2c.1-1.3-.3-3.1-.4-4,0,0-.1,0-.2,0,0,0,.1,0,.2,0h0c3.7,0,7.6-.9,11-1.8,0,.5.2,1.1.2,1.6-3.7,1.1-7.3,2.8-10.8,4.2Z"/><path class="cls-13" d="m410.8,211c0,.5.1,1.1.2,1.6-3.7,1.1-7.3,2.8-10.8,4.2.1-1.3-.3-3.1-.5-4,3.7,0,7.6-.9,11-1.8Z"/><path class="cls-13" d="m402.9,205.1c.1.9-.3,2.4-.2,3.5-.8,0-2.2-.1-2.9-.4.2-1,.6-2.2,1.2-3.1h0c.6,0,1.2,0,1.9,0Z"/><path class="cls-13" d="m399.8,212.8h0s-.1,0-.2,0c0,0,.1,0,.2,0Z"/><path class="cls-11" d="m379.7,256.7c0-.1.1-.4.2-.5,0,0,0,.1-.1.2.7-4.8,3.8-9.4,5.3-13.2,5.9,1.1,10.5,4.1,14.7,9l-.3.3c-.6,4.7-4.4,5.3-6.6,13.1-2.4,8.6-15.4,25.4-19.1,33.3-2.1.6-3.1,2.6-6.5-4.8,2.9-1.4,5.6-4,2.7-6.1h-.1c-.9-.9-1.8-1.7-2.8-2.5,2.8-8.4,6.1-19.3,12.7-29.2,0,.1,0,.2,0,.3Z"/><path class="cls-12" d="m340.1,276.3c6.6.8,4.2,19.8,18,28.5,4.3,2.7,4.2,4.1,7.8,7.2s7.6,6.4,5.4,9.4c-7.6,9.8-13.3-2-16.8-8.7-4.4-6.6-15.8-9-19.3-17.5-3.1-5.5-1.4-17.4,4.9-18.8Z"/><path class="cls-10" d="m457,328.8c1-8.9-6.9-17.3-12-17.4,0,0-12-7.8-12-7.8,4.5-10.6-14.2-8.9-9.3,0-4.6-2.5-5.4,3.5-9.2-3.3h0c.1-.8.3-1.6.4-2.4-.8-.2-2.7-.1-2.7,2.3.5,2.3-2.4,10.9-.8,12.9-.6,2,0,3.8,0,3.8,8.5,3.6,8.8,5.3,16.7,13.5,7.4,6.5,23,4.7,29-1.4l-.2-.3Z"/><path class="cls-10" d="m374.7,297.2c-.3.5-.7,1.3-1,1.6h0s0,0,0,.1c-2.1.6-3.1,2.6-6.5-4.8,2.9-1.4,5.6-4,2.7-6.1h-.1c-2.1-2.2-3.7-3.4-6.7-4.7-2.4,0-3.8,4.4-4.3,4.1-4.2-6.6-9.2-15.8-18.7-11.2,6.6.8,4.2,19.8,18,28.5,4.3,2.7,4.2,4.1,7.8,7.2,4.7,3.9,8.5,7.7,3.7,11.2l.4.3c7.3-5.4,1.5-16.8,6.6-23.1.2-1.5-1-2-1.8-3.1Z"/><path class="cls-4" d="m425,223.4c-11,8.3-15.9,19.7-23.1,31.7-4.9-7.3-12.1-12.1-20.6-12.3,5.2-12.5,11.9-24.8,17.6-38,15.4,1.1,31.6,3.8,46.7-.7-1.2,17.1.2,35.1-3.1,51.7-8,.2-16.1.2-24.2,0-.2-8.5.5-18.6-.7-25.5"/><path class="cls-4" d="m427.7,220.3c1.2-4.1,1.6-9.3,1.7-13.5"/><path class="cls-4" d="m426.2,206.8c0,4.4,0,8.8-.4,13.1,1.1-.2,1.4.6,2.3.7"/><path class="cls-4" d="m444.6,217.8c-1.4-.8-5-2.1-7.3-2.3"/><path class="cls-4" d="m445,212.8c-2.3.4-4.5-.3-6.8-.2-.3.9-.6,2.7-.7,2.9,0,0,0,0,0,0"/><path class="cls-4" d="m399.8,212.8c0,0,0-.1,0-.2"/><path class="cls-4" d="m399.8,212.8c3.7,0,7.6-.9,11-1.8,0,.5.1,1.1.2,1.6-3.7,1.1-7.3,2.8-10.8,4.2.1-1.3-.3-3.1-.5-4Z"/><path class="cls-4" d="m402.1,212.6c-.8,0-1.6,0-2.4.2,0,0,.1,0,.2,0"/><path class="cls-4" d="m416.9,206.6c-.6.9-1,2.3-1.2,3.3.8.2,2.1,0,2.8-.2,0-1,.4-2.2.2-3.1"/><path class="cls-4" d="m434,206.6c0,.4.9,1.8,1.1,2.7.8,0,1.5,0,2.2-.2,0-1-.4-1.9-1-2.7"/><path class="cls-4" d="m401,205.1c-.6.9-1,2.1-1.2,3.1.7.3,2.1.5,2.9.4,0-1.1.4-2.6.2-3.5"/><path class="cls-4" d="m443.3,205.1c.1,1.3,1,2.1.9,3.5.6.1.9-.1,1.4-.2"/><path class="cls-4" d="m379.8,256.2c-6.7,9.9-10,21-12.8,29.5"/><path class="cls-4" d="m379.7,256.8c0-.1.1-.4.2-.5"/><path class="cls-4" d="m385,243.4c-1.6,3.8-4.7,8.5-5.3,13.3"/><path class="cls-4" d="m399.4,252.5c-.6,4.7-4.4,5.3-6.6,13.1-2.5,8.8-15.6,25.5-19.3,33.7"/><path class="cls-4" d="m414.5,300.4c2-16.7,4-30.1,6.4-44.4"/><path class="cls-4" d="m439.4,256.2c-4.6,13.6-6.4,28.5-11.7,40.1"/><path class="cls-4" d="m366.5,292.5c2.9,7,4.3,8.1,7.7,6.4"/><path class="cls-1" d="m339.5,276.3c-5.6,2.7-7.4,13.2-4.3,18.9,3.5,8.5,14.9,10.9,19.3,17.5,3.5,6.6,9.2,18.5,16.8,8.7,2.2-2.9-1.8-6.2-5.4-9.4s-3.5-4.5-7.8-7.2c-14.2-8.9-11-28.3-18.6-28.5"/><path class="cls-1" d="m373.7,298.8c.3-.3.6-1.1,1-1.6.9,1.1,2,1.6,1.8,3.1-5,6.3.8,17.7-6.6,23.1"/><path class="cls-1" d="m362.9,283.3c3.2,1.4,5.1,2.8,7.3,5.4-1.7,2.4-3.2,4.2-5.9,5.5-2.4,1.3.4-.9-5.6-6.6-1.6-1.5-3.7-3.2-6.7-5.1"/><path class="cls-1" d="m353.2,279.5c1.4,2.5-2.8,3.4-4.6,5.1"/><path class="cls-1" d="m338.1,277.3c4.9-3.2,12.5-2.5,15.2,2.2"/><path class="cls-1" d="m373.6,317.2c-4.3-12.2-10-7.7-20.1-21-3-2.9-5.2-19.8-10.5-20.7"/><path class="cls-1" d="m363.4,283.4c-2.5-.4-4.1,4.4-4.6,4.1-1.8-2.4-4.2-6.8-6.2-8.6"/><path class="cls-1" d="m369.9,288.1c4.4,2.9-4.1,7.7-6.7,6.9"/><path class="cls-1" d="m457,328.8c.1-23.4-26.3-21.9-26.2-.5"/><path class="cls-1" d="m414.1,297.9s-2.2.5-1.9,2.4c.3,1.9-1.8,10.5-1.2,12.2,1.4,2.4,8.5,5.6,9.5,6.8,1,1.1,7.7,7.9,11.5,9.8,3.1,1.3,20.7,3.8,25-4.2"/><path class="cls-1" d="m437.7,313.8c-.4,0-12-10.3-16.5-10.9-4,2.4-5.8-.6-7.5-3.6"/><path class="cls-1" d="m445.1,311.5c-.1,0-12-7.7-12.1-7.8,0,0,1.3-3.9.2-5.1-3.7-2.1-11-.4-6.7,6.8"/><path class="cls-1" d="m423.6,303.7c-4.1-5.7,6.8-11,9.9-4.4"/><path class="cls-1" d="m457.4,328.9c-6.1,6.3-21.7,8.2-29.3,1.6-7.9-8.2-8.2-9.9-16.7-13.5,0,0-.6-1.8,0-3.8"/><path class="cls-9" d="m436.8,78.9c3.5.8,6.7,2.1,9.1,3.9-7.7-22.7-29.2-40.8-40.3-29.5-43.2,0-35.4,51.8-19.9,73.2,7.1-1.9,10.8-3.5,16.8-5.9-8.4-11.5-12.4-21.9-9.9-38.9,4.7-.5,10.3-.9,14-1.9,0-9.5-.4-6.6-.6-14.4,2.7,6.3,3.4,8.1,5.6,14,6.1-1.6,15.9-2.3,24-.7-5.2,14.2,4.5,14.6-1.9,29.4-2.6,4.4-6.1,9.7-10.5,12.3h0c8.5-1.5,17.1-.8,24.7-4.8-6.3-7.8-11.7-26.9-11.1-36.6Z"/><path class="cls-6" d="m424.8,91.1c-1.3-5.5,4.1-4.8,3.4-.3-.6,1.5-.7,3.1-3.4.3Z"/><path class="cls-15" d="m458.5,130.2c0-.3,0-.6,0-.9-12-.5-23-5.4-34.8-1.3,5.8,11.1-13.7,12.2-23.9,1.3-11.3-2.1-27,0-35.4,5,4.6,4.5,6.6,11.3,7.7,17.1,5.4,0,15.3-1.2,21.6.2,2.5,12,5.1,20.6,5.5,32.4,1.7,1.4,6,9.4-.3,11.5-.7,5.3-2.1,11.3-2.9,14.5,9.2,4.9,45.2,6.8,50.1,1.9,2.6-13.4,1-21.3-.4-33-.7-8.9-1.9-19.8-6.2-31.3,6.7-2.7,12.1-1.6,18.7-3.2.9-5.6.1-8.7.4-14.1Z"/><path class="cls-6" d="m406.6,92.4c.5,3.6-3.6,4-3.8.2-.5-4.1,3.5-4.3,3.8-.2Z"/><path class="cls-11" d="m469,131.9v.2c-2.8-1.1-6.6-1.1-10.5-2-.2,5.3.6,8.5-.4,14.1.3,0,1-.3,1.6-.1-3.5,8.8-5.7,25.7-6.7,27.1-1.9,2.6-5.9,3.6-7,7.5h-.3c.5,4,1.1,7.8,1.4,11.9,5.7,2.1,12.7.3,13.2-6.6,0,0-.8-.2-.8-.3-2.2-.2-.3,2.2-2.3,2.5,2.8-3.8-.8-7.9.9-11.4h0c6.8-9.1,23.8-35.4,10.9-42.9Z"/><path class="cls-11" d="m435.6,78.8h0c-8.2-1.7-17.9-1-24,.6-2.2-5.9-2.9-7.7-5.6-14,.3,7.8.6,4.9.6,14.4-3.7,1-9.3,1.4-14,1.9-2.5,17,1.5,27.5,9.9,38.9-.4.2-.9.4-1.2.5,2.5,4.8-.2,8.3-.7,8.2l-.4.4c10.8,10.6,29.1,9,23.5-1.8-3.4.4-4.3-3.7-4.2-6.2,6.6-1.3,10.9-8.2,14.2-13.7,6.4-14.8-3.3-15.3,1.9-29.3Zm-31.2,10.5c2.3-.3,3.3,5.9.5,6-2.4.5-2.9-5.9-.5-6Zm23.7,1.5c-.6,1.5-.7,3.1-3.4.3-1.3-5.5,4.1-4.8,3.4-.3Z"/><path class="cls-11" d="m399.1,183.9c-1.2-1.1-4.9-3.4-7.8-5.7,0,0,0,0,0-.1-8.6-7.9-14.5-16.6-24.2-23.7,2.1-1.2,2.5-3.1,4.7-3.9-1-4.9-2.8-10.7-6.3-14.9-9.9,6.8-26.3,14.3-13.4,25.3,9.8,8.4,24.2,17.3,33.5,23.8h0c2,1.7,1.7,3.3,2,5-1.8-.9-1.8,0-1.2,1.6,3.1,7.8,7.6,6.2,12.3,4.1,6.2-2,2-10.1.3-11.5Zm-8.7-4.6c.2-.3.4-.7.6-.9-.1.3-.3.6-.6.9Z"/><path class="cls-1" d="m395.3,209.5c9.3,5.3,45.6,7.1,50.7,2.2"/><path class="cls-1" d="m435.6,140.5c9.9,14.4,13.6,54.3,10.4,71.3"/><path class="cls-1" d="m398.9,195.4c-1,6.4-2.1,12.4-3.7,16.8"/><path class="cls-1" d="m393.5,152.2c3.4,11.8,4.9,20.1,5.6,31.7"/><path class="cls-1" d="m458.1,144.3c-6.5,1.6-11.6.5-18.2,3.1"/><path class="cls-1" d="m423.5,128c11.8-4.2,23,.7,35,1.2-.4,5.6.5,9.2-.4,15"/><path class="cls-1" d="m399.4,155.1c-5.5-7.6-21.4-3-28.8-3.8"/><path class="cls-1" d="m399.8,129.3c-11.3-2.1-27,0-35.4,5,4.9,4.8,6.8,12,7.9,18.3"/><path class="cls-1" d="m423.5,127.6c6.4,11.4-13.3,12.7-23.8,1.7"/><path class="cls-1" d="m458.1,130.1c3.9,1,8,1,10.8,2.1"/><path class="cls-1" d="m455.9,144.8c1.5-.2,2-.7,3.6-.8"/><path class="cls-1" d="m461.9,140.1c-5.3,7.3-7.5,29.3-8.9,31.2-1.9,2.6-5.9,3.6-7,7.5"/><path class="cls-1" d="m468.5,131.8c7,2.3,5.5,12.2,2.1,22.3-2.8,8.3-9.1,14.7-13,21.6"/><path class="cls-1" d="m365.2,135.9c-10,6.7-25.7,14.2-13,25,9.8,8.4,24.2,17.3,33.5,23.8"/><path class="cls-1" d="m363.5,151.8c11.7,7.4,18.9,18.3,28.9,27.2"/><path class="cls-1" d="m371.9,150.5c-2.2.8-2.4,2.6-4.6,3.8"/><path class="cls-1" d="m396,128.9c14.8,19.8,40.6,9.8,28.8-1.7"/><path class="cls-1" d="m410.9,49.8c10-1.3,28,11.2,35,33-8.8-6.6-25.4-5.7-34.3-3.5-2.2-5.9-2.9-7.7-5.6-14,.3,7.8.6,4.9.6,14.4-5.1,1.4-13.6,1.6-19.3,2.7-2.2-6.6-.6-15.3,7.3-22"/><path class="cls-1" d="m410.9,49.8c-3,.4-5.3,3.5-5.3,3.5-43.2,0-35.4,51.8-19.9,73.2,7.1-1.9,10.8-3.5,16.8-5.9-8.3-11.4-12.5-21.6-9.9-38.6"/><path class="cls-1" d="m423.3,120.5c8.5-1.6,17.1-.9,24.7-4.9-6.3-7.8-11.7-27-11.1-36.7"/><path class="cls-1" d="m435.6,78.8c-5.2,14.1,4.6,14.5-1.9,29.3-8.1,15.9-17.7,16.2-33,9.4"/><path class="cls-1" d="m419.3,97.4c1.1,1.9,1.6,3.1,4,1.8-.4,2.4-.8,2.4-2.6,3.7"/><path class="cls-1" d="m419.5,121.7c0,2.6.7,6.3,4,6.4"/><path class="cls-1" d="m429.1,84.3c-2.7-2.5-5-2.1-6.9-.2"/><path class="cls-1" d="m407.9,85.9c-2.6-2.3-6-.6-6.9,1"/><path class="cls-1" d="m428.1,90.8c-.6,1.5-.7,3.1-3.4.3-1.3-5.5,4.1-4.8,3.4-.3Z"/><path class="cls-1" d="m402.9,92.6c.2,3.8,4.3,3.4,3.8-.2-.2-4.1-4.3-3.9-3.8.2Z"/><path class="cls-1" d="m428.8,103.7c-4.1,6-14,6-18.1,2.1"/><path class="cls-1" d="m427.9,102.6c1.2.2.8.8,1.5,1.5"/><path class="cls-1" d="m411.9,104.9c-.8,0-1.4.8-1.7,1.7"/><path class="cls-1" d="m423.2,112.1c-1,.7-2.5,1-3.9.9"/><path class="cls-1" d="m401.4,121.4c2.4,5.1-.5,8-.8,7.9"/><path class="cls-4" d="m384.8,183.9c4.3,2.8,1.3,6.2,5.1,9.4"/><path class="cls-4" d="m391.2,178.1c7,5.7,10,4.7,11.3,14.5"/><path class="cls-4" d="m387.8,189.7c-4.4-2.3,1.5,6.7,2.8,7.2,4.5.5,10.4-1.3,11.9-5"/><path class="cls-1" d="m447.2,190.6c5.7,2.2,12.6.2,13.1-6.6,0,0-.8-.2-.8-.3-2.2-.2-.3,2.2-2.3,2.5,2.8-3.8-.8-7.9.9-11.4"/><path class="cls-3" d="m507.8,35.8c-4.6,3.8-9.5,11-14.6,14-4.4-.8-11.4-3.4-16.5-4.9,3.9,8,4.6,10.5,7.1,16.3-3.7,5.2-6,11.9-10.4,16.4,8.6-1.3,20.2-3.4,20.2-3.4,0,0,6.3,7.2,11.6,14.8-.8-3.6,2.8-12.1,1.8-16.4,3.1-1.3,11.1-5.4,17.8-6.3-5.2-3.5-16.1-9.7-16.1-9.7,0,0-.3-13-1-20.9"/></svg>')}`;
export default image;