// Copyright 2023-2024, University of Colorado Boulder

/**
 * This file instantiates the Africa region and culture portrayals.
 *
 * @author Luisa Vargas
 *
 */

import JugglerPortrayal from '../../../../area-model-common/js/game/view/JugglerPortrayal.js';
import africaGenericGameScreenIcon_svg from '../../../images/africa/africaGenericGameScreenIcon_svg.js';
import africaLevel1Icon_svg from '../../../images/africa/africaLevel1Icon_svg.js';
import africaLevel2Icon_svg from '../../../images/africa/africaLevel2Icon_svg.js';
import africaLevel3Icon_svg from '../../../images/africa/africaLevel3Icon_svg.js';
import africaLevel4Icon_svg from '../../../images/africa/africaLevel4Icon_svg.js';
import africaLevel5Icon_svg from '../../../images/africa/africaLevel5Icon_svg.js';
import africaLevel6Icon_svg from '../../../images/africa/africaLevel6Icon_svg.js';

const JugglerPortrayalAfrica = new JugglerPortrayal(
  'africa',
  africaLevel1Icon_svg,
  africaLevel2Icon_svg,
  africaLevel3Icon_svg,
  africaLevel4Icon_svg,
  africaLevel5Icon_svg,
  africaLevel6Icon_svg,
  africaGenericGameScreenIcon_svg
);

export default JugglerPortrayalAfrica;