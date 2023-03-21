import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { DstLoadingInterceptor } from '@dst/services/loading/loading.interceptor';

@NgModule({
    providers: [
        {
            provide : HTTP_INTERCEPTORS,
            useClass: DstLoadingInterceptor,
            multi   : true
        }
    ]
})
export class DstLoadingModule
{
}
