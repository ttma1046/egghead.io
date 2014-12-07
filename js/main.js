/*var myApp = angular.module('myApp',[])

myApp.factory('Avengers', function(){
	var Avengers = {}; 

	Avengers.cast = [
    {
      name: 'Robert Downey Jr.',
      character: 'Tony Stark / Iron Man'
    },
    {
      name: 'Chris Evans',
      character: 'Steve Rogers / Captain America'
    },
    {
      name: 'Mark Ruffalo',
      character: 'Bruce Banner / The Hulk'
    },
    {
      name: 'Chris Hemsworth',
      character: 'Thor'
    },
    {
      name: 'Scarlett Johansson',
      character: 'Natasha Romanoff / Black Widow'
    },
    {
      name: 'Jeremy Renner',
      character: 'Clint Barton / Hawkeye'
    },
    {
      name: 'Tom Hiddleston',
      character: 'Loki'
    },
    {
      name: 'Clark Gregg',
      character: 'Agent Phil Coulson'
    },
    {
      name: 'Cobie Smulders',
      character: 'Agent Maria Hill'
    },
    {
      name: 'Stellan Skarsgæ°“rd',
      character: 'Selvig'
    },
    {
      name: 'Samuel L. Jackson',
      character: 'Nick Fury'
    },
    {
      name: 'Gwyneth Paltrow',
      character: 'Pepper Potts'
    },
    {
      name: 'Paul Bettany',
      character: 'Jarvis (voice)'
    },
    {
      name: 'Alexis Denisof',
      character: 'The Other'
    },
    {
      name: 'Tina Benko',
      character: 'NASA Scientist'
    }
  ];

	return Avengers;
});

function avengersCtrl($scope, Avengers) {
	$scope.avengers = Avengers;
}


var app = angular.module("superhero", []);

app.directive("superman", function(){
	return {
		restrict: "A",
		link: function() {
      alert("I am working stronger!")
    }
	};
})

app.directive("flash", function(){
  return {
    restrict: "A",
    link: function() {
      alert("I am working faster!")
    }
  };
})

var app = angular.module("behaviorApp", []);

app.directive("enter", function () {
  return function (scope, element, attrs) {
    element.bind("mouseenter", function() {
      element.addClass(attrs.enter);
    })
  }    
});

app.directive("leave", function () {
  return function (scope, element, attrs) {
    element.bind("  mouseleave", function() {
      element.removeClass(attrs.enter);
    })
  }    
});

var app = angular.module("twitterApp", []);
 
app.controller("AppCtrl", function($scope) {
  $scope.loadMoreTweets = function () {
    alert("Loading tweets!");
  };
 }); 

 app.directive("enter", function() {
  return function(scope, element, attrs) {
    element.bind("mouseenter", function(){
      scope.$apply(attrs.enter);
    })
  }
 })

var app = angular.module('superApp',[]);

app.directive("superhero", function () {
  return {
    // restrict: "E",
    scope: {},
    controller:function($scope){
      $scope.abilities = [];

      this.addStrength = function() {
        $scope.abilities.push("strength");
      };

      this.addSpeed = function () {
        $scope.abilities.push("speed");
      };

      this.addFlight = function () {
        $scope.abilities.push("Flight");
      };      
    },

    link: function(scope, element){
      element.addClass("button");
      element.bind("mouseenter", function() {
          console.log(scope.abilities);
      })
    }
  }
})

app.directive("strength", function () {
  return {
    require:"superhero",
    link: function(scope, element, attrs, superheroCtrl){
      superheroCtrl.addStrength();
        
    }
  };
})

app.directive("flight", function () {
  return {
    require:"superhero",
    link: function(scope, element, attrs, superheroCtrl){
      superheroCtrl.addFlight();
        
    }
  };
})

app.directive("speed", function () {
  return {
    require:"superhero",
    link: function(scope, element, attrs, superheroCtrl){
      superheroCtrl.addSpeed();
        
    }
  };
})

var app = angular.module('choreApp', []);

app.directive('kid', function(){
  return {
    restrict: 'E',
    scope:{
      done:"&"
    },
    template: '<input type="text" ng-model="chore">' 
    + '{{chore}}'
    + ' <div class="button" ng-click="done({chore:chore})">I\'m done!</div>'

  }
})

app.controller('ChoreCtrl', function($scope){
  $scope.logChore = function (chore) {
    alert(chore + " is done!");
  }
})

var app = angular.module("drinkApp", []);

app.controller("AppCtrl", function($scope){
  $scope.ctrlFlavor = "blackberry";
})

app.directive("drink", function(){
  return {
    scope: {
      flavor:"="
    },
    template: '<input type="text" ng-model="flavor">'
  }
})

var app = angular.module("phoneApp", [])

app.controller('AppCtrl', function ($scope){
    $scope.callHome = function(message) {
      alert(message)
    }
})

app.directive('phone', function () {
  return {
    restrict: "E",
    scope: {
       dial: "&"
    },
    template: '<input type="text" ng-model="value">' + 
    '<div class="button" ng-click="dial({message:value})">Call Home!</div>'
  }
})

var advancedPhone = angular.module("advancedPhoneApp", []);

advancedPhone.controller('AdAppCtrl', function ($scope) {
  $scope.leaveVoicemail = function (number, message) {
  alert("Number: " + number + " said: " + message);
  };
})

advancedPhone.directive("phone", function () {
  return {
    restrict:"E",
    scope: {
      number:"@",
      network:"=",
      makeCall: "&"
    },
    template:'<div class="panel">Number: {{number}} Network:<select ng-model="network" ng-options="net for net in networks"></select>' +
    '<input type="text" ng-model="value">' +
    '<div class="button" ng-click="makeCall({number: number, message:value})">Call home!</div></div>',

    link:function(scope) {
      scope.networks = ["Verizon", "AT&T", "Sprint"];
      scope.network = scope.networks[0]
    }
  }
})






var phone2App = angular.module("phone2App", []);

var controllers = {};

controllers.App2Ctrl = function ($scope) {
    this.sayHi = function() {
    alert("hi");
  };

  return $scope.myController = this;
}


var directives = {};

directives.panel = function(){
  return {
    restrict:"E",
    transclude: true,
    template:'<div class="panel" ng-transclude>This is a panel component!</div>'
  }
};

phone2App.directive(directives)
phone2App.controller(controllers);

*/
var app = angular.module("app", []);

