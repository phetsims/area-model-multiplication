// Copyright 2023, University of Colorado Boulder

/**
 * This file instantiates the Africa modest region and culture portrayals.
 *
 * @author Luisa Vargas
 *
 */

import JugglerPortrayal from '../../../../area-model-common/js/game/view/JugglerPortrayal.js';
import JoistStrings from '../../../../joist/js/JoistStrings.js';
import { AFRICA_MODEST_REGION_AND_CULTURE_ID } from '../../../../joist/js/preferences/RegionAndCulturePortrayal.js';
import africaLevel2Icon_svg from '../../../images/localized/africaLevel2Icon_svg.js';
import africaLevel4Icon_svg from '../../../images/localized/africaLevel4Icon_svg.js';
import africaLevel5Icon_svg from '../../../images/localized/africaLevel5Icon_svg.js';
import africaModestGenericGameScreenIcon_svg from '../../../images/localized/africaModestGenericGameScreenIcon_svg.js';
import africaModestLevel1Icon_svg from '../../../images/localized/africaModestLevel1Icon_svg.js';
import africaModestLevel3Icon_svg from '../../../images/localized/africaModestLevel3Icon_svg.js';
import africaModestLevel6Icon_svg from '../../../images/localized/africaModestLevel6Icon_svg.js';

const africaModestString = JoistStrings.preferences.tabs.localization.regionAndCulture.portrayalSets.africaModestStringProperty;

const JugglerPortrayalAfricaModest = new JugglerPortrayal(
  africaModestString,
  africaModestLevel1Icon_svg,
  africaLevel2Icon_svg,
  africaModestLevel3Icon_svg,
  africaLevel4Icon_svg,
  africaLevel5Icon_svg,
  africaModestLevel6Icon_svg,
  africaModestGenericGameScreenIcon_svg,
  AFRICA_MODEST_REGION_AND_CULTURE_ID
);

export default JugglerPortrayalAfricaModest;