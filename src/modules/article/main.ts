import {Component, View, Inject} from 'angular2/core';
import {ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from 'angular2/router';
import {HTTP_PROVIDERS} from 'angular2/http';
import {Factory} from './files/factory';

@Component({ 
    selector: 'article',
    providers: [Factory, HTTP_PROVIDERS, ROUTER_PROVIDERS]
})

@View({ 
    directives: [ROUTER_DIRECTIVES],
    templateUrl: './modules/article/tmpl/article.html'
})

export class Article {
    articles: any;
    
    constructor(@Inject(Factory) factory: Factory) {
        this.articles = factory.getArticles();
        console.log(this.articles);
    }
}