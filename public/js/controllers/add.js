angular.module('myControllers')
	.controller('controllerAdd', function($scope,ImagesService){

		const oStylesImage = document.getElementById('styles-preview-image');

		$scope.uploadImage = function(event) {

			var files = event.target.files;
			var file = files[0];
			ImagesService.getRemoteUrlImage( file )
			.then( remoteUrl => {
				angular.element(oStylesImage).html(`#preview-image{background-image:url("${remoteUrl}")}`);
				$scope.href=remoteUrl;
				console.log($scope.href)
			})

		};


	})