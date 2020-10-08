const { I } = inject();

function openHomePageURL()
{ 
    I.amOnPage("https://www.poferries.com/en/portal"); // Simple way to put the application URL. This will take over 
}     

function validateTitle()
{
    //Validate title
    I.seeInTitle('Ferry to Europe');
    I.seeInTitle('Plan your next holiday');
    I.seeInTitle('P&O Ferries');
}

function validateHeaderLinks()
{
    I.see('Ferry Crossings');
    I.see('Mini Cruises');
    I.see('Onboard');
    I.see('Deals');
    I.see('Inspire Me')
    I.wait(5);
}


function validateLanguages()   
{
 
    //Click on languages list-box to validate if all expected languages are available.
    
    I.click('//*[@id="selectedCurAndLang"]');

    //Languages list validations
    I.see('Deutsch');
    I.see('Français');
    I.see('Nederlands');
    I.see('Polski');
    I.see('Français (Belgique)');    
    I.see('Nederlands (België)');
    I.see('English');
        
}


function validateRoutes()
{
    //Click on routes list-box to validate if all expected languages are available.
    I.click('//*[@id="oneway-optionsSelectBoxItArrow"]');

    //Routes list validations
    I.see('PLEASE CHOOSE');
    I.see('Dover to Calais');
    I.see('Calais to Dover');
    I.see('Hull to Rotterdam');    
    I.see('Rotterdam to Hull');
    I.see('Hull to Zeebrugge');
    I.see('Zeebrugge to Hull');
    I.see('Cairnryan to Larne');
    I.see('Larne to Cairnryan');
    I.see('Liverpool to Dublin');
    I.see('Dublin to Liverpool');            

}

function selectRoute(outboundroute)
{
    //Select the route for which the journey booking is needed
    I.click(outboundroute);
}

function clickGoButton()
{
    //Click on Go button
    I.click('//*[@id="go"]');    
}

function validateSelectedRoutePage()
{
    //Validate title
    I.seeInTitle('Dover to Calais Ferry');
}

async function validateSelectedRoute(outboundroute, returnroute)
{
    //Validate the outbound route selected option
    let actual_outboundroute = await I.grabTextFrom('//*[@id="singleJourneyComboBoxSelectBoxItText"]');
    if (outboundroute === actual_outboundroute)
    {
        console.log(outboundroute +' route is selected in single journey list box');
    }
    //Validate the return route selected option 
    /*
    let actual_returnroute = await I.grabTextFrom('//*[@id="returnJourneyComboBoxSelectBoxItText"]');

    if (returnroute === actual_returnroute )
    {
        console.log(returnroute +' route is selected in return journey list box');
    }
    */
}


async function selectOutboundJourneyDateAndTime(singlejourneydate,singlejourneytime)
{

   // Select the Going out journey date
   I.fillField('//*[@id="singleJourneyDateTextBox"]',singlejourneydate);
   I.pressKey('Tab');
   I.wait(2);
   I.click('//*[@id="singleJourneyTimeComboBoxSelectBoxItArrow"]');

  // Select the Going out journey time
 
   for (let index = 1; index < 26; index++) 
   {
    
       let actual_singlejourneytime = await I.grabTextFrom('//*[@id="singleJourneyTimeComboBoxSelectBoxItOptions"]/li['+index+']');

       if(singlejourneytime == actual_singlejourneytime)
       {
           I.pressKey('ArrowDown');
       }
       else
       {
           I.click(singlejourneytime);
           break;
       }
   }    

}


async function selectReturnJourneyDateAndTime(returnjourneydate,returnjourneytime)
{

 // Select the Coming back journey date
 I.fillField('//*[@id="returnJourneyDateTextBox"]',returnjourneydate);
 I.pressKey('Tab');
 I.wait(2);

 // Select the Coming back journey time
 I.click('//*[@id="returnJourneyTimeComboBoxSelectBoxItArrow"]');
 //I.click(returnjourneytime);
 //I.pressKey('Tab');

 for (let index = 1; index < 26; index++) 
 {
     let actual_returnjourneytime = await I.grabTextFrom('//*[@id="returnJourneyTimeComboBoxSelectBoxItOptions"]/li['+index+']');

      if(returnjourneytime == actual_returnjourneytime )
      {
          I.pressKey('ArrowDown');
      }
      else
      {
          I.click(returnjourneytime);
          break;
      }
  }

}
 
function validateOutboundVehicleList()
{

    //Click on vehicle list-box to validate if all expected vehicles are available.
    I.click('//*[@id="vehicleTypeOutboundComboBoxSelectBoxItArrow"]');
 
    //Vehicle list validations
    I.see('Car ≤ 1.8m h & ≤ 6m l');
    I.see('Car 1.8 - 2.4m h & ≤ 6 m l');
    I.see('Car > 2.4m h & / or > 6m l');
    I.see('Van');    
    I.see('Motorcycle');
    I.see('Minibus');
    I.see('Bicycle');
    I.see('Motorcycle with sidecar/Trike');
    I.see('No Vehicle (Foot Passenger)');
    I.pressKey('Tab')
    I.wait(2);

}


