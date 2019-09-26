const _ = require('underscore');

const seansClassAug19 = [
    'Alonzo',
    'Chris Hill',
    'Alazar',
    'Zach',
    'Chris Kemp',
    'Daniel',
    'David',
    'Felipe',
    'Gil',
    'Joey',
    'Josh',
    'Kate',
    'Kobi',
    'Kyra',
    'Mary Ella',
    'Michelle',
    'Mulk',
    'Nep',
    'Prescott',
    'Puja',
    'Remy',
    'Rhonda',
    'Sirisha',
    'William'
]
//set up my global variable objects here:
//this will eventually be in a database

// const rootVegetables = [["onion","Too many tears."],
// ["ginger","Too spicy."],
// ["beet","Too earthy."],
// ["carrot","What's up Doc."],
// ["fennel","Too much licorice."],
// ["turnip","Too stupid."],
// ["sweet potato","Too much beta-carotene."],
// ["garlic","Can't handle the bad breath."],
// ["celery","Too juicy."],
// ["tumeric","Too yellow."],
// ["potato","Too much vision."],
// ["rutabega","Not in to curling"],
// ["shallot","Too bulbous."],
// ["yam","You are what you are, but you're not a yam."],
// ["yuca","Too starchy."],
// ["jicama","You just can't pronouce it."],
// ["maca","Too hip."],
// ["dandelion","Too weedy."],
// ["burdock","Got Gout."],
// ["daikon","Too radishy."],
// ["sunchoke","Too tubery"],
// ["artichoke","Too layered."],
// ["arrowroot","Too starchy."]];

// const rodents = [["vole","Too small"],
// ["mole","Too much digging."],
// ["shrew","You aren't a shrew."],
// ["squirrel","Too nutty."],
// ["rat","Just No."],
// ["skunk	","Smells too good."],
// ["groundhog","Too repetitive."],
// ["woodchuck","Too much wood."],
// ["beaver","Too much teeth."],
// ["hamster","Too much wheel."],
// ["guinea pig","Too much squeek."],
// ["chipmunk","Too polite."],
// ["capybara","Just too big."],
// ["prairie dog","Too much plague."],
// ["naked mole-rat","Not enough insight."],
// ["gopher","I'm not all right."],
// ["doormouse","Too much tea."],
// ["porcupine","Too pokey."],
// ["hedgehog","Too greedy."],
// ["gerbil","Too much tail."],
// ["rabbit","Too much time."],
// ["chinchilla","Too soft."],
// ["lemming","Too self destructive."],
// ["marmot","What the heck is a Marmot?"],
// ["gundi","Not enough enlightenment."],
// ["R.O.U.S","Inconceivable."],
// ["lemur","Hey Freak...Too much King Julian."],
// ["opossum","Too cat-like?"],
// ["aardvark","Not enough ants."]];


function generateRvr(req,res) {
    // console.log["Hello"];

    // let rRandom = Math.floor(Math.random() * rodents.length);
    // let vRandom = Math.floor(Math.random() * rootVegetables.length);
    let sRandom = Math.floor(Math.random() * seansClassAug19.length);

//RGB random gerator...but the inverse color is too matchy-matchy near 125...
    let rRed = Math.floor(Math.random()*256);
    let rGreen = Math.floor(Math.random()*256);
    let rBlue = Math.floor(Math.random()*256);

//hex random, offset this by 4M??
    let rColor = Math.floor(Math.random() * (256 ** 3));
    // console.log(rColor);
    // console.log("my hex color", rColor.toString(16));

    let hRColor = rColor.toString(16);
    console.log(hRColor);
    hRColor = hRColor.padStart(6, '0');
    console.log(hRColor);

    invColor = (rColor + 10000000) % (256 ** 3);
    // console.log("my inverse color is", invColor.toString(16));
    let hIColor = invColor.toString(16);

    console.log(hIColor);
    hIColor = hIColor.padStart(6, '0')
    console.log(hIColor);

    // console.log(rRandom, vRandom);
    // console.log(`${rootVegetables[vRandom][0]}-${rodents[rRandom][0]}`);
    const localVars = {locals :{
        student:seansClassAug19[sRandom],
        // veggie:rootVegetables[vRandom][0],
        // rodent:rodent = rodents[rRandom][0],
        // reRootQ: _.sample([rootVegetables[vRandom][1],rodents[rRandom][1]]),
        redColor:rRed,
        greenColor:rGreen,
        blueColor:rBlue,
        redinv:(255-rRed),
        greeninv: (255-rGreen),
        blueinv: (255-rBlue),
        hRColor: hRColor,
        hIColor : hIColor
    }}
    // const veggie = rootVegetables[vRandom][0];
    // const rodent = rodents[rRandom][0];
    // const reRootQ = _.sample([rootVegetables[vRandom][1],rodents[rRandom][1]]);
    // console.log("the question is", reRootQ);

    // res.status(200).send["Not finished yet"];
    res.render('rvr',localVars);

}

module.exports = generateRvr;