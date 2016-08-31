// Copyright 2016, University of Colorado Boulder

/**
 *
 * @author Chris Malley (PixelZoom, Inc.)
 */
define( function( require ) {
  'use strict';

  // modules
  var inherit = require( 'PHET_CORE/inherit' );
  var ScreenView = require( 'JOIST/ScreenView' );
  var ResetAllButton = require( 'SCENERY_PHET/buttons/ResetAllButton' );
  var areaModelMultiplication = require( 'AREA_MODEL_MULTIPLICATION/areaModelMultiplication' );

  /**
   * @param {AreaModelMultiplicationModel} areaModelMultiplicationModel
   * @constructor
   */
  function AreaModelMultiplicationScreenView( areaModelMultiplicationModel ) {

    ScreenView.call( this );

    // Reset All button
    var resetAllButton = new ResetAllButton( {
      listener: function() {
        areaModelMultiplicationModel.reset();
      },
      right:  this.layoutBounds.maxX - 10,
      bottom: this.layoutBounds.maxY - 10
    } );
    this.addChild( resetAllButton );
  }

  areaModelMultiplication.register( 'AreaModelMultiplicationScreenView', AreaModelMultiplicationScreenView );

  return inherit( ScreenView, AreaModelMultiplicationScreenView, {

    //TODO Called by the animation loop. Optional, so if your view has no animation, please delete this.
    // @public
    step: function( dt ) {
      //TODO Handle view animation here.
    }
  } );
} );