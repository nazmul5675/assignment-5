// all universal get value id 


// for card 1
document.getElementById('donate-btn').addEventListener('click', function () {
    const navBalance = getTagFiledById('nav-balance');
    const previousCardAmount1 = getTagFiledById('previous-card-amount-1');
    const cardAmountInput1 = getInputFiledById('card-amount-input-1');
    if (cardAmountInput1 < 0 || isNaN(cardAmountInput1)) {
        document.getElementById('my_modal_1').classList.add('hidden');
        alert('Please Insert Valid Number !');
    } if (cardAmountInput1 > navBalance) {
        document.getElementById('my_modal_1').classList.add('hidden');
        alert('You Have Insufficient Balance !!!')
    } else {
        const updatedPreviousCardAmount1 = cardAmountInput1 + previousCardAmount1;
        document.getElementById('previous-card-amount-1').innerText = updatedPreviousCardAmount1;

        const updatedNavBalance = navBalance - cardAmountInput1;
        document.getElementById('nav-balance').innerText = updatedNavBalance;


        // time 
        const now = new Date().toLocaleString('en-GB', { timeZone: 'Asia/Dhaka' });
        // create div
        const div = document.createElement('div');

        div.classList.add('border-2');
        div.classList.add('border-[#B8B8B8]');
        div.classList.add('rounded-xl');
        div.classList.add('mx-20');
        div.classList.add('mb-5');
        div.innerHTML = `<p class="font-bold text-xl">You donate ${cardAmountInput1} Taka is Donated for famine-2024 at Noakhali, Bangladesh. </p> 
        <p class="font-extra-light">${now}<p/>
        `
        console.log(div);
        document.getElementById('history-card').appendChild(div);
    }

});

// card 2
document.getElementById('donate-btn2').addEventListener('click', function () {
    const navBalance = getTagFiledById('nav-balance');
    const previousCardAmount2 = getTagFiledById('previous-card-amount-2');
    const cardAmountInput2 = getInputFiledById('card-amount-input-2');
    if (cardAmountInput2 < 0 || isNaN(cardAmountInput2)) {
        document.getElementById('my_modal_2').classList.add('hidden');
        alert('Please Insert Valid Number !');
    } if (cardAmountInput2 > navBalance) {
        document.getElementById('my_modal_2').classList.add('hidden');
        alert('You Have Insufficient Balance !!!');

    } else {
        const updatedPreviousCardAmount2 = cardAmountInput2 + previousCardAmount2;
        document.getElementById('previous-card-amount-2').innerText = updatedPreviousCardAmount2;


        const updatedNavBalance = navBalance - cardAmountInput2;
        document.getElementById('nav-balance').innerText = updatedNavBalance;


        // time 
        const now = new Date().toLocaleString('en-GB', { timeZone: 'Asia/Dhaka' });
        const div = document.createElement('div');

        div.classList.add('border-2');
        div.classList.add('border-[#B8B8B8]');
        div.classList.add('rounded-xl');
        div.classList.add('mx-20');
        div.classList.add('mb-5');
        div.innerHTML = `<p class="font-bold text-xl">You donate ${cardAmountInput2} Taka is Donated for Flood Relief in Feni,Bangladesh.</p>
        <p class="font-extra-light">${now}<p/>
        `
        console.log(div);
        document.getElementById('history-card').appendChild(div);
    }

});

// card 3

document.getElementById('donate-btn3').addEventListener('click', function () {
    const navBalance = getTagFiledById('nav-balance');
    const previousCardAmount3 = getTagFiledById('previous-card-amount-3');
    const cardAmountInput3 = getInputFiledById('card-amount-input-3');
    if (cardAmountInput3 < 0 || isNaN(cardAmountInput3)) {
        document.getElementById('my_modal_3').classList.add('hidden');
        alert('Please Insert Valid Number !');
    } if (cardAmountInput3 > navBalance) {
        document.getElementById('my_modal_3').classList.add('hidden');
        alert('You Have Insufficient Balance !!!');

    } else {
        const updatedPreviousCardAmount3 = cardAmountInput3 + previousCardAmount3;
        document.getElementById('previous-card-amount-3').innerText = updatedPreviousCardAmount3;

        const updatedNavBalance = navBalance - cardAmountInput3;
        document.getElementById('nav-balance').innerText = updatedNavBalance;


        // time 
        const now = new Date().toLocaleString('en-GB', { timeZone: 'Asia/Dhaka' });
        const div = document.createElement('div');

        div.classList.add('border-2');
        div.classList.add('border-[#B8B8B8]');
        div.classList.add('rounded-xl');
        div.classList.add('mx-20');
        div.classList.add('mb-5');
        div.innerHTML = `<p class="font-bold text-xl">You donate ${cardAmountInput3} Taka is Donated for Aid for Injured in the Quota Movement, Bangladesh.</p>
        <p class="font-extra-light">${now}<p/>
        `
        console.log(div);
        document.getElementById('history-card').appendChild(div);
    }

});

// functionality for history 
document.getElementById('history-btn').addEventListener('click', function () {
    const historyBtn = document.getElementById('history-btn').classList.remove('border-[#B8B8B8]');
    const historyBtnBg = document.getElementById('history-btn').classList.add('bg-[#B4F461]');
    const donationBtn = document.getElementById('donation-btn').classList.add('border-[#B8B8B8]');
    const donationBg = document.getElementById('donation-btn').classList.remove('bg-[#B4F461]');
    const sectionHideForHistory = document.getElementById('body-card-section').classList.add('hidden');
    const historyInDonationBtn = document.getElementById('history-card').classList.remove('hidden');

});

// functionality for donation

document.getElementById('donation-btn').addEventListener('click', function () {
    const historyBtn = document.getElementById('history-btn').classList.add('border-[#B8B8B8]');
    const historyBtnBg = document.getElementById('history-btn').classList.remove('bg-[#B4F461]');
    const donationBtn = document.getElementById('donation-btn').classList.remove('border-[#B8B8B8]');
    const donationBg = document.getElementById('donation-btn').classList.add('bg-[#B4F461]');
    const sectionHideForHistory = document.getElementById('body-card-section').classList.remove('hidden');
    const historyInDonationBtn = document.getElementById('history-card').classList.add('hidden');

})




