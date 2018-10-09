var Base64 = {
    _keyStr: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
    encode: function(input) {
        var output = "";
        var chr1, chr2, chr3, enc1, enc2, enc3, enc4;
        var i = 0;
        input = Base64._utf8_encode(input);
        while (i < input.length) {
            chr1 = input.charCodeAt(i++);
            chr2 = input.charCodeAt(i++);
            chr3 = input.charCodeAt(i++);
            enc1 = chr1 >> 2;
            enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
            enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
            enc4 = chr3 & 63;
            if (isNaN(chr2)) { enc3 = enc4 = 64; } else if (isNaN(chr3)) { enc4 = 64; }
            output = output + this._keyStr.charAt(enc1) + this._keyStr.charAt(enc2) + this._keyStr.charAt(enc3) + this._keyStr.charAt(enc4);
        }
        return output;
    },
    decode: function(input) {
        var output = "";
        var chr1, chr2, chr3;
        var enc1, enc2, enc3, enc4;
        var i = 0;
        input = input.replace(/[^A-Za-z0-9\+\/\=]/g, "");
        while (i < input.length) {
            enc1 = this._keyStr.indexOf(input.charAt(i++));
            enc2 = this._keyStr.indexOf(input.charAt(i++));
            enc3 = this._keyStr.indexOf(input.charAt(i++));
            enc4 = this._keyStr.indexOf(input.charAt(i++));
            chr1 = (enc1 << 2) | (enc2 >> 4);
            chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
            chr3 = ((enc3 & 3) << 6) | enc4;
            output = output + String.fromCharCode(chr1);
            if (enc3 != 64) { output = output + String.fromCharCode(chr2); }
            if (enc4 != 64) { output = output + String.fromCharCode(chr3); }
        }
        output = Base64._utf8_decode(output);
        return output;
    },
    _utf8_encode: function(string) {
        string = string.replace(/\r\n/g, "\n");
        var utftext = "";
        for (var n = 0; n < string.length; n++) {
            var c = string.charCodeAt(n);
            if (c < 128) { utftext += String.fromCharCode(c); } else if ((c > 127) && (c < 2048)) {
                utftext += String.fromCharCode((c >> 6) | 192);
                utftext += String.fromCharCode((c & 63) | 128);
            } else {
                utftext += String.fromCharCode((c >> 12) | 224);
                utftext += String.fromCharCode(((c >> 6) & 63) | 128);
                utftext += String.fromCharCode((c & 63) | 128);
            }
        }
        return utftext;
    },
    _utf8_decode: function(utftext) {
        var string = "";
        var i = 0;
        var c = c1 = c2 = 0;
        while (i < utftext.length) {
            c = utftext.charCodeAt(i);
            if (c < 128) {
                string += String.fromCharCode(c);
                i++;
            } else if ((c > 191) && (c < 224)) {
                c2 = utftext.charCodeAt(i + 1);
                string += String.fromCharCode(((c & 31) << 6) | (c2 & 63));
                i += 2;
            } else {
                c2 = utftext.charCodeAt(i + 1);
                c3 = utftext.charCodeAt(i + 2);
                string += String.fromCharCode(((c & 15) << 12) | ((c2 & 63) << 6) | (c3 & 63));
                i += 3;
            }
        }
        return string;
    }
}
var encode = document.getElementById('encode'),
    decode = document.getElementById('decode'),
    output = document.getElementById('output'),
    input = document.getElementById('input');
var User_ID = "";
var protected_links = "";
var a_to_va = 0;
var a_to_vb = 0;
var a_to_vc = "";
function getdom(url) {
    var hostname;
    if (url.indexOf("://") > -1) { hostname = url.split('/')[2]; } else { hostname = url.split('/')[0]; }
    hostname = hostname.split(':')[0];
    hostname = hostname.split('?')[0];
    return hostname;
}

function a_to_fa() {
    var a_to_fa = new Array();
    set.protectedUrl = set.protectedUrl;
    a_to_fa = set.protectedUrl.split(",");
    return a_to_fa;
}
if (!set.protectedUrl) {
    set.protectedUrl = window.location.href;
} else {
    set.protectedUrl += "," + window.location.href;
}
var a_to_fa = a_to_fa();

function geturi(datajson) {

    var a_to_ck = false;
    var j = 0;
    var a_to_lh = a_to_fa.length;
    var a_to_cl = "";
    var a_to_ce = "";
    var a_to_vi = document.getElementsByTagName("a");
    var a_to_lk = new Array();

    var a_to_po = datajson.feed.openSearch$totalResults.$t;
    for (var i = 0; i < a_to_po; i++) {
        var a_to_pi;
        for (var s = 0; s < datajson.feed.entry[i].link.length; s++) {
            if (datajson.feed.entry[i].link[s].rel == 'alternate') {
                a_to_pi = datajson.feed.entry[i].link[s].href;
                break;
            }
        }
        a_to_lk[i] = a_to_pi;
        var a_to_ra = Math.random() * a_to_lk.length;
        a_to_ra = parseInt(a_to_ra);
    }
    for (var i = 0; i < a_to_vi.length; i++) {
        a_to_ck = false;
        j = 0;
        while (a_to_ck == false && j < a_to_lh) {
            a_to_cl = getdom(a_to_vi[i].href);
            a_to_ce = getdom(a_to_fa[j]);
            if (a_to_cl.match(a_to_ce)) {
                a_to_ck = true;
            }
            j++;
        }
        if (a_to_ck == false) {
            var encryptedUrl=Base64.encode(a_to_cl);
            a_to_vi[i].href = a_to_lk[a_to_ra] + set.parameter + encryptedUrl;
            a_to_vi[i].rel = "nofollow";
            a_to_vi[i].target = "_blank";
        }
    }
}
