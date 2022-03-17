fetch('Abbigliamento.json')
    .then(response => response.json())
    .then(vestiti => {
        vestiti.forEach((item: Abbigliamento) => {
            
            let vestiti = new Abbigliamento(item.id, item.codprod, item.collezione, item.capo, item.modello, item.quantita, item.colore, item.prezzoivaesclusa, item.prezzoivainclusa, item.disponibile, item.saldo)

            console.log(vestiti)
        })
    })

class Abbigliamento {
    id: number
    codprod: number
    collezione: string
    capo: string
    modello: number
    quantita: number
    colore: string
    prezzoivaesclusa: number
    prezzoivainclusa: number
    disponibile: string
    saldo: number

    constructor(id: number, codprod: number, collezione: string, capo: string, modello: number, quantita: number, colore: string, prezzoivaesclusa: number, prezzoivainclusa: number, disponibile: string, saldo: number) {

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
    getsaldocapo(): number {
        return Math.floor(this.prezzoivainclusa * (this.saldo / 100))
    }

    getacquistocapo(): number {
        return Math.floor(this.prezzoivaesclusa - this.getsaldocapo())
    }
}

let kenzo= new Abbigliamento(6,1003, "autunno", "felpa",2522, 26,"blue",120,146.4,"magazzino",50)

console.log(kenzo)
console.log(kenzo.getsaldocapo())
console.log(kenzo.getacquistocapo())

let armani = new Abbigliamento(7,1200, "inverno","giacchetto", 1500, 30, "red",180, 216,"magazzino",50)

console.log(armani)
console.log(armani.getsaldocapo())
console.log(armani.getacquistocapo())

let supreme = new Abbigliamento(8, 800, "estate", "maglietta",1000, 70, "white" ,90, 108, "magazzino", 50 )

console.log(supreme)
console.log(supreme.getsaldocapo())
console.log(supreme.getacquistocapo())


