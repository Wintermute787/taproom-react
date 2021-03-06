import React from 'react'
import Keg from './Keg'
import Deschutes1 from "./assets/Deschutes1.png";
import Allagash1 from "./assets/allagash1.jpg";
import Coniston1 from "./assets/coniston1.png";
import Stone1 from "./assets/Stone1.png";
import Boulevard1 from "./assets/Boulevard1.jpg";
import newBelgium1 from "./assets/newBelgium1.jpg";
import Grid from './Grid.css'

const masterKeg = [
    {
        name: "House Pilsner",
        brand: "Deschutes Black Butte",
        alc: "5.26%",
        description: "Notes of rich chocolate and coffee, a luscious creaminess and a roasted finish.",
        image: Deschutes1
    },
    {
        name: "Allagash White",
        brand: "Allagash",
        alc: "5.2%",
        description: "Our interpretation of a Belgian-style wheat beer is brewed with oats, malted wheat, and unmalted raw wheat for a hazy, “white” appearance.",
        image: Allagash1
    },
    {
        name: "Thurstein Pilsner",
        brand: "Coniston",
        alc: "5.8%",
        description: "his Pilsner Style top fermented Lager uses 100% Hallertau Hersbrucker leaf hops from Southern Germany, Pale malt and wheat to give an authentic crisp, clean, Continental style beer. ",
        image: Coniston1
    },
    {
        name: "Stone Cali-Beglgique",
        brand: "Stone Brewing",
        alc: "6.9%",
        description: "Stone Cali-Belgique IPA features a complex and surprising combination of flavors, but behind the fancy title is the simply delicious Stone IPA. ",
        image: Stone1
    },
    {
        name: "Tank 7",
        brand: "Boulevard",
        alc: "8.5%",
        description: "With its balance, carbonation, and complex flavor profile, Tank 7 is one of the ultimate food-pairing beers in existence.",
        image: Boulevard1
    },
    {
        name: "Fat Tire",
        brand: "New Belgium",
        alc: "5.2%",
        description: "Fat Tire Amber is the easy-drinking Amber Ale born in Colorado from New Belgium Brewing Company, the 100% employee-owned leader in environmental stewardship. ",
        image: newBelgium1
    }
];

export default function StaticKegList() {
    return(
        <div className='wrapper'>
            {masterKeg.map((keg)=>
                <Keg className='wrapper'
                     name={keg.name}
                    brand={keg.brand}
                    alc={keg.alc}
                    description={keg.description}
                    image={keg.image}
                    key={keg.id}/>
            )}
        </div>
    )
}
