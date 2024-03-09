// Copyright 2023-2024, University of Colorado Boulder

/**
 * This file instantiates the Africa region and culture portrayals.
 *
 * @author Luisa Vargas
 *
 */

import JugglerPortrayal from '../../../../area-model-common/js/game/view/JugglerPortrayal.js';
import JoistStrings from '../../../../joist/js/JoistStrings.js';
import { AFRICA_REGION_AND_CULTURE_ID } from '../../../../joist/js/preferences/RegionAndCulturePortrayal.js';
import africaGenericGameScreenIcon_svg from '../../../images/localized/africaGenericGameScreenIcon_svg.js';
import africaLevel1Icon_svg from '../../../images/localized/africaLevel1Icon_svg.js';
import africaLevel2Icon_svg from '../../../images/localized/africaLevel2Icon_svg.js';
import africaLevel3Icon_svg from '../../../images/localized/africaLevel3Icon_svg.js';
import africaLevel4Icon_svg from '../../../images/localized/africaLevel4Icon_svg.js';
import africaLevel5Icon_svg from '../../../images/localized/africaLevel5Icon_svg.js';
import africaLevel6Icon_svg from '../../../images/localized/africaLevel6Icon_svg.js';

const africaString = JoistStrings.preferences.tabs.localization.regionAndCulture.portrayalSets.africaStringProperty;

const JugglerPortrayalAfrica = new JugglerPortrayal(
  africaString,
  africaLevel1Icon_svg,
  africaLevel2Icon_svg,
  africaLevel3Icon_svg,
  africaLevel4Icon_svg,
  africaLevel5Icon_svg,
  africaLevel6Icon_svg,
  africaGenericGameScreenIcon_svg,
  AFRICA_REGION_AND_CULTURE_ID
);

export default JugglerPortrayalAfrica;