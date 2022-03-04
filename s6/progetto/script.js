$(() => {
    const mieImg = ["arrabbiato", "bello", "piangere", "ridere", "amare", "amare1", "spavento", "shock", "arrabbiato", "bello", "piangere", "ridere", "amare", "amare1", "spavento", "shock"];

    for (var i = 0; i < 16; i++) {

        let immagineRandom = Math.floor(Math.random() * mieImg.length);
        let immagineEliminata = mieImg.splice(immagineRandom, 1);

        $("#memory").append('<div class="images" id="emoji' + i + '"><img id="' + i + '" src="img/' + immagineEliminata + '.png" width="130" height="130"></div>')
    }

    let immaginiCliccate = [];

    $(".images").click(function () {
        let clicks = $("#clicks").text();

        clicks++;

        $('#clicks').text(clicks);

        if (immaginiCliccate.length < 2) {

            $(this).children().show()

            let imgId = $(this).children().attr('id');
            let imgSrc = $(this).children().attr('src');

            

            let infoImmagine = {
                id: imgId,
                src: imgSrc
            }

            immaginiCliccate.push(infoImmagine)

            if (immaginiCliccate.length == 2) {

                if (immaginiCliccate[0].src == immaginiCliccate[1].src) {
                    immaginiCliccate=[]
                } else {
                    setTimeout(function () {

                        $('#' + immaginiCliccate[0].id).hide()
                        $('#' + immaginiCliccate[1].id).hide()
                        immaginiCliccate = [];
                    }, 500)

                }
            }
        }
    });

});






