const fetchRequestData = () => {
    $.ajax({
        url: "http://localhost:8080/api/v1/request/getRequest",
        method: "GET",
        success: (res) => {
            $('#requestTableBody').empty();

            // Iterate over the response and build the row for each request
            res.forEach((request) => {
                $('#requestTableBody').append(`
                    <div class="row align-items-center request-row">
                        <div class="col-2 ps-4 req-id">#${request.reqId}</div>
                        <div class="col-2">${request.username}</div>
                        <div class="col-2 request-status">${request.status}</div>
                        <div class="col-2">
                            <button class="btn btn-view viewBtn">View</button>
                        </div>
                        <div class="col-4">
                            <button class="btn btn-deactive me-2 btn-status" data-status="deactive">DeActive</button>
                            <button class="btn btn-active btn-status" data-status="approved">Active</button>
                        </div>
                    </div>
                `);
            });
        },
        error: (err) => {
            console.log("Error fetching requests:", err);
        }
    });
};

fetchRequestData();

$(document).on("click", ".btn-status", function () {
    console.log("Button clicked");

    const requestRow = $(this).closest('.request-row');
    const reqId = requestRow.find('.req-id').text().replace("#", "").trim(); // Extract reqId
    const statusElement = requestRow.find('.request-status'); // Status field in UI

    $.ajax({
        url: `http://localhost:8080/api/v1/request/updateStatus?reqId=${reqId}`, // API endpoint
        method: "PUT", // Use PUT method
        success: (response) => {
            console.log(`Request #${reqId} updated successfully!`);
            statusElement.text("approved"); // Update UI
        },
        error: (err) => {
            console.error("Error updating status:", err);
        }
    });
});

$(document).on("click", ".btn-view", function () {
    const requestRow = $(this).closest('.request-row');
    const reqId = requestRow.find('.req-id').text().replace("#", "").trim();

    // Fetch vehicle details for the given reqId
    $.ajax({
        url: `http://localhost:8080/api/vi/request/getVehicleDetails?reqId=${reqId}`,
        method: "GET",
        success: (vehicle) => {
            $("#vehicleNumber").text(vehicle.vehicleNumber);
            $("#vehicleYear").text(vehicle.vehicleYear);
            $("#licenseNumber").text(vehicle.licenseNumber);
            $("#licenseExpiration").text(vehicle.licenseExpiration);
            $("#vehicleModel").text(vehicle.vehicleModel);
            $("#insurance").text(vehicle.insurance);

            // Show modal
            $("#viewVehicleModal").modal("show");
        },
        error: (err) => {
            console.error("Error fetching vehicle details:", err);
        }
    });
});
