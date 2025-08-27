const validPin=1234

document.getElementById('add-money-btn').addEventListener('click',function(e){
    e.preventDefault()
    
    const bank=document.getElementById('bank').value
    const accountNumber=document.getElementById('account-number').value
    const ammount=parseInt(document.getElementById('add-ammount').value)

    const pin=parseInt(document.getElementById('add-pin').value)

    const availableBalance=parseInt(document.getElementById('available-balance').innerText)

    if(accountNumber.length <11){
        alert('please provide valid account number')
        return;
    }
    if(pin !== validPin){
        alert('please provide valid pin number')
        return;
    }

    const totalNewAvailableBalance=ammount+availableBalance

    document.getElementById("available-balance").innerText=totalNewAvailableBalance
    

})

// cashoutt
document.getElementById('withdraw-btn').addEventListener('click',function(e){
e.preventDefault()

const amount=parseInt(document.getElementById('withdraw-amount').value)
const availableBalance=parseInt(document.getElementById('available-balance').innerText)
const agentNumber=document.getElementById('agent-number').value
const addPin=parseInt(document.getElementById('add-pin').value)

if(agentNumber.length <11){
    alert('please provide valid number')
    return;
}
if(addPin !==validPin){
    alert('please provide valid pin number')
    return;
}






const totalNewAvailableBalance=availableBalance-amount
document.getElementById('available-balance').innerText=totalNewAvailableBalance
})

// toggling

document.getElementById("add-btn").addEventListener('click',function(){
    document.getElementById("cashout-parent").style.display = "none"
    document.getElementById("addmoney-parent").style.display ="block"
})
document.getElementById("cashout-btn").addEventListener('click',function(){
    document.getElementById("addmoney-parent").style.display = "none"
    document.getElementById("cashout-parent").style.display ="block"
})