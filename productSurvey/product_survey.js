function submitFeedback() {
    const username = document.getElementById("name")?.value || "";
    const age = document.getElementById("age")?.value || "";
    const email = document.getElementById("email")?.value || "";
    const job = document.getElementById("job")?.value || "";
    const designation = document.getElementById("designation")?.value || "";
    const productType = document.getElementById("productType")?.value || "";
    const feedback = document.getElementById("feedbackText")?.value || "";

    if (document.getElementById("userName")) document.getElementById("userName").innerHTML = username;
    if (document.getElementById("userAge")) document.getElementById("userAge").innerHTML = age;
    if (document.getElementById("userEmail")) document.getElementById("userEmail").innerHTML = email;
    if (document.getElementById("userJob")) document.getElementById("userJob").innerHTML = job;
    if (document.getElementById("userDesignation")) document.getElementById("userDesignation").innerHTML = designation;
    if (document.getElementById("userProductChoice")) document.getElementById("userProductChoice").innerHTML = productType;
    if (document.getElementById("userFeedback")) document.getElementById("userFeedback").innerHTML = feedback;

    const userInfo = document.getElementById("userInfo");
    if (userInfo) userInfo.style.display = "block";

    alert("Thank you for your valuable feedback");
}

// Select button once
const submitButton = document.getElementById("submitBtn");
if (submitButton) {
    submitButton.onclick = submitFeedback;
}

// Handle "Enter" key press
document.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        event.preventDefault(); // Prevent default form submission
        submitFeedback();
    }
});
