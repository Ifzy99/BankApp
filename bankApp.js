//* INDEX *// 

const toSignUp = ()=>{
  window.location.href = "signUp.html";
}

const toLogIn = ()=>{
  window.location.href = "login.html";
}





//* SIGN UP *//

let allClients = []
  if(localStorage.localAllClients){
    oldData = JSON.parse(localStorage.getItem("localAllClients"));
    allClients = oldData
  }

const signUp= ()=>{
  if(fName.value == "" && lName.value == "" && uMail.value == "" && pWord.value == ""){
    alert("Fill in your deatils")
  }else{
    let clientsData= {
      FirstName:fName.value,
      MiddleName:mName.value,
      LastName:lName.value,
      Email:uMail.value,
      Password:pWord.value,
      AccountNumber:aNumber.value,
      Pin:uPin.value,
      ConfirmPin:cPin.value,
      BankVerificationNumber:bvn.value,
      PhoneNumber:pNumber.value,
      Address:location.value,
      City:locale.value,
      State:uState.value,
      DateOfBirth:dob.value,
      Gender:uGender.value,
      MaritalStatus:mStatus.value,
      Occupation:work.value,
      allTodo:[],
      balance:50000,
      airtimeHistory: [],
      transferHistory: []
  }
  // console.log(clientsData)
  // console.log(allClients)
  allClients.push(clientsData);
  localStorage.setItem("localAllClients", JSON.stringify(allClients))
  window.location.href = "login.html";
  }
      
}
                

        // *  SIGN IN * //

 const logIn= ()=>{
    let found = false;
    allClients = JSON.parse(localStorage.getItem("localAllClients"));
    for (let index = 0; index < allClients.length; index++) {
        if(
            allClients[index].Email == loginEmail.value && 
            allClients[index].Password == loginPassword.value
            ){
            localStorage.setItem("currentClientIndex",index);
            found = true;
            break;
        }
       
        } if(found){
            window.location.href = "dashboard.html"
        }else{
            alert("Incorrect details");
        }
    }


    currentClientIndex = localStorage.getItem("currentClientIndex")
    if(localStorage.length > 0){
      allClients = JSON.parse(localStorage.getItem("localAllClients"));
    }
    const userDetails = ()=> {
       allClients.map((eachUser, index)=>{
           userName.innerHTML = `${allClients[currentClientIndex].FirstName}
           `
           userAcctNo.innerHTML =`${allClients[currentClientIndex].AccountNumber}`
           userBalanceAmount.innerHTML = `<h1>${allClients[currentClientIndex].balance}</h1>`
          //  userBalance.innerHTML = `<h1>${allClients[currentClientIndex].balance}</h1>`
       })
      }
      
       function recharge(){
        if (showUserAccDetails.value != allClients[currentClientIndex].AccountNumber || clientPhoneNumber.value == "" || rechargeAmt.value == "") {
          alert("Fill the required details")
        }else if (rechargeAmt.value <= allClients[currentClientIndex].balance) {
          let userRechargeReceipt = {
            debitAcc: allClients[currentClientIndex].AccountNumber,
            userPhoneNumber: clientPhoneNumber.value,
            dateOfAirtime: new Date().toDateString(),
            amoountRecharge: rechargeAmt.value,
          }
          allClients[currentClientIndex].airtimeHistory.push(userRechargeReceipt);
        localStorage.setItem("localAllClients", JSON.stringify(allClients))
        } else {
          alert("Airtime Recharge Failed, Try Again")
        }
        window.location.href = "airtimePreReceipt.html"
        
      }
      
      showUserBalanceOnModal = () => {
        // allClients.map((client, index) => {
          userBalances.innerHTML =`<h1 style="color:white;"> ${allClients[currentClientIndex].balance}</h1> `
            userAccountNos.innerHTML = allClients[currentClientIndex].AccountNumber;
        // })
            
          }

          dropUserAccDetails = () => {
            showUserAccDetails.value = allClients[currentClientIndex].AccountNumber
          }

          displayAirtimeDetails = () => {
            allClients = JSON.parse(localStorage.getItem("localAllClients"));
            eachAirtime = allClients[currentClientIndex].airtimeHistory
            // allClients.map((eachUser, index)=>{
              for (let index = 0; index < eachAirtime.length; index++) {
                rBody.innerHTML = `
                <div class="clientAcct">
                <div class="frm">
                    <h6>From: ${eachAirtime[index].debitAcc}</h6>
                </div>
                <div class="acctNo">
                    <div>Account</div>
                    <div class="user-acct-No" id="userAcctNo"></div>
                </div>
            </div>
            <hr>
            <div class="clientAcct">
                <div class="to">
                    <h6>To: ${eachAirtime[index].userPhoneNumber}</h6>
                </div>
                <div class="clientNumber">
                    <div id="clientPhoneNumber"></div>   
                </div>
            </div>
            <hr>
            <div class="clientAcct">
                <div class="date">
                    <h6>Date: ${eachAirtime[index].dateOfAirtime}</h6>
                </div>
                <div class="theDate">
                    <div id=""></div>   
                </div>
            </div>
            <hr>
            <div class="clientAcct">
                <div class="amt">
                    <h6>Amount: ${eachAirtime[index].amoountRecharge}</h6>
                </div>
                <div class="amtDetails">
                    <div id="rechargeAmt"></div>   
                </div>
            </div>
            <hr>
                `
              }
             
            // })
            
          }

          confirmRecharge = () => {
            eachAirtime = allClients[currentClientIndex].airtimeHistory
            if (allClients[currentClientIndex].Pin == userPin.value) {
              for (let index = 0; index < eachAirtime.length; index++) {
                allClients[currentClientIndex].balance = Number(allClients[currentClientIndex].balance) - Number(eachAirtime[index].amoountRecharge)
              }
          localStorage.setItem("localAllClients", JSON.stringify(allClients))
          alert("Recharge Successful")
          window.location.href = "dashboard.html"
            } else {
              alert("Enter correct pin")
            }
          }

          deposit = () => {
            allClients[currentClientIndex].balance = Number(allClients[currentClientIndex].balance) + Number(userPin.value)
          localStorage.setItem("localAllClients", JSON.stringify(allClients))

          }

          showUserHistory = () => {
            clientHistory.innerHTML = ""
            allClients = JSON.parse(localStorage.getItem("localAllClients"));
            eachAirtime = allClients[currentClientIndex].airtimeHistory
            for (let index = 0; index < eachAirtime.length; index++) {
            clientHistory.innerHTML += `
            <div class="container-fluid shadow d-flex flex-column gap-4">
            <div class="d-flex w-100 justify-content-between">
                <div>${eachAirtime[index].debitAcc}</div>
                <div>${eachAirtime[index].dateOfAirtime}</div>
            </div>
            <div class="d-flex w-100 justify-content-between">
                <div>${eachAirtime[index].userPhoneNumber}</div>
                <div><i class="fa-solid fa-naira-sign"></i>${eachAirtime[index].amoountRecharge}</div>
            </div>
          </div>
            `
            
            }
          }


      sendToReceipt = ()=>{
        if (showUserAccDetails.value != allClients[currentClientIndex].AccountNumber || creditAcctDetails.value == "" || transferAmount.value == "" || transferNarration.value == "") {
          alert("Fill the required details")
      }else if (transferAmount.value <= allClients[currentClientIndex].balance){
        let userTransferReceipt = {
          debitAcc: allClients[currentClientIndex].AccountNumber,
          creditAccountDetails : creditAcctDetails.value,
          // creditorBank: creditorBankDetails.value,
          dateOfTransfer: new Date().toDateString(),
          amountTransferred: transferAmount.value,
          narrationOfTransfer:transferNarration.value,

        }
        allClients[currentClientIndex].transferHistory.push(userTransferReceipt);
        localStorage.setItem("localAllClients", JSON.stringify(allClients))
      }else{
        alert("Transfer Failed, Try Again")
      }
       window.location.href="transferPreReceipts.html"
    }

    displayTransferDetails = ()=>{
      allClients = JSON.parse(localStorage.getItem("localAllClients"));
      eachTransfer = allClients[currentClientIndex].transferHistory
      for (let index = 0; index < eachTransfer.length; index++){
        trBody.innerHTML = `
        <div class="clientAcct">
        <div class="frm">
        <h6>From: </h6>
            <h6 id="debt">${eachTransfer[index].debitAcc}</h6>
        </div>
        <div class="acctNo">
            <div class="tOfAcct">SAVINGS ACCOUNT</div>
            <div class="user-acct-No" id="userAcctNo"></div>
        </div>
    </div>
    <hr>
    <div class="clientAcct">
        <div class="frm">
        <h6>To: </h6>
            <h6 id="credt">${eachTransfer[index].creditAccountDetails}</h6>
        </div>
        <div class="acctNo">
            <div class="c-Name"></div>
            <div class="user-acct-No" id="userAcctNo"></div>
        </div>
    </div>
    <hr>
    <div class="clientAcct">
        <div class="bank">
        <h6>Bank: </h6>
            <h6 id="credtBank">${eachTransfer[index].creditorBank}</h6>
        </div>
        <div class="c-Bank">
            <div id=""></div>   
        </div>
    </div>
    <hr>
    <div class="clientAcct">
        <div class="date">
        <h6>Date: </h6>
            <h6 id="credtDate">${eachTransfer[index].dateOfTransfer}</h6>
        </div>
        <div class="theDate">
            <div id=""></div>   
        </div>
    </div>
    <hr>
    <div class="clientAcct">
        <div class="amt">
        <h6>Amount: </h6>
            <h6 id="moneyTransf">${eachTransfer[index].amountTransferred}</h6>
        </div>
        <div class="amtDetails">
            <div id="rechargeAmt"></div>   
        </div>
    </div>
    <hr>
    <div class="clientAcct">
        <div class="narration">
        <h6>Narration: </h6>
            <h6 id="moneyNarra">${eachTransfer[index].narrationOfTransfer}</h6>
        </div>
        <div class="UN">
            <div id=""></div>   
        </div>
    </div>
        `
      }
    }


    userTransferReceipt = ()=>{
      allClients = JSON.parse(localStorage.getItem("localAllClients"));
      eachTransfer = allClients[currentClientIndex].transferHistory
      for (let index = 0; index < eachTransfer.length; index++){
        receiptBody.innerHTML = `
        <div class="clientAcct">
        <div class="frm">
            <h6>From: ${eachTransfer[index].debitAcc}</h6>
        </div>
        <div class="acctNo">
            <div class="tOfAcct">SAVINGS ACCOUNT</div>
            <div class="user-acct-No" id="userAcctNo"></div>
        </div>
    </div>
    <hr>
    <div class="clientAcct">
        <div class="frm">
            <h6>To: ${eachTransfer[index].creditAccountDetails}</h6>
        </div>
        <div class="acctNo">
            <div class="c-Name"></div>
            <div class="user-acct-No" id="userAcctNo"></div>
        </div>
    </div>
    <hr>
    <div class="clientAcct">
        <div class="bank">
            <h6>Bank: ${eachTransfer[index].creditorBank}</h6>
        </div>
        <div class="c-Bank">
            <div id=""></div>   
        </div>
    </div>
    <hr>
    <div class="clientAcct">
        <div class="date">
            <h6>Date: ${eachTransfer[index].dateOfTransfer}</h6>
        </div>
        <div class="theDate">
            <div id=""></div>   
        </div>
    </div>
    <hr>
    <div class="clientAcct">
        <div class="amt">
            <h6>Amount: ${eachTransfer[index].amountTransferred}</h6>
        </div>
        <div class="amtDetails">
            <div id="rechargeAmt"></div>   
        </div>
    </div>
    <hr>
    <div class="clientAcct">
        <div class="narration">
            <h6>Narration: ${eachTransfer[index].narrationOfTransfer}</h6>
        </div>
        <div class="UN">
            <div id=""></div>   
        </div>
    </div>
        `
      }
    }

    confirmTransfer = (param)=>{
      eachTransfer = allClients[currentClientIndex].transferHistory
      eachTransfer.map((eachUser, index) => {
      //   for (let index = 0; index < eachTransfer.length; index++) {
      //     alert(eachTransfer[param].amountTransferred)
          
      //   }
      if (userPin.value === allClients[currentClientIndex].Pin) {
        let userTransferHistory = {
          debitAc: debt.innerHTML,
          creditAccountDetail : credt.innerHTML,
          // creditorBank: creditorBankDetails.value,
          dateOfTransfe: credtDate.innerHTML,
          amountTransferre: moneyTransf.innerHTML,
        }
        allClients[currentClientIndex].airtimeHistory.push(userTransferHistory);
        allClients[currentClientIndex].balance = Number(allClients[currentClientIndex].balance) - Number(eachTransfer[index].amountTransferred)
        localStorage.setItem("localAllClients", JSON.stringify(allClients))
        window.location.href = "receipt.html"
      } else {
        alert("Enter correct pin")
      }
      })
        
    }

    