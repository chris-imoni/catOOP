function Cat (name, species, age, sex){
    this.name = name || 'Grendo';
    this.species = species || 'Ocelot';
    this.age = age || 0;
    this.sex = sex || "female";
    this.numOfLegs = 4;
    this.tailType = species === "Spanky" || species === "Bobtail"? "short" : "long";
    this.visbreast = 0;
}

Cat.prototype.meows = function(){
    var sound = this.age < 6? "pis-pis-pis" : "Meow! Meow!";
    return sound;
}

Cat.prototype.pregnant = function(weeks){
    if (this.sex === "female" && this.age >= 12){
        this.visbreast = weeks;
        return weeks;
    }
    return "too young to be pregnant";
}
