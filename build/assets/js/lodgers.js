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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJsb2RnZXJzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcclxubGV0IGxvZGdlcnMgPSBbXTtcclxuXHJcblxyXG5jb25zdCBsb2FkTG9kZ2VycyA9ICgpID0+IHtcclxuICAgIGNvbnN0IGxvZGdlcnNKU09OID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2xvZGdlcnMnKTtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgbG9kZ2VycyA9IGxvZGdlcnNKU09OID8gSlNPTi5wYXJzZShsb2RnZXJzSlNPTikgOiBbXTtcclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICBsb2RnZXJzID0gW11cclxuICAgIH1cclxufTtcclxuXHJcbmNvbnN0IGdldExvZGdlcnMgPSAoKSA9PiBsb2RnZXJzO1xyXG5cclxuY29uc3Qgc2F2ZUxvZGdlcnMgPSAoKSA9PiB7XHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnbG9kZ2VycycsIEpTT04uc3RyaW5naWZ5KGxvZGdlcnMpKVxyXG59O1xyXG5cclxuY29uc3QgY3JlYXRlTG9kZ2VyID0gKGlucHV0RWxlbWVudHMpID0+IHtcclxuXHJcbiAgICBjb25zdCBmbG9vck5laWdoYm91cnMgPSBsb2RnZXJzLmZpbHRlcigobG9kZ2VyKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIGxvZGdlci5mbG9vciA9PT0gaW5wdXRFbGVtZW50cy5mbG9vck51bWJlci52YWx1ZVxyXG4gICAgfSk7XHJcblxyXG4gICAgaWYgKCFpbnB1dEVsZW1lbnRzLmZsb29yTnVtYmVyLnZhbHVlKSB7XHJcbiAgICAgICAgYWxlcnQoJ9CS0LLQtdC00LjRgtC1INGN0YLQsNC2Jyk7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgaWYgKGZsb29yTmVpZ2hib3Vycy5sZW5ndGggPj0gMykge1xyXG4gICAgICAgIGFsZXJ0KCfQrdGC0LDQtiDQt9Cw0L3Rj9GCJyk7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBsZXQgb3RoZXIgPSBbXTtcclxuICAgIGlucHV0RWxlbWVudHMub3RoZXIuZm9yRWFjaCgodmFsdWUpID0+IHtcclxuICAgICAgICBpZiAodmFsdWUuY2hlY2tlZCkge1xyXG4gICAgICAgICAgICBvdGhlci5wdXNoKHZhbHVlLnZhbHVlKVxyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgbG9kZ2Vycy5wdXNoKHtcclxuICAgICAgICBuYW1lOiBpbnB1dEVsZW1lbnRzLm5hbWUudmFsdWUsXHJcbiAgICAgICAgZ2VuZGVyOiBpbnB1dEVsZW1lbnRzLm1hbGUuY2hlY2tlZCA/ICdtYWxlJyA6ICdmZW1hbGUnLFxyXG4gICAgICAgIGZsb29yOiBpbnB1dEVsZW1lbnRzLmZsb29yTnVtYmVyLnZhbHVlLFxyXG4gICAgICAgIGZsb29yT3JkZXI6IGZsb29yTmVpZ2hib3Vycy5sZW5ndGgsXHJcbiAgICAgICAgcm9vbXM6IGlucHV0RWxlbWVudHMucm9vbXMudmFsdWUsXHJcbiAgICAgICAgb3RoZXI6IG90aGVyLFxyXG4gICAgICAgIGNvdW50OiBpbnB1dEVsZW1lbnRzLmxvZGdlcnNDb3VudC52YWx1ZVxyXG4gICAgfSk7XHJcblxyXG4gICAgLy/QoNC10YHQtdGCINC/0L7Qu9C10Lkg0L/QvtGB0LvQtSDRg9GB0L/QtdGI0L3QvtC5INC30LDQv9C40YHQuCDQvdC+0LLQvtCz0L4g0LbQuNC70YzRhtCwXHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYWRkUmVzZXQnKS5jbGljaygpO1xyXG4gICAgc2F2ZUxvZGdlcnMoKTtcclxuXHJcbn07XHJcblxyXG5leHBvcnQge2xvYWRMb2RnZXJzLCBzYXZlTG9kZ2VycywgY3JlYXRlTG9kZ2VyLCBnZXRMb2RnZXJzfSJdLCJmaWxlIjoibG9kZ2Vycy5qcyJ9
