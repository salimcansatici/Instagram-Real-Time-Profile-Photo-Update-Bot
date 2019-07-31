# Instagram Canlı Saat Profil Fotograf Yapma Botu
Instagram’da Canlı Saat Profil Fotoğrafı Yapma Botu v1.1.0 (Geliştirilmeye açık saf sürüm)



Düzenleme :
Öncelikle indirmiş olduğunuz app.js dosyası içerisindeki kullanıcı adı ve şifre kısmını hesabınıza göre yazmanız gerekmekte. Doğru yazarsanız ancak o zaman çalışmaktadır. 
**Hesabın engeli olmamalı daha önce de engel yememiş olması tercihtir.

Botu çalıştırmak için;
https://nodejs.org/en/download/ Buradaki programı indirip kurmanız,
İndirmiş olduğunuz dosyayı CMD'de gitmeniz gerekiyor, Örneğin : /Users/salimcansatici/Desktop/instagram-canli-saat-app
Sonrasında CMD ekranına şu komutları yazmanız gerekmekte sırasıyla:

1 - npm install

2 - npm i puppeteer

3 - npm install --save jimp

(Sunucu'da kurulacak ise Ubuntu tercih edebilirsiniz çok daha ucuz şu komutları giriniz tüm ek modülleri kurunuz) sudo apt-get install gconf-service libxext6 libxfixes3 libxi6 libxrandr2 libxrender1 libcairo2 libcups2 libdbus-1-3 libexpat1 libfontconfig1 libgcc1 libgconf-2-4 libgdk-pixbuf2.0-0 libglib2.0-0 libgtk-3-0 libnspr4 libpango-1.0-0 libpangocairo-1.0-0 libstdc++6 libx11-6 libx11-xcb1 libxcb1 libxcomposite1 libxcursor1 libxdamage1 libxss1 libxtst6 libappindicator1 libnss3 libasound2 libatk1.0-0 libc6 ca-certificates fonts-liberation lsb-release xdg-utils wget

Programı çalıştırmak için yine programın kurulu olduğu dosyaya cmd ile gidip "node app.js" yazmanız yeterli. 

Youtube Kurulum Çalıştırma Videosu için : https://youtu.be/19Q3rt3rcVE


Linux ve Macos Kullanıcısı iseniz daha stabil çalışmakta Windows C#'ta api ile yazılan programlar hesabınızı bir yerden bir yere aktarmada çok kolay şekilde gizlenebiliyor. Dikkatli olun bu nedenle JS kullandım.

sudo apt-get install -y build-essential

curl -sL https://deb.nodesource.com/setup_6.x | sudo -E bash -

sudo apt-get install -y nodejs

sudo apt-get install npm

npm install --save jimp


sudo apt-get install gconf-service libxext6 libxfixes3 libxi6 libxrandr2 libxrender1 libcairo2 libcups2 libdbus-1-3 libexpat1 libfontconfig1 libgcc1 libgconf-2-4 libgdk-pixbuf2.0-0 libglib2.0-0 libgtk-3-0 libnspr4 libpango-1.0-0 libpangocairo-1.0-0 libstdc++6 libx11-6 libx11-xcb1 libxcb1 libxcomposite1 libxcursor1 libxdamage1 libxss1 libxtst6 libappindicator1 libnss3 libasound2 libatk1.0-0 libc6 ca-certificates fonts-liberation lsb-release xdg-utils wget

Çıkarmış olduğunuz klasör yoluna gidip npm install yazdıktan sonra "node app" komutu ile çalıştırın
Bende hiç bir sorun olmadı fakat yine de programın tüm sorumlulukları size aittir. 
