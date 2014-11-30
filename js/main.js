var myApp = angular.module('myApp',[])

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
      name: 'Stellan Skarsg氓rd',
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
    element.bind("mouseleave", function() {
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

















