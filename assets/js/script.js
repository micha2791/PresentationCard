var emailEl = document.getElementsByClassName("Message");

// click event listener for the email button
emailEl.addEventListener("click", function() {
  
    // create a new email object
  var email = new Email();
  
  // send the email
  email.send();
}
);
// Email object
function Email() {
    
    // create a new email object
    this.email = new EmailObj();
   
    // send the email
    this.send = function() {
       
        // send the email
        this.email.send();
    }
    }



