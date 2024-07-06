 // Countdown Timer
 const countdownDate = new Date("July 10, 2024 00:00:00").getTime();
        
 const countdownFunction = setInterval(() => {
     const now = new Date().getTime();
     const distance = countdownDate - now;
     
     const days = Math.floor(distance / (1000 * 60 * 60 * 24));
     const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
     const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
     const seconds = Math.floor((distance % (1000 * 60)) / 1000);
     
     document.getElementById("days").innerHTML = days;
     document.getElementById("hours").innerHTML = hours;
     document.getElementById("minutes").innerHTML = minutes;
     document.getElementById("seconds").innerHTML = seconds;
     
     if (distance < 0) {
         clearInterval(countdownFunction);
         document.getElementById("countdown").innerHTML = "EXPIRED";
     }
 }, 1000);

 function toggleDropdown() {
    const options = document.getElementById('dropdown-options');
    options.style.display = options.style.display === 'block' ? 'none' : 'block';
}

function selectOption(option) {
    const selectedText = document.querySelector('.dropdown-selected .text');
    const selectedImg = document.getElementById('selected-img');
    selectedText.textContent = option.querySelector('span').textContent;
    selectedImg.src = option.querySelector('img').src;
    document.getElementById('dropdown-options').style.display = 'none';
}

document.addEventListener('click', function(event) {
    const dropdown = document.querySelector('.dropdown');
    if (!dropdown.contains(event.target)) {
        document.getElementById('dropdown-options').style.display = 'none';
    }
});

function toggleDropdownSecond() {
    const options = document.getElementById('dropdown-options-second');
    options.style.display = options.style.display === 'block' ? 'none' : 'block';
}

function selectOptionSecond(option) {
    const selectedImg = document.getElementById('selected-img-second');
    selectedImg.src = option.querySelector('img').src;
    document.getElementById('dropdown-options-second').style.display = 'none';
}

document.addEventListener('click', function(event) {
    const dropdownSecond = document.querySelector('.dropdown-second');
    if (!dropdownSecond.contains(event.target)) {
        document.getElementById('dropdown-options-second').style.display = 'none';
    }
});

function maxAmount() {
    document.getElementById('amount').value = "Max Amount"; // Replace with actual logic for setting max amount
}

function switchPaymentMethod(method) {
    const cryptoBtn = document.getElementById('cryptoBtn');
    const cardBtn = document.getElementById('cardBtn');
    const paymentForm = document.getElementById('paymentForm');
    const comingSoonMessage = document.getElementById('comingSoonMessage');

    if (method === 'crypto') {
        cryptoBtn.classList.add('active-underline', 'active');
        cryptoBtn.classList.remove('inactive');
        cardBtn.classList.remove('active-underline', 'active');
        cardBtn.classList.remove('span-text__color', 'active');
        cardBtn.classList.add('inactive');
        paymentForm.classList.remove('hidden');
        comingSoonMessage.classList.add('hidden');
    } else if (method === 'card') {
        cardBtn.classList.add('active-underline', 'active');
        cardBtn.classList.add('span-text__color', 'active');
        cardBtn.classList.remove('inactive');
        cryptoBtn.classList.remove('active-underline', 'active');
        cryptoBtn.classList.remove('span-text__color', 'active');
        cryptoBtn.classList.add('inactive');
        paymentForm.classList.add('hidden');
        comingSoonMessage.classList.remove('hidden');
    }
}