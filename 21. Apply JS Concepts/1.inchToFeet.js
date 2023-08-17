// 1
const dadaInch = 144;
const nanaInch = 60;

function inchToFeet(Inchs){
    const Feet  = Inchs / 12;
    return Feet;
}

const dadaFeet = inchToFeet(dadaInch);
console.log(dadaFeet, "ft");
const nanaFeet = inchToFeet(nanaInch);
console.log(nanaFeet, "ft");


// 2 

const dadiMeter = 1200;
const naniMeter = 21000;

function Meter_Kilometer(meter){
    const Kilometer = meter * 0.001;
    return Kilometer;
}

const dadiKilometer = Meter_Kilometer(dadiMeter);
console.log(dadiKilometer , 'Km');
const naniKilometer = Meter_Kilometer(naniMeter);
console.log(naniKilometer, 'Km');