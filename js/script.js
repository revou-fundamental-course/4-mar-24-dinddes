document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault();

    // Get gender, weight, and height input values
    const gender = document.querySelector('input[name="Gender"]:checked').value;
    const weight = parseFloat(document.getElementById('Weight').value);
    const height = parseFloat(document.getElementById('Height').value);

    // Calculate BMI
    const bmi = calculateBMI(weight, height);

    // Display result
    document.getElementById('result').innerText = `Your BMI is: ${bmi.toFixed(2)}`;

    // Determine BMI category and display description
    const description = getBMIDescription(bmi, gender);
    document.getElementById('description').innerText = description;
});

function calculateBMI(weight, height) {
    // Convert height to meters
    const heightInMeters = height / 100;
    
    // Calculate BMI
    const bmi = weight / (heightInMeters * heightInMeters);

    return bmi;
}

function getBMIDescription(bmi, gender) {
    let description = '';

    if (bmi < 18.5) {
        description = 'Underweight';
    } else if (bmi >= 18.5 && bmi < 25) {
        description = 'Normal weight';
    } else if (bmi >= 25 && bmi < 30) {
        description = 'Overweight';
    } else {
        description = 'Obese';
    }

    // Adjust description based on gender (convert gender to lowercase for comparison)
    if (gender.toLowerCase() === 'male') {
        description += ' (Male)';
    } else {
        description += ' (Female)';
    }

    return description;
}