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
  var screenExploreString = require( 'string!AREA_MODEL_COMMON/screen.explore' );

  /**
   * @constructor
   */
  function ExploreScreen() {

    var options = {
      name: screenExploreString,
      backgroundColorProperty: AreaModelColorProfile.backgroundProperty
    };

    Screen.call( this,
      function() { return new ProportionalAreaModel( [
        {
          maximumSize: 20,
          minimumSize: 1,
          initialWidth: 1,
          initialHeight: 1,
          snapSize: 1,
          partitionSnapSize: 1,
          gridSpacing: 1,
          smallTileSize: 1,
          largeTileSize: 10
        },
        {
          maximumSize: 100,
          minimumSize: 1,
          initialWidth: 10,
          initialHeight: 10,
          snapSize: 1,
          gridSpacing: 10,
          tilesAvailable: false
        }
      ] ); },
      function( model ) { return new ProportionalAreaScreenView( model, 0 ); },
      options
    );
  }

  areaModelMultiplication.register( 'ExploreScreen', ExploreScreen );

  return inherit( Screen, ExploreScreen );
} );
