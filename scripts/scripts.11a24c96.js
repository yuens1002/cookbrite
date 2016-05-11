"use strict";angular.module("cookbriteApp",["ngAnimate","ngAria","ngCookies","ngMessages","ngResource","ngRoute","ngSanitize","ngTouch"]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl",controllerAs:"main"}).when("/about",{templateUrl:"views/about.html",controller:"AboutCtrl",controllerAs:"about"}).otherwise({redirectTo:"/"})}]),angular.module("cookbriteApp").controller("MainCtrl",["$scope","recipes",function(a,b){a.refreshRecipes=function(){a.recipes=b.query({ingredient:a.ingredient})}}]),angular.module("cookbriteApp").controller("AboutCtrl",function(){this.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}),angular.module("cookbriteApp").factory("recipes",["$resource",function(a){return a("https://api.edamam.com/search?q=:ingredient&from=:starting&to=:ending&app_id=c3607cc5&app_key=3f6cc51402ce76557eabe753c575c891",{},{query:{method:"GET",params:{ingredient:"",starting:"0",ending:"1"},isArray:!1}})}]),angular.module("cookbriteApp").run(["$templateCache",function(a){a.put("views/about.html","<p>This is the about view.</p>"),a.put("views/main.html",'<div ng-app class="jumbotron" ng-controller="MainCtrl"> <h1>Recipe Search</h1> <p class="lead"> <div ng-init="ingredient=\'tofu salad\'"> <p> <label for="ingredient">Type in an ingredient or name<br> <input type="text" name="ingredient" ng-model="ingredient"> </label> </p> <p> <button class="btn btn-lg btn-primary" ng-click="refreshRecipes()">Get Receipes</button> </p> <dl ng-if="recipes"> <dt>Recipes Found: {{recipes.count}}</dt> <p> <dt><img ng-src="{{recipes.hits[0].recipe.image}}"></dt> <dt>{{recipes.hits[0].recipe.label}}</dt> </p><p> <dt>Source: <img ng-src="{{recipes.hits[0].recipe.sourceIcon}}"> <a herf="{{recipes.hits[0].recipe.url}}" target="_blank">{{recipes.hits[0].recipe.source}}</a></dt> <dt>Diet(s): <span class="" ng-repeat="dietLabel in recipes.hits[0].recipe.dietLabels"><span class="small">({{$index + 1}})</span> {{dietLabel}} </span></dt> <dt>Health Labels(s): {{recipes.hits[0].recipe.healthLabels}}</dt> <dt>Calories: {{recipes.hits[0].recipe.calories}}</dt> <dt>Number of Ingredients: {{recipes.hits[0].recipe.ingredientLines.length}}<br><label>Show Ingredient List: <input type="checkbox" ng-model="checked"> </label></dt> <li class="check-element animate-show" ng-show="checked" ng-repeat="listIngredient in recipes.hits[0].recipe.ingredientLines">{{listIngredient}}</li> </p></dl> </div> </p> </div>')}]);