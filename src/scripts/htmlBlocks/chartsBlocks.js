//
//  Вспомогательные
//

function getRandom() {
    return getRandomPlus(16, 4096)
    // return Math.ceil(Math.random() * (4096 - 16) + 16)
}

function getRandomPlus(min, max) {
    return Math.ceil(Math.random() * (max - min) + min)
}

function titleInput(title, name, maxlength, placeholder) {
    return `
        <h4>
            ` + title + `
            <button type="button" class="fa fa-info" id="` + name + `Info"></button>
        </h4>
        <input class="form-control form-control-lg addChart__` + name + `" id="` + name + `" name="` + name + `" maxlength="` + maxlength + `" placeholder="` + placeholder + `">

    `
}

function titleX() {
    return titleInput('Заголовок оси X', 'titleX', 30, 'Ось X')
}

function titleY() {
    return titleInput('Заголовок оси Y', 'titleY', 30, 'Ось Y')
}

function suffixX() {
    return titleInput('Суффикс к оси X', 'suffixX', 15, '%')
}

function suffixY() {
    return titleInput('Суффикс к оси Y', 'suffixY', 15, '%')
}

function showInLegend() {
    return `
        <div class="form-check addChart__showInLegend">
            <input class="form-check-input" type="checkbox" checked="true" id="showInLegend">
            <label class="form-check-label" for="showInLegend">
                Показывать легенду
            </label>
        </div>
    `
}

function chartType(i) {
    return `
        <div class="form-group">
            <h4>
                Вид графика
                ` + (i == 0 ? `<button type="button" id="subTypeInfo" class="fa fa-info"></button>` : '') + `
            </h4>
            <select class="form-control custom-select addChart__subType" id="subType` + i + `">
                <option value="line">Линейный</option>
                <option value="area">Линейный с заливкой</option>
            </select>
        </div>
    `
}


//
//  html-блок "ДАННЫЕ"
//

function returnData(i) {
    return `
        <div class="input-group addChart__data">
            <div class="input-group-prepend">
                <span class="input-group-text ">Наименование и значение: &nbsp &nbsp</span>
            </div>
            <input type="text" class="form-control form-control-lg" id="dataName` + i + `" maxlength="40" value="Данные `+ (i + 1) + `">
            <input type="number" class="form-control form-control-lg" id="dataValue` + i + `" maxlength="15" value="` + getRandom() + `">
        </div>
    `
}

function returnData2(i, j) {
    return `
        <div class="input-group addChart__data">
            <div class="input-group-prepend">
                <span class="input-group-text ">&laquo X &raquo &nbsp и &nbsp &laquo Y &raquo :</span>
            </div>
            <input type="number" class="form-control form-control-lg" id="dataX__` + i + `_` + j + `" maxlength="15" value="`+ (        (j * 10) + (5 * i)        ) + `">
            <input type="number" class="form-control form-control-lg" id="dataY__` + i + `_` + j + `" maxlength="15" value="` + (        (j * 10 / 2) + (j % 2 * ( i == 0 ? 1 : i ) * j * 3)       ) + `">
        </div>
    `
}

function returnDataGroup(i, type = '') {
    return `
        <h4>График №`+ (i + 1) + `</h4>
        <div class="form-group">

            <h4>Наименование данных</h4>
            <input class="form-control form-control-lg addChart__dataName" id="dataName` + i + `" name="dataName` + i + `" maxlength="40" value="Данные `+ (i + 1) + `">
                
            ` + (type == 'multi' ? chartType(i) : ``) + `

            <h4>Данные</h4>
            <div class="dataGroup` + i + `">data</div>
            
            <div class="d-flex justify-content-between">
                <button type="button" id="deleteData` + i + `" class="fa fa-trash-o">&nbsp &nbsp Назад</button>
                <button type="button" id="addData` + i + `" class="fa fa-plus-square-o">&nbsp &nbsp Еще</button>
            </div>

        </div>
    `
}

//
//  html-блок "ОПЦИИ"
//

function returnPieOpt() {
    return `
        <div class="form-group">` + suffixY() + `</div>
        <div class="form-group">` + showInLegend() + `</div>
    `
}

function returnColumnOpt() {
    return `
        <div class="form-group">` + titleX() + titleY() + `</div>
        <div class="form-group">` + suffixY() + `</div>
    `
}

function returnScatterOpt() {
    return `
        <div class="form-group">` + titleX() + titleY() + `</div>
        <div class="form-group">` + suffixX() + suffixY() + `</div>
        <div class="form-group">` + showInLegend() + `</div>
    `
}

//
//  Модальные окна
//



function returnModalTypeInfo() {

    let body = `
        <h5>график 1</h5>
        sdfsdffd
    `

    return returnModal('modalTypeInfo', 'Виды графиков', body)
}

function returnModalTitleXYInfo() {

    let body = `
        <h5>x y</h5>
        ddddddddddddd
    `

    return returnModal('modalTitleXYInfo', 'Заголовки осей &laquoX&raquo и &laquoY&raquo', body)
}

function returnModalSuffixXInfo() {

    let body = `
        <h5>SUF X</h5>
        DS
    `

    return returnModal('modalSuffixXInfo', 'Суффикс к оси &laquoX&raquo', body)
}

function returnModalSuffixYInfo() {

    let body = `
        <h5>SUF Y</h5>
        SFZSDF
    `

    return returnModal('modalSuffixYInfo', 'Суффикс к оси &laquoY&raquo', body)
}

function returnModalSubTypeInfo() {

    let body = `
        <h5>type 1</h5>
        fffffff
    `

    return returnModal('modalSubTypeInfo', 'Подвиды линейных графиков', body)
}