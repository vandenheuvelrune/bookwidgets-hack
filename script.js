// Insert the code below into the console when you selected the border of the blue 'send response' box using CTRL + SHIFT + C
console.clear();
console.group("%cRetrieve bookwidget answers", "font-size: 13px;", "color: aqua; font-size: 13px;");
try {
    let studentAccount = "Jean-Marie Baptiste";
    let student = "Jean-Marie Baptiste";
    console.info("- Wijzigen van %cstudent_account", "color: grey;");
    document.getElementById("student_account").style.display = "block";
    document.getElementById("student_account").value = studentAccount;
    document.getElementById("student_account").disabled = false;
    console.info("- Wijzigen van %cstudent_name", "color: grey;");
    document.getElementById("student_label").style.display = "block";
    document.getElementById("student").style.display = "block";
    document.getElementById("student").value = student;
    document.getElementById("student").disabled = false;
    console.info("Script %csuccesvol %cuitgevoerd", "color: green;", "color: ;")
    console.info("→ Druk op 'Versturen'")
    console.groupEnd("%cetrieve bookwidget answers");
} catch (err) {
    console.error("Er is een probleem opgetreden bij het uitvoeren van het script.");
    console.error("Probeer het later nog eens opnieuw, error:")
    console.error(err.message);
    console.groupEnd("%cRetrieve bookwidget answers");
}
