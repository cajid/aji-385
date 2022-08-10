
function validateForm() {
    let x = document.getElementsByClassName('Name')
    if (x == "") {
      alert("Name must be filled out");
      return false;
    }
  }

 

  var year = new Date();
  var date = '&copy; Chuks Ajiduah ${year}. All Rights Reserved. ';

  document.getElementsByTagName('footer')[0].innerText = Date();