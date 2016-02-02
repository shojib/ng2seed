import {Component, View, OnInit, Inject} from 'angular2/core';
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


export class Article implements OnInit {
    articles: any;
    errorMessage: any;
    
    ngOnInit() { 
        this.getArticles();
    }
    
    constructor(private factory: Factory) {}
    
    getArticles() {
        this.factory.getArticles()
            .subscribe(
                articles => this.articles = articles,
                error =>  this.errorMessage = <any>error);
    }
}