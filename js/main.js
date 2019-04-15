// You have volunteered your time to a local political candidate, Elizabeth Sanger, who wants to become a US representative in Congress for your district. Unfortunately, the team discovered that you're a software developer, so they have begged you to build an application that lets them track volunteers, and store information about Elizabeth and her campaign.

// Your job is to define the different objects and arrays, their structure, and the corresponding properties for each, to represent the following information about Elizabeth's campaign.

congressionalDistrict = {
    districtNo: 5
};

platforms = {
    taxes: "increase",
    jobs: ["civil servants", "teachers"],
    infrastructure: "public transportation",
    healthCare: false,
    crimeEnforcement: "moderate"
};

donations = {
    urlDonations: "www.givehermoney.com"
};

calendarOfEvents = {
    events: {
        April: [],
        May: [],
        June: []
    }
};

volunteer = {
    name: "Cavy Arnold",
    address: "1111 Dog Way",
    email: "cavybaby@gmail.com",
    phoneNumber: "555-1111",
    availability: ["Monday", "Wednesday", "Saturday"],
    activites: ["licking", "smiling", "tail wagging"]
};

biography = {
    bio: "lover of dogs and cats alike"
};

imageGallery = {
    headShot: [],
    family: [],
    constituents: [],
};

missionStatement = {
    mission: "will pet all dogs"
};

registerToVote = {
    urlToVote: "www.voteintn.com"
};


// After you have defined all the objects for representing the data about Elizabeth's campaign, write a corresponding function for each one whose purpose is to change the state of the object. Then use your functions to modify the existing data.

// Things to think about.

// Am I modifying an array? Then the function argument should be added to the target array with the push() method.
// Am I modifying an object? Then I should pass both the key name to be modified, and its corresponding value.
// This challenge is for you to practice writing functions, so the more you can write, the better. It helps make neural connections in your brain at this point since you're still building your software vocabulary.

//Changed value number
function changeDistrict (number) {
    console.log("change district", number)
};
changeDistrict(7);


//Changed boolean
function changePlatforms (health) {
    console.log("health care:", platforms.healthCare = health);
};
changePlatforms(true)


//Added to an empty array
function addEvents (month, activity) {
    calendarOfEvents.events[month].push(activity)
}
addEvents("April", "walk dogs");
addEvents("April", "pet dogs");
addEvents("June", "look at dogs");
addEvents("May", "look for more dogs to pet");
addEvents("May", "make dog friends")
console.log(calendarOfEvents.events);


//The following is all related
//Added key to exsiting object as an array
function addVolunteerSkill (newSkill) {
    volunteer[newSkill] = []
};

//Listing key and value pairs
addVolunteerSkill("skills");
for (key in volunteer) {
    console.log(key, ":", volunteer[key]);
;}

//Function to add to empty array with new key
function pushSkills (newSkill) {
    volunteer.skills.push(newSkill)
};

pushSkills("loving");
pushSkills("sleeping");