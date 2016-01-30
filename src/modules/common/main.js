import {Component} from 'angular2/core';
import {Header} from './common/header/main';
import {Footer} from './common/footer/main';

@Component({ 
  selector: 'common',
  directives: [Header, Footer]
})

export class Common {}

