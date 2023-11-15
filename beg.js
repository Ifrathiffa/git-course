let user=prompt("Enter the user name:", "");
if (user=="admin"){
    let pass=prompt("Enter the password:", "");
    if (pass=="Legend"){
        console.log("Welcome!");
    }else if (pass==="" || pass===null){
        console.log("Cancelled");
    
    }else{
        console.log("Wrong Password");
    }
}else if (user==="" || user===null){
    console.log("Cancelled");
}else {
    console.log("I don't know you");
}
