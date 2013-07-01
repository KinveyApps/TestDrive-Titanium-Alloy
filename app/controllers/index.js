// Ping Kinvey when the button is clicked.
$.ping.addEventListener('click', function(e) {
  var promise = Alloy.Globals.Kinvey.ping();
  promise.then(function(response) {
    var alert = Ti.UI.createAlertDialog({
      title       : 'Kinvey Ping Success.',
      message     : 'Kinvey Service is alive, version: ' + response.version + ', response: ' + response.kinvey,
      buttonNames : ['OK']
    });
    alert.show();
  }, function(error) {
    var alert = Ti.UI.createAlertDialog({
      title       : 'Kinvey Ping Failed.',
      message     : 'Response: ' + error.description,
      buttonNames : ['OK']
    });
    alert.show();
  });
});

// Display the index view.
$.index.open();