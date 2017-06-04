var app = angular.module('sysFornecedor', ['ngRoute']);

app.controller("CreateFornecedorController", function ($scope, $http, $location) {

    $scope.fornecedor = {
		
	};

    $scope.salvar = function() {
        $http.post("/sysfornecedor/api/index.php/fornecedor/", $scope.fornecedor).then(function(response) {
            console.log("DEU CERTO <3", response);
            $location.path("/");
        }, function(error) {
            console.log("DEU RUIM", error);
        });
    };

});

app.controller("ListFornecedorController", function ($scope, $http, $location) {
    $scope.fornecedores = [];
	var baseUrl = "/sysfornecedor/api/index.php/fornecedor/";
	$scope.init = function () {
      $scope.getListaUsuarios();
    };
	$scope.getListaUsuarios = function () {
      $http.get('/sysfornecedor/api/index.php/fornecedor/').then(function (response) {
        $scope.fornecedores = response.data;
      }, function (response) {
        console.log("DEU RUIM", response);
      });
    }
	
    $scope.editar = function() {
        console.log($scope.fornecedor);
    };
	
	$scope.deletar = function() {
        console.log('deletar');
    };
	
	$scope.init();

});

app.controller("CreateCategoriaController", function ($scope, $http, $location) {

    $scope.categoria = {};

    $scope.salvar = function() {
        $http.post("/sysfornecedor/api/index.php/fornecedor/", $scope.categoria).then(function(response) {
            console.log("DEU CERTO <3", response);
            $location.path("/");
        }, function(error) {
            console.log("DEU RUIM", error);
        });
    };

});

app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        controller: "ListFornecedorController",
        templateUrl: "app/view-fornecedor.html"
    })
    .when("/criar/fornecedor", {
        controller: "CreateFornecedorController",
        templateUrl: "app/create-fornecedor.html"
    })
    .when("/criar/categoria", {
        controller: "CreateCategoriaController",
        templateUrl: "app/create-categoria.html"
    })    
    .when("/editar/fornecedor", {
        // controller: "UpdateFornecedorController",
        templateUrl: "app/update-fornecedor.html"
    })    
});