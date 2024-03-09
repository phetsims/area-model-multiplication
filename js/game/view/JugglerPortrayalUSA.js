// Copyright 2023-2024, University of Colorado Boulder

/**
 * This file instantiates the USA region and culture portrayals.
 *
 * @author Luisa Vargas
 *
 */

import JugglerPortrayal from '../../../../area-model-common/js/game/view/JugglerPortrayal.js';
import JoistStrings from '../../../../joist/js/JoistStrings.js';
import { USA_REGION_AND_CULTURE_ID } from '../../../../joist/js/preferences/RegionAndCulturePortrayal.js';
import usaGenericGameScreenIcon_svg from '../../../images/usa/usaGenericGameScreenIcon_svg.js';
import usaLevel1Icon_svg from '../../../images/usa/usaLevel1Icon_svg.js';
import usaLevel2Icon_svg from '../../../images/usa/usaLevel2Icon_svg.js';
import usaLevel3Icon_svg from '../../../images/usa/usaLevel3Icon_svg.js';
import usaLevel4Icon_svg from '../../../images/usa/usaLevel4Icon_svg.js';
import usaLevel5Icon_svg from '../../../images/usa/usaLevel5Icon_svg.js';
import usaLevel6Icon_svg from '../../../images/usa/usaLevel6Icon_svg.js';

const unitedStatesOfAmericaString = JoistStrings.preferences.tabs.localization.regionAndCulture.portrayalSets.unitedStatesOfAmericaStringProperty;

const JugglerPortrayalUSA = new JugglerPortrayal(
  unitedStatesOfAmericaString,
  usaLevel1Icon_svg,
  usaLevel2Icon_svg,
  usaLevel3Icon_svg,
  usaLevel4Icon_svg,
  usaLevel5Icon_svg,
  usaLevel6Icon_svg,
  usaGenericGameScreenIcon_svg,
  USA_REGION_AND_CULTURE_ID
);

export default JugglerPortrayalUSA;