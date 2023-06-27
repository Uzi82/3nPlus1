const input = document.querySelector('.form-control')
let canvas = document.querySelector('.chart')
const btn = document.querySelector('.input button')
const valueContainer = document.querySelector('.value')
const title = document.querySelector('.count')
const maxTitle = document.querySelector('.max')
const minTitle = document.querySelector('.min')
const numberFunction = (number) => {
    if (number%2 !=0) {
        i = number * 3 +1
    }else {
        i = number/2
    }
    return i
}
let valueInt = document.createElement('span')
valueInt.className = 'number-hailstones'
let labels = []
let data = []
createChart()
btn.onpointerdown = app
input.onchange = app
function app() {
    labels = []
    data = []
    let nums = ''
    let comparisonNumberMax = null
    let comparisonNumberMin = Number.MAX_SAFE_INTEGER
    if(input.value > 1){
        let countTitle = 1
        let int = Number(input.value)
        while(int != 1) {
            Array.from(valueContainer.children).forEach((item) => {
                item.remove()
            })
            canvas.remove()
            int = numberFunction(int)
            if (int > comparisonNumberMax) {
                comparisonNumberMax = int
                maxTitle.innerHTML = `Max:${comparisonNumberMax}`
            }else if(int < comparisonNumberMin) {
                comparisonNumberMin = int
                minTitle.innerHTML = `Min:${comparisonNumberMin}`
            }
            
            title.innerHTML = `Count:${countTitle}`
            nums += (int + "  ")
            labels.push(countTitle)
            countTitle++
            data.push(int)
            canvas = document.createElement('canvas')
            document.body.append(canvas)
            createChart()
        }
        valueInt.innerText = nums
        valueContainer.append(valueInt.cloneNode(true))
    }
}
function createChart() {
    new Chart(
        canvas,
        {
        type: 'line',
        data: {
            labels: labels,
            datasets: [
            {
                label: '3N + 1',
                data: data,
                borderColor: 'blue'
            }
            ]
        },
        options: {}
        }
    );

}

