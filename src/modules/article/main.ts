import {Component, View, Inject, Injectable} from 'angular2/core';
import {ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from 'angular2/router';
import {Factory} from './files/factory';
import {HTTP_PROVIDERS} from 'angular2/http';

@Component({ 
    selector: 'article',
    providers: [Factory, HTTP_PROVIDERS]
})

@View({ 
    directives: [ROUTER_DIRECTIVES],
    templateUrl: './modules/article/tmpl/article.html'
})


export class Article {
    articles: any;
    
    constructor(@Inject(Factory) factory) {
        this.articles = factory.getArticles();
        console.log('Article: ' + this.articles);
    }
}