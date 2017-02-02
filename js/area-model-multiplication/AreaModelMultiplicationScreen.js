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
  var Property = require( 'AXON/Property' );

  // strings
  var areaModelMultiplicationTitleString = require( 'string!AREA_MODEL_MULTIPLICATION/area-model-multiplication.title' );

  /**
   * @constructor
   */
  function AreaModelMultiplicationScreen() {

    var options = {
      name: areaModelMultiplicationTitleString,
      backgroundColorProperty: new Property( 'white' )
    };

    Screen.call( this,
      function() { return new AreaModelMultiplicationModel(); },
      function( model ) { return new AreaModelMultiplicationScreenView( model ); },
      options
    );
  }

  areaModelMultiplication.register( 'AreaModelMultiplicationScreen', AreaModelMultiplicationScreen );

  return inherit( Screen, AreaModelMultiplicationScreen );
} );