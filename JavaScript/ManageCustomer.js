$('#regCustomer').on('click', function () {
    let userID = localStorage.getItem("LoggedUserId");
    console.log(userID);

    console.log("registercustomer");
    const fname = $('#firstName').val();
    const lname = $('#lastName').val();
    const birthDate = $('#dateOfBirth').val();
    const gender = $('#gender').val();
    const streetAddress = $('#streetAddress').val();
    const city = $('#city').val();

    if (fname && lname && birthDate && gender && streetAddress && city) {
        $.ajax({
            url: "http://localhost:8080/api/v1/customer/save",
            method: "POST",
            contentType: "application/json",
            data: JSON.stringify({
                fname: fname,
                lname: lname,
                dateOfBirth: birthDate,
                gender: gender,
                streetAddress: streetAddress,
                city: city,
                user: {
                    uid: userID
                }
            }),
            headers: {
                "Authorization": "Bearer " + localStorage.getItem("authToken")
            },
            success: function (response) {
                console.log(response);
                alert("Customer registered successfully!");
                // window.location.href = "./CustomerRegistration.html";
            },
            error: function (xhr, status, error) {
                console.error(error);
            }
        });
    }
})