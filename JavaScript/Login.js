console.log("login form");
$(document).ready(function () {
    $("#loggin").click(() => {

        let email = $("#email").val();
        let password = $("#password").val();

        $.ajax({
            url: "http://localhost:8080/api/v1/auth/authenticate",
            method: "POST",
            contentType: "application/json",
            data: JSON.stringify({
                email: email,
                password: password,
            }),
            success: function (response) {

                alert("ok")
                let Authtoken = response.data.token;
                let rolee = response.data.role;
                let name = response.data.name;
                let uid = response.data.id;

                localStorage.setItem("authToken", Authtoken);
                localStorage.setItem("userEmail", email);
                localStorage.setItem("Role", rolee);
                localStorage.setItem("name", name);
                localStorage.setItem("LoggedUserId", uid);

                console.log("userID", uid)
                console.log(Authtoken)
                console.log(rolee)


                if ( rolee === "ADMIN") {
                    window.location.href="./AdminDashboard.html"
                    alert("Admin")
                } else if (rolee === "DRIVER") {
                    window.location.href="./DriverRegistration.html"
                    alert("Driver")
                } else if (rolee === "CUSTOMER") {
                    window.location.href="./CustomerRegistration.html"
                    alert("Customer")
                } else {
                    alert("Unknown role. Redirecting to home.");

                }
            },
            error: function (xhr, status, error) {
                console.error("Error:", error);
            }
        });
    });
});