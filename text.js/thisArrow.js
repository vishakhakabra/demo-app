const user = {
   userName:" vishakha",
   price: 999,

    welcomeMessage : function() {
   console.log( '${this.userName}, welcome to website');
    console.log(this);
    }
}
user.welcomeMessage()
 user.userName = "sam" 
 user.welcomeMessage()
 //console.log(this);

 //function chai (){
  //  let username = "vishakha"
  //  console.log (this.username)
 //    }
// chai() 

//const chai = function (){
  //  let username=" vishakha"
 //   console.log(this.username);
 //   }

const chai =  () => {
    let username=" vishakha"
    console.log(this);
   }

 //chai()
 
 //const addTwo= (num1, num2) => {
   // return num1 + num2
 //}
  
//console.log(addTwo(3,4))

//const addTwo= (num1, num2) => num1 + num2
//const addTwo= (num1, num2) => (num1 + num2)
 
const addTwo= (num1, num2) => ({username: "vishakha"})

console.log(addTwo(3,4))
 