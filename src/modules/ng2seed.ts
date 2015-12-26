
import {Component} from 'angular2/core';
import {CORE_DIRECTIVES} from 'angular2/common';
import {bootstrap} from 'angular2/platform/browser';

@Component({
    selector: 'my-app',
    template: '{{greetings}} {{appName}}',
    directives: [CORE_DIRECTIVES]
})

export class Ng2Seed {
    private greetings: string;
    private appName: string;
    
    constructor() {
        this.greetings = 'Welcome to ';
        this.appName = 'ng2seed.';
    }
    
}

bootstrap(Ng2Seed);

