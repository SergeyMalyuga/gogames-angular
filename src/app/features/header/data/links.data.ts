import {LinkType} from '../../../core/constants/consts';
import {LinksData} from '../../../core/models/links-data.model';

export const LINKS: LinksData =
  {
    [LinkType.TEXT]: [
      {
        text: 'Home',
        url: '/',
        type: LinkType.TEXT
      },
      {
        text: 'About Us',
        url: '/',
        type: LinkType.TEXT
      },
      {
        text: 'Prices',
        url: '/',
        type: LinkType.TEXT
      },
      {
        text: 'Rules',
        url: '/',
        type: LinkType.TEXT
      }
    ],
    [LinkType.BUTTON]: [
      {
        text: 'Get Started Now',
        url: '/',
        type: LinkType.BUTTON
      }
    ]
  }

