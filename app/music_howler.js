import {Howl, Howler} from 'howler';
import '../app/jquery'



function listmusics() {
    for (var i = 0; i < audios.length; i++) {
        $("#musiclist").append("<div class='musicitem' onclick=playmusic(" + i + ")><i class='fa fa-music' style='width: 30px;'></i> " + audios[i].title + "</div>")
    }
}

function seekbarloop() {
    if (isplaying) {
        var currentscond = sound.seek()
        $("#playerrange").val(currentscond / sound.duration())
        if (!isNaN(sound.seek() / 60))
            $("#currentsecond").html((sound.seek() / 60).toFixed(2))
        $("#currentduration").html((sound.duration() / 60).toFixed(2))
        $("#currenttitle").html(audios[currentaudioindex].title)
        setTimeout(function () {
            seekbarloop()
        }, 1000)
    }
}

listmusics()

var sound

function playmusic(currentindex) {

    currentaudioindex = currentindex
    try {
        sound.stop()
    }
    catch (e) {
    }
    sound = new Howl({
        src: ['../assets/music/' + audios[currentindex].file + '.mp3']
    });
    var nextmusic = currentaudioindex + 1
    sound.on('end', function () {
        if (nextmusic <= audios.length)
            $(".musicitem:eq(" + nextmusic + ")").click()
        else
            stop()
    });

    $(".musicitem").css({ "background-color": "inherit", "color": "white" })
    $(".musicitem:eq(" + currentaudioindex + ")").css({ "background-color": "white", "color": "black" })

    play()
}

function playprevmusic() {
    if (currentaudioindex > 0)
        playmusic(currentaudioindex - 1)
}

function playnextmusic() {
    if (currentaudioindex < audios.length)
        playmusic(currentaudioindex + 1)
}

function setmusicbynum(num) {
    try {
        sound.stop()
    }
    catch (e) {
    }
    sound = new Howl({
        src: ['mp3/' + audios[num].file + '.mp3']
    });
}

setmusicbynum(0)

var isplaying = false

function play() {
    isplaying = true
    sound.play()
    $("#playpause").html('<i class="fa fa-pause"></i>')
    seekbarloop()
}

function pause() {
    isplaying = false
    sound.pause()
    $("#playpause").html('<i class="fa fa-play"></i>')
}

function stop() {
    sound.stop()
    isplaying = false
    $("#playpause").html('<i class="fa fa-play"></i>')
}

function playpause() {
    $(".musicitem").css({ "background-color": "inherit", "color": "white" })
    $(".musicitem:eq(" + currentaudioindex + ")").css({ "background-color": "white", "color": "black" })
    if (isplaying)
        pause()
    else
        play()
}


$('.musicitem').click(function () {
    //
});

function rangechanged() {
    var seekvalue = $("#playerrange").val()
    var wantedsecond = sound.duration() * (seekvalue / 100)
    sound.seek(wantedsecond)
}