/*Program takes 3 random numbers on startup and generates a random message from 3 components
format: "You found a "+2" "Cloak" of "Wisdom"!"
*/
const mPart1 = ["+0", "+1", "+2", "+3", "+4", "+5"]; 
const mPart2 = ["Amulet", "Helm", "Ring", "Cloak", "Bracelet", "Long Sword", "Mace", "Composite Bow", "Scythe", "Dagger", "Brass Knuckles", "Staff"];
const mPart3 = ["Charisma", "Strength", "Dexterity", "Intelligence", "Wisdom", "Fire", "Frost", "Stamina", "Fortitude", "Beguiling", "Thorns", "Rending", "Mending", "Bleeding"];

//generate random number for each component
let ranNums = [];
function genNums()
{
    ranNums = [Math.floor(Math.random() * 6), Math.floor(Math.random() * 12), Math.floor(Math.random() * 14)];
}

function genMessage()
{
    genNums();
    console.log(`You found a ${mPart1[ranNums[0]]} ${mPart2[ranNums[1]]} of ${mPart3[ranNums[2]]}!`);
}

genMessage();