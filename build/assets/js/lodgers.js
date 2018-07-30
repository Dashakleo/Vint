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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJsb2RnZXJzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcclxubGV0IGxvZGdlcnMgPSBbXTtcclxuXHJcblxyXG5jb25zdCBsb2FkTG9kZ2VycyA9ICgpID0+IHtcclxuICAgIGNvbnN0IGxvZGdlcnNKU09OID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2xvZGdlcnMnKTtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgbG9kZ2VycyA9IGxvZGdlcnNKU09OID8gSlNPTi5wYXJzZShsb2RnZXJzSlNPTikgOiBbXTtcclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICBsb2RnZXJzID0gW11cclxuICAgIH1cclxufTtcclxuXHJcbmNvbnN0IGdldExvZGdlcnMgPSAoKSA9PiBsb2RnZXJzO1xyXG5cclxuY29uc3Qgc2F2ZUxvZGdlcnMgPSAoKSA9PiB7XHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnbG9kZ2VycycsIEpTT04uc3RyaW5naWZ5KGxvZGdlcnMpKVxyXG59O1xyXG5cclxuY29uc3QgY3JlYXRlTG9kZ2VyID0gKGlucHV0RWxlbWVudHMpID0+IHtcclxuXHJcbiAgICBjb25zdCBmbG9vck5laWdoYm91cnMgPSBsb2RnZXJzLmZpbHRlcigobG9kZ2VyKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIGxvZGdlci5mbG9vciA9PT0gaW5wdXRFbGVtZW50cy5mbG9vck51bWJlci52YWx1ZVxyXG4gICAgfSk7XHJcbiAgICBcclxuICAgIGlmIChmbG9vck5laWdoYm91cnMubGVuZ3RoID49IDMpIHtcclxuICAgICAgICBhbGVydCgn0K3RgtCw0LYg0LfQsNC90Y/RgicpO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcblxyXG4gICAgbGV0IG90aGVyID0gW107XHJcbiAgICBpbnB1dEVsZW1lbnRzLm90aGVyLmZvckVhY2goKHZhbHVlKSA9PiB7XHJcbiAgICAgICAgaWYgKHZhbHVlLmNoZWNrZWQpIHtcclxuICAgICAgICAgICAgb3RoZXIucHVzaCh2YWx1ZS52YWx1ZSlcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuICAgIGxvZGdlcnMucHVzaCh7XHJcbiAgICAgICAgbmFtZTogaW5wdXRFbGVtZW50cy5uYW1lLnZhbHVlLFxyXG4gICAgICAgIGdlbmRlcjogaW5wdXRFbGVtZW50cy5tYWxlLmNoZWNrZWQgPyAnbWFsZScgOiAnZmVtYWxlJyxcclxuICAgICAgICBmbG9vcjogaW5wdXRFbGVtZW50cy5mbG9vck51bWJlci52YWx1ZSxcclxuICAgICAgICBmbG9vck9yZGVyOiBmbG9vck5laWdoYm91cnMubGVuZ3RoLFxyXG4gICAgICAgIHJvb21zOiBpbnB1dEVsZW1lbnRzLnJvb21zLnZhbHVlLFxyXG4gICAgICAgIG90aGVyOiBvdGhlcixcclxuICAgICAgICBjb3VudDogaW5wdXRFbGVtZW50cy5sb2RnZXJzQ291bnQudmFsdWVcclxuICAgIH0pO1xyXG5cclxuICAgIC8v0KDQtdGB0LXRgiDQv9C+0LvQtdC5INC/0L7RgdC70LUg0YPRgdC/0LXRiNC90L7QuSDQt9Cw0L/QuNGB0Lgg0L3QvtCy0L7Qs9C+INC20LjQu9GM0YbQsFxyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FkZFJlc2V0JykuY2xpY2soKTtcclxuICAgIHNhdmVMb2RnZXJzKCk7XHJcblxyXG59O1xyXG5cclxuZXhwb3J0IHtsb2FkTG9kZ2Vycywgc2F2ZUxvZGdlcnMsIGNyZWF0ZUxvZGdlciwgZ2V0TG9kZ2Vyc30iXSwiZmlsZSI6ImxvZGdlcnMuanMifQ==
