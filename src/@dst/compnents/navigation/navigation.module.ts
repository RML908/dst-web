import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatTooltipModule } from '@angular/material/tooltip';
import { DstScrollbarModule } from '@dst/directives/scrollbar/public-api';
import {DstHorizontalNavigationBasicItemComponent} from "./horizontal/components/basic/basic.component";
import {DstHorizontalNavigationComponent} from "./horizontal/horizontal.component";
import {DstVerticalNavigationComponent} from "./vertical/vertical.component";

import {DstVerticalNavigationAsideItemComponent} from "./vertical/components/aside/aside.component";
import {DstVerticalNavigationBasicItemComponent} from "./vertical/components/basic/basic.component";
import {DstVerticalNavigationCollapsableItemComponent} from "./vertical/components/collapsable/collapsable.component";
import {DstVerticalNavigationSpacerItemComponent} from "./vertical/components/spacer/spacer.component";
import {DstVerticalNavigationGroupItemComponent} from "./vertical/components/group/group.component";
import {DstVerticalNavigationDividerItemComponent} from "./vertical/components/divider/divider.component";
import {DstHorizontalNavigationBranchItemComponent} from "./horizontal/components/branch/branch.component";
import {DstHorizontalNavigationSpacerItemComponent} from "./horizontal/components/spacer/spacer.component";
import {DstHorizontalNavigationDividerItemComponent} from "./horizontal/components/divider/divider.component";

@NgModule({
    declarations: [
      DstHorizontalNavigationBasicItemComponent,
      DstHorizontalNavigationBranchItemComponent,
      DstHorizontalNavigationDividerItemComponent,
      DstHorizontalNavigationSpacerItemComponent,
      DstHorizontalNavigationComponent,
      DstVerticalNavigationAsideItemComponent,
      DstVerticalNavigationBasicItemComponent,
      DstVerticalNavigationCollapsableItemComponent,
      DstVerticalNavigationDividerItemComponent,
      DstVerticalNavigationGroupItemComponent,
      DstVerticalNavigationSpacerItemComponent,
      DstVerticalNavigationComponent

    ],
    imports     : [
        CommonModule,
        RouterModule,
        MatButtonModule,
        MatDividerModule,
        MatIconModule,
        MatMenuModule,
        MatTooltipModule,
        DstScrollbarModule
    ],
    exports     : [
        DstHorizontalNavigationComponent,
        DstVerticalNavigationComponent,
    ]
})
export class DstNavigationModule
{
}
