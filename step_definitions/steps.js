const funObj = require('./BDDFunction')

  //Set test data
  let outboundroute = 'Dover to Calais';
  let returnroute = 'Calais to Dover';

  let outboundrouteuppercase = outboundroute.toUpperCase();
  let returnrouteuppercase = returnroute.toUpperCase();

  let singlejourneydate = '02/03/2020';
  //let singlejourneytime = '13:15';
  let singlejourneytime = '11:00';
  let returnjourneydate = '12/03/2020';
  //let returnjourneytime = '09:40';
  let returnjourneytime = '16:25';

  let singleVehicle = 'Car 1.8 - 2.4m h & ≤ 6 m l';
  let singleTrailer = 'Trailer ≤ 1.8m h & ≤ 6m l';

  let returnVehicle = 'Car 1.8 - 2.4m h & ≤ 6 m l';
  let returnTrailer = 'Trailer ≤ 1.8m h & ≤ 6m l';

  let singleadpax = '4';
  let singlechpax = '0';
  let singleinpax = '0';
  let singlepet = '1';

  let returnadpax = '4';
  let returnchpax = '0';
  let returninpax = '0';
  let returnpet = '0';

  let singleclublounge = '2';
  let returnclublounge = '3';

  let singleWiFi = '3';
  let returnWiFi = '2';

  let vehicleRegNo = 'RK06 ZSN';
  let travelZone = 'Albania - Zone 3';
  let annualCover = false;

  let userEmail = 'vimal.kamothi@tcs.com';
  let userPassword = 'Viki3344';

  let flgOutboundVehicle = true;  
  let flgOutboundTrailer = false;  
  let flgOutboundChild = false;
  let flgOutboundInfant = false;
  let flgOutboundPet = false;

  let flgReturnPassengerDifferent = true;
  
  let flgReturnVehicle = true;  
  let flgReturnTrailer = true;  
  let flgReturnChild = false;
  let flgReturnInfant = false;
  let flgReturnPet = false;

  //Extras
  let flagOutboundClubLounge = true;
  let flagReturnClubLounge = true;
  let flagOutboundWiFi = true;
  let flagReturnWiFi = true;
  let flagOutboundPriorityBoarding = true;
  let flagReturnPriorityBoarding = true;
  let flagRCACover = true;
  
  let strsinglesetextras = '';
  let strreturnsetextras = '';


  let AdultPaxNames = ["Mr Second Pax","Mrs Third Pax","Mr Fourth Pax", "Mrs Fifth Pax"];
  let ChildPaxNames = ["Miss FirstChild Pax","Master SecondChild Pax","Miss ThirdChild Pax"];
  let InfantPaxNames = ["Master FirstInfant Pax","Miss SecondInfant Pax"];
  let PetNames = ["Leo","Julie"];
  let VehicleNames = ["ABC1234","XYZ9876"];


When('I open PO Ferries web application Home page URL', I=>  {
  funObj.openHomePageURL();
});

Then('I need to validate browser home page title', I=>  {
  funObj.validateTitle();
});

Then('I need to validate home page links', I=>  {
  funObj.validateHeaderLinks();
});

Then('I need to validate home page languages list', I=>  {
  funObj.validateLanguages();
});

When('Routes are available and validated', I=>  {
  funObj.validateRoutes();
});

Then('I need to select a route', I=>  {
  funObj.selectRoute(outboundroute);
});

When('I click on Go button', I=>  {
  funObj.clickGoButton();
});

Then('I need to validate if expected page is displayed', I=>  {
  funObj.validateSelectedRoutePage();
});

Then('I need to validate if expected route is selected on the route page', I=>  {
  funObj.validateSelectedRoute(outboundroute, returnroute);
});

Given('I set outbound and return journey date & time', I=>  {
    // Select the Going out journey date and time
    funObj.selectOutboundJourneyDateAndTime(singlejourneydate,singlejourneytime);
 
    // Select the return journey date and time
    funObj.selectReturnJourneyDateAndTime(returnjourneydate,returnjourneytime);
});

When('Outbound Vehicles are validated and available', I=>  {
    funObj.validateOutboundVehicleList();
});

Then('I select Outbound Vehicle', I=>  {
    if (flgOutboundVehicle)
    {
        funObj.selectOutboundVehicle(singleVehicle);
    }
});    

When('Outbound Trailers are validated and available', I=>  {
      funObj.validateOutboundTrailerList();
});
  
Then('I select Outbound Trailer', I=>  {
    if (flgOutboundTrailer)
    {
        funObj.selectOutboundTrailer(singleTrailer);
    }
});

