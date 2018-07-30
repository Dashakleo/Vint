'use strict';
let lodgers = [];


const loadLodgers = () => {
    const lodgersJSON = localStorage.getItem('lodgers');
    try {
        lodgers = lodgersJSON ? JSON.parse(lodgersJSON) : [];
    } catch (e) {
        lodgers = []
    }
};

const getLodgers = () => lodgers;

const saveLodgers = () => {
    localStorage.setItem('lodgers', JSON.stringify(lodgers))
};

const createLodger = (inputElements) => {

    const floorNeighbours = lodgers.filter((lodger) => {
        return lodger.floor === inputElements.floorNumber.value
    });

    if (!inputElements.floorNumber.value) {
        alert('Введите этаж');
        return;
    }
    if (floorNeighbours.length >= 3) {
        alert('Этаж занят');
        return;
    }


    let other = [];
    inputElements.other.forEach((value) => {
        if (value.checked) {
            other.push(value.value)
        }
    });
    lodgers.push({
        name: inputElements.name.value,
        gender: inputElements.male.checked ? 'male' : 'female',
        floor: inputElements.floorNumber.value,
        floorOrder: floorNeighbours.length,
        rooms: inputElements.rooms.value,
        other: other,
        count: inputElements.lodgersCount.value
    });

    //Ресет полей после успешной записи нового жильца
    document.querySelector('#addReset').click();
    saveLodgers();

};

export {loadLodgers, saveLodgers, createLodger, getLodgers}