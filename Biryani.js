// Async Js ..........

// Given by Browser.....setTimeout, setTimer, Get Geolocation, Fetch Data etc....

// Make Biryani

// Boil Oil For 10 seconds

// Slice the Mutton

// Add mutton fry for 5 seconds

//Chop onion

// add onion fry for 5 seconds

boilOil();
console.log('Slice the Mutton');






function boilOil() {
    console.log('boiling Oil......');
    setTimeout(() => {

        console.log('done');



        setTimeout(() => {
            console.log('done');
            console.log('chop onion');
            console.log('fry onion now');
            setTimeout(() => {
                console.log('onion done');
                console.log('Biryani is Ready in Just 20 seconds!');
            }, 5000)


        }, 5000)
        console.log('fry mutton now');





    }, 10000)
}