function selectOutboundVehicle(singleVehicle)
{
    //Click on vehicle list-box 
    I.click('//*[@id="vehicleTypeOutboundComboBoxSelectBoxItArrow"]');
    I.click(singleVehicle);
}


function validateOutboundTrailerList()
{
    //Click on trailer list-box to validate if all expected vehicles are available.
    I.click('//*[@id="trailerOutboundComboBoxSelectBoxItArrow"]');

    //trailer list validations
    I.see('No trailer / Caravan');
    I.see('Trailer ≤ 1.8m h & ≤ 6m l');
    I.see('Trailer / Caravan > 1.8m h or > 6m l');
    I.pressKey('Tab');
}


function selectOutboundTrailer(singleTrailer)
{
    //Click on trailer list-box 
    I.click('//*[@id="trailerOutboundComboBoxSelectBoxItArrow"]');
    I.click(singleTrailer);
    
}

function validateOutboundAdultPax()
{
    //Click on adult passengers list-box to validate if all numbers are available.
    I.click('//*[@id="ou_AD_pass_comboBoxSelectBoxItArrow"]');

    //adult passengers list validations
    I.see('0');
    I.see('1');
    I.see('2');
    I.see('3');
    I.see('4');
    I.see('5');
    I.see('6');
    I.see('7');
    I.see('8');
    I.see('9');
    I.pressKey('Tab');
}

function  validateOutboundAdultPaxZeroErroMessageDisplay()
{
    //Validate adult passenger selection as 0 displays an error message
    I.click('//*[@id="ou_AD_pass_comboBoxSelectBoxItArrow"]');
    I.click('0');
    I.see('at least one adult is needed for outbound leg');
}

function selectOutboundAdultPax(singleadpax)
{
    //Validateadult passenger selection as 1 removes an error message
    I.click('//*[@id="ou_AD_pass_comboBoxSelectBoxItArrow"]');
    I.click(singleadpax);
    I.wait(2);        
}

function validateOutboundAdultPaxZeroErroMessageNotDisplay()
{
    //Validateadult passenger selection as 1 removes an error message
    I.dontSee('at least one adult is needed for outbound leg');    
}


function validateOutboundChildPax()
{

    //Click on child passengers list-box to validate if all numbers are available.
    I.click('//*[@id="ou_CH_pass_comboBoxSelectBoxItArrow"]');

    //child passengers list validations
    I.see('0');
    I.see('1');
    I.see('2');
    I.see('3');
    I.see('4');
    I.see('5');
    I.see('6');
    I.see('7');
    I.see('8');
    I.see('9');
    I.pressKey('Tab');
    I.wait(2);

}

function selectOutboundChildPax(singlechpax)

{
    I.click('//*[@id="ou_CH_pass_comboBoxSelectBoxItArrow"]');

    for (let index = 0; index < singlechpax; index++) {
        I.pressKey('ArrowDown');
    }
    I.pressKey('Enter');
    
}

  
function validateOutboundInfantPax()
{
    //Click on infant passengers list-box to validate if all numbers are available.
    I.click('//*[@id="ou_IN_pass_comboBoxSelectBoxItArrow"]');

    //infant passengers list validations
    I.see('0');
    I.see('1');
    I.see('2');
    I.see('3');
    I.see('4');
    I.see('5');
    I.see('6');
    I.see('7');
    I.see('8');
    I.see('9');
    I.pressKey('Tab');
    I.wait(2);
}
function selectOutboundInfantPax(singleinpax)
{
    I.click('//*[@id="ou_IN_pass_comboBoxSelectBoxItArrow"]');

    for (let index = 0; index < singleinpax; index++) {
        I.pressKey('ArrowDown');
    }
    I.pressKey('Enter');
} 
function validateOutboundPetPax()
{
    //pet  list validations
    I.see('0');
    I.see('1');
    I.see('2');
    I.see('3');
    I.see('4');
    I.see('5');
    I.pressKey('Tab');
    I.wait(2);
}
function selectOutboundPetPax(singlepet)
{
    I.click('//*[@id="ou_passengersSelectWrapperDD"]/div/ul[4]/li[2]/span/span/span[3]/i');

    for (let index = 0; index < singlepet; index++) {
        I.pressKey('ArrowDown');
    }
    I.pressKey('Enter');
}

