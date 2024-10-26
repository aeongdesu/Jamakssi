// https://github.com/PinMilk/nodepapago 를 브라우저에서 사용할 수 있게 했습니다.
// 그리고 살짝 파파고 웹 뜯어봤어요
// uuid -> https://developer.mozilla.org/en-US/docs/Web/API/Crypto/randomUUID
// CORS가 빡셉니다.. 하단에 있는 CORS Unblock 익스텐션 -> 익스텐션 우클릭 -> Add/Remove "referrer" and "origin" Headers -> Add same-origin "referrer" and "origin" Headers 체크, 익스텐션 좌클릭으로 실행
// https://chromewebstore.google.com/detail/cors-unblock/lfhmikememgdcahcdlaciloancbhjino

const HASHING_KEY = "v1.8.5_f89009cc84"
const UA = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 Safari/537.36"
const PAPAGO_URL = "https://papago.naver.com/apis/n2mt/translate"

const papago_translate = async (text, source_lang, target_lang) => {
    const device_id = window.crypto.randomUUID()
    const time = Date.now()
    const auth = `PPG ${device_id}:${generateHash(`${device_id}\n${PAPAGO_URL}\n${time}`, HASHING_KEY)}`
    const data = await fetch(PAPAGO_URL, {
        method: "POST",
        body: new URLSearchParams({
            deviceId: device_id,
            locale: "ko",
            dict: false,
            dictDisplay: 30,
            honorific: false, // 높임말
            instant: true,
            paging: false,
            source: source_lang,
            target: target_lang,
            text,
            usageAgreed: false
        }),
        headers: {
            "Accept": "application/json",
            "Authorization": auth,
            "Timestamp": time,
            "User-Agent": UA,
            "X-Apigw-Partnerid": "papago",
            "Device-Type": "pc"
        },
        referrer: "https://papago.naver.com"
    })
    return (await data.json()).translatedText
}

const generateHash = (msg, key) => CryptoJS.HmacMD5(msg, key).toString(CryptoJS.enc.Base64)