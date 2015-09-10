Meteor.startup(function () {
  
  if (Establishments.find().count() === 0) {
    for (var i = 0; i < 5; i++) {
      Establishments.insert({
        name: 'Pizzeria #' + i,
        type: 'pizzeria'
      });
    }
    for (var i = 0; i < 5; i++) {
      Establishments.insert({
        name: 'Restaurant #' + i,
        type: 'restaurant'
      });
    }
    for (var i = 0; i < 3; i++) {
      Establishments.insert({
        name: 'Billiard #' + i,
        type: 'billiard'
      });
    }
  }

});