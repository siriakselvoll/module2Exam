
function calculateTotal() {
    var roomRate = document.getElementById('room-type').value;

    //This doesn't work because the innerHTML tag is used incorrectly.
    //There is simply no content to get, since the innerHTML tag is used for getting content from tags like <p> or <h1>.
    //var nights = document.getElementById('nights').innerHTML;

    //Value gets the content from the input tag, see corrected code:
    var nights = document.getElementById('nights').value;

    nights = parseInt(nights);
    if (isNaN(nights) || nights <= 0) {
        alert('Please enter a valid number of nights.');
        return;
    }

    if (roomRate === "") {
        alert('Please select a room type.');
        return;
    }
    //This isn't converting the string(roomRate) to a number before multiplying it with the nights.
    //This will result in the total being 0
    //var total = parseInt(roomRate) * nights;  

    //Correct code:
    roomRate = parseInt(roomRate); // Converts string to number

    var total = roomRate * nights;

    //Corrected code: Changed getElementByID to getElementById
    document.getElementById('total-cost').innerText = total.toFixed(2);  
}

function confirmBooking() {
    var total = parseFloat(document.getElementById('total-cost').innerText);

    //This check will never match due to the fact that the variable total is a string.
    //Comparing strings to integers will always return false, and the booking will never be confirmed.
    //Corrected: I edited the code above to use parseFloat, so the comparison will return true.
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