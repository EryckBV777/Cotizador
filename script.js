let respuestas = {
    group1: null,
    group2: null,
    group3: null,
    group4: null,
    group5: null,
    group6: null,
    group7: null,
    group8: null,
    group9: null,
    group10: null
};

let aciertos = 0;

function repuesta(group, selectedOption) {
    respuestas[group] = parseInt(selectedOption.value);
    

    if (respuestas[group] == 1) {

        const label = selectedOption.labels[0];
        label.classList.add('green');
    } else {
        const label = selectedOption.labels[0];
        label.classList.add('red');
    }

    console.log(`Respuesta para ${group}: ${selectedOption.value}`);
}


function verifyAnswers() {

    aciertos = Object.values(respuestas).reduce((total, value) => total + value, 0);
    console.log(aciertos);

    const radioInputs = document.querySelectorAll(".radio-input");

    radioInputs.forEach((radioInput) => {
        radioInput.disabled = true;
        
    });
    document.getElementById("aciertos").textContent = "Conseguiste " + aciertos + "  Aciertos";

    
    document.querySelector("button[onclick='verifyAnswers()']").disabled = true;
}