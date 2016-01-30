"use strict";

import angular from "angular";

var DefaultError = angular.module("ngES6.error.404", ["ui.router"]);

DefaultError.config([
  "$stateProvider", function(stateProvider) {
    stateProvider.state("error404", {
      url: "/error/404",
      templateUrl: "/modules/common/error/tmpl/404.html"
    });
  }
]);

import {Component, View} from 'angular2/core';
import { routerInjectables } from 'angular2/router';

@Component({ 
  selector: 'header'
})

@View({ 
  templateUrl: './modules/common/header/tmpl/header.html'
})

export class Header {}

