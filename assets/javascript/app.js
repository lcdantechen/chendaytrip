

var dataRef = new Firebase("https://planyourdaytrip.firebaseio.com/");


$("#addUser").on("click", function() {

	 var name = $('#nameinput').val();
   var email = $('#emailinput').val();
   

   $('#namedisplay').html(name);
   $('#emaildisplay').html(email);

   dataRef.push({
			name: name,
			email:email,
			
		});
	return false;
});

dataRef.on("child_added", function(snapshot) {

        console.log(snapshot);
    
        console.log(snapshot.val().name);
        console.log(snapshot.val().email);
       
         $('#namedisplay').html(snapshot.val().name);
			   $('#emaildisplay').html(snapshot.val().email);
			   
}, function (errorObject) {

	  	console.log("The read failed: " + errorObject.code);

	});


