//  event for each button
//when click button info get change by tab
//here we will send message to first tab in a dicionary means key n value
//so send from what we have created
document.getElementById("autofill").addEventListener("click",()=>{
    chrome.tabs.query({active:true,currentWindow:true},function(tabs){
    chrome.tabs.sendMessage(tabs[0].id, {
        f_name : document.getElementById('first_name').value,
        l_name : document.getElementById('last_name').value,
        cardnumber : document.getElementById('card_number').value,
        year : document.getElementById('card_year').value,
        cvv : document.getElementById('card_cvv').value,
        address : document.getElementById('address').value,
        postcode : document.getElementById('postcode').value,
        number : document.getElementById('number').value,
        email : document.getElementById('email').value
    },function(response){
        console.log(response.status);
    });
  });
});
document.getElementById("reset-fields").addEventListener("click", () => {
	/* Reset extension form values */
    f_name : document.getElementById('first_name').value  = '';
    l_name : document.getElementById('last_name').value  = '';
    cardnumber : document.getElementById('card_number').value  = '';
    year : document.getElementById('card_year').value = '';
    cvv : document.getElementById('card_cvv').value = '';
    address : document.getElementById('address').value = '';
    postcode : document.getElementById('postcode').value = '';
    number : document.getElementById('number').value = '';
    email : document.getElementById('email').value = '';
});

//Save 
document.getElementById("save").addEventListener("click", () => {
	chrome.storage.sync.set({
		f_name : document.getElementById('first_name').value,
        l_name : document.getElementById('last_name').value,
        cardnumber : document.getElementById('card_number').value,
        year : document.getElementById('card_year').value,
        cvv : document.getElementById('card_cvv').value,
        address : document.getElementById('address').value,
        postcode : document.getElementById('postcode').value,
        number : document.getElementById('number').value,
        email : document.getElementById('email').value
		// year: document.getElementById('year').value,
		// cvv: document.getElementById('cvv').value
	}, function() {
		console.log("Saved!");
	});
});

//Load 


document.getElementById("load").addEventListener("click", () => {
	chrome.storage.sync.get([
		'first_name',
		'last_name',
		'card_number',
		'card_year',
		'card_cvv',
		'address',
		'number',
		'postcode',
		'email',
	], function(result) {
         document.getElementById('first_name').value = result.first_name;
         document.getElementById('last_name').value = result.last_name;
         document.getElementById('card_number').value =result.card_number;
         document.getElementById('card_year').value= result.card_year;
         document.getElementById('card_cvv').value = result.card_cvv
         document.getElementById('address').value = result.address;
         document.getElementById('postcode').value = result.postcode;
         document.getElementById('number').value = result.number;
         document.getElementById('email').value = result.email;


         
		// document.getElementById('name').value = result.name;
		// document.getElementById('email').value = result.email;
		// document.getElementById('telephone').value = result.telephone;
		// document.getElementById('address1').value = result.address1;
		// document.getElementById('address2').value = result.address2;
		// document.getElementById('address3').value = result.address3;
		// document.getElementById('city').value = result.city;
		// document.getElementById('postcode').value = result.postcode;
		// document.getElementById('card_number').value = result.cardnumber;
		// document.getElementById('month').value = result.month,
		// document.getElementById('year').value = result.year,
		// document.getElementById('cvv').value = result.cvv;
	});
});