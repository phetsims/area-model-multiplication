// Copyright 2017, University of Colorado Boulder

/**
 * Main entry point for the sim.
 *
 * @author Jonathan Olson <jonathan.olson@colorado.edu>
 */
define( function( require ) {
  'use strict';

  // modules
  var CrimsonScreen = require( 'AREA_MODEL_MULTIPLICATION/area-model-multiplication/CrimsonScreen' );
  var DecimalsScreen = require( 'AREA_MODEL_MULTIPLICATION/area-model-multiplication/DecimalsScreen' );
  var GrapeScreen = require( 'AREA_MODEL_MULTIPLICATION/area-model-multiplication/GrapeScreen' );
  var RaccoonScreen = require( 'AREA_MODEL_MULTIPLICATION/area-model-multiplication/RaccoonScreen' );
  var Sim = require( 'JOIST/Sim' );
  var SimLauncher = require( 'JOIST/SimLauncher' );

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
      new RaccoonScreen(),
      new CrimsonScreen(),
      new GrapeScreen(),
      new DecimalsScreen()
    ], simOptions );
    sim.start();
  } );
} );
