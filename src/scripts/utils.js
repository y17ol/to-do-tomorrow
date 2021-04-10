// 
//  Утилиты
// 

function getDateStr(date) {

    date = new Date(Number(date))

    return (
        date.getHours() + ':' +
        date.getMinutes() + ' &nbsp ' +
        date.getDate() + '.' + 
        (date.getMonth() + 1) + '.' +
        date.getFullYear()
    )
}

function getNowDate() {
    
    const date = new Date(Date.now())
    
    return (  
        dateToDD(date.getFullYear()) + '-' + 
        dateToDD(date.getMonth() + 1) + '-' +
        dateToDD(date.getDate()) + 'T' +
        dateToDD(date.getHours()) + ':' +
        dateToDD(date.getMinutes())
    )
}

function dateToDD(date) {
    return ( date > 9 ? date : '0' + date )
}

function errorAdd(data) {
    console.error('ERROR: Запись не добавлена\n\n' + data)
}

// src = https://learn.javascript.ru/cookie#getcookie-name
function getCookie(name) {
    let matches = document.cookie.match(new RegExp(
      "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));
    return matches ? decodeURIComponent(matches[1]) : undefined;
}

// src = https://learn.javascript.ru/cookie#deletecookie-name
function deleteCookie(name) {
    setCookie(name, "", {
      'max-age': -1
    })
}

// 
//  item cards
// 

function printVideoCards(arrayVideo, currentPage, countItemsOnPage) {

    for (
        let i = currentPage * 4 - 4; 
        i < currentPage * 4 - 4 + countItemsOnPage; 
        i++
    ) {
        let $video = document.querySelector('.video' + ( i - (currentPage * 4) + 6 ) )
        $video.innerHTML = returnCardVideo(arrayVideo[i + 1][3], arrayVideo[i + 1][1], arrayVideo[i + 1][2], getDateStr(arrayVideo[i + 1][4]))
        $video.firstElementChild.style.display = ''
    }

    for (let i = countItemsOnPage + 2; i <= 5; i++) {
        document.querySelector('.video' + i).firstElementChild.style.display = 'none'
    }
}

function printChartCards(arrayChart, currentPage, countItemsOnPage) {

    for (
        let i = currentPage * 4 - 4; 
        i < currentPage * 4 - 4 + countItemsOnPage; 
        i++
    ) {

        let n =  i - (currentPage * 4) + 5 
        let opt = getOptions(arrayChart[i][3].data, arrayChart[i][3].opt)

        document.querySelector('.chart__chart' + n).innerHTML = returnCardChart(arrayChart[i][1], arrayChart[i][2], n, getDateStr(arrayChart[i][4]))

        $('#chart' + n).CanvasJSChart(opt)

        document.querySelector('.chart__chart' + n).style.display = 'block'
    }

    for (let i = countItemsOnPage + 1; i < 5; i++) {
        document.querySelector('.chart__chart' + i).style.display = 'none'
    }
}

function printEventCards(arrayEvent, currentPage, countItemsOnPage) {
    
    for (
        let i = currentPage * 4 - 4; 
        i < currentPage * 4 - 4 + countItemsOnPage; 
        i++
    ) {
        let $event = document.querySelector('.event' + ( i - (currentPage * 4) + 6 ) )
        $event.innerHTML = returnCardEvent(arrayEvent[i + 1])
        $event.firstElementChild.style.display = ''
        getImage(arrayEvent[i + 1][4], 'minImage')
    }

    for (let i = countItemsOnPage + 2; i <= 5; i++) {
        document.querySelector('.event' + i).firstElementChild.style.display = 'none'
    }
}

//
//  card nav
//

function printCardNav(startPage, endPage, countPages, currentPage) {

    document.querySelector('.subCardNav').innerHTML = ''

    for (let i = startPage; i <= endPage; i++) {

        document.querySelector('.subCardNav').insertAdjacentHTML('beforeend', 
            '<button class="cardNav' + (i) + '">' + (i) + '</button>')
    }

    disableCardNav(currentPage, countPages)
}

function disableCardNav(currentPage, countPages) {

    if (currentPage == 1) {
        document.querySelector('.cardNav').firstElementChild.setAttribute('disabled', 'disabled')
    } else if (currentPage == countPages) {        
        document.querySelector('.cardNav').lastElementChild.setAttribute('disabled', 'disabled')
    }
}

function cardNavClick(event, type, numberBigCards, arrayItems, currentPage, countPages, firstPage, lastPage) {

    if (event.target.tagName != 'DIV') {

        document.querySelector('.cardNav' + currentPage).classList.remove('cardNavTarget')

        if (event.target.textContent == 'Предыдущая') {

            if (currentPage > 1) {

                currentPage -= 1
                document.querySelector('.cardNav').lastElementChild.removeAttribute('disabled')

                if (currentPage < firstPage) {

                    if ( (currentPage - 4) >= 1 ) {
                        firstPage = currentPage - 4
                        lastPage = currentPage
                    } else {
                        firstPage = 1
                        lastPage = 5   
                    }

                    printCardNav(firstPage, lastPage, countPages, currentPage)
                
                } else {
                    disableCardNav(currentPage, countPages)
                }
            }

        } else if (event.target.textContent == 'Следующая') {

            if (currentPage < countPages) { 

                currentPage += 1
                document.querySelector('.cardNav').firstElementChild.removeAttribute('disabled')

                if (currentPage > lastPage) {

                    if ( (currentPage + 4) <= countPages ) {
                        firstPage = currentPage
                        lastPage = currentPage + 4                    
                    } else {
                        firstPage = countPages - 4
                        lastPage = countPages  
                    }

                    printCardNav(firstPage, lastPage, countPages, currentPage)
                
                } else {
                    disableCardNav(currentPage, countPages)
                }    
            }

        } else {

            currentPage = parseInt(event.target.textContent, 10)

            if (currentPage > 1) {
                document.querySelector('.cardNav').lastElementChild.removeAttribute('disabled')
                if (currentPage > firstPage) {
                    disableCardNav(currentPage, countPages)
                }
            }

            if (currentPage < countPages) {
                document.querySelector('.cardNav').firstElementChild.removeAttribute('disabled')
                if (currentPage < lastPage) {
                    disableCardNav(currentPage, countPages)
                }
            }

        }

        document.querySelector('.cardNav' + currentPage).classList.add('cardNavTarget')

        let countItemsOnPage = (
            (currentPage * 4) <= (arrayItems.length - numberBigCards) ? 
                4 :
                (arrayItems.length - (currentPage * 4 - 4) - numberBigCards) 
        )

        if (type == 'video') {
            printVideoCards(arrayItems, currentPage, countItemsOnPage)
        } else if (type == 'chart') {
            printChartCards(arrayItems, currentPage, countItemsOnPage)
        } else if (type == 'event') {
            printEventCards(arrayItems, currentPage, countItemsOnPage)
        }

    }

    return [currentPage, firstPage, lastPage]
}