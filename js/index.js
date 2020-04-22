// import "./zamknutie.js";
import { d3vis } from "./d3.js";
import { jtable } from "./jtable.js";

document.querySelectorAll(".menu-item__link").forEach((el) => {
    el.onclick = (elem) => {
        elem.preventDefault();
        switch (elem.target.id) {
            case "glav":
                clearContent();
                break;
            case "d3":
                clearContent();
                d3vis();
                break;
            case "jtable":
                clearContent();
                jtable();
                break;
            default:
                console.log("Неизвестная страница");
        }

    }
})

function clearContent() {
    let wrapContent = document.querySelector(".wrap-content");
    wrapContent.removeChild(wrapContent.firstChild);
    let divContent = document.createElement("div");
    divContent.classList.add("content");
    wrapContent.append(divContent);
}
// function Stack(){
//     this._size = 0;
//     this._arr = [];

// }

// Stack.prototype.push = function(data){
//     var size = ++this._size;
//     this._arr[size] = data;
// }

// Stack.prototype.pop = function(){
//     var size = this._size,
//         deletedArr;
//     if(size){
//         deletedArr = this._arr[size];
//         delete deletedArr;
//         this._size--;
//         return deletedArr; 
//     } else {console.log("В стеке нет данных");}
// }
// Stack.prototype.top = function(){
//     var size = this._size;
//     var arr = this._arr[size];
//     return arr;
// }
// var data = new Stack();
// data.push("Первый");
// console.log();
// data.push("Второй");
// data.push("Треттий");

// data.pop();

// console.log(data.top());

