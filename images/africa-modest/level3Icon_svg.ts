/* eslint-disable */
import asyncLoader from '../../../phet-core/js/asyncLoader.js';

const image = new Image();
const unlock = asyncLoader.createLock( image );
image.onload = unlock;
image.src = `data:image/svg+xml;base64,${btoa('<?xml version="1.0" encoding="UTF-8"?><svg id="Layer_1" xmlns="http://www.w3.org/2000/svg" width="150" height="196" viewBox="0 0 150 196"><defs><style>.cls-1{stroke-linejoin:round;}.cls-1,.cls-2{stroke-linecap:round;}.cls-1,.cls-2,.cls-3{stroke:#000;}.cls-1,.cls-2,.cls-3,.cls-4{fill:none;}.cls-2,.cls-5,.cls-3,.cls-4{stroke-miterlimit:10;}.cls-5{fill:#5b2ac2;}.cls-5,.cls-4{stroke:#fff;}.cls-6,.cls-7,.cls-8,.cls-9,.cls-10,.cls-11,.cls-12,.cls-13,.cls-14,.cls-15,.cls-16{stroke-width:0px;}.cls-7{fill:#274a85;}.cls-8{fill:#6db3c8;}.cls-9{fill:#2e1f20;}.cls-10{fill:#3879d2;}.cls-11{fill:#1f4172;}.cls-12{fill:#b68060;}.cls-13{fill:#b52d00;}.cls-14{fill:#00a553;}.cls-15{fill:#ebae52;}.cls-16{fill:#e99454;}</style></defs><path class="cls-11" d="m105.9,173c-6-1.8-3.7-14.6-2.6-19.5-.5,3.7-.1,8.2,3.8,8.7-1,3.2,1.9,4.8,4.5,3.4,0,3.7-2.1,7.5-5.7,7.5h0Z"/><path class="cls-7" d="m107.2,148.8c-6.2,1-7.5,23.2-1.3,24.1h0c-2,0-3.8-1-5.5-2.1-2.7-7.1-3.2-19.4,5.3-22.8h0c.3,0,.6,0,.9.2.3.4.5,0,.6.5Z"/><path class="cls-15" d="m105.8,148h0c-1.6.4-2.8,1.4-3.8,2.6h-.1c0,0,.3-2.4,0-3.2,1.4,0,2.7.2,4,.6Z"/><path class="cls-15" d="m101.8,150.5h.1c-1.5,2.1-2.1,3.6-2.4,5.3h-.5c-.8-1.7-1.5-3.3-2.3-5,1.1-.4,5-.4,5.1-.4Z"/><path class="cls-15" d="m99,155.8h.5c-.5,2.4-.8,4.8-.8,7h-.4c0-.4-3-2.9-3.9-4.1,1.9-1.1,3.2-2.4,4.5-2.9Z"/><path class="cls-15" d="m98.7,162.7c0,2.8.6,5.5,1.7,8.2-1.8-.9-5.3-4.8-5.6-5.8,0-.2,3.4-2.1,3.5-2.4h.4Z"/><path class="cls-8" d="m97.9,168.9c.8.7,1.6,1.4,2.6,2-5.1-2.5-11.6-8.7-11.2-14.4,1.5.3.7.2,2.8,0,0,5.7,1.6,8.3,5.8,12.4Z"/><path class="cls-16" d="m94.6,135.3c-4.8,2.5-2.7-7.1-2.8-11.3.9,3.6,1.9,7.6,2.8,11.3Z"/><path class="cls-15" d="m90.3,162.5c-3.4,1-9.1,1.7-9.2,1-.6-2.8,2.1-13.2,2.9-16.4,2.2,2.1,3,4,4.5,7.1h.2c.5,2.7,1,5.4,1.5,8.3Z"/><path class="cls-7" d="m70,126c-24.9,6.6-20.2-17.1-40.3-15,4.1-15.2-3.7-29.9-1.4-45.1,2.4-16,26.9-21.6,37.5-18.1,8.7,2.9,13.9,15.1,14.3,28.8-1.9-4.3-2-12.3-6.1-16.5-8.7-10.5-27.6-9.3-31.2,9.9-4,29,32.9,47.5,38,17.3h.1c1.6,13.9,4.1,16.3,5.7,23.7.2,1.8-9.5,14.8-16.7,15Z"/><path class="cls-12" d="m81,83.9c-1.5,34.6-42.4,16.8-38.1-13.8,5.3-10.5,26.5-14,31.2-9.9,2,2.5,3.4,5.6,4.1,8.7.8,7.7,2.8,7.1,2.8,15.1Zm-5.5-17.1c-.2-2.1-8-1.8-8.3.9,0,.5,0,.8,1.2.4.3,0,1.3-.7,3.8-1.1.3,0,3,0,3.2-.2Zm-.8,10.7c1.6-.5-.8-6.7-2.4-6-1.6.5.8,6.7,2.4,6Zm-16.8-7.3c-.7-3.4-9.7,1-9.8,3.2-.1.5,3.1-1.4,4.9-1.7,2.3-.6,4.7.2,4.9-1.6Zm-.9,12.2c1.9-.6-.8-7.5-2.6-6.6-1.9.6.8,7.5,2.6,6.6Z"/><path class="cls-8" d="m77.5,122.7c1.7,1.6,2.5,3.3,4.5,6.6-3.3,3.6-12.7,3.9-12.9,3.1-.3-1.3.2-3.6,1-6.5,2.5-.7,5.3-1.7,7.4-3.3Z"/><path class="cls-9" d="m75.5,66.2c.7,1.1-2.8.5-3.2.7-2.5.5-3.5,1.1-3.8,1.1-1.2.3-1.2,0-1.2-.4.9-2.8,6.4-2.5,8.3-1.4Z"/><path class="cls-6" d="m74.8,74c1.6,3.9-1,4.9-2.5,1-1.6-3.9,1-4.9,2.5-1Z"/><path class="cls-16" d="m69,165.7c2.9,3.2,6.4,6.5,9.5,12.6-17.6,2.1-14.4,5.8-9.5-12.6Z"/><path class="cls-10" d="m101.8,150.5s.3-2.3,0-3.1c-1.2,0-2.5.2-3.6.6-1.2-3-2.4-7.7-3.7-12.7-4.8,2.5-2.7-7.1-2.8-11.3-1.8-6.9-3.5-12.4-5.1-12.9,0,0-3,7.3-9.2,11.7,1.7,1.6,2.5,3.3,4.5,6.6-3.3,3.6-12.7,3.9-12.9,3.1-.3-1.3.2-3.6,1-6.5-24.3,6.7-20.6-16.6-39.2-14.9-1,.7-2.2,7-3.6,15.2,1.4-3.1,3.5-6.4,4.8-8.1,1.4,3.7,3.4,7.6,4,13.8-6.4,0-9.3-.5-9.6-1.2-2.1,13.5-4.1,29.6-5.2,34.1h.2c5.7-6.3,18.4-1,19.4,7h.2c.2-4.5.8-14,1.5-22.2h.2c.4,4.8.2,13.8-.3,23,3.4.3,1.9,5.5-.4,6.5h0c-.3,5.1-.7,9.3-1,12.6,2.1.7,4.2,1.3,6.4,1.8,1.4-3.6,3.7-7.8,4.7-9.8,2,3.3,4.6,5.9,6.4,11.3,12.9.7,26.3-1.6,36.5-5.6-.6-3.7-2.9-16.5-4.8-27-3.4,1-9.1,1.7-9.2,1-.6-2.8,2.1-13.2,2.9-16.4,2.2,2.1,3,4,4.5,7.1h.2c.1.7.3,1.5.4,2.4,1.5.3.7.2,2.8,0,0,5.7,1.6,8.3,5.8,12.4-4.2-4.5-3.1-3.4.6-6.1,0-.5-3-2.9-3.9-4.2,1.9-1.1,3.2-2.4,4.5-2.9-.8-1.6-1.5-3.2-2.3-4.9,1.1-.4,5-.4,5.1-.4Zm-70.5,5.8c.5-2.2,5.7-8.9,7.2-11,1.4,3.6,2.3,6.9,3,13-2.4-.5-10.4-1.3-10.2-2Zm17.8-4.7c0-2.5,4.5-11,5.9-13.7,2.3,3.6,5.4,7.5,7.5,14-2.3,1.7-13.4.5-13.4-.3Zm16.3,28.5c-.3-2.5,2.7-11.6,3.7-14.4,2.9,3.2,6.4,6.5,9.5,12.6-5.1.1-13.1,2.6-13.2,1.8Z"/><path class="cls-10" d="m74.1,60.1c-8.7-10.5-27.6-9.3-31.2,9.9,5.3-10.5,26.5-14,31.2-9.9Z"/><path class="cls-15" d="m54.9,137.8c2.3,3.6,5.4,7.5,7.5,14-2.3,1.7-13.4.5-13.4-.3,0-2.5,4.5-11,5.9-13.7Z"/><path class="cls-8" d="m58.6,194.9v.2c-3.8-.2-7.6-.7-11.1-1.5,1.4-3.6,3.7-7.8,4.7-9.8,2.1,3.3,4.4,5.8,6.4,11.1Z"/><path class="cls-9" d="m51.2,70.4c1.7-1.1,8.5-2.6,6.3.7-.6.3-2.6.5-4.5.7-1.8.3-5,2.2-4.9,1.7.2-.8,1.2-2,3.1-3.1Z"/><path class="cls-6" d="m57.2,78.6c1.7,4.3-1.2,5.5-2.9,1.1-1.7-4.3,1.2-5.5,2.9-1.1Z"/><path class="cls-7" d="m41,171.9h.2c.1,1.8-.4,4.4-2.5,3.6.6-1.3,1.3-3.4,0-4.4-1-4.2-4.2-5.1-7.9-6.1-3-2-7.1-1-9.8,1,.1-.1.2-.5.4-1.1h.2c5.7-6.3,18.4-1,19.4,7Z"/><path class="cls-15" d="m38.5,145.2c1.4,3.6,2.3,6.9,3,13-14.9-2-11-.9-3-13Z"/><path class="cls-11" d="m35.9,178.7c1,.8,2.2,1.2,3.5,1.2-7.3,12.8-15.4,10.3-18.5-8.8,1-.3,2.1-.6,3.1-.9,2.6,2.4-.9,12.4,6.2,8.1,1,2.3,4.1,1.9,5.8.5Z"/><path class="cls-12" d="m126.9,142.1c-4.2-1.4-9.4.2-12.8,2.9-2.6-1.1-6.8.9-6.9,3.8-5.2,1.2-5.9,12.6-.1,13.3-1.7,5.4,7.2,5.1,5.1-.4,1-.3,1.8-1,2.3-1.9,2.1,1.7,5.8,1.8,6.1-1.5h0c1.1-.1,2.5.6,3.5-.3,1.5-2.4,4-8.7-1.4-6.3h0c-2.2.5-4.7-1.1-3.2-3.4,1.7-2.6,6.4-3.5,7.4-6.3Z"/><path class="cls-12" d="m42.5,172.7c-1.7.2-1.7,3.9-3.8,2.8.6-1.3,1.3-3.4,0-4.4-1-4.2-4.2-5.1-7.9-6.1-6.8-5.7-23.3,11.8-6.8,5.2,2.6,2.4-.9,12.4,6.2,8.1,1,2.3,4.1,1.9,5.8.5,4.7,4.4,12.5-4,6.6-6Z"/><path class="cls-16" d="m32.1,118.2c1.4,3.7,3.4,7.6,4,13.8-6.4,0-9.3-.5-9.6-1.2,0-4.5,3.4-9.9,5.5-12.6Z"/><path class="cls-2" d="m78.2,68.8c.3,4.5,1.2,5.2,1.9,7.8,2.9,7.6-.8,23.9-8.2,24.9"/><path class="cls-3" d="m29.7,111c4.1-15.2-3.7-29.9-1.4-45.1,2.4-16,26.9-21.6,37.5-18.1,8.7,2.9,13.9,15.1,14.3,28.8"/><path class="cls-1" d="m72.4,74.9c1.5,3.9,4,2.9,2.5-1-1.5-3.9-4-2.9-2.5,1Z"/><path class="cls-1" d="m54.3,79.7c1.7,4.3,4.6,3.2,2.9-1.1-1.7-4.3-4.6-3.1-2.9,1.1Z"/><path class="cls-2" d="m42.7,71.6c-.5,6.6,3.5,35.9,29.2,29.9"/><path class="cls-3" d="m42.9,70c0,.4-.1.8-.1,1.2"/><path class="cls-3" d="m78.2,68.8c-3.3-18.1-30.8-22.7-35.3,1.3"/><path class="cls-2" d="m86.7,111c5.4,5.8,7.8,28.7,11.6,37"/><path class="cls-3" d="m97.9,168.9c5,5.3,13.7,5.9,13.8-3.4"/><path class="cls-3" d="m107.2,148.8c-.1-.5-.2,0-.6-.5-14-5.2-19.5,12.7-8.8,20.6"/><path class="cls-3" d="m41.1,173.9c.2-6.4,2-33.1,2.9-39"/><path class="cls-2" d="m30.9,111s0,0,0,0c-4.5,10-7.3,48.2-9.9,54.9"/><path class="cls-2" d="m100.4,170.9c-2.5-.8-9.4-7.2-10.3-9.2"/><path class="cls-2" d="m42.5,172.7c.5-9.3.7-18.2.3-23"/><path class="cls-2" d="m95.1,189.4c-15.2,5.9-37.2,8.2-54,2.3.4-3.2.7-7.5,1-12.5"/><path class="cls-2" d="m86.7,125.9c.1,2.3,1.7,14.9,1,22.1,1.8,9.8,6.4,35.4,7.4,41.4"/><path class="cls-3" d="m66.4,85.2c2.6-5,7.2-3.9,7.7-2.1"/><line class="cls-3" x1="122.7" y1="151.7" x2="122.7" y2="151.8"/><path class="cls-3" d="m107.3,150.3c0-.5,0-1,0-1.4,0-2.9,4.3-4.9,6.9-3.8,3.4-2.7,8.6-4.4,12.8-2.9-1,2.8-5.7,3.7-7.4,6.3-1.5,2.3,1,3.9,3.2,3.3"/><path class="cls-3" d="m114.8,155c1.4,2.3,3.1-1.8,4.8-1.2,3.2,3.8-.4,9.9-5.3,5.9"/><path class="cls-3" d="m107.2,148.8c-5.3,1.2-5.9,12.9,0,13.3"/><path class="cls-3" d="m120.3,154.3c.8-1.9,4.2-4.4,5.8-2.2.3,2-1.1,4.2-1.9,5.9-.9.9-2.3.2-3.5.3"/><path class="cls-3" d="m112.2,161.7c-2.5-9.9-8.9,4-2.8,4.2,2.6.5,3.6-1.8,2.8-4.2Z"/><path class="cls-3" d="m112.3,161.7c1-.3,1.9-1.1,2.4-2"/><line class="cls-3" x1="38.6" y1="175.5" x2="38.7" y2="175.5"/><path class="cls-3" d="m20.8,171.1c1-.3,2.1-.6,3.1-.9,2.5,2.1-.5,7.4,2.9,8.9,3.6.7,6.3-4,7.7-6.7.4-4.5-5.1-1.3-6.4.7"/><path class="cls-2" d="m21,166c-3.3,2-7.3,7.8-.1,5.1"/><path class="cls-3" d="m38.6,171.1c-1-4.2-4.2-5.2-7.9-6.1-3-2-7.1-1-9.8,1"/><path class="cls-3" d="m30,178c2,4.2,7.4.4,8.6-2.5,2.3-4-1.4-6.8-4.3-3"/><path class="cls-3" d="m35.6,178.5c5.4,5.2,12.9-4.7,6.6-5.8-1.5.5-1.6,3.8-3.6,2.8"/><path class="cls-2" d="m29.7,111c7.7,0,12.2.4,18.9,10,10,12.9,34.2,3.2,38.1-10-1.5-7.5-4.1-9.8-5.7-23.7"/><path class="cls-3" d="m42.7,71.3c-1.2,14.1,3.5,25.2,10.9,34.4"/><path class="cls-1" d="m57.9,70.2c-.2,1.8-2.6,1-4.9,1.6-1.8.3-5,2.2-4.9,1.7.1-2.3,9.1-6.6,9.8-3.2Z"/><path class="cls-1" d="m68.5,66.1c-1.3.5-2.2,2.6,0,1.9.3,0,1.3-.7,3.8-1.1.3,0,3,0,3.2-.2-.2-1.9-5.2-1.5-7-.6Z"/><path class="cls-3" d="m42.9,70c5.3-10.5,26.5-14,31.2-9.9"/><path class="cls-3" d="m42.9,70s0,0,0,0"/><path class="cls-3" d="m103.3,153.4c-1.1,4.9-3.4,18.1,2.8,19.5"/><path class="cls-3" d="m80.3,91.1c.7,2.8-.7,14.6-5,16.3"/><path class="cls-2" d="m20.9,171.3c3.1,19.2,11.3,21.2,18.4,8.6"/><path class="cls-1" d="m69,165.7c2.9,3.2,6.4,6.5,9.5,12.6-17.6,2.1-14.4,5.8-9.5-12.6Z"/><path class="cls-1" d="m38.5,145.2c1.4,3.6,2.3,6.9,3,13-14.9-2-11-.9-3-13Z"/><path class="cls-1" d="m77.5,122.7c1.7,1.6,2.5,3.3,4.5,6.6-3.3,3.6-12.7,3.9-12.9,3.1-.3-1.3.3-4,1-6.8"/><path class="cls-1" d="m27.3,126.3c1.4-3.1,3.6-6.5,4.9-8.2,1.4,3.7,3.4,7.6,4,13.8-6.5,0-9.4-.4-9.6-1.4"/><path class="cls-1" d="m54.9,137.8c2.3,3.6,5.4,7.5,7.5,14-2.3,1.7-13.4.5-13.4-.3,0-2.5,4.5-11,5.9-13.7Z"/><path class="cls-1" d="m90.2,162.5c-3.4,1-8.9,1.6-9.1,1-.6-2.8,2.1-13.2,2.9-16.4,2.2,2.1,3,4,4.5,7.1"/><path class="cls-1" d="m89.2,156.5c1.5.3.7.2,2.8,0"/><path class="cls-1" d="m94.5,135.3c-4.8,2.5-2.5-7.9-2.6-11.9"/><path class="cls-1" d="m47.4,193.7c1.3-3.6,3.8-8,4.8-10,2.1,3.3,4.4,5.8,6.4,11.1"/><path class="cls-1" d="m105.7,148.1c-8.6,3.4-8,15.7-5.3,22.8"/><path class="cls-1" d="m101.8,147.4c.3.8,0,3.1,0,3.1,0,0-4,0-5.1.4.8,1.6,1.5,3.2,2.3,4.9-1.3.5-2.6,1.7-4.5,2.9.9,1.2,4,3.7,3.9,4.2-.1.2-3.5,2.1-3.5,2.4,0,.2,2.5,3.6,3.9,4.5"/><path class="cls-1" d="m21.6,164.9c5.7-6.4,18.4-1.1,19.4,6.9"/><path class="cls-1" d="m74.1,88.3c-3.2,4.4-11.6,2.2-12.3,1.7"/><rect class="cls-14" x="109.8" y="75.2" width="20.8" height="20.8" transform="translate(-25.5 61.8) rotate(-26.2)"/><polygon class="cls-13" points="33.7 1 44.4 18.8 26.6 29.6 15.9 11.7 33.7 1"/><polygon class="cls-4" points="15.9 11.7 26.6 29.6 44.4 18.8 33.7 1 15.9 11.7"/><rect class="cls-4" x="109.8" y="75.2" width="20.8" height="20.8" transform="translate(-25.5 61.8) rotate(-26.2)"/><rect class="cls-5" x="28.1" y="148.3" width="20.8" height="20.8" transform="translate(-124.5 168.1) rotate(-79.7)"/></svg>')}`;
export default image;