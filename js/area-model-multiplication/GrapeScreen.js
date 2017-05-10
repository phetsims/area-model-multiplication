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
  var GenericAreaModel = require( 'AREA_MODEL_COMMON/model/GenericAreaModel' );
  var GenericAreaScreenView = require( 'AREA_MODEL_COMMON/view/GenericAreaScreenView' );
  var inherit = require( 'PHET_CORE/inherit' );
  var Screen = require( 'JOIST/Screen' );

  // strings
  var screenGrapeString = require( 'string!AREA_MODEL_COMMON/screen.grape' );

  /**
   * @constructor
   */
  function GrapeScreen() {

    var options = {
      name: screenGrapeString,
      backgroundColorProperty: AreaModelColorProfile.backgroundProperty
    };

    Screen.call( this,
      function() { return new GenericAreaModel(); },
      function( model ) { return new GenericAreaScreenView( model ); },
      options
    );
  }

  areaModelMultiplication.register( 'GrapeScreen', GrapeScreen );

  return inherit( Screen, GrapeScreen );
} );
