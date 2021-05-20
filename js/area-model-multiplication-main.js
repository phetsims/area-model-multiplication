// Copyright 2016-2021, University of Colorado Boulder

/**
 * Main entry point for the sim.
 *
 * @author Jonathan Olson <jonathan.olson@colorado.edu>
 */

import ExploreScreen from '../../area-model-common/js/screens/ExploreScreen.js';
import GenericGameScreen from '../../area-model-common/js/screens/GenericGameScreen.js';
import GenericScreen from '../../area-model-common/js/screens/GenericScreen.js';
import Sim from '../../joist/js/Sim.js';
import simLauncher from '../../joist/js/simLauncher.js';
import areaModelMultiplicationStrings from './areaModelMultiplicationStrings.js';

const areaModelMultiplicationTitleString = areaModelMultiplicationStrings[ 'area-model-multiplication' ].title;

const simOptions = {
  credits: {
    leadDesign: 'Amy Hanson, Amanda McGarry',
    softwareDevelopment: 'Jonathan Olson',
    team: 'Karina Hensberry, Susan Miller, Ariel Paul, Kathy Perkins, Oliver Nix',
    qualityAssurance: 'Steele Dalton, Bryce Griebenow, Ethan Johnson, Liam Mulhall, Ben Roberts, Jacob Romero, Ethan Ward, Clara Wilson, Kathryn Woessner',
    graphicArts: 'Mariah Hermsmeyer, Amanda McGarry, Diana L\u00f3pez Tavares'
  }
};

simLauncher.launch( () => {
  const sim = new Sim( areaModelMultiplicationTitleString, [
    new ExploreScreen(),
    new GenericScreen(),
    new GenericGameScreen()
  ], simOptions );
  sim.start();
} );