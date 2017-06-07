// Copyright 2017, University of Colorado Boulder

/**
 * TODO: doc
 *
 * @author Jonathan Olson <jonathan.olson@colorado.edu>
 */
define( function( require ) {
  'use strict';

  // modules
  var AreaModelColorProfile = require( 'AREA_MODEL_COMMON/common/view/AreaModelColorProfile' );
  var areaModelMultiplication = require( 'AREA_MODEL_MULTIPLICATION/areaModelMultiplication' );
  var GameAreaModel = require( 'AREA_MODEL_COMMON/game/model/GameAreaModel' );
  var GameAreaScreenView = require( 'AREA_MODEL_COMMON/game/view/GameAreaScreenView' );
  var inherit = require( 'PHET_CORE/inherit' );
  var Screen = require( 'JOIST/Screen' );

  // strings
  var screenChallengesString = require( 'string!AREA_MODEL_COMMON/screen.challenges' );

  /**
   * @constructor
   */
  function ChallengesScreen() {

    var options = {
      name: screenChallengesString,
      backgroundColorProperty: AreaModelColorProfile.backgroundProperty
    };

    Screen.call( this,
      function() { return new GameAreaModel( true ); },
      function( model ) { return new GameAreaScreenView( model ); },
      options
    );
  }

  areaModelMultiplication.register( 'ChallengesScreen', ChallengesScreen );

  return inherit( Screen, ChallengesScreen );
} );
