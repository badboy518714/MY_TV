// 地址发布页 https://www.czzy.site
// 地址发布页 https://cz01.vip
var rule = {
    title: '厂长资源',
    //host: 'www.czzymovie.com',
    host:'https://www.czzy.site',
    // host:'https://cz01.vip',
    hostJs:'print(HOST);let html=request(HOST,{headers:{"User-Agent":PC_UA}}); HOST = html.match(/推荐访问<a href="[^>]*">([^<]*)</)[1];print("厂长跳转地址 =====> " + HOST)',
    url: '/fyclassfyfilter',
    filterable: 1,//是否启用分类筛选,
    filter_url: '{{fl.cateId}}{{fl.class}}{{fl.area}}{{fl.year}}/page/fypage',
    filter: {
        "movie_bt":[
            {"key":"area","name":"分类","value":[{"v":"","n":"全部"},{"v":"/movie_bt_series/zhanchangtuijian","n":"站长推荐"},{"v":"/movie_bt_series/dyy","n":"电影"},{"v":"/movie_bt_series/dianshiju","n":"电视剧"},{"v":"/movie_bt_series/dohua","n":"动画"},{"v":"/movie_bt_series/guochanju","n":"国产剧"},{"v":"/movie_bt_series/mj","n":"美剧"},{"v":"/movie_bt_series/rj","n":"日剧"},{"v":"/movie_bt_series/hj","n":"韩剧"},{"v":"/movie_bt_series/hwj","n":"海外剧（其他）"},{"v":"/movie_bt_series/huayudianying","n":"华语电影"},{"v":"/movie_bt_series/meiguodianying","n":"欧美电影"},{"v":"/movie_bt_series/ribendianying","n":"日本电影"},{"v":"/movie_bt_series/hanguodianying","n":"韩国电影"},{"v":"/movie_bt_series/yingguodianying","n":"英国电影"},{"v":"/movie_bt_series/faguodianying","n":"法国电影"},{"v":"/movie_bt_series/yindudianying","n":"印度电影"},{"v":"/movie_bt_series/eluosidianying","n":"俄罗斯电影"},{"v":"/movie_bt_series/jianadadianying","n":"加拿大电影"},{"v":"/movie_bt_series/huiyuanzhuanqu","n":"会员专区"}]},
            {"key":"class","name":"类型","value":[{"n":"全部","v":""},{"n":"传记","v":"/movie_bt_tags/chuanji"},{"n":"儿童","v":"/movie_bt_tags/etet"},{"n":"冒险","v":"/movie_bt_tags/maoxian"},{"n":"剧情","v":"/movie_bt_tags/juqing"},{"n":"动作","v":"/movie_bt_tags/dozuo"},{"n":"动漫","v":"/movie_bt_tags/doman"},{"n":"动画","v":"/movie_bt_tags/dhh"},{"n":"历史","v":"/movie_bt_tags/lishi"},{"n":"古装","v":"/movie_bt_tags/guzhuang"},{"n":"同性","v":"/movie_bt_tags/tongxing"},{"n":"喜剧","v":"/movie_bt_tags/xiju"},{"n":"奇幻","v":"/movie_bt_tags/qihuan"},{"n":"家庭","v":"/movie_bt_tags/jiating"},{"n":"恐怖","v":"/movie_bt_tags/kubu"},{"n":"悬疑","v":"/movie_bt_tags/xuanyi"},{"n":"情色","v":"/movie_bt_tags/qingse"},{"n":"惊悚","v":"/movie_bt_tags/kingsong"},{"n":"战争","v":"/movie_bt_tags/zhanzhen"},{"n":"歌舞","v":"/movie_bt_tags/gw"},{"n":"武侠","v":"/movie_bt_tags/wuxia"},{"n":"灾难","v":"/movie_bt_tags/zainan"},{"n":"爱情","v":"/movie_bt_tags/aiqing"},{"n":"犯罪","v":"/movie_bt_tags/fanzui"},{"n":"短片","v":"/movie_bt_tags/dp"},{"n":"科幻","v":"/movie_bt_tags/kh"},{"n":"纪录片","v":"/movie_bt_tags/jlpp"},{"n":"西部","v":"/movie_bt_tags/xb"},{"n":"运动","v":"/movie_bt_tags/yd"},{"n":"音乐","v":"/movie_bt_tags/yy"}]}
        ]
    },
    searchUrl: '/boss1O1?q=**&f=_all&p=fypage',
    searchable: 2,
    filterable: 0,
    headers: {
        'User-Agent': 'PC_UA',
        'Cookie': 'wordpress_test_cookie=WP+Cookie+check;wordpress_logged_in_b14362775e39656aba8d052e1524f1f5=badboy518%7C1765031577%7Coj8cXiIEl08cGd21E0OgthdxNxMT1HN57eZEp44zVZH%7Cdcf3d88d064f486ad26fa7d3d7089f2c73a2d0e471fb1a51b9fe33c3447bb095;'
    },
    class_name: '全部&豆瓣电影Top250&高分影视&最新电影&热映中&站长推荐&电影&电视剧&动画&国产剧&日剧&韩剧&美剧&海外剧&俄罗斯电影&加拿大电影&华语电影&印度电影&日本电影&欧美电影&法国电影&英国电影&韩国电影&纪录片',
    class_url: 'movie_bt&dbtop250&gaofenyingshi&zuixindianying&reyingzhong&/movie_bt_series/zhanchangtuijian&/movie_bt_series/dyy&/movie_bt_series/dianshiju&/movie_bt_series/dohua&/movie_bt_series/guochanju&/movie_bt_series/rj&/movie_bt_series/hj&/movie_bt_series/mj&/movie_bt_series/hwj&/movie_bt_series/eluosidianying&/movie_bt_series/jianadadianying&/movie_bt_series/huayudianying&/movie_bt_series/yindudianying&/movie_bt_series/ribendianying&/movie_bt_series/meiguodianying&/movie_bt_series/faguodianying&/movie_bt_series/yingguodianying&/movie_bt_series/hanguodianying&movie_bt//movie_bt_tags/jlpp',
    play_parse: true,

    // lazy代码:源于海阔香雅情大佬 / 小程序：香情影视 https://pastebin.com/L4tHdvFn
    lazy: `js:
        let pdfh = jsp.pdfh;
        let html = request(input);
        let ohtml = pdfh(html, '.videoplay&&Html');
        let url = pdfh(ohtml, "body&&iframe&&src");
        if (/Cloud/.test(url)) {
            var ifrwy = request(url);
            let code = ifrwy.match(/var url = '(.*?)'/)[1].split('').reverse().join('');
            let temp = '';
            for (let i = 0x0; i < code.length; i = i + 0x2) {
                temp += String.fromCharCode(parseInt(code[i] + code[i + 0x1], 0x10))
            }
            input = {
                jx: 0,
                url: temp.substring(0x0, (temp.length - 0x7) / 0x2) + temp.substring((temp.length - 0x7) / 0x2 + 0x7),
                parse: 0
            }
        } else if (/decrypted/.test(ohtml)) {
            var phtml = pdfh(ohtml, "body&&script:not([src])&&Html");
            eval(getCryptoJS());
            var scrpt = phtml.match(/var.*?\\)\\);/g)[0];
            var data = [];
            eval(scrpt.replace(/md5/g, 'CryptoJS').replace('eval', 'data = '));
            input = {
                jx: 0,
                url: data.match(/url:.*?[\\'\\"](.*?)[\\'\\"]/)[1],
                parse: 0
            }
        } else {
            input
        }
	`,
    推荐: '.bt_img;ul&&li;*;*;*;*',
    double: true,
    一级: '.bt_img&&ul&&li;h3&&Text;img&&data-original;.inzhuy&&Text;a&&href',
    二级: {
        "title": "h1&&Text;.moviedteail_list li&&a&&Text",
        "img": "div.dyimg img&&src",
        "desc": ".moviedteail_list li:eq(4) a&&Text;.moviedteail_list li:eq(2) a&&Text;.moviedteail_list li:eq(1) a&&Text;.moviedteail_list li:eq(6)&&Text;.moviedteail_list li:eq(4)&&Text",
        "content": ".yp_context&&Text",
        "tabs": ".mi_paly_box span",
        "lists": ".paly_list_btn:eq(#id) a"
    },
    搜索:`js:
			function get_result(e) {
    		  for (var t = 1, n = e.reduce(function(e, t) { return e + t}, 0), r = (6 + e.length + n) % 6 + 6; r--; ){ t *= 6; }		
    		  t < 6666 && (t *= e.length),t > 0x3f940aa && (t = Math.floor(t / e.length));
    		  for (var o = 0; o < e.length; o++){ t += Math.pow(e[o], 3),t ^= o,t ^= e[o] + o; }		
    		  for (var f = []; t > 0; ){ f.unshift(63 & t),t >>= 6; }	
    		  return f
			}
			
			print("爬取测试开始");
			//print(fetch_params.headers.Cookie)
			let json_obj =  JSON.parse(request(input,{ withHeaders:true })); print("json_obj:::",json_obj);
			let client_id = json_obj["body"].match(/SafeLineChallenge\\("([^"]*)"/)[1];print("client_id:::",client_id);
			let cookie = json_obj["set-cookie"];
			let sl_session = typeof cookie == "string" ? cookie.match(/sl-session=([^;]*);/)[1] : cookie[0].match(/sl-session=([^;]*);/)[1];
			print("sl_session:::",sl_session);
			print(client_id,sl_session)
			let visitorId = "9fc62ac69ea0d71ed5d2cc5b324be997";

			let header = {"content-type": "application/json",'User-Agent':PC_UA};
			let data = { "client_id":client_id,"level":1}
			let issue_url = "https://www.czzymovie.com/.safeline/challenge/v2/api/issue";
			let json_data = JSON.parse(request(issue_url,{ withHeaders:false,headers: header,method:"POST",body:JSON.stringify(data)}));
			print(json_data)
			let issue_id = json_data["data"]["issue_id"],result = get_result(json_data["data"]["data"]);

			let _data = {"issue_id": issue_id,"result": result,"serials": [],"client": {"userAgent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/136.0.0.0 Safari/537.36 Edg/136.0.0.0",
        					"platform": "Win32","language": "zh-CN,en,en-GB,en-US","vendor": "Google Inc.","screen": [1920,1080],"visitorId": visitorId,"score": 0,"target": []}};			
			let verify_url = "https://www.czzymovie.com/.safeline/challenge/v2/api/verify"
			let html = request(verify_url,{headers: header,method:"POST",body:JSON.stringify(_data)});
			let jwt = JSON.parse(html)["data"]["jwt"];
			
			header = { "Cookie":"sl-session=" + sl_session + ";sl-challenge-server=local;sl-challenge-jwt=" + jwt, 'User-Agent':'PC_UA'}
			
			html = request(input, { headers: header}); 
			
		

			print(123)
			let d = [];
			let pdfh = jsp.pdfh;
			let pdfa = jsp.pdfa;
			let pd = jsp.pd;
			let items = pdfa(html,'.bt_img.mi_ne_kd.search_list&&ul&&li');
			//print(items)
			for(let i = 0; i < items.length; i++){
				d.push({
					title: pd(items[i],'img&&alt'),
					desc: pdfh(items[i],'p&&Text'),
					pic_url: pd(items[i],'img&&src'),
					url: pd(items[i],'a&&href')
				})
			}
			print(d)
			setResult(d)						
			` 
}
