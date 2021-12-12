(function () {
  "use strict";

  angular.module("public")
    .controller("SignUpController", SignUpController)
  ;

  SignUpController.$inject = ["MenuService", "items", "$scope", "UserService"];

  function SignUpController(MenuService, items, $scope, UserService) {
    const $ctrl = this;
    $ctrl.itemNumbers = items["menu_items"].map(item => item["short_name"]);
    $ctrl.user = {};
    $ctrl.favDishExists = false;
    $ctrl.isRegistered = false;

    $ctrl.checkIfDishExists = () => {
      const exists = $ctrl.itemNumbers.includes($ctrl.user.favDishNumber);
      $ctrl.favDishExists = exists;
      return exists;
    };

    $scope.$watch("signUpCtrl.checkIfDishExists()", () => {
      UserService.setUser($ctrl.user);
    }, true);

    $ctrl.signup = () => {
      // Could use the existing menu item list to check but following instructions to query server
      MenuService.checkIfMenuItemExists($ctrl.user.favDishNumber).then(itemOnMenu => {
        let exists = itemOnMenu;
        $ctrl.user.isRegistered = exists;
        UserService.setUser($ctrl.user);
        $ctrl.favDishExists = exists;
        $ctrl.isRegistered = exists;
      });
    };
  }
})();