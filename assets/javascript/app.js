

           var latitude;
           var longitude;
           var travelRadius = 50;
           $('.dropdown-toggle').dropdown();
     
//-on lick funciton that change the travelRadius ------------------------------------------------------------------------
$(".travel20").on("click", function() {
            
           travelRadius = $(this).attr("value");
           console.log('radius now is' + travelRadius)
           showUserLocation();
 /*------------------------------------------------------*/
				           var name = $('#cityName').val();
								   var geocoder =  new google.maps.Geocoder();
				           geocoder.geocode( { 'address': name}, function(results, status) {
				          if (status == google.maps.GeocoderStatus.OK) {
				            console.log("location : " + results[0].geometry.location.lat() + " " +results[0].geometry.location.lng()); 
				          } else {
				            console.log("Something got wrong " + status);
				          }

							    latitude = results[0].geometry.location.lat();
									longitude = results[0].geometry.location.lng();
				          console.log("Latitude : " + latitude + " Longitude: " + longitude);
				//Change the map-----------------------
				          showUserLocation();

				//eventbrite use latitude and longitude
				          eventsBrite();
										                

				         });
/*------------------------------------------------------*/
});
$(".travel30").on("click", function() {
            
           travelRadius = $(this).attr("value");
           console.log('radius now is' + travelRadius)
           showUserLocation();
 /*------------------------------------------------------*/
				           var name = $('#cityName').val();
								   var geocoder =  new google.maps.Geocoder();
				           geocoder.geocode( { 'address': name}, function(results, status) {
				          if (status == google.maps.GeocoderStatus.OK) {
				            console.log("location : " + results[0].geometry.location.lat() + " " +results[0].geometry.location.lng()); 
				          } else {
				            console.log("Something got wrong " + status);
				          }

							    latitude = results[0].geometry.location.lat();
									longitude = results[0].geometry.location.lng();
				          console.log("Latitude : " + latitude + " Longitude: " + longitude);
				//Change the map-----------------------
				          showUserLocation();

				//eventbrite use latitude and longitude
									eventsBrite();


				         });
/*------------------------------------------------------*/

});
$(".travel40").on("click", function() {
            
           travelRadius = $(this).attr("value");
           console.log('radius now is' + travelRadius)
           showUserLocation();
 /*------------------------------------------------------*/
				           var name = $('#cityName').val();
								   var geocoder =  new google.maps.Geocoder();
				           geocoder.geocode( { 'address': name}, function(results, status) {
				          if (status == google.maps.GeocoderStatus.OK) {
				            console.log("location : " + results[0].geometry.location.lat() + " " +results[0].geometry.location.lng()); 
				          } else {
				            console.log("Something got wrong " + status);
				          }

							    latitude = results[0].geometry.location.lat();
									longitude = results[0].geometry.location.lng();
				          console.log("Latitude : " + latitude + " Longitude: " + longitude);
				//Change the map-----------------------
				          showUserLocation();

				//eventbrite use latitude and longitude
								  eventsBrite();
										   



				         });
/*------------------------------------------------------*/           
});
$(".travel50").on("click", function() {
            
           travelRadius = $(this).attr("value");
           console.log('radius now is' + travelRadius)
           showUserLocation();
 /*------------------------------------------------------*/
				           var name = $('#cityName').val();
								   var geocoder =  new google.maps.Geocoder();
				           geocoder.geocode( { 'address': name}, function(results, status) {
				          if (status == google.maps.GeocoderStatus.OK) {
				            console.log("location : " + results[0].geometry.location.lat() + " " +results[0].geometry.location.lng()); 
				          } else {
				            console.log("Something got wrong " + status);
				          }

							    latitude = results[0].geometry.location.lat();
									longitude = results[0].geometry.location.lng();
				          console.log("Latitude : " + latitude + " Longitude: " + longitude);
				//Change the map-----------------------
				          showUserLocation();

				//eventbrite use latitude and longitude
								  eventsBrite();
										   



				         });
/*------------------------------------------------------*/           
});

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

			    latitude = results[0].geometry.location.lat();
					longitude = results[0].geometry.location.lng();
          console.log("Latitude : " + latitude + " Longitude: " + longitude);
//Change the map-----------------------
          showUserLocation();

