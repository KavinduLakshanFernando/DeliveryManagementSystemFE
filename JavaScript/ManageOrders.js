getPendingOrders();
function getPendingOrders() {
    let userID = localStorage.getItem("LoggedUserId");
    console.log(userID);
    $.ajax({
        url: "http://localhost:8080/api/v1/orders/pendingOrders", // Your backend endpoint
        method: "GET",
        contentType: "application/json",
        headers: {
            "Authorization": "Bearer " + localStorage.getItem("authToken")
        },
        success: function (orders) {
            // console.log(orders);
            const container = $("#ordersCard");
            container.empty();
            // Clear previous cards

            orders.forEach(order => {
                const card = `
             <div class="order-card">
                <div class="row table-header m-0">
                <div id="operator" class="col-lg-2 col-md-2">${order.customer.fname}</div>
                <div id="location" class="col-lg-2 col-md-2">${order.pickupPoint}</div>
                <div id="dueDate" class="col-lg-2 col-md-2">${order.deliveryDate}</div>
                <div id="vtype" class="col-lg-2 col-md-2">${order.vehicleType}</div>
                <div id="priority" class="col-lg-2 col-md-2">${order.priority}</div>
                <div id="status" class="col-lg-2 col-md-2">${order.status}</div>
                <div class="col-lg-2 col-md-2">
                <button class="btn btn-success btn-sm" onclick="confirmOrder('${order.id}')">Confirm</button>
                <button class="btn btn-danger btn-sm" onclick="deleteOrder('${order.id}')">Delete</button>
        </div>
                </div>
            </div>
                `;
                container.append(card);
            });
        },
        error: function (xhr, status, error) {
            console.error("Error fetching orders:", error);
        }
    });
}


$('#Orderbtn').on('click', function () {
    console.log("order");
    let userID = localStorage.getItem("LoggedUserId");
    console.log(userID);

    let pickupPoint = $('#pickupPoint').val();
    let deliveryAddress = $('#deliveryAddress').val();
    let vehicleType = $('#vehicleType').val();
    let reciverContact = $('#ReceiverContact').val();
    let deliveryDate = $('#deliveryDate').val();
    let distance = $('#distance').val();
    let deliveryAmount = $('#deliveryAmount').val();
    let status = $('#status').val();
    let priority = $('#priority').val();

    $.ajax({
        url: "http://localhost:8080/api/v1/orders/save",
        method: "POST",
        contentType: "application/json",
        data: JSON.stringify({
            pickupPoint: pickupPoint,
            deliveryAddress: deliveryAddress,
            vehicleType: vehicleType,
            reciverContact: reciverContact,
            deliveryDate: deliveryDate,
            distance: distance,
            deliveryAmount: deliveryAmount,
            status: status,
            priority: priority,
            customer: {
                cid: userID
            }
        }),
        headers: {
            "Authorization": "Bearer " + localStorage.getItem("authToken")
        },
        success: function (response) {
            console.log("Order placed successfully:", response);
            getPendingOrders();
        },
        error: function (xhr, status, error) {
            console.error("Error placing order:", error);
        }
    });
})