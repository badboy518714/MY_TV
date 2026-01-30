const CryptoJS = require('crypto');

function encodeUTF8(s) {
    var i, r = [], c, x;
    for (i = 0; i < s.length; i++)
        if ((c = s.charCodeAt(i)) < 0x80) r.push(c);
        else if (c < 0x800) r.push(0xC0 + (c >> 6 & 0x1F), 0x80 + (c & 0x3F));
        else {
            if ((x = c ^ 0xD800) >> 10 == 0) //对四字节UTF-16转换为Unicode
                c = (x << 10) + (s.charCodeAt(++i) ^ 0xDC00) + 0x10000,
                    r.push(0xF0 + (c >> 18 & 0x7), 0x80 + (c >> 12 & 0x3F));
            else r.push(0xE0 + (c >> 12 & 0xF));
            r.push(0x80 + (c >> 6 & 0x3F), 0x80 + (c & 0x3F));
        };
    return r;
}

// 字符串加密成 hex 字符串
function sha1(s) {
    var data = new Uint8Array(encodeUTF8(s))
    var i, j, t;
    var l = ((data.length + 8) >>> 6 << 4) + 16, s = new Uint8Array(l << 2);
    s.set(new Uint8Array(data.buffer)), s = new Uint32Array(s.buffer);
    for (t = new DataView(s.buffer), i = 0; i < l; i++)s[i] = t.getUint32(i << 2);
    s[data.length >> 2] |= 0x80 << (24 - (data.length & 3) * 8);
    s[l - 1] = data.length << 3;
    var w = [], f = [
            function () { return m[1] & m[2] | ~m[1] & m[3]; },
            function () { return m[1] ^ m[2] ^ m[3]; },
            function () { return m[1] & m[2] | m[1] & m[3] | m[2] & m[3]; },
            function () { return m[1] ^ m[2] ^ m[3]; }
        ], rol = function (n, c) { return n << c | n >>> (32 - c); },
        k = [1518500249, 1859775393, -1894007588, -899497514],
        m = [1732584193, -271733879, null, null, -1009589776];
    m[2] = ~m[0], m[3] = ~m[1];
    for (i = 0; i < s.length; i += 16) {
        var o = m.slice(0);
        for (j = 0; j < 80; j++)
            w[j] = j < 16 ? s[i + j] : rol(w[j - 3] ^ w[j - 8] ^ w[j - 14] ^ w[j - 16], 1),
                t = rol(m[0], 5) + f[j / 20 | 0]() + m[4] + w[j] + k[j / 20 | 0] | 0,
                m[1] = rol(m[1], 30), m.pop(), m.unshift(t);
        for (j = 0; j < 5; j++)m[j] = m[j] + o[j] | 0;
    };
    t = new DataView(new Uint32Array(m).buffer);
    for (var i = 0; i < 5; i++)m[i] = t.getUint32(i << 2);

    var hex = Array.prototype.map.call(new Uint8Array(new Uint32Array(m).buffer), function (e) {
        return (e < 16 ? "0" : "") + e.toString(16);
    }).join("");
    return hex;
}
function encode(){
    let content=document.getElementById("text").value;
    let result=sha1(content);
    window.alert(result);
}

function get_cookie(cookie) {
	let i = 0;
	let n1 = parseInt('0x'+cookie[0]) * 2;
	while ( !! []) {
		let s = sha1(cookie + i);
		if (s.slice(n1,n1 + 4) == "b00b") { return "cdndefend_js_cookie=" + cookie + i; }
		i++;
	}
}


// let Cookie = get_cookie("EFC56C750AD8CCE6E1B3AD66F2B589543A50A08A");console.log(Cookie);

function encryptData(text, key, iv) {
    // 验证密钥和IV长度
    if (key.length !== 16) {
        throw new Error('Key must be exactly 16 characters long.');
    }
    if (iv.length !== 12) {
        throw new Error('IV must be exactly 12 characters long.');
    }

    // 创建cipher对象，使用aes-128-gcm算法（128位密钥即16字节）
    // 注意：Node.js的crypto模块中，密钥和IV需要是Buffer或Uint8Array
    const algorithm = 'aes-128-gcm';
    const keyBuffer = Buffer.from(key, 'utf8');
    const ivBuffer = Buffer.from(iv, 'utf8');

    const cipher = CryptoJS.createCipheriv(algorithm, keyBuffer, ivBuffer);

    // 加密数据
    let encrypted = cipher.update(text, 'utf8', 'binary');
    encrypted += cipher.final('binary');

    // 获取认证标签（GCM模式特有）
    const authTag = cipher.getAuthTag();

    // 在GCM模式中，认证标签通常附加在密文后面，或者单独传输
    // 根据你之前的浏览器代码，它将认证标签放在密文后面一起进行base64编码
    // 注意：Node.js中，加密后的数据是二进制字符串，我们需要将其转换为Buffer以便拼接

    const encryptedBuffer = Buffer.from(encrypted, 'binary');
    const resultBuffer = Buffer.concat([encryptedBuffer, authTag]);

    // 返回base64编码的结果
    return resultBuffer.toString('base64');
}
//const encrypted = await o('{"Fingerprint":"ab21081e663b147359f753caa4677b353ceca1522a2ce03b4b0a03a76c6eb225","language":"zh-CN","font":9,"ip":"58.216.12.145"}', "oDbYqcGXX12FcqCb", "ceeaff8132ec");
// 测试
try {
    const encrypted = encryptData('{"Fingerprint":"ab21081e663b147359f753caa4677b353ceca1522a2ce03b4b0a03a76c6eb225","language":"zh-CN","font":9,"ip":"58.216.12.145"}', 'oDbYqcGXX12FcqCb', 'ceeaff8132ec');
    console.log('加密结果1:', encrypted);
} catch (error) {
    console.error('加密失败1:', error);
}