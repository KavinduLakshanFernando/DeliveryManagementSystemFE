

$('#registerDriver').on('click', function () {
    let userID = localStorage.getItem("LoggedUserId");
    console.log(userID);

    console.log("registerDriver");
    const fname = $('#firstName').val();
    const lname = $('#lastName').val();
    const birthDate = $('#dateOfBirth').val();
    const gender = $('#gender').val();
    const streetAddress = $('#streetAddress').val();
    const city = $('#city').val();
    const licenseNumber = $('#licenseNumber').val();
    const licenseState = $('#licenseState').val();
    const licenseExpiry = $('#licenseExpiry').val();
    const licenseClass = $('#licenseClass').val();
    const experience = $('#experience').val();
    const availability = $('#availability').val();
    const preferredArea = $('#preferredArea').val();

    if (fname && lname && birthDate && gender && streetAddress && city && licenseNumber && licenseState && licenseExpiry && licenseClass && experience && availability && preferredArea) {
        $.ajax({
            url: "http://localhost:8080/api/v1/driver/save",
            method: "POST",
            contentType: "application/json",
            data: JSON.stringify({
                firstName: fname,
                lastName: lname,
                dateOfBirth: birthDate,
                gender: gender,
                streetAddress: streetAddress,
                city: city,
                licenseNumber: licenseNumber,
                licenseState: licenseState,
                licenseExpiry: licenseExpiry,
                licenseClass: licenseClass,
                experience: experience,
                availability: availability,
                preferredArea: preferredArea,
                user:{
                    uid : userID
                }
            }),
            headers: {
                "Authorization": "Bearer " + localStorage.getItem("authToken")
            },
            success: function (response) {
                console.log(response);
                alert("Driver registered successfully!");
            },
            error: function (xhr, status, error) {
                console.error(error);
            }
        });
    } else {
        alert("Please fill in all required fields.");
    }
});


loadDriverdataForAdmin();

function loadDriverdataForAdmin() {
    console.log("loadDriverdataForAdmin");
    // let userID = localStorage.getItem("LoggedUserId");
    // console.log(userID);
    $.ajax({
        url: "http://localhost:8080/api/v1/driver/allDrivers",
        method: "GET",
        success: function (data) {
            $("#driverTableBody").empty();
            data.forEach(driver => {
                $("#driverTableBody").append(`
                    <tr>
                        <td>${driver.firstName}</td>
                        <td>${driver.availability}</td>
                        <td>${driver.experience}</td>
                        <td>${driver.licenseNumber}</td>
                        <td>${driver.preferredArea}</td>
                        <td>${driver.licenseClass}</td>
                        <td>${driver.licenseExpiry}</td>
                        <td><button class="delete-btn" onclick="deleteRow(this)">Delete</button></td>
                    </tr>
                `);
            });
        },
        error: function () {
            alert("Failed to load drivers.");
        }
    });
}
