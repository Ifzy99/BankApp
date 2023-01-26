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
        balance:5000,
    }
    console.log(clientsData)
    console.log(allClients)
    allClients.push(clientsData);
    localStorage.setItem("localAllClients", JSON.stringify(allClients))
    window.location.href = "login.html";
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
       })
      
       localStorage.setItem("localAllClients", JSON.stringify(allClients))
    }
