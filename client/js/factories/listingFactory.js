angular.module('listings', []).factory('Listings', function($http) {
  var methods = {
    getAll: function() {
      return $http.get('/api/listings');
    },
    //Gets current user info from site page
    getUser: function() {
      return $http.get('/api/users/getCurrentUser');
    },
  delete: function(id) {
    Listings.findById(id, function(err,listing){
      if(err) throw err;

      listing.remove(function(err){
        if (err) throw err;
      });
    });
    return $http.delete('127.0.0.1/api/listings/' + id);
  },
  getCurrentUser:function() {
    return $htttp.get("127.0.0.1/api/users/getCurrentUser")
  }
};

  return methods;
});