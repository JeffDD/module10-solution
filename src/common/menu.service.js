(function () {
"use strict";

angular.module('common')
.service('MenuService', MenuService);


MenuService.$inject = ['$http', 'ApiPath'];
function MenuService($http, ApiPath) {
  var service = this;

  service.getCategories = function () {
    return $http.get(ApiPath + '/categories.json').then(function (response) {
      return response.data;
    });
  };


  service.getMenuItems = function (category) {
    var config = {};
    if (category) {
      config.params = {'category': category};
    }

    return $http.get(ApiPath + '/menu_items.json', config).then(function (response) {
      return response.data;
    });
  };

  service.getMenuItem = (shortName) => {
    if (shortName == null || shortName.trim() === "") return

    return service.getMenuItems().then(items => {
      return items["menu_items"].filter(item => item["short_name"] === shortName)[0]
    })
  }

  service.checkIfMenuItemExists = (shortName) => {
    return service.getMenuItems()
      .then((items) => {
       return items["menu_items"].map(item => item["short_name"]).includes(shortName.toUpperCase())
    })
  }
}



})();
