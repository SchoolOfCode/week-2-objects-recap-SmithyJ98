const myHouse = {
    stories: "2",
    parking: false,
    bedrooms: "2",
    garden: true,
    EnergyRating: "D",
  };

  const myCar = {
    colour: "red",
    wheels: "4",
    powerSteering: true,
    seats: "2",
    MilesPerGallon: "20",
  }

  const myFavouriteFilm = {
    title: "The Dark Knight",
    releaseDate: "2008",
    leadActor: "Christian Bale",
  }

  let person = {
    name: "Ben",
    likesChocolate: true,
  };

  console.log(person.likesChocolate)

  if (person.likesChocolate==true) {
    console.log(`${person.name} loves chocolate`);
  } else {
    console.log(`${person.name} hates chocolate`);
  }

  let desiredPleasantry = "smallTalk";

let bensPhrases = {
  greeting: "Well hello there!",
  farewell: "See you in another life, brother",
  smallTalk: "Warm today, isn't it...",
};

console.log(bensPhrases[`smallTalk`])
console.log(bensPhrases[desiredPleasantry])

let me = {
    firstName: "firstName",
    lastName: "lastName",
    isBootcamper: false,
  };

  me.isBootcamper = true;
  console.log(me);

  let communication = {
    success: true,
    payload: {
      message: {
        text: "Please send biscuits!",
        priority: "URGENT",
      },
    },
  };

  //Using dot notation, read the text from the communication object and store it in a variable.
  //If the priority is urgent, then console.log the variable, else do nothing.

  let comText = communication.payload.message
  
  if (communication.payload.priority = "URGENT") {
    console.log(comText);
  }
  

