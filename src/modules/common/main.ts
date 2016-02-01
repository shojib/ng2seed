import {Component} from 'angular2/core';
import {Header} from './header/main';
import {Footer} from './footer/main';

@Component({ 
  selector: 'common',
  directives: [Header, Footer]
})

export class Common {}

