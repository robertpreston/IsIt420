/**
 * Created by Roberto Preste
 */

var d = new Date();

function check420() {
    var h = document.createElement("h2");
    var sp = document.createElement("span");
    sp.classList.add("glyphicon");
    sp.classList.add("glyphicon-plane");
    h.appendChild(sp);
    
    var l = document.createElement("a");
    l.innerHTML = "music";
    var music = randomMusic();
    l.setAttribute("href", music[1]);
    l.setAttribute("title", music[0]);
    l.setAttribute("target", "_blank");

    // 20th April
    if (d.getDate() == 20 && d.getMonth() == 3) {
        document.getElementById("main_p").innerHTML = "YES!";
        document.getElementById("add_p").innerHTML = "An entire day to get high!!!";
        document.getElementById("main_div").appendChild(h);
        document.getElementById("music_p").innerHTML = "Have a great trip with this great ";
        document.getElementById("music_p").appendChild(l);
    // April 2020
    } else if (d.getMonth() == 3 && d.getFullYear() == 2020) {
        document.getElementById("main_p").innerHTML = "YES!";
        document.getElementById("add_p").innerHTML = "An entire month to get high!!!";
        document.getElementById("main_div").appendChild(h);
        document.getElementById("music_p").innerHTML = "Have a wonderful 4/20 with this great ";
        document.getElementById("music_p").appendChild(l);
    // 4.15 to 4.19
    } else if ((d.getHours() == 4 && d.getMinutes() >= 15 && d.getMinutes() < 20) ||
                (d.getHours() == 16 && d.getMinutes() >= 15 && d.getMinutes() < 20)) {
        document.getElementById("main_p").innerHTML = "NO";
        document.getElementById("add_p").innerHTML = "But it's almost here..!";
        document.getElementById("music_p").innerHTML = "Get ready with some good ";
        document.getElementById("music_p").appendChild(l);
    // 4.21 to 4.25
    } else if ((d.getHours() == 4 && d.getMinutes() > 20 && d.getMinutes() <= 25) ||
        (d.getHours() == 16 && d.getMinutes() > 20 && d.getMinutes() <= 25)) {
        document.getElementById("main_p").innerHTML = "NO";
        document.getElementById("add_p").innerHTML = "Just missed it...";
        document.getElementById("music_p").innerHTML = "Cheer up with some good ";
        document.getElementById("music_p").appendChild(l);
    // 4.20!!!
    } else if ((d.getHours() == 4 && d.getMinutes() == 20) || (d.getHours() == 16 && d.getMinutes() == 20)) {
        document.getElementById("main_p").innerHTML = "YES!";
        document.getElementById("add_p").innerHTML = "It's time to get high!";
        document.getElementById("main_div").appendChild(h);
        document.getElementById("music_p").innerHTML = "Have a great trip with this great ";
        document.getElementById("music_p").appendChild(l);
    } else {
        document.getElementById("main_p").innerHTML = "NO";
        document.getElementById("add_p").innerHTML = "Check back soon :(";
        document.getElementById("music_p").innerHTML = "Meanwhile, you can enjoy some good ";
        document.getElementById("music_p").appendChild(l);
    }

    setTimeout(check420, 10000);
}

function timer420() {
    var endtime = new Date;

    if ((d.getHours() > 16) || (d.getHours() === 16 && d.getMinutes() > 20)) {
        endtime.setDate(endtime.getDate() + 1);
        endtime.setHours(4, 20, 0);
    } else if ((d.getHours() < 4) || (d.getHours() === 4 && d.getMinutes() < 20)) {
        endtime.setHours(4, 20, 0);
    } else if ((d.getHours() > 4 && d.getHours() < 16) || (d.getHours() === 4 && d.getMinutes() > 20) || (d.getHours() === 16 && d.getMinutes() < 20)) {
        endtime.setHours(16, 20, 0);
    }

    function pad(num) {
        return ("0" + parseInt(num)).substr(-2);
    }

    function tick() {
        var now = new Date;
        var remain = ((endtime - now) / 1000);
        // if the timer reaches 0 (it's 420!)
        if (remain <= 0) {
            document.getElementById("count").innerHTML = "perfect time";
            return
        }
        var hh = pad((remain / 60 / 60) % 60);
        var mm = pad((remain / 60) % 60);
        var ss = pad(remain % 60);

        document.getElementById("count").innerHTML = hh + " hours " + mm + " minutes " + ss + " seconds";
        setTimeout(tick, 1000);
    }

    document.addEventListener("DOMContentLoaded", tick);
}

