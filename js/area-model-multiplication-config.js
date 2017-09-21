// Copyright 2016-2017, University of Colorado Boulder

/**
 * RequireJS configuration file for the sim.
 *
 * @author Jonathan Olson <jonathan.olson@colorado.edu>
 */
require.config( {

  // An array of dependencies to load. Useful when require is defined as a config object before require.js
  // is loaded, and you want to specify dependencies to load as soon as require() is defined.
  deps: [ 'area-model-multiplication-main' ],

  // baseUrl: don't bother trying to set it here, it is overridden by data-main in the top-level HTML file

  // Path mappings for module names not found directly under baseUrl. The path settings are assumed to be
  // relative to baseUrl unless the paths setting starts with a '/' or has a URL protocol.
  paths: {

    // third-party libs
    text: '../../sherpa/lib/text-2.0.12',

    // PhET plugins
    audio: '../../chipper/js/requirejs-plugins/audio',
    image: '../../chipper/js/requirejs-plugins/image',
    mipmap: '../../chipper/js/requirejs-plugins/mipmap',
    string: '../../chipper/js/requirejs-plugins/string',
    ifphetio: '../../chipper/js/requirejs-plugins/ifphetio',

    // common directories, uppercase names to identify them in require imports
    AREA_MODEL_COMMON: '../../area-model-common/js',
    AXON: '../../axon/js',
    BRAND: '../../brand/' + phet.chipper.brand + '/js',
    DOT: '../../dot/js',
    JOIST: '../../joist/js',
    KITE: '../../kite/js',
    PHET_CORE: '../../phet-core/js',
    PHET_IO: '../../phet-io/js',
    PHETCOMMON: '../../phetcommon/js',
    REPOSITORY: '..',
    SCENERY: '../../scenery/js',
    SCENERY_PHET: '../../scenery-phet/js',
    SUN: '../../sun/js',
    TANDEM: '../../tandem/js',
    TWIXT: '../../twixt/js',
    VIBE: '../../vibe/js',
    VEGAS: '../../vegas/js',

    // this sim
    AREA_MODEL_MULTIPLICATION: '.'
  },

  // optional cache buster to make browser refresh load all included scripts, can be disabled with ?cacheBuster=false
  urlArgs: phet.chipper.getCacheBusterArgs()
} );
