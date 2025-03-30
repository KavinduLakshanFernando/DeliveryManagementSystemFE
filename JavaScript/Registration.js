// $("#nextBtn").on("click", function() {
//     console.log("Register button");
//     let name = $("#name").val();
//     let userName = $("#username").val();
//     let nic = $("#nic").val();
//     let phone = $("#mobile").val();
//     let email = $("#email").val();
//     let address = $("#address").val();
//     let password = $("#password").val();
//     let ConfirmPassword = $("#confirm-password").val();
//
//     $.ajax({
//         url: 'http://localhost:8080/api/v1/user/register',
//         method: 'POST',
//         contentType: 'application/json',  // Set content type to JSON
//         data: JSON.stringify({
//             name: name,
//             username:userName,
//             nic: nic,
//             phone: phone,
//             email: email,
//             address: address,
//             password: password,
//             confirmPassword: ConfirmPassword
//         }),
//         success: function(data) {
//             if (password === ConfirmPassword) {
//                 alert("Registration successful!");
//             }else {
//                 alert("Password does not match!");
//             }
//
//         },
//         error: function(xhr, status, error) {
//             // Handle errors
//         }
//     });
// });


$("#nextBtn").on("click", function() {
    console.log("Register button");
    let name = $("#name").val();
    let userName = $("#username").val();
    let nic = $("#nic").val();
    let phone = $("#mobile").val();
    let email = $("#email").val();
    let address = $("#address").val();
    let password = $("#password").val();
    let ConfirmPassword = $("#confirm-password").val();

    // Check if passwords match before sending the request
    if (password !== ConfirmPassword) {
        // Use SweetAlert2 to show a password mismatch error
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Passwords do not match!',
        });
        return;  // Prevent further execution if passwords do not match
    }

    $.ajax({
        url: 'http://localhost:8080/api/v1/user/register',
        method: 'POST',
        contentType: 'application/json',
        data: JSON.stringify({
            name: name,
            username: userName,
            nic: nic,
            phone: phone,
            email: email,
            address: address,
            password: password,
            confirmPassword: ConfirmPassword
        }),
        success: function(data) {
            // Use SweetAlert2 to show success message
            Swal.fire({
                icon: 'success',
                title: 'Registration Successful',
                text: 'You have been registered successfully!',
            })
        },
        error: function(xhr, status, error) {
            // Handle error with SweetAlert2
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Something went wrong during registration. Please try again.',
            });
        }
    });
});
