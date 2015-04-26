/* @shojib */

'use strict';

define(["require", "angular", "ngMocks", "uiRouter", "ngTranslate", "Poem"],

	function(require, angular, mocks, rotuer, translate, poem) {

		describe('Poem Module Test:', function() {

			describe('Controller:', function() {

				var scope, translate, translateProvider;

				beforeEach(function() {
					module('ui.router');
					module('pascalprecht.translate');
					module('ngES6.poem');

					inject(function($rootScope, $controller, $translate) {
		        scope = $rootScope.$new();

		        translate= $translate;
		        $controller('controller', {$scope: scope, $translate: translate});
		    	});
				});

        it('Should have a Poem module defined', function() {
          expect('ngES6.poem').toBeDefined();
        });

			});

		});

	}
);
