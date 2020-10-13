function verExperiencia() {
    var element = document.getElementById('experience');
    element.classList.add("active");
    // document.getElementById('studies').classList.remove("active");
}

function ocultarExperiencia() {
    var element = document.getElementById('experience');
    element.classList.remove("active");
    // document.getElementById('experience').classList.remove("active");
}

function verEstudios() {
    var element = document.getElementById('studies');
    element.classList.add("active");
    // document.getElementById('experience').classList.remove("active");
}

function ocultarEstudios() {
    var element = document.getElementById('studies');
    element.classList.remove("active");
    document.getElementById('experience').classList.remove("active");
}

function verSkills() {
    var element = document.getElementById('header-skills');
    element.classList.add("active");
    document.getElementById('header-personal').classList.add("inactive");
}

function ocultarSkills() {
    var element = document.getElementById('header-personal');
    element.classList.remove("inactive");
    document.getElementById('header-skills').classList.remove("active");
}

function nombreCienVeces() {
    for (var i=0; i<100;i++) {
     console.log("Luis"); 
    }
  }