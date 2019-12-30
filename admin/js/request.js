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
  const baseURL = "http://localhost:8080/api/v1";
  var BigNew = {
    user_login: baseURL + "/admin/user/login",
    user_info: baseURL + "/admin/user/info",
    user_detail: baseURL + "/admin/user/detail",
    user_edit: baseURL + "/admin/user/edit"
  };
  window.BigNew = BigNew;
})(window);
