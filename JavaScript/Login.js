

$(document).ready(function () {
    $("#loggin").click(() => {

        let email = $("#email2").val();
        let password = $("#password2").val();

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


                console.log(Authtoken)
            console.log(rolee)
                // window.location.href="../AdminDashboard.html";

                if ( rolee === "ADMIN") {
                    window.location.href="../AdminDashboard.html"
                } else if (rolee === "DRIVER") {
                    window.location.assign("../DriverDashboard.html");
                } else if (rolee === "USER") {
                    // window.location.assign("../AdminDashboard.html");
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