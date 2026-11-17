// ============================================================
// data_inventario.js — Inventario dei personaggi di Furiosa
// Usato da furiosa.html (sezione Inventario).
// ------------------------------------------------------------
// SI AGGIORNA CON LE TRASCRIZIONI DELLE GIOCATE: a ogni sessione
// caricata, aggiungere ciò che è stato comprato, trovato o ricevuto,
// togliere (o segnare perso) ciò che è stato venduto, usato o dato
// via, e registrare il passaggio in «movimenti».
//
// Campi di un oggetto:
//   chi      "karl" | "rei" | "nikla" | "zoraya" | "gruppo"
//   nome     come lo chiamano al tavolo o nel libro
//   qta      quantità (default 1)
//   costo    valore di UN pezzo, con le sigle del listino
//            (es. "4 am", "24–36 bg", "50 bp"). Se il prezzo è stato
//            pagato in gioco, si scrive quello. null = senza prezzo.
//            Gli oggetti personali (quelli che i PG avevano già o che
//            hanno ricevuto in dono) restano a null: non hanno un valore.
//   cat      armi | vestiario | viaggio | scrittura | cibo | reperti | magia | ricordi | animali | altro
//   stato    "magico"   dono o oggetto con poteri: non in vendita, fuori dai totali
//            "reperto"  indizio o documento della storia: fuori dai totali
//            "prestito" lo usa chi lo porta ma è di qualcun altro
//            "perso"    non più in possesso: resta visibile per memoria
//   durata   per cibo e cose che si guastano
//   verificare  true se quantità, prezzo o possesso sono incerti
//   fonte    sessione e capitolo
//
// Il denaro sta in «denaro»: cifra con le sigle, o null se ignota.
// ============================================================

