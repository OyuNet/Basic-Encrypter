# Basic-Encrypter

Vakit geçirmek maksatlı yazdığım, metni verilen anahtara göre şifreleyen ve istendiğinde anahtar biliniyorsa geri metne çevirebilen bir mini-yazılım. Şu an için ciddi eksikleri var. En altta nelerin eksik olduğunu ve ileride ekstra neleri eklemek istediğimi yazacağım.

## Nasıl Çalışıyor?

Mantığı çok basit. Belli bir alfabetiğimsi (böyle dedim çünkü tam olarak alfabetik değil) bir listem var. Listedeki her harfin bir sayısal değeri var. İlk önce anahtarı da metni de bu listeye göre sayılara dönüştürülüyor.
Sonrasında metnin ilk sayısıyla anahtarın ilk sayısı, metnin ikinci sayısıyla anahtarın ikinci sayısı (anahtarın uzunluğu yetersiz kalıyorsa başa dönüyor)... toplanıyor. Sonrasında encrypt.js içerisinde sadece sayıların olduğu bir array döndürüyor.

## Peki Neden?

Çünkü neden olmasın? Şaka bir yana öylesine otururken geçen sene aklıma gelmişti. Şimdi vaktim oldu, oturdum yazdım. Ha ne ölçüde kullanılabilir ve verimli orası tartışılır. Ama yaptım yani :D

## Kırılabilir Mi?

Evet kırılabilir. Ama ileride daha fantastik şeyler ekleyip ciddi anlamda kırılmasını imkansız hale getireceğim. Nasıl diye sormayın, o da bende kalsın.

## Eksikleri Neler?

- Sayıları, sembolleri, özel karakterileri algılamıyor. Boşluk olarak sayı değerine çeviriyor.
- Büyük harf ve küçük harf muhabbeti. Büyük harfle girdi verildiğinde algılamıyor. Evet çok basit, biliyorum. Büyük harfleri küçük harfe array'e dönüştürmeden önce değiştirmem gerek. Çok yakında üşenmezsem birkaç tuşa basarak düzelteceğim.

## Neler Ekleyeceğim?

- Kırılmasını neredeyse imkansız hale getireceğim bir güncelleme.
- Şu anki Switch/Case zımbırtısından kurtulacağım. Hadi şimdilik 32 tane karakter var. Peki ya ileride? Sürdürülebilir ve performanslı değil. Yerine daha estetik ve verileri veri setinden çeken bir güncelleme getireceğim.

## Üstünde Çalıştıklarım
- Girilen şifreye göre kırılmasını zorlaştırmak maksatlı bir güncelleme getireceğim. Plan şu, şifrenin uzunluğundaki iki value'yi yer değiştireceğim. Yani şifrenin uzunluğunu bilmeyen birisinin kırması daha da zor olacak. İleride daha da fantastik şeyler getireceğim ama şimdilik bu kadarı yeterli.
