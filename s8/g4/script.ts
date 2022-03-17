interface smartphone {
    carica: number;
    numeroChiamate: number;
    chiamata(minuti: number): void;
    numero404(): number;
    getNumeroChiamate(): number;
    azzeraChiamate(): void;
}

class FirstUser implements smartphone {
    carica: number;
    numeroChiamate: number = 0;

    constructor(carica: number) {
        this.carica = carica;
    }

    chiamata(minuti: number){
        this.carica -= 0.20 * minuti;
        this.numeroChiamate + - 1;
    }
    numero404(): number {
        return this.carica
    }
    getNumeroChiamate(): number {
        return this.numeroChiamate
    }
    azzeraChiamate(){
      this.numeroChiamate = 0;
    }
    ricarica(euro : number){
        this.carica += euro;
    }
}

let user = new FirstUser(10)
user.chiamata(20);
console.log(user)
