

var rule = {
            title: '爱思电影',
            host: 'https://www.24dy.vip',
            timeout:15000,
            url: '/fyclassfyfilter.html',
            searchUrl: '/vodsearch/-------------.html?wd=**',
            searchable: 2,//是否启用全局搜索,
            quickSearch: 1,//是否启用快速搜索,
            filterable: 0,//是否启用分类筛选,
            headers: { 'User-Agent': "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/136.0.0.0 Safari/537.36 Edg/136.0.0.0"},//网站的请求头,完整支持所有的,常带ua和cookies
            class_url: 'label/hot&label/new&label/week&vodshow/20&vodshow/37&vodshow/43&vodshow/45',      //'choice&film&movie&tv&variety&cartoon&child&mini_drama&mid_video'
    			 class_name: '热榜&今日更新&追剧周表&电影&连续剧&动縵&综艺',
            //class_parse: '.wap-show0&&ul&&li0;a&&Text;a&&href;.*/(\\d+)-----------.html',//a&&href  a&&Text .wap-show0&&ul&&li0
            cate_exclude: '',
            filter_url: '_{{fl.class}}--{{fl.sort}}---{{fl.letter}}---fypage---',
            filter: {'vodshow/20': [{'key': 'class', 'name': '类型', 'value': [{'n': '全部', 'v': '20'}, {'n': '动作片', 'v': '21'}, {'n': '喜剧片', 'v': '22'}, {'n': '爱情片', 'v': '23'}, {'n': '科幻片', 'v': '24'}, {'n': '恐怖片', 'v': '25'}, {'n': '剧情片', 'v': '26'}, {'n': '战争片', 'v': '27'}, {'n': '纪录片', 'v': '35'}, {'n': '短剧', 'v': '37'}]}, {'key': 'letter', 'name': '字母', 'value': [{'n': '字母', 'v': ''}, {'n': 'A', 'v': 'A'}, {'n': 'B', 'v': 'B'}, {'n': 'C', 'v': 'C'}, {'n': 'D', 'v': 'D'}, {'n': 'E', 'v': 'E'}, {'n': 'F', 'v': 'F'}, {'n': 'G', 'v': 'G'}, {'n': 'H', 'v': 'H'}, {'n': 'I', 'v': 'I'}, {'n': 'J', 'v': 'J'}, {'n': 'K', 'v': 'K'}, {'n': 'L', 'v': 'L'}, {'n': 'M', 'v': 'M'}, {'n': 'N', 'v': 'N'}, {'n': 'O', 'v': 'O'}, {'n': 'P', 'v': 'P'}, {'n': 'Q', 'v': 'Q'}, {'n': 'R', 'v': 'R'}, {'n': 'S', 'v': 'S'}, {'n': 'T', 'v': 'T'}, {'n': 'U', 'v': 'U'}, {'n': 'V', 'v': 'V'}, {'n': 'W', 'v': 'W'}, {'n': 'X', 'v': 'X'}, {'n': 'Y', 'v': 'Y'}, {'n': 'Z', 'v': 'Z'}, {'n': '0-9', 'v': '0-9'}]}, {'key': 'sort', 'name': '排序', 'value': [{'n': '人气排序', 'v': 'time'}, {'n': '评分排序', 'v': 'hits'}, {'n': '时间排序', 'v': 'score'}]}], 'vodshow/37': [{'key': 'class', 'name': '类型', 'value': [{'n': '全部', 'v': '37'}, {'n': '国产剧', 'v': '38'}, {'n': '港台剧', 'v': '39'}, {'n': '欧美剧', 'v': '40'}, {'n': '日韩剧', 'v': '41'}, {'n': '其他剧', 'v': '42'}]}, {'key': 'letter', 'name': '字母', 'value': [{'n': '字母', 'v': ''}, {'n': 'A', 'v': 'A'}, {'n': 'B', 'v': 'B'}, {'n': 'C', 'v': 'C'}, {'n': 'D', 'v': 'D'}, {'n': 'E', 'v': 'E'}, {'n': 'F', 'v': 'F'}, {'n': 'G', 'v': 'G'}, {'n': 'H', 'v': 'H'}, {'n': 'I', 'v': 'I'}, {'n': 'J', 'v': 'J'}, {'n': 'K', 'v': 'K'}, {'n': 'L', 'v': 'L'}, {'n': 'M', 'v': 'M'}, {'n': 'N', 'v': 'N'}, {'n': 'O', 'v': 'O'}, {'n': 'P', 'v': 'P'}, {'n': 'Q', 'v': 'Q'}, {'n': 'R', 'v': 'R'}, {'n': 'S', 'v': 'S'}, {'n': 'T', 'v': 'T'}, {'n': 'U', 'v': 'U'}, {'n': 'V', 'v': 'V'}, {'n': 'W', 'v': 'W'}, {'n': 'X', 'v': 'X'}, {'n': 'Y', 'v': 'Y'}, {'n': 'Z', 'v': 'Z'}, {'n': '0-9', 'v': '0-9'}]}, {'key': 'sort', 'name': '排序', 'value': [{'n': '人气排序', 'v': 'time'}, {'n': '评分排序', 'v': 'hits'}, {'n': '时间排序', 'v': 'score'}]}], 'vodshow/43': [{'key': 'class', 'name': '类型', 'value': [{'n': '全部', 'v': '43'}, {'n': '国产动漫', 'v': '44'}, {'n': '日韩动漫', 'v': '52'}, {'n': '欧美动漫', 'v': '53'}]}, {'key': 'letter', 'name': '字母', 'value': [{'n': '字母', 'v': ''}, {'n': 'A', 'v': 'A'}, {'n': 'B', 'v': 'B'}, {'n': 'C', 'v': 'C'}, {'n': 'D', 'v': 'D'}, {'n': 'E', 'v': 'E'}, {'n': 'F', 'v': 'F'}, {'n': 'G', 'v': 'G'}, {'n': 'H', 'v': 'H'}, {'n': 'I', 'v': 'I'}, {'n': 'J', 'v': 'J'}, {'n': 'K', 'v': 'K'}, {'n': 'L', 'v': 'L'}, {'n': 'M', 'v': 'M'}, {'n': 'N', 'v': 'N'}, {'n': 'O', 'v': 'O'}, {'n': 'P', 'v': 'P'}, {'n': 'Q', 'v': 'Q'}, {'n': 'R', 'v': 'R'}, {'n': 'S', 'v': 'S'}, {'n': 'T', 'v': 'T'}, {'n': 'U', 'v': 'U'}, {'n': 'V', 'v': 'V'}, {'n': 'W', 'v': 'W'}, {'n': 'X', 'v': 'X'}, {'n': 'Y', 'v': 'Y'}, {'n': 'Z', 'v': 'Z'}, {'n': '0-9', 'v': '0-9'}]}, {'key': 'sort', 'name': '排序', 'value': [{'n': '人气排序', 'v': 'time'}, {'n': '评分排序', 'v': 'hits'}, {'n': '时间排序', 'v': 'score'}]}], 'vodshow/45': [{'key': 'class', 'name': '类型', 'value': [{'n': '全部', 'v': '45'}, {'n': '大陆综艺', 'v': '46'}, {'n': '港台综艺', 'v': '54'}, {'n': '日韩综艺', 'v': '55'}, {'n': '欧美综艺', 'v': '56'}]}, {'key': 'letter', 'name': '字母', 'value': [{'n': '字母', 'v': ''}, {'n': 'A', 'v': 'A'}, {'n': 'B', 'v': 'B'}, {'n': 'C', 'v': 'C'}, {'n': 'D', 'v': 'D'}, {'n': 'E', 'v': 'E'}, {'n': 'F', 'v': 'F'}, {'n': 'G', 'v': 'G'}, {'n': 'H', 'v': 'H'}, {'n': 'I', 'v': 'I'}, {'n': 'J', 'v': 'J'}, {'n': 'K', 'v': 'K'}, {'n': 'L', 'v': 'L'}, {'n': 'M', 'v': 'M'}, {'n': 'N', 'v': 'N'}, {'n': 'O', 'v': 'O'}, {'n': 'P', 'v': 'P'}, {'n': 'Q', 'v': 'Q'}, {'n': 'R', 'v': 'R'}, {'n': 'S', 'v': 'S'}, {'n': 'T', 'v': 'T'}, {'n': 'U', 'v': 'U'}, {'n': 'V', 'v': 'V'}, {'n': 'W', 'v': 'W'}, {'n': 'X', 'v': 'X'}, {'n': 'Y', 'v': 'Y'}, {'n': 'Z', 'v': 'Z'}, {'n': '0-9', 'v': '0-9'}]}, {'key': 'sort', 'name': '排序', 'value': [{'n': '人气排序', 'v': 'time'}, {'n': '评分排序', 'v': 'hits'}, {'n': '时间排序', 'v': 'score'}]}]},
            play_parse: true,
            lazy: '',
            limit: 6,
            推荐:'',
            double: true, // 推荐内容是否双层定位
            一级:`js:
						let d = [];
						let html;
						let items;
						let pdfh = jsp.pdfh;
						let pdfa = jsp.pdfa;
						let pd = jsp.pd;
						if(/label/.test(input)){ input = input.replace(/_.*/, "") } else { if(input.match(/_(.*?)-/)[1] == "") { input = input.replace(/_/, "");  } else { input = input.replace(/vodshow\\/\\d+_/, "vodshow/"); } }				
						html =  request(input);
						if(/hot/.test(input)){ items = pdfa(html,'.tab-list.active&&.module-card-item.module-item');
							for(let i = 0; i < items.length; i++){ d.push({ title: pd(items[i],'img&&alt'), desc: pdfh(items[i],'.module-item-note&&Text'), pic_url: pd(items[i],'img&&data-original'), url: pd(items[i],'a&&href')}) } }
						else if(/new/.test(input)){ items = pdfa(html,'.tab-list.active&&.module-poster-items&&a');
							for(let i = 0; i < items.length; i++){ d.push({ title: pd(items[i],'img&&alt'), desc: pdfh(items[i],'.module-item-note&&Text'), pic_url: pd(items[i],'img&&data-original'), url: pd(items[i],'a&&href')}) } }
						else if(/week/.test(input)){ items = pdfa(html,'.tab-list.active&&.module-poster-items-base&&a');
							for(let i = 0; i < items.length; i++){ d.push({ title: pd(items[i],'img&&alt'), desc: pdfh(items[i],'.module-item-note&&Text'), pic_url: pd(items[i],'img&&data-original'), url: pd(items[i],'a&&href')}) } }
						else { items = pdfa(html,'.module-poster-items-base&&a');   
							for(let i = 0; i < items.length; i++){ d.push({ title: pd(items[i],'img&&alt'), desc: pdfh(items[i],'.module-item-note&&Text'), pic_url: pd(items[i],'img&&data-original'), url: pd(items[i],'a&&href')}) } } 
						setResult(d)
						`,
            二级:`js:
						let html =  request(input);
						let pdfh = jsp.pdfh;
						let pdfa = jsp.pdfa;
						let pd = jsp.pd;
						let play_froms = pdfh(html,'.hisSwiper&&Text').replace(/ /g,"*").replace(/\\n/g, '*').split("*")
						let play_urls = [];
						let ext = pdfh(html,'.module.module-info&&.module-info-main&&.module-info-tag&&Text').replace("/","").replace(/ /g,"*").replace(/\\n/g, '*').split("*")
						let items = pdfa(html,'.module-play-list-base');
						for(let i = 0; i < items.length; i++){
							let play_url = [];
							let infos = pdfa(items[i],'a');
							for(let j = 0; j < infos.length; j++){ let url = pdfh(infos[j],'a&&Text') + "$" + pd(infos[j],'a&&href'); play_url.push(url); }
							play_urls.push(play_url.join("#"))
						}

						VOD = {
							vod_id: '',
							vod_name: pdfh(html,'.module.module-info&&.module-info-main&&h1&&Text') || "",   
							vod_pic: '',
							type_name: ext[2] || "",
							vod_year: ext[0] || "",
							vod_area: ext[1] || "",
							vod_remarks: '',
							vod_actor:  '',
							vod_director: '',
							vod_content: pdfh(html,'.module-info-introduction-content&&Text') || "",
							vod_play_from:  play_froms.join("$$$"),
							vod_play_url: play_urls.join("$$$")
						};
						`,

            搜索:`js:
						let d = [];
						let html;
						let pdfh = jsp.pdfh;
						let pdfa = jsp.pdfa;
						let pd = jsp.pd;
						html =  request(input);
						let items = pdfa(html,'.module-card-items&&.module-item');
						print(items)
						for(let i = 0; i < items.length; i++){
							d.push({
								title: pd(items[i],'img&&alt'),
								desc: pdfh(items[i],'.module-item-note&&Text'),
								pic_url: pd(items[i],'img&&data-original'),
								url: pd(items[i],'a&&href')
							})
						}
						setResult(d)
						`
        }