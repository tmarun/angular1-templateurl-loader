var loader = require('./index.js');
loader.call({}, `
        angular.module("my-module").component("my-component", {
            templateUrl: "./myComponent.html"
        });`);