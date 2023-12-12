/* eslint-disable */
import asyncLoader from '../../../phet-core/js/asyncLoader.js';

const image = new Image();
const unlock = asyncLoader.createLock( image );
image.onload = unlock;
image.src = `data:image/svg+xml;base64,${btoa('<?xml version="1.0" encoding="UTF-8"?><svg id="Layer_1" xmlns="http://www.w3.org/2000/svg" width="150" height="196" viewBox="0 0 150 196"><defs><style>.cls-1{stroke-linejoin:round;}.cls-1,.cls-2{stroke-linecap:round;}.cls-1,.cls-2,.cls-3{stroke:#000;}.cls-1,.cls-2,.cls-3,.cls-4{fill:none;}.cls-2,.cls-5,.cls-3,.cls-4{stroke-miterlimit:10;}.cls-5,.cls-4{stroke:#fff;}.cls-5,.cls-6{fill:#00a553;}.cls-7,.cls-8,.cls-9,.cls-10,.cls-11,.cls-12,.cls-6,.cls-13,.cls-14,.cls-15,.cls-16{stroke-width:0px;}.cls-8{fill:#5b2ac2;}.cls-9{fill:#2e2c2d;}.cls-10{fill:#1a1a1a;}.cls-11{fill:#b0e2ee;}.cls-12{fill:#b52d00;}.cls-13{fill:#87654b;}.cls-14{fill:#926350;}.cls-15{fill:#fff;}.cls-16{fill:#ffcf66;}</style></defs><path class="cls-16" d="m101.1,152.7c-.9,6,.2,14.3,1.6,23.1-12.6,3.3-27.4,4.7-43.4.3,1-13.1,1.6-21.7-2.8-32h-.1c.5-1.6,1-3.1,1.5-4.6-4-2.7-8.4-4.6-13-5.8,2.7-16.7,8.1-15.5,22.6-21.1,2.9,8.9,12.5,9,15.5,7.5,3.4-1.7,3.7-6.9,3.7-8,19,3.2,18.8,9.4,23.1,26.9-3.3.7-4.6.6-7.2,2.6h-.2c-.2,2.5-.6,5.8-1.3,11.1Z"/><path class="cls-16" d="m104.3,185c.3,1.6.6,3.2.8,4.6-15.5,6.1-32.3,4.8-48.2,0,.4-.8.8-2.4,1.2-4.3,17.1,4.3,32.1,4.3,46.2-.3Z"/><path class="cls-15" d="m102.6,175.8c.5,3.2,1.1,6.4,1.6,9.3-14.1,4.6-29.1,4.6-46.2.3.5-2.6.9-5.9,1.2-9.2,16,4.4,30.7,3,43.4-.3Z"/><path class="cls-13" d="m58.3,99.4c-2.9,1.2-6-1.6-6.9-3.9,1.4-.9.6-3.9-1.2-3.6,1.3-.5,1.4-2.7.3-3.5.4-4.6,1-11.9,1.8-14.3h0c.1,3.4.3,6.8.6,10.4-1.1,1.1-.5,3.5,1.1,3.7-2.1.3-2.1,4,0,4.3.7,3.1,3.1,3.7,2.2-.2,1.9-.5,1.2-4.4-.8-4.2,2.1,0,2.6-3.5.6-4.2.2-4.3.5-17,2.6-22,9.1-17.7,26.9-13.4,34.8,1.6.2.4,1.3,4.2,1.3,5.8,0,5.8,2.6,6.4,3.8,15.7,2.2,12.9-9.9,14.7-11.9,27,0,1.2-.3,6.3-3.7,8-3,1.5-12.6,1.4-15.5-7.5-1.5-4.6-1.8-7.5-9.1-13.2Zm31.9-22.9c1.7-.5-.8-7-2.4-6.2-1.7.5.8,6.9,2.4,6.2Zm-8.3-9.7c3-1.6,5.4-2,8.3-1.2.2-3.5-11.9-4.2-8.3,1.2Zm-10.7,14.1c2-.7-.8-7.7-2.7-6.9-2,.7.8,7.7,2.7,6.9Zm.2-11.2c.5-3.3-4.8-3.4-7-1.9-.9.6-3.8,4-2.8,6.2,1,1,2-5,9.9-4.3Z"/><path class="cls-9" d="m52.3,74h0c-.8,2.4-1.4,9.7-1.8,14.3-1-.7-2.8,0-3.6.7-.8-4.5-1.1-7.2-1-12h0c-.5,4.5-.4,7.3-.2,11.3-.9-1.1-3.1-.2-4,.6-1.2-9.3-2.8-10.6-1.4-24.1,3.1-16.2,24.3-22.7,37.2-20.9,10.5,1.5,18.1,17.3,17.3,25.4-.4-11.3-13-19.9-22-19.1-15.5,3.3-16.7,19.8-16.7,33.6-.9-.2-2.4-.3-3.1.5-.3-3.6-.5-7.1-.6-10.4Z"/><path class="cls-7" d="m90.2,72.9c1.6,4-1,5-2.5,1-1.6-4,1-5,2.5-1Z"/><path class="cls-10" d="m90.2,65.6c-2.9-.8-5.3-.4-8.3,1.2-3.6-5.4,8.6-4.7,8.3-1.2Z"/><path class="cls-7" d="m71.3,76.9c1.8,4.4-1.3,5.6-3,1.2-1.8-4.4,1.3-5.6,3-1.2Z"/><path class="cls-10" d="m70.6,67.7c.4.3,1.2,1.4.7,2-7.8-.7-8.9,5.3-9.9,4.3-1-5.2,5.4-8.8,9.1-6.3Z"/><path class="cls-15" d="m57.4,90.2c.3,3-5,3.1-4.9.2-.2-3,4.9-3.2,4.9-.2Z"/><path class="cls-11" d="m57.3,85.9c.1,2.9-4.9,3.2-4.9.2-.2-2.9,4.9-3.2,4.9-.2Z"/><path class="cls-9" d="m56.5,94.1c.1,1-1.4,1-1.8,0-.3-.8-.5-1-.6-1.8.5,0,1.7-.1,2.2-.2,0,1,0,.9.2,1.9Z"/><path class="cls-15" d="m48.6,96.2c-1.6-.3-1.8-3.2-.3-3.8.3,0,1.6-.4,1.9-.6t0,0c1.8-.3,2.5,2.7,1.2,3.6,0,0,0,0,0,0,0,0,0,0,0,0-.7.3-2,.8-2.7.7Z"/><path class="cls-9" d="m51.6,96.9c-.2,2.7-2.8,1.4-2.9-.7.7.1,2.1-.4,2.7-.7,0,.7.2.7.2,1.4Z"/><path class="cls-11" d="m46.8,89c.8-.7,2.7-1.4,3.6-.7,1.1.8,1,3-.3,3.5-.3,0-1.6.4-1.9.6-1.6.3-2.5-2.3-1.5-3.4Z"/><path class="cls-14" d="m50.4,171c.1.3.3.6.4.9-.2-.1-.3-.2-.5-.3,0-.2,0-.4.1-.7Z"/><path class="cls-11" d="m45,100.2c-2,.4-2.8-3.1-1-3.9.3,0,1.7-.5,2-.6,0,0,0,0,0,0,1.8-.3,2.6,2.6,1.3,3.6-.4.4-1.8.7-2.3.8Z"/><path class="cls-9" d="m47.4,99.4c.6,2.9-1.5,3.2-2.3.8.5-.2,1.9-.4,2.3-.8h0Z"/><path class="cls-15" d="m47.1,93.5c.2.9-.2,1.9-1,2.2,0,0,0,0,0,0-.3,0-1.7.5-2,.6-2.1.3-2.6-3.5-.7-4,1.4-.6,3.4-.9,3.6,1.1Z"/><path class="cls-13" d="m141.9,142.1c-4.3-1.5-9.7.2-13.2,3-2.6-1.1-6.8.9-7.1,3.7-2.3-.8-5.4-.7-8.2,0-1.6-2.8-2.7-6.2-3.7-9.8-3.3.7-4.6.6-7.2,2.6h-.2c-.2,2.5-.6,5.8-1.3,11.1,1.4,3.2,2.9,5.4,4.4,8.6,2.4,9.3,10.2,4.3,16,1.9-1.3,5.3,7.5,4.6,5.3-.8,1-.3,1.9-1,2.4-2,2.1,1.7,5.9,1.8,6.3-1.5,1.2-.1,2.6.6,3.6-.3,1.6-2.5,4.1-8.9-1.5-6.4h0c-2.3.5-4.9-1.1-3.3-3.5,1.8-2.7,6.6-3.6,7.7-6.5Z"/><path class="cls-13" d="m50.4,171c.4-9.5,3.6-19.8,7.4-31.5-4-2.7-8.4-4.6-13-5.8-.2,1.4-7.7,30.1-6.9,30.8-7.1.8-16.1,12.2-2.2,6.5,2.7,2.5-.9,12.8,6.3,8.3,1,2.4,4.3,2,6,.5,5.5,4.8,12.9-5.1,6.6-6.2-1.5.5-1.6,3.9-3.7,2.9h0s0,0,0,0c.7-1.5,1.4-4.1-.5-4.9,0-.2,0-.4.1-.7Z"/><path class="cls-11" d="m41.6,88.9c.8-.8,3-1.7,4-.6.9,1,.7,3.1-.7,3.4-2.4,1.2-4.6-.2-3.3-2.8Z"/><path class="cls-3" d="m93.4,63.5c.2.4,1.3,4.2,1.3,5.8,2.6,14.3,9.7,20.9-5.9,35.9,0,0-2.2,4.1-2.2,6.8s-.3,6.3-3.7,8c-3,1.5-12.6,1.4-15.5-7.5-1.5-4.6-1.8-7.5-9.1-13.2"/><path class="cls-1" d="m81.9,66.8c-3.6-5.4,8.6-4.7,8.3-1.2-2.9-.8-5.3-.4-8.3,1.2Z"/><path class="cls-1" d="m71.3,69.7c.5-3.3-4.8-3.4-7-1.9-.9.6-3.8,4-2.8,6.2,1,1,2-5,9.9-4.3Z"/><path class="cls-1" d="m87.7,73.9c1.6,4,4.1,3,2.5-1-1.5-4-4.1-3-2.5,1Z"/><path class="cls-1" d="m68.3,78.1c1.7,4.5,4.8,3.3,3-1.2-1.7-4.4-4.8-3.3-3,1.2Z"/><path class="cls-1" d="m75.6,90.3c4.9,1.7,10.1.6,14.6-2.8"/><path class="cls-1" d="m51.4,95.4c.6,3.2,8.2,6.9,8.3,1.5"/><path class="cls-1" d="m82.2,83.3c.8-2.7,4.5-5.4,6.5-2.2"/><path class="cls-1" d="m93.4,63.5c-7.9-15-25.7-19.3-34.8-1.6"/><path class="cls-3" d="m57.8,139.5c.7-2.1,1.4-4.1,2.1-5.9"/><path class="cls-3" d="m50.8,165.6c.7-5.1,4.1-17.9,7-26.1"/><path class="cls-3" d="m67.4,112.6l-14.2,5.3c-7.2,4-6.5,9.9-8.4,15.8,0,0-6.8,28-6.8,28"/><path class="cls-3" d="m86.6,112c25.1,3.3,17.7,18.6,26.9,36.7"/><path class="cls-3" d="m105.4,161.3c2.4,9.3,10.2,4.3,16,1.9"/><path class="cls-3" d="m121.6,148.8c-7.2-2.5-20.8,3.3-16.2,12.5"/><path class="cls-3" d="m50.4,171c.4-2.3.2-4.3.4-5.4"/><path class="cls-3" d="m38,161.8c-.2,1-.2,1.9-.2,2.8"/><path class="cls-2" d="m105.1,189.6c-15.5,6.1-32.3,4.8-48.2,0,3.6-14.4,5-32.8-.4-45.5"/><path class="cls-2" d="m101.1,152.7c-1.4,9.6,2.1,25.9,4,37"/><path class="cls-3" d="m101.8,132.7c1.2,8,.3,10.5-.8,19.9"/><path class="cls-1" d="m40.2,64.8c3.1-16.2,24.3-22.7,37.2-20.9,10.5,1.5,18.1,17.3,17.3,25.4"/><path class="cls-3" d="m101,152.7c1.4,3.2,2.9,5.4,4.4,8.6h0"/><path class="cls-3" d="m121.7,150.5c-1-3.7,3.8-6.7,7-5.4,3.5-2.8,8.8-4.5,13.2-3-1,2.9-5.9,3.8-7.7,6.5-1.6,2.4,1,4,3.3,3.4"/><path class="cls-3" d="m129.4,155.4c1.5,2.4,3.2-1.9,5-1.2,3.3,3.9-.4,10.2-5.5,6.1"/><path class="cls-3" d="m121.6,149c-5.5,1.2-6.1,13.3,0,13.7"/><path class="cls-3" d="m135.1,154.6c.8-2,4.3-4.5,6-2.2.3,2-1.2,4.3-2,6.1-1,.9-2.4.2-3.6.3"/><path class="cls-3" d="m123.8,158.6c-2.4.9-3,5.1-2,7.2,1,1,3.2,1,4.4.3,2.1-1.7,0-7.8-2.3-7.6Z"/><path class="cls-3" d="m126.8,162.3c1.1-.3,2-1.1,2.4-2.1"/><path class="cls-3" d="m50.9,172c-1.1-4.4-4.3-5.3-8.1-6.3-7-5.9-24,12.1-7,5.4,2.6,2.2-.5,7.6,3,9.2,3.7.7,6.6-4.2,7.9-7.1.1-4.5-5.3-1.1-6.7.9"/><path class="cls-3" d="m42,179.1c2,4.3,7.6.5,8.9-2.6,2.3-3.8-1.2-7-4.3-3.4"/><path class="cls-3" d="m47.7,179.6c5.6,5.3,13.3-4.8,6.8-5.9-1.5.5-1.6,3.9-3.7,2.9"/><path class="cls-3" d="m45,133.8c4.7,1.2,9.1,3.2,13.1,5.9"/><path class="cls-3" d="m109.2,139.1c-3.3.6-4.1.6-6.6,2.5"/><path class="cls-3" d="m58.1,185.3c17.1,4.3,32.1,4.3,46.2-.3"/><path class="cls-1" d="m56,83.9c.2-4.3.5-17,2.6-22"/><path class="cls-1" d="m54.1,92.4c.7,3.1,3.1,3.7,2.2-.2"/><path class="cls-1" d="m52.9,60.7c-1.1,8.2-.6,15.5,0,23.7"/><path class="cls-1" d="m50.5,88.4c.4-4.6,1-11.9,1.8-14.4"/><path class="cls-1" d="m48.6,96.2c.6,3.5,3.8,2.6,2.7-.7"/><path class="cls-1" d="m47.1,66.8c-1.8,7.6-1.7,14.9-.3,22.3"/><path class="cls-1" d="m45.6,88.4c-.2-4.1-.3-6.8.2-11.4"/><path class="cls-1" d="m45,100.2s0,0,0,0c.8,2.4,2.9,2.1,2.3-.8"/><path class="cls-1" d="m40.2,64.8c-1.4,13.5.2,14.9,1.4,24.2"/><path class="cls-1" d="m46,95.8c1.8-.3,2.6,2.6,1.3,3.6-1.3.8-3.7,1.6-4.2-.6-.7-2,1.4-2.8,2.9-3.1"/><path class="cls-1" d="m46,95.8c-.3.1-1.7.5-2,.6-2.1.3-2.6-3.5-.7-4,0,0,1.6-.5,1.6-.5,2.1-.6,3,3.1,1.1,3.8,0,0,0,0,0,0Z"/><path class="cls-1" d="m45.6,88.3c1.6,2-.2,3.7-2.2,3.9-1.7.5-2.8-2.1-1.8-3.3.8-.8,3-1.7,4-.6Z"/><path class="cls-1" d="m50.2,91.8c2.1-.3,2.6,3.4.7,3.9-.5.1-1.7.6-2.2.5-1.6-.3-1.8-3.2-.3-3.8"/><path class="cls-1" d="m48.3,92.4c.3-.1,1.6-.5,1.9-.6"/><path class="cls-1" d="m50.2,91.8c-.3.1-1.6.5-1.9.6-1.6.3-2.5-2.3-1.5-3.4.8-.7,2.7-1.4,3.6-.7,1.1.8,1,3-.3,3.5Z"/><path class="cls-1" d="m55.4,88.1c2.1-.2,2.8,3.6.8,4.2-.5,0-1.7.2-2.2.2-2.8-.7-1.6-5.1,1.2-4.3"/><path class="cls-1" d="m55.4,88.1c-3.1,1-4.4-3.8-1.2-4.3,3.1-.9,4.4,3.8,1.2,4.3Z"/><path class="cls-3" d="m59.1,176.1c15.8,4.3,30.7,3.1,43.1-.2"/><rect class="cls-12" x="117.8" y="34.5" width="23.9" height="23.9" transform="translate(2.1 98.4) rotate(-41.9)"/><rect class="cls-8" x="117.8" y="101.9" width="23.9" height="23.9" transform="translate(-36.9 69) rotate(-26.2)"/><polygon class="cls-6" points="95.8 7.1 91.7 30.6 68.2 26.5 72.3 3 95.8 7.1"/><polygon class="cls-12" points="44.1 25.3 29.6 44.2 10.6 29.7 25.2 10.7 44.1 25.3"/><polygon class="cls-8" points="26.5 78.5 32.5 101.6 9.3 107.6 3.4 84.5 26.5 78.5"/><polygon class="cls-4" points="68.2 26.5 91.7 30.6 95.8 7.1 72.3 3 68.2 26.5"/><rect class="cls-4" x="117.8" y="101.9" width="23.9" height="23.9" transform="translate(-36.9 68.8) rotate(-26.2)"/><polygon class="cls-4" points="32.5 101.6 9.3 107.6 3.4 84.5 26.5 78.5 32.5 101.6"/><polygon class="cls-4" points="29.6 44.2 10.6 29.7 25.2 10.7 44.1 25.3 29.6 44.2"/><rect class="cls-4" x="117.8" y="34.5" width="23.9" height="23.9" transform="translate(2.1 98.3) rotate(-41.8)"/><rect class="cls-5" x="43.1" y="148.3" width="20.8" height="20.8" transform="translate(-112.2 182.8) rotate(-79.7)"/></svg>')}`;
export default image;