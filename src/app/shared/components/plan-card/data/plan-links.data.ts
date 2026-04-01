import {LinksData} from '../../../../core/models/links-data.model';
import {LinkType} from '../../../../core/constants/consts';

export const PLAN_LINKS: LinksData = {
  [LinkType.BUTTON]: [{
    text: 'Select This Plan',
    url: '/',
    type: LinkType.BUTTON
  }]
};