function deSelectSamePaxCheckbox()
{
//de-select same passenger checkbox and validate if vehicles and passengers list boxes are displayed 
//and sub-sequent list validations.
    
    if (I.seeCheckboxIsChecked('//*[@id="samePassengersCheckBox"]')) 
    {
        console.log('Same passenger checkbox is checked');
        I.uncheckOption('//*[@id="samePassengersCheckBox"]');; 
        //validate checkbox is unchecked
        if (I.dontSeeCheckboxIsChecked('//*[@id="samePassengersCheckBox"]'))
        {
            console.log('checkbox is not checked now');
        }
    }
    I.wait(2);
    I.pressKey('Pagedown');
    I.wait(2);      
}

   
function validateReturnVehicleList()
{
    //Click on vehicle list-box to validate if all expected vehicles are available.
    I.click('//*[@id="vehicleTypeReturnComboBoxSelectBoxItArrow"]');

   //Vehicle list validations
   I.see('Car ≤ 1.8m h & ≤ 6m l');
   I.see('Car 1.8 - 2.4m h & ≤ 6 m l');
   I.see('Car > 2.4m h & / or > 6m l');
   I.see('Van');    
   I.see('Motorcycle');
   I.see('Minibus');
   I.see('Bicycle');
   I.see('Motorcycle with sidecar/Trike');
   I.see('No Vehicle (Foot Passenger)');
   I.pressKey('Tab')
   I.wait(2);          
}
function selectReturnVehicle(returnVehicle) 
{
    
    I.click('//*[@id="vehicleTypeReturnComboBoxSelectBoxItArrow"]');
    //pause();
    I.click(returnVehicle);

} 
function validateReturnTrailerList()
{
    //Click on trailer list-box to validate if all expected vehicles are available.
    I.click('//*[@id="trailerReturnComboBoxSelectBoxItArrow"]');

    //trailer list validations
    I.see('No trailer / Caravan');
    I.see('Trailer ≤ 1.8m h & ≤ 6m l');
    I.see('Trailer / Caravan > 1.8m h or > 6m l');
    I.pressKey('Tab');
}

function selectReturnTrailer(returnTrailer)
{
    I.click('//*[@id="trailerReturnComboBoxSelectBoxItArrow"]');
    I.click(returnTrailer);
}

function validateReturnAdultPax()
{
    //Click on adult passengers list-box to validate if all numbers are available.
    I.click('//*[@id="re_AD_pass_comboBoxSelectBoxItArrow"]');

    //adult passengers list validations
    I.see('0');
    I.see('1');
    I.see('2');
    I.see('3');
    I.see('4');
    I.see('5');
    I.see('6');
    I.see('7');
    I.see('8');
    I.see('9');
    I.pressKey('tab');
}

function selectReturnAdultPax(returnadpax)
{
    I.click('//*[@id="re_AD_pass_comboBoxSelectBoxItArrow"]');
    I.pressKey('ArrowUp');
    I.pressKey('ArrowUp');
    I.pressKey('Enter');
    I.click('//*[@id="re_AD_pass_comboBoxSelectBoxItArrow"]');

    for (let index = 0; index < returnadpax; index++) {
        I.pressKey('ArrowDown');
    }
    I.pressKey('Enter');
}
function validateReturnChildPax()
{
    //Click on child passengers list-box to validate if all numbers are available.
    I.click('//*[@id="re_CH_pass_comboBoxSelectBoxItArrow"]');

    //child passengers list validations
    I.see('0');
    I.see('1');
    I.see('2');
    I.see('3');
    I.see('4');
    I.see('5');
    I.see('6');
    I.see('7');
    I.see('8');
    I.see('9');

    I.pressKey('Tab');
    I.wait(2);
}

function selectReturnChildPax(returnchpax)
{
    //Click on child passengers list-box to validate if all numbers are available.
    I.click('//*[@id="re_CH_pass_comboBoxSelectBoxItArrow"]');

    for (let index = 0; index < returnchpax; index++) {
        I.pressKey('ArrowDown');
    }
    I.pressKey('Enter');
} 


function validateReturnInfantPax()
{
    //Click on infant passengers list-box to validate if all numbers are available.
    I.click('//*[@id="re_IN_pass_comboBoxSelectBoxItArrow"]');

    //infant passengers list validations
    I.see('0');
    I.see('1');
    I.see('2');
    I.see('3');
    I.see('4');
    I.see('5');
    I.see('6');
    I.see('7');
    I.see('8');
    I.see('9');

    I.pressKey('Tab');
   
}

function selectReturnInfantPax(returninpax)    
{
    I.click('//*[@id="re_IN_pass_comboBoxSelectBoxItArrow"]');

    for (let index = 0; index < returninpax; index++) {
        I.pressKey('ArrowDown');
    }
    I.pressKey('Enter');
}

   
function validateReturnPetPax()
{
    //Click on pet list-box to validate if all numbers are available.
    I.click('//*[@id="re_passengersSelectWrapperDD"]/div/ul[4]/li[2]/span/span/span[3]/i');

    //pet  list validations
    I.see('0');
    I.see('1');
    I.see('2');
    I.see('3');
    I.see('4');
    I.see('5');
    I.pressKey('Tab');
}


function selectReturnPetPax(returnpet)
{
I.click('//*[@id="re_passengersSelectWrapperDD"]/div/ul[4]/li[2]/span/span/span[3]/i');

for (let index = 0; index < returnpet; index++) {
    I.pressKey('ArrowDown');
}
I.pressKey('Enter');
}

function clickQuoteButton()
{
//Click on Get a Quote button
I.click('//*[@id="fareFindersubmitButton"]');
I.wait(5);
    
}

