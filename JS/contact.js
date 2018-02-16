document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementsByTagName('.contact-form')[0];
    const fname = document.querySelector('#fname');
    const lname = document.querySelector('#lname');
    const email = document.querySelector('#email');
    const zip = document.querySelector('#zip');
    const states = document.querySelector('#state');

    // Insert states into select
    statesArray.forEach((state) => {
        const option = document.createElement('option');
        option.value = state;
        option.text = state;
        states.appendChild(option);
    })

    // Submit form
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        sendInfo();
    });
});

const statesArray = ['Alabama','Alaska','American Samoa','Arizona','Arkansas','California','Colorado','Connecticut','Delaware','District of Columbia','Federated States of Micronesia','Florida','Georgia','Guam','Hawaii','Idaho','Illinois','Indiana','Iowa','Kansas','Kentucky','Louisiana','Maine','Marshall Islands','Maryland','Massachusetts','Michigan','Minnesota','Mississippi','Missouri','Montana','Nebraska','Nevada','New Hampshire','New Jersey','New Mexico','New York','North Carolina','North Dakota','Northern Mariana Islands','Ohio','Oklahoma','Oregon','Palau','Pennsylvania','Puerto Rico','Rhode Island','South Carolina','South Dakota','Tennessee','Texas','Utah','Vermont','Virgin Island','Virginia','Washington','West Virginia','Wisconsin','Wyoming'];
