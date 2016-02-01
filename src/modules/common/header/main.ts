import {Component, View} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';

@Component({ 
  selector: 'header-widget'
})

@View({ 
	directives: [ROUTER_DIRECTIVES],
	templateUrl: './modules/common/header/tmpl/header.html'
})

export class Header {}

