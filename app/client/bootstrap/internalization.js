getUserLanguage = function () {
  return "ua";
};


Meteor.startup(function () {
  Session.set("showLoadingIndicator", true);

  TAPi18n.setLanguage(getUserLanguage())
    .done(function () {
      Session.set("showLoadingIndicator", false);
    })
    .fail(function (error) {
      // Handle the situation
      console.log(error);
    });
});