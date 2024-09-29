const allDogs = [
    {
        dogName: "Anthony",
        breed: "Terrier, Pit Bull/Mix",
        age: 6
    },
    {
        dogName: "Axel",
        breed: "Terrier, American Pit Bull/Mix",
        age: 2
    },
    {
        dogName: "Baluna",
        breed: "Terrier, Pit Bull/Mix",
        age: 0.5
    },
    {
        dogName: "Barry",
        breed: "Australian Cattle Dog/Mix",
        age: 0.8
    },
    {
        dogName: "Beanie",
        breed: "Terrier, American Pit Bull/Hound",
        age: 2
    },
    {
        dogName: "Bebe",
        breed: "Terrier, American Pit Bull/Mix",
        age: 6
    },
    {
        dogName: "Boo Boo",
        breed: "American Eskimo/Mix",
        age: 9
    },
    {
        dogName: "Bowser",
        breed: "Mastiff/Mix",
        age: 3
    },
    {
        dogName: "Brutus Xavier",
        breed: "Terrier, American Pit Bull/Mix",
        age: 5
    },
    {
        dogName: "Buddy",
        breed: "Terrier, Pit Bull/Mix",
        age: 2
    }
];
const findDogs = () => {
    const minAge = document.querySelector('#minAge').value;

    const selectedDogs = [];

    allDogs.forEach(dog => {
        if (dog.age >= minAge) {
            selectedDogs.push(`${dog.dogName} the ${dog.breed} is ${dog.age} years old.`);
        }
    });

    const dogList = document.querySelector('#dogList');

    dogList.innerHTML = '';

    if (selectedDogs.length > 0) {
        let listItems = [];
        selectedDogs.forEach(dogInfo => {
            listItems.push(`<li>${dogInfo}</li>`);
        });
        
        dogList.innerHTML = listItems.join('');
    } else {
        dogList.innerHTML = '<li>No dogs found matching the specified age.</li>';
    }
};
