document.getElementById('signupForm').addEventListener('submit', async function(e) {
    e.preventDefault();

    const full_name = document.getElementById('full_name').value;
    const email = document.getElementById('email').value;
    const profile_category = document.getElementById('profile_category').value;
    const mobile_number = document.getElementById('mobile_number').value;
    const password = document.getElementById('password').value;

    const payload = {
        full_name: full_name,
        email: email,
        profile_category: profile_category,
        mobile_number: mobile_number,
        password: password
    };

    try {
        const response = await fetch('http://localhost:3000/api/profile', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
        });

        const result = await response.json();

        if (response.ok) {
            document.getElementById('success-message').textContent = 'Profile created successfully!';
            document.getElementById('success-message').style.display = 'block';
            document.getElementById('error-message').style.display = 'none';
        } else {
            document.getElementById('error-message').textContent = result.error || 'An error occurred';
            document.getElementById('error-message').style.display = 'block';
            document.getElementById('success-message').style.display = 'none';
        }
    } catch (error) {
        document.getElementById('error-message').textContent = 'An error occurred';
        document.getElementById('error-message').style.display = 'block';
        document.getElementById('success-message').style.display = 'none';
    }
});
