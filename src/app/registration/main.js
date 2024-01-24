function checkPasswordComplexity() {
    var password = document.getElementById("password").value;
    var lowercase = /[a-z]/;
    var uppercase = /[A-Z]/;
    var number = /[0-9]/;
    var special = /[\W]/;
    var min8 = /.{8,}/;

    document.getElementById("lowercase").checked = lowercase.test(password);
    document.getElementById("uppercase").checked = uppercase.test(password);
    document.getElementById("number").checked = number.test(password);
    document.getElementById("special").checked = special.test(password);
    document.getElementById("min8").checked = min8.test(password);
  }

  function showCheckboxes() {
    document.getElementById("checkboxPopup").classList.add("show");
  }
  
  function hideCheckboxes() {
    document.getElementById("checkboxPopup").classList.remove("show");
  }
  function togglePasswordVisibility() {
    var passwordInput = document.getElementById("password");
    if (passwordInput.type === "password") {
      passwordInput.type = "text";
    } else {
      passwordInput.type = "password";
    }
  }