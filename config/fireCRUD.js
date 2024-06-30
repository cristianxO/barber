function create() {
    db .collection("citas").add({
        nombre: "cristian",
        apellido: "solarte"
    })
    .then((docRef) => {
        alert("Registro exitoso")
    })
    .catch((error) => {
        alert("Error al registrar")
    });
}

function read() {
    db.collection("citas").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            console.log(`${doc.data().nombre}`);
            console.log(`${doc.data().apellido}`);
        });
    });
}