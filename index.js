// < -- ---- Bismillah ---- -- >

// Ota-class😂

class NajotTalim {
  // Incapsulation (Ota calssga ko'rinmas(private) qiymat qo'shish)

  #nimadir = ["birnima1", "birnima2", "birnima3"];

  constructor(branch, rooms, optimizations, isBig, isCoworkingBig) {
    this.branch = branch;
    this.rooms = rooms;
    this.optimizations = optimizations;
    this.isBig = isBig;
    this.isCoworkingBig = isCoworkingBig;
  }

  // -------------------------------------------------------

  // Metod yaratib olish

  getFullInfo() {
    return `Name: ${this.name} 
       <br> Branch: ${this.branch} 
       <br> Rooms: ${this.rooms} 
       <br> Optimizations: ${this.optimizations} 
       <br> Is big: ${this.isBig} 
       <br> Is coworking big: ${this.isCoworkingBig}
    `;
  }

  // Getter

  getName() {
    return this.name;
  }

  // Private value ni olish
  
  getNimadir () {
    return this.#nimadir;
  }

  // Setter

  getName() {
    this.name = name;
  }

  // -------------------------------------------------------
};

// Yaratib olish

const chilonzor = new NajotTalim("chilonzor", "aLot", "advanced", "true", "true");
console.log(chilonzor);

// ----------------------------------------------------------

// Template literal bilan yozish

console.log(`Name: ${chilonzor.name}`);

// Tashqaridan qiymat qo'shish

// ...

// ----------------------------------------------------------

// 1-daraja meros olish (Bola-class😂)

class xadra extends NajotTalim {
  constructor(branch, optimizations, isBig, isCoworkingBig, countOfStudents) {
    super(branch, optimizations, isBig, isCoworkingBig);
    this.countOfStudents = countOfStudents;
  }
}

// Yasab olish

const xadra = new xadra("xadra", "notAdvanced", "false", "false", "less");
console.log(xadra);

// 2-daraja meros olish (Bola-class😂)

class chimboy extends NajotTalim {
  constructor(branch, optimizations, isBig, isCoworkingBig, countOfStudents, kitchen) {
    super(branch, rooms, optimizations, isBig, isCoworkingBig, countOfStudents);
    this.kitchen = kitchen;
  }
}

// Yasab olish

const chimboy = new chimboy("chimboy", "less", "notAdvanced", "false", "false", "false");
console.log(chimboy);

