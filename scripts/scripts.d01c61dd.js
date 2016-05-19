"use strict";angular.module("cookbriteApp",["ngAnimate","ngAria","ngCookies","ngMessages","ngResource","ngRoute","ngSanitize","ngTouch"]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl",controllerAs:"main"}).when("/about",{templateUrl:"views/about.html",controller:"AboutCtrl",controllerAs:"about"}).otherwise({redirectTo:"/"})}]),angular.module("cookbriteApp").controller("MainCtrl",["$scope","$sce","recipes",function(a,b,c){a.getRecipes=function(){a.recipes=c.query({ingredient:a.ingredient})}}]),angular.module("cookbriteApp").controller("AboutCtrl",function(){this.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}),angular.module("cookbriteApp").factory("recipes",["$resource",function(a){return a("https://api.edamam.com/search?&q=:ingredient&from=:starting&to=:ending&app_id=c3607cc5&app_key=3f6cc51402ce76557eabe753c575c891",{callback:"JSON_CALLBACK"},{query:{method:"JSONP",params:{starting:"0",ending:"12"},isArray:!1}})}]),angular.module("cookbriteApp").run(["$templateCache",function(a){a.put("views/about.html","<p>This is the about view.</p>"),a.put("views/main.html",'<section class="container-fluid" ng-app ng-controller="MainCtrl"> <header class="page-header row"> <div class="col-lg-6"> <p class="brand text-uppercase">CookBrite</p> <p class="small">Get Recipe Ideas & Host an EventBrite Event</p> </div> <div class="col-lg-6"> <div class="input-group"> <span class="input-group-addon"><span class="glyphicon glyphicon-search"></span></span> <label for="ingredient" class="sr-only">recipe search by ingredient or name</label> <input class="form-control" type="search" name="ingredient" ng-model="ingredient" placeholder="ingredient(s) or name"> <span class="input-group-btn"> <button class="btn btn-default" type="button" ng-click="getRecipes()">GO</button> </span> </div> <p class="text-right small">powered by edamam</p> </div> </header> <section ng-if="recipes"> <div class="row"> <div class="col-xs-1"> <svg height="50px" viewbox="0 0 50 72" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"> <!-- Generator: Sketch 3.7.2 (28276) - http://www.bohemiancoding.com/sketch --> <title>red right arrow</title> <desc>red right arrow</desc> <defs></defs> <g id="Search-Listing" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="Desktop-HD" transform="translate(-78.000000, -222.000000)" stroke-width="3" stroke="#F10724"> <polyline id="Path-9" points="80 224 114.016678 256.98959 80 292.856415"></polyline> </g> </g> </svg> </div> <div class="col-xs-11"> <p><span class="text-uppercase h6">showing <span class="h4">{{recipes.to}}</span> recipes of <span class="h4">{{recipes.count}}</span> found</span><br><span class="h3 text-capitalize">{{ingredient}}</span><br><br></p> </div> </div> <div class="row"> <div ng-repeat="eachRecipe in recipes.hits" class="col-xs-12"> <dt><img ng-src="{{eachRecipe.recipe.image}}"></dt> <dt>{{eachRecipe.recipe.label}}</dt> <p> <dt>Source: <img ng-src="{{eachRecipe.recipe.sourceIcon}}" width="16"> <a ng-href="{{ eachRecipe.recipe.url }}" target="_blank">{{eachRecipe.recipe.source}}</a></dt> <dt>Diet(s): <span class="" ng-repeat="dietLabel in eachRecipe.recipe.dietLabels"><span class="small">({{$index + 1}})</span> {{dietLabel}} </span></dt> <dt>Health Labels(s): {{eachRecipe.recipe.healthLabels}}</dt> <dt>Calories: {{eachRecipe.recipe.calories}}</dt> <dt>Number of Ingredients: {{eachRecipe.recipe.ingredientLines.length}}<br> <label>Show Ingredient List:</label> <input type="checkbox" ng-model="checked"> </dt> <li class="check-element animate-show" ng-show="checked" ng-repeat="listIngredient in eachRecipe.recipe.ingredientLines">{{listIngredient}}</li> <hr> </p></div> </div> </section> </section>')}]);