import requests
import base64
from urllib.parse import quote
from flask import Flask, request
import time
app = Flask(__name__)

def get_access_token():
    """
    使用 AK，SK 生成鉴权签名（Access Token）
    :return: access_token，或是None(如果错误)
    """
    API_KEY = "02XmIjT82rQLC0z1eV1lqd4E"
    SECRET_KEY = "EUslqsUwaVNLfv2OQNI8TQyczGmcr3zC"

    url = "https://aip.baidubce.com/oauth/2.0/token"
    params = {"grant_type": "client_credentials", "client_id": API_KEY, "client_secret": SECRET_KEY}
    return str(requests.post(url, params=params).json().get("access_token"))

def image_url_to_base64(url, cookies):
    headers = {
        "cookie":base64.b64decode(cookies.encode('utf-8')).decode('utf-8'),
        "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/136.0.0.0 Safari/537.36 Edg/136.0.0.0"
        }
    try:
        response = requests.get(url, headers=headers)
        base64_str = base64.b64encode(response.content).decode('utf-8')
        return base64_str
    except Exception as e:
        # print("转换失败:", e)
        return f"转换失败:::{e}"

@app.route('/ocr')
def ocr():
    time.sleep(1)
    url = request.args.get('url', type = str)
    cookies = request.args.get('cookies', type = str)
    if not url:
        return { "stadus": 100, "word": "url:::ERROR","code": "" }
        
    headers = {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Accept': 'application/json'
    }
    try:
        ocr_url = "https://aip.baidubce.com/rest/2.0/ocr/v1/accurate_basic?access_token=" + get_access_token()
        params = {
            "image": quote(image_url_to_base64(url, cookies)),
            # "url": quote("https://baidu-ai.bj.bcebos.com/ocr/general.png"),
            "detect_direction": "false",
            "paragraph": "false",
            "probability": "false",
            "multidirectional_recognize": "false"
        }
        payload = []
        for key, value in params.items():
            payload.append(f"{key}={value}")
        payload = "&".join(payload)
        print(payload)
        response = requests.post(ocr_url, headers=headers, data=payload.encode("utf-8")).json()
        print(response)
        code = response["words_result"][0]["words"].replace("=", "").replace("?", "")
        print(code)
        result = {
            "stadus": 200,
            "word": response["words_result"][0]["words"].split("=")[0] + "=",
            "code": str(eval(code))
        }
        return result
    except Exception as e:
        return  {"stadus": 400, "word": f"ERROR:::{e}", "code":""}
        
if __name__ == '__main__':
    app.run(host = '0.0.0.0', port = 5010)

# img_url = "http://42.193.178.182/tvbox/img/demo.png"
# img_url = "https://auete.top/include/vdimgck.php"
# cookies = {"PHPSESSID": "78rattjm4i6mk2netj1vam54dj"}

# result = get_code()
# print(result)

