function whosPaying(names) {

    var length = names.length;
    var i = Math.floor(Math.random() * length);
    var pay = `${names[i]} is going to buy lunch today!`;

    //var pay = "Maruta is going to buy lunch today!";
    return pay;
    }
// input example: ["Andrew", "Salt", "Maruta", "Tiberius", "Biscuite"]
whosPaying(["Andrew", "Salt", "Maruta", "Tiberius", "Biscuite"])
