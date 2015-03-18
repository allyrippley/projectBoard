angular.module('app').value('pbToastr', toastr);

angular.module('app').factory('pbNotifier', function(pbToastr) {
  return {
    notify: function(msg) {
      pbToastr.success(msg);
      console.log(msg);
    }
  }
});
