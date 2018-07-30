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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJmaWx0ZXJzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGZpbHRlcnMgPSB7XHJcbiAgICBzZWFyY2hGbG9vcjogJycsXHJcbiAgICBzZWFyY2hHZW5kZXI6ICcnLFxyXG4gICAgc2VhcmNoT3RoZXI6IFtdLFxyXG4gICAgc2VhcmNoUm9vbXM6IG51bGxcclxufTtcclxuXHJcbmNvbnN0IGdldEZpbHRlcnMgPSAoKSA9PiBmaWx0ZXJzO1xyXG5cclxuY29uc3Qgc2V0RmlsdGVycyA9ICh7c2VhcmNoRmxvb3IsIHNlYXJjaEdlbmRlciwgc2VhcmNoT3RoZXIsIHNlYXJjaFJvb21zfSkgPT4ge1xyXG4gICAgaWYgKHNlYXJjaEZsb29yKSB7XHJcbiAgICAgICAgZmlsdGVycy5zZWFyY2hGbG9vciA9IHNlYXJjaEZsb29yO1xyXG4gICAgfVxyXG4gICAgaWYgKHNlYXJjaEdlbmRlcikge1xyXG4gICAgICAgIGZpbHRlcnMuc2VhcmNoR2VuZGVyID0gc2VhcmNoR2VuZGVyO1xyXG4gICAgfVxyXG4gICAgaWYgKHNlYXJjaE90aGVyKSB7XHJcbiAgICAgICAgZmlsdGVycy5zZWFyY2hPdGhlciA9IHNlYXJjaE90aGVyO1xyXG4gICAgfVxyXG4gICAgaWYgKHNlYXJjaFJvb21zKSB7XHJcbiAgICAgICAgZmlsdGVycy5zZWFyY2hSb29tcyA9IHNlYXJjaFJvb21zO1xyXG4gICAgfVxyXG59O1xyXG5cclxuY29uc3QgcmVzZXRGaWx0ZXJzID0gKCkgPT4ge1xyXG4gICAgZmlsdGVycy5zZWFyY2hGbG9vciA9ICcnO1xyXG4gICAgZmlsdGVycy5zZWFyY2hHZW5kZXIgPSAnJztcclxuICAgIGZpbHRlcnMuc2VhcmNoT3RoZXIgPSBbXTtcclxuICAgIGZpbHRlcnMuc2VhcmNoUm9vbXMgPSBudWxsXHJcbn1cclxuXHJcbmV4cG9ydCB7Z2V0RmlsdGVycywgc2V0RmlsdGVycywgcmVzZXRGaWx0ZXJzfSJdLCJmaWxlIjoiZmlsdGVycy5qcyJ9
