/* eslint-disable */
import asyncLoader from '../../../phet-core/js/asyncLoader.js';

const image = new Image();
const unlock = asyncLoader.createLock( image );
image.onload = unlock;
image.src = `data:image/svg+xml;base64,${btoa('<?xml version="1.0" encoding="UTF-8"?><svg id="Layer_1" xmlns="http://www.w3.org/2000/svg" width="150" height="196" viewBox="0 0 150 196"><defs><style>.cls-1{stroke-linejoin:round;}.cls-1,.cls-2{stroke-linecap:round;}.cls-1,.cls-2,.cls-3{stroke:#000;}.cls-1,.cls-2,.cls-3,.cls-4{fill:none;}.cls-2,.cls-5,.cls-3,.cls-4{stroke-miterlimit:10;}.cls-5,.cls-4{stroke:#fff;}.cls-5,.cls-6{fill:#00a553;}.cls-7,.cls-8,.cls-9,.cls-10,.cls-11,.cls-12,.cls-13,.cls-6,.cls-14{stroke-width:0px;}.cls-8{fill:#5280df;}.cls-9{fill:#5b2ac2;}.cls-10{fill:#b18d6b;}.cls-11{fill:#8c6649;}.cls-12{fill:#b52d00;}.cls-13{fill:#805d50;}.cls-14{fill:#e6add9;}</style></defs><path class="cls-10" d="m123,148.3c0-.4-.2-.8-.3-1.2,0,0,.2,0,.2,0,0,.4,0,.8,0,1.2Z"/><path class="cls-8" d="m51.8,140.8c-6.7-21.6-16.2,8.6-13.4-13.6,3-16.8-.6-53,1.8-69.1,2.6-17.1,26.5-22.2,37.7-18.5,11.2,3.7,14,20.7,14.1,22.4-2.2-9.5-15.2-16.5-21.4-15.2-4.2.9-8.5,8.5-15.1,17-8.1,15.6,30.4,56.9,39.1,21.1,5.8,34.5,8.9,19.8,12.3,38,.9,9.4,1.4,21.7-1.8,33.3-4.3,14.1-22.3,21.4-34.6,9-6.1-4.5-18.1-14.2-18.8-24.5Z"/><path class="cls-14" d="m105.9,168.4c.8,9.7,1.2,12.3,1,21.8-16,6.3-33.3,7.9-51.2,1.6,3.3-10.7,4.3-26.1,1.2-38.9,15.7,17.9,36.9,29.5,48.2,3.3.2,4,.5,8.8.8,12.2Z"/><path class="cls-13" d="m95.1,78c-2.6,47-48.5,3.2-39.5-14.3,6.6-8.4,10.8-16.1,15.1-17,6.2-1.3,19.3,5.6,21.4,15.2.4,7.4,2.7,5.2,3,16.1Zm-6.7-6.8c1.7-.6-.9-7.2-2.5-6.4-1.7.6.9,7.2,2.5,6.4Zm-20.3,5.9c2-.7-.8-8-2.8-7.1-2,.7.8,7.9,2.8,7.1Z"/><path class="cls-7" d="m88.5,67.5c1.6,4.1-1,5.2-2.6,1-1.6-4.1,1-5.2,2.6-1Z"/><path class="cls-7" d="m68.3,72.9c1.8,4.6-1.3,5.8-3.1,1.2-1.8-4.6,1.3-5.8,3.1-1.2Z"/><path class="cls-13" d="m143.9,139.9c-4.5-1.5-10,.2-13.6,3.1-3.2-1.3-8.2,1.5-7.3,5.2-.1-.7-.2-1.2-.7-1.8-2.6-1-6.2-1.3-8.9-.3-3.6-9.2-4.7-15.7-6.5-23.3.9,9.4,1.4,21.7-1.8,33.3-1,8.7,10.3,7,14.7,3.1.7,1,1.9,1.7,3.1,1.8-1.8,5.8,7.7,5.4,5.4-.4,1-.3,1.9-1.1,2.4-2,2.2,1.8,6.1,1.9,6.5-1.6,1.2,0,2.7.6,3.7-.3,1.6-2.5,4.2-9.2-1.5-6.6,0,0,0,0,0,0-2.4.6-5-1.1-3.4-3.6,1.8-2.8,6.8-3.7,7.9-6.7Z"/><path class="cls-13" d="m53.9,172.5c-1.6.5-1.7,4.1-3.8,2.9.6-1.4,1.3-3.6,0-4.7-.5-1.2-1-2.4-1.7-3.4,0-5.1,2.8-23.8,3.5-26.5-4.1-12.6-9-7.6-11.7-5.6-.3,2.2-1.8,22.5-3.3,27.8-7.3.8-16.7,12.6-2.3,6.7,2.8,2.5-1,13.2,6.5,8.6,1,2.5,4.4,2,6.2.6,5.8,5,13.3-5.3,6.8-6.4Zm-10.9-2.6c0,0-.2,0-.3,0,.8-.3,1.6-.4,2.2,0-.7,0-1.4,0-2,0Z"/><path class="cls-11" d="m44.9,169.9c-.8,0-1.5,0-2.2,0,.8-.3,1.6-.4,2.2,0Z"/><path class="cls-3" d="m38.4,127.2c6.6-33-16.9-97.5,39.6-87.6,11.2,3.7,14,20.7,14.1,22.4.4,7.4,2.7,5.2,3,16.1.8,7.4-3.8,19.4-9,20.2"/><path class="cls-1" d="m85.9,68.5c1.6,4.2,4.3,3.1,2.6-1-1.6-4.2-4.3-3.1-2.6,1Z"/><path class="cls-1" d="m65.2,74.2c1.8,4.6,4.9,3.4,3.1-1.2-1.8-4.6-4.9-3.3-3.1,1.2Z"/><path class="cls-3" d="m74.9,85.5c4.3,1.1,8.9.4,12.8-1.8"/><path class="cls-3" d="m92.1,61.9c-2.2-9.5-15.2-16.5-21.4-15.2-4.2.9-8.5,8.5-15.1,17-4,5.1,5.4,38,30.6,34.5"/><path class="cls-2" d="m106.9,122.9c1.8,7.6,2.9,14.1,6.5,23.3"/><path class="cls-3" d="m123,148.3c-.1-.7-.2-1.2-.7-1.8-17.5-7.4-23.6,26.7-2.6,12.9"/><path class="cls-3" d="m48.3,167.3c.1-5.4,2.8-23.8,3.6-26.8"/><path class="cls-3" d="m40.1,135.2c-.3,2.2-1.8,22.5-3.3,27.8"/><path class="cls-3" d="m109.2,162.4c-2.1-.7-3.2-1-4-3.2"/><path class="cls-2" d="m106.9,190.3c-16,6.3-33.3,7.9-51.2,1.6,3.3-10.7,4.3-26.1,1.2-38.9"/><path class="cls-2" d="m105.1,156.2c.5,12.7,2.2,21.9,1.8,34.1"/><path class="cls-3" d="m67,62.9c-5.5-.1-7.4,2.8-8.2,4.2"/><path class="cls-3" d="m79.8,60c3.8-3.7,7.8-1.3,8.7-.1"/><path class="cls-3" d="m78,78.4c1.4-4.1,8.1-5.8,9.7-1.3"/><line class="cls-3" x1="139.4" y1="150.2" x2="139.4" y2="150.2"/><path class="cls-3" d="m123.1,148.6c-1.1-3.8,3.9-6.9,7.3-5.5,3.6-2.9,9.1-4.7,13.6-3.1-1.1,3-6.1,3.9-7.9,6.7-1.6,2.4,1,4.1,3.4,3.6"/><path class="cls-3" d="m131,153.6c1.5,2.5,3.3-1.9,5.1-1.2,3.4,4-.3,10.6-5.6,6.3"/><path class="cls-3" d="m123,147.1c-5.7,1.3-6.3,13.7,0,14.1"/><path class="cls-3" d="m136.9,152.9c.8-2,4.4-4.6,6.2-2.3.3,2.1-1.2,4.4-2.1,6.3-1,1-2.5.2-3.7.4"/><path class="cls-3" d="m124.5,157.3c-1.7,1.6-2.3,5.1-1.4,7.1,1.5,1.3,5,1.3,5.3-1.1.4-2-1.4-7.8-4-6Z"/><path class="cls-3" d="m128.3,160.8c1.1-.3,2-1.1,2.5-2.2"/><path class="cls-3" d="m50,175.4s0,0,0,0"/><path class="cls-3" d="m50,170.7c-1.1-4.5-4.5-5.5-8.4-6.5-7.2-6.1-24.7,12.5-7.3,5.5,2.7,2.2-.5,7.9,3,9.5,3.8.8,6.7-4.2,8.1-7.2.3-4.8-5.5-1.3-6.9.8"/><path class="cls-3" d="m40.9,178.1c2.1,4.4,7.8.5,9.1-2.7,2.4-4.4-1.4-7.2-4.6-3.2"/><path class="cls-3" d="m46.8,178.6c5.7,5.5,13.7-5,7-6.1-1.6.5-1.7,4-3.8,3"/><path class="cls-2" d="m38.4,127.2c-2.8,22.2,6.6-8,13.4,13.6.7,10.3,12.6,20,18.8,24.5,12.2,12.3,30.3,5.1,34.6-9,3.3-11.6,2.7-23.9,1.8-33.3-3.4-18.3-6.5-3.5-12.3-38"/><path class="cls-2" d="m47.3,110c6.9-1.4,14.4,2.2,17.5,8.5"/><path class="cls-2" d="m94.6,84.8c.2,10.3-3.5,25.6-16.7,23.7"/><path class="cls-2" d="m48.1,68.6c-1.3,15.1,7,22.7,12.7,33.2"/><path class="cls-2" d="m71,151.3c7.9,10,18.2,11.9,24.1,2.3"/><path class="cls-2" d="m100,119.7c-.3,5.1-1.8,26.2-16.7,23.1"/><rect class="cls-12" x="117.8" y="34.5" width="23.9" height="23.9" transform="translate(2.1 98.4) rotate(-41.9)"/><rect class="cls-9" x="117.8" y="101.9" width="23.9" height="23.9" transform="translate(-36.9 69) rotate(-26.2)"/><polygon class="cls-6" points="95.8 7.1 91.7 30.6 68.2 26.5 72.3 3 95.8 7.1"/><polygon class="cls-12" points="44.1 25.3 29.6 44.2 10.6 29.7 25.2 10.7 44.1 25.3"/><polygon class="cls-9" points="26.5 78.5 32.5 101.6 9.3 107.6 3.4 84.5 26.5 78.5"/><polygon class="cls-4" points="68.2 26.5 91.7 30.6 95.8 7.1 72.3 3 68.2 26.5"/><rect class="cls-4" x="117.8" y="101.9" width="23.9" height="23.9" transform="translate(-36.9 68.8) rotate(-26.2)"/><polygon class="cls-4" points="32.5 101.6 9.3 107.6 3.4 84.5 26.5 78.5 32.5 101.6"/><polygon class="cls-4" points="29.6 44.2 10.6 29.7 25.2 10.7 44.1 25.3 29.6 44.2"/><rect class="cls-4" x="117.8" y="34.5" width="23.9" height="23.9" transform="translate(2.1 98.3) rotate(-41.8)"/><rect class="cls-5" x="43.1" y="148.3" width="20.8" height="20.8" transform="translate(-112.2 182.8) rotate(-79.7)"/></svg>')}`;
export default image;