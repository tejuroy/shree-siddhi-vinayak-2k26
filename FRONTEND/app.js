function refreshPage() {

    location.reload();

}


/* =========================
   LOGIN
   ========================= */

const loginForm = document.getElementById("loginForm");

if (loginForm) {

    loginForm.addEventListener("submit", function(event) {

        event.preventDefault();

        const username =
            document.getElementById("username").value.trim();

        const password =
            document.getElementById("password").value;

        const message =
            document.getElementById("loginMessage");


        if (username === "" || password === "") {

            message.textContent =
                "Please enter username and password.";

            return;
        }


        /*
         * TEMPORARY FRONTEND DEMO
         *
         * This is NOT real authentication.
         * Real authentication will be added later
         * using Spring Boot + database.
         */

        sessionStorage.setItem("loggedIn", "true");

        window.location.href = "index.html";

    });

}