/* eslint-disable */
import asyncLoader from '../../../phet-core/js/asyncLoader.js';

const image = new Image();
const unlock = asyncLoader.createLock( image );
image.onload = unlock;
image.src = `data:image/svg+xml;base64,${btoa('<?xml version="1.0" encoding="UTF-8"?><svg id="Layer_1" xmlns="http://www.w3.org/2000/svg" width="150" height="196" viewBox="0 0 150 196"><defs><style>.cls-1{stroke-linejoin:round;}.cls-1,.cls-2{stroke-linecap:round;}.cls-1,.cls-2,.cls-3{stroke:#000;}.cls-1,.cls-2,.cls-3,.cls-4{fill:none;}.cls-2,.cls-5,.cls-3,.cls-4{stroke-miterlimit:10;}.cls-5{fill:#0047fd;}.cls-5,.cls-4{stroke:#fff;}.cls-6,.cls-7,.cls-8,.cls-9,.cls-10,.cls-11,.cls-12,.cls-13,.cls-14,.cls-15{stroke-width:0px;}.cls-7{fill:#5b2ac2;}.cls-8{fill:#9a8063;}.cls-9{fill:#2e1f20;}.cls-10{fill:#1a1a1a;}.cls-11{fill:#af877b;}.cls-12{fill:#b52d00;}.cls-13{fill:#00a553;}.cls-14{fill:#f38080;}.cls-15{fill:#fff;}</style></defs><path class="cls-8" d="m56.7,95.8c-6.8,2.4-15.2-14.5-4.7-11.6,8.6-3.4-6.9-34.9,26-35.7,7.6.6,15.5,7.8,16.3,14.9,0,6.1,2.1,5.7,3.7,15.3,1.1,6.6,0,12.2-9.4,20.3-.5,2.4-1.8,9.3-1.9,11.1h-.3c-3.9,6.7-13.9,4.2-19.2.4-.8-6.7-5-12.4-10.6-14.7Zm33.9-24.1c1.8-.6-.9-7.3-2.5-6.5-1.7.6.9,7.3,2.5,6.5Zm-3.1,16.5c2.1-1.4,2.1-2.8,1.8-5.4-4.3,2.2-10,2.8-14.7,2.2,2.5,4.7,8.3,6.2,12.9,3.2Zm-6.8-25.3c2.9-2,6-2.6,9.1-1.8,0-4.3-13.5-4.4-9.1,1.8Zm-7.1,1.9c.5-5.3-5.7-3.5-8.8-1.4-.9.6-3.4,4.9-2.7,5.7,1,1,3.4-5,11.6-4.3Zm-2.9,11.6c2.1-.7-.8-8.1-2.8-7.2-2.1.7.8,8,2.8,7.2Z"/><path class="cls-14" d="m123.4,147.3c0,0,0-.2,0-.2-2.2-.8-5.1-.8-7.7-.2-6.2-10-9-34.2-18.3-37.8,1.3-5.3-6.1-5.7-9.4-7.5-.5,2.8-1.3,6.9-1.4,8.5h-.3c-3.9,6.7-13.9,4.2-19.2.4-.5-3.8-1.9-6.8-3.6-9.1-5,1-18,7.8-7.4,11.3-11.7,7.1-15.8,37.6-19,50.9,1.4,0,2.7.4,3.8,1.2,3.3,1.1,7,1.6,8,5.6.6-9.5,2.3-15.7,5.9-28.3,2,14.4,3.5,33.6.8,47.8,16.6,5,36.7,6.3,52.9,0-2-11-4.6-25.7-5.1-35.3,6.3,13.2,6.1,13.9,19.6,7.6,0-.2,0-.3,0-.4-6.2-.7-5.5-13,.1-14.3Zm-50.1,1.9c-.1,2.6-2.8.9-2.2-1,.6-11.2-1.2-22.5-5.3-33l.2-.5c1.5.4,2.9.9,4.4,1.5h0c2.9,10.8,3.9,22,3,33.1Zm21.1.9c-2.4-1.4-2.5-4.6-2.6-7.4-.2-9.1-2.4-18.2-6.4-26.4,1-.9,2.1-1.6,3.3-2.3,4.3,11.4,6.1,23.8,5.7,36Z"/><path class="cls-15" d="m88.9,114.4c4.1,11.4,6,23.7,5.5,35.8-2.4-1.4-2.5-4.6-2.6-7.4-.2-9.1-2.4-18.2-6.4-26.4,1-.9,2.1-1.6,3.3-2.3l.2.3Z"/><path class="cls-6" d="m90.7,67.9c1.7,4.2-1,5.3-2.6,1-1.7-4.2,1-5.2,2.6-1Z"/><path class="cls-15" d="m89.3,82.8c1.7,5.9-6.6,8.3-10.6,6.3-1.4-.9-3.2-2.8-4.1-4.1,4.7.6,10.4,0,14.7-2.2Z"/><path class="cls-10" d="m89.8,61.1c-3.1-.8-6.2-.2-9.1,1.8-4.4-6.2,9.1-6.1,9.1-1.8Z"/><path class="cls-10" d="m72.5,61.4c.4.4,1.6,2.6,1.1,3.3-8.2-.7-10.6,5.4-11.6,4.3-.7-4.4,6.8-9.3,10.4-7.6Z"/><path class="cls-15" d="m70.3,116.3c1.4,2.8,6.5,37.7,1,33.7,0-11.7-.9-23.7-5.5-34.8l.2-.5c1.5.4,2.9.9,4.4,1.5h0Z"/><path class="cls-6" d="m70.9,72c1.9,4.6-1.3,5.9-3.1,1.2-1.9-4.6,1.3-5.9,3.1-1.2Z"/><path class="cls-15" d="m56.2,112.6c-11.7,7.1-15.8,37.6-19,50.9-.8,0-1.7,0-2.5.2-.8-1.1,5.9-24.7,6.2-26.4,0,0,5.8-17.8,5.8-17.8,1.2-4.5,3.2-7.3,7.3-7.8.7.4,1.4.6,2.1.8Z"/><path class="cls-11" d="m49.1,170.3c.1.3.3.6.4,1-.2-.1-.3-.2-.5-.3,0-.2,0-.5.1-.7Z"/><path class="cls-9" d="m77.9,40.8c-17.3-3.6-38,5.9-39.6,25.3-3.5-.5-2.6-5.2-2.4-7.7h-.4c-10.5,13.8-.7,32.1-1.8,47.7-.6,7.7-3.7,17.4,2.7,23.4,7.9-10,11.6-23.3,9.9-36l.3-.3c3.6,3.5,8.4,6.2,13.8,5.3l.2-.2c-3.1-3.2-5.5-1.6-8.7-3.4-4.5-2.1-8.3-13.5,0-10.7,6.2-3.1.5-11.5,4.7-22.5,5.2-18.2,34.7-16.8,37.6,1.7.5-9.1-5.7-19.6-16.3-22.5Z"/><path class="cls-8" d="m144.6,140.1c-4.5-1.6-10.1.2-13.8,3.2-2.8-1.2-7.3,1-7.4,4.1-5.6,1.2-6.4,13.5-.1,14.3-1.8,5.9,7.7,5.5,5.5-.4,1-.3,2-1.1,2.5-2,2.2,1.8,6.2,1.9,6.6-1.6,1.2-.1,2.8.6,3.8-.4,1.6-2.6,4.3-9.3-1.5-6.7h0c-2.4.5-5.1-1.2-3.5-3.6,1.9-2.8,6.9-3.8,8-6.8Z"/><path class="cls-8" d="m55.2,173.6c-2.8-2.8-3.1,3.8-5.6,2.4.7-1.5,1.5-4.3-.5-5.1,0-.2,0-.5.1-.7-1.1-4-4.8-4.5-8-5.6-7.3-6.1-25.1,12.7-7.3,5.6,2.8,2.5-1,13.3,6.6,8.7,1.1,2.5,4.4,2.1,6.2.6,3.8,3.6,11.6-1,8.6-5.9Z"/><path class="cls-14" d="m43.5,52.1c-2.6,3.5-4.2,7.9-5.2,14.1-6.1-2-1.6-16.9,5.2-14.1Z"/><path class="cls-3" d="m86.4,110c-3.9,6.7-13.9,4.2-19.2.4-.8-6.7-5-12.4-10.6-14.7"/><path class="cls-3" d="m94.2,63.3c1.6,12.1,10.5,22.9-5.7,35.6-.5,2.6-1.8,9.4-1.9,11.5"/><path class="cls-1" d="m80.7,62.8c-4.4-6.2,9.1-6.1,9.1-1.8-3.1-.8-6.2-.2-9.1,1.8Z"/><path class="cls-1" d="m73.6,64.7c.5-5.3-5.7-3.5-8.8-1.4-.9.6-3.4,4.9-2.7,5.7,1,1,3.4-5,11.6-4.3Z"/><path class="cls-1" d="m88,68.9c1.6,4.2,4.3,3.2,2.6-1-1.6-4.2-4.3-3.2-2.6,1Z"/><path class="cls-1" d="m67.8,73.3c1.8,4.7,5,3.4,3.1-1.2-1.8-4.6-5-3.4-3.1,1.2Z"/><path class="cls-1" d="m74.6,85c4.7.6,10.4,0,14.7-2.2,1.7,5.9-6.6,8.3-10.6,6.3-1.4-.9-3.2-2.8-4.1-4.1Z"/><path class="cls-3" d="m56.7,95.8c1-.2,1.6-.8,1.4-2.1"/><path class="cls-1" d="m51.9,84.1c-10.5-2.9-2.1,14,4.7,11.6"/><path class="cls-1" d="m94.2,63.3c-2.9-18.5-32.4-19.9-37.6-1.7-4.2,11,1.5,19.4-4.7,22.5"/><path class="cls-3" d="m49.5,164.6c.9-6.9,5.7-24.8,9.3-33.9"/><line class="cls-3" x1="41" y1="137.3" x2="35" y2="160.6"/><path class="cls-3" d="m41,137.3l5.8-17.8c1.2-4.5,3.2-7.3,7.3-7.8"/><path class="cls-3" d="m112.4,139.5c1.5,3.6,1.8,4.4,3.3,7"/><path class="cls-3" d="m112.4,139.5c-4.1-9.8-7.5-28.2-15-30.5"/><path class="cls-3" d="m123.4,147.1c-2.2-.8-5.1-.8-7.7-.2h0c-10.2,2.2-13.2,10.5-6.4,18.1,4,2.9,10-1.7,13.9-2.9"/><path class="cls-3" d="m49.1,170.3c.4-2.4.2-4.5.4-5.6"/><path class="cls-3" d="m35,160.6c-.2.9-.2,2-.2,3.1"/><path class="cls-2" d="m108.7,189.7c-16.2,6.3-36.3,5-52.9,0,2.7-14.2,1.2-33.3-.8-47.8"/><path class="cls-3" d="m102.8,126.2c.4,18.1,1,43.1,5.9,63.5"/><path class="cls-1" d="m60.5,98.4c-22.3,1.1-27.8-32.7-17-46.3,14.2-18.1,51.4-16.4,50.7,11.2"/><path class="cls-3" d="m103.6,154.5c1.4,3.4,1.4,2.3,3,5.6"/><path class="cls-3" d="m81.6,79.7c.7-3,5.9-5.2,6.8-1.7"/><path class="cls-3" d="m123.5,148.9c-1.1-3.9,3.9-7,7.3-5.6,3.7-3,9.2-4.7,13.8-3.2-1.1,3-6.1,4-8,6.8-1.7,2.5,1,4.2,3.5,3.6"/><path class="cls-3" d="m131.5,154c1.5,2.5,3.3-2,5.2-1.3,3.4,4.1-.3,10.7-5.7,6.4"/><path class="cls-3" d="m123.4,147.3c-5.7,1.2-6.4,13.9,0,14.3"/><path class="cls-3" d="m137.5,153.2c.9-2.1,4.5-4.7,6.2-2.3.3,2.1-1.2,4.5-2.1,6.4-1,1-2.5.2-3.7.4"/><path class="cls-3" d="m125.7,157.4c-2.5.9-3.1,5.4-2.1,7.6,1.1,1,3.3,1.1,4.6.4,2.2-1.7.1-8.1-2.4-7.9Z"/><path class="cls-3" d="m128.8,161.2c1.1-.3,2-1.2,2.5-2.2"/><path class="cls-3" d="m49.5,171.3c-1.1-4.6-4.5-5.6-8.5-6.6-7.3-6.1-25.1,12.7-7.3,5.6,2.7,2.3-.5,8,3.1,9.6,3.8.8,6.9-4.4,8.3-7.4.1-4.7-5.6-1.2-7,.9"/><path class="cls-3" d="m40.3,178.8c2.1,4.5,7.9.5,9.3-2.7,2.4-4-1.2-7.3-4.5-3.5"/><path class="cls-3" d="m46.3,179.3c5.9,5.6,13.8-5.1,7.1-6.2-1.6.5-1.7,4-3.8,3"/><path class="cls-1" d="m43.8,52.2c-6.9-3.6-11.8,13.1-5.1,13.9"/><path class="cls-1" d="m35.6,58.4c-10.5,13.9-.7,32.1-1.8,47.7-.6,7.7-3.7,17.4,2.7,23.4,7.9-10,11.6-23.3,9.9-36"/><path class="cls-3" d="m64.1,101.2c-5,.9-18.7,7.8-7.9,11.4,8.7,1.3,17.1,4.1,24.5,8.9,3-4.3,7.4-7.6,12.3-9.4,1.7-.6,3.7-1.3,4.3-2.9,1.3-5.3-6.1-5.7-9.3-7.5"/><path class="cls-3" d="m65.8,115.2c4.6,11,5.4,23,5.5,34.8,5.4,3.9.4-30.7-1-33.7"/><path class="cls-3" d="m85.3,116.1c4,8.3,6.3,17.4,6.5,26.7,0,2.7.2,6,2.6,7.4.4-12.1-1.4-24.4-5.5-35.8"/><path class="cls-3" d="m68.4,168.2c-.9,5.7-2.2,11.2-4,16.7"/><path class="cls-3" d="m97.6,168c3.7,4,4.3,9.7,6.6,14.6"/><path class="cls-3" d="m56.5,112.5c-11.8,6.1-16.2,38.2-19.2,50.9"/><rect class="cls-13" x="117" y="103.9" width="20.8" height="20.8" transform="translate(-37.4 67.9) rotate(-26.2)"/><rect class="cls-12" x="95.8" y="13.9" width="20.7" height="20.7" transform="translate(2.7 58.1) rotate(-31)"/><polygon class="cls-7" points="37.3 38.3 26.3 55.9 8.7 44.9 19.7 27.3 37.3 38.3"/><rect class="cls-4" x="95.8" y="13.9" width="20.7" height="20.7" transform="translate(2.7 58.1) rotate(-31)"/><rect class="cls-4" x="117" y="103.9" width="20.8" height="20.8" transform="translate(-37.4 67.9) rotate(-26.2)"/><polygon class="cls-4" points="37.3 38.3 26.3 55.9 8.7 44.9 19.7 27.3 37.3 38.3"/><rect class="cls-5" x="41.1" y="148.3" width="20.8" height="20.8" transform="translate(-113.9 180.9) rotate(-79.7)"/></svg>')}`;
export default image;