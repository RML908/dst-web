import { IsActiveMatchOptions, Params, QueryParamsHandling } from '@angular/router';

export interface DstNavigationItem
{
    id?: string;
    title?: string;
    subtitle?: string;
    type:
        | 'aside'
        | 'basic'
        | 'collapsable'
        | 'divider'
        | 'group'
        | 'spacer';
    hidden?: (item: DstNavigationItem) => boolean;
    active?: boolean;
    disabled?: boolean;
    tooltip?: string;
    link?: string;
    fragment?: string;
    preserveFragment?: boolean;
    queryParams?: Params | null;
    queryParamsHandling?: QueryParamsHandling | null;
    externalLink?: boolean;
    target?:
        | '_blank'
        | '_self'
        | '_parent'
        | '_top'
        | string;
    exactMatch?: boolean;
    isActiveMatchOptions?: IsActiveMatchOptions;
    function?: (item: DstNavigationItem) => void;
    classes?: {
        title?: string;
        subtitle?: string;
        icon?: string;
        wrapper?: string;
    };
    icon?: string;
    badge?: {
        title?: string;
        classes?: string;
    };
    children?: DstNavigationItem[];
    meta?: any;
}

export type DstVerticalNavigationAppearance =
    | 'default'
    | 'compact'
    | 'dense'
    | 'thin';

export type DstVerticalNavigationMode =
    | 'over'
    | 'side';

export type DstVerticalNavigationPosition =
    | 'left'
    | 'right';
