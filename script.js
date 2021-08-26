console.clear();
console.group("%cBookwidgets hack", "font-size: 13px;", "color: aqua; font-size: 13px;");
try {
    let studentAccount = "Pieter-Jan Hufkens";
    let student = "Pieter-Jan Hufkens";
    console.info("- Wijzigen van %cstudent account", "color: grey;");
    document.getElementById("student_account").style.display = "block";
    document.getElementById("student_account").value = studentAccount;
    document.getElementById("student_account").disabled = false;
    console.info("- Wijzigen van %cstudent name", "color: grey;");
    document.getElementById("student_label").style.display = "block";
    document.getElementById("student").style.display = "block";
    document.getElementById("student").value = student;
    document.getElementById("student").disabled = false;
    console.info("Hack %csuccesvol %cuitgevoerd", "color: green;", "color: ;")
    console.info("→ Druk op 'Versturen'")
    console.groupEnd("%cBookwidgets hack");
} catch (err) {
    console.error("Error when executing bookwidgets hack");
    console.error("Try again later, error message:")
    console.error(err.message);
    console.groupEnd("%cBookwidgets hack");
}
