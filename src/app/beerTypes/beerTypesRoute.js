angular
    .module('app')
    .config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('beerTypes', {
                url: '/beerTypes',
                templateUrl: 'app/beerTypes/beerTypes-template.html'
            });
    }); //end of route