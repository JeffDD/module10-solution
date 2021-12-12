describe("Menu Service", function () {

  let ApiBasePath;
  let $httpBackend;
  let menuService;

  beforeEach(function () {
    module("common");

    inject(function ($injector) {
      ApiPath = $injector.get("ApiPath");
      $httpBackend = $injector.get("$httpBackend");
      menuService = $injector.get("MenuService");
    });
  });

  it("it should return true if short_name T3 in menu items", function () {
    $httpBackend.whenGET(ApiPath + "/menu_items.json").respond({
      "menu_items": [
        {
          "id": 1,
          "short_name": "T1",
          "name": "Name1",
          "description": "description",
          "price_small": 2.55,
          "price_large": 5.0,
          "small_portion_name": "pint",
          "large_portion_name": "quart",
          "image_present": true
        },
        {
          "id": 2,
          "short_name": "T2",
          "name": "Name2",
          "description": "description",
          "price_small": 2.25,
          "price_large": 4.5,
          "small_portion_name": "pint",
          "large_portion_name": "quart",
          "image_present": true
        },
        {
          "id": 3,
          "short_name": "T3",
          "name": "Name3",
          "description": "description",
          "price_small": 2.75,
          "price_large": 5.5,
          "small_portion_name": "pint",
          "large_portion_name": "quart",
          "image_present": true
        }]
    });
    menuService.checkIfMenuItemExists("T3").then(function (response) {
      expect(response).toEqual(true);
    });

    $httpBackend.flush();
  });

});