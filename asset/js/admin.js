var id;

function dropDown(id){
    var x = document.getElementById(id);
    var y = document.getElementById(id + 'img');
    var z = document.getElementsByClassName("view");

    if(x.className.indexOf("view") == -1){
        x.className += " view";
        y.src = "../asset/img/arrow-up.png";
        if(z.length != 0){
            z.className = z.className.replace(" view", "");
        }
    }else{
        x.className = x.className.replace(" view", "");
        y.src = "../asset/img/arrow-down.png";
    }
}

function showPass() {
    var q = document.getElementById("password");
    if (q.type === "password") {
      q.type = "text";
    } else {
      q.type = "password";
    }
  }

  function openModal(id){
    var x = document.getElementById(id);
    var modal = document.getElementById('modals');

    modal.style.display = "block";
  }

  function closeModal(){
    var modal = document.getElementById('modals');
    modal.style.display = "none";
  }

  function validatePayment(id){
    var x = document.getElementById(id);
    var modal = document.getElementById(id + 'modals');

    modal.style.display = "block"
  }

  function closeValidate(id){
    var modal = document.getElementById(id + 'modals');
    modal.style.display = "none";
  }

  var modal = document.getElementById('modals');
  var modalverify = document.getElementById('verifymodals');
  var modalreject = document.getElementById('rejectmodals');
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }else if (event.target == modalverify) {
      modalverify.style.display = "none";
    }else if (event.target == modalreject) {
      modalreject.style.display = "none";
    }
  }
