const filters = {
    searchFloor: '',
    searchGender: '',
    searchOther: [],
    searchRooms: null
};

const getFilters = () => filters;

const setFilters = ({searchFloor, searchGender, searchOther, searchRooms}) => {
    if (searchFloor) {
        filters.searchFloor = searchFloor;
    }
    if (searchGender) {
        filters.searchGender = searchGender;
    }
    if (searchOther) {
        filters.searchOther = searchOther;
    }
    if (searchRooms) {
        filters.searchRooms = searchRooms;
    }
};

const resetFilters = () => {
    filters.searchFloor = '';
    filters.searchGender = '';
    filters.searchOther = [];
    filters.searchRooms = null
}

export {getFilters, setFilters, resetFilters}