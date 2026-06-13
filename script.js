// DOM SELECTION

let dropdown_1 = document.querySelector("#country_dropdown_1") ;
let dropdown_2 = document.querySelector("#country_dropdown_2") ;

let flag_1 = document.querySelector(".flag_1") ;
let flag_2 = document.querySelector(".flag_2") ;

let amount_input_1 = document.querySelector("#amount_1") ;
let amount_input_2 = document.querySelector("#amount_2") ;

let currency_name_1 = document.querySelector(".currency_name_1") ;
let currency_name_2 = document.querySelector(".currency_name_2") ;

//------------------------------------------------------------

//IMPORTING COUNTRY CODES FOR DROPDOWNS IN MAIN JS FILE
let option1 , option2 ;

Object.entries(currencyDict).forEach(([key, value]) =>
{
    option1 = document.createElement("option") ;
    option1.value = key ;
    option1.textContent = value ;
    dropdown_1.appendChild(option1) ;
}) ;

Object.entries(currencyDict).forEach(([key, value]) =>
{
    option2 = document.createElement("option") ;
    option2.value = key ;
    option2.textContent = value ;
    dropdown_2.appendChild(option2) ;
}) ;

dropdown_1.value = "USD" ;
currency_name_1.innerText = "USD - United States Dollar" ;

dropdown_2.value = "INR" ;
currency_name_2.innerText = "INR - Indian Rupee" ;

//------------------------------------------------------------

//Functions


//FLAG UPDATE FUNCTIONS
function updateFlag1( country_code )
{
    flag_1.setAttribute("src" , `https://flagcdn.com/w160/${country_code}.png`)
}

function updateFlag2( country_code )
{
    flag_2.setAttribute("src" , `https://flagcdn.com/w160/${country_code}.png`)
}


//FOR CONVERSION DISPLAYS
async function getFactor(from_code, to_code) {
    try {
        let result = await fetch(`https://api.currencyapi.com/v3/latest?apikey=cur_live_H49T7Wm3GRJhxjKOeNHfejQa5yJoIN9luXZTXwo7&currencies=${to_code}&base_currency=${from_code}`);
        result = await result.json();
        result = await result.data[to_code].value;
        return result;
    } catch (error) {
        console.error("Failed to fetch currency data:", error);
        alert("Could not load exchange rates. Please check your connection.");
        return null;
    }
}

async function updateCurrency2()
{
    let factor = await getFactor(dropdown_1.value , dropdown_2.value) ;
    if (factor !== null)
    {
        amount_input_2.value = factor * (amount_input_1.valueAsNumber) ;
    }
}

async function updateCurrency1()
{
    let factor = await getFactor(dropdown_2.value , dropdown_1.value) ;
    if (factor !== null)
    {
        amount_input_1.value = factor*(amount_input_2.valueAsNumber) ;
    }
}


//FOR TEXT
function updateText1(text)
{
    currency_name_1.innerText = text ;
}

function updateText2(text)
{
    currency_name_2.innerText = text ;
}


// EVENT FUNCTIONS
function selectDropdown1( eve )
{
    updateFlag1(flagDict[eve.target.value]) ;
    updateText1(eve.target[eve.target.selectedIndex].innerText) ;
    updateCurrency1() ;
}

function selectDropdown2( eve )
{
    updateFlag2(flagDict[eve.target.value]) ;
    updateText2(eve.target[eve.target.selectedIndex].innerText) ;
    updateCurrency2() ;
    
}

function inputChange1()
{
    updateCurrency2() ;
}

function inputChange2()
{
    updateCurrency1() ;
}

function debounce(func , delay)
{
    let timeoutId ;
    return function (...args)
    {
        clearTimeout(timeoutId) ;
        timeoutId = setTimeout(() =>
        {
            func.apply(this , args) ;
        } , delay) ;
    } ;
}

const debouncedInputChange1 = debounce(inputChange1, 500) ;

const debouncedInputChange2 = debounce(inputChange2, 500) ;

//------------------------------------------------------------

//EVENT LISTENERS


//FOR DROPDOWNS
dropdown_1.addEventListener("change" , selectDropdown1) ;

dropdown_2.addEventListener("change" , selectDropdown2) ;


//FOR INPUT CURRENCY
amount_1.addEventListener("input" , debouncedInputChange1) ;

amount_2.addEventListener("input" , debouncedInputChange2) ;

//------------------------------------------------------------