/* eslint-disable */
import asyncLoader from '../../../phet-core/js/asyncLoader.js';

const image = new Image();
const unlock = asyncLoader.createLock( image );
image.onload = unlock;
image.src = `data:image/svg+xml;base64,${btoa('<?xml version="1.0" encoding="UTF-8"?><svg id="Layer_1" xmlns="http://www.w3.org/2000/svg" width="150" height="196" viewBox="0 0 150 196"><defs><style>.cls-1{stroke-linejoin:round;}.cls-1,.cls-2{stroke-linecap:round;}.cls-1,.cls-2,.cls-3{stroke:#000;}.cls-1,.cls-2,.cls-3,.cls-4{fill:none;}.cls-2,.cls-3,.cls-4{stroke-miterlimit:10;}.cls-5,.cls-6,.cls-7,.cls-8,.cls-9,.cls-10{stroke-width:0px;}.cls-4{stroke:#fff;stroke-width:2.1px;}.cls-6{fill:#474763;}.cls-7{fill:#2c2826;}.cls-8{fill:#5b5b77;}.cls-9{fill:#bc8968;}.cls-10{fill:#00a553;}</style></defs><path class="cls-9" d="m133.6,141.3c-4.4-1.5-9.8.2-13.4,3.1-2.7-1.1-7.1,1-7.2,4-.7,0-1.4.5-2.1,1.1-1.8-.4-3.7-.6-5.4-.7-1.5-2.7-4.9-10.2-6.3-13.6-1.6,1.4-3.8,2.9-6.3,3.4-.1,3.7-.6,7.9-1.3,13.4,7.1,13.2,5.2,18.6,21.2,10.5-1.4,5.5,7.6,4.9,5.4-.7,0,0,0,0,0,0h0c1-.3,1.9-1,2.4-2,2.2,1.7,6,1.9,6.4-1.6,1.2-.1,2.7.6,3.7-.3,1.6-2.5,4.2-9.1-1.5-6.6h0c-2.3.5-5-1.1-3.4-3.5,1.8-2.7,6.7-3.7,7.8-6.6Z"/><path class="cls-6" d="m99.9,130.1c.5,1,1,1.9,1.6,2.9-1.9,2-5.2,4.9-8.6,5.6,0-1,0-1.9,0-2.9,2.5-1.7,4.8-3.6,7-5.7Z"/><path class="cls-8" d="m92.9,135.8c-2.7,23.4-.8,29.6,5.2,53.9-15.7,6.2-35.3,4.9-51.5,0,3.9-13.3,4.5-33.9-.8-46.5.7-2.2,1.4-4.4,2.1-6.5-5.1-1.1-9.8-3.4-14.2-6.2,3.9-8,7-19.9,18.1-19.8.3,10.2,13.6,7.7,20.2,7,4.3-.8,6.7-5.3,5.6-9.4,13.3-1.7,17.1,10.5,22.2,21.8-2.2,2.1-4.5,4-7,5.7Z"/><path class="cls-9" d="m83.4,94.7c-1.9,2.7-4.7,5.1-8.6,7-1.2,4.9,1.4,11.8-7.8,11.6-5.1,0-11.6-.4-11.6-4.6,0-5.5-2.9-10.6-6.6-11.5-2.8,3.5-9.1-1.8-10.1-4.9-1.6-2.6-.3-7.8,4.2-5.5,8.9-7.4-2.7-29.2,10-36.9,2.5-1.7,8.5-.9,11-.3,8.7-4.1,18,8.6,19.3,15.8.6,7.7,8,19.7.1,29.3Zm-3.7-21.2c1.7-.6-.8-7.1-2.5-6.3-1.7.5.9,7.1,2.5,6.3Zm-20.7,5.8c2-.7-.8-7.9-2.7-7-2,.7.8,7.8,2.7,7Z"/><path class="cls-5" d="m79.8,69.9c1.6,4.1-1,5.1-2.6,1-1.6-4.1,1-5.1,2.6-1Z"/><path class="cls-6" d="m77.9,109.5c.9,10.2-11.8,9-18.6,8.7-5.6.2-11.1-8.7-4.1-12-.6,6.4,5,7.3,11.9,7.2,7.5-.3,6.9-3.5,7.3-8.2,1.9,0,3.5,2.4,3.5,4.3Z"/><path class="cls-7" d="m87.9,62c-2.9-14.5-17.5-26.2-32.5-21.1-14.4-1.9-28.5,12.4-28,26.9,0,7.6,3.3,20,11.2,24.5-1.6-2.6-.3-7.8,4.2-5.5,8.9-7.4-2.7-29.2,10-36.9,2.5-1.7,8.5-.9,11-.3,8.7-4.1,18,8.6,19.3,15.8.6,7.7,8,19.7.1,29.3.7,3,2.1,8.3,2.1,8.3,8.3-12.9,6.6-28.2,2.4-41Z"/><path class="cls-5" d="m59.2,75.2c1.8,4.5-1.3,5.7-3,1.2-1.8-4.5,1.3-5.7,3-1.2Z"/><path class="cls-6" d="m50.1,97.7c-.9,1.6-1.6,4.6-4,3.9-6.1-.9-11.1-3.6-8.4-9.9.3.2.7.4,1,.5,1,3.1,7.3,8.4,10.1,4.9.4.2.8.3,1.3.5Z"/><path class="cls-6" d="m34.6,135.9c-1.3-.6-2.3-1.1-2.7-1.3l1.8-4.1c4.4,2.8,9.1,5.1,14.2,6.2-.5,1.3-.9,2.7-1.4,4.2-1.4-.2-8.1-3.1-12-5Z"/><path class="cls-7" d="m46.1,101.6c.5,8.7-5.8,15-9.2,22.1-4.7,4.4-9.4,8.2-15.7,9.1-5.6.4-10.6,2.8-7.1-5.6,6.6-10.4,21.6-14.7,25.1-27.9,1.1.7,4.7,1.9,7,2.3Z"/><path class="cls-9" d="m46.5,174c-2.7-2.7-3,3.7-5.5,2.4.6-1.4,1.3-3.5,0-4.7-.2-.6-.5-1.2-.8-1.7.3-8.7,3-17.6,6.4-29.1-1.4-.2-8.1-3.1-12-5-.2,1.3-8.4,27.9-7.3,28.3-7.1,1.3-15.6,12.2-1.8,6.5,2.7,2.5-1,13,6.5,8.5,1,2.4,4.3,2,6.1.5,0,0,0,0,0,0,3.7,3.5,11.3-.9,8.4-5.7Z"/><path class="cls-2" d="m55.1,106.2c-1.1-5.6-3.1-7.7-6.2-8.9"/><path class="cls-2" d="m55.4,108.7c0-.9-.1-1.8-.3-2.6"/><path class="cls-2" d="m83.3,65.4c0,5.9,2,5.5,3.6,14.9,1.6,7.8-3.4,17.7-12.1,21.4,0,.4-.8,5.8-.7,6.9"/><path class="cls-1" d="m77.2,70.9c1.6,4.1,4.2,3.1,2.6-1-1.6-4.1-4.2-3.1-2.6,1Z"/><path class="cls-1" d="m56.1,76.4c1.8,4.5,4.9,3.3,3-1.2-1.8-4.5-4.8-3.3-3,1.2Z"/><path class="cls-1" d="m67,88.8c4.1,1.6,8.5.6,12.2-2.5"/><path class="cls-1" d="m42.9,86.8c-8.1-2.7-4.4,8.4,0,10.4,2,1.2,6.5,1.8,6-1.1"/><path class="cls-1" d="m83.3,65.4c-1.3-7.2-10.6-19.9-19.3-15.8-2.5-.7-8.5-1.4-11,.3-12.8,7.7-1.2,29.5-10,36.9"/><path class="cls-2" d="m40.5,165.3c1-7,5.4-23.8,9.1-33"/><path class="cls-2" d="m34.7,135.6c0,.3-7.1,25.4-7.2,25.8"/><path class="cls-2" d="m43.3,113.8c2-1.8,4.5-3,8-3.1"/><path class="cls-2" d="m46.6,140.8c-1.8-.3-11.2-4.4-14.7-6.3,3.5-6.8,5.7-15.2,11.3-20.7"/><path class="cls-2" d="m99.2,135.3c1.5,3.5,4.9,10.9,6.4,13.8"/><path class="cls-2" d="m92.9,138.7c3.4-.7,6.7-3.6,8.6-5.6-6.2-11.3-9-26.6-23.8-24.7"/><path class="cls-2" d="m96,160.9c2.5,9.8,10.8,4.1,16.7,1.7"/><path class="cls-2" d="m110.9,149.5c-7.7-2.7-19.2,2.2-14.8,11.3"/><path class="cls-2" d="m40.2,169.9c.2-2,.1-3.7.3-4.7"/><path class="cls-2" d="m27.5,161.4c-.2,1-.2,1.9-.2,2.8"/><path class="cls-2" d="m98.2,189.7c-15.7,6.2-35.3,4.9-51.5,0,3.9-13.3,4.5-33.9-.8-46.5"/><path class="cls-2" d="m92.4,127.8c1,9,.3,15.3-1,25.1-1.1,8.7,4.8,26,6.7,36.7"/><path class="cls-2" d="m91.6,152.1c1.4,3.3,2.9,5.5,4.5,8.8"/><path class="cls-2" d="m72,81.6c.7-2.9,4.7-7,5.5-1.9"/><line class="cls-3" x1="129.2" y1="151.5" x2="129.2" y2="151.5"/><line class="cls-3" x1="126.6" y1="154.1" x2="126.7" y2="154.1"/><line class="cls-3" x1="112.9" y1="148.4" x2="112.9" y2="148.4"/><path class="cls-3" d="m113,149.8c-1-3.8,3.8-6.8,7.2-5.5,3.6-2.9,9-4.6,13.4-3.1-1,2.9-6,3.9-7.8,6.6-1.6,2.4,1,4.1,3.4,3.5"/><path class="cls-3" d="m120.9,154.8c1.6,2.7,4-3.2,5.7-.7h0c2.1,4.7-1.5,9.4-6.2,5.7"/><path class="cls-3" d="m110.9,149.5c-3.5,3.2-3.3,12.3,2.1,12.8"/><path class="cls-2" d="m110.9,149.5h0"/><path class="cls-3" d="m112.9,148.4c-.7,0-1.4.5-2.1,1.1"/><path class="cls-3" d="m126.7,154.1c.5-1.1,1.4-2.1,2.5-2.6h0c5.7-2.5,3.1,4,1.5,6.6-1,.9-2.4.2-3.6.4"/><path class="cls-3" d="m118.2,161.9c-2.6-10.4-9.3,4.2-3,4.4,2.7.5,3.8-1.9,3-4.4Z"/><path class="cls-3" d="m118.2,161.9c1.1-.3,2-1.1,2.5-2.1"/><path class="cls-3" d="m41,171.7c-1.1-4.4-4.4-5.4-8.2-6.4-7.1-6-24.4,12.3-7.2,5.5,1.3,1.1,1.2,3.1,1.2,4.9,0,9.1,7.8,2.6,9.7-1.9h0c1.5-3.9-3.2-3.5-5.1-1.4h0c-.5.4-1,.9-1.5,1.4"/><path class="cls-3" d="m41,171.7s0,0,0,0"/><path class="cls-3" d="m38.1,179.7c2.2-1.6,5-5.5,2.9-8h0c-1.5-1-3.3,0-4.3,1.2"/><path class="cls-3" d="m32,179c.9,2.6,4.4,2.2,6.1.7"/><path class="cls-3" d="m37.8,179.5c0,0,.2.2.3.2,0,0,0,0,0,0,5.7,4.9,13.1-5.2,6.7-6.3-1.5.5-1.6,3.9-3.7,2.9"/><path class="cls-3" d="m55.8,40.8c2.1.6,8.2,6.3,8.2,8.8"/><path class="cls-1" d="m56.6,65.8c-2.1-.3-4.3,1-4.9,3"/><path class="cls-1" d="m72,63c1.3-1.8,4-2.5,6-1.5"/><path class="cls-3" d="m83.3,94.2c.6,2.8,2.2,8.8,2.2,8.8,14.1-21.9,1.9-71.3-30-62.1-14.4-1.9-28.5,12.4-28,26.9,0,7.6,3.3,20,11.2,24.5"/><path class="cls-3" d="m37.7,91.8c-2.7,6.3,2.3,8.9,8.4,9.9,2.4.7,3.1-2.3,4-3.9"/><path class="cls-3" d="m39,99.4c-3.5,13.1-18.4,17.4-25,27.8-3.5,8.4,1.5,6,7.1,5.6,6.3-.9,11.1-4.7,15.7-9.1"/><path class="cls-3" d="m46,101.7c0,3.7-1.4,8.6-2.7,12.1"/><path class="cls-2" d="m55.4,108.7c-.5,6.1,19.5,6.7,18.7-.1"/><path class="cls-2" d="m55.1,106.2c-2.7,1.2-3.8,4.4-2.9,7.2,3.9,7.4,13.3,4.8,19.9,4.3,5.9-.5,8.5-11,2.2-12.5"/><path class="cls-2" d="m34.4,130.7c4,2.8,8.6,4.8,13.4,5.9"/><path class="cls-2" d="m100,130c-2.2,2.2-4.7,4.2-7.3,5.9"/><rect class="cls-10" x="106.4" y="103.5" width="20.8" height="20.8" transform="translate(-38.3 63.2) rotate(-26.2)"/><rect class="cls-4" x="106.4" y="103.5" width="20.8" height="20.8" transform="translate(-38.3 63.2) rotate(-26.2)"/></svg>')}`;
export default image;