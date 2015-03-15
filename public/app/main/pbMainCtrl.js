angular.module('app').controller('pbMainCtrl', function($scope) {
  $scope.myVar = "Hello Angular";
  $scope.projects = [
    {name: 'a', featured: false, published: new Date('3/14/2015')},
    {name: 'b', featured: true, published: new Date('3/14/2015')},
    {name: 'c', featured: false, published: new Date('3/14/2015')},
    {name: 'd', featured: false, published: new Date('3/14/2015')},
    {name: 'e', featured: true, published: new Date('3/14/2015')},
    {name: 'f', featured: false, published: new Date('3/14/2015')},
    {name: 'g', featured: true, published: new Date('3/14/2015')},
    {name: 'h', featured: false, published: new Date('3/14/2015')},
    {name: 'i', featured: false, published: new Date('3/14/2015')},
    {name: 'j', featured: false, published: new Date('3/14/2015')},
    {name: 'k', featured: false, published: new Date('3/14/2015')}
  ]
});
