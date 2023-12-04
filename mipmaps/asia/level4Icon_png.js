/* eslint-disable */
import asyncLoader from '../../../phet-core/js/asyncLoader.js';

const mipmaps = [
  {
    "width": 150,
    "height": 196,
    "url": "data:image/png;base64,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"
  },
  {
    "width": 75,
    "height": 98,
    "url": "data:image/png;base64,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"
  },
  {
    "width": 38,
    "height": 49,
    "url": "data:image/png;base64,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"
  },
  {
    "width": 19,
    "height": 25,
    "url": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAAZCAYAAADTyxWqAAAAAklEQVR4AewaftIAAARgSURBVK3BfUyUdQAH8O/zPL977rnnOe44OEB5ES4QSRAXllIiOjF1jZH5Um0MXUrOnGlvVs4/lNUiZ2nKMjUUnEUsF5pKyRwEiSYhSr6gdjoFZ7wfeDzH3T139zw9t1hdF9Tc+nzwf2LwkL7/0bfCkrplX2np1raSnUX3EIDgIRz42rdzWynW1neD9SnKewByEIDGiMr9NyuutvTl4l+kTqLqBS18UIkOTFYUJQkBKKi+Kbdur97X9ZYpTuN4Yl5Y+Yurk9fhD5EA0gFcBtAD1Y5S3+EhB4yvF9KbDAJ1DQEIVB23HIvdNgU2xSMQQrkyYmPyEs3mzT5ZTqNoitcyxO30es4d/eXKsjcKmQKotmzAPzBQlR7c3mqXnUkTJutsKzY8umRWYuJxPatN54hGE2LgMDcrhbgkryWCFSy/9vQewRgYqHbuLm4/1bC37GTtnq9OHjyQH200rKRBwW92dgryZk1FXHQYCMfEnmpu2wPAjVHQCEBRlD061DiTAQ0/vYnDeLMRfjHmUIwzG40Cxy7FGGgE8fpkESoFwDNz0mEUdPB7IDqRk5GC/W/mT8QYaAS51dtb4/RJ0guLp2NGagImxkaiywFoLI9jSJIxITJsHMZAI4i1t++7brtYxXMs7MMu+IWyXlA9VnC07Lto7WjEGBiMIj0menFT622+ruVmd3ZGcoRep4WWUdDUdrdsefGhIoy40HXj6eyChWuq9lachorGKFiGmX4/itSaQzihc9AOP9HpRk1rm4SXsldD9WFj6bHN50qOl1urNzTea82DiiBIZkJ8oYdRDM156fkre2Sh2taJYZYCZAWW+IhXEKsVoaGbHV4nqXF2cVDNvN34KoDjNILEGI2r7mSOc0LHChXhNKYNARv722F1idApFMDQemzMXV8wddFHhaYpts3R2aeXpC7cARWDALOTEtfpWHZ+/Zx4JzhNRIfHixCiYNUDgqYBGyJDeFQTL6DTmErmrnyt5YsfKnIsmZ9+tn33LagY/CX5sdiYXTan85P2GXGL4JNZ0DR10cAi1eNDIReBMu0wrkIBBM6IcP3g2fe3OT5eu/Ttl3Oz3jlS33KNYMSTloQFolv6vCFZP7yLxBj4QdH+W7ieL0I/qdPKyPfQcNM0QCmAy0MhefyWD57KopLGR4RW1jUfc0reewQjfrpztwR+zz97yGLtBFN72BA1rwByGot6nkDslhBOKwAl90Hy8SaBNYXpedzvG1CizcY0AMMEAcrfXb4mLikphzlzHQ4AD0wCAA+gIeiRJZhAAyzh0S9WDTDU1CsdncPf1l/6srzmfAUAO0EAk56fFu5xK+4ZkzCUvOl6i9ETBgxEQXVGK0GkKIDT8LjUfhYnLhU8h79jEKCy7sKJpbMzLKIoSpBd9vVKXxi0JASq81oKAwzQzxJAYO1ouFGFIBTGFoXiZZdhEiJBGPxJ8irosZ/G1qMLEITCf3kkcgnmp00Br9XB4Xbh5MWfcX+wGqP4HY5boDNz3ovAAAAAAElFTkSuQmCC"
  },
  {
    "width": 10,
    "height": 13,
    "url": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAANCAYAAACQN/8FAAAAAklEQVR4AewaftIAAAG0SURBVHXBT0hTcQAH8O/7vT3dy02dB8dgqGUHkS3FXexq2B/xz6GaBwfiqWkNDyJRCFGUKzx4M9khwZRsIf6LdpIscIcp5pYTFF3iWCIJzblN39veW7/D7yCBnw8u4h5R+rb31TIwBNTM+51OnPNhQbn36SteeyZyA2D4t4Mh97ePR296+13HfMz/yGIydYcWRyI373ev9j8gQ+7B5ylQmmb7ZY+S/VXgG+u8UagVW1qbanEYP6lx9vBlT3oggeHAOGy2UGVlqdXRWo+somJ+Odj+2DPrBUPAJDPS6t1bNuh1OogGY+7aFXMBziFgOHB/X737sibLEk7jh+E7W6Gw0/di7KHv5SgoDZiUWawXGqtq5vYi0CmwwGoeTmRSfD4RkqAIqGZL9bMjizHfmwdyABlSRgYIVxdb2HxqD8eXtAJvJqBOzqSfXZeM3Piemp3SExQJeUBWRUdt+edSg955llESGlAuR0Ohqaj46q70JxUR+OJoTgYIt7GfTAaWF1cmASR4UN6ltXV7Q50wp02LQZGv+KHlkFZz6e9947eDu7EoKA7/67jehhJdCaYDfvw+3gLzD1mqo2/GggUPAAAAAElFTkSuQmCC"
  }
];
mipmaps.forEach( mipmap => {
  mipmap.img = new Image();
  const unlock = asyncLoader.createLock( mipmap.img );
  mipmap.img.onload = unlock;
  mipmap.img.src = mipmap.url; // trigger the loading of the image for its level
  mipmap.canvas = document.createElement( 'canvas' );
  mipmap.canvas.width = mipmap.width;
  mipmap.canvas.height = mipmap.height;
  const context = mipmap.canvas.getContext( '2d' );
  mipmap.updateCanvas = () => {
    if ( mipmap.img.complete && ( typeof mipmap.img.naturalWidth === 'undefined' || mipmap.img.naturalWidth > 0 ) ) {
      context.drawImage( mipmap.img, 0, 0 );
      delete mipmap.updateCanvas;
    }
  };
} );
export default mipmaps;