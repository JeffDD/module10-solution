(function () {
  "use strict";

  angular.module("public")
    .controller("MyInfoController", MyInfoController)
  ;

  MyInfoController.$inject = ["UserService", "item", "ApiPath"];

  function MyInfoController(UserService, item, ApiPath) {
    const $ctrl = this;
    $ctrl.basePath = ApiPath;
    $ctrl.basePath = ApiPath;
    $ctrl.item = item;
    $ctrl.user = UserService.getUser();
  }
})();