angular.module('app.routes', ['ionicUIRouter'])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  

      .state('tabsController', {
    url: '/page1',
    templateUrl: 'templates/tabsController.html',
    abstract:true
  })

  .state('tabsController.home', {
    url: '/page5',
    views: {
      'tab1': {
        templateUrl: 'templates/home.html',
        controller: 'homeCtrl'
      }
    }
  })

  .state('tabsController.blog', {
    url: '/page19',
    views: {
      'tab2': {
        templateUrl: 'templates/blog.html',
        controller: 'blogCtrl'
      }
    }
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.recipes'
      2) Using $state.go programatically:
        $state.go('tabsController.recipes');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab1/page20
      /page1/tab2/page20
  */
  .state('tabsController.recipes', {
    url: '/page20',
    views: {
      'tab1': {
        templateUrl: 'templates/recipes.html',
        controller: 'recipesCtrl'
      },
      'tab2': {
        templateUrl: 'templates/recipes.html',
        controller: 'recipesCtrl'
      }
    }
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.finances'
      2) Using $state.go programatically:
        $state.go('tabsController.finances');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab1/page21
      /page1/tab2/page21
  */
  .state('tabsController.finances', {
    url: '/page21',
    views: {
      'tab1': {
        templateUrl: 'templates/finances.html',
        controller: 'financesCtrl'
      },
      'tab2': {
        templateUrl: 'templates/finances.html',
        controller: 'financesCtrl'
      }
    }
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.timeManagment'
      2) Using $state.go programatically:
        $state.go('tabsController.timeManagment');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab1/page22
      /page1/tab2/page22
  */
  .state('tabsController.timeManagment', {
    url: '/page22',
    views: {
      'tab1': {
        templateUrl: 'templates/timeManagment.html',
        controller: 'timeManagmentCtrl'
      },
      'tab2': {
        templateUrl: 'templates/timeManagment.html',
        controller: 'timeManagmentCtrl'
      }
    }
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.health'
      2) Using $state.go programatically:
        $state.go('tabsController.health');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab1/page23
      /page1/tab2/page23
  */
  .state('tabsController.health', {
    url: '/page23',
    views: {
      'tab1': {
        templateUrl: 'templates/health.html',
        controller: 'healthCtrl'
      },
      'tab2': {
        templateUrl: 'templates/health.html',
        controller: 'healthCtrl'
      }
    }
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.house'
      2) Using $state.go programatically:
        $state.go('tabsController.house');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab1/page24
      /page1/tab2/page24
  */
  .state('tabsController.house', {
    url: '/page24',
    views: {
      'tab1': {
        templateUrl: 'templates/house.html',
        controller: 'houseCtrl'
      },
      'tab2': {
        templateUrl: 'templates/house.html',
        controller: 'houseCtrl'
      }
    }
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.people'
      2) Using $state.go programatically:
        $state.go('tabsController.people');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab1/page25
      /page1/tab2/page25
  */
  .state('tabsController.people', {
    url: '/page25',
    views: {
      'tab1': {
        templateUrl: 'templates/people.html',
        controller: 'peopleCtrl'
      },
      'tab2': {
        templateUrl: 'templates/people.html',
        controller: 'peopleCtrl'
      }
    }
  })

  .state('homeAlternativeVersion', {
    url: '/page17',
    templateUrl: 'templates/homeAlternativeVersion.html',
    controller: 'homeAlternativeVersionCtrl'
  })

  .state('findNearest', {
    url: '/page7',
    templateUrl: 'templates/findNearest.html',
    controller: 'findNearestCtrl'
  })

  .state('contactUs', {
    url: '/page8',
    templateUrl: 'templates/contactUs.html',
    controller: 'contactUsCtrl'
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.login'
      2) Using $state.go programatically:
        $state.go('tabsController.login');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab1/page11
      /page1/tab3/page11
  */
  .state('tabsController.login', {
    url: '/page11',
    views: {
      'tab1': {
        templateUrl: 'templates/login.html',
        controller: 'LoginCtrl'
      },
      'tab3': {
        templateUrl: 'templates/login.html',
        controller: 'LoginCtrl'
      }
    }
  })

  .state('tabsController.signup', {
    url: '/page12',
    views: {
      'tab1': {
        templateUrl: 'templates/signup.html',
        controller: 'signupCtrl'
      }
    }
  })

  .state('recipes2', {
    url: '/page10',
    templateUrl: 'templates/recipes2.html',
    controller: 'recipes2Ctrl'
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.spinachEnchiladas'
      2) Using $state.go programatically:
        $state.go('tabsController.spinachEnchiladas');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab1/page18
      /page1/tab2/page18
  */
  .state('tabsController.spinachEnchiladas', {
    url: '/:id',
    views: {
      'tab1': {
        templateUrl: 'templates/spinachEnchiladas.html',
        controller: 'spinachEnchiladasCtrl'
      },
      'tab2': {
        templateUrl: 'templates/spinachEnchiladas.html',
        controller: 'spinachEnchiladasCtrl'
      },
      params: {
        id: null

      }
    }
  })

  .state('askTheQuestion', {
    url: '/page13',
    templateUrl: 'templates/askTheQuestion.html',
    controller: 'askTheQuestionCtrl'
  })

  .state('map', {
    url: '/page14',
    templateUrl: 'templates/map.html',
    controller: 'mapCtrl'
  })

  .state('directions', {
    url: '/page15',
    templateUrl: 'templates/directions.html',
    controller: 'directionsCtrl'
  })

  .state('mortgageCalculator', {
    url: '/page16',
    templateUrl: 'templates/mortgageCalculator.html',
    controller: 'mortgageCalculatorCtrl'
  })


$urlRouterProvider.otherwise('/page1/page5')

  

});