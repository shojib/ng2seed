
import {bootstrap, Component, CORE_DIRECTIVES} from 'angular2/angular2';

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

