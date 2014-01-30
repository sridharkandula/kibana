define(["angular", "app", "jquery", "lodash"],

function (angular, app, $, _) {
  'use strict';
  var module = angular.module("kibana.panels.navigation", []);
  app.useModule(module), module.controller("navigation", ["$scope", "$http", function ($scope, $http) {
    $scope.panelMeta = {
      status: "Experimental",
      description: "A simple dropdown panel with a list of links"
    };
    var _d = {
      name: "Dashboards",
      source: "panel",
      links: [],
      url: void 0,
      icon: "icon-caret-down"
    };
    _.defaults($scope.panel, _d);
    $scope.init = function () {
      if ("panel" === $scope.panel.source) {
        $scope.links = $scope.panel.links;
        $scope.name = $scope.panel.name;
      }
      "url" === $scope.panel.source && $http.get($scope.panel.url).then(function (result) {
        $scope.name = result.data.name;
        var anchor = $("<a />");
        $scope.links = _.filter(result.data.links, function (item) {
          anchor.attr("href", item.url);
          var location = window.location.href;
          return location = location.replace(/\?.*$/, ""), anchor[0].href !== location;
        });
      });
    };
  }]);
});