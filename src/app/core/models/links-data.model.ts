import { LinkModel } from './link.model';
import { LinkType } from '../constants/consts';

export type LinksData = Partial<Record<LinkType, LinkModel[]>>;
