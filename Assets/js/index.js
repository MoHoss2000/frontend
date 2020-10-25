
let frame = document.getElementById('frame');

var frm = $('#logform');



frm.submit(function (e) {

    e.preventDefault();

    $.ajax({
        type: "POST",
        url: "http://localhost:3000/api/student",
        data: frm.serialize(),
        success: function (data) {
            if (data['message'] == "success") {
                displayForm(data['src']);
                startTimer(data['time']);
            } else {
                alert("Code already used before");
            }

        },
        error: function (data) {
            alert('An error occurred.');
        },
    });
});



function displayForm(data) {
    frame.innerHTML = `<iframe src="${data}" width="640" height="1422" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>`

}

function startTimer(time) {
    c = time * 60;
    setInterval(function () {
        t = c;

        var hours = parseInt( c / 3600 ) % 24;
		var minutes = parseInt( c / 60 ) % 60;
		var seconds = c % 60;
		var result = (hours < 10 ? "0" + hours : hours) + ":" + (minutes < 10 ? "0" + minutes : minutes) + ":" + (seconds  < 10 ? "0" + seconds : seconds);     
        $('#time').html(result);

            c--;

        // if (seconds == 30) {
        //     alert('Submit guys!');
        // }

        // if(seconds == 0)
        // alert("Done!")


        // if (--timer < 0) {
        //     timer = duration;
        // }
    }, 1000);
}