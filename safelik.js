var url = getUrlParameter('url');
		if(url == ""){
			window.location.href = 
"http://updatetribun.org/FeyTEs";
		}else{
			myUrl = 
"https://updatetribun.org/full/?api=87f066c2e2f39e1eadd89902bc34e624b35e686e&url=" 
+ encodeURIComponent(decode64 (url)) + "&type=2";
			window.location.href = myUrl;
		}

