// 地址发布页 https://www.czzy.site
// 地址发布页 https://cz01.vip
var rule = {
    title: 'AUETE影视',
    //host: 'https://auete.top',
    host:'https://auete.pro/',
    hostJs:'print(HOST);let html=request(HOST,{headers:{"User-Agent":PC_UA}}); let label = jsp.pdfa(html,".content-top&&ul:eq(1)&&li:eq(0)")[0]; HOST = jsp.pd(label, ".go&&a&&href");print("AUETE影视跳转地址 =====> " + HOST)',
    url: 'fyclassfyfilter/indexfypage.html',
    filterable: 1,//是否启用分类筛选,
    filter_url: '{{fl.class}}',
    filter: {'Dm': [{'key': 'class', 'name': '分类', 'value': [{'n': '全部', 'v': ''}, {'n': '动画', 'v': '/donghua'}, {'n': '日漫', 'v': '/riman'}, {'n': '国漫', 'v': '/guoman'}, {'n': '美漫', 'v': '/meiman'}]}], 'Movie': [{'key': 'class', 'name': '分类', 'value': [{'n': '全部', 'v': ''}, {'n': '喜剧片', 'v': '/xjp'}, {'n': '动作片', 'v': '/dzp'}, {'n': '爱情片', 'v': '/aqp'}, {'n': '科幻片', 'v': '/khp'}, {'n': '恐怖片', 'v': '/kbp'}, {'n': '惊悚片', 'v': '/jsp'}, {'n': '战争片', 'v': '/zzp'}, {'n': '剧情片', 'v': '/jqp'}]}], 'Tv': [{'key': 'class', 'name': '分类', 'value': [{'n': '全部', 'v': ''}, {'n': '美剧', 'v': '/oumei'}, {'n': '韩剧', 'v': '/hanju'}, {'n': '日剧', 'v': '/riju'}, {'n': '泰剧', 'v': '/yataiju'}, {'n': '网剧', 'v': '/wangju'}, {'n': '台剧', 'v': '/taiju'}, {'n': '国产', 'v': '/neidi'}, {'n': '港剧', 'v': '/tvbgj'}, {'n': '英剧', 'v': '/yingju'}, {'n': '外剧', 'v': '/waiju'}, {'n': '短剧', 'v': '/duanju'}]}], 'Zy': [{'key': 'class', 'name': '分类', 'value': [{'n': '全部', 'v': ''}, {'n': '国综', 'v': '/guozong'}, {'n': '韩综', 'v': '/hanzong'}, {'n': '美综', 'v': '/meizong'}]}], 'qita': [{'key': 'class', 'name': '分类', 'value': [{'n': '全部', 'v': ''}, {'n': '记录片', 'v': '/Jlp'}, {'n': '经典片', 'v': '/Jdp'}, {'n': '经典剧', 'v': '/Jdj'}, {'n': '网大电影', 'v': '/wlp'}, {'n': '国产老电影', 'v': '/laodianying'}]}]},
    searchUrl: 'auete4so.php?page=fypage&searchword=**',
    searchable: 2,
    filterable: 0,
    headers: { 'User-Agent': 'PC_UA'},
    class_name: '电影&电视剧&综艺&动漫&其他',
    class_url: 'Movie&Tv&Zy&Dm&qita',
    play_parse: true,

    // lazy代码:源于海阔香雅情大佬 / 小程序：香情影视 https://pastebin.com/L4tHdvFn
    lazy: '',
    推荐: '.col-lg-12.mt-3.main&&.card&&.picture_list_container;ul&&li;h2&&Text;img&&src;.hdtag&&Text;a&&href',  //h2&&Text;img&&src;.hdtag&&Text;a&&href
    double: true,
    一级: `js:
			let d = [];
			let pdfh = jsp.pdfh;
			let pdfa = jsp.pdfa;
			let pd = jsp.pd;
			if(MY_PAGE == 1) { input = input.replace("index1","index"); }
			let html = request(input)
			let items = pdfa(html,'.picture_list_container&&ul&&li');
			print(items)
			for(let i = 0; i < items.length; i++){
				d.push({
					title: pdfh(items[i],'h2&&Text'),
					desc: pdfh(items[i],'.hdtag&&Text'),
					pic_url: pd(items[i],'img&&src'),
					url: pd(items[i],'a&&href')
				})
			}
			print(d)
			setResult(d)
			`,
    二级: `js:
			let play_froms = [], play_urls = [];
			let pdfh = jsp.pdfh;
			let pdfa = jsp.pdfa;
			let pd = jsp.pd;
			let html =  request(input);
			let info = pdfa(html,".message.break-all")[0];
			
			let playlists = pdfa(info,".clearfix.mt-3");
			print(playlists)

			for(let i = 0; i < playlists.length; i++){
				let form = playlists[i].match(/』([^：]*)：/)[1]; play_froms.push(form);
				let items = pdfa(playlists[i],"ul&&li");
				let urls = [];
				for(let j = 0; j < items.length; j++){ urls.push(pd(items[j],'a&&title') + "$" + pd(items[j],'a&&href')); }
				play_urls.push(urls.join("#"));		
			}

			//print(256,info.match(/影片别名: ([^<]*)</) || "456")
			let vod_name = info.match(/影片片名: ([^<]*)</) || info.match(/影片名称: ([^<]*)</) || info.match(/影片别名: ([^<]*)</);
			let vod_actor = info.match(/影片导演: ([^<]*)</);
			VOD = {
				vod_id: '',
				vod_name: vod_name[1],
				vod_pic:  pd(info,'.cover&&a&&href'),
				type_name:  info.match(/影片分类: ([^<]*)</)[1],
				vod_year:  info.match(/上映年份: ([^<]*)</)[1],
				vod_area:  info.match(/影片地区: ([^<]*)</)[1],
				vod_remarks: info.match(/影片备注: ([^<]*)</)[1],
				vod_actor:   info.match(/影片主演: ([^<]*)</)[1],
				vod_director:  vod_actor ? vod_actor[1] : "",
				vod_content: pdfh(info,'p:eq(-1)&&Text'),
				vod_play_from: play_froms.join("$$$"),
				vod_play_url: play_urls.join("$$$")
			};
			`,
    搜索:`js:
			
			print("搜索模式开启");

			let d = [], _html="";
			let pdfh = jsp.pdfh;
			let pdfa = jsp.pdfa;
			let pd = jsp.pd;
			let img_url = "https://auete.top/include/vdimgck.php"; 
			let result = JSON.parse(request(input,{withHeaders:true, headers: { 'User-Agent': PC_UA}})), html = result.body, Cookie = result["set-cookie"].split(";")[0];
			print("result:::",typeof result)
			print("Cookie:::",Cookie)
			
			let ocr_url = "http://42.193.178.182:5010/ocr?url=" + img_url + "&cookies=" + btoa(Cookie);
			let  headers =  { "content-type": "application/x-www-form-urlencoded", "referer": "https://auete.top", "user-agent": PC_UA , "Cookie": Cookie }

			if(/安全验证/.test(html)){
				for(let i = 0; i < 5; i++){
					result = JSON.parse(request(ocr_url,{withHeaders:false, headers: { 'User-Agent': PC_UA } }));
					print(typeof result,result)
					if(result.stadus != 200){  continue;  }
					let data = { "validate": result.code,"searchword": input.split("searchword=")[1] };
					let check_url = "https://auete.top/auete4so.php?scheckAC=check&page=&searchtype=&order=&tid=&area=&year=&letter=&yuyan=&state=&money=&ver=&jq=";
					_html = request(check_url,{method:"POST", headers: headers,body: data  });
					if(/安全验证|验证码不正确/.test(_html)){  continue;  }else{	print(_html);	break;}
				}			
			}
			
			let items = pdfa(_html,".picture_list_container&&ul&&li");
			for(let i = 0; i < items.length; i++){
				
				d.push({
					title: result["set-cookie"] || pdfh(items[i], "h2&&Text"),
					desc:  pdfh(items[i], ".hidden-lg&&Text") + "  " +  pdfh(items[i], ".float-right&&Text") + "  " +  pdfh(items[i], ".hdtag&&Text"),
					pic_url: pd(items[i],'img&&src'),
					url: pd(items[i],'a&&href')
				})			
			}
			print(d)
			setResult(d)

			print("搜索模式结束");
						
			` 
}
