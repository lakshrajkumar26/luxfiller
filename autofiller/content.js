//to listen to those value coming from ext
chrome.runtime.onMessage.addListener(
    function(request,sender,sendResponse) {
        try{
            document.getElementById("firstName").value =request.f_name
            document.getElementById("lastName").value =request.l_name
            document.getElementById("cardNumber").value =request.cardnumber
            document.getElementById("cardExpiry-input").value =request.year
            document.getElementById("cardCvc-input").value =request.cvv
            document.getElementById("googleAddressAutocomplete").value =request.address
            document.getElementById(":rcc:").value =request.postcode
            document.getElementById("phoneNumber").value =request.number
            document.getElementById("emailAddress").value =request.email
            sendResponse({status:"Success!"});
        } catch (error) {
            console.log(error)
            sendResponse({status: "Exception occurred!"});
        }
    }
);