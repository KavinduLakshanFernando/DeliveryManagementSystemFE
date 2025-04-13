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

// load My Orders
// getMyOrders();
// function getMyOrders() {
//     let userID = localStorage.getItem("LoggedUserId");
//     console.log(userID);
//     $.ajax({
//         url: "http://localhost:8080/api/v1/orders/MyOrders/" + userID,
//         method: "GET",
//         headers: {
//             "Authorization": "Bearer " + localStorage.getItem("authToken")
//         },
//         success: function (data) {
//             let tableBody = $("#orderTable");
//             tableBody.empty();
//             data.forEach(data => {
//                 let row = `
//                 <tr>
//                     <td>${data.deliveryAddress}</td>
//                     <td>${data.pickupPoint}</td>
//                     <td>${data.deliveryDate}</td>
//                     <td>${data.deliveryAmount}</td>
//                     <td>${data.distance}</td>
//                     <td>${data.receiverContact}</td>
//                     <td>${data.priority}</td>
//                     <td>${data.vehicleType}</td>
//                     <td>${data.status}</td>
//                     <td>
//                         <button class="btn btn-sm btn-danger">Delete</button>
//                     </td>
//                 </tr>
//             `;
//                 tableBody.append(row);
//             });
//         },
//         error: function (xhr, status, error) {
//             console.error("Error loading orders:", error);
//         }
//     });
// }