function validateCrossingPageIsDisplayed()
{
    I.seeInTitle('SELECT A CROSSING'); 
}

async function validateOutboundDateTimeOnCrossing(singlejourneydate,singlejourneytime)
{
    //Validate outbound date and time on crossing page
    let actual_singlejourneydate = await I.grabValueFrom('//*[@id="outboundCrossingDateTextBox"]');

    if ( singlejourneydate == actual_singlejourneydate) 
    {
        console.log('Crossing section - Outbound journey date is populated as expected on crossing page');
    }
    else
    {
        console.log("Expected : " + singlejourneydate);
        console.log("Actual : " + actual_singlejourneydate);
        console.log('Crossing section - Outbound journey date is not populated as expected on crossing page');
    }

    let actual_singlejourneytime = await I.grabTextFrom('//*[@id="outboundCrossingTimeComboBoxSelectBoxItText"]');

    if ( singlejourneytime == actual_singlejourneytime ) 
    {
        console.log('Crossing section - Outbound journey time is populated as expected on crossing page');
    }
    else
    {
        console.log("Expected : " + singlejourneytime);
        console.log("Actual : " + actual_singlejourneytime );
        console.log('Crossing section - Outbound journey time is not populated as expected on crossing page');
    }

}

async function validateRetunDateTimeOnCrossing(returnjourneydate,returnjourneytime)
{
    //Validate return date and time on crossing page
    let actual_returnjourneydate = await I.grabValueFrom('//*[@id="returnCrossingDateTextBox"]');

    if ( returnjourneydate == actual_returnjourneydate) 
    {
        console.log('Crossing section - Return journey date is populated as expected on crossing page');
    }
    else
    {
        console.log("Expected : " + returnjourneydate);
        console.log("Actual : " + actual_returnjourneydate);
        console.log('Crossing section - Return journey date is not populated as expected on crossing page');
    }
    
    let actual_returnjourneytime = await I.grabTextFrom('//*[@id="returnCrossingTimeComboBoxSelectBoxItText"]');

    if ( returnjourneytime == actual_returnjourneytime) 
    {
        console.log('Crossing section - Return journey time is populated as expected on crossing page');
    }
    else
    {
        console.log("Expected : " + returnjourneytime);
        console.log("Actual : " + actual_returnjourneytime );
        console.log('Crossing section - Return journey time is not populated as expected on crossing page');
    }
        
}

async function validateOutboundRouteItinerary(outboundrouteuppercase)
{
    let actual_outboundrouteuppercase = await I.grabTextFrom('//*[@id="routeoutbound"]');

    if ( outboundrouteuppercase == actual_outboundrouteuppercase) {
        console.log('Itinerary section - Outbound route is populated as expected on crossing page');
    }
    else
    {
        console.log("Expected : " + outboundrouteuppercase);
        console.log("Actual : " + actual_outboundrouteuppercase);
        console.log('Itinerary section - Outbound route is not populated as expected on crossing page');
    }
}


async function validateOutboundDateTimeOnItinerary(singlejourneydate,singlejourneytime)
{
    //Validate outbound date and time on Itinerary section

    let actual_singlejourneydate = await I.grabTextFrom('//*[@id="dateoutbound"]');

    if ( singlejourneydate == actual_singlejourneydate ) 
    {
        console.log('Itinerary section - Outbound journey date is populated as expected on crossing page');
    }
    else
    {
        console.log("Expected : " + singlejourneydate);
        console.log("Actual : " + actual_singlejourneydate);
        console.log('Itinerary section - Outbound journey date is not populated as expected on crossing page');
    }

    let actual_strdepartoutbound = await I.grabTextFrom('//*[@id="departoutbound"]')

    if ( singlejourneytime == actual_strdepartoutbound[1]) 
    {
        console.log('Itinerary section - Outbound journey time is populated as expected on crossing page');
    }
    else
    {
        console.log("Expected : " + singlejourneytime);
        console.log("Actual : " + actual_strdepartoutbound[1]);
        console.log('Itinerary section - Outbound journey time is not populated as expected on crossing page');
    }
        
}

async function validateOutboundPaxOnItinerary(singleadpax,singlechpax,singleinpax,flgOutboundChild,flgOutboundInfant)    
{
    let strPass = singleadpax+' Adult';

        if(flgOutboundChild)
        {
        strPass = singleadpax+' Adult, '+singlechpax+' Child';

            if(flgOutboundInfant)
            {
            strPass = singleadpax+' Adult, '+singlechpax+' Child, '+singleinpax+' Infant';        
            }        
        }
        else
        {
            if(flgOutboundInfant)
            {
            strPass = singleadpax+' Adult, '+singleinpax+' Infant';
            }
        }

    let actual_strPass = await I.grabTextFrom('//*[@id="passengersoutbound"]');

    if ( strPass == actual_strPass ) 
    {
        console.log('Itinerary section - Outbound passengers details is populated as expected on crossing page');
    }
    else
    {
        console.log("Expected : " + strPass);
        console.log("Actual : " + actual_strPass);
        console.log('Itinerary section - Outbound passengers details is not populated as expected on crossing page');
    }

}

