/**
 *	extend object property (shallo copy only)
 *	@param {Object} to copy target
 *	@param {...Object} opt_srces copy sources
 *	@return copy target
 */
function extend(to, opt_srces) {
    var srces = Array.prototype.slice.call(arguments, 1),
        src, key;

    while (srces.length) {
        src = srces.shift();
        if (!src) {
            continue
        }

        for (key in src) {
            to[key] = src[key];
        }
    }

    return to
}

function encodeURLParams(params) {
    return Object.getOwnPropertyNames(params).filter(function(name) {
        return params[name] !== undefined
    }).map(function(name) {
        var value = (params[name] === null) ? '' : params[name]
        return encodeURIComponent(name) + '=' + encodeURIComponent(value)
    }).join('&').replace(/%20/g, '+')
}

function dayFormat(d) {
    var Y = d.getFullYear(),
        M = d.getMonth() + 1,
        D = d.getDate(),
        h = d.getHours(),
        m = d.getMinutes();

    return padding(Y, 4, 0) + '/' +
        padding(M, 2, 0) + ':' +
        padding(D, 2, 0) + ' ' +
        padding(h, 2, 0) + ':' +
        padding(m, 2, 0)
}

function padding(num, digit, c) {
    return ((new Array(digit)).join(arguments.length === 3 ? c : " ") + num).substr(-digit)
}