// Copyright 2023-2024, University of Colorado Boulder

/**
 * This file instantiates the Oceania region and culture portrayals.
 *
 * @author Luisa Vargas
 *
 */

import JugglerPortrayal from '../../../../area-model-common/js/game/view/JugglerPortrayal.js';
import oceaniaGameHomeScreenIcon_svg from '../../../images/oceania/oceaniaGameHomeScreenIcon_svg.js';
import oceaniaLevel2Icon_svg from '../../../images/oceania/oceaniaLevel2Icon_svg.js';
import oceaniaLevel4Icon_svg from '../../../images/oceania/oceaniaLevel4Icon_svg.js';
import oceaniaLevel5Icon_svg from '../../../images/oceania/oceaniaLevel5Icon_svg.js';
import usaLevel1Icon_svg from '../../../images/usa/usaLevel1Icon_svg.js';
import usaLevel3Icon_svg from '../../../images/usa/usaLevel3Icon_svg.js';
import usaLevel6Icon_svg from '../../../images/usa/usaLevel6Icon_svg.js';

const JugglerPortrayalOceania = new JugglerPortrayal(
  'oceania',
  usaLevel1Icon_svg,
  oceaniaLevel2Icon_svg,
  usaLevel3Icon_svg,
  oceaniaLevel4Icon_svg,
  oceaniaLevel5Icon_svg,
  usaLevel6Icon_svg,
  oceaniaGameHomeScreenIcon_svg
);

export default JugglerPortrayalOceania;