export function d3vis() {
    var contentBlock = document.querySelector(".content");

    var inputElement = document.createElement("input");
    inputElement.classList.add("test__input");
    inputElement.placeholder = "Число от 1000 до 200 000";
    contentBlock.append(inputElement);

    var btnElement = document.createElement("button");
    btnElement.classList.add("test__btn");
    btnElement.innerHTML = "Построить график";
    contentBlock.append(btnElement);

    var array = Array(200000).fill().map((e, i) => i + 1);

    document.querySelector(".test__btn").addEventListener("click", function(el) {
        var numberSearch = el.target.parentElement.firstChild.value;
        if (numberSearch <= 300) {
            alert("Укажите число больше 300");
        } else {
            var arr = [];
            var array = Array(200000).fill().map((e, i) => i + 1);
            arr = massiv(array, numberSearch);

            axis(arr);
        }
    });

    function arr_log2(arr) {
        var data = [];
        let start = Date.now();
        let massiv = arr;
        let centerNumber;
        let number = 300;
        let time, times;

        for (let i = 0; i < 80; i++) {
            time = Date.now();
            times = time - start;
            // максимальное значение массива делим на 2 и находим число
            centerNumber = Math.round(d3.max(massiv) / 2);

            if (centerNumber == number) {
                break;
            } else if (number > centerNumber) {
                massiv = massiv.slice(centerNumber, d3.max(massiv));
            } else if (number < centerNumber) {
                massiv = massiv.slice(d3.min(massiv), centerNumber);
            }
            // сравниваем полученное число с искомым.
            // Если искомое меньше, то удаляем правую часть массива, если оно меньше, то удаляем левую часть массива
            // создаём новый массив

            data.push([{ x: i, y: times }]);
        }
        return data;
    }

    function massiv(arr, number) {
        let data = [];
        array = arr;
        let time, times;
        let start = Date.now();

        for (let i = 0; i < array.length; i++) {
            time = Date.now();
            times = time - start;
            if (array[i] == number) {
                break;
            }
            data.push([{ x: array[i], y: times }]);
        }
        return data;
    }


    function axis(arr) { //рисует график
        var svg;
        var width = 500;
        var height = 500;
        var margin = 30;
        var xAxisLength = width - 2 * margin;
        var yAxisLength = height - 2 * margin;
        var dataLine = [];
        d3.select("svg").remove();
        // ось Х
        svg = d3.select('div.content')
            .append('svg')
            .classed("axis", true)
            .attr("width", width)
            .attr("height", height)
            .attr("border", "1px solid #666666");
        var scaleBottom = d3.scale.linear()
            .domain([0, arr[arr.length - 1][0].x])
            .range([0, xAxisLength]);
        var axisBottom = d3.svg.axis()
            .scale(scaleBottom)
            .orient("bottom")
            .ticks(10);
        svg.append("g")
            .attr("transform", "translate(" + margin + "," + (yAxisLength + margin) + ")")
            .call(axisBottom);

        //Ось Y
        var scaleLeft = d3.scale.linear()
            .domain([arr[arr.length - 1][0].y, 0])
            .range([0, yAxisLength]);
        var axisLeft = d3.svg.axis()
            .scale(scaleLeft)
            .orient("left")
            .ticks(10);
        svg.append("g")
            .attr("transform", "translate(" + margin + "," + margin + ")")
            .call(axisLeft);
        // рисуем сетку
        d3.selectAll("g.x-axis, g.tick")
            .append("line")
            .classed("line-axis", true)
            .attr("x1", 0)
            .attr("y1", 0)
            .attr("x2", 0)
            .attr("y2", -(yAxisLength));

        d3.selectAll("g.y-axis, g.tick")
            .append("line")
            .classed("line-axis", true)
            .attr("x1", 0)
            .attr("y1", 0)
            .attr("x2", (xAxisLength))
            .attr("y2", 0);

        var scaleX = d3.scale.linear()
            .domain([0, arr[arr.length - 1][0].x])
            .range([0, xAxisLength]);
        var scaleY = d3.scale.linear()
            .domain([0, arr[arr.length - 1][0].y])
            .range([yAxisLength, 0]);

        for (let i = 0; i < arr.length; i = i + (Math.ceil(arr.length / 15))) {
            dataLine.push({ x: scaleX(arr[i][0].x) + margin, y: scaleY(arr[i][0].y) + margin });
        }
        var pointLine = d3.svg.line().interpolate("basis")
            .x(function(d) { return d.x; })
            .y(function(d) { return d.y; })

        var g = svg.append("g");
        g.append("path")
            .attr("d", pointLine(dataLine))
            .style("stroke", "#666666")
            .style("stroke-width", 1);

        g.append("text")
            .attr("x", width - (margin * 3))
            .attr("y", yAxisLength + 20)
            .text("Массив данных");
        g.append("text")
            .style("transform", "rotate(-90deg)")
            .attr("x", -60)
            .attr("y", 40)
            .text("Время,мс");
        g.append("text")
            .attr("x", width / 2)
            .attr("y", 25)
            .attr("text-anchor", "middle")
            .text("Асимптатическая сложность")
            .style("font-size", "20px");
    }
}