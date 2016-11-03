// Copyright 2016, University of Colorado Boulder

/**
 *
 * @author Chris Malley (PixelZoom, Inc.)
 */
define( function( require ) {
  'use strict';

  // modules
  var inherit = require( 'PHET_CORE/inherit' );
  var PropertySet = require( 'AXON/PropertySet' );
  var areaModelMultiplication = require( 'AREA_MODEL_MULTIPLICATION/areaModelMultiplication' );

  /**
   * @constructor
   */
  function AreaModelMultiplicationModel() {
    //TODO
  }

  areaModelMultiplication.register( 'AreaModelMultiplicationModel', AreaModelMultiplicationModel );

  return inherit( Object, AreaModelMultiplicationModel, {

    // @public
    reset: function() {
      //TODO
    },

    //TODO Called by the animation loop. Optional, so if your model has no animation, please delete this.
    // @public
    step: function( dt ) {
      //TODO Handle model animation here.
    }
  } );
} );