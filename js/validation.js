$(document).ready(function () {
  $("#signup").validate({
    submitHandler: function() { alert("Registration Successful");
    window.opener.location.reload();
  },

    rules: {
      'username': {
        minlength: 4,
        maxlength: 15
      },

      'password': {
        minlength: 6,
        maxlength: 20
      }
    }
  });
});
