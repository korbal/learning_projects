//listen for submit

document.getElementById('loan-form').addEventListener('submit', calculateResults);

function calculateResults(e){
  
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
    
  } else {
    // we could just unhide a div, but we are doing the whole error from javascript
    showError('Please check your numbers! ');
  }
  e.preventDefault();
}

//show error
function showError(message){
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
  setTimeout(clearError, 3000)

}

function clearError(){
  //grab the alert class we created in showerror
  document.querySelector('.alert').remove();

}