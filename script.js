document.getElementById("healthForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const age = parseInt(document.getElementById("age").value);
    const weight = parseFloat(document.getElementById("weight").value);
    const height = parseFloat(document.getElementById("height").value);
    const symptoms = document.getElementById("symptoms").value.trim();

    // BMI Calculation
    const heightInMeters = height / 100;
    const bmi = (weight / (heightInMeters ** 2)).toFixed(1);
    let bmiStatus = "";

    if (bmi < 18.5) {
        bmiStatus = "Underweight";
    } else if (bmi >= 18.5 && bmi < 25) {
        bmiStatus = "Normal weight";
    } else if (bmi >= 25 && bmi < 30) {
        bmiStatus = "Overweight";
    } else {
        bmiStatus = "Obese";
    }

    let message = `Hello ${name},<br><br>`;
    message += `Age: ${age}<br>`;
    message += `BMI: ${bmi} (${bmiStatus})<br>`;

    if (symptoms.length > 0) {
        message += `Reported symptoms: ${symptoms}<br>`;
        message += `<strong>We recommend visiting a healthcare provider for a detailed checkup.</strong>`;
    } else {
        message += `<strong>You seem fine based on the provided information. Keep maintaining a healthy lifestyle!</strong>`;
    }

    const resultDiv = document.getElementById("result");
    resultDiv.innerHTML = message;
    resultDiv.style.display = "block";
});
