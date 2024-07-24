function playCraps() {
    //This is a one line comment
    /*this is the function to play craps in game.html
    rules for craps
    Roll 2 dice
        add up to 7 or 11, you lose
        If they are doubles and even, you win!
        Everything else is a push
        Michael Mattos
        30May2024

        Adding checkcreds() function for input validation on strings.html page
        2. make variable containing first name + space + last name
3. Check for how many characters, >= 20 present error
    1. < 20 good entry
4. check to see if zipcode is accurate
5. good name and zip, give secret message
Michael Mattos
        11June2024
    */
    console.log("playCraps() started");
    //roll the dice
    var die1 = Math.floor(Math.random() * 6) + 1;
    console.log(die1);
    document.getElementById("die1Res").innerHTML = "die1 result = " + die1;

    var die2 = Math.floor(Math.random() * 6) + 1;
    console.log(die2);
    document.getElementById("die2Res").innerHTML = "die2 result = " + die2;

    var sum = die1 + die2;
    console.log(sum);
    document.getElementById("sumRes").innerHTML = "sum result = " + sum;
    //look for loss
    if (sum == 7 || sum == 11) {
        console.log("lose")
        document.getElementById("gameRes").innerHTML = "you lost to Handsome Jack";
    } else if (die1 == die2 & die1 % 2 == 0) { //look for win 2%2 = 0
        console.log("Win")
        document.getElementById("gameRes").innerHTML = "you beat Handsome Jack, push your luck some more to win big";


    } else { //everything else is push
        console.log("Tie")
        document.getElementById("gameRes").innerHTML = "you did not win or lose, but who wins against Jack in the end?";
    }

}
function checkCreds() {
    //input validation code from week 5
    console.log("checkCreds() started");
    document.getElementById("loginStatus").innerHTML = "Status of login"

    //make required variables
    var firstName;
    var lastName;
    var zipCode;
    var fullName;
    var fullNameLength;
    var zipCodeNumb;

    //extract required varaibles
    firstName = document.getElementById("fName").value;
    console.log("the first name was inputted as: " + firstName);

    lastName = document.getElementById("lName").value;
    console.log("the last name was inputted as: " + lastName);

    zipCode = document.getElementById("zipCode").value;
    console.log("the zip code was inputted as: " + zipCode);

    fullName = firstName + " " + lastName;
    console.log("The full name is: " + fullName);

    fullNameLength = fullName.length;
    console.log("The variable fullName has " + fullNameLength + " characters ")

    zipCodeNumb = parseInt(zipCode);
    console.log("The actual zip code number is " + zipCodeNumb);

    //testing 2 tests, full name and zipcode

    // the fullnamelength variable is being told that if said variable is greater than 20 characters it's invalid but it's also invalid if it's less than two characters.
    if (fullNameLength > 20 || fullNameLength < 2) {
        console.log("Invalid full name");
        document.getElementById("loginStatus").innerHTML = "Invalid full name";
        // this checks for the zipcode length to be equal to 5 if it is under or over that number it's invalid
    } else if (zipCode.length != 5) {
        console.log("Invalid zip code");
        document.getElementById("loginStatus").innerHTML = "invalid zipcode";
        // if everything checks out and his valid this will pop up telling you that you passed the checks
    } else {
        alert("User credientals passed, welcome to the site,  " + fullName);
        document.getElementById("loginStatus").innerHTML = "credientals passed";
    }

}
//for Assignment 7.1: Event Driven Programming
function startFun() {
    console.log("StartFunc() started");
    //This line below is that when the start button is pressed it is disabled so you can't keep pressing the start button
    document.getElementById("startButton").disabled = true;
    //Line below when pressing the start button will allow you to click the stop button to stop the image from moving
    document.getElementById("stopButton").disabled = false;
    //starts moving the image when start button is pressed
    document.getElementById("myMarquee").start();
}
//for Assignment 7.1: Event Driven Programming
function stopFun() {
    console.log("stopFunc() stopped");
    //line below is to prevent you from pressing the stop button after already pressing it
    document.getElementById("stopButton").disabled = true;
    //line below is to enable the start button again to start moving the image again
    document.getElementById("startButton").disabled = false;
    //stops moving the image when stop button is pressed
    document.getElementById("myMarquee").stop();
}

function checkPalin() {
    console.log("checkPalin() started");

    //record the text input as a string
    var entStr;
    entStr = document.getElementById("palinInput").value;
    console.log("entStr is: " + entStr);
    //take away spaces
    var entStrNoSpace;
    entStrNoSpace = entStr.split(" ").join("");
    console.log("entStr with no spaces is: " + entStrNoSpace);
    //create a new revArray var and reverse string
    var revStr;
    const revArray = [];
    var length = entStrNoSpace.length - 1;
    console.log("string length is " + length);
    //input into Array and reverse it
    for (var i = length; i >= 0; i--) {
        revArray.push(entStrNoSpace[i]);
    }
    // convert to a string from Array
    revStr = revArray.join("");
    console.log("reversed is " + revStr);

    //compare rev to string and write to status
    var equal = 0;
    equal = (entStrNoSpace == revStr);
    console.log("the entry and reversed being equal is " + equal);
    //write to palindrome status
    if (equal == true) {
        document.getElementById("palinStatus").innerHTML = entStr + " <b>is</b> a palindrome"
    } else {
        document.getElementById("palinStatus").innerHTML = entStr + " is <b>not</b> a palindrome"
    }

}

//Assignment 11.1, play sound effect
function partySound() {
    console.log("partySound() started");
    mySound = new Sound("party_horn-Mike_Koenig.mp3");
    mySound.play();
}
function Sound(srcFile) {
    console.log("sound() started with " + " sound file.");
    this.sound = document.createElement("audio");
    this.sound.src = srcFile;
    this.sound.setAttribute("preload", "audio");
    //this.sound.setAttribute("controls", "none")
    document.body.appendChild(this.sound);
    this.play = function () {
        this.sound.play();
    }
    this.stop = function () {
        this.sound.pause();
    }
}