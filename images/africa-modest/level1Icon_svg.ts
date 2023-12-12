/* eslint-disable */
import asyncLoader from '../../../phet-core/js/asyncLoader.js';

const image = new Image();
const unlock = asyncLoader.createLock( image );
image.onload = unlock;
image.src = `data:image/svg+xml;base64,${btoa('<?xml version="1.0" encoding="UTF-8"?><svg id="Layer_1" xmlns="http://www.w3.org/2000/svg" width="150" height="196" viewBox="0 0 150 196"><defs><style>.cls-1{stroke-linejoin:round;}.cls-1,.cls-2{stroke-linecap:round;}.cls-1,.cls-2,.cls-3{stroke:#000;}.cls-1,.cls-2,.cls-3,.cls-4{fill:none;}.cls-2,.cls-3,.cls-4{stroke-miterlimit:10;}.cls-4{stroke:#fff;}.cls-5,.cls-6,.cls-7,.cls-8,.cls-9,.cls-10,.cls-11{stroke-width:0px;}.cls-6{fill:#e16ed0;}.cls-7{fill:#73523e;}.cls-8{fill:#805530;}.cls-9{fill:#00a553;}.cls-10{fill:#7f2c8a;}.cls-11{fill:#fff;}</style></defs><path class="cls-11" d="m45.2,140c-3.8,31.7,1.6,15.9-19.1,15.6l2.3-9.5c8.6-6,11.3-17.3,6.6-27,2.9-11,13.4-9.6,21.7-12.5,1,1.5,4.7,4.9,8.7,6.3-11.8,0-12.9,17.6-2.4,20l-2.4,8.5c21.4,6.4,36.2-25.4,15.5-35.8,0,0,0,0,0-.1,8.4,1.6,18.3.6,20.2,10.1-.7.6-1.5,1.6-2.1,2.4,1.5,2.6,3.7,4.4,5.3,6.8-3.5,5.5.4,10.4,3.2,11h0c.6,2.4,1.3,4.4,1.6,6.3-7.3,1.5-9.8,10.3-8.2,16.7-1.7-2.2-3-5.9-3.7-8.9h0c0-4.1,0-8-.3-13.2-8.8,7.8-7.8,22.1.7,30.2h.3c.6,3.1,1.4,6.3,2.2,9.6-2.9.5-4.4,2.4-5.5,5.6l-7.4-2.7c-2,5.8-2.2,11.4.8,16-9.8,1.3-20.5,1-29.9-.7h0c12.5,0,22.5-16.1,14.2-27.8-.1,0-7.5,5.4-7.6,5.4-2.2-6.2-7.3-7.8-11-6.6.6-8.1-.7-18.8-3.9-25.4h0Z"/><path class="cls-10" d="m102.9,135.8h0c-2.8-.6-6.7-5.5-3.2-11,1.2,3.7,2.3,7.5,3.3,11Z"/><path class="cls-6" d="m96.4,115.6c1,2.6,2.1,5.8,3.2,9.1-1.7-2.2-3.8-4.2-5.3-6.6.6-.9,1.4-1.8,2.1-2.4Z"/><path class="cls-10" d="m95.6,176.4c1.5,5.5,3,10.9,3.8,14.9-1.6.6-3.2,1.2-4.9,1.6v-.3c-6.7-2.2-6.4-15,1-16.3Z"/><path class="cls-6" d="m94.5,192.7v.3c-3.4,1-7.1,1.7-11,2.2-3.1-4.6-2.8-10.2-.8-16l7.4,2.7c-1.6,4.7.8,9,4.4,10.7Z"/><path class="cls-6" d="m93.4,166.8h-.3c-8.5-8-9.5-22.4-.7-30.1,1.1,11.3-1,19.1,1,30.1Z"/><path class="cls-6" d="m76.2,105.6c20.7,10.4,5.9,42.2-15.5,35.8l2.4-8.5c12.1,3.4,18.7-16.8,5.6-19.4,5.2.2,7.8-5.6,7.6-7.9Z"/><path class="cls-7" d="m76.2,105.6c-1.4,14.4-20.9,6.4-21.1-5.3-.9-2.6-2.6-5.7-5.7-8.2-4.8-4.6-6.1-21.4-1.7-27.7,4.8-8.2,16.6-12.7,25.5-10,8.3,2.6,10.6,14.3,11.4,21.6,3.8,23.2-10.6,17.5-8.4,29.6Zm-.2-14.1c1.5-.8,3.1-4.1,2.9-5.8-3.8,2.1-9.6,2.8-13.8,2.8,2.3,3.8,7,5.2,11,3Zm2.5-14.8c1.6-.5-.8-6.8-2.4-6.1-1.6.5.8,6.8,2.4,6.1Zm-18.4,5.2c1.9-.6-.8-7.6-2.6-6.7-1.9.6.8,7.5,2.6,6.7Z"/><path class="cls-10" d="m82.7,59.7c2.4,7.1,3,14.4,1.9,16.4h0c-.8-7.2-3.1-18.9-11.4-21.6-16.9-8.3-42.2,7.9-39.6,28.3-12.9-35.7,35.5-54.3,49.1-23.2Z"/><path class="cls-11" d="m78.9,85.7c.3,7.7-10.5,9.2-13.8,2.8,4.2,0,10.1-.7,13.8-2.8Z"/><path class="cls-5" d="m78.5,73.2c1.6,3.9-1,4.9-2.5,1-1.6-3.9,1-4.9,2.5-1Z"/><path class="cls-10" d="m71.3,114.5c10.2,4.9,2.1,21.6-8.2,18.4-14.2-4.2-5.6-26.2,8.2-18.4Z"/><path class="cls-6" d="m73.2,54.5c-23.4-5.6-35.8,20.1-23.8,37.6,3.1,2.5,4.7,5.6,5.7,8.2-2.9.1-5.6-.8-8-1.7h0c-6.9-2.9-11.2-9.1-13.5-15.8-2.6-20.4,22.7-36.6,39.6-28.3Z"/><path class="cls-8" d="m68.6,113.5c-1.1,0-2.1-.2-3.2-.6,1,0,2,.2,3.2.6Z"/><path class="cls-6" d="m67.9,166.7c8.3,11.6-1.8,27.8-14.2,27.7h0c-2.9-.4-5.7-1.1-8.4-1.9.5-1,1.1-3.6,1.6-6.8,7.5,1.8,16.3-5.8,13.3-13.6.1,0,7.5-5.4,7.6-5.4Z"/><path class="cls-5" d="m60.2,78c1.7,4.3-1.2,5.5-2.9,1.2-1.7-4.3,1.2-5.5,2.9-1.2Z"/><path class="cls-10" d="m60.2,172.1c3,7.8-5.8,15.3-13.3,13.6,1-6,1.9-14.3,2.3-20.2,3.8-1.1,8.9.5,11,6.6Z"/><path class="cls-10" d="m56.7,106.6c-.1.3-13.7,3.3-14,3.4,2.8-5.3,2.5-5.7,4.4-11.4,2.3.9,5.1,1.8,8,1.7,1.2,3.4,1,5.3,1.6,6.3Z"/><path class="cls-6" d="m35,119.1c4.7,9.7,2.1,21.1-6.6,27l6.2-25.9c0-.3.2-.7.4-1.1Z"/><path class="cls-7" d="m130.9,136.1c-4.3-1.5-9.6.2-13.1,3-2.6-1.1-6.8.9-7.1,3.7-9.9-4.3-17.1,7.3-14.3,16,3.4,4.9,10.2-.7,14.2-1.8-1.4,5.3,7.5,4.6,5.3-.7,0,0,0,0,0,0h0c1-.3,1.9-1,2.3-1.9,2.1,1.7,5.9,1.8,6.3-1.5,1.2-.1,2.6.6,3.6-.3,1.5-2.5,4.1-8.9-1.5-6.4h0c-2.3.5-4.9-1.1-3.3-3.5,1.8-2.7,6.6-3.6,7.6-6.5Z"/><path class="cls-7" d="m43.9,167.6c-1.5.5-1.6,3.9-3.7,2.8.6-1.3,1.3-3.4,0-4.6-1.3-2.3-.4-6.3,0-6.5-3.8-2.7-8.3-4-12.9-3.8-.2,1.3-.8,2.1-1,3.1-7,1.8-14.3,11.7-1.2,6.3,2.7,2.4-1,12.7,6.3,8.3,1,2.4,4.2,2,5.9.5,5.5,4.8,12.9-5.1,6.5-6.2Z"/><path class="cls-2" d="m83.4,68.4c2.4,13.8,4.2,22.3-7.3,32,2.2,15.9-11.3,16.2-19.3,6.2-1-3.8-2.3-11-7.3-14.5"/><path class="cls-2" d="m33.6,82.8c-14-48.5,56.8-52.3,51-6.8"/><path class="cls-2" d="m47.1,98.7c-6.9-2.9-11.2-9.1-13.5-15.8"/><path class="cls-2" d="m54.9,100.4c-2.9-.2-5.5-.8-7.7-1.7"/><path class="cls-1" d="m76.1,74.1c1.5,4,4,3,2.5-1-1.5-3.9-4-3-2.5,1Z"/><path class="cls-1" d="m57.3,79.1c1.7,4.4,4.7,3.2,2.9-1.2-1.7-4.4-4.7-3.2-2.9,1.2Z"/><path class="cls-2" d="m65.1,88.5c4.2,0,10.1-.7,13.8-2.8.3,7.7-10.5,9.2-13.8,2.8Z"/><path class="cls-2" d="m83.4,68.4c-2.7-19.5-27-18.1-35.6-4-4.4,6.3-3.2,23.1,1.7,27.7"/><path class="cls-2" d="m70.2,84.2c1.1-2.3,6.2-5.4,7.6-1.8"/><path class="cls-2" d="m47.1,98.7c-1.9,5.7-1.5,6-4.4,11.4"/><path class="cls-2" d="m73.2,54.5c-17-8.3-42.2,7.9-39.6,28.3"/><line class="cls-3" x1="27.3" y1="155.6" x2="27.3" y2="155.7"/><path class="cls-3" d="m28.4,146.1l-2.3,9.5c22.2.4,14.7,18.6,20.1-25.5"/><path class="cls-3" d="m56.5,106.8l-13.7,3.3c-10.2,2.3-11.3,28.3-14.4,36"/><path class="cls-3" d="m76.2,105.5c4.3.8,15.6,1.8,17.4,4.4,5,8.9,8.1,22,10.9,31.9"/><path class="cls-3" d="m98.4,160.6c4.2,1.1,8.5-2.4,12.1-3.5"/><path class="cls-3" d="m96.4,158.9c.4.9,1.1,1.4,2,1.7"/><path class="cls-3" d="m110.7,142.9c-9.9-4.3-17.1,7.3-14.3,16"/><path class="cls-3" d="m27.3,155.7c-.3,1.3-.8,1.9-1,2.9"/><path class="cls-3" d="m98.4,160.6c-.7-.2-1.4-.9-2.1-1.7-1.7-2.2-3-5.9-3.7-8.9"/><path class="cls-3" d="m99.5,191.3c-17,6.2-37.1,6-54.2,1.2,3.8-15.7,6.8-37.5,0-52.5"/><path class="cls-3" d="m91.6,125.1c1,12.2,1.4,21,.9,32.4-.2,10.5,5.1,24.2,7,33.8"/><line class="cls-3" x1="126.6" y1="146" x2="126.6" y2="146.1"/><path class="cls-3" d="m110.8,144.5c-1-3.7,3.7-6.6,7-5.4,3.5-2.8,8.8-4.5,13.1-3-1,2.9-5.8,3.8-7.6,6.5-1.6,2.4,1,4,3.3,3.4"/><path class="cls-3" d="m118.5,149.4c1.5,2.4,3.2-1.9,5-1.2,3.3,3.9-.4,10.2-5.4,6.1"/><path class="cls-3" d="m110.7,143.1c-5.4,1.2-6.1,13.2,0,13.6"/><path class="cls-3" d="m124.1,148.6c.5-1.1,1.4-2,2.5-2.6h0c5.6-2.5,3,4,1.5,6.4-1,.9-2.4.2-3.6.3"/><path class="cls-3" d="m112.8,152.7c-2.3,1-2.8,5.1-1.9,7.2,1.4,1.2,4.9,1.2,5.2-1.1.4-1.8-1.1-6.7-3.3-6.1Z"/><path class="cls-3" d="m115.9,156.3c1.1-.3,2-1.1,2.4-2.1"/><path class="cls-3" d="m39.6,164.4c-1.1-3.5-4.6-3.8-7.4-4.8-7-5.9-23.9,12.1-7,5.4,2.6,2.2-.5,7.6,2.9,9.2,5.4,1.7,12.7-14.2,2.9-7.7"/><path class="cls-3" d="m40.2,165.9c-.2-.5-.4-1-.6-1.5"/><path class="cls-3" d="m31.4,173.1c2,4.3,7.6.5,8.8-2.6,2.3-4.2-1.3-6.9-4.4-3.1"/><path class="cls-3" d="m37.1,173.5c5.5,5.3,13.2-4.8,6.8-5.9-1.5.5-1.6,3.9-3.6,2.9"/><path class="cls-1" d="m60.7,141.4c21.6,6.4,36.3-25.9,15.2-35.9"/><path class="cls-1" d="m71.3,114.5c10.2,4.9,2.1,21.6-8.2,18.4-14.2-4.1-5.6-26.4,8.2-18.4"/><line class="cls-1" x1="60.7" y1="141.4" x2="63.1" y2="132.9"/><path class="cls-3" d="m53.6,194.4c12.5.1,22.5-16,14.2-27.7"/><path class="cls-1" d="m49.4,165.5c3.5-.7,6.8-.7,10.1,5"/><path class="cls-1" d="m59.5,170.5c4.8,8-4.3,17.2-12.6,15.2"/><line class="cls-1" x1="60.3" y1="172.1" x2="67.9" y2="166.7"/><path class="cls-1" d="m82.7,179.2c-2,5.8-2.2,11.6,1,16.2"/><path class="cls-1" d="m94.5,192.7c-6.9-2.3-6.2-15.8,1.8-16.4"/><line class="cls-1" x1="82.7" y1="179.2" x2="90.1" y2="182"/><path class="cls-3" d="m28.4,146.1c8.6-6,11.3-17.4,6.6-27.1"/><path class="cls-1" d="m96.4,115.6c-.7.6-1.5,1.6-2.1,2.4"/><path class="cls-1" d="m94.3,118c1.6,2.5,3.6,4.5,5.4,6.7-3.5,5.5.4,10.5,3.2,11.1"/><path class="cls-1" d="m92.4,136.7c-8.8,7.8-7.8,22.1.7,30.2"/><path class="cls-3" d="m58.7,69.2c-2.5-.6-5.2.6-6.5,2.8"/><path class="cls-3" d="m71.1,67.2c.8-2.6,4-4,6.5-2.7"/><rect class="cls-9" x="106.4" y="103.5" width="20.8" height="20.8" transform="translate(-38.3 63.2) rotate(-26.2)"/><rect class="cls-4" x="106.4" y="103.5" width="20.8" height="20.8" transform="translate(-38.3 63.2) rotate(-26.2)"/></svg>')}`;
export default image;