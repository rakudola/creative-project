/*ref list
    #info: form id (HTML)
    firstName, lastName: values input in form fields (JS)
    .givenName, .familyName: classes for first and last name elements (HTML)
    fNameHTML, lNameHTML: arrays of all .givenName and .familyName appearances (JS)
    joe: mama
*/

function userInfo() {
  var x = document.getElementById("info");
  var firstName = x.elements[0].value;
  var lastName = x.elements[1].value;
  
  var fNameHTML = document.getElementsByClassName("givenName");
  for (var i = 0; i < fNameHTML.length; ++i) {
      fNameHTML[i].innerText = firstName;
  }
  
  var lNameHTML = document.getElementsByClassName("familyName");
  for (var i = 0; i < lNameHTML.length; ++i) {
      lNameHTML[i].innerText = lastName;
  }
}