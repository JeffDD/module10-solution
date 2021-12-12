(function () {
  "use strict";

  angular.module('common')
    .service('UserService', UserService);

  UserService.$inject = []
  function UserService() {
    const $service = this;
    let user = {}

    $service.getUser = () => {
      return user;
    }

    $service.setUser = (newUser) => {
      user = newUser
    }
  }

})();

