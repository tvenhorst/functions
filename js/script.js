let myStr = "dit is een variabele van het datatype string"; //dit is een variabele van het datatype strin omdat het text is
let myInt = 3; //dit is een variabele van het datatype omdat het numbers zijn deze is te zien op regel 

//Waarom staat er let voor de variabelen? dat je het niet opnieuw mag declareren

function getName(naam){ // regel 17

    // vul in wat naam is: naam is de Parameter vul je antwoord in op de lijn, je hebt de eerste letter al gekregen
    // vul in: naam heeft de waarde T.venhorst de waarde noemen we een Argument

   alert(naam); //dit toont een pop-up op het scherm met de tekst "T.Venhorst" deze tekst staan op regel 17 van de HTML
}

function hideMe(){ // ja, je kan de naam van de functie veranderen 
    document.getElementById("hide").style.display = "none"; 
    document.getElementById("show").style.display = "block"; 
    // de image veranderd en wordt aangeroepen in regel 23

function show(){ //De naam van de functie veranderd in regel 25
    document.getElementById("hide").style.display = "block"; // getElementById zoekt in de HTML voor elk HTML-element
    document.getElementById("show").style.display = "none";     
    // in deze functie komt de image tevoorschijn en blocked de anderen image zodat die niet meer te zien is
}

function rekenen(getal){ // <button onclick="rekenen(5);">Bereken, klik op mij!</button>

    let antwoord = myInt + getal; //de waarde van Myint function rekenen(5) het getal komt van de som van de parameter doorgegeven door de HTML met myInt

    document.querySelector(".som").innerHTML = antwoord;  //  querySelector selecteert alle html-elementen met een bijbehorende naam
    
    // De waarde verkregen uit de som wordt vervangen door alle html-elementen met een bepaalde naam (met behulp van querySelector)

    //verander de waarde van myInt (zorg dat je een getal gebruikt) en refresh de pagina, wat gebeurd er?
    //probeer ook eens de + in een - te veranderen of in een * als waarde van de variabele antwoord (regel 28), zie je wat er gebeurt?
}

function setColor(element, kleur, size){ // deze functie worft aangeroepen in lijn 44

    element.style.color = kleur; // waar komt de waarde van element vandaan van de HTML en de waarde van de kleur ook van de HTML
    element.style.fontSize = size; // de waarde van size komt ook van de HTML

    // deze funcite veranderd de kleur en de pixels van de letters
}

getName(myStr);
// het geeft een pop-up met "dit is een variabele van het datatype string" het gebeurd waneer je op de console drukt
// verander de waarde van myStr en kijk wat er dan gebeurt wat gebeurd er de pop-up veranderd 