const puppeteer = require('puppeteer'); //Salimcan Satıcı
const fs = require('fs');
var Jimp = require('jimp'); 

const USER_AGENT = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/73.0.3683.103 Safari/537.36';
(async () => {

//Yurtdışında birinde görmüş olduğum programı Nodejs + Puppeteer chrome kullanarak yazdım. 
//Piyasada ilklerdendir

    const browser = await puppeteer.launch({
      headless: false,
      defaultViewport: {
        width: 1024,
        height: 768,
  
      },
    });
    const page = await browser.newPage();
    console.log("Browser açılıyor");
  await page.setUserAgent(USER_AGENT);
  // console.log("Useragent tanımlandı");
  await page.goto('https://www.instagram.com/accounts/edit/');
  // console.log("Instagram edit yönlendirme sağlandı");
  await page.waitForSelector('input[name="username"]'); 
   //console.log("Girilecek text alanının yüklenmesini bekliyorum");

  await page.type('input[name="username"]', 'burayakullanıcıadınız'); //'KULLANICI_ADINIZ '  KULLANICI_ADINIZ yazan kısma yani tırnakları silmeden tırnakların içerisine kullanıcı adınızı yazınız
  // console.log("Kullanıcı adı textbox'ına kullanıcı adınız yazılıyor");
  await page.type('input[name="password"]', 'şifreniz'); // Aynı şekilde SIFRENIZ kısmına da o şekilde boşluk bırakmayın
 // console.log("Şifreniz textbox'ına şifreniz yazılıyor. Programda kesinlikle bir veri gönderimi gibi bir durum yok aksi durumda kodları inceleyin inceletiniz. Sorumluluk size aittir.");

  await page.click('button[type="submit"]');
  // console.log("Giriş yap butonuna tıkladım.")
  blockingWait(4);
  await page.close(); //Navigation hatasını handle etmek biraz sıkıntılı ve kullandığımız modülde hata vermemesi için bir nebze page variable transfer yapıldı
  const sekme2 = await browser.newPage();
  await sekme2.setUserAgent(USER_AGENT);
  await sekme2.goto('https://www.instagram.com/accounts/edit/');
  const pageTitle = await sekme2.title();
  console.log(pageTitle)
  var inputElement = await sekme2.$('#react-root > section > main > div > article > div > div.LqNQc > div > div > form > input[type="file"]'); 
 
  var photoNum=1; // 1.jpg adlı fotoğraftan başlatılır

var fotogradedi=24; //Fotoğraf adediniz kaç taneyse o kadar yazınız.

for (let tekrar = 0; tekrar < 999999999; tekrar++) {
  for (let index = 0; index < fotogradedi; index++) {
    blockingWait(5);
  inputElement.uploadFile('./dakikalar/'+photoNum+'.jpg');
 
  console.log("Şu numaralı bitmoji yüklenecektir -> "+photoNum);
  photoNum++;
  if(photoNum==fotogradedi){
    console.log("Tekrarlanıyor");
    photoNum=1;
  }
  }
}
  }
)();
function blockingWait(seconds) {
  //basit bloklama beklemesi
  var waitTill = new Date(new Date().getTime() + seconds * 1000);
  while (waitTill > new Date()) { }
}
