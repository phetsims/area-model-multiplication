// Copyright 2016, University of Colorado Boulder

/**
 *
 * @author Chris Malley (PixelZoom, Inc.)
 */
define( function( require ) {
  'use strict';

  // modules
  var inherit = require( 'PHET_CORE/inherit' );
  var areaModelMultiplication = require( 'AREA_MODEL_MULTIPLICATION/areaModelMultiplication' );
  var ProportionalArea = require( 'AREA_MODEL_COMMON/model/ProportionalArea' );

  /**
   * @constructor
   */
  function AreaModelMultiplicationModel() {
    //TODO
    window.area = new ProportionalArea();
  }

  areaModelMultiplication.register( 'AreaModelMultiplicationModel', AreaModelMultiplicationModel );

  return inherit( Object, AreaModelMultiplicationModel, {

    // @public
    reset: function() {
      //TODO
    },

    // @public
    step: function( dt ) {
      //TODO
    }
  } );
} );