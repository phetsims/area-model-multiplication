/* eslint-disable */
import asyncLoader from '../../../phet-core/js/asyncLoader.js';

const image = new Image();
const unlock = asyncLoader.createLock( image );
image.onload = unlock;
image.src = `data:image/svg+xml;base64,${btoa('<?xml version="1.0" encoding="UTF-8"?><svg id="Layer_1" xmlns="http://www.w3.org/2000/svg" width="150" height="196" viewBox="0 0 150 196"><defs><style>.cls-1{stroke-linecap:round;stroke-linejoin:round;stroke-width:1px;}.cls-1,.cls-2,.cls-3{fill:none;}.cls-1,.cls-3{stroke:#000;}.cls-4,.cls-2{stroke:#fff;}.cls-4,.cls-2,.cls-3{stroke-miterlimit:10;}.cls-4,.cls-5{fill:#5b2ac2;}.cls-5,.cls-6,.cls-7,.cls-8,.cls-9,.cls-10,.cls-11,.cls-12,.cls-13{stroke-width:0px;}.cls-6{fill:#967246;}.cls-7{fill:#e1c0a5;}.cls-8{fill:#b52d00;}.cls-9{fill:#00a553;}.cls-10{fill:#fff;}.cls-11{fill:#ffd204;}.cls-12{fill:#0047fd;}.cls-13{fill:#050504;}.cls-3{stroke-width:1px;}</style></defs><path class="cls-7" d="m71.9,113.8c0-2.1-1.5-7.9-1.8-8.3-3.8-1.1-7.6-4.3-7.9-4.5,3.3-2.3,7.2-4.3,8.9-4.8-16.3-7.5-19.3-23.1-19.3-23.1l-.3-.2c1.6-2.4,6.1-7.2,7.1-8.2-.6-2.7-.6-13.6-.6-13.6,0,0,2.7,7.2,4.3,12.4,11-4.2,21.9-4.7,30.8-4,1.3,9.5,6.9,8.8,8.3,15.2.2,1.5,5.3,21.1-14.5,29.8-2.3,2.2-.3,8,0,11.3h0c-.5,2.3-1.9,7-5.2,8.1-4.2.9-10-6.3-9.9-10.1Zm16.4-43.4c1.4-.5-.3-5-1.7-4.5-1.4.5.3,5,1.7,4.5Zm-6.8,17.7c6.2-.3,8.6-5.9,8.6-5.9-1.6-.2-16.9.6-18.4.9,0,0,3.6,5.2,9.8,4.9Zm-13.2-15.9c1.6-.5-.4-5.7-1.9-5.1-1.6.5.4,5.7,1.9,5.1Z"/><path class="cls-13" d="m88.5,67.8c1.1,2.9-1.1,3.7-2.1.8-1.1-2.9,1.1-3.7,2.1-.8Z"/><path class="cls-10" d="m90.2,82.2c-3.2,7.8-14.5,7.2-18.4.9,1.5-.3,16.8-1.1,18.4-.9Z"/><path class="cls-13" d="m68.6,69.2c1.2,3.3-1.2,4.2-2.4.9-1.3-3.3,1.2-4.2,2.4-.9Z"/><path class="cls-6" d="m102.1,72c-1.4-3.3-2.6-7.2-3.5-11.8,8.2,1.3,13.5,3.3,13.5,3.3-23.2-36.1-59.3-22.3-56.6-16.9l-2.2,3.3c-2.1,0-2.8.6-4.3,3.6-13.1,20.8-4,45,8.2,56.6.8.1,8.8.2,14.1-.4-.6-2.7-1.2-4.3-1.2-4.3-3.8-1.1-7.6-4.3-7.9-4.5,3.3-2.3,7.2-4.3,8.9-4.8-16.3-7.5-19.3-23.1-19.3-23.1l-.3-.2c1.6-2.4,6.1-7.2,7.1-8.2-.6-2.7-.6-13.6-.6-13.6,0,0,2.7,7.2,4.3,12.4,11-4.2,21.9-4.7,30.8-4,1.3,9.5,6.9,8.8,8.3,15.2.2,1.5,5.3,21.1-14.5,29.8-.7.2-1,1.4-1,3,11.5-2.7,23.8-8,31.2-18.2,0,0-9.1-3.5-15-17.3Z"/><path class="cls-11" d="m112.7,142.1c-1.9-4.1-9.4-24.2-9.4-24.2-3.4-1.1-13.1-.8-13.3-.8-1.3-2.4-3.1-4.4-3.6-4.3.2,1,.3,2,.5,3h0c-.5,2.3-1.9,7-5.2,8.1-4.2.9-10-6.3-9.9-10.1-.3,0-3-.3-3.7,2.9-.1.2-10.4-2.5-13.4-1-1.2,1.5-8.5,19.4-12.6,22.1,2.4,5.4,10.4,13.8,18.2,10.4,0,0,.2-1.2.6-3.1,3.8,10.3,8.3,28.9,2.8,40.4,17.6,10.8,27.7,10.3,42.3.2-.3.5-4.1-24.8-3.7-35,1-.1,3.8-1.3,3.7-1.4h0c.8-2.3,2.7-5.3,6.8-6.5l-.2-.9Z"/><path class="cls-7" d="m136.3,138c2.6-1.8,1.8-2.1,1.8-2.1,0,0-4.7-1.2-8.3,1.5-3.5,2.7-.9.4-.9.4-.7.4-8.2,1.1-8.1,3.7,0,0-.7.3-1.6.9-5.8-.9-12,2.5-13.1,7.1h0s-.9.5-2.5,1l.9,3.1s-.2,1.9,1,2.5c6.4,3.8,9.3,3.5,14.3-1.8.3.1.7.2,1,.2-1.1,4.2,5.8,4.1,4.3-.5.8,0,2.5-1.5,2.5-1.6,2.3,1.8,4.5,1.2,5-1.9h.2c.4,1,3.6.3,3.5-.6-.1-.8.9-2.9.9-2.9,1.6-2.1-2.4-3-3.7-1.4h-.1c-1.6-.3-2.5-1-2.5-1,.6-3.3,1.1-3.3,5.4-6.6Z"/><path class="cls-7" d="m57,171.9c-.7-.5-1.9.9-2.6,1.8-.3,0-.9-.2-1.2-.2,1.1-1,.9-4-1.5-3.4l-.7-.2s6.3-20.9,6.3-20.9c-4,.3-7.3-1.5-9.7-3.7l-1.8,7.7s-2.6,1.4-4.1,10.1c-5.9-1.3-16.7,11.9-2.6,5.3l1.5,3.9c-.2.6-1,3-.7,3.8.5,1.2,3.8,1.7,4.9.3h0c.6,1.6,4.3,3.1,5.7.8,3.3,3,10.3-.6,6.5-5.2Z"/><path class="cls-3" d="m47.6,145.3c-.1.5-2,8.3-2,8.5"/><path class="cls-3" d="m45.8,153s-2.6,1.4-4.1,10.1"/><path class="cls-3" d="m56,48.1c-5.6-7.3,33.3-20.6,56.1,15.5-11.6-4.5-34.4-6.6-49.8,0-1.5-5.2-4.3-12.4-4.3-12.4,0,0,0,10.9.6,13.6-1.2,1.3-6.1,6.4-7.6,9.1-.5-5.6.9-16.9,2.6-20.2"/><path class="cls-3" d="m85.6,107.6c11.7-2.7,24.1-8,31.6-18.3-4.2-.2-17.3-15.5-18.5-29.1"/><path class="cls-3" d="m69.7,110c.6,0,1.2-.1,1.8-.2"/><path class="cls-3" d="m55.5,46.7l-2.2,3.3c-2.1,0-2.8.6-4.3,3.6-13.1,20.8-4,45,8.2,56.6,1.5,0,5.6.2,12.1-.2"/><path class="cls-3" d="m51.7,73.2s3,15.6,19.3,23.1c-11.7,4.7-24.2,15.4-1.4,13.7"/><path class="cls-3" d="m93.1,59.6c1.3,9.5,6.9,8.8,8.3,15.2.2,1.5,5.3,21.1-14.5,29.8-2.3,2.2-.3,8,0,11.3"/><path class="cls-3" d="m62.1,101.1c.3.2,4,3.4,7.9,4.5.7,1.3,2.1,8.1,2.1,10.8"/><path class="cls-3" d="m84.3,97.6s-2.3,2.6-5.1.6"/><path class="cls-3" d="m71.9,113.8c-9.7,0,4,17.4,10.7,17.2,6.7,0,7.6-12.1,7.4-14-1.3-2.4-3.1-4.4-3.6-4.3"/><path class="cls-3" d="m71.5,115.3c5.6,10.2,13.5,12.6,15.7-.8"/><path class="cls-3" d="m68.2,116.8c-.1.2-10.4-2.5-13.4-1-1.2,1.5-8.5,19.4-12.6,22.1,2.4,5.4,10.4,13.8,18.2,10.4.8-4.1,3.3-16.9,3.6-18.1"/><path class="cls-3" d="m90,117.1c.2,0,9.9-.3,13.3.8,0,0,7.5,20,9.4,24.2"/><path class="cls-3" d="m105.5,152.9c-.3-5.9,6.4-11.9,13.7-10.5"/><path class="cls-3" d="m106.1,149.5c.1,0-2.9,1.3-4,1.4"/><path class="cls-3" d="m103.6,150.5l.9,3.1s-.2,1.9,1,2.5c6.5,3.8,9.4,3.4,14.4-1.9"/><path class="cls-3" d="m120.4,143.7c0-.2.5-3.1,1.1-3.6.7-.8,7.5-2.3,7.5-2.3,0,0-2.6,2.3.9-.4,3.5-2.7,8.3-1.5,8.3-1.5,0,0,.8.4-1.8,2.1-4.4,3.3-4.8,3.3-5.4,6.6,0,0,.9.7,2.5.9"/><path class="cls-3" d="m120.8,141.5c-4.8,1.5-6.7,11.1-.5,12.9"/><path class="cls-3" d="m132.4,147.6c0-3,6.3-4.3,4.8-.6,0,0-1,2.1-.9,2.9.1.8-3.1,1.6-3.5.6"/><path class="cls-3" d="m128.5,149.7c0-.7,2.1-4.1,3.7-1.8,1.4,3.8-1.1,7.7-5.2,4.2"/><path class="cls-3" d="m127.3,148.6s.7-.5,1.3-.2"/><path class="cls-3" d="m127.6,152.4s-1.6,1.5-2.4,1.5"/><path class="cls-3" d="m125,153.9c0,1.1,1.2,3-1.8,3.5-5.9.3-.4-11.5,1.8-3.5Z"/><path class="cls-3" d="m57.4,149c0,.1-6.3,20.9-6.3,21"/><path class="cls-3" d="m53.8,174.6c5.8-9.1,6.3,8.4-3.3,2.5"/><path class="cls-3" d="m48.7,172s2.9-2.8,4.2-1.9c1.6,1,.8,2.5.2,3.4-2.2,3.2-4.9,7.5-8.4,2.9"/><path class="cls-3" d="m42.2,172.4c1.3-1.1,5.1-4.2,6.3-2.9,1.8,2.6-2,5.4-3.7,6.8-1.1,1.4-4.4.9-4.9-.3-.3-.8.5-3.2.7-3.8l-1.5-3.9c-14.3,6.6-2.9-6.9,3.1-5.3"/><path class="cls-3" d="m100.3,129.9c1,2.8,4,55.4,5.8,55.9-14.5,10.1-24.6,10.7-42.3-.2,5.5-11.4,1-30.2-2.8-40.4"/><path class="cls-3" d="m56.5,116.8s6,1.3,7.2,9.2"/><path class="cls-3" d="m100,128.2s1.3-1.8,1.4-8.8"/><path class="cls-3" d="m54.2,173.6c-.4,0-.7.2-1.1.2"/><path class="cls-3" d="m63.7,67c-.3-2.3,2.1-3.7,4-2.7"/><path class="cls-3" d="m84.8,62.4c.6-1.1,3.1-.7,3.6,0"/><path class="cls-3" d="m68.6,69.2c1.2,3.3-1.2,4.2-2.4.9-1.3-3.3,1.2-4.2,2.4-.9Z"/><path class="cls-3" d="m88.5,67.8c1.1,2.9-1.1,3.7-2.1.8-1.1-2.9,1.1-3.7,2.1-.8Z"/><path class="cls-3" d="m79.8,71.1c.7,1.4,1.3,1.6,2.2.5,1,1.8,1.4,3.6.5,4.7"/><path class="cls-1" d="m90.2,82.2c-3.2,7.8-14.5,7.2-18.4.9,1.5-.3,16.8-1.1,18.4-.9Z"/><polyline class="cls-10" points="71.1 153.8 90.4 133.8 92.2 159.5 82.3 156.5 86.9 143.6 79.7 156.4"/><polyline class="cls-10" points="82.9 158.7 86.6 160 84.3 165.8"/><rect class="cls-5" x="120.7" y="34.1" width="24" height="24" transform="translate(3.1 100.3) rotate(-41.9)"/><rect class="cls-12" x="120.7" y="101.7" width="24" height="24" transform="translate(-36.5 70.3) rotate(-26.2)"/><rect class="cls-9" x="59.7" y="2.3" width="24" height="24" transform="translate(-1.2 8.3) rotate(-6.6)"/><polygon class="cls-8" points="23.9 48.3 28.4 71.9 4.8 76.4 .4 52.8 23.9 48.3"/><rect class="cls-2" x="59.7" y="2.3" width="24" height="24" transform="translate(-1.2 8.2) rotate(-6.5)"/><rect class="cls-2" x="120.7" y="101.7" width="24" height="24" transform="translate(-36.5 70.1) rotate(-26.2)"/><polygon class="cls-2" points="28.4 71.9 4.8 76.4 .4 52.8 23.9 48.3 28.4 71.9"/><rect class="cls-2" x="120.7" y="34.1" width="24" height="24" transform="translate(3.1 100.2) rotate(-41.8)"/><rect class="cls-4" x="43.1" y="148.3" width="20.8" height="20.8" transform="translate(-112.2 182.8) rotate(-79.7)"/></svg>')}`;
export default image;