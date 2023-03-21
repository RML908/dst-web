import { ModuleWithProviders, NgModule } from '@angular/core';
import { DstConfigService } from '@dst/services/config/config.service';
import { DST_APP_CONFIG } from '@dst/services/config/config.constants';

@NgModule()
export class DstConfigModule
{
    /**
     * Constructor
     */
    constructor(private _dstConfigService: DstConfigService)
    {
    }

    /**
     * forRoot method for setting user configuration
     *
     * @param config
     */
    static forRoot(config: any): ModuleWithProviders<DstConfigModule>
    {
        return {
            ngModule : DstConfigModule,
            providers: [
                {
                    provide : DST_APP_CONFIG,
                    useValue: config
                }
            ]
        };
    }
}
