import {Component, View} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {Header} from './common/header/main';
import {Footer} from './common/footer/main';
import {Home} from './home/main';

@Component({ 
	selector: 'ng2seed'
})

@View({ 
	directives: [Header, Footer, ROUTER_DIRECTIVES],
	template: `
		<header-widget>header...</header-widget>
		<router-outlet></router-outlet>
		<footer-widget>footer...</footer-widget>
		<br/><br/>
	`
})

@RouteConfig([
	{ path: '/', component: Home, as: 'Home', useAsDefault: true },
	{ path: '/error', component: Error, as: 'Error' }
	// { path: '/article', component: Article },
	// { path: '/poem', component: Poem }
])

export class Ng2Seed {}

