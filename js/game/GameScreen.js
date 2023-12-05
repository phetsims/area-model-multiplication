// Copyright 2023, University of Colorado Boulder

/**
 * Extends the Game screen in Area Model: Multiplication. Passes in AMM's JugglerImages to the Game screen.
 *
 * @author Luisa Vargas
 */

import GenericGameScreen from '../../../area-model-common/js/screens/GenericGameScreen.js';
import areaModelMultiplication from '../areaModelMultiplication.js';
import JugglerController from './view/JugglerController.js';
import JugglerImages from './view/JugglerImages.js';

class GameScreen extends GenericGameScreen {

  /**
   * @param { PreferencesModel } preferencesModel
   * @public
   */
  constructor( preferencesModel ) {

    super( preferencesModel, JugglerImages.JUGGLER_CHARACTER_SETS,
        gameAreaModel => new JugglerController( gameAreaModel ) );
  }
}

areaModelMultiplication.register( 'GameScreen', GameScreen );
export default GameScreen;