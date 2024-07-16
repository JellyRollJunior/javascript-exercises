const getTheTitles = function(books) {
    // oops, just use map!
    return books.reduce((titles, bookInfo) => {
        titles.push(bookInfo.title);
        return titles;
    }, [])
};

// Do not edit below this line
module.exports = getTheTitles;
