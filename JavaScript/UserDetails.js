$(document).ready(function () {
    let loggedUserID = localStorage.getItem("LoggedUserId");
    let token = localStorage.getItem("authToken");

    $.ajax({
        url: `http://localhost:8080/api/v1/driver/getPersonalData/${loggedUserID}`,
        method: "GET",
        headers: {
            "Authorization": "Bearer " + token
        },
        success: (res) => {
            console.log("res",res)
            console.log("res2",res.data)

            res.forEach(driver =>{
                $("#firstName").val(driver.firstName);
                $("#lastName").val(driver.lastName);
                $("#email").val(driver.user?.email || '');
                $("#phone").val(driver.user?.phone || '');
                $("#streetAddress").val(driver.streetAddress);
                $("#city").val(driver.city);

            })



        },
        error: function (xhr, status, error) {
            console.log(error);
        }
    })
})

    //     // Form validation
    //     document.addEventListener('DOMContentLoaded', function() {
    //     const form = document.getElementById('driverRegistrationForm');
    //
    //     // File upload preview
    //     const licenseImageInput = document.getElementById('licenseImage');
    //     const licenseImageText = document.getElementById('licenseImageText');
    //
    //     licenseImageInput.addEventListener('change', function() {
    //     if (this.files && this.files[0]) {
    //     licenseImageText.textContent = this.files[0].name;
    // } else {
    //     licenseImageText.textContent = 'Upload image of your driver license';
    // }
    // });




    //     // Date validation
    //     const dobInput = document.getElementById('dateOfBirth');
    //     dobInput.addEventListener('change', function() {
    //     const today = new Date();
    //     const birthDate = new Date(this.value);
    //     let age = today.getFullYear() - birthDate.getFullYear();
    //     const m = today.getMonth() - birthDate.getMonth();
    //     if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    //     age--;
    // }
    //
    //     if (age < 18) {
    //     this.setCustomValidity('You must be at least 18 years old');
    //     this.classList.add('error');
    // } else {
    //     this.setCustomValidity('');
    //     this.classList.remove('error');
    // }
    // });


        // License expiry validation
    //     const licenseExpiryInput = document.getElementById('licenseExpiry');
    //     licenseExpiryInput.addEventListener('change', function() {
    //     const today = new Date();
    //     const expiryDate = new Date(this.value);
    //
    //     if (expiryDate <= today) {
    //     this.setCustomValidity('License must not be expired');
    //     this.classList.add('error');
    // } else {
    //     this.setCustomValidity('');
    //     this.classList.remove('error');
    // }
    // });
    //
    //     // Insurance expiry validation
    //     const insuranceExpiryInput = document.getElementById('insuranceExpiry');
    //     insuranceExpiryInput.addEventListener('change', function() {
    //     const today = new Date();
    //     const expiryDate = new Date(this.value);
    //
    //     if (expiryDate <= today) {
    //     this.setCustomValidity('Insurance must not be expired');
    //     this.classList.add('error');
    // } else {
    //     this.setCustomValidity('');
    //     this.classList.remove('error');
    // }
    // });
    //
    //     // Form submission
    //     form.addEventListener('submit', function(event) {
    //     event.preventDefault();
    //
    //     // Validate all required fields
    //     const requiredFields = form.querySelectorAll('[required]');
    //     let isValid = true;
    //
    //     requiredFields.forEach(field => {
    //     if (!field.checkValidity()) {
    //     field.classList.add('error');
    //     isValid = false;
    // } else {
    //     field.classList.remove('error');
    // }
    // });
    //
    //     if (isValid) {
    //     // Replace with actual form submission logic
    //     alert('Form submitted successfully! The data would be sent to the server.');
    //     // form.submit();
    // }
    // });
    //
    //     // Input validation on blur
    //     const inputs = form.querySelectorAll('input, select, textarea');
    //     inputs.forEach(input => {
    //     input.addEventListener('blur', function() {
    //     if (this.hasAttribute('required') || this.value.trim() !== '') {
    //     if (!this.checkValidity()) {
    //     this.classList.add('error');
    // } else {
    //     this.classList.remove('error');
    // }
    // }
    // });
    //
    //     input.addEventListener('input', function() {
    //     if (this.checkValidity()) {
    //     this.classList.remove('error');
    // }
    // });
    // });
    // });
