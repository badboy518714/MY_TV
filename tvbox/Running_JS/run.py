from flask import Flask, request
import execjs
import requests
import re
import json
import base64
import time
import urllib.parse

app = Flask(__name__)

# 加载 js文件 获取 Cookie
ctx = execjs.compile(open("code.js", encoding='utf-8').read())

def quote(meta):
    return urllib.parse.quote(meta)
def unquote(meta):
    return urllib.parse.unquote(meta)





@app.route('/get_Cookie')
def get_Cookie():
    cookie = request.args.get('cookie', type=str)  # 可可影视
    meta = request.args.get('meta', type=str)  # 百思派影视

    if cookie:
        try:
            Cookie = ctx.call("get_cookie", cookie)
            return Cookie
        except Exception as e:
            return f"ERROR:::{e}"

    if meta:
        data = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/136.0.0.0 Safari/537.36 Edg/136.0.0.0 Win32"
        try:
            meta = base64.b64decode(unquote(meta)).decode("utf-8")
            contents = re.findall(r'content="([^"]*)"', meta)
            params = {
                "iv": contents[0], "ip": contents[1], "sdcasxcxzc": contents[2], "fsdvasdvcxsv": contents[3],
                "xcvwfdfsv": contents[4], "xzcveqwr": contents[5], "xczvwerwe": contents[6], "domain": contents[7],
                "cookename": contents[8], "timestamp": contents[9], "hash": contents[10]
            }

            trace = f'{{"Fingerprint":"ab21081e663b147359f753caa4677b353ceca1522a2ce03b4b0a03a76c6eb225","language":"zh-CN","font":9,"ip":"{params["ip"]}"}}'
            waf_trace = ctx.call("encryptData", trace, 'oDbYqcGXX12FcqCb', params["iv"])

            captcha = f'{{"timestamp":"{params["timestamp"]}","hash":"{params["hash"]}","{params["sdcasxcxzc"]}":0,"{params["fsdvasdvcxsv"]}":0,"{params["xcvwfdfsv"]}":0,"{params["xzcveqwr"]}":0,"{params["xczvwerwe"]}":0,"data":"{data}"}}'
            waf_captcha = base64.b64encode(captcha.encode("utf8")).decode("utf-8")

            return f'waf-captcha={waf_captcha};waf-trace={waf_trace};'
        except Exception as e:
            return f"ERROR:::{e}"





if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
