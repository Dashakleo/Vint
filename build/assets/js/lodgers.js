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

    const floorNeighbours = lodgers.filter((lodger)=> {
        return lodger.floor === inputElements.floorNumber.value
    });

    if (!inputElements.floorNumber.value)  {
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
        gender: inputElements.male.checked? 'male' : 'female',
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJsb2RnZXJzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcclxubGV0IGxvZGdlcnMgPSBbXTtcclxuXHJcblxyXG5jb25zdCBsb2FkTG9kZ2VycyA9ICgpID0+IHtcclxuICAgIGNvbnN0IGxvZGdlcnNKU09OID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2xvZGdlcnMnKTtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgbG9kZ2VycyA9IGxvZGdlcnNKU09OID8gSlNPTi5wYXJzZShsb2RnZXJzSlNPTikgOiBbXTtcclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICBsb2RnZXJzID0gW11cclxuICAgIH1cclxufTtcclxuXHJcbmNvbnN0IGdldExvZGdlcnMgPSAoKSA9PiBsb2RnZXJzO1xyXG5cclxuY29uc3Qgc2F2ZUxvZGdlcnMgPSAoKSA9PiB7XHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnbG9kZ2VycycsIEpTT04uc3RyaW5naWZ5KGxvZGdlcnMpKVxyXG59O1xyXG5cclxuY29uc3QgY3JlYXRlTG9kZ2VyID0gKGlucHV0RWxlbWVudHMpID0+IHtcclxuXHJcbiAgICBjb25zdCBmbG9vck5laWdoYm91cnMgPSBsb2RnZXJzLmZpbHRlcigobG9kZ2VyKT0+IHtcclxuICAgICAgICByZXR1cm4gbG9kZ2VyLmZsb29yID09PSBpbnB1dEVsZW1lbnRzLmZsb29yTnVtYmVyLnZhbHVlXHJcbiAgICB9KTtcclxuXHJcbiAgICBpZiAoIWlucHV0RWxlbWVudHMuZmxvb3JOdW1iZXIudmFsdWUpICB7XHJcbiAgICAgICAgYWxlcnQoJ9CS0LLQtdC00LjRgtC1INGN0YLQsNC2Jyk7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgaWYgKGZsb29yTmVpZ2hib3Vycy5sZW5ndGggPj0gMykge1xyXG4gICAgICAgIGFsZXJ0KCfQrdGC0LDQtiDQt9Cw0L3Rj9GCJyk7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBsZXQgb3RoZXIgPSBbXTtcclxuICAgIGlucHV0RWxlbWVudHMub3RoZXIuZm9yRWFjaCgodmFsdWUpID0+IHtcclxuICAgICAgICBpZiAodmFsdWUuY2hlY2tlZCkge1xyXG4gICAgICAgICAgICBvdGhlci5wdXNoKHZhbHVlLnZhbHVlKVxyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgbG9kZ2Vycy5wdXNoKHtcclxuICAgICAgICBuYW1lOiBpbnB1dEVsZW1lbnRzLm5hbWUudmFsdWUsXHJcbiAgICAgICAgZ2VuZGVyOiBpbnB1dEVsZW1lbnRzLm1hbGUuY2hlY2tlZD8gJ21hbGUnIDogJ2ZlbWFsZScsXHJcbiAgICAgICAgZmxvb3I6IGlucHV0RWxlbWVudHMuZmxvb3JOdW1iZXIudmFsdWUsXHJcbiAgICAgICAgZmxvb3JPcmRlcjogZmxvb3JOZWlnaGJvdXJzLmxlbmd0aCxcclxuICAgICAgICByb29tczogaW5wdXRFbGVtZW50cy5yb29tcy52YWx1ZSxcclxuICAgICAgICBvdGhlcjogb3RoZXIsXHJcbiAgICAgICAgY291bnQ6IGlucHV0RWxlbWVudHMubG9kZ2Vyc0NvdW50LnZhbHVlXHJcbiAgICB9KTtcclxuXHJcbiAgICAvL9Cg0LXRgdC10YIg0L/QvtC70LXQuSDQv9C+0YHQu9C1INGD0YHQv9C10YjQvdC+0Lkg0LfQsNC/0LjRgdC4INC90L7QstC+0LPQviDQttC40LvRjNGG0LBcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhZGRSZXNldCcpLmNsaWNrKCk7XHJcbiAgICBzYXZlTG9kZ2VycygpO1xyXG5cclxufTtcclxuXHJcbmV4cG9ydCB7bG9hZExvZGdlcnMsIHNhdmVMb2RnZXJzLCBjcmVhdGVMb2RnZXIsIGdldExvZGdlcnN9Il0sImZpbGUiOiJsb2RnZXJzLmpzIn0=
