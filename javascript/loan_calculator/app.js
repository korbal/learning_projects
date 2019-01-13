//listen for submit

//initially calculateResults was the event handler, but we need to delay it with 3 secs while the .gif is showing. 
//document.getElementById('loan-form').addEventListener('submit', calculateResults);

document.getElementById('loan-form').addEventListener('submit', function(e){
  //hide results regardless of state, always a good idea
  document.querySelector('#results').style.display = 'none';

  //show loader
  document.querySelector('#loading').style.display = 'block';

  setTimeout(calculateResults, 2000);
  

  e.preventDefault();
});

function calculateResults(){
  
  //UI variables
  
  const UIamount = document.getElementById('amount');
  const UIinterest = document.getElementById('interest');
  const UIyears = document.getElementById('years');
  const UImonthlyPayment = document.getElementById('monthly-payment');
  const UItotalPayment = document.getElementById('total-payment');
  const UItotalInterest = document.getElementById('total-interest');

  //calculations for the app

  const principal = parseFloat(UIamount.value);
  const calculatedInterest = parseFloat(UIinterest.value) / 100 / 12;
  const calculatedPayments = parseFloat(UIyears.value) * 12;

  //monthly payments
  const x = Math.pow(1 + calculatedInterest, calculatedPayments);
  const monthly = (principal*x*calculatedInterest)/(x-1);

  if (isFinite(monthly)) {
    UImonthlyPayment.value = monthly.toFixed(2);
    UItotalPayment.value = (monthly * calculatedPayments).toFixed(2);
    UItotalInterest.value = ((monthly*calculatedPayments)-principal).toFixed(2);
    //showing the results, hiding the loading spinner
    document.querySelector('#results').style.display = 'block';
    document.querySelector('#loading').style.display = 'none';
    
  } else {
    // we could just unhide a div, but we are doing the whole error from javascript
    
    showError('Please check your numbers! ');
    
  }
  //e.preventDefault(); //this is not the event handler in v2, because of setTimeout
}

//show error
function showError(message){
  
  //hide results and loader .gif
  document.querySelector('#results').style.display = 'none';
  document.querySelector('#loading').style.display = 'none';

  //create holding div
  const errorDiv = document.createElement('div');

  //get elements to insert the message into
  const card = document.querySelector('.card');
  const heading = document.querySelector('.heading')

  //add class. in bootstrap alert-danger will make it red.
  errorDiv.className = 'alert alert-danger'
  //create text node and append to div
  //appendChild inserts INTO the div - it will insert the message that we pass to showError
  errorDiv.appendChild(document.createTextNode(message))

  //insert error ABOVE heading. grab the parent and pass in the element you want to inject and before WHAT you want to inject.
  card.insertBefore(errorDiv,heading);


  //clear error after 3 secs
  setTimeout(clearError, 1500)

}

function clearError(){
  //grab the alert class we created in showerror
  document.querySelector('.alert').remove();

}