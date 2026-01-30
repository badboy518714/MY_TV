
var rule = {
            title: '爱给',
            host: 'https://www.aigei.com',
            hostjs:'',
            timeout: 15000,
            url: '/set/fyclass.html?term=fyfilter&page=fypage',
            searchUrl: '/search/**',
            searchable: 2,//是否启用全局搜索,
            quickSearch: 0,//是否启用快速搜索,
            filterable: 0,//是否启用分类筛选,
            headers: { 'User-Agent': 'PC_UA'},//网站的请求头,完整支持所有的,常带ua和cookies
            class_url:'audio_douyinrege_3&jingdianlaoge_mv&chezaiyinyue_mvshipi&chezaijinbaogequtuij&beyondjingdiangequ_m&mvjingxuan&jiubayedianbengdixia&hanguowudaoxianchang&jiubayediandadiexian&zhouhuimin_mvzhuanji&huanraoyinyuemv&hanguonvtuanwudao_mv&dongganxuanlijiezou_5&dongganxuanlijiezou_5',
    			 class_name:'音乐&经典老歌MV&车载音乐MV视频&车载劲爆歌曲&Beyond经典歌曲&MV精选&酒吧夜店蹦迪&韩国舞蹈&夜店打碟&周慧敏MV&环绕音乐mv&韩国女团舞蹈&动感炫丽节奏',
            //class_parse: '.wap-show0&&ul&&li0;a&&Text;a&&href;.*/(\\d+)-----------.html',//a&&href  a&&Text .wap-show0&&ul&&li0
            cate_exclude: '',
            filter_url: '{{fl.class1 or fl.class2 or fl.class3 or fl.class4}}-{{fl.form}}-{{fl.vip}}-{{fl.huazhi}}-{{fl.lang}}-{{fl.huazhi}}-{{fl.huazhi}}-{{fl.huazhi}}',
            filter: {"audio_douyinrege_3":[
				{"key":"class1","name":"歌曲","value":[{"n":"抖音热歌1","v":"douyinrege_3"},{"n":"抖音热歌2","v":"douyinregepaixingban_1"},{"n":" 2024抖音热门音乐","v":"2024douyinremenyinyu"},{"n":"80年代荷东DISCO","v":"80niandaihedong_disc"},{"n":"经典英文","v":"jingdianyingwengequ_1"},{"n":"总有一首歌","v":"zongyouyishouge_huir"},{"n":" 顶级音质-HiFi","v":"dingjiyinzhi_hi_fiyi"},{"n":" 草原好歌","v":"caoyuanhaogejingxuan_1"},{"n":"网抑云伤感歌曲","v":"wangyiyunshanggangeq"},{"n":" 西方古典音乐","v":"xifanggudianyinyue_1"}]},
				{"key":"class2","name":"歌曲","value":[{"n":"酒吧专属摇滚","v":"jiubazhuanshuyaogund"},{"n":"  民谣","v":"jiubayinyuebangdan_d"},{"n":"怀旧金曲｜","v":"huaijiujinqu_jingdia"},{"n":"  古风歌曲","v":"gufenggequ_3"},{"n":" 20232024抖音热歌","v":"2023_2024douyinregel"},{"n":"温暖人心","v":"meitianyishou_wennua"},{"n":"高音质DJ","v":"zhongwenchezaigaoyin"},{"n":" 2024流行音乐集合","v":"2024liuxingyinyuejih"},{"n":" 最美梵音佛歌","v":"zuimeifanyinfoge"},{"n":"道家仙乐","v":"daojiaxianle"}]},
				{"key":"class3","name":"歌曲","value":[{"n":"DJ慢摇爵士","v":"jiubayinyuebangdan_d"},{"n":"  背景音乐100首","v":"jingdianbeijingyinyu_7"},{"n":" 对唱经典｜","v":"duichangjingdian_100"},{"n":"  革命红歌","v":"geminghongge"},{"n":" 经典老歌翻唱","v":"jingdianlaogefanchan"},{"n":" 车载狂热节奏","v":"chezaikuangrejiezou"},{"n":"  2024流行热歌","v":"2024naxiechaohaoting_2"},{"n":" 好听的歌曲","v":"yixiehaotingdegequ"},{"n":"  粤语乐坛老歌","v":"yueyuletanlaogecheng"},{"n":"怀旧100首","v":"jingdianlaoge_jiqing"}]},
				{"key":"class4","name":"歌曲","value":[{"n":" 伤感凄美","v":"shangganqimeideyinyu"},{"n":"   华语流行KTV","v":"huayuliuxing_ktvbidi"},{"n":"  民歌经典100首｜","v":"mingejingdian100shou"},{"n":"  2022热歌速递","v":"2022regesudi"},{"n":"  2024火爆全网","v":"2024huobaoquanwangli_1"},{"n":" 南无阿弥陀佛","v":"nanwuemituofo"},{"n":"抖音劲爆DJ音乐","v":"douyinjinbaoliuxing_2"},{"n":" 影视歌曲","v":"yingshigequ"},{"n":"  广场舞曲","v":"guangchangwuqu"},{"n":"流淌的民谣","v":"liutangdeminyao_ling"}]}
			]},
            filter_def:{},
            play_parse: true,
				  pagecount:{"jingdianlaoge_mv":1},
            lazy: `js:
						if(/encrypt/.test(input)){
							function sleep(time){
								let currentTimestamp = new Date().getTime(),timestampOneSecondLater = currentTimestamp +time;
								while(currentTimestamp < timestampOneSecondLater){ currentTimestamp = new Date().getTime();}
							}
							function updata_add(params_J,F,vvvvvvviisssss,pageCreateTime){
								return 'var vvvvvvviisssss = "' + vvvvvvviisssss + '";\\nvar params_J = ' + JSON.stringify(params_J) + ';\\nvar F = "' + F + '";\\nvar pageCreateTime = ' + pageCreateTime + ';\\nconsole.log(get_result(params_J,F,vvvvvvviisssss,pageCreateTime));'
							}
							function get_v_ETag(params_J,F,vvvvvvviisssss,pageCreateTime,source_code,get_token_url,get_result_url,token_data){
								let updata = updata_add(params_J,F,vvvvvvviisssss,pageCreateTime);
								token_data["source_code"] = source_code + updata;
								//print("updata:::",updata);
								let _token = JSON.parse(request(get_token_url, {method:"POST",headers:{ "content-type": "application/x-www-form-urlencoded; charset=UTF-8","user-agent": PC_UA}, body:token_data}))["token"];
								print("token:::",_token);
								sleep(1000)
								let response = JSON.parse(request(get_result_url + _token, { headers:{ "content-type": "application/x-www-form-urlencoded; charset=UTF-8","user-agent": PC_UA }}))["stdout"];  		
								//print("response:::",atob(response));
								let v_ETag = JSON.parse(atob(response).replace(/\\n/g,"").replace(/'/g,'"').replace(/v:/g,'"v":').replace(/ETag:/g,'"ETag":'))
								return v_ETag;
							}

							let get_token_url = "https://api.json.cn/try_run?action=get_token", get_result_url = "https://api.json.cn/try_run?action=get_result&token=";
							let token_data = {"source_code": "",	"language_id": "63",	"command_line_arguments": "",	"stdin": ""	};
							let source_code = request("https://gitee.com/badboy518/happy/raw/master/My_drpy/aigei.js", { headers: { 'User-Agent': 'PC_UA'}});							//print("source_code:::",source_code);
					
							let params_cookie = atob(input.match(/encrypt=(.*)/)[1]).split("&"), params = params_cookie[0].split("_"), Cookie = params_cookie[1];
							print("params:::",params);print("Cookie:::",Cookie);
							let pageCreateTime=params[0], vvvvvvviisssss=params[1], F=params[2],cccllpptttgt=params[3], rurl=params[4],extime=params[5], token=params[6];
							let params_J = { 'type': 'audio_mp3','fileUuid': '','model': 'play','itemId': rurl,'item': null,'rescUrl': rurl,'expireTime': extime,'token': token,'callBack': 'callBackAudioFilePlay',
									'resJsCallback': 'downloadAudioCallback','custPlayCallBack': null,'downUuid': null,'customData': null }
							let v_ETag = get_v_ETag(params_J,F,vvvvvvviisssss,pageCreateTime,source_code,get_token_url,get_result_url,token_data);
							print("v_ETag:::",v_ETag)

							let headers = {"Content-Type":"application/x-www-form-urlencoded;charset=UTF-8","cccllpptttgt":cccllpptttgt,"referer":"https://www.aigei.com","user-agent":PC_UA,
								"x-requested-etag":v_ETag["ETag"],"x-requested-with":"XMLHttpRequest","Cookie": Cookie};					
							let html = request("https://www.aigei.com/f/d/audio_mp3",{ headers: headers, method: "POST", body: {"v": v_ETag["v"] }});
							let message = JSON.parse(html)["message"];
							let url = atob(message)
							print(url)
		
							input = {
								jx: 0,
								url: url,
								parse: 0,
								header: JSON.stringify(headers)
							}

						}else{
							let infos = input.split("?");
							input = {
								jx: 0,
								url: infos[0],
								parse: 0,
								header: JSON.stringify({
									'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Safari/537.36 Edg/130.0.0.0',
									'referer': 'https://www.aigei.com/',
									 'Cookie': infos[1].replace(/&/g,";")
								})
							}
						}
						
						`,	
            limit: 6,
            推荐: '',
            double: true, // 推荐内容是否双层定位
            一级:`js:
						function str_to_obj(str){
							var oldObj = {},oldParts = str.split(';');
							for (var i = 0; i < oldParts.length; i++) { if(oldParts[i].length == 0){  continue;	}	var parts = oldParts[i].split('=');	oldObj[parts[0]] = parts[1]; }
							return oldObj;
						}
						function sleep(time){
							let currentTimestamp = new Date().getTime(),timestampOneSecondLater = currentTimestamp +time;
							while(currentTimestamp < timestampOneSecondLater){ currentTimestamp = new Date().getTime();}
						}
						function get_cookie(message){
							let cookies = message["set-cookie"],cookie = "",add_cookies = [];
							let new_cookies = ["wueiornjk234kj=e0ab5e71e1634e05bd7bd953f5d8a8f8","hhhssi1ill1i=01fa8f027e8935522206fe4c3885b96c-02e1f5f5444d66c76f8f0354ab9456c9"];
							for(let i = 0; i < cookies.length; i++){ cookie = cookies[i].split(";")[0]; if(/hhhssi1ill1i/.test(cookie)){ continue; } add_cookies.push(cookie); }
							for(let i = 0; i < add_cookies.length; i++){  let cookie = add_cookies[i].split("="); if(cookie.length == 0){continue;}; if(cookie[1] != ""){ new_cookies.push(cookie[0] + "=" + cookie[1]) } }
							return new_cookies.join(";")
						}
						function request_withHeaders(url,obj){ obj["withHeaders"] = true;	let html = request(url,obj);	return JSON.parse(html);	}
						
					
						let d = [];
						let pdfh = jsp.pdfh;
						let pdfa = jsp.pdfa;
						let pd = jsp.pd;
						eval(getCryptoJS());

						let Duration_url = "https://www.aigei.com/gei-res/ajaxComp/batch/itemBox/itemBoxVideoDuration", Quality_url = "https://www.aigei.com/gei-res/ajaxComp/batch/itemBox/itemBoxVideoQuality";
						let batch_url = "https://www.aigei.com/gei-res/ajaxComp/licenseMark/batch/itemBox";
						let flag_url = "https://www.aigei.com/gei-common/jsonComp/f/d/l",flag_data = { "operationSys": "Windows/10", "userAgent": PC_UA, "page": input.split("?")[0], "browser": "Edge", "browserVersion": "136.0.0.0","status": "1" };

						print("input:::",input);
						let _terms = input.match(/term=(.*)&/)[1].split(/-/),terms = [];
						_terms.slice(1).map(function(val){ if(val){ terms.push(val);} });
						input = input.replace(/term=.*&/, "term=" + terms.join("-") + "&")
						if(_terms[0] != ""){ input = input.replace(/audio_([^.]*).html/, "audio_" + _terms[0] + ".html"); }
						print("_terms:::",_terms)
						print("input:::",input);


						if(/audio/.test(input)){
							input = input.replace("audio_","");
							let result = request_withHeaders(input,{ headers:{'User-Agent': 'PC_UA'}}), html = result.body, Cookie = get_cookie(result);
							let MAX_PAGE = parseInt(pdfh(html,".blueFoot&&span:eq(-2)&&Text"));
							print("MAX_PAGE:::",MAX_PAGE,Cookie);
							if(MY_PAGE <= Math.ceil(MAX_PAGE / 10)){
								for(let i =( MY_PAGE - 1) * 10 + 1; i <= MY_PAGE * 10 && i <= MAX_PAGE; i++){
									print(i,":::",input)
									d.push({
										title: pdfh(html,'.resc-page-nav&&a:eq(1)&&Text') + "-" + i.toString() ,
										desc:  "作者：mooc1121",
										pic_url: "https://深色壁纸.xxooo.cf/",
										url: input.replace(/page=\\d+/,"page=" + i)// + "__" + Cookie
									})
								}
							}	
						}
						else{
							let pageCreateTime = new Date().getTime(); print(pageCreateTime);
							let result = request_withHeaders(input,{ headers:{'User-Agent': 'PC_UA'}}), html = result.body, Cookie = get_cookie(result);
							let items = pdfa(html,".unit-container-list&&.box-hover-shadow");

							let unitKeys = [];
							for(let i = 0; i < items.length; i++){ let unitKey = pd(items[i],".box-hover-shadow&&mkt-unit-key"); unitKeys.push({"unitKey":unitKey}); }
							let data_key = JSON.stringify(unitKeys);

							let _html = request(Duration_url,{headers:{"user-agent": PC_UA,"Content-Type":"text/html;charset=UTF-8" ,"Cookie":Cookie},method:"POST", body:data_key } ), infos = pdfa(_html,"div");  

							_html = request(Quality_url,{headers:{"user-agent": PC_UA,"Content-Type":"text/html;charset=UTF-8" },method:"POST", body:data_key } );
							let _infos = pdfa(_html,"div");  
							//print("infos:::",_infos);

							let vvvvvvviisssss = html.match(/vvvvvvviisssss = "([^"]*)"/)[1], F = html.match(/id="pIii111lllE" type="hidden" value="([^"]*)"/)[1], cccllpptttgt = html.match(/cccllpptttgt: '([^']*)'/)[1];			
							//print(items.length)


							//print("Cookie:::",Cookie);
							for(let i = 0; i < items.length; i++){
								let tt = "", num = 0;
								let params = [pageCreateTime,vvvvvvviisssss,F,cccllpptttgt];
								let img_url = pd(items[i],'.js-fast-video-custom-region&&img&&src');  
								if(/gif/.test(img_url)){  img_url = pd(items[i],'.js-fast-video-custom-region&&img&&data-original');img_url = atob(img_url.replace(/.*aigei-image-encode-/,""));}
								//print("extime:::",items[i])
								let rurl = items[i].match(/rurl="([^"]*)"/)[1], extime = items[i].match(/extime="([^"]*)"/)[1],	token = items[i].match(/token="([^"]*)"/)[1];	
								params.push(rurl),params.push(extime),params.push(token);

								d.push({
									title: pdfh(items[i],'.trans-title&&Text'),
									desc:  pdfh(_infos[i],"span&&Text") + "  " + pd(infos[i],"span&&title"),
									pic_url: img_url,
									url: "https://www.aigei.com" + "?param=" + params.join("_")// + 	"__" + Cookie  
								})
							}
						}
		
					
						
						setResult(d)
						`,
            二级:`js:																	// withHeaders:false 
						function updata_add(params_J,F,vvvvvvviisssss,pageCreateTime){
							return 'var vvvvvvviisssss = "' + vvvvvvviisssss + '";\\nvar params_J = ' + JSON.stringify(params_J) + ';\\nvar F = "' + F + '";\\nvar pageCreateTime = ' + pageCreateTime + ';\\nconsole.log(get_result(params_J,F,vvvvvvviisssss,pageCreateTime));'
						}
						function sleep(time){
							let currentTimestamp = new Date().getTime(),timestampOneSecondLater = currentTimestamp +time;
							while(currentTimestamp < timestampOneSecondLater){ currentTimestamp = new Date().getTime();}
						}
						function request_withHeaders(url,obj){	obj["withHeaders"] = true;	let html = request(url,obj); return JSON.parse(html);}
						function str_to_obj(str){
							var oldObj = {},oldParts = str.split(';');
							for (var i = 0; i < oldParts.length; i++) { if(oldParts[i].length == 0){  continue;	}	var parts = oldParts[i].split('=');	oldObj[parts[0]] = parts[1]; }
							return oldObj;
						}
						function get_cookie(message){
							let cookies = message["set-cookie"],cookie = "",add_cookies = [], new_cookies = [];
							for(let i = 0; i < cookies.length; i++){ cookie = cookies[i].split(";")[0]; add_cookies.push(cookie); }
							for(let i = 0; i < add_cookies.length; i++){  let cookie = add_cookies[i].split("="); if(cookie.length == 0){continue;}; if(cookie[1] != ""){ new_cookies.push(cookie[0] + "=" + cookie[1]) } }
							new_cookies.push("wueiornjk234kj=24485fb4c9d14ebea70b769213c9b121");
							new_cookies.push("geiweb-v=zZ+S93HA1QcRSsuWrgSEqFvkLP9NFr29XXSYUpXaC4JlsKhrPnugM2S8TzsH2Wro"); 
							return new_cookies.join(";")
						}
						function updata_cookie(old_cookies,message){
							let add_cookies = get_cookie(message).split(";"),new_cookies = [];
							let new_obj = str_to_obj(old_cookies);
							for(let i = 0; i < add_cookies.length; i++){ let cookie = add_cookies[i].split("="),key = cookie[0],value = cookie[1]; new_obj[key] = value; }
							let updatedOld = '';
							for (let prop in new_obj) { updatedOld += prop + '=' + new_obj[prop] + ';';}	
							return updatedOld;
						}
						function get_v_ETag(params_J,F,vvvvvvviisssss,pageCreateTime,source_code,get_token_url,get_result_url,token_data){
							let updata = updata_add(params_J,F,vvvvvvviisssss,pageCreateTime);
							token_data["source_code"] = source_code + updata;
							//print("updata:::",updata);
							let _token = JSON.parse(request(get_token_url, {method:"POST",headers:{ "content-type": "application/x-www-form-urlencoded; charset=UTF-8","user-agent": PC_UA}, body:token_data}))["token"];
							print("token:::",_token);
							sleep(1000)
							let response = JSON.parse(request(get_result_url + _token, { headers:{ "content-type": "application/x-www-form-urlencoded; charset=UTF-8","user-agent": PC_UA }}))["stdout"];  		
							//print("response:::",atob(response));
							let v_ETag = JSON.parse(atob(response).replace(/\\n/g,"").replace(/'/g,'"').replace(/v:/g,'"v":').replace(/ETag:/g,'"ETag":'))
							return v_ETag;
						}
						



						print("input:::",input); 

						let Cookie = "gei_d_u=be6e276fa6fb4bafa96cc89772c3d30e;gei_d_1=d9e38d327d1093e8870c34dc40ee8946e8451c6027e566faefaefc491aa7df68c3c57928cc0b1977bc36902058bfa01a17fe56d49ce77d506439a0fc61745cde;oOO0OO0oOO00oo0o=true;SESSION=ab26f3e8-4d67-4cd9-80bf-f63dea2a2bc7;geiweb-v=zZ+S93HA1QdRnEO8pzViVpT9XjP9Ar4nJ7onj6sRD/0yyX6nR20O5i6E7yUsUIDx;wueiornjk234kj=e0ab5e71e1634e05bd7bd953f5d8a8f8;hhhssi1ill1i=01fa8f027e8935522206fe4c3885b96c-02e1f5f5444d66c76f8f0354ab9456c9;SERVERID=8e6d20fd2c760c1a50e8e9f62a2811e6|1764248171|1764246342;"
						
						let play_url = "",play_urls = [],vod_play_url = "";
						

						if(/set/.test(input)){
							let html = request(input);
							let pageCreateTime = new Date().getTime(); print(pageCreateTime);
							let vvvvvvviisssss = html.match(/vvvvvvviisssss = "([^"]*)"/)[1], F = html.match(/id="pIii111lllE" type="hidden" value="([^"]*)"/)[1], cccllpptttgt = html.match(/cccllpptttgt: '([^']*)'/)[1];	
							//print(vvvvvvviisssss,F,cccllpptttgt,pageCreateTime)

							let items = jsp.pdfa(html,".unit-container-list&&.unit-content-row-audio");
							for(let i = 0; i < items.length; i++){
								let info = items[i].match(/<input type="hidden" id="itemInfoToken_audio_mp3_[^>]*>/)[0];
								let title = jsp.pd(items[i],".title-name&&title");
								let rurl = info.match(/rurl="([^"]*)"/)[1], extime = info.match(/extime="([^"]*)"/)[1],	token = info.match(/token="([^"]*)"/)[1];	
								let params = [ pageCreateTime, vvvvvvviisssss, F,cccllpptttgt, rurl,extime, token];
								//print(params.join("_"))
								let encrypt_data = btoa(params.join("_") + "&" + Cookie);
								let play_url = title +  "$https://txmov2.a.kwimgs.com/bs3/video-hls/5194620763762726260_hlsb.m3u8?encrypt=" + encrypt_data; 
								play_urls.push(play_url);
								print("play_urls",play_urls)
								print(play_url);
							}
							vod_play_url = play_urls.join("#");						
						}
						else{
							let get_token_url = "https://api.json.cn/try_run?action=get_token", get_result_url = "https://api.json.cn/try_run?action=get_result&token=";
							let token_data = {"source_code": "",	"language_id": "63",	"command_line_arguments": "",	"stdin": ""	};
							let params_cookie = input.split("__")//, Cookie = params_cookie[1];
							let source_code = request("https://gitee.com/badboy518/happy/raw/master/My_drpy/aigei.js", { headers: { 'User-Agent': 'PC_UA'}});							//print("source_code:::",source_code);
							let detail_url = "https://www.aigei.com/f/d/item_detail", video_url = "https://www.aigei.com/f/d/detail_prev_video";
							let params = params_cookie[0].split(/=/)[1].split(/_/); print(params);
							let pageCreateTime = params[0], vvvvvvviisssss = params[1], F = params[2];
							let headers = {"Content-Type":"application/x-www-form-urlencoded;charset=UTF-8","cccllpptttgt":params[3],"referer":"https://www.aigei.com","user-agent":PC_UA,"x-requested-etag":"","x-requested-with":"XMLHttpRequest","Cookie": Cookie};					

							let params_J = { "type": "item_detail", "fileUuid": "", "model": "play", "itemId": params[4], "item": null, "rescUrl": params[4], "expireTime": params[5], "token": params[6], "callBack": "callBackItemDetail", "resJsCallback": 									"downloadVideoCallback","custPlayCallBack": null, "downUuid": null, "customData": null };											
							print("params_J:::",params_J);
							let v_ETag = get_v_ETag(params_J,F,vvvvvvviisssss,pageCreateTime,source_code,get_token_url,get_result_url,token_data);
							headers["x-requested-etag"] = v_ETag["ETag"];

							let result = request_withHeaders(detail_url, { headers: headers, method: "POST", body: {"v": v_ETag["v"]}}), message = result["body"].replace(/\\r/g,"").replace(/\\n/g,"");  
							//Cookie = updata_cookie(Cookie,result)
							print("message-1:::",[message]);

							let info = message.match(/(input type="hidden" id="itemInfoToken_detail_prev_video_[^>]*)/)[0];		print("INFO_detail:::",info);
							let rurl = info.match(/rurl="(\\d+)"/)[1], extime = info.match(/extime="(\\d+)"/)[1],fuid = info.match(/fuid="(\\d+)"/)[1], token = info.match(/token="([^"]*)"/)[1];

							params_J = {"type": "detail_prev_video","fileUuid": fuid,"model": "play","itemId": rurl,"item": null, "rescUrl": rurl,"expireTime": extime,"token": token,"callBack": "callBackDetailVideoFilePlay",
								"resJsCallback": "downloadVideoCallback","custPlayCallBack": null,"downUuid": null,"customData": null }
							v_ETag = get_v_ETag(params_J,F,vvvvvvviisssss,pageCreateTime,source_code,get_token_url,get_result_url,token_data);
							headers["x-requested-etag"] = v_ETag["ETag"]//,headers["Cookie"]  = Cookie; 

							result = request_withHeaders(video_url, { headers: headers, method: "POST", body: {"v": v_ETag["v"]}});
							Cookie = updata_cookie(headers["Cookie"],result);
							print("video:::",[result.body]);	

							play_url = "https://www.aigei.com" + JSON.parse(atob(JSON.parse(result.body)["message"]))["prevVideoPlayM3u8"];    
							print("m3u8_url:::",play_url)

							vod_play_url = "在线播放$" + play_url + "?" + Cookie.replace(/;/g,"&");	
						}


						VOD = {
							vod_id: '',
							vod_name:  "",				
							vod_pic: '',
							type_name: "",  
							vod_year: "",  
							vod_area: "",  
							vod_remarks: "",  
							vod_actor:  '',  
							vod_director: 'mooc1121',  
							vod_content:  vod_play_url,
							vod_play_from: "爱给",
							vod_play_url: vod_play_url						
						};
						
						`,

            搜索:'*'
        }