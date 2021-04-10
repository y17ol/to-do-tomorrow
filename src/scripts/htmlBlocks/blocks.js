//
//  Карточки
//

function returnCardVideo(link, title, text, date) {
    return `
        <div class="card cardMin">
            <iframe src="` + link + `" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <div class="card-body">
                <h3 class="card-title">` + title + `</h3>
                <p class="card-text">` + text + `</p>
                <p class="date">` + date + `</p>
            </div>
        </div>
    `
}

function returnBigCardVideo(link, title, text, date) {
    return `
        <div class="card cardBig">
            <iframe src="` + link + `" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <div class="card-body">
                <h2 class="card-title">` + title + `</h2>
                <p class="card-text">` + text + `</p>
                <p class="date">` + date + `</p>
            </div>
        </div>
    `
}

function returnCardChart(title, text, numberChartToPast, date) {
    return `
        <div class="card cardChart">
            <div class="chartContainer" id="chart` + numberChartToPast +`"></div>
            <div class="card-body">
                <h2 class="card-title">` + title + `</h2>
                <p class="card-text">` + text + `</p>
                <p class="date">` + date + `</p>
            </div>
        </div>
    `
}

function returnCardEvent(row) {
    return `
        <div class="card cardMin">
            <div class="d-flex justify-content-center" id="image` + row[4] + `"></div>
            <div class="card-body">
                <h3 class="card-title">` + row[1] + `</h3>
                <p class="card-text">` + (row[2] == "" ? row[3].substring(0,300) + '.......' : row[2]) + `</p>  
            </div>
            <form action="./event-details.php" method="POST" class="event__form d-flex justify-content-around">
                <input type="text" name="id" class="event__id" value="` + row[0] + `">    
                <button type="submit" class="event__details">Подробнее</button>
                <p class="date">` + getDateStr(row[11]) + `</p>    
            </form>
        </div>
    `
}

function returnBigCardEvent(row) {
    return `
        <div class="card cardBig">
            <div class="d-flex justify-content-center" id="image` + row[4] + `"></div>
            <div class="card-body">
                <h2 class="card-title">` + row[1] + `</h2>
                <p class="card-text">` + (row[2] == "" ? row[3].substring(0,300) + '.......' : row[2]) + `</p>
            </div>
            <form action="./event-details.php" method="POST" class="event__form d-flex justify-content-around">
                <input type="text" name="id" class="event__id" value="` + row[0] + `">    
                <button type="submit" class="event__details">Подробнее</button>
                <p class="date">` + getDateStr(row[11]) + `</p>   
            </form>
        </div>
    `
}

function returnModal(
    id, 
    header, 
    body, 
    footerBtnText = 'Хорошо',
    headerTag = 'h5',
    headerClass = '',
    bodyClass = '',
    footerBtnClass = ''
) {
    return `
        <div class="modal fade" id="` + id + `" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <` + headerTag + ` class="modal-title ` + headerClass + `" id="exampleModalLongTitle">` + header + `</` + headerTag + `>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body ` + bodyClass + `">
                        ` + body + `
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-primary ` + footerBtnClass + `" data-dismiss="modal">` + footerBtnText + `</button>
                    </div>
                </div>
            </div>
        </div>
    `
}

function returnModalAddSucc() {
    return returnModal(
        'addSuсс',
        'Успех!',
        'Запись успешно добавлена в базу данных',
        'Хорошо',
        'h3',
        'modal__addSucc__header',
        'modal__addSucc__body',
        'modal__addSucc__ok'
    )
}

// 
//  Навы
// 

function returnCardNav() {
    return `
        <div class="cardNav d-flex justify-content-around">
            <button>Предыдущая</button>
            <div class="subCardNav d-flex justify-content-around"></div>
            <button>Следующая</button>
        </div>
    `
}