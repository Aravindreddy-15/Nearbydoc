function mylogin() {
    document.getElementsByClassName("modal")[0].innerHTML = `
    <div id="myModal" class="modal-dialog.modal-dialog-centered">
    <div id="content" class="modal-content" style="background:azure">
    <div><b class="dia">Are you a Doctor or a Patient?</b><br/>
    <a href="/doctor/login"><button class="btns" type="button" style="color:#2980B9; margin-right:6%;">DOCTOR</button></a>
    <a href="/patient/login"><button class="btno" type="button" style="color:#F50057;">PATIENT</button></a>
    </div>
    </div>`

    var modal = document.getElementsByClassName("modal")[0];
    modal.style.display = "block";
    window.addEventListener("click",function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
            document.body.style.backgroundColor = "#f8f9fa";
        }
    })
    document.body.style.backgroundColor = "lightgrey";

}