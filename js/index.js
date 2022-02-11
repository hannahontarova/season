// let season = {
//     mounthCount: 3,
//     thisYear: 2022,
//     seasonName: prompt('Введите название времени года'),
//     text: ' - прекрасное время года!',
//     textShow (){
//         alert(this.seasonName + this.text)
//     }
// }
// Установите количество снежинок (больше 30 - 400 не рекомендуется)
var snowmax=400

// Установите цвета снега. Добавьте столько цветов, сколько захотите
var snowcolor=new Array("#b9dff5","#b9dff5","#b9dff5","#b9dff5","#b9dff5")

// Установите шрифты, которые создают снежинки. Добавьте столько шрифтов, сколько захотите
var snowtype=new Array("Times")

// Установите букву, из которой будет создана ваша снежинка (recommended: * )
var snowletter="*"

// Установите скорость погружения (рекомендуемые значения от 0.3 до 2)
var sinkspeed=0.6

// Установите максимальный размер снежинок
var snowmaxsize=35

// Установите минимальный размер снежинок
var snowminsize=8

// Set 1 for all-over-snowing, set 2 for left-side-snowing
// Set 3 for center-snowing, set 4 for right-side-snowing
var snowingzone=1

var snow=new Array()
var marginbottom
var marginright
var timer
var i_snow=0
var x_mv=new Array();
var crds=new Array();
var lftrght=new Array();
var browserinfos=navigator.userAgent
var ie5=document.all&&document.getElementById&&!browserinfos.match(/Opera/)
var ns6=document.getElementById&&!document.all
var opera=browserinfos.match(/Opera/)
var browserok=ie5||ns6||opera

function randommaker(range) {
        rand=Math.floor(range*Math.random())
    return rand
}

function initsnow() {
        if (ie5 || opera) {
                marginbottom = document.body.scrollHeight
                marginright = document.body.clientWidth-15
        }
        else if (ns6) {
                marginbottom = document.body.scrollHeight
                marginright = window.innerWidth-15
        }
        var snowsizerange=snowmaxsize-snowminsize
        for (i=0;i<=snowmax;i++) {
                crds[i] = 0;
            lftrght[i] = Math.random()*15;
            x_mv[i] = 0.03 + Math.random()/10;
                snow[i]=document.getElementById("s"+i)
                snow[i].style.fontFamily=snowtype[randommaker(snowtype.length)]
                snow[i].size=randommaker(snowsizerange)+snowminsize
                snow[i].style.fontSize=snow[i].size+'px';
                snow[i].style.color=snowcolor[randommaker(snowcolor.length)]
                snow[i].style.zIndex=1000
                snow[i].sink=sinkspeed*snow[i].size/5
                if (snowingzone==1) {snow[i].posx=randommaker(marginright-snow[i].size)}
                if (snowingzone==2) {snow[i].posx=randommaker(marginright/2-snow[i].size)}
                if (snowingzone==3) {snow[i].posx=randommaker(marginright/2-snow[i].size)+marginright/4}
                if (snowingzone==4) {snow[i].posx=randommaker(marginright/2-snow[i].size)+marginright/2}
                snow[i].posy=randommaker(2*marginbottom-marginbottom-2*snow[i].size)
                snow[i].style.left=snow[i].posx+'px';
                snow[i].style.top=snow[i].posy+'px';
        }
        movesnow()
}

function movesnow() {
        for (i=0;i<=snowmax;i++) {
                crds[i] += x_mv[i];
                snow[i].posy+=snow[i].sink
                snow[i].style.left=snow[i].posx+lftrght[i]*Math.sin(crds[i])+'px';
                snow[i].style.top=snow[i].posy+'px';

                if (snow[i].posy>=marginbottom-2*snow[i].size || parseInt(snow[i].style.left)>(marginright-3*lftrght[i])){
                        if (snowingzone==1) {snow[i].posx=randommaker(marginright-snow[i].size)}
                        if (snowingzone==2) {snow[i].posx=randommaker(marginright/2-snow[i].size)}
                        if (snowingzone==3) {snow[i].posx=randommaker(marginright/2-snow[i].size)+marginright/4}
                        if (snowingzone==4) {snow[i].posx=randommaker(marginright/2-snow[i].size)+marginright/2}
                        snow[i].posy=0
                }
        }
        var timer=setTimeout("movesnow()",50)
}

for (i=0;i<=snowmax;i++) {
        document.write("<span id='s"+i+"' style='position:absolute;top:-"+snowmaxsize+"'>"+snowletter+"</span>")
}
if (browserok) {
        window.onload=initsnow
}

// создать функцию-конструктор, которая будет позволять создавать шаблонные объекты со следущими статическими свойствами
// Количество месяцев
// Текущий год
// Также необходимо создать динамическое поле, в которое нужно передавать название времени года - допустим "Зима"
// Последний пункт - это создание метода, который будет брать название времени года и выводить в Алерт фразу "название времени" - прекрасное время года!
function Seasons (season = 'любое время года'){
    this.mounthCount = 12
    this.thisYear = 2022
    this.seasonName = season
    this.text = ' - прекрасное время года!'
    this.textShow = function(){
        alert(this.seasonName + this.text)
    }
}

const seasonNew = new Seasons(prompt('Введите название времени года'))
seasonNew.textShow()

