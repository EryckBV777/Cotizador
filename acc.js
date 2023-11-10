function gradeQuiz() {
    var score = 0;
    var feedback;


    var p1 = document.getElementById("p1").value;
    if (p1 === "1") {
        score++;
        feedback = "Correcta - Muy bien, felicitación!(✅)";
    } else {
        feedback = "Incorrecta - Te equivocaste, la capital de Bélgica es Bruselas.(❌)";
    }
    document.getElementById("feedback1").innerText = feedback;

    var p2 = document.getElementById("p2").value;
    if (p2 === "1") {
        score++;
        feedback = "Correcta - Muy bien, felicitación!(✅)";
    } else {
        feedback = "Incorrecta - Te equivocaste, la capital de Argentina es Buenos Aires.(❌)";
    }
    document.getElementById("feedback2").innerText = feedback;

    var p3 = document.getElementById("p3").value;
    if (p3 === "1") {
        score++;
        feedback = "Correcta - Muy bien, felicitación!(✅)";
    } else {
        feedback = "Incorrecta - Te equivocaste, la capital de Costa Rica es San José.(❌)";
    }
    document.getElementById("feedback3").innerText = feedback;

    var p4 = document.getElementById("p4").value;
    if (p4 === "1") {
        score++;
        feedback = "Correcta - Muy bien, felicitación!(✅)";
    } else {
        feedback = "Incorrecta - Te equivocaste, la capital de Venezuela es Caracas.(❌)";
    }
    document.getElementById("feedback4").innerText = feedback;

    var p5 = document.getElementById("p5").value;
    if (p5 === "1") {
        score++;
        feedback = "Correcta - Muy bien, felicitación!(✅)";
    } else {
        feedback = "Incorrecta - Te equivocaste, la capital de Brasil es Brasilia.(❌)";
    }
    document.getElementById("feedback5").innerText = feedback;

    var p6 = document.getElementById("p6").value;
    if (p6 === "1") {
        score++;
        feedback = "Correcta - Muy bien, felicitación!(✅)";
    } else {
        feedback = "Incorrecta - Te equivocaste, la capital de Perú es Lima.(❌)";
    }
    document.getElementById("feedback6").innerText = feedback;

    var p7 = document.getElementById("p7").value;
    if (p7 === "1") {
        score++;
        feedback = "Correcta - Muy bien, felicitación!(✅)";
    } else {
        feedback = "Incorrecta - Te equivocaste, la capital de TyT es Puerto España.(❌)";
    }
    document.getElementById("feedback7").innerText = feedback;

    var p8 = document.getElementById("p8").value;
    if (p8 === "1") {
        score++;
        feedback = "Correcta - Muy bien, felicitación!(✅)";
    } else {
        feedback = "Incorrecta - Te equivocaste, la capital de Cuba es La Habana.(❌)";
    }

    document.getElementById("feedback8").innerText = feedback;

    var p9 = document.getElementById("p9").value;
    if (p9 === "1") {
        score++;
        feedback = "Correcta - Muy bien, felicitación!(✅)";
    } else {
        feedback = "Incorrecta - Te equivocaste, la capital de Nicaragua es Managua.(❌)";
    }
    document.getElementById("feedback9").innerText = feedback;

    var p10 = document.getElementById("p10").value;
    if (p10 === "1") {
        score++;
        feedback = "Correcta - Muy bien, felicitación!(✅)";
    } else {
        feedback = "Incorrecta - Te equivocaste, la capital de Ecuador es Quito.(❌)";
    }
    document.getElementById("feedback10").innerText = feedback;

    document.getElementById("score").innerText = score;
}