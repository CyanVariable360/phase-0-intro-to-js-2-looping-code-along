// Code your solutions in this file
const names = ["Guadalupe","Ollie","Aki"];
const eventName = "surprise"

function writeCards(names, eventName) {
    const letters = [];
    for(let i = 0; i < names.length; i++)
    {
        letters.push(`Thank you, ${names[i]}, for the wonderful ${eventName} gift!`);
    }
    return letters;
}

function countDown(num = 10)
{
    while(num >= 0)
    {
        console.log(num--);
    }
    return num;
}



