let email = document.getElementById('email');
  let otpverify = document.getElementById('otpverify');

function sendotp() {

  
  let otp_value = Math.floor(Math.random() * 10000);

  let emailbody = '<h2>OTP is</h2>' + otp_value;
  
  
  Email.send({
        SecureToken : "0c4c958d-fdff-47cb-8462-2c4c048e9afd",
        To : email.value,
        From : "hammadullah245@gmail.com",
        Subject : "Email OTP using java script",
        Body : emailbody,
    }).then(
      message =>
      
      
      {
        if (message === "OK") {
          alert("OTP send to your email " + email.value);
          otpverify.style.display = "flex";
          let otp_inp = document.getElementById("otp_inp");  
          let otp_btn = document.getElementById("otp-btn1");

          otp_btn.addEventListener("click", () => {
            
            if (otp_inp.value == otp_value) { 
              alert("Email Address verified successfully");
            } else {
              alert("Invalid OTP");
            }
            
  
              window.location.reload();

          });

        }
      }
    );

}