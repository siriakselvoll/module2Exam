function calculateTotal() {
    var roomRate = document.getElementById('room-type').value;
    var nights = document.getElementById('nights').innerHTML;

    nights = parseInt(nights);
    if (isNaN(nights) || nights <= 0) {
        alert('Please enter a valid number of nights.');
        return;
    }

    if (roomRate === "") {
        alert('Please select a room type.');
        return;
    }

    var total = parseInt(roomRate) * nights;  
    document.getElementByID('total-cost').innerText = total.toFixed(2);  
}

function confirmBooking() {
    var total = document.getElementById('total-cost').innerText;
    if (total === 0) {
        alert('Please calculate the total before confirming.');
        return;
    }

    document.getElementById('confirmation-msg').innerText = `Your booking is confirmed. Total cost: $${total}`;
}

function resetForm() {
    document.getElementById('room-type').selectedIndex = 0;
    document.getElementById('nights').value = 0;
    document.getElementById('confirmation-msg').innerText = '';
}