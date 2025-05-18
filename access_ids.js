const email = gapi.auth2.getAuthInstance().currentUser.get().getBasicProfile().getEmail();
if (email !== "ojateja0710@gmail.com" && email !== "dojaswini99@gmail.com") {
  alert("Access denied.");
}
