$(document).ready(function () {
    var hours = {
        amHours: [8, 9, 10, 11],
        pmHours: [12, 1, 2, 3, 4, 5]
    };

    var colorChange = {
        amColorHours: [8, 9, 10, 11],
        pmColorHours: [12, 13, 14, 15, 16, 17]
    };
    var i = 0;

    $("#currentDay").text(moment());

        for (var i = 0; i < hours.amHours.length; i++) {
        var newRow = $(`<div class='row'></div>`);
        $('.container').append(newRow);
        var hrCol = $(`<div class='col-1 time-block'>${hours.amHours[i]}AM</div>`);
        var textCol = $(`<textarea class="col-10" data-time=${colorChange.amColorHours[i]}>Enter Important Info Here:</textarea>`);
        var buttonCol = $('<button class="col-1 saveBtn">Save</button>');
        $(newRow).append(hrCol, textCol, buttonCol);
    }

    for (var i = 0; i < hours.pmHours.length; i++) {
        var newRow = $(`<div class='row'></div>`);
        $('.container').append(newRow);
        var hrCol = $(`<div class='col-1 time-block'>${hours.pmHours[i]}PM</div>`);
        var textCol = $(`<textarea class="col-10" data-time=${colorChange.pmColorHours[i]}>Enter Important Info Here:</textarea>`);
        var buttonCol = $('<button class="col-1 saveBtn">Save</button>');
        $(newRow).append(hrCol, textCol, buttonCol);
    }

//    // function colorChange() {
//         $('textArea').each(function () {
//             var currentHour = parseInt(moment().hours());
//             var textData = $('textArea').data('time');
//             if (textData < currentHour) {
//                 $('textArea').removeClass("present");
//                 $('textArea').removeClass("future");
//                 $('textArea').addClass("past");
//             }
//             else if (textData === currentHour) {
//                 $('textArea').removeClass("past");
//                 $('textArea').removeClass("future");
//                 $('textArea').addClass("present");
//             }
//             else {
//                 $('textArea').removeClass("past");
//                 $('textArea').removeClass("present");
//                 $('textArea').addClass("future");
//             }
//             console.log(textData);
//             console.log(currentHour);
  //      });
});