async function validateOutboundPetOnItinerary(singlepet)
{
    let strPet = singlepet+' Pet';
    let actual_strPet = await I.grabTextFrom('//*[@id="petsoutbound"]');
    if ( strPet == actual_strPet) 
    {
        console.log('Itinerary section - Outbound pet details is populated as expected on crossing page');
    }
    else
    {
        console.log("Expected : " + strPet);
        console.log("Actual : " + actual_strPet);
        console.log('Itinerary section - Outbound pet details is not populated as expected on crossing page');
    }        

}

async function validateReturnRouteItinerary(returnrouteuppercase)
{
    //Validate return route on Itinerary section
    let actual_returnrouteuppercase = await I.grabTextFrom('//*[@id="routereturn"]');

    if ( returnrouteuppercase == actual_returnrouteuppercase) 
    {
        console.log('Itinerary section - Return route is populated as expected on crossing page');
    }
    else
    {
        console.log("Expected : " + returnrouteuppercase);
        console.log("Actual : " + actual_returnrouteuppercase);
        console.log('Itinerary section - Return route is not populated as expected on crossing page');
    }
}

async function validateReturnDateTimeOnItinerary(returnjourneydate,returnjourneytime)
{
    //Validate return date and time on Itinerary section
    let actual_returnjourneydate = await I.grabTextFrom('//*[@id="datereturn"]');

    if ( returnjourneydate == actual_returnjourneydate) 
    {
        console.log('Itinerary section - Return journey date is populated as expected on crossing page');
    }
    else
    {
        console.log("Expected : " + returnjourneydate);
        console.log("Actual : " + actual_returnjourneydate);
        console.log('Itinerary section - Return journey date is not populated as expected on crossing page');
    }

    let actual_strdepartreturn = await I.grabTextFrom('//*[@id="departreturn"]');

    if ( returnjourneytime == actual_strdepartreturn[1]) 
    {
        console.log('Itinerary section - Return journey time is populated as expected on crossing page');
    }
    else
    {
        console.log("Expected : " + returnjourneytime);
        console.log("Actual : " + actual_strdepartreturn[1]);
        console.log('Itinerary section - Return journey time is not populated as expected on crossing page');
    }

}


async function validateReturnPaxOnItinerary(returnadpax,returnchpax,returninpax,flgReturnChild,flgReturnInfant)
    {

    let strretPass = returnadpax+' Adult';

        if(flgReturnChild)
        {
            strretPass = returnadpax+' Adult, '+returnchpax+' Child';

            if(flgReturnInfant)
            {
                strretPass = returnadpax+' Adult, '+returnchpax+' Child, '+returninpax+' Infant';        
            }        
        }
        else
        {
            if(flgReturnInfant)
            {
                strretPass = returnadpax+' Adult, '+singleinpax+' Infant';
            }
        }

    let actual_strretPass = await I.grabTextFrom('//*[@id="passengersreturn"]');

    if ( strretPass == actual_strretPass) 
    {
        console.log('Itinerary section - Return passengers details is populated as expected on crossing page');
    }
    else
    {
        console.log("Expected : " + strretPass);
        console.log("Actual : " + actual_strretPass);
        console.log('Itinerary section - Return passengers details is not populated as expected on crossing page');
    }

}

async function validateReturnPetOnItinerary(returnpet)
{     
    let strretPet = returnpet+' Pet';
    let actual_strretPet = await I.grabTextFrom('//*[@id="petsreturn"]');

    if ( strretPet == actual_strretPet) 
    {
        console.log('Itinerary section - Return pet details is populated as expected on crossing page');
    }
    else
    {
        console.log("Expected : " + strretPet);
        console.log("Actual : " + actual_strretPet);
        console.log('Itinerary section - Return pet details is not populated as expected on crossing page');
    }       
}

function clickContinueButton()
{
    I.click('//*[@id="continue-button"]');
    I.wait(10);
}

function validateExtrasPageIsDisplayed()
{
    I.seeInTitle('EXTRAS');
}


