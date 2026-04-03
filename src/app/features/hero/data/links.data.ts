import { LinksData } from '../../../core/models/links-data.model';
import { LinkType } from '../../../core/constants/consts';

export const LINKS: LinksData = {
  [LinkType.BUTTON]: [
    {
      text: 'Get Started Now',
      url: '/',
      type: LinkType.BUTTON,
    },
  ],
};
