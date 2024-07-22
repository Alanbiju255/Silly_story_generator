
const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

const xOptions = ['Willy the Goblin', 'Big Daddy', 'Father Christmas'];
const yOptions = ['the soup kitchen', 'Disneyland', 'the White House'];
const zOptions = ['spontaneously combusted', 'melted into a puddle on the sidewalk', 'turned into a slug and crawled away'];

function randomValueFromArray(array) {
    const random = Math.floor(Math.random() * array.length);
    return array[random];
}

randomize.addEventListener('click', result);

function result() {
    if (customName.value !== '') {
        const name = customName.value;
        const x = randomValueFromArray(xOptions);
        const y = randomValueFromArray(yOptions);
        const z = randomValueFromArray(zOptions);
        let weight, temperature;
        if (document.getElementById("uk").checked) {
            weight = Math.round(300 * 0.0714286); // convert pounds to stones
            temperature = Math.round(94 - 32 * 5 / 9); // convert Fahrenheit to Celsius
        } else {
            weight = Math.round(300);
            temperature = Math.round(94);
        }
        story.textContent = `It was ${temperature} degrees outside, so ${name} went for a walk. When they got to ${y}, they stared in horror for a few moments, then ${z}. Bob saw the whole thing, but was not surprised — ${name} weighs ${weight} ${document.getElementById("uk").checked ? 'stones' : 'pounds'}, and it was a hot day.`;
        story.style.visibility = 'visible';
    } else {
        alert('Please enter a custom name');
    }
}


