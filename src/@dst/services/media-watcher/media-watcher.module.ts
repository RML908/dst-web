import { NgModule } from '@angular/core';
import { DstMediaWatcherService } from '@dst/services/media-watcher/media-watcher.service';

@NgModule({
    providers: [
        DstMediaWatcherService
    ]
})
export class DstMediaWatcherModule
{
    /**
     * Constructor
     */
    constructor(private _DstMediaWatcherService: DstMediaWatcherService)
    {
    }
}
