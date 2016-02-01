import {Component, View} from 'angular2/core';
import {Factory} from 'files/factory';
import {Service} from 'files/service';
import {Ctrl} from 'files/controller';

@Component({ 
  selector: 'article'
})

@View({ 
  directives: [Factory, Service, Ctrl],
  templateUrl: './modules/article/tmpl/article.html'
})

export class Article {}