fetch('Abbigliamento.json')
    .then(function (response) { return response.json(); })
    .then(function (vestiti) {
    vestiti.forEach(function (item) {
        var vestiti = new Abbigliamento(item.id, item.codprod, item.collezione, item.capo, item.modello, item.quantita, item.colore, item.prezzoivaesclusa, item.prezzoivainclusa, item.disponibile, item.saldo);
        console.log(vestiti);
    });
});
var Abbigliamento = /** @class */ (function () {
    function Abbigliamento(id, codprod, collezione, capo, modello, quantita, colore, prezzoivaesclusa, prezzoivainclusa, disponibile, saldo) {
        this.id = id;
        this.codprod = codprod;
        this.collezione = collezione;
        this.capo = capo;
        this.modello = modello;
        this.quantita = quantita;
        this.colore = colore;
        this.prezzoivaesclusa = prezzoivaesclusa;
        this.prezzoivainclusa = prezzoivainclusa;
        this.disponibile = disponibile;
        this.saldo = saldo;
    }
    Abbigliamento.prototype.getsaldocapo = function () {
        return Math.floor(this.prezzoivainclusa * (this.saldo / 100));
    };
    Abbigliamento.prototype.getacquistocapo = function () {
        return Math.floor(this.prezzoivaesclusa - this.getsaldocapo());
    };
    return Abbigliamento;
}());
var kenzo = new Abbigliamento(6, 1003, "autunno", "felpa", 2522, 26, "blue", 120, 146.4, "magazzino", 50);
console.log(kenzo);
console.log(kenzo.getsaldocapo());
console.log(kenzo.getacquistocapo());
var armani = new Abbigliamento(7, 1200, "inverno", "giacchetto", 1500, 30, "red", 180, 216, "magazzino", 50);
console.log(armani);
console.log(armani.getsaldocapo());
console.log(armani.getacquistocapo());
var supreme = new Abbigliamento(8, 800, "estate", "maglietta", 1000, 70, "white", 90, 108, "magazzino", 50);
console.log(supreme);
console.log(supreme.getsaldocapo());
console.log(supreme.getacquistocapo());
