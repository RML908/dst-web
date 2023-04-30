import { Injectable } from '@angular/core';
import { DstDrawerComponent } from './drawer.component';

@Injectable({
    providedIn: 'root'
})
export class DstDrawerService
{
    private _componentRegistry: Map<string,DstDrawerComponent> = new Map<string, DstDrawerComponent>();

    /**
     * Constructor
     */
    constructor()
    {
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Register drawer component
     *
     * @param name
     * @param component
     */
    registerComponent(name: string, component: DstDrawerComponent): void
    {
        this._componentRegistry.set(name, component);
    }

    /**
     * Deregister drawer component
     *
     * @param name
     */
    deregisterComponent(name: string): void
    {
        this._componentRegistry.delete(name);
    }

    /**
     * Get drawer component from the registry
     *
     * @param name
     */
    getComponent(name: string):DstDrawerComponent | undefined
    {
        return this._componentRegistry.get(name);
    }
}