//eventbrite use latitude and longitude
				  /*eventsBrite();*/
				  var eventBriteUrl = "https://www.eventbriteapi.com/v3/";
										                var token = "OO4THRQ4RMB522E4DLLG";
										                $.ajax({
										                  type: "GET",
										                  url: eventBriteUrl + "events/search/?location.within=50km&location.latitude="+latitude+"&location.longitude="+longitude+"&token="+token,
				//------dataType solve console errer: Node cannot be inserted at the specified point in the hierarchy
										                 dataType:'json',
										                  success: function(response){
										                  	$('#events').empty();
										                  	console.log('success')
										                   console.log('response------------------------------', response);
				//-----------for loop the event result out------
										                  var result = response.events;
				                              for (var i=0; i<40; i++){
				                              console.log(result[i]);
				                              var eventDiv = $('<div>');
				                              eventDiv.addClass('card');
				                              var eventIntro = $('<p>');
				                              eventIntro.addClass('card-block');

				                              var introTitle = $('<h4>');
				                              introTitle.addClass('card-title');
				                              introTitle.text(result[i].name.text);
				                              
				                              
																			/*var addText = $('<p>');
																			addText.addClass('card-text');
																			addText.html(result[i].venue.address.address_1 + "<br/>" + result[i].venue.address.city );
*/
				                              var startTime = result[i].start.local;
				                              var introText = $('<p>');
				                              introText.addClass('card-text');
				                              introText.text(moment(startTime).format('dddd MMMM Do, hh:mm a'));


				                              var eventImg = $('<img>');
				                              eventImg.addClass('card-img-top');
				                              eventImg.attr('src', result[i].logo.url)

				                              var eventurl = $('<a/>');
																			eventurl.addClass('card-link');
																			eventurl.text(result[i].vanity_url);
																			eventurl.attr('href', result[i].url);

				                              eventIntro.append(introTitle);
				                              eventIntro.append(introText);
				                              /*eventIntro.append(addText);*/
					                            eventIntro.append(eventurl);
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
              						console.log('in show user location');
						               var name = $('#cityName').val();
												   var geocoder =  new google.maps.Geocoder();
								           geocoder.geocode( { 'address': name}, function(results, status) {
											           if (status == google.maps.GeocoderStatus.OK) {
											            console.log("location : " + results[0].geometry.location.lat() + " " +results[0].geometry.location.lng()); 
											          } else {
											            console.log("Something got wrong " + status);
											          }

														          latitude = results[0].geometry.location.lat();
																			longitude = results[0].geometry.location.lng();
			                  //------google map --------//
			                  
			                         var mapProp = {
														                      center:{lat: latitude, lng: longitude},
														                      zoom:8,
														                      mapTypeId:google.maps.MapTypeId.ROADMAP
														                      };
														   var map = new google.maps.Map(document.getElementById('map'),mapProp);

										
														 
														    var cityCircle = new google.maps.Circle({
														                      center:mapProp.center,
														                      radius:travelRadius * 1000,
														                      strokeColor:"#0000FF",
														                      strokeOpacity:0.5,
														                      strokeWeight:2,
														                      fillColor:"#0000FF",
														                      fillOpacity:0.4

														                      });
														      cityCircle.setMap(map);
											   });

              }



//---------------------------------------------------------------------------//
						//geolocation functions 
						function showLocation(position) {
							console.log('in show location');
						            latitude = position.coords.latitude;
						            longitude = position.coords.longitude;
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
										                  url: eventBriteUrl + "events/search/?expand=venue&location.within=50km&location.latitude="+latitude+"&location.longitude="+longitude+"&token="+token,
				//------dataType solve console errer: Node cannot be inserted at the specified point in the hierarchy
										                 dataType:'json',
										                  success: function(response){
										                  	$('#events').empty();
										                  	console.log('success')
										                   console.log('response------------------------------', response);
				//-----------for loop the event result out------
										                  var result = response.events;
				                              for (var i=0; i<40; i++){
				                              console.log(result[i]);
				                              var eventDiv = $('<div>');
				                              eventDiv.addClass('card');
				                              var eventIntro = $('<p>');
				                              eventIntro.addClass('card-block');

				                              var introTitle = $('<h4>');
				                              introTitle.addClass('card-title');
				                              introTitle.text(result[i].name.text);
				                              
				                              
																			/*var addText = $('<p>');
																			addText.addClass('card-text');
																			addText.html(result[i].venue.address.address_1 + "<br/>" + result[i].venue.address.city );
*/
				                              var startTime = result[i].start.local;
				                              var introText = $('<p>');
				                              introText.addClass('card-text');
				                              introText.text(moment(startTime).format('dddd MMMM Do, hh:mm a'));


				                              var eventImg = $('<img>');
				                              eventImg.addClass('card-img-top');
				                              eventImg.attr('src', result[i].logo.url)

				                              var eventurl = $('<a/>');
																			eventurl.addClass('card-link');
																			eventurl.text(result[i].vanity_url);
																			eventurl.attr('href', result[i].url);

				                              eventIntro.append(introTitle);
				                              eventIntro.append(introText);
				                              /*eventIntro.append(addText);*/
					                            eventIntro.append(eventurl);
				                              eventDiv.append(eventImg);
				                              eventDiv.append(eventIntro);

				                              
				                              console.log('response------------------------------------------');
				                             
				                              $('#events').prepend(eventDiv);
				                              }
				                             
										      // -------Loop ends ----------

										                 }
										                  
										              });
						   
						         };

						         function errorHandler(err) {
						            if(err.code == 1) {
						               alert("Error: Access is denied!");
						            }
						            
						            else if( err.code == 2) {
						               alert("Error: Position is unavailable!");
						            }
						         };
						      
						         function getLocation() {
						         	console.log('in getLocation');
						            if(navigator.geolocation){
						               // timeout at 60000 milliseconds (60 seconds)
						               var options = {timeout:60000};
						               navigator.geolocation.getCurrentPosition(showLocation, errorHandler, options);
						            }
						            
						            else{
						               alert("Sorry, browser does not support geolocation!");
						            }
						         };

						         function eventsBrite() {
                                    var eventBriteUrl = "https://www.eventbriteapi.com/v3/";
										                var token = "OO4THRQ4RMB522E4DLLG";
										                $.ajax({
										                  type: "GET",
										                  url: eventBriteUrl + "events/search/?location.within="+ travelRadius+ "km&location.latitude="+latitude+"&location.longitude="+longitude+"&token="+token,
				//------dataType solve console errer: Node cannot be inserted at the specified point in the hierarchy
										                 dataType:'json',
										                  success: function(response){
										                  	$('#events').empty();
										                  	console.log('success')
										                   console.log('response------------------------------', response);
				//-----------for loop the event result out------
										                  var result = response.events;
				                              for (var i=0; i<40; i++){
				                              console.log(result[i]);
				                              var eventDiv = $('<div>');
				                              eventDiv.addClass('card');
				                              var eventIntro = $('<p>');
				                              eventIntro.addClass('card-block');

				                              var introTitle = $('<h4>');
				                              introTitle.addClass('card-title');
				                              introTitle.text(result[i].name.text);
				                              
				                              
																			/*var addText = $('<p>');
																			addText.addClass('card-text');
																			addText.html(result[i].venue.address.address_1 + "<br/>" + result[i].venue.address.city );
*/
				                              var startTime = result[i].start.local;
				                              var introText = $('<p>');
				                              introText.addClass('card-text');
				                              introText.text(moment(startTime).format('dddd MMMM Do, hh:mm a'));


				                              var eventImg = $('<img>');
				                              eventImg.addClass('card-img-top');
				                              eventImg.attr('src', result[i].logo.url)

				                              var eventurl = $('<a/>');
																			eventurl.addClass('card-link');
																			eventurl.text(result[i].vanity_url);
																			eventurl.attr('href', result[i].url);

				                              eventIntro.append(introTitle);
				                              eventIntro.append(introText);
				                              /*eventIntro.append(addText);*/
					                            eventIntro.append(eventurl);
				                              eventDiv.append(eventImg);
				                              eventDiv.append(eventIntro);

				                              
				                              console.log('response------------------------------------------');
				                             
				                              $('#events').prepend(eventDiv);
				                              }
				                             
										      // -------Loop ends ----------

										                 }
										                  
										              });
										   





						         };

						         
                