function randomMusic() {
    var musicList = [
        ["The Brian Jonestown Massacre - Bravery Repetition And Noise", "https://www.youtube.com/watch?v=JMnl6HQ25ZI"],
        ["The Brian Jonestown Massacre - Their Satanic Majesties' Second Request", "https://www.youtube.com/watch?v=6XPbq41D6lg"],
        ["The Brian Jonestown Massacre - Take It From The Man!", "https://www.youtube.com/watch?v=MHO_YnL4J7s"],
        ["The Brian Jonestown Massacre - Methodrone", "https://www.youtube.com/watch?v=qbCn_BvYrhE"],
        ["The Brian Jonestown Massacre - Revelation", "https://www.youtube.com/watch?v=dAv4bHtobP0"],
        ["The Brian Jonestown Massacre - Aufheben", "https://www.youtube.com/watch?v=kNodiuIjoyU"],
        ["The Brian Jonestown Massacre - Third World Pyramid", "https://www.youtube.com/watch?v=R-fC4hMmPMg"],
        ["The Brian Jonestown Massacre - Mini Album Thingy Wingy", "https://www.youtube.com/watch?v=MtX5M3u4Zfw"],
        ["Rancho Relaxo - Happy Friday Experiment", "https://www.youtube.com/watch?v=9zZfV54P7Ww"],
        ["Rancho Relaxo - Neon Twang House", "https://www.youtube.com/watch?v=IsX8rBf4p8c"],
        ["Rancho Relaxo - Look At The Wall Son", "https://www.youtube.com/watch?v=1U4ARHHXLtM"],
        ["Rancho Relaxo - Into Trouble", "https://www.youtube.com/watch?v=fQoaVcrYC5o"],
        ["Kamni - ATOM", "https://www.youtube.com/watch?v=gMgiU5Bc18o"],
        ["Kyuss - Welcome To Sky Valley", "https://www.youtube.com/watch?v=PUDvRdDMc8k"],
        ["Kyuss - And The Circus Leaves Town", "https://www.youtube.com/watch?v=iOb12RE_gaA"],
        ["Kyuss - Blues For The Red Sun", "https://www.youtube.com/watch?v=phzNPCfYpzQ"],
        ["The Myrrors - Burning Circles In The Sky", "https://www.youtube.com/watch?v=F3lKVUsDBnc"],
        ["Radio Moscow - Brain Cycles", "https://www.youtube.com/watch?v=LSOqHrYXWSY"],
        ["Liquid Sound Company - Inside The Acid Temple", "https://www.youtube.com/watch?v=puCOijBcv1Q"],
        ["The Machine - Solar Corona", "https://www.youtube.com/watch?v=tCu2RVCpges"],
        ["The Machine - Drie", "https://www.youtube.com/watch?v=Dl-CWpUFmeI"],
        ["Naxatras - Naxatras", "https://www.youtube.com/watch?v=WNjyvtjAmUo"],
        ["Naxatras - II", "https://www.youtube.com/watch?v=GL0VldJ2Ps8"],
        ["Naxatras - III", "https://www.youtube.com/watch?v=Ay6JDvC8eC4"],
        ["Sisters Of Your Sunshine Vapor - Sisters Of Your Sunshine Vapor", "https://www.youtube.com/watch?v=NNvBmYqE36U"],
        ["The Egocentrics - Love, Fear, Choices And Astronauts", "https://www.youtube.com/watch?v=PdNB3pIwLfA"],
        ["Cross Highest Trip - Ayahuasca", "https://www.youtube.com/watch?v=FQxkP8Vyqk0"],
        ["Cross Highest Trip - Breakthrough Blues, Uprising", "https://www.youtube.com/watch?v=TunW13-GLZc"],
        ["Cross Highest Trip - Psychedelicatessen", "https://www.youtube.com/watch?v=eqbJPoG3teM"],
        ["Cross Highest Trip - Vision Without Execution Is Hallucination", "https://www.youtube.com/watch?v=V5cbPebr8d8"],
        ["Lunar Dunes - Galaxsea", "https://www.youtube.com/watch?v=W_v62rg7U2Y"],
        ["Black Market Karma - Semper Fi", "https://www.youtube.com/watch?v=EZ-KKLlP3ZE"],
        ["Black Market Karma - Plastic Hippie", "https://www.youtube.com/watch?v=hyoIQkFITaA"],
        ["Weed - Weed", "https://www.youtube.com/watch?v=fFUrnc1IMJg"],
        ["Leaf Hound - Growers Of Mushrooms", "https://www.youtube.com/watch?v=s8bGgtU1bwA"],
        ["Magic Shoppe - Reverberation", "https://www.youtube.com/watch?v=QrXLfDd00m8"],
        ["King Gizzard & The Lizard Wizard - I'm In Your Mind Fuzz", "https://www.youtube.com/watch?v=1KfaQ6pmv18"],
        ["The Rosewood Brothers - Soul Blossom", "https://www.youtube.com/watch?v=emdF993kRpk"],
        ["Glue Trip - Glue Trip", "https://www.youtube.com/watch?v=NwnV7-Y8gYU"],
        ["GUM - Delorean Highway", "https://www.youtube.com/watch?v=nDZLaZdds5Y"],
        ["The Re-Stoned - Chronoclasm", "https://www.youtube.com/watch?v=Q_yXzXKK8-o"],
        ["The Re-Stoned - Totems", "https://www.youtube.com/watch?v=j0q0y7XuYS8"],
        ["The Re-Stoned - Analog", "https://www.youtube.com/watch?v=3EzMW6qakhw"],
        ["The Re-Stoned - Reptiles Return", "https://www.youtube.com/watch?v=ssw9qDk3t2U"],
        ["Papir - III", "https://www.youtube.com/watch?v=Y2T-AexVgrc"],
        ["Papir - IIII", "https://www.youtube.com/watch?v=JB-rUiaAKkk"],
        ["Papir - V", "https://www.youtube.com/watch?v=CP4gaOZD55Y"],
        ["Papir - Stundum", "https://www.youtube.com/watch?v=VzQg0wnbJYE"],
        ["The Ugly Kings - Darkness Is My Home", "https://www.youtube.com/watch?v=zksiaBbWe1I"],
        ["Turtle Skull - Turtle Skull", "https://www.youtube.com/watch?v=HSA1qrbUM6s"],
        ["Wooden Shjips - V.", "https://www.youtube.com/watch?v=1HYT8sEDl0U"],
        ["Ghost Dance Collective - Ghost Dance Collective", "https://www.youtube.com/watch?v=ll3VbGdej-Q"],
        ["The Dandelion - Seeds Flowers and Magical Powers of The Dandelion", "https://www.youtube.com/watch?v=Sjjj7qp635A"],
        ["The Dandelion - Strange Case of The Dandelion", "https://www.youtube.com/watch?v=kBv-2gGRBnc"],
        ["The Dandelion - Old Habits & New Ways of The Dandelion", "https://www.youtube.com/watch?v=lnuRNXekOB4"],
        ["New Candys - Stars Reach the Abyss", "https://www.youtube.com/watch?v=fbnfI8tkpRE"],
        ["New Candys - Bleeding Magenta", "https://www.youtube.com/watch?v=Jts_6d0oMSk"],
        ["New Candys - New Candys As Medicine", "https://www.youtube.com/watch?v=7WdbniEFdNQ"],
        ["Da Captain Trips - Adventures in the Upside Down", "https://www.youtube.com/watch?v=HFxTFAlQkUk"],
        ["Weird Owl - Nuclear Psychology", "https://www.youtube.com/watch?v=ndXwTPAFjSU"],
        ["Magmakammer - Mindtripper", "https://www.youtube.com/watch?v=-kGpzKiWmRI"],
        ["Afroman - Because I Got High", "https://www.youtube.com/watch?v=WeYsTmIzjkw"],
        ["Electric Zoo - Me and My Machine Against the World", "https://www.youtube.com/watch?v=dFnX_cTsHoo"],
        ["The Lunar Effect - Calm Before The Calm", "https://www.youtube.com/watch?v=vRy38wWmWB8"],
        ["Bad Liquor Pond - Blue Smoke Orange Sky", "https://www.youtube.com/watch?v=19c9qaXRWTY"],
        ["The Sonic Dawn - Into The Long Night", "https://www.youtube.com/watch?v=xi4r50T7qFk"],
        ["Psychic Lemon - Psychic Lemon", "https://www.youtube.com/watch?v=uyYT95NO67g"],
        ["The Roaring 420s - What Is Psych?", "https://www.youtube.com/watch?v=-psBFcQ8t-k"],
        ["The Roaring 420s - You Can't Get Out Alive", "https://www.youtube.com/watch?v=YUq5hxueWko"],
        ["Arcadian Child - Superfonica", "https://www.youtube.com/watch?v=n9UpQXWJO6k"],
        ["Arcadian Child - Afterglow", "https://www.youtube.com/watch?v=mVNzeHWsAmI"],
        ["Pyramid - Mind Maze", "https://www.youtube.com/watch?v=UB5ogWTvsTM"],
        ["Cosmonauts - Persona Non Grata", "https://www.youtube.com/watch?v=M0hfdQ9-Zo0"],
        ["The Holy Spirit of Nothing - Mellaux", "https://www.youtube.com/watch?v=uYkUWp86NnU"],
        ["Flavor Crystals - Three", "https://www.youtube.com/watch?v=SYWPIzxNxFw"],
        ["Tales of Murder and Dust - Hallucination of Beauty", "https://www.youtube.com/watch?v=gDI6A7E8S-Q"],
        ["The Dolly Rocker Movement - A Purple Journey Into The Mod Machine", "https://www.youtube.com/watch?v=gKMJSrj0_xo"],
        ["The Sonic Dawn - Perception", "https://www.youtube.com/watch?v=O4H02KSZrsI"],
        ["The Sonic Dawn - Eclipse", "https://www.youtube.com/watch?v=pdRacB8gsb0"],
        ["Mystic Braves - The Great Unknown", "https://www.youtube.com/watch?v=MZwZQQPpUr8"],
        ["il Baskerville - La Rivoluzione", "https://www.youtube.com/watch?v=Ivd9IVBhb_k"],
        ["il Baskerville - Statistiche", "https://www.youtube.com/watch?v=6hms4fDnmQs"],
        ["Borer Treetops - Addictions", "https://www.youtube.com/watch?v=VhyV4zXoh5I"]
    ];
    var rand = musicList[Math.floor(Math.random() * musicList.length)];

    return rand;
}

check420();
timer420();
