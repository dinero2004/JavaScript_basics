// let username = "";

//  do{username = window.prompt(`Enter your name`)
//  }
//  while (username === "" || username === null)

// console.log(`Hello ${username}`);

let LoggedIn = true
let username;
let password;

do{
    username = window.prompt(`Enter your username!`)
    password = window.prompt(`Enter your password!`)

    if (username === "myUsername" &&  password === "myPassword") {
     LoggedIn = true;
     console.log(`You are loged in`)

    }

    else {
        console.log(`Invalid credentials! Please Try Again`)
    }
}

while(!LoggedIn)