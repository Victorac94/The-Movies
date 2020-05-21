const getUrlSections = (url) => {
    const result = url.split('/').slice(1);

    // Check if the second part of the url is a number
    if (!isNaN(parseInt(result[1]))) {
        result[1] = parseInt(result[1]);
    }

    return result;
}

export default getUrlSections;