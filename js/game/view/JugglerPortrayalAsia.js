// Copyright 2023-2024, University of Colorado Boulder

/**
 * This file instantiates the Asia region and culture portrayals.
 *
 * @author Luisa Vargas
 *
 */

import JugglerPortrayal from '../../../../area-model-common/js/game/view/JugglerPortrayal.js';
import asiaGameHomeScreenIcon_svg from '../../../images/asia/asiaGameHomeScreenIcon_svg.js';
import asiaLevel2Icon_svg from '../../../images/asia/asiaLevel2Icon_svg.js';
import asiaLevel4Icon_svg from '../../../images/asia/asiaLevel4Icon_svg.js';
import asiaLevel5Icon_svg from '../../../images/asia/asiaLevel5Icon_svg.js';
import asiaLevel6Icon_svg from '../../../images/asia/asiaLevel6Icon_svg.js';
import usaLevel1Icon_svg from '../../../images/usa/usaLevel1Icon_svg.js';
import usaLevel3Icon_svg from '../../../images/usa/usaLevel3Icon_svg.js';

const JugglerPortrayalAsia = new JugglerPortrayal(
  'asia',
  usaLevel1Icon_svg,
  asiaLevel2Icon_svg,
  usaLevel3Icon_svg,
  asiaLevel4Icon_svg,
  asiaLevel5Icon_svg,
  asiaLevel6Icon_svg,
  asiaGameHomeScreenIcon_svg
);

export default JugglerPortrayalAsia;