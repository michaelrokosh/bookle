Template.SignUpModal.events({
  'submit #signUpForm': function (e, t) {
    e.preventDefault();
    
    var userObject = {
      email: t.find('[name="email"]').value,
      password: t.find('[name="password"]').value,
      profile: {
        tel: t.find('[name="tel"]').value,
        name: t.find('[name="first-name"]').value + ' ' + 
          t.find('[name="last-name"]').value,
        firstName: t.find('[name="first-name"]').value,
        lastName: t.find('[name="last-name"]').value
      }
    };

    Accounts.createUser(userObject, function (err, res) {
      console.log(err || res);
    });
  }
});