const FURIOSA_INVENTARIO = {

  aggiornato: "Sessione 12 (10 novembre 2026) · notte fra il 17 e il 18 del Terzo mese",

  intro: "Ciò che ciascuno porta con sé e quanto vale, ai prezzi del listino di Kaelvaran. «Giornate» = la paga di un bracciante (1 bronzo grande). Contano solo ciò che è stato comprato o venduto in gioco e il denaro: gli oggetti personali, i doni di Furiosa, i reperti e le cose avute in prestito non hanno un prezzo e non entrano nei totali.",

  portatori: [
    { id: "karl",   nome: "Karl" },
    { id: "rei",    nome: "Rei" },
    { id: "nikla",  nome: "Nikla" },
    { id: "zoraya", nome: "Zoraya" },
    { id: "gruppo", nome: "Gruppo", colore: "#c9a84c", iniziali: "◈" }
  ],

  denaro: [
    { chi: "gruppo", nome: "Borsa comune (la porta Karl dal Cap 20)", cifra: "4 op + 2 ag + 11 am", verificare: true,
      note: "Sacchetto di Whilliam (4 ori piccoli e 2 argenti grandi) più i 16 argenti medi dei brocchi, meno le spese di Tresil note (spada 4 am, scudo, biblioteca, abiti). Mancano le compere della sera del 17.",
      fonte: "Sessioni 8–12 · Cap 17–20" },
    { chi: "karl",  nome: "Paga da guardia nella scarsella", cifra: null, verificare: true,
      note: "La paga dell'ultimo mese; ci ha pagato stanze e i conti di Horlen (4 bg 6 bm). Quanto resta non è stato detto.", fonte: "Cap 9, 13, 20" },
    { chi: "rei",   nome: "Monete proprie", cifra: null, verificare: true,
      note: "L'argento medio di Kaf e le poche monete con cui è arrivata a Tresil; ne ha lasciati 2 argenti piccoli sulla mensola di Gabbo.", fonte: "Cap 2, 19" },
    { chi: "nikla", nome: "Monete di Ferrath", cifra: null, verificare: true,
      note: "Qualche rame piccolo: il cambio con i bronzi non è fissato.", fonte: "Cap 4, 13" }
  ],

  oggetti: [
    // ── KARL ─────────────────────────────────────────────
    { chi: "karl", nome: "Spada media «di un mastro», con fodero e boccetta di miscela", costo: "4 am", cat: "armi", fonte: "Sessione 9 · Cap 18", note: "Marchio di gilda al tallone; pagata 4 argenti medi" },
    { chi: "karl", nome: "Scudo di frassino cerchiato di ferro", costo: "24–36 bg", cat: "armi", verificare: true, fonte: "Sessione 9 · Cap 18", note: "Da Mastro Balsan, «al prezzo giusto»: cifra non detta" },
    { chi: "karl", nome: "I guanti di Berta", qta: 2, costo: null, cat: "magia", stato: "magico", fonte: "Sessioni 3, 9, 11–12", note: "Pezzi dell'armatura di Whilliam: ognuno cura la parte che copre. Uno è plasmato in protezione per l'avambraccio" },
    { chi: "karl", nome: "Abiti usati (giubba e brache)", costo: "4 bm", cat: "vestiario", fonte: "Sessione 10 · Cap 19", note: "Pagati 4 bronzi medi; a listino valgono 10–20 bg" },
    { chi: "karl", nome: "Scarsella di cuoio", costo: null, cat: "viaggio", fonte: "Cap 11", note: "Alla cintura da sempre" },
    { chi: "karl", nome: "Chiave di casa Brenner", costo: null, cat: "ricordi", fonte: "Sessione 9", note: "«Tutto ciò che ho»" },
    { chi: "karl", nome: "Coltellino da intaglio", costo: null, cat: "ricordi", fonte: "Cap 11", note: "Con l'intaglio per Hetel, mai finito" },
    { chi: "karl", nome: "Fiaschetta", costo: null, cat: "viaggio", fonte: "Cap 9, 16", note: "Grappa o acquavite" },
    { chi: "karl", nome: "Catenella d'argento del nonno di Greta", costo: null, cat: "ricordi", fonte: "Sessione 12 · Cap 21", note: "Ciondolo ad ali con uno spazio vuoto al centro: «ci metteremo la nostra immagine»" },
    { chi: "karl", nome: "Scalpello e martelletto da incisione del nonno", costo: null, cat: "ricordi", fonte: "Sessione 12", note: "Il primo regalo di Thomas" },
    { chi: "karl", nome: "Fagotto azzurro: mantello e maschera di ceramica in pezzi", costo: null, cat: "reperti", stato: "reperto", fonte: "Sessioni 7–8 · Cap 16–17", note: "Resti della figura di Larasha. Tre o quattro pezzi, freddi su entrambi i lati" },
    { chi: "karl", nome: "Fagotto di salami e formaggi di Greta", costo: null, cat: "cibo", durata: "salami 1–2 mesi; formaggi 2–3 settimane una volta tagliati", fonte: "Sessione 12", note: "Un di più rispetto alle provviste del viaggio" },
    { chi: "karl", nome: "Coltellaccio di Fonte Verde", costo: null, cat: "armi", stato: "perso", fonte: "Cap 15–16", note: "Piantato in un ramo nel bosco di Larasha, non recuperato" },

    // ── REI ──────────────────────────────────────────────
    { chi: "rei", nome: "Lame corte", qta: 2, costo: null, cat: "armi", fonte: "Cap 2", note: "Tipo e prezzo da precisare" },
    { chi: "rei", nome: "Sai", qta: 2, costo: null, cat: "armi", fonte: "Cap 2" },
    { chi: "rei", nome: "Catena con pugnale e sfera", costo: null, cat: "magia", stato: "magico", fonte: "Cap 2, 12, 21", note: "Dono di Furiosa: beve il sangue. La sfera è piena del nero delle creature dell'albero" },
    { chi: "rei", nome: "Cote", costo: null, cat: "armi", fonte: "Cap 2" },
    { chi: "rei", nome: "Lanterna", costo: null, cat: "viaggio", fonte: "Cap 16", note: "«La mia unica lanterna»" },
    { chi: "rei", nome: "Pagliericcio arrotolato", costo: null, cat: "viaggio", fonte: "Cap 18" },
    { chi: "rei", nome: "Otre", costo: null, cat: "viaggio", fonte: "Sessione 9", note: "Riempita di vino per Karl durante il cammino" },
    { chi: "rei", nome: "La mappa di Refistas", costo: null, cat: "viaggio", fonte: "Sessione 8 · Cap 17", note: "Vecchia di trent'anni, fino alla costa est. Unica: il valore è quello di una mappa regionale accurata" },

    // ── NIKLA ────────────────────────────────────────────
    { chi: "nikla", nome: "Borsa", costo: null, cat: "viaggio", fonte: "Cap 12", note: "Strappata a Fonte Verde: va controllato se è stata riparata o sostituita" },
    { chi: "nikla", nome: "Penna a serbatoio", costo: null, cat: "scrittura", fonte: "Cap 4", note: "Dal bottino dei briganti (era di Refistas)" },
    { chi: "nikla", nome: "Pennini", costo: null, cat: "scrittura", fonte: "Cap 12" },
    { chi: "nikla", nome: "Saccoccia di aghi d'osso e di metallo", costo: null, cat: "scrittura", fonte: "Cap 12" },
    { chi: "nikla", nome: "Coltellino da formaggio", costo: null, cat: "armi", fonte: "Cap 12" },
    { chi: "nikla", nome: "Pugnale", costo: null, cat: "armi", fonte: "Cap 4, 16" },
    { chi: "nikla", nome: "Gli appunti delle ricette d'inchiostro di Maeve", costo: null, cat: "scrittura", stato: "reperto", fonte: "Sessione 11 · Cap 20", note: "Dai sei libri indicati da Maeve, nei sotterranei delle Biblioteche della Croce" },
    { chi: "nikla", nome: "Il taccuino di Refistas", costo: null, cat: "reperti", stato: "reperto", fonte: "Cap 4", note: "Fibbia annerita; appunti sui frammenti e sull'«ossessione»" },
    { chi: "nikla", nome: "Le cinque lettere di Ados", costo: null, cat: "reperti", stato: "reperto", fonte: "Cap 4, 8", note: "Legate con lo spago" },
    { chi: "nikla", nome: "Frammento di marmo venato", costo: null, cat: "reperti", stato: "reperto", fonte: "Sessione 8 · Cap 17", note: "Dal colosso crollato: venature nere come radici, spirali e punte" },
    { chi: "nikla", nome: "Un dito e una mano umani", costo: null, cat: "reperti", stato: "reperto", fonte: "Sessione 3 · Cap 12", note: "Presi da uno dei tre uomini della Rosa Storta" },
    { chi: "nikla", nome: "Artiglio d'orso", costo: null, cat: "ricordi", fonte: "Cap 4", note: "Pagato un rame piccolo di Ferrath" },
    { chi: "nikla", nome: "Grande tela dipinta (circa 4 × 3 m)", costo: null, cat: "altro", fonte: "Sessione 11 · Cap 20", note: "Trovata nei sotterranei della biblioteca. Valore da stabilire" },
    { chi: "nikla", nome: "Calzoni da uomo", costo: null, cat: "vestiario", fonte: "Sessione 11 · Cap 20" },
    { chi: "nikla", nome: "Scarpe da città", costo: null, cat: "vestiario", fonte: "Sessione 11" },
    { chi: "nikla", nome: "La maglia di Karl", costo: null, cat: "vestiario", stato: "prestito", fonte: "Sessione 12", note: "Gliel'ha data Karl" },
    { chi: "nikla", nome: "Il telo di Horlen", costo: null, cat: "vestiario", stato: "prestito", fonte: "Sessione 11 · Cap 20", note: "In attesa di vestiti nuovi" },

    // ── ZORAYA ───────────────────────────────────────────
    { chi: "zoraya", nome: "Tunica di lana e velo semplice (usati)", costo: "3 bm", cat: "vestiario", fonte: "Sessione 10 · Cap 19", note: "Pagati 3 bronzi medi tirando sul prezzo; a listino valgono 8–15 bg" },
    { chi: "zoraya", nome: "Il velo verde", costo: null, cat: "vestiario", fonte: "Sessione 11 · Cap 20", note: "Lo porta Rei, a turbante, per coprire i capelli rossi" },
    { chi: "zoraya", nome: "Coltello da lancio", costo: null, cat: "armi", fonte: "Cap 8, 16" },

    // ── GRUPPO ───────────────────────────────────────────
    { chi: "gruppo", nome: "Equipaggiamento comprato la sera del 17: vestiti pesanti, una tenda per tutti, stivali, provviste", costo: null, cat: "viaggio", fonte: "Sessione 12", note: "Quantità e prezzi da riprendere dalla trascrizione; il resto si compra la mattina del 18" },
    { chi: "gruppo", nome: "I quattro cavalli di Whilliam", qta: 4, costo: "6–8 am", cat: "animali", stato: "perso", fonte: "Sessione 6 · Cap 15", note: "Schiacciati nel recinto della Tana del Lortone" },
    { chi: "gruppo", nome: "Due brocchi", qta: 2, costo: "8 am", cat: "animali", stato: "perso", fonte: "Sessione 8 · Cap 17", note: "Rivenduti a Tresil per 16 argenti medi" }
  ],

  // Passaggi di mano, in ordine di sessione (si aggiunge una riga per ogni
  // acquisto, vendita, dono o perdita trovati nella trascrizione)
  movimenti: [
    { quando: "Sessione 6",  chi: "gruppo", cosa: "Perdono i quattro cavalli di Whilliam", cifra: "", fonte: "Cap 15" },
    { quando: "Sessione 6",  chi: "nikla",  cosa: "Dà a Raffa i soldi per partire", cifra: "−2 am", fonte: "Cap 14" },
    { quando: "Sessione 8",  chi: "gruppo", cosa: "Comprano due brocchi e li rivendono a Tresil", cifra: "+16 am", fonte: "Cap 17" },
    { quando: "Sessione 8",  chi: "gruppo", cosa: "Ricevono il sacchetto di Whilliam (lo tiene Nikla)", cifra: "+4 op + 2 ag", fonte: "Cap 17" },
    { quando: "Sessione 9",  chi: "karl",   cosa: "Spada media dall'armaiolo (trattata da Rei)", cifra: "−4 am", fonte: "Cap 18" },
    { quando: "Sessione 9",  chi: "karl",   cosa: "Scudo da Mastro Balsan", cifra: "non detta", fonte: "Cap 18" },
    { quando: "Sessione 9",  chi: "karl",   cosa: "Il secondo guanto di Berta, da Whilliam", cifra: "", fonte: "Cap 18" },
    { quando: "Sessione 10", chi: "nikla",  cosa: "Lasciapassare delle Biblioteche della Croce", cifra: "−1 ap", fonte: "Cap 19" },
    { quando: "Sessione 10", chi: "karl",   cosa: "Abiti usati", cifra: "−4 bm", fonte: "Cap 19" },
    { quando: "Sessione 10", chi: "zoraya", cosa: "Tunica e velo usati", cifra: "−3 bm", fonte: "Cap 19" },
    { quando: "Sessione 10", chi: "rei",    cosa: "Lascia due argenti piccoli sulla mensola di Gabbo", cifra: "−2 ap", fonte: "Cap 19" },
    { quando: "Sessione 11", chi: "zoraya", cosa: "Presta il velo verde a Rei", cifra: "", fonte: "Cap 20" },
    { quando: "Sessione 11", chi: "nikla",  cosa: "Perde il vestito; esce dalla biblioteca con la tela e gli appunti; consegna la borsa del gruppo a Karl", cifra: "", fonte: "Cap 20" },
    { quando: "Sessione 11", chi: "karl",   cosa: "Paga i conti di Horlen con la sua paga", cifra: "−4 bg 6 bm", fonte: "Cap 20" },
    { quando: "Sessione 12", chi: "karl",   cosa: "Riceve la catenella del nonno di Greta, lo scalpello e il martelletto, un fagotto di cibo; dà la maglia a Nikla", cifra: "", fonte: "Cap 21" },
    { quando: "Sessione 12", chi: "gruppo", cosa: "Compere della sera: vestiti pesanti, una tenda, stivali, provviste", cifra: "da verificare", fonte: "Sessione 12" }
  ]
};
