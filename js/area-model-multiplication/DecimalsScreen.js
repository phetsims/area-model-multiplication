// Copyright 2017, University of Colorado Boulder

/**
 * TODO: doc
 *
 * @author Jonathan Olson <jonathan.olson@colorado.edu>
 */
define( function( require ) {
  'use strict';

  // modules
  var AreaModelColorProfile = require( 'AREA_MODEL_COMMON/view/AreaModelColorProfile' );
  var areaModelMultiplication = require( 'AREA_MODEL_MULTIPLICATION/areaModelMultiplication' );
  var inherit = require( 'PHET_CORE/inherit' );
  var ProportionalAreaModel = require( 'AREA_MODEL_COMMON/model/ProportionalAreaModel' );
  var ProportionalAreaScreenView = require( 'AREA_MODEL_COMMON/view/ProportionalAreaScreenView' );
  var Screen = require( 'JOIST/Screen' );

  // strings
  var screenDecimalsString = require( 'string!AREA_MODEL_COMMON/screen.decimals' );

  /**
   * @constructor
   */
  function DecimalsScreen() {

    var options = {
      name: screenDecimalsString,
      backgroundColorProperty: AreaModelColorProfile.backgroundProperty
    };

    Screen.call( this,
      function() { return new ProportionalAreaModel( [
        // TODO: clean up shared constants
        {
          maximumSize: 1,
          minimumSize: 0.1,
          initialWidth: 0.1,
          initialHeight: 0.1,
          snapSize: 0.1,
          smallTileSize: 0.1,
          largeTileSize: 10
        },
        {
          maximumSize: 2,
          minimumSize: 0.1,
          initialWidth: 1,
          initialHeight: 1,
          snapSize: 0.1,
          smallTileSize: 0.1,
          largeTileSize: 10
        },
        {
          maximumSize: 4,
          minimumSize: 0.2,
          initialWidth: 1,
          initialHeight: 1,
          snapSize: 0.2,
          smallTileSize: 0.1,
          largeTileSize: 10
        }
      ] ); },
      function( model ) { return new ProportionalAreaScreenView( model ); },
      options
    );
  }

  areaModelMultiplication.register( 'DecimalsScreen', DecimalsScreen );

  return inherit( Screen, DecimalsScreen );
} );
