// Copyright 2023-2024, University of Colorado Boulder

/**
 * Extends the Game screen in Area Model: Multiplication. Passes in AMM's JugglerImages to the Game screen.
 *
 * @author Luisa Vargas
 */

import GenericGameScreen from '../../../area-model-common/js/screens/GenericGameScreen.js';
import areaModelMultiplication from '../areaModelMultiplication.js';
import AreaModelMultiplicationImages from '../AreaModelMultiplicationImages.js';
import AreaModelMultiplicationQueryParameters from '../AreaModelMultiplicationQueryParameters.js';
import JugglerCharacters from './view/JugglerCharacters.js';

class GameScreen extends GenericGameScreen {

  /**
   * @param { PreferencesModel } preferencesModel
   * @public
   */
  constructor( preferencesModel ) {

    super( preferencesModel, AreaModelMultiplicationImages.gameHomeScreenIconImageProperty,
      gameAreaModel => new JugglerCharacters( gameAreaModel ),
      AreaModelMultiplicationQueryParameters.gameLevels );
  }
}

areaModelMultiplication.register( 'GameScreen', GameScreen );
export default GameScreen;