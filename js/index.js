// let season = {
//     mounthCount: 3,
//     thisYear: 2022,
//     seasonName: prompt('Введите название времени года'),
//     text: ' - прекрасное время года!',
//     textShow (){
//         alert(this.seasonName + this.text)
//     }
// }

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