When('Outbound Adult passengers list is validated and available', I=>  {
  funObj.validateOutboundAdultPax();
});

Then('I need to validate if an error message is displayed for ZERO outbound adult passsenger selection', I=>  {
  funObj.validateOutboundAdultPaxZeroErroMessageDisplay();
});

Then('I need to select outbound adult passsenger', I=>  {
  funObj.selectOutboundAdultPax(singleadpax);
});

Then('I need to validate if an error message is NOT displayed for other than ZERO outbound adult passsenger selection', I=>  {
  funObj.validateOutboundAdultPaxZeroErroMessageNotDisplay();
});


When('Outbound Child passengers list is validated and available', I=>  {
  funObj.validateOutboundChildPax();
});

Then('I need to select outbound child passsenger', I=>  {
  if (flgOutboundChild)
  {
    funObj.selectOutboundChildPax(singlechpax);
  }
});

When('Outbound Infant passengers list is validated and available', I=>  {
  funObj.validateOutboundInfantPax();
});

Then('I need to select outbound infant passsenger', I=>  {
  if (flgOutboundInfant)
  {  
    funObj.selectOutboundInfantPax(singleinpax);
  }
});

When('Outbound Pet list is validated and available', I=>  {
    funObj.validateOutboundPetPax();
});

Then('I need to select outbound pet', I=>  {
  if (flgOutboundPet)
  {
    funObj.selectOutboundPetPax(singlepet);
  }  
});

When('I need to fill Return leg details', I=>  {
});

Then('I deselect same passengers checkbox', I=>  {
  funObj.deSelectSamePaxCheckbox();
});


When('Return Vehicles are validated and available', I=>  {
  funObj.validateReturnVehicleList()
});

Then('I select return Vehicle', I=>  {
  if(flgReturnVehicle)
  {  
   //funObj.selectReturnVehicle(returnVehicle);
  }
});


When('Return Trailers are validated and available', I=>  {
  funObj.validateReturnTrailerList()
});

Then('I select return Trailer', I=>  {
  if(flgReturnTrailer)
  {  
    //funObj.selectReturnTrailer(returnTrailer);
  }
});


When('Return Adult passengers list is validated and available', I=>  {
  funObj.validateReturnAdultPax();
});

Then('I need to select return adult passsenger', I=>  {
  funObj.selectReturnAdultPax(returnadpax);
});

When('Return Child passengers list is validated and available', I=>  {
  funObj.validateReturnChildPax();
});

Then('I need to select return child passsenger', I=>  {
  if(flgReturnChild)
  {
    funObj.selectReturnChildPax(returnchpax);
  }
});

When('Return Infant passengers list is validated and available', I=>  {
  funObj.validateReturnInfantPax();
});

Then('I need to select return infant passsenger', I=>  {
  if(flgReturnInfant)
  {  
    funObj.selectReturnInfantPax(returninpax);
  }
});

When('Return Pet list is validated and available', I=>  {
  funObj.validateReturnPetPax();
});

Then('I need to select return pet', I=>  {
  if(flgReturnPet)
  {  
    funObj.selectReturnPetPax(returnpet);
  }
});

When('I click on Quote button', I=>  {
  funObj.clickQuoteButton();
});

//Crossing Page
Then('I need to validate if crossing page is displayed', I=>  {
    funObj.validateCrossingPageIsDisplayed();
});
   
Then('I need to validate Outbound Date & time', I=>  {
  funObj.validateOutboundDateTimeOnCrossing(singlejourneydate,singlejourneytime);
});
 
Then('I need to validate Return Date & time', I=>  {
  funObj.validateRetunDateTimeOnCrossing(returnjourneydate,returnjourneytime);
});
 
 
Then('I need to validate Route, Date & time, Passengers, Pet for Outbound and Return legs on Itinerary', I=>  {

  funObj. validateOutboundRouteItinerary(outboundrouteuppercase);

  funObj.validateOutboundDateTimeOnItinerary(singlejourneydate,singlejourneytime);

  funObj.validateOutboundPaxOnItinerary(singleadpax,singlechpax,singleinpax,flgOutboundChild,flgOutboundInfant);

  if(flgOutboundPet)
  {
    funObj.validateOutboundPetOnItinerary(singlepet);
  }

  funObj.validateReturnRouteItinerary(returnrouteuppercase);

  funObj.validateReturnDateTimeOnItinerary(returnjourneydate,returnjourneytime);

  funObj.validateReturnPaxOnItinerary(returnadpax,returnchpax,returninpax,flgReturnChild,flgReturnInfant);

  if(flgReturnPet)
  {  
    funObj.validateReturnPetOnItinerary(returnpet);
  }

});

