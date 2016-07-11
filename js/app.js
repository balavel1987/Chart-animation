var canvas = document.getElementById("myChart");
var ctx = canvas.getContext('2d');
var encoder;
var myChart;

function init() {
    var val1 = $(".input1").val();
    var val2 = $(".input2").val();
    var val3 = $(".input3").val();
    var val4 = $(".input4").val();
    var val5 = $(".input5").val();
    var val6 = $(".input6").val();
    var type = $(".select").val();
    ctx.clearRect(0, 0, ctx.width, ctx.height);
    
    Chart.defaults.global.defaultFontColor = '#fff';

    if(myChart) {
        myChart.destroy();
        myChart.clear();
    }
    myChart = new Chart(canvas, {
        type: type,
        events: [],
        data: {
            labels: ["Apple", "Orange", "Banana", "Grape", "Kiwi", "Mango"],
            datasets: [{
                label: 'of Items',
                data: [val1, val2, val3, val4, val5, val6],
                backgroundColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderColor: [
                    'rgba(255,99,132,1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero:true
                    }
                }]
            },
            animation: {
                duration: 2000,
                onProgress: function() {
                    encoder.add(ctx);
                },
                onComplete: function() {

                }
            },
            tooltips: {
                backgroundColor: '#fff',
                titleFontColor: '#000',
                bodyFontColor: '#000'
            }
        },
    });
}

$(document).ready(function() {
    $("#draw").on("click",function() {
        encoder = new Whammy.Video(15, 100);
        init();
    });
    $("#save").on("click",function() {
        var output = encoder.compile();
        var url = (window.URL || window.webkitURL).createObjectURL(output);
        $('#video').attr('src', url);
        $('#download').attr('href', url);
        encoder = '';
        
    });
});