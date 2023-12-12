// Copyright 2023, University of Colorado Boulder

/**
 * This file instantiates the Oceania region and culture portrayals.
 *
 * @author Luisa Vargas
 *
 */

import JoistStrings from '../../../../joist/js/JoistStrings.js';
import { OCEANIA_REGION_AND_CULTURE_ID } from '../../../../joist/js/preferences/RegionAndCulturePortrayal.js';
import genericGameScreenIcon_png from '../../../mipmaps/oceania/genericGameScreenIcon_png.js';
import level1Icon_svg from '../../../images/usa/level1Icon_svg.js';
import level2Icon_svg from '../../../images/oceania/level2Icon_svg.js';
import level3Icon_svg from '../../../images/usa/level3Icon_svg.js';
import level4Icon_svg from '../../../images/oceania/level4Icon_svg.js';
import level5Icon_svg from '../../../images/oceania/level5Icon_svg.js';
import level6Icon_svg from '../../../images/usa/level6Icon_svg.js';
import JugglerPortrayal from '../../../../area-model-common/js/game/view/JugglerPortrayal.js';

const oceaniaString = JoistStrings.preferences.tabs.localization.regionAndCulture.portrayalSets.oceaniaStringProperty;

const JugglerPortrayalOceania = new JugglerPortrayal(
  oceaniaString,
  level1Icon_svg,
  level2Icon_svg,
  level3Icon_svg,
  level4Icon_svg,
  level5Icon_svg,
  level6Icon_svg,
  genericGameScreenIcon_png,
  OCEANIA_REGION_AND_CULTURE_ID
);

export default JugglerPortrayalOceania;