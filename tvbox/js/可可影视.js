globalThis.get_html = function(url){
	function get_Cookie(cookie) { 
		//常量
		let get_token_url = "https://api.json.cn/try_run?action=get_token", get_result_url = "https://api.json.cn/try_run?action=get_result&token=";
		let token_data = {"source_code": "",	"language_id": "63",	"command_line_arguments": "",	"stdin": ""	};
		let source_code = request("https://gitee.com/badboy518/happy/raw/master/My_drpy/keke.js", { headers: { 'User-Agent': PC_UA}});	
		//子函数体
		function updata_add(cookie){	return 'let Cookie = get_cookie("' + cookie + '");console.log(Cookie);' 	}
		function sleep(time){ let currentTimestamp = new Date().getTime(),timestampOneSecondLater = currentTimestamp +time; while(currentTimestamp < timestampOneSecondLater){ currentTimestamp = new Date().getTime();} }

		let updata = updata_add(cookie);
		token_data["source_code"] = source_code + updata;;
		let _token = JSON.parse(request(get_token_url, {method:"POST",headers:{ "content-type": "application/x-www-form-urlencoded; charset=UTF-8","user-agent": PC_UA}, body:token_data}))["token"];
		sleep(2000)
		let response = JSON.parse(request(get_result_url + _token, { headers:{ "content-type": "application/x-www-form-urlencoded; charset=UTF-8","user-agent": PC_UA }}))["stdout"];  		 
		return atob(response)
	}
	
	let html = request(url);
	let cookie = html.match(/'([^']*)','cdndefend_js_cookie='/)[1];
	let headers = { 'Cookie': get_Cookie(cookie), "user-agent": PC_UA }
	html = request(url,{ headers: headers });
	
	return html	
}