// var arr = "1,Aprilette,Cully,acully0@paginegialle.it,Female,57.128.184.14,2,Arleta,Melladew,amelladew1@123-reg.co.uk,Female,138.216.255.248,3,Fairleigh,Campanelle,fcampanelle2@artisteer.com,Male,99.202.160.208,4,Cindelyn,Kassel,ckassel3@nps.gov,Female,79.85.118.200,5,Andris,Astlet,aastlet4@mozilla.org,Male,208.178.13.186,6,Allene,Sweetsur,asweetsur5@nps.gov,Female,204.235.7.88,7,Alidia,Horlick,ahorlick6@newyorker.com,Female,20.120.57.43,8,Sayre,Ambrosetti,sambrosetti7@mysql.com,Female,74.185.14.199,9,Benjie,Purches,bpurches8@t.co,Male,185.80.89.13,10,Ezra,Trattles,etrattles9@rambler.ru,Male,127.213.191.102,11,Clarence,Bratchell,cbratchella@chicagotribune.com,Male,141.7.238.241,12,Isidro,Hesey,iheseyb@ezinearticles.com,Male,157.225.15.15,13,Gerrilee,Jeaneau,gjeaneauc@umn.edu,Female,199.192.147.13,14,Anatol,Kaming,akamingd@harvard.edu,Male,59.255.147.116,15,Valentijn,Youens,vyouense@exblog.jp,Male,95.246.128.219,16,Sapphira,Andrejs,sandrejsf@ihg.com,Female,156.197.63.183,17,Jonah,Beri,jberig@vk.com,Male,175.212.227.88,18,Wiley,Parman,wparmanh@alexa.com,Male,34.103.15.149,19,Charin,Gounod,cgounodi@oaic.gov.au,Female,51.93.105.12,20,Viviene,Giffard,vgiffardj@addtoany.com,Female,77.196.185.101,21,Reube,Ratke,rratkek@wufoo.com,Male,246.228.131.66,22,Adham,Kingshott,akingshottl@i2i.jp,Male,90.93.6.16,23,Seymour,Cuningham,scuninghamm@google.co.uk,Male,34.14.233.196,24,Dorise,Mineghelli,dmineghellin@google.ca,Female,52.155.131.32,25,Gaylor,de Mendoza,gdemendozao@livejournal.com,Male,127.240.174.30,26,Brnaby,Scartifield,bscartifieldp@unicef.org,Male,251.82.226.199,27,Ara,Landeaux,alandeauxq@wp.com,Male,200.163.106.197,28,Leigh,Routham,lrouthamr@virginia.edu,Male,230.120.252.253,29,Kirk,Jarritt,kjarritts@soundcloud.com,Male,175.221.136.189,30,Tory,Cullington,tcullingtont@newyorker.com,Female,78.227.232.45,31,Ajay,Peniman,apenimanu@businessweek.com,Female,184.17.144.112,32,Casie,Tinman,ctinmanv@ihg.com,Female,235.93.219.211,33,Harri,Eastway,heastwayw@tumblr.com,Female,168.133.2.236,34,Cart,Davenall,cdavenallx@newyorker.com,Male,27.80.216.106,35,Davide,Huniwall,dhuniwally@businesswire.com,Male,251.72.138.164,36,Joann,Hayto,jhaytoz@studiopress.com,Female,140.180.92.15,37,Jess,Southey,jsouthey10@uiuc.edu,Female,41.166.243.101,38,Berty,Hicken,bhicken11@phoca.cz,Male,67.68.245.212,39,Juieta,Swiffan,jswiffan12@people.com.cn,Female,167.142.179.146,40,Ceciley,Lording,clording13@chronoengine.com,Female,207.41.1.18,41,Christa,Baudain,cbaudain14@photobucket.com,Female,32.229.95.44,42,Lenci,Tottle,ltottle15@nydailynews.com,Male,223.110.191.186,43,Marne,Iacovolo,miacovolo16@nytimes.com,Female,159.43.31.224,44,Angelica,Meiner,ameiner17@home.pl,Female,94.34.122.91,45,Gwenore,Corpe,gcorpe18@discuz.net,Female,201.213.105.150,46,Faunie,Maudlen,fmaudlen19@zdnet.com,Female,2.192.109.159,47,Minor,Blench,mblench1a@deviantart.com,Male,202.85.205.74,48,Coreen,Cyson,ccyson1b@parallels.com,Female,58.97.239.25,49,Flinn,Blackham,fblackham1c@hexun.com,Male,231.27.184.94,50,Tamra,Andriveau,tandriveau1d@mapquest.com,Female,52.91.25.17,51,Darrell,Lubman,dlubman1e@ihg.com,Male,252.158.191.187,52,Nye,Stiegars,nstiegars1f@huffingtonpost.com,Male,43.39.34.211,53,Ivette,Mathonnet,imathonnet1g@eepurl.com,Female,126.120.33.35,54,Guilbert,Eginton,geginton1h@diigo.com,Male,63.238.147.243,55,Debora,Kenan,dkenan1i@kickstarter.com,Female,196.205.41.117,56,Kinnie,Cupper,kcupper1j@last.fm,Male,226.95.210.211,57,Karalynn,Francesc,kfrancesc1k@unicef.org,Female,92.113.216.85,58,Bebe,Stroud,bstroud1l@blogtalkradio.com,Female,6.196.245.95,59,Joachim,Shaves,jshaves1m@wisc.edu,Male,69.5.91.88,60,Dud,Ingleby,dingleby1n@last.fm,Male,108.230.160.4,61,Fitz,Fruen,ffruen1o@google.com.br,Male,50.3.162.156,62,Laura,Vallantine,lvallantine1p@blogspot.com,Female,135.123.2.83,63,Haley,Goodsell,hgoodsell1q@hp.com,Female,193.98.75.218,64,Tootsie,Cayton,tcayton1r@ifeng.com,Female,167.26.206.194,65,Flemming,Haller,fhaller1s@wordpress.com,Male,65.163.15.178,66,Emelita,Heyward,eheyward1t@intel.com,Female,135.93.253.198,67,Patrizius,Cromar,pcromar1u@quantcast.com,Male,215.123.222.139,68,Rosco,Aspenlon,raspenlon1v@nih.gov,Male,114.83.132.30,69,Winne,Whitelaw,wwhitelaw1w@altervista.org,Female,89.37.85.184,70,Sloan,Le Friec,slefriec1x@senate.gov,Male,8.28.186.141,71,Timothy,Hernik,thernik1y@netscape.com,Male,80.178.72.197,72,Gilli,Stelfox,gstelfox1z@mediafire.com,Female,186.174.88.191,73,Elnore,Chivrall,echivrall20@vistaprint.com,Female,141.192.64.249,74,Lolita,Steptowe,lsteptowe21@google.co.jp,Female,8.187.118.41,75,Anetta,Gosford,agosford22@exblog.jp,Female,26.53.45.83,76,Cortney,Brisard,cbrisard23@tumblr.com,Female,66.202.69.213,77,Dun,Wetheril,dwetheril24@comcast.net,Male,253.43.28.122,78,Mose,McDunlevy,mmcdunlevy25@netvibes.com,Male,121.171.147.219";
// var obj = {
//         obj: {
//             firstName: "Ivan",
//             lastName: "Ivanov",
//             age: 18,
//         },
//         livs: {
//             city: "moskow",
//             street: "Lenina",
//         }
//     }
//     // var result = arr.match(/([\w.-]+@[\w.]+\.[\w]{1,6})/g);
//     // console.log(result);
// document.querySelector(".test__btn").onclick = function(event) {
//     var form = event.target.parentNode;
//     form.querySelectorAll(".test__input").forEach((el) => {
//         var data = arr.match(/[\w]+[\bma]+/g);
//         console.log(data);

//         // var data2 = el.value.matchAll(/([,])([0-9]+)([\w])+/g);
//         // var data = Array.from(data2);
//         // if (data) {
//         //     console.log(data);
//         // } else {
//         //     console.log(data);
//         // }


//     });
// }
//
// var kon = (a, b) => { if (a && b) { return true; } else { return false; } }
// var diz = (a, b) => { return Boolean([a, b].filter((e) => e == 1).length); }
// var shef = (a, b) => { return Boolean([a, b].filter((e) => e == 0).length) }
// var pirs = (a, b) => { if (!a && !b) { return true; } else { return false; } }
// var xor = (a, b) => { if (a == b) { return false; } else { return true; } }
// var res = (a, b) => {
//     return shef(shef(shef(a, a), b), shef(shef(b, b), a));
// }
// console.log(res(1, 0));