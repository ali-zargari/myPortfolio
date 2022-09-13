
let init = () => {
    document.getElementById('pass_input').addEventListener('change', function (e){
        if(e.target.value == 'frankbutt'){
            console.log(e.target.value);
            window.open("../sub-sections/Transcript.html");

        }
    });
}

init();