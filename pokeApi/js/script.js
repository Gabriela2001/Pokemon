var p = angular.module("p",[])
p.controller("PokeCtrl",function($scope,$rootScope,$http){

	$scópe.Pokedex={},
	$http({
		method:"GET",
		url:"https://pokeapi.co/api/v2/"
	}).then(function Datos(x))
})