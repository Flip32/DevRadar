module.exports = function parseStringAsArray(arraAsString) {
    return arraAsString.split(',').map(tech => tech.trim())

}
