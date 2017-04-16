 
function renderDay() {
    totalMinutes = 1440 / 2;
    var day = {}
    day.time = []
    cnt = 9;
    for (i = 0; i <= totalMinutes; i++) {
        if (i % 60 == 0) {
            day.time.push(i)
            $(".mainWrapper").append("<span class='minitue'>" + getAmPM(cnt) + "</span>")
            cnt++;
        }
    }
}

function getAmPM(cnt) {
    if (cnt == 12) {
        return cnt + "AM"

    }
    if (cnt > 11)
        return cnt % 12 + "AM"
    else
        return cnt + "PM"

}
var RenderedObj = {};
var events = [{
    id: 001
    , start: 120
    , end: 150
    , name: "event 1"
}, {
    id: 002
    , start: 350
    , end: 600
    , name: "event 2"
}, {
    id: 003
    , start: 100
    , end: 270
    , name: "event 3"
}, {
    id: 004
    , start: 150
    , end: 200
    , name: "event 4"
}, {
    id: 005
    , start: 350
    , end: 500
    , name: "event 5"
}, {
    id: 006
    , start: 60
    , end: 90
    , name: "event 6"
}, {
    id: 007
    , start: 150
    , end: 200
    , name: "event 7"
}]

function calculateRange() {
    events.sort(sortWithStartTime);

    for (i = 0; i < events.length; i++) {
        for (j = 1; j < (events.length); j++) {
            if (Number(events[j].start) >= Number(events[i].start) && Number(events[j].start) <= Number(events[i].end)) {
                events[i].class = (events[i].class == undefined) ? "newClass" + events[i].id : events[i].class;
                events[j].class = (events[j].class == undefined) ? "newClass" + events[i].id : events[j].class;
                var className = events[i].class;
                var counterId = [];
                if (RenderedObj[className] == undefined) {
                    RenderedObj[className] = [];
                }
                if ($.inArray(events[i].id, RenderedObj[className]) == -1) {
                    RenderedObj[className].push(events[i].id);
                }
            }
        }
    }
    events.sort(SortWithId);
}

function sortWithStartTime(a, b) {
    if (a.start < b.start)
        return -1;
    if (a.start > b.start)
        return 1;
    return 0;
}

function SortWithId(a, b) {
    if (a.id < b.id)
        return -1;
    if (a.id > b.id)
        return 1;
    return 0;
}

function DrawEvents() {
    $.each(events, function (index, element) {
        var multiElement = (RenderedObj[element.class] != undefined) ? RenderedObj[element.class].length : 1;
        var elementWidth = 600 / multiElement;
        var elementLeft = 0;
        $(".mainWrapper").append("<div id='eventsid" + element.id + "' class='event " + element.class + " eve" + element.id + "'/>" + element.name + "</div>");
        if ($.inArray(element.id, RenderedObj[element.class]) != -1) {
            elementLeft = (elementWidth * ($('.' + element.class).index($('#eventsid' + element.id))));
        }
        $("#eventsid" + element.id).text(element.name)
        $("#eventsid" + element.id).css('top', element.start + "px");
        $("#eventsid" + element.id).css('left', elementLeft + "px");
        $("#eventsid" + element.id).css('width', +elementWidth + "px");
        $("#eventsid" + element.id).css('height', element.end + "px");
    });
}
$(document).ready(function () {    
    renderDay();
    calculateRange();
    DrawEvents();
})
