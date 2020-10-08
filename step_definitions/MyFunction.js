const { I } = inject();

function openHomePageURL()
{ 
    I.amOnPage("https://www.poferries.com/en/portal"); // Simple way to put the application URL. This will take over 
}     

function validateTitle()
{
    //Validate title
    I.seeInTitle('Book Ferries to Europe & Northern Ireland');
    I.seeInTitle('P&O Ferries - UK');
}

function validateHeaderLinks()
{
    I.see('SITEMAP');
    I.see('P&O BLOG');
    I.see('MY ACCOUNT');
    I.see('HELP');
    I.wait(5);
}

function addValues(x,y)
{
    //Add values
    console.log('x :'+x);
    console.log('y :'+y);

    return x+y;
    
}

function validateLanguages()   
{
 
    //Click on languages list-box to validate if all expected languages are available.
    I.click('//*[@id="lang-selectorSelectBoxItArrow"]');

    //Languages list validations
    I.see('ENGLISH (£)');
    I.see('ENGLISH (€)');
    I.see('DEUTSCH');
    I.see('FRANÇAIS (FR)');    
    I.see('NEDERLANDS');
    I.see('FRANÇAIS (BE)');
    I.see('VLAAMS');
        
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

function validateSelectedRoute(outboundroute, returnroute)
{
    //Validate the outbound route selected option
    if (outboundroute === I.grabTextFrom('//*[@id="singleJourneyComboBoxSelectBoxItText"]') )
    {
        console.log(outboundroute +' route is selected in single journey list box');
    }
    //Validate the return route selected option 
    if (returnroute ===  I.grabTextFrom('//*[@id="returnJourneyComboBoxSelectBoxItText"]') )
    {
        console.log(returnroute +' route is selected in return journey list box');
    }

}


function selectOutboundJourneyDateAndTime(I,singlejourneydate,singlejourneytime)
{

   // Select the Going out journey date
   I.fillField('//*[@id="singleJourneyDateTextBox"]',singlejourneydate);
   I.pressKey('Tab');
   I.wait(2);
   I.click('//*[@id="singleJourneyTimeComboBoxSelectBoxItArrow"]');

  // Select the Going out journey time
 
   for (let index = 1; index < 26; index++) 
   {

       if(singlejourneytime == I.grabTextFrom('//*[@id="singleJourneyTimeComboBoxSelectBoxItOptions"]/li['+index+']'))
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


function selectReturnJourneyDateAndTime(I,returnjourneydate,returnjourneytime)
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
      if(returnjourneytime ==  I.grabTextFrom('//*[@id="returnJourneyTimeComboBoxSelectBoxItOptions"]/li['+index+']'))
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
 
function validateOutboundVehicleList(I)
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


function selectOutboundVehicle(I,singleVehicle)
{
    //Click on vehicle list-box 
    I.click('//*[@id="vehicleTypeOutboundComboBoxSelectBoxItArrow"]');
    I.click(singleVehicle);
}


function validateOutboundTrailerList(I)
{
    //Click on trailer list-box to validate if all expected vehicles are available.
    I.click('//*[@id="trailerOutboundComboBoxSelectBoxItArrow"]');

    //trailer list validations
    I.see('No trailer / Caravan');
    I.see('Trailer ≤ 1.8m h & ≤ 6m l');
    I.see('Trailer / Caravan > 1.8m h or > 6m l');
    I.pressKey('Tab');
}


function selectOutboundTrailer(I,singleTrailer)
{
    //Click on trailer list-box 
    I.click('//*[@id="trailerOutboundComboBoxSelectBoxItArrow"]');
    I.click(singleTrailer);
    
}

function validateOutboundAdultPax(I)
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

function  validateOutboundAdultPaxZeroErroMessageDisplay(I)
{
    //Validate adult passenger selection as 0 displays an error message
    I.click('//*[@id="ou_AD_pass_comboBoxSelectBoxItArrow"]');
    I.click('0');
    I.see('at least one adult is needed for outbound leg');
}

function selectOutboundAdultPax(I,singleadpax)
{
    //Validateadult passenger selection as 1 removes an error message
    I.click('//*[@id="ou_AD_pass_comboBoxSelectBoxItArrow"]');
    I.click(singleadpax);
    I.wait(2);        
}

function validateOutboundAdultPaxZeroErroMessageNotDisplay(I)
{
    //Validateadult passenger selection as 1 removes an error message
    I.dontSee('at least one adult is needed for outbound leg');    
}


function validateOutboundChildPax(I)
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

function selectOutboundChildPax(I,singlechpax)

{
    I.click('//*[@id="ou_CH_pass_comboBoxSelectBoxItArrow"]');

    for (let index = 0; index < singlechpax; index++) {
        I.pressKey('ArrowDown');
    }
    I.pressKey('Enter');
    
}

  
function validateOutboundInfantPax(I)
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
function selectOutboundInfantPax(I,singleinpax)
{
    I.click('//*[@id="ou_IN_pass_comboBoxSelectBoxItArrow"]');

    for (let index = 0; index < singleinpax; index++) {
        I.pressKey('ArrowDown');
    }
    I.pressKey('Enter');
} 
function validateOutboundPetPax(I)
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
function selectOutboundPetPax(I,singlepet)
{
    I.click('//*[@id="ou_passengersSelectWrapperDD"]/div/ul[4]/li[2]/span/span/span[3]/i');

    for (let index = 0; index < singlepet; index++) {
        I.pressKey('ArrowDown');
    }
    I.pressKey('Enter');
}

function deSelectSamePaxCheckbox(I)
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

   
function validateReturnVehicleList(I)
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
function selectReturnVehicle(I,returnVehicle) 
{
    I.click('//*[@id="vehicleTypeReturnComboBoxSelectBoxItArrow"]');
    I.click(returnVehicle);
} 
function validateReturnTrailerList(I)
{
    //Click on trailer list-box to validate if all expected vehicles are available.
    I.click('//*[@id="trailerReturnComboBoxSelectBoxItArrow"]');

    //trailer list validations
    I.see('No trailer / Caravan');
    I.see('Trailer ≤ 1.8m h & ≤ 6m l');
    I.see('Trailer / Caravan > 1.8m h or > 6m l');
    I.pressKey('Tab');
}

function selectReturnTrailer(I,returnTrailer)
{
    I.click('//*[@id="trailerReturnComboBoxSelectBoxItArrow"]');
    I.click(returnTrailer);
}

function validateReturnAdultPax(I)
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

function selectReturnAdultPax(I,returnadpax)
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
function validateReturnChildPax(I)
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

function selectReturnChildPax(I,returnchpax)
{
    //Click on child passengers list-box to validate if all numbers are available.
    I.click('//*[@id="re_CH_pass_comboBoxSelectBoxItArrow"]');

    for (let index = 0; index < returnchpax; index++) {
        I.pressKey('ArrowDown');
    }
    I.pressKey('Enter');
} 


function validateReturnInfantPax(I)
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

function selectReturnInfantPax(I,returninpax)    
{
    I.click('//*[@id="re_IN_pass_comboBoxSelectBoxItArrow"]');

    for (let index = 0; index < returninpax; index++) {
        I.pressKey('ArrowDown');
    }
    I.pressKey('Enter');
}

   
function validateReturnPetPax(I)
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


function selectReturnPetPax(I,returnpet)
{
I.click('//*[@id="re_passengersSelectWrapperDD"]/div/ul[4]/li[2]/span/span/span[3]/i');

for (let index = 0; index < returnpet; index++) {
    I.pressKey('ArrowDown');
}
I.pressKey('Enter');
}

function clickQuoteButton(I)
{

//Click on Get a Quote button
I.click('//*[@id="fareFindersubmitButton"]');
I.wait(5);
    
}

function validateOutboundDateTimeOnCrossing(I,singlejourneydate,singlejourneytime)
{
    //Validate outbound date and time on crossing page
    if ( singlejourneydate == I.grabValueFrom('//*[@id="outboundCrossingDateTextBox"]')) 
    {
        console.log('Crossing section - Outbound journey date is populated as expected on crossing page');
    }
    else
    {
        console.log("Expected : " + singlejourneydate);
        console.log("Actual : " + I.grabValueFrom('//*[@id="outboundCrossingDateTextBox"]'));
        console.log('Crossing section - Outbound journey date is not populated as expected on crossing page');
    }

    if ( singlejourneytime == I.grabTextFrom('//*[@id="outboundCrossingTimeComboBoxSelectBoxItText"]')) 
    {
        console.log('Crossing section - Outbound journey time is populated as expected on crossing page');
    }
    else
    {
        console.log("Expected : " + singlejourneytime);
        console.log("Actual : " + I.grabTextFrom('//*[@id="outboundCrossingTimeComboBoxSelectBoxItText"]'));
        console.log('Crossing section - Outbound journey time is not populated as expected on crossing page');
    }

}

function validateRetunDateTimeOnCrossing(I,returnjourneydate,returnjourneytime)
{
    //Validate return date and time on crossing page
    if ( returnjourneydate == I.grabValueFrom('//*[@id="returnCrossingDateTextBox"]')) 
    {
        console.log('Crossing section - Return journey date is populated as expected on crossing page');
    }
    else
    {
        console.log("Expected : " + returnjourneydate);
        console.log("Actual : " + I.grabValueFrom('//*[@id="returnCrossingDateTextBox"]'));
        console.log('Crossing section - Return journey date is not populated as expected on crossing page');
    }

    if ( returnjourneytime == I.grabTextFrom('//*[@id="returnCrossingTimeComboBoxSelectBoxItText"]')) 
    {
        console.log('Crossing section - Return journey time is populated as expected on crossing page');
    }
    else
    {
        console.log("Expected : " + returnjourneytime);
        console.log("Actual : " + I.grabTextFrom('//*[@id="returnCrossingTimeComboBoxSelectBoxItText"]'));
        console.log('Crossing section - Return journey time is not populated as expected on crossing page');
    }
        
}

function validateOutboundRouteItinerary(I,outboundrouteuppercase)
{
    if ( outboundrouteuppercase == I.grabTextFrom('//*[@id="routeoutbound"]')) {
        console.log('Itinerary section - Outbound route is populated as expected on crossing page');
    }
    else
    {
        console.log("Expected : " + outboundrouteuppercase);
        console.log("Actual : " + I.grabTextFrom('//*[@id="routeoutbound"]'));
        console.log('Itinerary section - Outbound route is not populated as expected on crossing page');
    }
}


function validateOutboundDateTimeOnItinerary(I,singlejourneydate,singlejourneytime)
{
    //Validate outbound date and time on Itinerary section

    if ( singlejourneydate == I.grabTextFrom('//*[@id="dateoutbound"]')) 
    {
        console.log('Itinerary section - Outbound journey date is populated as expected on crossing page');
    }
    else
    {
        console.log("Expected : " + singlejourneydate);
        console.log("Actual : " + I.grabTextFrom('//*[@id="dateoutbound"]'));
        console.log('Itinerary section - Outbound journey date is not populated as expected on crossing page');
    }

    let strdepartoutbound = I.grabTextFrom('//*[@id="departoutbound"]')

    if ( singlejourneytime == strdepartoutbound[1]) 
    {
        console.log('Itinerary section - Outbound journey time is populated as expected on crossing page');
    }
    else
    {
        console.log("Expected : " + singlejourneytime);
        console.log("Actual : " + strdepartoutbound[1]);
        console.log('Itinerary section - Outbound journey time is not populated as expected on crossing page');
    }
        
}

function validateOutboundPaxOnItinerary(I,singleadpax,singlechpax,singleinpax,flgOutboundChild,flgOutboundInfant)    
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

    if ( strPass == I.grabTextFrom('//*[@id="passengersoutbound"]')) 
    {
        console.log('Itinerary section - Outbound passengers details is populated as expected on crossing page');
    }
    else
    {
        console.log("Expected : " + strPass);
        console.log("Actual : " + I.grabTextFrom('//*[@id="passengersoutbound"]'));
        console.log('Itinerary section - Outbound passengers details is not populated as expected on crossing page');
    }

}

function validateOutboundPetOnItinerary(I,singlepet)
{
    let strPet = singlepet+' Pet';

    if ( strPet == I.grabTextFrom('//*[@id="petsoutbound"]')) 
    {
        console.log('Itinerary section - Outbound pet details is populated as expected on crossing page');
    }
    else
    {
        console.log("Expected : " + strPet);
        console.log("Actual : " + I.grabTextFrom('//*[@id="petsoutbound"]'));
        console.log('Itinerary section - Outbound pet details is not populated as expected on crossing page');
    }        

}

function validateReturnRouteItinerary(I,returnrouteuppercase)
{
    //Validate return route on Itinerary section
    if ( returnrouteuppercase == I.grabTextFrom('//*[@id="routereturn"]')) 
    {
        console.log('Itinerary section - Return route is populated as expected on crossing page');
    }
    else
    {
        console.log("Expected : " + returnrouteuppercase);
        console.log("Actual : " + I.grabTextFrom('//*[@id="routereturn"]'));
        console.log('Itinerary section - Return route is not populated as expected on crossing page');
    }
}

function validateReturnDateTimeOnItinerary(I,returnjourneydate,returnjourneytime)
{
    //Validate return date and time on Itinerary section
    if ( returnjourneydate == I.grabTextFrom('//*[@id="datereturn"]')) 
    {
        console.log('Itinerary section - Return journey date is populated as expected on crossing page');
    }
    else
    {
        console.log("Expected : " + returnjourneydate);
        console.log("Actual : " + I.grabTextFrom('//*[@id="datereturn"]'));
        console.log('Itinerary section - Return journey date is not populated as expected on crossing page');
    }

    let strdepartreturn = I.grabTextFrom('//*[@id="departreturn"]')

    if ( returnjourneytime == strdepartreturn[1]) 
    {
        console.log('Itinerary section - Return journey time is populated as expected on crossing page');
    }
    else
    {
        console.log("Expected : " + returnjourneytime);
        console.log("Actual : " + strdepartreturn[1]);
        console.log('Itinerary section - Return journey time is not populated as expected on crossing page');
    }

}


function validateReturnPaxOnItinerary(I,returnadpax,returnchpax,returninpax,flgReturnChild,flgReturnInfant)
    {

    let strretPass = returnadpax+' Adult';

        if(flgReturnChild)
        {
            strretPass = returnadpax+' Adult, '+returnchpax+' Child';

            if(flgOutboundInfant)
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


    if ( strretPass == I.grabTextFrom('//*[@id="passengersreturn"]')) 
    {
        console.log('Itinerary section - Return passengers details is populated as expected on crossing page');
    }
    else
    {
        console.log("Expected : " + strretPass);
        console.log("Actual : " + I.grabTextFrom('//*[@id="passengersreturn"]'));
        console.log('Itinerary section - Return passengers details is not populated as expected on crossing page');
    }

}

function validateReturnPetOnItinerary(I,returnpet)
{     
    let strretPet = returnpet+' Pet';

    if ( strretPet == I.grabTextFrom('//*[@id="petsreturn"]')) 
    {
        console.log('Itinerary section - Return pet details is populated as expected on crossing page');
    }
    else
    {
        console.log("Expected : " + strretPet);
        console.log("Actual : " + I.grabTextFrom('//*[@id="petsreturn"]'));
        console.log('Itinerary section - Return pet details is not populated as expected on crossing page');
    }       
}

function clickContinueButton(I)
{
    I.click('//*[@id="continue-button"]');
    I.wait(10);
}



function selectOutboundAndReturnClubLounge(I,strsinglesetextras,strreturnsetextras, 
    flagOutboundClubLounge,flagOutboundWiFi, flagOutboundPriorityBoarding, singleclublounge,
    flagReturnClubLounge, flagReturnWiFi, flagReturnPriorityBoarding, returnclublounge )    
{
//Club Lounge 

    //Click on Outbound - Club Lounge extra

    if( I.grabNumberOfVisibleElements('//button[@class="CabinComponent-cabin-viewUpgrade btn btn-big btn-pink text-transform-uppercase"]'))
    {
        I.click('//button[@class="CabinComponent-cabin-viewUpgrade btn btn-big btn-pink text-transform-uppercase"]');
        console.log('Club lounge - More information button is available and clicked');
        I.wait(2);

        //Outbound
        if(flagOutboundClubLounge)
        {
            if( I.grabNumberOfVisibleElements('//form[@class="padd-b-10"]//i[@class="selectboxit-arrow selectboxit-default-arrow"]'))
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
            let flg = 0
            flg = I.grabNumberOfVisibleElements('//div[@class="return"]//span[@name="12"]//i[@class="selectboxit-arrow selectboxit-default-arrow"]') 
            
            if(flg > 0)
            {
                pause();

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



function selectOutboundAndReturnWiFi(I,strsinglesetextras,strreturnsetextras, 
    flagOutboundClubLounge,flagOutboundWiFi, flagOutboundPriorityBoarding, singleWiFi,
    flagReturnClubLounge, flagReturnWiFi, flagReturnPriorityBoarding, returnWiFi)
{
//Click on Outbound - WiFi extra

if( I.grabNumberOfVisibleElements('//button[@class="WiFiComponent-addon-viewUpgrade btn btn-big btn-pink text-transform-uppercase"]'))
{
    I.click('//button[@class="WiFiComponent-addon-viewUpgrade btn btn-big btn-pink text-transform-uppercase"]');
    I.wait(2);
    console.log('WiFi - More information button is available and clicked');

    // Outbound
    if(flagOutboundWiFi)
    {
        if( I.grabNumberOfVisibleElements('//*[@id="extrasPageExtrasSection"]/div[4]/div/div[2]/div[2]/div/form/span/span/span[3]/i'))
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
        if( I.grabNumberOfVisibleElements('//*[@id="extrasPageExtrasSection"]/div[4]/div/div[2]/div[4]/div/form/span/span/span[3]/i'))
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



function selectOutboundAndReturnPriorityBoarding(I,strsinglesetextras,strreturnsetextras, 
    flagOutboundPriorityBoarding, flagReturnPriorityBoarding)

{

   if(I.grabNumberOfVisibleElements('//button[@class="PriorityBoardingComponent-addon-viewUpgrade btn btn-big btn-pink text-transform-uppercase"]'))
   {

       I.click('//button[@class="PriorityBoardingComponent-addon-viewUpgrade btn btn-big btn-pink text-transform-uppercase"]');
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



module.exports = {

    openHomePageURL,
    validateTitle,
    addValues,
    validateHeaderLinks,
    validateLanguages,
    validateRoutes,
    selectRoute,
    clickGoButton,
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
    validateReturnPetPax,
    selectReturnPetPax,
    clickQuoteButton,
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
    selectOutboundAndReturnClubLounge,
    selectOutboundAndReturnWiFi,
    selectOutboundAndReturnPriorityBoarding
}
