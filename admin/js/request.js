(function(window) {
  const token = localStorage.getItem("token");
  $.ajaxSetup({
    beforeSend(xhr) {
      if (!token) {
        location.href = "./login.html";
      }
      if (location.href.indexOf("login.html") === -1) {
        xhr.setRequestHeader("Authorization", token);
      }
    }
  });
})(window);
