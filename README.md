# 자막씨
Jamakssi: jimakuChan fork

> https://jamakssi.pages.dev

---

원본 코드를 최대한 존중하며 수정했습니다(추가 업데이트 수월하게 하기 위함)\
구글 번역 대신 DeepLX와 Papago로 대체했습니다(둘다 API키가 필요하지 않습니다)\
불필요한 것들을 없애고 한국어로 번역했습니다.

## 파파고 선작업
파파고는 웹에서 쓰는 API를 사용하는지라 CORS 이슈가 있습니다. 프록시 서버를 거치려고 했지만 Cloudflare Workers에서는 막힌것 같아 로컬에서 해야 작동됩니다...

> [!WARNING] 
> 꼭 다른 Chrome 기반 브라우저나 [프로필 생성](https://support.google.com/chrome/answer/2364824) 등 **새로운 환경에서 해주세요**. 다른 사이트들 요청이 고장납니다.

1. [CORS Unblock](https://chromewebstore.google.com/detail/cors-unblock/lfhmikememgdcahcdlaciloancbhjino) 설치
2. Add same-origin "referrer" and "origin" Headers 옵션 체크
![](https://files.catbox.moe/wln5ob.png)
  2-1. 익스텐션 아이콘 우클릭\
  2-2. Add/Remove "referrer" and "origin" Headers >\
  2-3. Add same-origin "referrer" and "origin" Headers 옵션 체크

3. 익스텐션 아이콘 좌클릭으로 활성화\
![](https://files.catbox.moe/yc4zcu.png)

4. 페이지 새로고침