app.run(function ($templateCache)
{
  $templateCache.put("zippy.html", '<div><h3 ng-click="toggleContent()">{{title}}</h3><div ng-show="isContentVisible" ng-transclude>Hello World!</div></div>')
  console.log($templateCache.info());
});


app.directive("zippy", function($templateCache){
  console.log($templateCache.get("zippy.html"));


  return {
    restrict: "E",
    transclude: true,
    scope: {
      title: "@"
    },
    templateUrl: "zippy.html",
    link: function(scope) {
      scope.isContentVisible = false;

      scope.toggleContent = function () {
        scope.isContentVisible = !scope.isContentVisible;
      }
    }
  }
})


/*  
var dumbapp = angular.module("dumbapp",[]);



dumbapp.directive("dumbpassword", function() {

var validElement = angular.element("<div>{{model.input}}</div>"); 

this.link =  function(scope) {
        scope.$watch("model.input", function (value){
           if (value === "password") {
             validElement.toggleClass("alert-box alert");
           }
        });   

      };

  return {
    restrict: 'E',
    replace: true,
    template: '<div><input type="text" ng-model="model.input" /></div>',
    compile: function(tElem) {
      tElem.append(validElement);
    
      return link; 
    }
  };
});


var app = angular.module("app", []);

app.controller('MyCtrl', function($scope, $http, $parse){
  console.log($scope);
});

app.controller('AlternativCtrl', ['$scope', '$http', function(a, b){
  console.log(b);  
}])

app.directive('myDirective', function($http, $parse){
  return {
    link: function(scope, element, attrs) {
      console.log(scope);
    }
  }
});
*/

var app = angular.module("app", ['ngRoute']);

app.config(function($routeProvider) {
    $routeProvider
    .when('/',
    {
      templateUrl: "view/app.html",
      controller: "AppCtrl",
      resolve: {
        loadData: appCtrl.loadData,
        prepData: appCtrl.prepData  
      }

    })
});

var appCtrl = app.controller('AppCtrl', function($scope, $route){
  console.log($route);

  $scope.model = {
    message: "I'm a great app!!!"
  };  
});

appCtrl.loadData = function($q, $timeout) {
          var defer = $q.defer();
          
          $timeout(function () {
            defer.resolve("loadData");
          }, 2000);

          return defer.promise;
        };


appCtrl.prepData = function($q, $timeout) {
          var defer = $q.defer();
          
          $timeout(function () {
            defer.resolve("prepData");
          }, 2000);

          return defer.promise;
        };
 


























































