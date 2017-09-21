// Copyright 2016-2017, University of Colorado Boulder

/**
 * Main entry point for the sim.
 *
 * @author Jonathan Olson <jonathan.olson@colorado.edu>
 */
define( function( require ) {
  'use strict';

  // modules
  var ChallengesScreen = require( 'AREA_MODEL_MULTIPLICATION/area-model-multiplication/ChallengesScreen' );
  var DecimalsScreen = require( 'AREA_MODEL_MULTIPLICATION/area-model-multiplication/DecimalsScreen' );
  var ExploreScreen = require( 'AREA_MODEL_MULTIPLICATION/area-model-multiplication/ExploreScreen' );
  var GameScreen = require( 'AREA_MODEL_MULTIPLICATION/area-model-multiplication/GameScreen' );
  var GenericScreen = require( 'AREA_MODEL_MULTIPLICATION/area-model-multiplication/GenericScreen' );
  var Sim = require( 'JOIST/Sim' );
  var SimLauncher = require( 'JOIST/SimLauncher' );
  var VariablesScreen = require( 'AREA_MODEL_MULTIPLICATION/area-model-multiplication/VariablesScreen' );

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
      new GenericScreen(),
      new VariablesScreen(),
      new DecimalsScreen(),
      new GameScreen(),
      new ChallengesScreen()
    ], simOptions );
    sim.start();
  } );
} );
