import {Component, View} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';

@Component({ 
  selector: 'home'
})

@View({ 
	directives: [ROUTER_DIRECTIVES],
	templateUrl: './modules/home/tmpl/home.html'
})

export class Home {}