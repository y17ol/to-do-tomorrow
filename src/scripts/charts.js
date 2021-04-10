const colors = [
    '#4f81bc',
    '#c0504e',
    '#9bbb58',
    '#23bfaa',
    '#8064a1',
    '#4aacc5',
    '#f79647',
    '#7f6084',
    '#77a033',
    '#33558b',
    '#e59566'
]

function returnColor(i) {
    while (i >= colors.length) {
        i -= 11
    }
    return colors[i]
}

function getOptions(data, opt) {
    
    let options = {}

    options.exportEnabled = opt.exportEnabled
    options.animationEnabled = opt.animationEnabled
    options.title = { text: opt.title}
    options.subtitles = [{ text: opt.subTitle }]

    if (opt.type == 'pie') {

        addData()

        options.data[0].showInLegend = opt.showInLegend
        options.data[0].toolTipContent = "<b>{name}</b>:<br>{y} " + opt.suffixY
        options.data[0].indexLabel = "{name}"
        options.data[0].legendText = "{name}"
        options.data[0].indexLabelPlacement = "inside"    
        
        dataToNumber()
        
    } else if (opt.type == 'column') {

        addAxisXY()
        delete options.axisX.suffix

        addData()

        options.data[0].toolTipContent = "<b>{label}</b>:<br>{y} " + opt.suffixY
        options.axisY.includeZero = true

        dataToNumber()

    } else if (opt.type == 'pyramid') {

        addData()

        options.data[0].indexLabelFontSize = 18
        options.data[0].showInLegend = opt.showInLegend
        options.data[0].legendText = "{indexLabel}"
        options.data[0].toolTipContent = "<b>{indexLabel}:</b><br> {y} " + opt.suffixY

        dataToNumber()
      
    } else if (opt.type == 'scatter') {
        
        options.legend = {}
        options.legend.cursor = "pointer"
        options.legend.itemclick = 'toggleDataSeries'

        addAxisXY()

        options.data = getDataScatter(data)

        dataToNumber2()

    } else if (opt.type == 'multi') {

        addAxisXY()
        options.data = getDataMulti(data)

        dataToNumber2()
    }

    function addAxisXY() {

        options.axisY = {
            title: opt.titleY,
            suffix: ' ' + opt.suffixY
        }

        options.axisX = { 
            title: opt.titleX ,
            suffix: ' ' + opt.suffixX
        }
    }

    function addData() {
        options.data = [{
            type: opt.type,
            dataPoints: data
        }]
    }

    function dataToNumber() {
        options.data[0].dataPoints.forEach( (item) =>                    
            item.y = Number(item.y)
        )
    }
    
    function dataToNumber2() {
        options.data.forEach( (item) =>   
            item.dataPoints.forEach( (item2) => {
                item2.y = Number(item2.y)
                item2.x = Number(item2.x)
            })                 
        )
    }

    function getDataScatter(dataSc) {
        for (let i = 0; i < dataSc.length; i++) {
            dataSc[i].type = opt.type
            dataSc[i].showInLegend = opt.showInLegend
            dataSc[i].toolTipContent =
                "<span style=\"color:" + returnColor(i) + " \">{name}</span><br>"
                + opt.titleX  + ": {x} " + opt.suffixX + "<br>"
                + opt.titleY + ": {y} " + opt.suffixY
        }
        return dataSc
    }

    function getDataMulti(dataMl) {
        for (let i = 0; i < dataMl.length; i++) {
            dataMl[i].showInLegend = opt.showInLegend
            dataMl[i].toolTipContent =
                "<span style=\"color:" + returnColor(i) + " \">{name}</span><br>"
                + opt.titleX + ": {x} " + opt.suffixX + "<br>"
                + opt.titleY + ": {y} " + opt.suffixY
        }
        return dataMl
    }
    
    return options
}