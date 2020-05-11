const getUrlSections = (url) => {
    return url.split('/').slice(1);
}

export default getUrlSections;