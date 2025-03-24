// 기기를 감지하고 리디렉션을 처리하는 함수
window.onload = function() {
    var userAgent = navigator.userAgent.toLowerCase();
    
    // Android 기기 감지
    if (userAgent.indexOf("android") > -1) {
        // 구글 플레이스토어로 리디렉션
        window.location.href = "https://play.google.com/store/apps/details?id=ai.tain.reelso&hl=ko";
    }
    // iOS 기기 감지
    else if (userAgent.indexOf("iphone") > -1 || userAgent.indexOf("ipod") > -1 || userAgent.indexOf("ipad") > -1) {
        // 앱스토어로 리디렉션
        window.location.href = "https://apps.apple.com/kr/app/%EB%9F%AC%EB%B9%84%EB%8D%94%EB%B9%84-%EC%B5%9C%EC%95%A0%EC%BA%90%EC%99%80-%EB%82%98%EB%88%84%EB%8A%94-ai-%EC%B1%84%ED%8C%85/id6468766519";
    }
    // 기타 디바이스 감지 (웹 브라우저 등)
    else {
        document.body.innerHTML = "<h1>이 디바이스는 지원되지 않습니다.</h1>";
    }
};
