// Copyright 2016-2019, University of Colorado Boulder

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
  var Sim = require( 'JOIST/Sim' );
  var SimLauncher = require( 'JOIST/SimLauncher' );

  // strings
  var areaModelMultiplicationTitleString = require( 'string!AREA_MODEL_MULTIPLICATION/area-model-multiplication.title' );

  var simOptions = {
    credits: {
      leadDesign: 'Amy Hanson, Amanda McGarry',
      softwareDevelopment: 'Jonathan Olson',
      team: 'Karina Hensberry, Susan Miller, Ariel Paul, Kathy Perkins, Oliver Nix',
      qualityAssurance: 'Steele Dalton, Bryce Griebenow, Ethan Johnson, Liam Mulhall, Ben Roberts, Clara Wilson',
      graphicArts: 'Mariah Hermsmeyer, Amanda McGarry, Diana L\u00f3pez Tavares'
    }
  };

  SimLauncher.launch( function() {
    var sim = new Sim( areaModelMultiplicationTitleString, [
      new ExploreScreen(),
      new GenericScreen(),
      new GenericGameScreen()
    ], simOptions );
    sim.start();
  } );
} );
