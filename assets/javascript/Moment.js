
    // Create a variable to reference the database
    var database = firebase.database();
/*
var newTrain = {
    trainName: name,
    destination: destination,
    nextArrival: nextArrival,
    frequency: rate,
    minutesAway: minutes
  };
*/
var name = "";
var destination = "";
var nextArrival = "";
var rate = 0;

firebase.auth().signInAnonymously().catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // ...
  });

  database.ref().on("value", function(snapshot) {

    if (snapshot.child("name").exists() && snapshot.child("destination").exists()) {
  
      name = snapshot.val().name;
      destination = snapshot.val().destination;
      nextArrival = snapshot.val().nextArrival;
      rate = parseInt(snapshot.val().rate);
  
  
      // Change the HTML to reflect the stored values
      $("#trainData").append("<tr><td>" + childSnapshot.val().name + "</td><td>" + childSnapshot.val().destination + 
    "</td><td>" + childSnapshot.val().rate + "</td><td>" + childSnapshot.val().nextArrival +
    "</td></tr>");
    }
  // If any errors are experienced, log them to console.
  }, function(errorObject) {
    console.log("The read failed: " + errorObject.code);
  });

$("#submit-train").on("click", function(event) {
    event.preventDefault();
    name = $("#trainName").val().trim();
    destination = $("#destination").val().trim();
    nextArrival = $("#trainTime").val().trim();
    rate = $("#frequency").val().trim();
    console.log(name);
    console.log(destination);
    console.log(nextArrival);
    console.log(rate);
    database.ref().push({
        name: name,
        destination: destination,
        nextArrival: nextArrival,
        rate: rate
    })
});
/*
database.ref().on("value", function(snapshot) {
    highPrice = parseInt(snapshot.val().highPrice);
    highBidder = snapshot.val().highBidder;
};
*/