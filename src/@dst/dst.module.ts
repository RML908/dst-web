import {NgModule, Optional, SkipSelf} from '@angular/core';
import {MAT_FORM_FIELD_DEFAULT_OPTIONS} from "@angular/material/form-field";
import {MATERIAL_SANITY_CHECKS} from "@angular/material/core";
import {DstUtilsModule} from "./services/utils";
import {DstLoadingModule} from "./services/loading";
import {DstMediaWatcherModule} from "./services/media-watcher";
import {DstPlatformModule} from "./services/platform/platform.module";
import {DstSplashScreenModule} from "./services/splash-screen";
import {DstConfirmationModule, DstConfirmationService} from "./services/confirmation";



@NgModule({
  imports: [
    DstConfirmationModule,
    DstLoadingModule,
    DstMediaWatcherModule,
    DstPlatformModule,
    DstSplashScreenModule,
    DstUtilsModule,
  ],
  providers: [
    {
      // Disable 'theme' sanity check
      provide : MATERIAL_SANITY_CHECKS,
      useValue: {
        doctype: true,
        theme  : false,
        version: true
      }
    },
    {
      // Use the 'fill' appearance on Angular Material form fields by default
      provide : MAT_FORM_FIELD_DEFAULT_OPTIONS,
      useValue: {
        appearance: 'fill'
      }
    }
  ]
})

export class DstModule
{
  /**
   * Constructor
   */
  constructor(@Optional() @SkipSelf() parentModule?: DstModule)
  {
    if ( parentModule )
    {
      throw new Error('DstModule has already been loaded. Import this module in the AppModule only!');
    }
  }

}