function selectOutboundAndReturnClubLounge(strsinglesetextras,strreturnsetextras, 
    flagOutboundClubLounge,flagOutboundWiFi, flagOutboundPriorityBoarding, singleclublounge,
    flagReturnClubLounge, flagReturnWiFi, flagReturnPriorityBoarding, returnclublounge )    
{
//Club Lounge 

    //Click on Outbound - Club Lounge extra

    //let OutboundClubLoungeVisElements = await  ;
    
    if(I.grabNumberOfVisibleElements('//button[@class="CabinComponent-cabin-viewUpgrade btn btn-big btn-pink text-transform-uppercase"]'))
    {
        I.click('//button[@class="CabinComponent-cabin-viewUpgrade btn btn-big btn-pink text-transform-uppercase"]');
        console.log('Club lounge - More information button is available and clicked');
        I.wait(2);

        //Outbound
        if(flagOutboundClubLounge)
        {
            //let OutboundClubLoungeVisElements_1 = await ;

            if(I.grabNumberOfVisibleElements('//form[@class="padd-b-10"]//i[@class="selectboxit-arrow selectboxit-default-arrow"]') )
            {
                I.click('//form[@class="padd-b-10"]//i[@class="selectboxit-arrow selectboxit-default-arrow"]');
                console.log('Club lounge - Outbound list box is available');
                for (let index = 0; index < singleclublounge; index++) {
                    I.pressKey('ArrowDown');
                }

                I.pressKey('Enter');
                I.pressKey('Tab');
                I.wait(2);

                if(flagOutboundWiFi || flagOutboundPriorityBoarding)
                {
                    strsinglesetextras = singleclublounge+'x  Club Lounge,';                    
                }
                else
                {
                    strsinglesetextras = singleclublounge+'x  Club Lounge';
                }
                    
            }
            else
            {
                console.log('Club lounge - Outbound  list box is not available');
            }
        }

        //Return
        if(flagReturnClubLounge)
        {
            //Click on Return - Club Lounge extra
           // let flg = 0
            //let flg = await 
            
            if(I.grabNumberOfVisibleElements('//div[@class="return"]//span[@name="12"]//i[@class="selectboxit-arrow selectboxit-default-arrow"]') )
            {
                //pause();

                I.click('//div[@class="return"]//span[@name="12"]//i[@class="selectboxit-arrow selectboxit-default-arrow"]');
                I.wait(2);
                console.log('Club lounge - Return  list box is available');    
                for (let index = 0; index < returnclublounge; index++) {
                    I.pressKey('ArrowDown');
                }
                I.pressKey('Enter');

                if(flagReturnWiFi || flagReturnPriorityBoarding)
                {
                    strreturnsetextras = returnclublounge+'x  Club Lounge,';                  
                }
                else
                {
                    strreturnsetextras = returnclublounge+'x  Club Lounge';
                }
                
            }
            else
            {
                console.log('Club lounge - Return  list box is not available'); 
            }
        }

    }

    else
    {
        console.log('Club lounge - More information button is not available');
    }

    return [strsinglesetextras, strreturnsetextras];
}



function selectOutboundAndReturnWiFi(strsinglesetextras,strreturnsetextras, 
    flagOutboundClubLounge,flagOutboundWiFi, flagOutboundPriorityBoarding, singleWiFi,
    flagReturnClubLounge, flagReturnWiFi, flagReturnPriorityBoarding, returnWiFi)
{
//Click on Outbound - WiFi extra

//let OutboundWiFiVisElements = await ;

if(I.grabNumberOfVisibleElements('//button[@class="WiFiComponent-addon-viewUpgrade btn btn-big btn-pink text-transform-uppercase"]'))
{
    I.click('//button[@class="WiFiComponent-addon-viewUpgrade btn btn-big btn-pink text-transform-uppercase"]');
    I.wait(2);
    console.log('WiFi - More information button is available and clicked');

    // Outbound
    if(flagOutboundWiFi)
    {
        //let OutboundWiFiVisElements_1 = await ;
        //let OutboundWiFiVisElements1 = await ;
        if(I.grabNumberOfVisibleElements('//*[@id="extrasPageExtrasSection"]/div[4]/div/div[2]/div[2]/div/form/span/span/span[3]/i'))
        {
            I.click('//*[@id="extrasPageExtrasSection"]/div[4]/div/div[2]/div[2]/div/form/span/span/span[3]/i');
            console.log('WiFi - Outbound list box is available');
            for (let index = 0; index < singleWiFi; index++) {
                I.pressKey('ArrowDown');
            }

            I.pressKey('Enter');
            I.pressKey('Tab');
            I.wait(2);

            if(flagOutboundPriorityBoarding)
            {
                strsinglesetextras = strsinglesetextras+singleWiFi+'x  YOU GET 90 MINUTES WIFI,';                    
            }
            else
            {
                strsinglesetextras = strsinglesetextras+singleWiFi+'x  YOU GET 90 MINUTES WIFI'; 
            }
           
        }
        else
        {
            console.log('WiFi - Outbound list box is not available');
        }
    }


/// WiFi component

    //Return
    if(flagReturnWiFi)
    {
        //Click on Return - WiFi extra
        
        //let ReturndWiFiVisElements = await 
        if(I.grabNumberOfVisibleElements('//*[@id="extrasPageExtrasSection"]/div[4]/div/div[2]/div[4]/div/form/span/span/span[3]/i'))
        {
            I.click('//*[@id="extrasPageExtrasSection"]/div[4]/div/div[2]/div[4]/div/form/span/span/span[3]/i');
            I.wait(2);
            console.log('WiFi - Return list box is available');
            for (let index = 0; index < returnWiFi; index++) {
                I.pressKey('ArrowDown');
            }
            I.pressKey('Enter');
            I.wait(2);

            if(flagReturnPriorityBoarding)
            {
                strreturnsetextras = strreturnsetextras+returnWiFi+'x  YOU GET 90 MINUTES WIFI,';                    
            }
            else
            {
                strreturnsetextras = strreturnsetextras+returnWiFi+'x  YOU GET 90 MINUTES WIFI';
            }
            
        }
        else
        {
            console.log('WiFi - Return list box is not available');
        }
    }
}
else
{
    console.log('WiFi - More information button is not available');
}

return [strsinglesetextras, strreturnsetextras];

}



