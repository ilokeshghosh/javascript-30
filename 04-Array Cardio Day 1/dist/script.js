// Get your shorts on - this is an array workout!
// ## Array Cardio Day 1

// Some data we can work with

const inventors = [
    { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
    { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
    { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
    { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
    { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
    { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
    { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
    { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
    { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
    { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
    { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
    { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
];

const people = [
    'Bernhard, Sandra', 'Bethea, Erin', 'Becker, Carl', 'Bentsen, Lloyd', 'Beckett, Samuel', 'Blake, William', 'Berger, Ric', 'Beddoes, Mick', 'Beethoven, Ludwig',
    'Belloc, Hilaire', 'Begin, Menachem', 'Bellow, Saul', 'Benchley, Robert', 'Blair, Robert', 'Benenson, Peter', 'Benjamin, Walter', 'Berlin, Irving',
    'Benn, Tony', 'Benson, Leana', 'Bent, Silas', 'Berle, Milton', 'Berry, Halle', 'Biko, Steve', 'Beck, Glenn', 'Bergman, Ingmar', 'Black, Elk', 'Berio, Luciano',
    'Berne, Eric', 'Berra, Yogi', 'Berry, Wendell', 'Bevan, Aneurin', 'Ben-Gurion, David', 'Bevel, Ken', 'Biden, Joseph', 'Bennington, Chester', 'Bierce, Ambrose',
    'Billings, Josh', 'Birrell, Augustine', 'Blair, Tony', 'Beecher, Henry', 'Biondo, Frank'
];



// Array.prototype.filter()
// 1. Filter the list of inventors for those who were born in the 1500's
const filteredInventors = inventors.filter((data) => {
    return data.year >= 1500 && data.year <= 1599;
})


const t_body = document.querySelector('.t_body');


for (let inventor of filteredInventors) {
    const tr = document.createElement('tr');
    tr.innerHTML = `<td class='text-center'>${inventor['first']}</td> <td class='text-center' >${inventor['last']}</td> <td class='text-center'>${inventor['year']} - ${inventor['passed']}</td>`
    t_body.appendChild(tr);


}


// Array.prototype.map()
// 2. Give us an array of the inventors first and last names
const mappedInventors = inventors.map((inventor) => {
    // return `${inventor.first} ${inventor.last}`;

    return {
        'first name': inventor.first,
        'last name': inventor.last
    };

})

const t_body2 = document.querySelector('.t_body_2');


// console.table(mappedInventors);
for (let inventor of mappedInventors) {
    const tr2 = document.createElement('tr');
    for (let single_inventor in inventor) {
        tr2.innerHTML = `<td class='text-center'>${inventor['first name']}</td> <td class='text-center'>${inventor['last name']}</td>`
    }
    t_body2.appendChild(tr2);
}

// Array.prototype.sort()
// 3. Sort the inventors by birthdate, oldest to youngest
const sortedInventors = inventors.sort(function (a, b) {

    return a.year > b.year ? 1 : -1;

})


const t_body_3 = document.querySelector('.t_body_3');


for (let obj of sortedInventors) {
    let tr3 = document.createElement('tr');
    tr3.innerHTML = `<td class='text-center'>${obj['first']}</td> <td class='text-center'>${obj['last']}</td> <td class='text-center'>${obj['year']}</td> <td class='text-center'>${obj['passed']}</td>`
    t_body_3.appendChild(tr3);

}


// Array.prototype.reduce()
// 4. How many years did all the inventors live all together?
const total = inventors.reduce((acc, currVal) => {
    return acc + (currVal.passed - currVal.year);
}, 0)

const q4 = document.querySelector('.q_4');
const h3 = document.createElement('h3');
h3.innerHTML = total
q4.appendChild(h3);


// 5. Sort the inventors by years lived
const livedSorted = inventors.sort((a, b) => {
    const a_lived = a.passed - a.year
    const b_lived = b.passed - b.year
    return a_lived > b_lived ? -1 : 1;
}).map((a) => {
    const a_lived = a.passed - a.year;
    return {
        first: `${a['first']}`,
        last: `${a['last']}`,
        year: `${a['year']}`,
        passed: `${a['passed']}`,
        year_lived: `${a_lived}`
    }
})

const t_body_4 = document.querySelector('.t_body_4');
for (let obj of livedSorted) {
    let tr4 = document.createElement('tr');
    tr4.innerHTML = `<td class='text-center'>${obj['first']}</td><td class='text-center'>${obj['last']}</td><td class='text-center'>${obj['year']}</td><td class='text-center'>${obj['passed']}</td><td class='text-center'>${obj['year_lived']}</td>`
    t_body_4.appendChild(tr4);
}


// 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
// https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris

const category = document.querySelector('.mw-category');

// const links = document.querySelectorAll('a');

// converting to array
// const links = Array.from(document.querySelectorAll('a'));

// converting to array  by spread
const links = [...document.querySelectorAll('a')];
const de = links
    .map((link) => link.textContent)
    .filter((linkText) => linkText.includes(' de '))

// console.table(de);



// 7. sort Exercise
// Sort the people alphabetically by last name
const sortedLastName = people.sort((a, b) => {
    const a_last = a.split(', ')[1];
    const b_last = b.split(', ')[1];

    if (a_last > b_last) {
        return 1;
    } else if (a_last < b_last) {
        return -1;
    }
    return 0;

}).map((a) => {
    return {
        first: a.split(', ')[0],
        last: a.split(', ')[1]
    }
});
// console.log(sortedLastName);
const t_body_7 = document.querySelector('.t_body_7');
let index = 1;
for (let obj of sortedLastName) {
    const tr7 = document.createElement('tr');
    tr7.innerHTML = `<td class='text-center'>${index}</td><td class='text-center'>${obj['first']}</td><td class='text-center'>${obj['last']}</td>`
    t_body_7.appendChild(tr7);
    index++;

}



// 8. Reduce Exercise
// Sum up the instances of each of these
const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck'];

const totalData = data.reduce(function (a, b) {
    if (!a[b]) {
        a[b] = 0;
    }
    a[b]++;

    return a;

}, {})


index = 1;
const t_body_8 = document.querySelector('.t_body_8');
const keys = Object.keys(totalData);

keys.forEach(key => {
    const tr8 = document.createElement('tr');
    tr8.innerHTML = `<td class='text-center'>${index}</td><td class='text-center'>${key}</td><td class='text-center'>${totalData[key]}</td>`
    t_body_8.appendChild(tr8)
    index++;
});


