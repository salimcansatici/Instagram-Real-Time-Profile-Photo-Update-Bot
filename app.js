const puppeteer = require('puppeteer'); //Salimcan Satıcı
const fs = require('fs');
var readline = require('readline-sync');

const USER_AGENT = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/73.0.3683.103 Safari/537.36';
(async () => {

//Yurtdışında birinde görmüş olduğum programı Nodejs + Puppeteer chrome kullanarak yazdım. 
//Piyasada ilklerdendir

  var sayilar = ["./dakikalar/00.png",
    "./dakikalar/01.png",
    "./dakikalar/02.png",
    "./dakikalar/03.png",
    "./dakikalar/04.png",
    "./dakikalar/05.png",
    "./dakikalar/06.png",
    "./dakikalar/07.png",
    "./dakikalar/08.png",
    "./dakikalar/09.png",
    "./dakikalar/10.png",
    "./dakikalar/11.png",
    "./dakikalar/12.png",
    "./dakikalar/13.png",
    "./dakikalar/14.png",
    "./dakikalar/15.png",
    "./dakikalar/16.png",
    "./dakikalar/17.png",
    "./dakikalar/18.png",
    "./dakikalar/19.png",
    "./dakikalar/20.png",
    "./dakikalar/21.png",
    "./dakikalar/22.png",
    "./dakikalar/23.png",
    "./dakikalar/24.png",
    "./dakikalar/25.png",
    "./dakikalar/26.png",
    "./dakikalar/27.png",
    "./dakikalar/28.png",
    "./dakikalar/29.png",
    "./dakikalar/30.png",
    "./dakikalar/31.png",
    "./dakikalar/32.png",
    "./dakikalar/33.png",
    "./dakikalar/34.png",
    "./dakikalar/35.png",
    "./dakikalar/36.png",
    "./dakikalar/37.png",
    "./dakikalar/38.png",
    "./dakikalar/39.png",
    "./dakikalar/40.png",
    "./dakikalar/41.png",
    "./dakikalar/42.png",
    "./dakikalar/43.png",
    "./dakikalar/44.png",
    "./dakikalar/45.png",
    "./dakikalar/46.png",
    "./dakikalar/47.png",
    "./dakikalar/48.png",
    "./dakikalar/49.png",
    "./dakikalar/50.png",
    "./dakikalar/51.png",
    "./dakikalar/52.png",
    "./dakikalar/53.png",
    "./dakikalar/54.png",
    "./dakikalar/55.png",
    "./dakikalar/56.png",
    "./dakikalar/57.png",
    "./dakikalar/58.png",
    "./dakikalar/59.png",
    "./dakikalar/00.png"];
    const browser = await puppeteer.launch({
      headless: true,
      defaultViewport: {
        width: 1024,
        height: 768,
  
      },
    });
    const page = await browser.newPage();
    
   
  await page.setUserAgent(USER_AGENT);
  await page.goto('https://www.instagram.com/accounts/edit/');
  await page.waitForSelector('input[name="username"]'); 
  await page.type('input[name="username"]', 'KULLANICI_ADINIZ'); //'KULLANICI_ADINIZ '  KULLANICI_ADINIZ yazan kısma yani tırnakları silmeden tırnakların içerisine kullanıcı adınızı yazınız
  await page.type('input[name="password"]', 'SIFRENIZ'); // Aynı şekilde SIFRENIZ kısmına da o şekilde boşluk bırakmayın
  await page.click('button[type="submit"]');
  blockingWait(2);
  await page.close(); //Navigation hatasını handle etmek biraz sıkıntılı bu kullandığımız modülde hata vermemesi için sekme isimlerini değiştirdim 
  const sekme2 = await browser.newPage();
  await sekme2.setUserAgent(USER_AGENT);
  await sekme2.setUserAgent(USER_AGENT);
  await sekme2.goto('https://www.instagram.com/accounts/edit/');
  const pageTitle = await sekme2.title();
  console.log(pageTitle)


  // for (let index = 0; index < 9999; index++) { //index = 0; kısmı kaçıncı dakikadan başlayacağını belirler v1
    
blockingWait(2); //Zamanlayıcı
    //var findelement = await sekme2.$("#react-root > section > main > div > article > div > div.XX1Wc > div > form > input[type='file']"); v1
    const inputElement = await sekme2.$('#react-root > section > main > div > article > div > div.XX1Wc > div > form > input[type="file"]'); 
    setInterval(function(){ 
      let date = new Date();
      let simdikiDakika = date.getMinutes();
    inputElement.uploadFile(sayilar[simdikiDakika]);
    },60000);
    
    console.log("Başarılı");
     //52 saniye bekletiyorum bu her bilgisayarda internet hızıne göre farklılık verebilir burayı daha detaylı hale getirilirse tadından yenmez. 
    //Bir sonraki versiyonda daha kapsamlı daha tutarlı kodlayacağım. 
    
    
  }



)();




function blockingWait(seconds) {
  //basit bloklama beklemesi
  var waitTill = new Date(new Date().getTime() + seconds * 1000);
  while (waitTill > new Date()) { }
}
