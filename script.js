// login button funtionality

document.getElementById('loginButton').addEventListener("click",function(e){
    e.preventDefault()
    const mobileNumber=1980002266
    const pinNumber=1234
    const mobileNumberValue=document.getElementById("mobile-number").value


    const mobileNumberValueConverted= parseInt(mobileNumberValue)

    const pinNumberValue=document.getElementById("pin-number").value
    const pinNumberValueConverted= parseInt(pinNumberValue)
    
    
    if(mobileNumberValueConverted === mobileNumber && pinNumberValueConverted === pinNumber){
        window.location.href="./home.html"
    }
    else{
        alert('invalid credentials')
    }
    



})