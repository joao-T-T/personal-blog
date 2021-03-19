String.prototype.capitalize = function() {
    return this.charAt(0).toUpperCase() + this.slice(1)
}

String.prototype.formatDate = function() {
    return new Date(this)
        .toLocaleString('pt-br', { timeZone: 'UTC' })
        .replace(' ', ' às ')
}