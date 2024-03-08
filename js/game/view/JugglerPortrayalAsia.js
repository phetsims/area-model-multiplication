// Copyright 2023, University of Colorado Boulder

/**
 * This file instantiates the Asia region and culture portrayals.
 *
 * @author Luisa Vargas
 *
 */

import JugglerPortrayal from '../../../../area-model-common/js/game/view/JugglerPortrayal.js';
import JoistStrings from '../../../../joist/js/JoistStrings.js';
import { ASIA_REGION_AND_CULTURE_ID } from '../../../../joist/js/preferences/RegionAndCulturePortrayal.js';
import asiaGenericGameScreenIcon_svg from '../../../images/localized/asiaGenericGameScreenIcon_svg.js';
import asiaLevel2Icon_svg from '../../../images/localized/asiaLevel2Icon_svg.js';
import asiaLevel4Icon_svg from '../../../images/localized/asiaLevel4Icon_svg.js';
import asiaLevel5Icon_svg from '../../../images/localized/asiaLevel5Icon_svg.js';
import asiaLevel6Icon_svg from '../../../images/localized/asiaLevel6Icon_svg.js';
import usaLevel1Icon_svg from '../../../images/localized/usaLevel1Icon_svg.js';
import usaLevel3Icon_svg from '../../../images/localized/usaLevel3Icon_svg.js';

const asiaString = JoistStrings.preferences.tabs.localization.regionAndCulture.portrayalSets.asiaStringProperty;

const JugglerPortrayalAsia = new JugglerPortrayal(
  asiaString,
  usaLevel1Icon_svg,
  asiaLevel2Icon_svg,
  usaLevel3Icon_svg,
  asiaLevel4Icon_svg,
  asiaLevel5Icon_svg,
  asiaLevel6Icon_svg,
  asiaGenericGameScreenIcon_svg,
  ASIA_REGION_AND_CULTURE_ID
);

export default JugglerPortrayalAsia;