When('I click on Continue button', I=>  {
  funObj.clickContinueButton();
});
 
Then('I need to validate if extras page is displayed', I=>  {
  funObj.validateExtrasPageIsDisplayed();
});
 


Then('I need to select Club Lounge', I=>  {
  let strgetclubloungeextras = funObj.selectOutboundAndReturnClubLounge(strsinglesetextras,strreturnsetextras, 
    flagOutboundClubLounge,flagOutboundWiFi, flagOutboundPriorityBoarding, singleclublounge,
    flagReturnClubLounge, flagReturnWiFi, flagReturnPriorityBoarding, returnclublounge);
    
    strsinglesetextras = strgetclubloungeextras[0];
    strreturnsetextras = strgetclubloungeextras[1];
    
});
 
Then('I need to select WiFi', I=>  {
  let strgetwifiextras = funObj.selectOutboundAndReturnWiFi(strsinglesetextras,strreturnsetextras, 
    flagOutboundClubLounge,flagOutboundWiFi, flagOutboundPriorityBoarding, singleWiFi,
    flagReturnClubLounge, flagReturnWiFi, flagReturnPriorityBoarding, returnWiFi);

   // strsinglesetextras = strsinglesetextras+strgetwifiextras[0];
   // strreturnsetextras = strreturnsetextras+strgetwifiextras[1];

    strsinglesetextras = strgetwifiextras[0];
    strreturnsetextras = strgetwifiextras[1];

});
 
Then('I need to select Priority Boarding', I=>  {
  let strgetpriorityboardingextras = funObj.selectOutboundAndReturnPriorityBoarding(strsinglesetextras,strreturnsetextras, 
    flagOutboundPriorityBoarding, flagReturnPriorityBoarding);

    //strsinglesetextras = strsinglesetextras+strgetpriorityboardingextras[0];
    //strreturnsetextras = strreturnsetextras+strgetpriorityboardingextras[1];

    strsinglesetextras = strgetpriorityboardingextras[0];
    strreturnsetextras = strgetpriorityboardingextras[1];    

});
 
Then('I need to validate selected outbound extras', I=>  {
  funObj.validateSelectedOutboundExtras(strsinglesetextras);
});


Then('I need to validate selected return extras', I=>  {
  funObj.validateSelectedReturnExtras(strreturnsetextras);
});
 

When('I click on Continue button on Extras page', I=>  {
  funObj.clickContinueButtonOnExtrasPage();
});
 
Then('I need to validate if welcome login page is displayed', I=>  {
  funObj.validateWelcomeLoginPageIsDisplayed();
});

Then('I need to provide login credentials', I=>  {
  funObj.setLoginCredentials(userEmail, userPassword);
});


When('I click on Continue button on Login page', I=>  {
  funObj.clickContinueButtonOnLoginPage();
});
 
Then('I need to validate if Booking Details page is displayed', I=>  {
  funObj.validateBookingDetailsPageIsDisplayed();
});

Then('I need to select passengers', I=>  {
  funObj.selectPassengersOnBookingDetails(AdultPaxNames, ChildPaxNames, InfantPaxNames,singleadpax, singlechpax, singleinpax);
});



/*

    //Validate outbound trailers
    funObj.validateOutboundTrailerList(I);

    
    //Check if flag is set to select outbound vehicle
    if (flgOutboundTrailer)
    {
        funObj.selectOutboundTrailer(I,singleTrailer);

    }


*/


/*
// you can provide RegEx to match corresponding steps
Given(/I have product with \$(\d+) price/, (price) => {
  //I.amOnPage('/products');
 // productPage.create({ price });
  //I.click('Add to cart');
  I.see('The price is : '+price)
});


When('I go to checkout process', () => {
 // I.click('Checkout');
 console.log('Test');
});


// parameters are passed in via Cucumber expressions
Then('I should see that total number of products is {int}', (num) => {
  I.see(num);
});
Then('my order amount is ${int}', (sum) => { // eslint-disable-line
  I.see('Total: ' + sum);
});


/*

Given('I have to add two parameters', () => {
  // TODO: replace with your own step
  I.amOnPage("https://www.google.co.uk")
});

When('I have a defined step 2', () => {
  // TODO: replace with your own step
  I.amOnPage("https://www.google.co.uk")
});

Then('I have a defined step 3', () => {
  // TODO: replace with your own step
  I.amOnPage("https://www.google.co.uk")
});
*/
