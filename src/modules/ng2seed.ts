import {Component, View} from 'angular2/core';
import {Header} from './common/header/main';
import {Footer} from './common/footer/main';
import {Home} from './home/main';

@Component({ 
  selector: 'ng2seed'
})

@View({ 
  directives: [Header, Footer, Home],
  template: `
    <header-widget>header...</header-widget>
    <home>home...</home>
    <footer-widget>footer...</footer-widget>
    <br/><br/>
  `
})

export class Ng2Seed {}