function selectOutboundAndReturnPriorityBoarding(strsinglesetextras,strreturnsetextras, 
    flagOutboundPriorityBoarding, flagReturnPriorityBoarding)

{

   //let OutboundPriorityBoardingVisElements = await ;

   if(I.grabNumberOfVisibleElements('//button[@class="PriorityBoardingComponent-addon-viewUpgrade btn btn-big btn-pink text-transform-uppercase"]'))
   {

       I.click('//button[@class="PriorityBoardingComponent-addon-viewUpgrade btn btn-big btn-pink text-transform-uppercase"]');
       
       //*[@id="extrasPageExtrasSection"]/div[5]/div/div[1]/div[2]/div[2]/div/button
       I.wait(2);
       console.log('Priority Boarding - More information button is available and clicked');

       //Outbound
       if(flagOutboundPriorityBoarding )
       {
           //outbound checkbox
           I.checkOption('//input[@name="outbound"]');
           console.log('Priority Boarding - Outbound checkbox is available and selected');
           strsinglesetextras = strsinglesetextras+'1x  PRIORITY BOARDING';            

       }

       //Return
       if(flagReturnPriorityBoarding)
       {
           //return checkbox
           I.checkOption('//input[@name="return"]');
           console.log('Priority Boarding - Return checkbox is available and selected');            
           strreturnsetextras = strreturnsetextras+'1x  PRIORITY BOARDING';
        }
       
   }
   else
   {
       console.log('Priority Boarding - More information button is not available');
   }

   return [strsinglesetextras, strreturnsetextras];


}    

async function validateSelectedOutboundExtras(strsinglesetextras)
{
    let varsingleextras = await I.grabTextFrom('//*[@id="extrasoutboundlbl"]')

    if(varsingleextras == strsinglesetextras)
    {
        console.log('Outbound extras selection matches');
        console.log('Expected - '+strsinglesetextras);
        console.log('Actual - '+varsingleextras);
    }
    else
    {
        console.log('Outbound extras selection does not match');
        console.log('Expected - '+strsinglesetextras);
        console.log('Actual - '+varsingleextras);
    }

}

async function validateSelectedReturnExtras(strreturnsetextras)
{
    let varreturnextras = await I.grabTextFrom('//*[@id="extrasreturnlbl"]')

    if(varreturnextras == strreturnsetextras)
    {
        console.log('Return extras selection matches');
        console.log('Expected - '+strreturnsetextras);
        console.log('Actual - '+varreturnextras);
    }
    else
    {
        console.log('Return extras selection does not match');
        console.log('Expected - '+strreturnsetextras);
        console.log('Actual - '+varreturnextras);
    }


}

//=== new functions

function clickContinueButtonOnExtrasPage()
{
    I.click('//*[@id="bookNowButton"]');
    I.wait(10);
}

function validateWelcomeLoginPageIsDisplayed()
{
    I.seeInTitle('WELCOME/SIGN IN');
}

function setLoginCredentials(userEmail, userPassword)
{
    I.fillField('//*[@id="j_username"]', userEmail);
    I.fillField('//*[@id="j_password"]',userPassword);
}

function clickContinueButtonOnLoginPage()
{
    I.click('//*[@id="checkoutButton"]');
    I.wait(5);
}

function validateBookingDetailsPageIsDisplayed()
{
    I.seeInTitle('BOOKING DETAILS');
}

///Existing code to be re-used for Itinerary validations
//goes - just to repeat in feature file only
/// And I need to validate Route, Date & time, Passengers, Pet for Outbound and Return legs on Itinerary
    

//let  = ["Mr Second Pax","Mrs Third Pax","Mr Fourth Pax", "Mrs Fifth Pax"];
//let  = ["Miss FirstChild Pax","Master SecondChild Pax","Miss ThirdChild Pax"];
//let  = ["Master FirstInfant Pax","Miss SecondInfant Pax"];
//let PetNames = ["Leo","Julie"];
//let VehicleNames = ["ABC1234","XYZ9876"];


