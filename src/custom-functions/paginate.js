module.exports = function paginate(req, result, productsLimit, url) {
    let queryPage = Number(req.query.page)
    let baseURL = url
    let limit = productsLimit
    let totalPages = parseInt(Number(result.count) / limit)
    let main
    if (!queryPage) {
        main = true
    } else {
        main = false
    }
    return {
        firstPage: baseURL,
        nextPage: baseURL + (queryPage ? queryPage + 1 : 1),
        prevPage: baseURL + (queryPage > 0 ? queryPage - 1 : 0),
        lastPage: baseURL + totalPages,
        totalPages: totalPages,
        currentPage: queryPage,
        main: main
    }

}