var rule = {
            title: '可可影视&网飞影视',
            host: 'https://www.ncat21.com', //  		https://www.kkys1.com
            timeout: 60000,
            url: '/show/fyclassfyfilter.html',
            searchUrl: '/search?k=**&page=fypage',
            searchable: 2,//是否启用全局搜索,
            quickSearch: 0,//是否启用快速搜索,
            filterable: 0,//是否启用分类筛选,
            headers: {'User-Agent': "PC_UA"},
            class_url: '1&2&3&4&6',
    			 class_name: '电影&连续剧&动漫&综艺纪录&短剧',
            //class_parse: '.wap-show0&&ul&&li0;a&&Text;a&&href;.*/(\\d+)-----------.html',//a&&href  a&&Text .wap-show0&&ul&&li0
            cate_exclude: '',
            filter_url: "-{{fl.class}}-{{fl.area}}-{{fl.lang}}-{{fl.year}}-{{fl.by or '3'}}-fypage",
            filter: {'1': [{'key': 'class', 'name': '类型:', 'value': [{'n': '全部', 'v': ''}, {'n': '剧情', 'v': '剧情'}, {'n': '喜剧', 'v': '喜剧'}, {'n': '动作', 'v': '动作'}, {'n': '爱情', 'v': '爱情'}, {'n': '恐怖', 'v': '恐怖'}, {'n': '惊悚', 'v': '惊悚'}, {'n': '犯罪', 'v': '犯罪'}, {'n': '科幻', 'v': '科幻'}, {'n': '悬疑', 'v': '悬疑'}, {'n': '奇幻', 'v': '奇幻'}, {'n': '冒险', 'v': '冒险'}, {'n': '战争', 'v': '战争'}, {'n': '历史', 'v': '历史'}, {'n': '古装', 'v': '古装'}, {'n': '家庭', 'v': '家庭'}, {'n': '传记', 'v': '传记'}, {'n': '武侠', 'v': '武侠'}, {'n': '歌舞', 'v': '歌舞'}, {'n': '短片', 'v': '短片'}, {'n': '动画', 'v': '动画'}, {'n': '儿童', 'v': '儿童'}, {'n': '职场', 'v': '职场'}]}, {'key': 'area', 'name': '地区:', 'value': [{'n': '全部', 'v': ''}, {'n': '大陆', 'v': '大陆'}, {'n': '香港', 'v': '香港'}, {'n': '台湾', 'v': '台湾'}, {'n': '美国', 'v': '美国'}, {'n': '日本', 'v': '日本'}, {'n': '韩国', 'v': '韩国'}, {'n': '英国', 'v': '英国'}, {'n': '法国', 'v': '法国'}, {'n': '德国', 'v': '德国'}, {'n': '印度', 'v': '印度'}, {'n': '泰国', 'v': '泰国'}, {'n': '丹麦', 'v': '丹麦'}, {'n': '瑞典', 'v': '瑞典'}, {'n': '巴西', 'v': '巴西'}, {'n': '加拿大', 'v': '加拿大'}, {'n': '俄罗斯', 'v': '俄罗斯'}, {'n': '意大利', 'v': '意大利'}, {'n': '比利时', 'v': '比利时'}, {'n': '爱尔兰', 'v': '爱尔兰'}, {'n': '西班牙', 'v': '西班牙'}, {'n': '澳大利亚', 'v': '澳大利亚'}, {'n': '其他', 'v': '其他'}]}, {'key': 'lang', 'name': '语言:', 'value': [{'n': '全部', 'v': ''}, {'n': '国语', 'v': '国语'}, {'n': '粤语', 'v': '粤语'}, {'n': '英语', 'v': '英语'}, {'n': '日语', 'v': '日语'}, {'n': '韩语', 'v': '韩语'}, {'n': '法语', 'v': '法语'}, {'n': '其他', 'v': '其他'}]}, {'key': 'year', 'name': '年份:', 'value': [{'n': '全部', 'v': ''}, {'n': '2025', 'v': '2025'}, {'n': '2024', 'v': '2024'}, {'n': '2023', 'v': '2023'}, {'n': '2022', 'v': '2022'}, {'n': '2021', 'v': '2021'}, {'n': '2020', 'v': '2020'}, {'n': '10年代', 'v': '10年代'}, {'n': '00年代', 'v': '00年代'}, {'n': '90年代', 'v': '90年代'}, {'n': '80年代', 'v': '80年代'}, {'n': '更早', 'v': '更早'}]}, {'key': 'by', 'name': '排序:', 'value': [{'n': '综合', 'v': '1'}, {'n': '最新', 'v': '2'}, {'n': '最热', 'v': '3'}, {'n': '评分', 'v': '4'}]}], '2': [{'key': 'class', 'name': '类型:', 'value': [{'n': '全部', 'v': ''}, {'n': '剧情', 'v': '剧情'}, {'n': '爱情', 'v': '爱情'}, {'n': '喜剧', 'v': '喜剧'}, {'n': '犯罪', 'v': '犯罪'}, {'n': '悬疑', 'v': '悬疑'}, {'n': '古装', 'v': '古装'}, {'n': '动作', 'v': '动作'}, {'n': '家庭', 'v': '家庭'}, {'n': '惊悚', 'v': '惊悚'}, {'n': '奇幻', 'v': '奇幻'}, {'n': '美剧', 'v': '美剧'}, {'n': '科幻', 'v': '科幻'}, {'n': '历史', 'v': '历史'}, {'n': '战争', 'v': '战争'}, {'n': '韩剧', 'v': '韩剧'}, {'n': '武侠', 'v': '武侠'}, {'n': '言情', 'v': '言情'}, {'n': '恐怖', 'v': '恐怖'}, {'n': '冒险', 'v': '冒险'}, {'n': '都市', 'v': '都市'}, {'n': '职场', 'v': '职场'}]}, {'key': 'area', 'name': '地区:', 'value': [{'n': '地区', 'v': ''}, {'n': '大陆', 'v': '大陆'}, {'n': '香港', 'v': '香港'}, {'n': '韩国', 'v': '韩国'}, {'n': '美国', 'v': '美国'}, {'n': '日本', 'v': '日本'}, {'n': '法国', 'v': '法国'}, {'n': '英国', 'v': '英国'}, {'n': '德国', 'v': '德国'}, {'n': '台湾', 'v': '台湾'}, {'n': '泰国', 'v': '泰国'}, {'n': '印度', 'v': '印度'}, {'n': '其他', 'v': '其他'}]}, {'key': 'lang', 'name': '语言:', 'value': [{'n': '全部', 'v': ''}, {'n': '国语', 'v': '国语'}, {'n': '粤语', 'v': '粤语'}, {'n': '英语', 'v': '英语'}, {'n': '日语', 'v': '日语'}, {'n': '韩语', 'v': '韩语'}, {'n': '法语', 'v': '法语'}, {'n': '其他', 'v': '其他'}]}, {'key': 'year', 'name': '年份:', 'value': [{'n': '全部', 'v': ''}, {'n': '2025', 'v': '2025'}, {'n': '2024', 'v': '2024'}, {'n': '2023', 'v': '2023'}, {'n': '2022', 'v': '2022'}, {'n': '2021', 'v': '2021'}, {'n': '2020', 'v': '2020'}, {'n': '10年代', 'v': '10年代'}, {'n': '00年代', 'v': '00年代'}, {'n': '90年代', 'v': '90年代'}, {'n': '80年代', 'v': '80年代'}, {'n': '更早', 'v': '更早'}]}, {'key': 'by', 'name': '排序:', 'value': [{'n': '综合', 'v': '1'}, {'n': '最新', 'v': '2'}, {'n': '最热', 'v': '3'}, {'n': '评分', 'v': '4'}]}], '3': [{'key': 'class', 'name': '类型:', 'value': [{'n': '全部', 'v': ''}, {'n': '动态漫画', 'v': '动态漫画'}, {'n': '剧情', 'v': '剧情'}, {'n': '动画', 'v': '动画'}, {'n': '喜剧', 'v': '喜剧'}, {'n': '冒险', 'v': '冒险'}, {'n': '动作', 'v': '动作'}, {'n': '奇幻', 'v': '奇幻'}, {'n': '科幻', 'v': '科幻'}, {'n': '儿童', 'v': '儿童'}, {'n': '搞笑', 'v': '搞笑'}, {'n': '爱情', 'v': '爱情'}, {'n': '家庭', 'v': '家庭'}, {'n': '短片', 'v': '短片'}, {'n': '热血', 'v': '热血'}, {'n': '益智', 'v': '益智'}, {'n': '悬疑', 'v': '悬疑'}, {'n': '经典', 'v': '经典'}, {'n': '校园', 'v': '校园'}, {'n': 'Anime', 'v': 'Anime'}, {'n': '运动', 'v': '运动'}, {'n': '亲子', 'v': '亲子'}, {'n': '青春', 'v': '青春'}, {'n': '恋爱', 'v': '恋爱'}, {'n': '武侠', 'v': '武侠'}, {'n': '惊悚', 'v': '惊悚'}]}, {'key': 'area', 'name': '地区:', 'value': [{'n': '全部', 'v': ''}, {'n': '日本', 'v': '日本'}, {'n': '大陆', 'v': '大陆'}, {'n': '台湾', 'v': '台湾'}, {'n': '美国', 'v': '美国'}, {'n': '香港', 'v': '香港'}, {'n': '韩国', 'v': '韩国'}, {'n': '英国', 'v': '英国'}, {'n': '法国', 'v': '法国'}, {'n': '德国', 'v': '德国'}, {'n': '印度', 'v': '印度'}, {'n': '泰国', 'v': '泰国'}, {'n': '丹麦', 'v': '丹麦'}, {'n': '瑞典', 'v': '瑞典'}, {'n': '巴西', 'v': '巴西'}, {'n': '加拿大', 'v': '加拿大'}, {'n': '俄罗斯', 'v': '俄罗斯'}, {'n': '意大利', 'v': '意大利'}, {'n': '比利时', 'v': '比利时'}, {'n': '爱尔兰', 'v': '爱尔兰'}, {'n': '西班牙', 'v': '西班牙'}, {'n': '澳大利亚', 'v': '澳大利亚'}, {'n': '其他', 'v': '其他'}]}, {'key': 'lang', 'name': '语言:', 'value': [{'n': '全部', 'v': ''}, {'n': '国语', 'v': '国语'}, {'n': '粤语', 'v': '粤语'}, {'n': '英语', 'v': '英语'}, {'n': '日语', 'v': '日语'}, {'n': '韩语', 'v': '韩语'}, {'n': '法语', 'v': '法语'}, {'n': '其他', 'v': '其他'}]}, {'key': 'year', 'name': '年份:', 'value': [{'n': '全部', 'v': ''}, {'n': '2025', 'v': '2025'}, {'n': '2024', 'v': '2024'}, {'n': '2023', 'v': '2023'}, {'n': '2022', 'v': '2022'}, {'n': '2021', 'v': '2021'}, {'n': '2020', 'v': '2020'}, {'n': '10年代', 'v': '10年代'}, {'n': '00年代', 'v': '00年代'}, {'n': '90年代', 'v': '90年代'}, {'n': '80年代', 'v': '80年代'}, {'n': '更早', 'v': '更早'}]}, {'key': 'by', 'name': '排序:', 'value': [{'n': '综合', 'v': '1'}, {'n': '最新', 'v': '2'}, {'n': '最热', 'v': '3'}, {'n': '评分', 'v': '4'}]}], '4': [{'key': 'class', 'name': '类型:', 'value': [{'n': '全部', 'v': ''}, {'n': '纪录', 'v': '纪录'}, {'n': '真人秀', 'v': '真人秀'}, {'n': '记录', 'v': '记录'}, {'n': '脱口秀', 'v': '脱口秀'}, {'n': '剧情', 'v': '剧情'}, {'n': '历史', 'v': '历史'}, {'n': '喜剧', 'v': '喜剧'}, {'n': '传记', 'v': '传记'}, {'n': '相声', 'v': '相声'}, {'n': '节目', 'v': '节目'}, {'n': '歌舞', 'v': '歌舞'}, {'n': '冒险', 'v': '冒险'}, {'n': '运动', 'v': '运动'}, {'n': 'Season', 'v': 'Season'}, {'n': '犯罪', 'v': '犯罪'}, {'n': '短片', 'v': '短片'}, {'n': '搞笑', 'v': '搞笑'}, {'n': '晚会', 'v': '晚会'}]}, {'key': 'area', 'name': '地区:', 'value': [{'n': '全部', 'v': ''}, {'n': '大陆', 'v': '大陆'}, {'n': '香港', 'v': '香港'}, {'n': '台湾', 'v': '台湾'}, {'n': '美国', 'v': '美国'}, {'n': '日本', 'v': '日本'}, {'n': '韩国', 'v': '韩国'}, {'n': '其他', 'v': '其他'}]}, {'key': 'lang', 'name': '语言:', 'value': [{'n': '全部', 'v': ''}, {'n': '国语', 'v': '国语'}, {'n': '粤语', 'v': '粤语'}, {'n': '英语', 'v': '英语'}, {'n': '日语', 'v': '日语'}, {'n': '韩语', 'v': '韩语'}, {'n': '法语', 'v': '法语'}, {'n': '其他', 'v': '其他'}]}, {'key': 'year', 'name': '年份:', 'value': [{'n': '全部', 'v': ''}, {'n': '2025', 'v': '2025'}, {'n': '2024', 'v': '2024'}, {'n': '2023', 'v': '2023'}, {'n': '2022', 'v': '2022'}, {'n': '2021', 'v': '2021'}, {'n': '2020', 'v': '2020'}, {'n': '10年代', 'v': '10年代'}, {'n': '00年代', 'v': '00年代'}, {'n': '90年代', 'v': '90年代'}, {'n': '80年代', 'v': '80年代'}, {'n': '更早', 'v': '更早'}]}, {'key': 'by', 'name': '排序:', 'value': [{'n': '综合', 'v': '1'}, {'n': '最新', 'v': '2'}, {'n': '最热', 'v': '3'}, {'n': '评分', 'v': '4'}]}], '6': [{'key': 'class', 'name': '类型:', 'value': [{'n': '类型', 'v': ''}, {'n': '王爷太子', 'v': '王爷太子'}, {'n': '霸道总裁', 'v': '霸道总裁'}, {'n': '屌丝逆袭', 'v': '屌丝逆袭'}, {'n': '赘婿系列', 'v': '赘婿系列'}, {'n': '重生系列', 'v': '重生系列'}, {'n': '穿越短剧', 'v': '穿越短剧'}, {'n': '美女总裁', 'v': '美女总裁'}, {'n': '娇妻系列', 'v': '娇妻系列'}, {'n': '龙王系列', 'v': '龙王系列'}, {'n': '都市言情', 'v': '都市言情'}, {'n': '逆袭', 'v': '逆袭'}, {'n': '甜宠', 'v': '甜宠'}, {'n': '虐恋', 'v': '虐恋'}, {'n': '穿越', 'v': '穿越'}, {'n': '重生', 'v': '重生'}, {'n': '剧情', 'v': '剧情'}, {'n': '科幻', 'v': '科幻'}, {'n': '武侠', 'v': '武侠'}, {'n': '爱情', 'v': '爱情'}, {'n': '动作', 'v': '动作'}, {'n': '战争', 'v': '战争'}, {'n': '冒险', 'v': '冒险'}, {'n': '其它', 'v': '其它'}]}, {'key': 'area', 'name': '排序:', 'value': [{'n': '综合', 'v': '1'}, {'n': '最新', 'v': '2'}, {'n': '最热', 'v': '3'}]}]},
            filter_def:{},
            play_parse: true,
            lazy: '',
            limit: 6,
            推荐:'',
            double: true, // 推荐内容是否双层定位
            一级:`js:
						var d = [],html;  
        			 let pdfh = jsp.pdfh;
        			 let pdfa = jsp.pdfa;
        			 let pd = jsp.pd;

						for(let i = 0; i < 5; i++){
							html = get_html(input);	
							if(/window.onload/.test(html)){  continue; }else{ break; }
						}
										
						let items = pdfa(html, '.module-item');
						print(items)
						for(let i = 0; i < items.length; i++){
							 let title = pdfa(items[i],".v-item-title")[1];
            			d.push({
                			title: pdfh(title, '.v-item-title&&Text'),
                			desc: pdfh(items[i], '.v-item-bottom&&Text'),
                			pic_url: "https://vres.mgdnka.cn" +  pd(items[i], 'img:eq(1)&&data-original').split("com")[1],
                			url: pd(items[i], 'a&&href')
            			})
        			};
        			setResult(d)
					  `,
            二级: `js:
						eval(getCryptoJS());
						let pdfh = jsp.pdfh;
        			 let pdfa = jsp.pdfa;
        			 let pd = jsp.pd;
						let play_froms = [];
						let play_urls = [];

						for(let i = 0; i < 5; i++){
							html = get_html(input);	
							if(/window.onload/.test(html)){  continue; }else{ break; }
						}
		
						let forms = pdfa(html,".swiper.source-swiper&&.swiper-wrapper&&.swiper-slide");
						let items = pdfa(html,".episode-box-main&&.episode-list");
						for(let i = 0; i < forms.length; i++){
							play_froms.push(pdfh(forms[i],".source-item-label&&Text"));
							let _items =  pdfa(items[i],".episode-list&&a"), urls = [];
							for(let j = 0; j < _items.length; j++){	urls.push(pdfh(_items[j],"a&&Text") + "$" + pd(_items[j],"a&&href")) }	
							play_urls.push(urls.join("#"))
						} 
						
						
						
						let infos = pdfa(html,".detail-info-row"), tags = pdfa(html,".detail-tags-item");
						
						VOD = {
							vod_id: "", 
							vod_name: pdfh(html,".detail-title&&strong:eq(1)&&Text"),   
							vod_pic:  "", 
							type_name: pdfh(tags[2],"a&&Text"), 
							vod_year: pdfh(infos[2],".detail-info-row-main&&Text"),
							vod_area: pdfh(tags[1],"a&&Text"), 
							vod_remarks: pdfh(infos[3],".detail-info-row-main&&Text"),
							vod_actor: pdfh(infos[1],".detail-info-row-main&&Text"),
							vod_director: pdfh(infos[0],".detail-info-row-main&&Text"),
							vod_content: pdfh(html,".detail-desc&&Text"),
							vod_play_from: play_froms.join("$$$"),
							vod_play_url: play_urls.join("$$$")
						};
						
						`,
            搜索: `js:
                     let d = [],html;
        			 let pdfh = jsp.pdfh;
        			 let pdfa = jsp.pdfa;
        			 let pd = jsp.pd;

						for(let i = 0; i < 5; i++){
							html = get_html(HOST);	
							if(/window.onload/.test(html)){  continue; }else{ break; }
						}
						let t = html.match(/value="([^"]*)"/)[1];
						input = input + "&t=" + encodeURIComponent(t);
						for(let i = 0; i < 5; i++){
							html = get_html(input);	
							if(/window.onload/.test(html)){  continue; }else{ break; }
						}

						let items = pdfa(html, '.search-result-list&&a');
						print(items)
						for(let i = 0; i < items.length; i++){
            			d.push({
                			title: pdfh(items[i], '.title&&Text'),
                			desc: pdfh(items[i], '.tags&&Text'),
                			pic_url: "https://vres.mgdnka.cn" + pd(items[i], 'img&&data-original').split("com")[1],
                			url: pd(items[i], 'a&&href')
            			})
        			};	
        			setResult(d)
				  `
        }