async function selectPassengersOnBookingDetails(AdultPaxNames, ChildPaxNames, InfantPaxNames,singleadpax, singlechpax, singleinpax)
{
    let TotalAdultPaxCount = AdultPaxNames.length;
    let TotalChildPaxCount = ChildPaxNames.length;
    let TotalInfantPaxCount = InfantPaxNames.length;

    let TotalPaxCount=0;
  

    TotalPaxCount = parseInt(singleadpax)+ parseInt(singlechpax)+ parseInt(singleinpax);
    console.log('TotalPaxCount '+TotalPaxCount);

    for (let index = 1; index < TotalPaxCount-1; index++) 
    {
        I.click('//*[@id="oldPassengers'+index+'SelectBoxItArrow"]');
        
        for (let index1 = 1; index1 < TotalAdultPaxCount-1; index1++)
        {
            let actual_paxname = await I.grabTextFrom('//*[@id="oldPassengers'+(index1+1)+'SelectBoxItText"]');

            console.log('actual_paxname '+actual_paxname);
            console.log('AdultPaxNames '+AdultPaxNames[index1-1]);

               if (actual_paxname === AdultPaxNames[index1-1] )
               {
                  I.click('//*[@id="oldPassengers'+(index1+1)+'SelectBoxItText"]'); 
               } 
           
        }
        
    }

/*
    if(singlejourneytime == actual_singlejourneytime)
    {
        I.pressKey('ArrowDown');
    }
    else
    {
        I.click(singlejourneytime);
        break;
    }



    for (let index = 1; index < TotalAdultPaxCount-1; index++) 
    {
        I.click('//*[@id="oldPassengers'+index+'SelectBoxItArrow"]');
        I.click('//*[@id="oldPassengers'+index+'SelectBoxItText"]'); 
        TotalPaxCount = TotalPaxCount + 1;  
    }

    for (let index = 1; index < TotalChildPaxCount; index++) 
    {
        I.click('//*[@id="oldPassengers'+TotalPaxCount+'SelectBoxItArrow"]');
        I.click('//*[@id="oldPassengers'+TotalPaxCount+'SelectBoxItText"]'); 
        TotalPaxCount = TotalPaxCount + 1;  
    }

    for (let index = 1; index < TotalInfantPaxCount; index++) 
    {
        I.click('//*[@id="oldPassengers'+TotalPaxCount+'SelectBoxItArrow"]');
        I.click('//*[@id="oldPassengers'+TotalPaxCount+'SelectBoxItText"]'); 
        TotalPaxCount = TotalPaxCount + 1;  
    }
*/

}

function selectVehicleOnBookingDetails(AdultPaxNames, ChildPaxNames, InfantPaxNames)
{
    //*[@id="vehiclesData0.existingCodeSelectBoxItArrow"]
//*[@id="vehiclesData0.existingCodeSelectBoxItText"]

let PetNames = ["Leo","Julie"];
let VehicleNames = ["ABC1234","XYZ9876"];

}


//*[@id="oldPets0SelectBoxItArrow"]
//*[@id="oldPets0SelectBoxIt"]

function clickContinueButtonOnBookingDetailsPage()
{
    I.click('//*[@id="confirmBooking"]');
}



module.exports = {

    //Home Page
    openHomePageURL,
    validateTitle,
    validateHeaderLinks,
    validateLanguages,
    validateRoutes,
    selectRoute,
    clickGoButton,

    //Route Page    
    validateSelectedRoutePage,
    validateSelectedRoute,
    selectOutboundJourneyDateAndTime,
    selectReturnJourneyDateAndTime,
    validateOutboundVehicleList,
    selectOutboundVehicle,
    validateOutboundTrailerList,
    selectOutboundTrailer,
    validateOutboundAdultPax,
    validateOutboundAdultPaxZeroErroMessageDisplay,
    selectOutboundAdultPax,
    validateOutboundAdultPaxZeroErroMessageNotDisplay,
    validateOutboundChildPax,
    selectOutboundChildPax,
    validateOutboundInfantPax,
    selectOutboundInfantPax,
    validateOutboundPetPax,
    selectOutboundPetPax,
    deSelectSamePaxCheckbox,
    validateReturnVehicleList,
    selectReturnVehicle,
    validateReturnTrailerList,
    selectReturnTrailer,
    validateReturnAdultPax,
    selectReturnAdultPax,
    validateReturnChildPax,
    selectReturnChildPax,
    validateReturnInfantPax,
    selectReturnInfantPax,
    validateReturnPetPax,
    selectReturnPetPax,
    clickQuoteButton,

    //Crossing Page
    validateCrossingPageIsDisplayed,
    validateOutboundDateTimeOnCrossing,
    validateRetunDateTimeOnCrossing,
    validateOutboundRouteItinerary,
    validateOutboundDateTimeOnItinerary,
    validateOutboundPaxOnItinerary,
    validateOutboundPetOnItinerary,
    validateReturnRouteItinerary,
    validateReturnDateTimeOnItinerary,
    validateReturnPaxOnItinerary,
    validateReturnPetOnItinerary,
    clickContinueButton,

    //Extras Page
    validateExtrasPageIsDisplayed,
    selectOutboundAndReturnClubLounge,
    selectOutboundAndReturnWiFi,
    selectOutboundAndReturnPriorityBoarding,
    validateSelectedOutboundExtras,
    validateSelectedReturnExtras,
    clickContinueButtonOnExtrasPage,

    //Welcome / Login page
    validateWelcomeLoginPageIsDisplayed,
    setLoginCredentials,
    clickContinueButtonOnLoginPage,

    //Booking Details page    
    validateBookingDetailsPageIsDisplayed,
    selectPassengersOnBookingDetails

}
