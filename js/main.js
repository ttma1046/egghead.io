var app = angular.module('app', []);

app.directive("zippy", function($templateCache) {
	console.log($templateCache.get("zippy.html "));

	return {
		restrict:"E",
		transclude:true,
		scope:{
			title:"@"
		},
		templateUrl:$templateCache.get("zippy.html"),
		link: function (scope) {
			scope.isContentVisible = false;

			scope.toggleContent = function() {
				scope.isContentVisible = !scope.isContentVisible;
			}
		}		
	};
});
