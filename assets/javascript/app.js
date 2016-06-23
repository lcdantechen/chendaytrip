
$( document ).ready(function() {
    console.log( "ready!" );
              
            getLocation();
			
//-on lick funciton that converts city name to location ------------------------------------------------------------------------

$("#citySearch").on("click", function() {

					var name = $('#cityName').val();
				   var geocoder =  new google.maps.Geocoder();
           geocoder.geocode( { 'address': name}, function(results, status) {
          if (status == google.maps.GeocoderStatus.OK) {
            console.log("location : " + results[0].geometry.location.lat() + " " +results[0].geometry.location.lng()); 
          } else {
            console.log("Something got wrong " + status);
          }

			    var latitude = results[0].geometry.location.lat();
					var longitude = results[0].geometry.location.lng();
          console.log("Latitude : " + latitude + " Longitude: " + longitude);
//Change the map-----------------------
          showUserLocation();

//eventbrite use latitude and longitude
						                var eventBriteUrl = "https://www.eventbriteapi.com/v3/";
						                var token = "OO4THRQ4RMB522E4DLLG";
						                $.ajax({
						                  type: "GET",
						                  url: eventBriteUrl + "events/search/?location.within=100km&location.latitude="+latitude+"&location.longitude="+longitude+"&token="+token,
//------dataType solve console errer: Node cannot be inserted at the specified point in the hierarchy
						                 dataType:'json',
						                  success: function(response){
						                  	$('#events').empty();
						                  	console.log('success')
						                   console.log('response------------------------------', response);
//-----------for loop the event result out------
						                    var result = response.events;
                            for (var i=0; i<30; i++){
                              console.log(result[i]);
                              var eventDiv = $('<div>');
                              eventDiv.addClass('card');
                              var eventIntro = $('<p>');
                              eventIntro.addClass('card-block');

                              var introTitle = $('<h4>');
                              introTitle.addClass('card-title');
                              introTitle.text(result[i].name.text);
                              
                              var startTime = result[i].start.local;
                              var introText = $('<p>');
                              introText.addClass('card-text');
                              introText.text(moment(startTime).format('dddd MMMM Do, hh:mm a'));


                              var eventImg = $('<img>');
                              eventImg.addClass('card-img-top');
                              eventImg.attr('src', result[i].logo.url)

                              eventIntro.append(introTitle);
                              eventIntro.append(introText);
                              eventDiv.append(eventImg);
                              eventDiv.append(eventIntro);

                              
                              console.log('response------------------------------------------');
                             
                              $('#events').prepend(eventDiv);
                              }
                             
						      // -------Loop ends ----------

						                 }
						                  
						              });
						   



         });
						   
});
//---get the location for google map after user serach ------------------------------------------------------------------------
              function showUserLocation() {
						               var name = $('#cityName').val();
												   var geocoder =  new google.maps.Geocoder();
								           geocoder.geocode( { 'address': name}, function(results, status) {
											           if (status == google.maps.GeocoderStatus.OK) {
											            console.log("location : " + results[0].geometry.location.lat() + " " +results[0].geometry.location.lng()); 
											          } else {
											            console.log("Something got wrong " + status);
											          }

														          var latitude = results[0].geometry.location.lat();
																			var longitude = results[0].geometry.location.lng();
			                  //------google map --------//
			                  
			                         var mapProp = {
														                      center:{lat: latitude, lng: longitude},
														                      zoom:8,
														                      mapTypeId:google.maps.MapTypeId.ROADMAP
														                      };
														   var map = new google.maps.Map(document.getElementById('map'),mapProp);

										
														 
														    var cityCircle = new google.maps.Circle({
														                      center:mapProp.center,
														                      radius:50000,
														                      strokeColor:"#0000FF",
														                      strokeOpacity:0.5,
														                      strokeWeight:2,
														                      fillColor:"#0000FF",
														                      fillOpacity:0.4

														                      });
														      cityCircle.setMap(map);
											   });

              }


           /*   function getUserLocation(){

						            if(navigator.geolocation){
						               // timeout at 60000 milliseconds (60 seconds)
						               var options = {timeout:60000};
						               navigator.geolocation.getCurrentPosition(showUserLocation, errorHandler, options);
						            }
						            
						            else{
						               alert("Sorry, browser does not support geolocation!");
						            }
						         }*/

//---------------------------------------------------------------------------


//---------------------------------------------------------------------------
						//geolocation functions 
						function showLocation(position) {
						            var latitude = position.coords.latitude;
						            var longitude = position.coords.longitude;
                  //------google map --------//
                  
                         var mapProp = {
											                      center:{lat: latitude, lng: longitude},
											                      zoom:8,
											                      mapTypeId:google.maps.MapTypeId.ROADMAP
											                      };
											   var map = new google.maps.Map(document.getElementById('map'),mapProp);

							
											 
											    var cityCircle = new google.maps.Circle({
											                      center:mapProp.center,
											                      radius:50000,
											                      strokeColor:"#0000FF",
											                      strokeOpacity:0.5,
											                      strokeWeight:2,
											                      fillColor:"#0000FF",
											                      fillOpacity:0.4

											                      });
											    cityCircle.setMap(map);




                  //----------gogole map ends-----------
						            console.log("Latitude : " + latitude + " Longitude: " + longitude);
						            //eventbrite use latitude and longitude
						                var eventBriteUrl = "https://www.eventbriteapi.com/v3/";
						                var token = "OO4THRQ4RMB522E4DLLG";
						                $.ajax({
						                  type: "GET",
						                  url: eventBriteUrl + "events/search/?location.within=100km&location.latitude="+latitude+"&location.longitude="+longitude+"&token="+token,
						      //------dataType solve console errer: Node cannot be inserted at the specified point in the hierarchy
						                 dataType:'json',
						                  success: function(response){
						                  	console.log('success')
						                   console.log('response------------------------------', response);
						      //-----------for loop the event result out------
						                    var result = response.events;
                            for (var i=0; i<20; i++){
                              console.log(result[i]);
                              var eventDiv = $('<div>');
                              eventDiv.addClass('card');
                              var eventIntro = $('<p>');
                              eventIntro.addClass('card-block');

                              var introTitle = $('<h4>');
                              introTitle.addClass('card-title');
                              introTitle.text(result[i].name.text);

                              var startTime = result[i].start.local;
                              var introText = $('<p>');
                              introText.addClass('card-text');
                              introText.text(moment(startTime).format('dddd MMMM Do, hh:mm a'));


                              var eventImg = $('<img>');
                              eventImg.addClass('card-img-top');
                              eventImg.attr('src', result[i].logo.url)

                              eventIntro.append(introTitle);
                              eventIntro.append(introText);
                              eventDiv.append(eventImg);
                              eventDiv.append(eventIntro);
                              $('#events').append(eventDiv);
                              }
						      // -------Loop ends ----------

						                 }
						                  
						              });
						   
						         }

						         function errorHandler(err) {
						            if(err.code == 1) {
						               alert("Error: Access is denied!");
						            }
						            
						            else if( err.code == 2) {
						               alert("Error: Position is unavailable!");
						            }
						         }
						      
						         function getLocation(){

						            if(navigator.geolocation){
						               // timeout at 60000 milliseconds (60 seconds)
						               var options = {timeout:60000};
						               navigator.geolocation.getCurrentPosition(showLocation, errorHandler, options);
						            }
						            
						            else{
						               alert("Sorry, browser does not support geolocation!");
						            }
						         }

						         
                 


});
