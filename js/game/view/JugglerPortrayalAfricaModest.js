// Copyright 2023, University of Colorado Boulder

/**
 * This file instantiates the Africa modest region and culture portrayals.
 *
 * @author Luisa Vargas
 *
 */

import JoistStrings from '../../../../joist/js/JoistStrings.js';
import { AFRICA_MODEST_REGION_AND_CULTURE_ID } from '../../../../joist/js/preferences/RegionAndCulturePortrayal.js';
import genericGameScreenIcon_png from '../../../mipmaps/africa-modest/genericGameScreenIcon_png.js';
import level1Icon_svg from '../../../images/africa-modest/level1Icon_svg.js';
import level2Icon_svg from '../../../images/africa/level2Icon_svg.js';
import level3Icon_svg from '../../../images/africa-modest/level3Icon_svg.js';
import level4Icon_svg from '../../../images/africa/level4Icon_svg.js';
import level5Icon_svg from '../../../images/africa/level5Icon_svg.js';
import level6Icon_svg from '../../../images/africa-modest/level6Icon_svg.js';
import JugglerPortrayal from '../../../../area-model-common/js/game/view/JugglerPortrayal.js';

const africaModestString = JoistStrings.preferences.tabs.localization.regionAndCulture.portrayalSets.africaModestStringProperty;

const JugglerPortrayalAfricaModest = new JugglerPortrayal(
  africaModestString,
  level1Icon_svg,
  level2Icon_svg,
  level3Icon_svg,
  level4Icon_svg,
  level5Icon_svg,
  level6Icon_svg,
  genericGameScreenIcon_png,
  AFRICA_MODEST_REGION_AND_CULTURE_ID
);

export default JugglerPortrayalAfricaModest;