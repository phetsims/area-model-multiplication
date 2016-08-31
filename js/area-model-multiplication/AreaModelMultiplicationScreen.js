// Copyright 2016, University of Colorado Boulder

/**
 *
 * @author Chris Malley (PixelZoom, Inc.)
 */
define( function( require ) {
  'use strict';

  // modules
  var AreaModelMultiplicationModel = require( 'AREA_MODEL_MULTIPLICATION/area-model-multiplication/model/AreaModelMultiplicationModel' );
  var AreaModelMultiplicationScreenView = require( 'AREA_MODEL_MULTIPLICATION/area-model-multiplication/view/AreaModelMultiplicationScreenView' );
  var inherit = require( 'PHET_CORE/inherit' );
  var Screen = require( 'JOIST/Screen' );
  var areaModelMultiplication = require( 'AREA_MODEL_MULTIPLICATION/areaModelMultiplication' );

  // strings
  var areaModelMultiplicationTitleString = require( 'string!AREA_MODEL_MULTIPLICATION/area-model-multiplication.title' );

  /**
   * @constructor
   */
  function AreaModelMultiplicationScreen() {

    //If this is a single-screen sim, then no icon is necessary.
    //If there are multiple screens, then the icon must be provided here.
    var icon = null;

    Screen.call( this, areaModelMultiplicationTitleString, icon,
      function() { return new AreaModelMultiplicationModel(); },
      function( model ) { return new AreaModelMultiplicationScreenView( model ); },
      { backgroundColor: 'white' }
    );
  }

  areaModelMultiplication.register( 'AreaModelMultiplicationScreen', AreaModelMultiplicationScreen );

  return inherit( Screen, AreaModelMultiplicationScreen );
} );