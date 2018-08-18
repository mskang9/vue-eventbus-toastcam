export default {
    createPaycoLoginPopup: function() {
        let httpUrl = location.origin;

        if(httpUrl == undefined){
            httpUrl = location.protocol+"//"+location.hostname
        }

        let lang = "";
        if (navigator.language.indexOf('ko') != -1) {
            lang = "ko_KR";
        } else if (navigator.language.indexOf('ja') != -1) {
            lang = "ja_JP";
        } else if (navigator.language.indexOf('en') != -1) {
            lang = "en_US";
        }

        let clientId, paycoUrl, toastAuthUrl;
        if (httpUrl.indexOf('dev') != -1) {
            clientId = "ALPEoUChg7HjPj4UF0C2";
            paycoUrl ="https://alpha-id.payco.com/";
            toastAuthUrl = "https://alpha-auth.toast.com";
        } else {
            clientId = "db79th455Ku7UMi5cRL9";
            paycoUrl ="https://id.payco.com/";
            toastAuthUrl = "https://auth.toast.com";
        }

        const splitArr = location.href.split('/');
        const nextUri = location.href.replace(splitArr[splitArr.length - 1], 'loginPayco');
        const url = paycoUrl+"oauth2.0/authorize?response_type=code&serviceProviderCode=BIZCAM&client_id=" + clientId+ "&userLocale=" +lang+ "&redirect_uri=" + encodeURIComponent(toastAuthUrl+"/authorize?serviceCallbackUrl="+httpUrl+"/json/biz/payco/logIn?next_uri="+ encodeURIComponent(nextUri));

        const winHeight = document.body.clientHeight;	// 현재창의 높이
        const winWidth = document.body.clientWidth;	// 현재창의 너비
        const winX = window.screenLeft;	// 현재창의 x좌표
        const winY = window.screenTop;	// 현재창의 y좌표

        const popX = winX + (winWidth - 630)/2;
        const popY = winY + (winHeight - 560)/2;

        const lp = window.open(url, 'PaycoLoginPopup', 'left=' + popX + ',top=' + popY + ',width=630,height=560,scrollbars=yes');
        lp.focus();
    },
    createSignupPopup: function() {
        const url = '/signup?lang=ja_JP';
        window.open(url, 'signup', 'scrollbars=yes,toolbar=no,resizable=yes,width=600,height=600,left=600,top=200');
    },
    createFindPwPopup: function(){
        const url = '/findpw';
        window.open(url, 'findpw', 'scrollbars=yes,toolbar=no,resizable=yes,width=600,height=600,left=600,top=200');
    }
}
