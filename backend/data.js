import bcrypt from 'bcryptjs';

const data = {
    users:[
        {
            name:'Admin',
            email:'admin@example.com',
            password: bcrypt.hashSync('admin123',8),
            isAdmin:true,
        },
    ],
    slider:[
        {
            sliderimage:'/images/slider1.png',
            sliderheader:'Buğdaydan gelen lezzetler',
        },
        {
            sliderimage:'/images/slider2.png',
            sliderheader:'El yapımı ürünler',
        },
        {
            sliderimage:'/images/slider3.png',
            sliderheader:'Organik lezzetler',
        }
    ],
    homepage:[
        {
            homepagetext:'Yemek yapmak bir aşktır. Birbirinden lezzetli sofralar kurmak için en önem verdiğimiz şey tabi ki sevgimiz. "Lezzet Eviniz" olarak tamamen doğal ürünlerden oluşan ürünlerimizle eşsiz tatları mutfaklarınıza taşıyoruz. Ürünlerimizin malzemeleri Anadoluda yaşayan emekçi kadınlar tarafından üretilip mutfağımızda buluşuyor. Ve bu ürünler sayesinde yöresel lezzetlerin en güzel ve en özel tariflerini sizlere sunarak, görkemli bir ziyafet deneyimi yaşamanızı garanti ediyoruz.',
        }
    ],
    homemade:[
        {
            homemadeimage:'',
            homemadeheader:'İçli Köfte',
            homemadetext:'İster 5 çayının, ister akşam yemeğinin en özel vazgeçilmezi...',
            homemadeurl:'/stuffedmeatballs',
        },
        {
            homemadeimage:'',
            homemadeheader:'Mantı',
            homemadetext:'Sarımsaklı yoğurt ve tereyağlı sosuyla hayır diyemiyeceğiniz en güzel lezzet...',
            homemadeurl:'/turkishravioli',
        },
        {
            homemadeimage:'',
            homemadeheader:'Boşnak Böreği',
            homemadetext:'Kat kat açılıp, çıtır çıtır pişen efsane lezzet...',
            homemadeurl:'/bosnianpastry',
        },
        {
            homemadeimage:'',
            homemadeheader:'Zeytinyağlı Sarma',
            homemadetext:'Egenin en güzel zeytinyağlısıyla sofranıza ayrı bir lezzet katın...',
            homemadeurl:'/stuffeddish',
        },
        {
            homemadeimage:'',
            homemadeheader:'Muhammara',
            homemadetext:'En tatlı acılı muhammarayı denemeye hazırmısınız?',
            homemadeurl:'/muhammara',
        },
        {
            homemadeimage:'',
            homemadeheader:'Çocuk Menüsü',
            homemadetext:'Çocuklara özel acısız içli köfte...',
            homemadeurl:'/',
        }
    ],
    organic:[
        {
            organicimage:'/',
            organicheader:'Fıstık Ezmesi',
        },
        {
            organicimage:'/',
            organicheader:'Zeytinyagi',
        },
        {
            organicimage:'/',
            organicheader:'Biber Salçası',
        },
        {
            organicimage:'/',
            organicheader:'Domates Salçası',
        },
        {
            organicimage:'/',
            organicheader:'Kırmızı Toz Biber',
        },
        {
            organicimage:'/',
            organicheader:'Karabiber',
        },
        {
            organicimage:'/',
            organicheader:'Kimyon',
        },
        {
            organicimage:'/',
            organicheader:'Tarçın',
        },
        {
            organicimage:'/',
            organicheader:'Kuru Nane',
        },
        {
            organicimage:'/',
            organicheader:'Kuru Dolma',
        },
        {
            organicimage:'/',
            organicheader:'Nar Ekşisi',
        },
        {
            organicimage:'/',
            organicheader:'Üzüm Pekmezi',
        }
    ]
}

export default data;