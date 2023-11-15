


var topics = ['HTML', 'CSS', 'Git', 'JavaScript'];

var randomTopic = topics[Math.floor(Math.random() * topics.length)]; /*dont understand but its a randomizer*/

/*notice how you wrap up the code in a function*/

function listTopics()
{
    /* iteration using a for loop on an array to then output to console*/
    for (var    x = 0;              /* sets var to 0, or first in the array*/
                x < topics.length;  /* if x is less than the length of the shapes array then*/
                x++                 /* iterate by one  ------ this all is supposed to go on oneline*/
        ) 
            {
            console.log(topics[x]);
            }
}

/*and again wrapped the code up in a function, 'declaring' it */

function selectTopic()
{
if (topics === 'HTML') {
 console.log("Let's study HTML!");
} else if (randomTopic === 'CSS') {
 console.log("Let's study CSS!");
} else if (randomTopic === 'Git') {
 console.log("Let's study Git!");
} else if (randomTopic === 'JavaScript') {
 console.log("Let's study JavaScript!");
} else {
 console.log('Please try again!');
}
}
console.log('Here are the topics we learned through Prework:');
listTopics();
console.log('Which topic should we study first?');
selectTopic();