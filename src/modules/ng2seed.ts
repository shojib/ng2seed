import {Component, View} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {ROUTER_PROVIDERS} from 'angular2/router';

import {Header} from './common/header/main';
import {Footer} from './common/footer/main';
import {Home} from './home/main';
import {Article} from './article/main';

@Component({ 
    selector: 'ng2seed',
    providers: [ROUTER_PROVIDERS]
})

@View({ 
	directives: [Header, Footer, Article, ROUTER_DIRECTIVES],
	template: `
		<header-widget>header...</header-widget>
		<router-outlet></router-outlet>
		<footer-widget>footer...</footer-widget>
		<br/><br/>
	`
})

@RouteConfig([
	{ path: '/home', component: Home, as: 'Home', useAsDefault: false },
	{ path: '/error', component: Error, as: 'Error', useAsDefault: false },
	{ path: '/', component: Article, as: 'Article', useAsDefault: true }
	// { path: '/poem', component: Poem }
])

export class Ng2Seed {}

