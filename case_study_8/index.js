// Validate name
function validateName() {
    const name = document.getElementById('name').value.trim();
    const error = document.getElementById('nameError');

    if (name === '') {
        error.textContent = 'Name is required.';
        return false;
    } else if (name.length < 3) {
        error.textContent = 'Name must be at least 3 characters long.';
        return false;
    } else {
        error.textContent = '';
        return true;
    }
}

// Validate email
function validateEmail() {
    const email = document.getElementById('email').value.trim();
    const error = document.getElementById('emailError');
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email === '') {
        error.textContent = 'Email is required.';
        return false;
    } else if (!regex.test(email)) {
        error.textContent = 'Invalid email format.';
        return false;
    } else {
        error.textContent = '';
        return true;
    }
}

// Validate age
function validateAge() {
    const age = document.getElementById('age').value.trim();
    const error = document.getElementById('ageError');

    if (age === '') {
        error.textContent = 'Age is required.';
        return false;
    } else if (isNaN(age) || age < 16 || age > 80) {
        error.textContent = 'Age must be between 16 and 80.';
        return false;
    } else {
        error.textContent = '';
        return true;
    }
}

// Validate gender selection
function validateGender() {
    const radios = document.getElementsByName('gender');
    const error = document.getElementById('genderError');
    let selected = false;

    for (let i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
            selected = true;
            break;
        }
    }

    if (!selected) {
        error.textContent = 'Please select your gender.';
        return false;
    } else {
        error.textContent = '';
        return true;
    }
}

// Update final form validation
function validateForm() {
    const validName = validateName();
    const validEmail = validateEmail();
    const validAge = validateAge();
    const validGender = validateGender(); // new
    const validHeight = validateHeight();
    const validWeight = validateWeight();
    const validGoal = validateGoal();

    if (validName && validEmail && validAge && validGender && validHeight && validWeight && validGoal) {
        document.getElementById('successMessage').textContent = 'Form submitted successfully!';
        document.getElementById('gymForm').reset();
        return false; // prevent actual submission for demo
    } else {
        document.getElementById('successMessage').textContent = '';
        return false;
    }
}


// Validate height
function validateHeight() {
    const height = document.getElementById('height').value.trim();
    const error = document.getElementById('heightError');

    if (height === '') {
        error.textContent = 'Height is required.';
        return false;
    } else if (isNaN(height) || height < 100 || height > 250) {
        error.textContent = 'Enter a valid height between 100 and 250 cm.';
        return false;
    } else {
        error.textContent = '';
        return true;
    }
}

// Validate weight
function validateWeight() {
    const weight = document.getElementById('weight').value.trim();
    const error = document.getElementById('weightError');

    if (weight === '') {
        error.textContent = 'Weight is required.';
        return false;
    } else if (isNaN(weight) || weight < 30 || weight > 300) {
        error.textContent = 'Enter a valid weight between 30 and 300 kg.';
        return false;
    } else {
        error.textContent = '';
        return true;
    }
}

// Validate goal
function validateGoal() {
    const goal = document.getElementById('goal').value;
    const error = document.getElementById('goalError');

    if (goal === '') {
        error.textContent = 'Please select your fitness goal.';
        return false;
    } else {
        error.textContent = '';
        return true;
    }
}

// Final form validation
function validateForm() {
    const validName = validateName();
    const validEmail = validateEmail();
    const validAge = validateAge();
    const validHeight = validateHeight();
    const validWeight = validateWeight();
    const validGoal = validateGoal();

    if (validName && validEmail && validAge && validHeight && validWeight && validGoal) {
        document.getElementById('successMessage').textContent = 'Form submitted successfully!';
        document.getElementById('gymForm').reset();
        return false; // prevent actual submission for demo
    } else {
        document.getElementById('successMessage').textContent = '';
        return false;
    }
}
