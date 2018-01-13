// Copyright 2016-2017, University of Colorado Boulder

/**
 * Main entry point for the sim.
 *
 * @author Jonathan Olson <jonathan.olson@colorado.edu>
 */
define( function( require ) {
  'use strict';

  // modules
  var ExploreScreen = require( 'AREA_MODEL_COMMON/screens/ExploreScreen' );
  var GenericGameScreen = require( 'AREA_MODEL_COMMON/screens/GenericGameScreen' );
  var GenericScreen = require( 'AREA_MODEL_COMMON/screens/GenericScreen' );
  var ScaledGameChallengesScreen = require( 'AREA_MODEL_COMMON/screens/ScaledGameChallengesScreen' );
  var ScaledGameScreen = require( 'AREA_MODEL_COMMON/screens/ScaledGameScreen' );
  var Sim = require( 'JOIST/Sim' );
  var SimLauncher = require( 'JOIST/SimLauncher' );
  var GenericGameChallengesScreen = require( 'AREA_MODEL_COMMON/screens/GenericGameChallengesScreen' );

  // strings
  var areaModelMultiplicationTitleString = require( 'string!AREA_MODEL_MULTIPLICATION/area-model-multiplication.title' );

  var simOptions = {
    credits: {
      //TODO fill in proper credits, all of these fields are optional, see joist.AboutDialog
      leadDesign: '',
      softwareDevelopment: '',
      team: '',
      qualityAssurance: '',
      graphicArts: '',
      thanks: ''
    }
  };

  SimLauncher.launch( function() {
    var sim = new Sim( areaModelMultiplicationTitleString, [
      new ExploreScreen(),
      new ScaledGameScreen(),
      new GenericScreen(),
      new GenericGameScreen(),
      new ScaledGameChallengesScreen(),
      new GenericGameChallengesScreen()
    ], simOptions );
    sim.start();
  } );
} );
