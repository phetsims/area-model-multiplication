// Copyright 2024, University of Colorado Boulder

/**
 * Query parameters supported by this simulation.
 *
 * @author Chris Malley (PixelZoom, Inc.)
 */

import getGameLevelsSchema from '../../vegas/js/getGameLevelsSchema.js';
import areaModelMultiplication from './areaModelMultiplication.js';

const AreaModelMultiplicationQueryParameters = QueryStringMachine.getAll( {

  // The levels to show in the Game screen.
  gameLevels: getGameLevelsSchema( 6 )
} );

areaModelMultiplication.register( 'AreaModelMultiplicationQueryParameters', AreaModelMultiplicationQueryParameters );

export default AreaModelMultiplicationQueryParameters;