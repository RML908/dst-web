import
{
  fadeIn,
  fadeInBottom,
  fadeInLeft,
  fadeInRight,
  fadeInTop,
  fadeOut,
  fadeOutBottom,
  fadeOutLeft,
  fadeOutRight,
  fadeOutTop
} from './fade';

import
{
  slideInBottom,
  slideInLeft,
  slideInRight,
  slideInTop,
  slideOutBottom,
  slideOutLeft,
  slideOutRight,
  slideOutTop
} from './slide';

import { zoomIn, zoomOut } from './zoom';
import { shake } from './shake';
import { expandCollapse } from './expand-collapse';


export const DstAnimations = [
  expandCollapse,
  fadeIn, fadeInTop, fadeInBottom, fadeInLeft, fadeInRight,
  fadeOut, fadeOutTop, fadeOutBottom, fadeOutLeft, fadeOutRight,
  shake,
  slideInTop, slideInBottom, slideInLeft, slideInRight,
  slideOutTop, slideOutBottom, slideOutLeft, slideOutRight,
  zoomIn, zoomOut
];
