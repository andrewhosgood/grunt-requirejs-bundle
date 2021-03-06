var Url = function (/*parts*/) {
    var parts = Array.prototype.slice.call(arguments) || [],
        output = parts[0];

    for (var i = 1; i < parts.length; i++) {
        if(/\/$/.test(output) || /^\//i.test(parts[i])) {
            output += parts[i]; 
        } else {
            output += '/' + parts[i]; 
        }
    };
    this.href = output;
}
Url.prototype.makeRelative = function (base) {
    if(base === undefined) return this;

    this.href = (this.href || '').replace(new RegExp('^\/?'+base+'\/?', 'i'), '');
    return this;
};

module.exports = Url;