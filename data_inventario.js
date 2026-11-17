// ============================================================
// data_inventario.js — Inventario dei personaggi di Furiosa
// Usato da furiosa.html (sezione Inventario).
// ------------------------------------------------------------
// SI AGGIORNA CON LE TRASCRIZIONI DELLE GIOCATE: a ogni sessione
// caricata, aggiungere ciò che è stato comprato, trovato o ricevuto,
// togliere (o segnare perso) ciò che è stato venduto, usato o dato
// via, e aggiornare i conti della borsa comune.
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
//   peso     chili di UN pezzo (per distribuire il carico sui cavalli)
//   durata   per cibo e cose che si guastano
//   verificare  true se quantità, prezzo o possesso sono incerti
//   fonte    sessione e capitolo
//
// Il denaro sta in «denaro»: cifra con le sigle, o null se ignota.
// ============================================================

const FURIOSA_INVENTARIO = {

  aggiornato: "Mattina del 18 del Terzo mese, acquisti per il viaggio fatti (Sessione 13 da confermare con la trascrizione)",

  intro: "Valori ai prezzi del listino di Kaelvaran. Hanno un prezzo solo le cose comprate in gioco: oggetti personali, doni di Furiosa e reperti no.",

  portatori: [
    { id: "karl", cavaliere: 85, limite: 120,   nome: "Karl" },
    { id: "rei", cavaliere: 61, limite: 120,    nome: "Rei" },
    { id: "nikla", cavaliere: 51, limite: 120,  nome: "Nikla" },
    { id: "zoraya", cavaliere: 60, limite: 120, nome: "Zoraya" },
    { id: "gruppo", nome: "Gruppo", colore: "#c9a84c", iniziali: "◈" },
    { id: "soma",   nome: "Cavallo da soma", colore: "#7f8f6a", iniziali: "S", limite: 110, notaCarico: "un cavallino robusto porta 100–110 kg al passo" }
  ],

  denaro: [
    { chi: "gruppo", nome: "Borsa comune (la tiene Karl)", cifra: "1 op + 7 ag + 3 am + 9 ap + 8 bm + 5 bp", verificare: true,
      note: "Per ora tutto il denaro del gruppo è qui, monete personali comprese: se lo divideranno nella giocata del 17 novembre 2026. Da verificare con la trascrizione.",
      fonte: "Sessioni 8–12 · Cap 17–20",
      conti: [
        { cosa: "Sacchetto di Whilliam", cifra: "+4 op + 2 ag", fonte: "Cap 17" },
        { cosa: "Due brocchi rivenduti", cifra: "+16 am", fonte: "Cap 17" },
        { cosa: "Spese di Tresil (spada, biblioteca, abiti; lo scudo è stato annullato)", cifra: "−4 am 7 ap", fonte: "Cap 18–20" },
        { cosa: "Acquisti per il viaggio, cavalli e due pozioni compresi", cifra: "−2 op 5 ag 7 am 3 ap 9 bg 1 bm 5 bp", fonte: "17–18 Terzo mese" },
        { cosa: "Monete personali di Karl, Rei e Nikla, messe nella borsa", cifra: "non contate", fonte: "decisione del 17/11" }
      ] },
  ],

  oggetti: [
    // ── KARL ─────────────────────────────────────────────
    { chi: "karl", nome: "Spada media «di un mastro», con fodero e boccetta di miscela", costo: "4 am", cat: "armi", fonte: "Sessione 9 · Cap 18", note: "Marchio di gilda al tallone; pagata 4 argenti medi" },
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
    { chi: "rei", nome: "Lame corte", qta: 2, costo: null, cat: "armi", fonte: "Cap 2" },
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
    { chi: "gruppo", nome: "I quattro cavalli di Whilliam", qta: 4, costo: "6–8 am", cat: "animali", stato: "perso", fonte: "Sessione 6 · Cap 15", note: "Schiacciati nel recinto della Tana del Lortone" },
    { chi: "gruppo", nome: "Due brocchi", qta: 2, costo: "8 am", cat: "animali", stato: "perso", fonte: "Sessione 8 · Cap 17", note: "Rivenduti a Tresil per 16 argenti medi" },
    // ── ACQUISTI PER IL VIAGGIO VERSO EST (sera del 17 e mattina del 18) ──
    {"chi": "karl", "nome": "Cavallo da sella comune", "qta": 1, "costo": "7 am", "peso": 0, "cat": "animali", "fonte": "Acquisti del 17–18 · Terzo mese"},
    {"chi": "karl", "nome": "Sella comune", "qta": 1, "costo": "40 bg", "peso": 10, "cat": "animali", "fonte": "Acquisti del 17–18 · Terzo mese"},
    {"chi": "karl", "nome": "Briglia, morso e redini", "qta": 1, "costo": "15 bg", "peso": 1.5, "cat": "animali", "fonte": "Acquisti del 17–18 · Terzo mese"},
    {"chi": "karl", "nome": "Bisacce da sella (paio)", "qta": 1, "costo": "6 bg", "peso": 2, "cat": "viaggio", "fonte": "Acquisti del 17–18 · Terzo mese", "note": "circa 20 kg di capienza"},
    {"chi": "karl", "nome": "Coperta da cavallo", "qta": 1, "costo": "6 bg", "peso": 2.5, "cat": "animali", "fonte": "Acquisti del 17–18 · Terzo mese", "note": "per le notti in quota"},
    {"chi": "karl", "nome": "Abiti invernali", "qta": 1, "costo": "80 bg", "peso": 3, "cat": "vestiario", "fonte": "Acquisti del 17–18 · Terzo mese"},
    {"chi": "karl", "nome": "Abiti leggeri (camicia di lino e brache)", "qta": 1, "costo": "20 bg", "peso": 1, "cat": "vestiario", "fonte": "Acquisti del 17–18 · Terzo mese"},
    {"chi": "karl", "nome": "Mantello di lana impermeabilizzato", "qta": 1, "costo": "55 bg", "peso": 2.5, "cat": "vestiario", "fonte": "Acquisti del 17–18 · Terzo mese", "note": "lana ingrassata e cerata"},
    {"chi": "karl", "nome": "Stivali da cavallo", "qta": 1, "costo": "18 bg", "peso": 1.5, "cat": "vestiario", "fonte": "Acquisti del 17–18 · Terzo mese"},
    {"chi": "karl", "nome": "Guanti", "qta": 1, "costo": "3 bg", "peso": 0.2, "cat": "vestiario", "fonte": "Acquisti del 17–18 · Terzo mese"},
    {"chi": "karl", "nome": "Berretto di lana", "qta": 1, "costo": "4 bg", "peso": 0.15, "cat": "vestiario", "fonte": "Acquisti del 17–18 · Terzo mese"},
    {"chi": "karl", "nome": "Calze di lana (paio)", "qta": 2, "costo": "1,5 bg", "peso": 0.15, "cat": "vestiario", "fonte": "Acquisti del 17–18 · Terzo mese"},
    {"chi": "karl", "nome": "Acciarino e pietra focaia", "qta": 1, "costo": "1,5 bg", "peso": 0.1, "cat": "viaggio", "durata": "l'esca va tenuta asciutta", "fonte": "Acquisti del 17–18 · Terzo mese"},
    {"chi": "karl", "nome": "Otre d'acqua (2 l)", "qta": 1, "costo": "4 bg", "peso": 2.3, "cat": "viaggio", "durata": "l'acqua prende sapore di cuoio in 2–3 giorni", "fonte": "Acquisti del 17–18 · Terzo mese", "note": "peso da piena"},
    {"chi": "karl", "nome": "Gavetta di stagno con cucchiaio", "qta": 1, "costo": "2 bg", "peso": 0.4, "cat": "viaggio", "fonte": "Acquisti del 17–18 · Terzo mese"},
    {"chi": "karl", "nome": "Sapone e kit da igiene (pettine, telo)", "qta": 1, "costo": "4 bg", "peso": 0.5, "cat": "cura", "fonte": "Acquisti del 17–18 · Terzo mese"},
    {"chi": "karl", "nome": "Cote per armi", "qta": 1, "costo": "50 bp", "peso": 0.3, "cat": "armi", "fonte": "Acquisti del 17–18 · Terzo mese", "note": "Rei ha la sua"},
    {"chi": "karl", "nome": "Olio per le lame (fiaschetta)", "qta": 1, "costo": "1 bg", "peso": 0.3, "cat": "armi", "fonte": "Acquisti del 17–18 · Terzo mese"},
    {"chi": "karl", "nome": "Sacca da viaggio", "qta": 1, "costo": "8 bg", "peso": 1, "cat": "viaggio", "fonte": "Acquisti del 17–18 · Terzo mese", "note": "nuove per tutti"},
    {"chi": "rei", "nome": "Cavallo da sella comune", "qta": 1, "costo": "7 am", "peso": 0, "cat": "animali", "fonte": "Acquisti del 17–18 · Terzo mese"},
    {"chi": "rei", "nome": "Sella comune", "qta": 1, "costo": "40 bg", "peso": 10, "cat": "animali", "fonte": "Acquisti del 17–18 · Terzo mese"},
    {"chi": "rei", "nome": "Briglia, morso e redini", "qta": 1, "costo": "15 bg", "peso": 1.5, "cat": "animali", "fonte": "Acquisti del 17–18 · Terzo mese"},
    {"chi": "rei", "nome": "Bisacce da sella (paio)", "qta": 1, "costo": "6 bg", "peso": 2, "cat": "viaggio", "fonte": "Acquisti del 17–18 · Terzo mese", "note": "circa 20 kg di capienza"},
    {"chi": "rei", "nome": "Coperta da cavallo", "qta": 1, "costo": "6 bg", "peso": 2.5, "cat": "animali", "fonte": "Acquisti del 17–18 · Terzo mese", "note": "per le notti in quota"},
    {"chi": "rei", "nome": "Abiti invernali", "qta": 1, "costo": "80 bg", "peso": 3, "cat": "vestiario", "fonte": "Acquisti del 17–18 · Terzo mese"},
    {"chi": "rei", "nome": "Abiti leggeri (camicia di lino e brache)", "qta": 1, "costo": "20 bg", "peso": 1, "cat": "vestiario", "fonte": "Acquisti del 17–18 · Terzo mese"},
    {"chi": "rei", "nome": "Mantello di lana impermeabilizzato", "qta": 1, "costo": "55 bg", "peso": 2.5, "cat": "vestiario", "fonte": "Acquisti del 17–18 · Terzo mese", "note": "lana ingrassata e cerata"},
    {"chi": "rei", "nome": "Stivali da cavallo", "qta": 1, "costo": "18 bg", "peso": 1.5, "cat": "vestiario", "fonte": "Acquisti del 17–18 · Terzo mese"},
    {"chi": "rei", "nome": "Stivali di ricambio", "qta": 1, "costo": "18 bg", "peso": 1.5, "cat": "vestiario", "fonte": "Acquisti del 17–18 · Terzo mese"},
    {"chi": "rei", "nome": "Guanti", "qta": 1, "costo": "3 bg", "peso": 0.2, "cat": "vestiario", "fonte": "Acquisti del 17–18 · Terzo mese"},
    {"chi": "rei", "nome": "Berretto di lana", "qta": 1, "costo": "4 bg", "peso": 0.15, "cat": "vestiario", "fonte": "Acquisti del 17–18 · Terzo mese"},
    {"chi": "rei", "nome": "Calze di lana (paio)", "qta": 2, "costo": "1,5 bg", "peso": 0.15, "cat": "vestiario", "fonte": "Acquisti del 17–18 · Terzo mese"},
    {"chi": "rei", "nome": "Sego per il cuoio", "qta": 1, "costo": "50 bp", "peso": 0.3, "cat": "vestiario", "fonte": "Acquisti del 17–18 · Terzo mese"},
    {"chi": "rei", "nome": "Giaciglio arrotolato", "qta": 1, "costo": "2 bg", "peso": 2, "cat": "viaggio", "fonte": "Acquisti del 17–18 · Terzo mese"},
    {"chi": "rei", "nome": "Coperta di lana pesante", "qta": 1, "costo": "18 bg", "peso": 2.5, "cat": "viaggio", "fonte": "Acquisti del 17–18 · Terzo mese"},
    {"chi": "rei", "nome": "Acciarino e pietra focaia", "qta": 1, "costo": "1,5 bg", "peso": 0.1, "cat": "viaggio", "durata": "l'esca va tenuta asciutta", "fonte": "Acquisti del 17–18 · Terzo mese"},
    {"chi": "rei", "nome": "Lanterna", "qta": 1, "costo": "4 bg", "peso": 1, "cat": "viaggio", "fonte": "Acquisti del 17–18 · Terzo mese", "note": "la seconda è quella di Rei"},
    {"chi": "rei", "nome": "Ampolle d'olio per lanterna (¼ di litro)", "qta": 4, "costo": "1,25 bg", "peso": 0.4, "cat": "viaggio", "durata": "circa 4 ore l'una", "fonte": "Acquisti del 17–18 · Terzo mese"},
    {"chi": "rei", "nome": "Otre d'acqua (2 l)", "qta": 1, "costo": "4 bg", "peso": 2.3, "cat": "viaggio", "durata": "l'acqua prende sapore di cuoio in 2–3 giorni", "fonte": "Acquisti del 17–18 · Terzo mese", "note": "peso da piena"},
    {"chi": "rei", "nome": "Gavetta di stagno con cucchiaio", "qta": 1, "costo": "2 bg", "peso": 0.4, "cat": "viaggio", "fonte": "Acquisti del 17–18 · Terzo mese"},
    {"chi": "rei", "nome": "Lenze e ami", "qta": 1, "costo": "2 bg", "peso": 0.2, "cat": "viaggio", "fonte": "Acquisti del 17–18 · Terzo mese"},
    {"chi": "rei", "nome": "Lacci per selvaggina", "qta": 1, "costo": "1 bg", "peso": 0.3, "cat": "viaggio", "fonte": "Acquisti del 17–18 · Terzo mese"},
    {"chi": "rei", "nome": "Mappa locale della strada della Torre", "qta": 1, "costo": "4 bg", "peso": 0.05, "cat": "viaggio", "fonte": "Acquisti del 17–18 · Terzo mese"},
    {"chi": "rei", "nome": "Astuccio di cuoio cerato per le mappe", "qta": 1, "costo": "3 bg", "peso": 0.3, "cat": "viaggio", "fonte": "Acquisti del 17–18 · Terzo mese"},
    {"chi": "rei", "nome": "Bussola", "qta": 1, "costo": "90 bg", "peso": 0.3, "cat": "viaggio", "fonte": "Acquisti del 17–18 · Terzo mese"},
    {"chi": "rei", "nome": "Cannocchiale", "qta": 1, "costo": "3,5 am", "peso": 0.6, "cat": "viaggio", "fonte": "Acquisti del 17–18 · Terzo mese"},
    {"chi": "rei", "nome": "Chiodi da roccia", "qta": 12, "costo": "50 bp", "peso": 0.1, "cat": "viaggio", "fonte": "Acquisti del 17–18 · Terzo mese"},
    {"chi": "rei", "nome": "Martello da roccia", "qta": 1, "costo": "8 bg", "peso": 0.7, "cat": "viaggio", "fonte": "Acquisti del 17–18 · Terzo mese"},
    {"chi": "karl", "nome": "Pozione di guarigione", "qta": 1, "costo": "1 op", "peso": 0.25, "cat": "cura", "durata": "1–2 anni, se tappata e al buio", "fonte": "Acquisti del 17–18 · Terzo mese", "note": "rara: almeno un oro piccolo (prezzo deciso dall'autrice). Una la porta Karl, l'altra Zoraya"},
    {"chi": "rei", "nome": "Sapone e kit da igiene (pettine, telo)", "qta": 1, "costo": "4 bg", "peso": 0.5, "cat": "cura", "fonte": "Acquisti del 17–18 · Terzo mese"},
    {"chi": "rei", "nome": "Olio per le lame (fiaschetta)", "qta": 1, "costo": "1 bg", "peso": 0.3, "cat": "armi", "fonte": "Acquisti del 17–18 · Terzo mese"},
    {"chi": "rei", "nome": "Sacca da viaggio", "qta": 1, "costo": "8 bg", "peso": 1, "cat": "viaggio", "fonte": "Acquisti del 17–18 · Terzo mese", "note": "nuove per tutti"},
    {"chi": "rei", "nome": "Pane fresco (pagnotta)", "qta": 4, "costo": "25 bp", "peso": 0.5, "cat": "cibo", "durata": "2–3 giorni", "fonte": "Acquisti del 17–18 · Terzo mese"},
    {"chi": "rei", "nome": "Carne salata (kg)", "qta": 2, "costo": "2 bg", "peso": 1, "cat": "cibo", "durata": "2–4 mesi", "fonte": "Acquisti del 17–18 · Terzo mese"},
    {"chi": "rei", "nome": "Orzo e farina (kg)", "qta": 2, "costo": "35 bp", "peso": 1, "cat": "cibo", "durata": "2–3 mesi all'asciutto", "fonte": "Acquisti del 17–18 · Terzo mese"},
    {"chi": "nikla", "nome": "Cavallo da sella comune", "qta": 1, "costo": "7 am", "peso": 0, "cat": "animali", "fonte": "Acquisti del 17–18 · Terzo mese"},
    {"chi": "nikla", "nome": "Sella comune", "qta": 1, "costo": "40 bg", "peso": 10, "cat": "animali", "fonte": "Acquisti del 17–18 · Terzo mese"},
    {"chi": "nikla", "nome": "Briglia, morso e redini", "qta": 1, "costo": "15 bg", "peso": 1.5, "cat": "animali", "fonte": "Acquisti del 17–18 · Terzo mese"},
    {"chi": "nikla", "nome": "Bisacce da sella (paio)", "qta": 1, "costo": "6 bg", "peso": 2, "cat": "viaggio", "fonte": "Acquisti del 17–18 · Terzo mese", "note": "circa 20 kg di capienza"},
    {"chi": "nikla", "nome": "Coperta da cavallo", "qta": 1, "costo": "6 bg", "peso": 2.5, "cat": "animali", "fonte": "Acquisti del 17–18 · Terzo mese", "note": "per le notti in quota"},
    {"chi": "nikla", "nome": "Abiti invernali", "qta": 1, "costo": "80 bg", "peso": 3, "cat": "vestiario", "fonte": "Acquisti del 17–18 · Terzo mese"},
    {"chi": "nikla", "nome": "Abiti leggeri (camicia di lino e brache)", "qta": 1, "costo": "20 bg", "peso": 1, "cat": "vestiario", "fonte": "Acquisti del 17–18 · Terzo mese"},
    {"chi": "nikla", "nome": "Mantello di lana impermeabilizzato", "qta": 1, "costo": "55 bg", "peso": 2.5, "cat": "vestiario", "fonte": "Acquisti del 17–18 · Terzo mese", "note": "lana ingrassata e cerata"},
    {"chi": "nikla", "nome": "Stivali da cavallo", "qta": 1, "costo": "18 bg", "peso": 1.5, "cat": "vestiario", "fonte": "Acquisti del 17–18 · Terzo mese"},
    {"chi": "nikla", "nome": "Stivali di ricambio", "qta": 1, "costo": "18 bg", "peso": 1.5, "cat": "vestiario", "fonte": "Acquisti del 17–18 · Terzo mese"},
    {"chi": "nikla", "nome": "Guanti", "qta": 1, "costo": "3 bg", "peso": 0.2, "cat": "vestiario", "fonte": "Acquisti del 17–18 · Terzo mese"},
    {"chi": "nikla", "nome": "Berretto di lana", "qta": 1, "costo": "4 bg", "peso": 0.15, "cat": "vestiario", "fonte": "Acquisti del 17–18 · Terzo mese"},
    {"chi": "nikla", "nome": "Calze di lana (paio)", "qta": 2, "costo": "1,5 bg", "peso": 0.15, "cat": "vestiario", "fonte": "Acquisti del 17–18 · Terzo mese"},
    {"chi": "nikla", "nome": "Giaciglio arrotolato", "qta": 1, "costo": "2 bg", "peso": 2, "cat": "viaggio", "fonte": "Acquisti del 17–18 · Terzo mese"},
    {"chi": "nikla", "nome": "Coperta di lana pesante", "qta": 1, "costo": "18 bg", "peso": 2.5, "cat": "viaggio", "fonte": "Acquisti del 17–18 · Terzo mese"},
    {"chi": "nikla", "nome": "Acciarino e pietra focaia", "qta": 1, "costo": "1,5 bg", "peso": 0.1, "cat": "viaggio", "durata": "l'esca va tenuta asciutta", "fonte": "Acquisti del 17–18 · Terzo mese"},
    {"chi": "nikla", "nome": "Otre d'acqua (2 l)", "qta": 1, "costo": "4 bg", "peso": 2.3, "cat": "viaggio", "durata": "l'acqua prende sapore di cuoio in 2–3 giorni", "fonte": "Acquisti del 17–18 · Terzo mese", "note": "peso da piena"},
    {"chi": "nikla", "nome": "Gavetta di stagno con cucchiaio", "qta": 1, "costo": "2 bg", "peso": 0.4, "cat": "viaggio", "fonte": "Acquisti del 17–18 · Terzo mese"},
    {"chi": "nikla", "nome": "Copia della mappa di Refistas", "qta": 1, "costo": "10 bg", "peso": 0.05, "cat": "viaggio", "fonte": "Acquisti del 17–18 · Terzo mese", "note": "fatta da un copista: l'originale resta al sicuro"},
    {"chi": "nikla", "nome": "Astuccio di cuoio cerato per le mappe", "qta": 1, "costo": "3 bg", "peso": 0.3, "cat": "viaggio", "fonte": "Acquisti del 17–18 · Terzo mese"},
    {"chi": "nikla", "nome": "Gesso e carbone", "qta": 1, "costo": "1 bg", "peso": 0.2, "cat": "viaggio", "fonte": "Acquisti del 17–18 · Terzo mese"},
    {"chi": "nikla", "nome": "Sapone e kit da igiene (pettine, telo)", "qta": 1, "costo": "4 bg", "peso": 0.5, "cat": "cura", "fonte": "Acquisti del 17–18 · Terzo mese"},
    {"chi": "nikla", "nome": "Kit da cucito e pezze", "qta": 1, "costo": "14 bg", "peso": 0.6, "cat": "viaggio", "fonte": "Acquisti del 17–18 · Terzo mese"},
    {"chi": "nikla", "nome": "Sacca da viaggio", "qta": 1, "costo": "8 bg", "peso": 1, "cat": "viaggio", "fonte": "Acquisti del 17–18 · Terzo mese", "note": "nuove per tutti"},
    {"chi": "nikla", "nome": "Inchiostro (boccetta di vetro e inchiostro)", "qta": 10, "costo": "2 bg", "peso": 0.15, "cat": "scrittura", "durata": "mesi; se gela il vetro si spacca", "fonte": "Acquisti del 17–18 · Terzo mese"},
    {"chi": "nikla", "nome": "Pergamena (foglio)", "qta": 5, "costo": "1,5 bg", "peso": 0.01, "cat": "scrittura", "fonte": "Acquisti del 17–18 · Terzo mese"},
    {"chi": "nikla", "nome": "Gallette (kg)", "qta": 8, "costo": "40 bp", "peso": 1, "cat": "cibo", "durata": "3–6 mesi all'asciutto", "fonte": "Acquisti del 17–18 · Terzo mese"},
    {"chi": "nikla", "nome": "Carne salata (kg)", "qta": 2, "costo": "2 bg", "peso": 1, "cat": "cibo", "durata": "2–4 mesi", "fonte": "Acquisti del 17–18 · Terzo mese"},
    {"chi": "soma", "nome": "Legumi secchi (kg)", "qta": 4, "costo": "30 bp", "peso": 1, "cat": "cibo", "durata": "un anno", "fonte": "Acquisti del 17–18 · Terzo mese"},
    {"chi": "soma", "nome": "Orzo e farina (kg)", "qta": 3, "costo": "35 bp", "peso": 1, "cat": "cibo", "durata": "2–3 mesi all'asciutto", "fonte": "Acquisti del 17–18 · Terzo mese"},
    {"chi": "nikla", "nome": "Mele secche e noci (kg)", "qta": 2, "costo": "1,5 bg", "peso": 1, "cat": "cibo", "durata": "3–6 mesi", "fonte": "Acquisti del 17–18 · Terzo mese"},
    {"chi": "nikla", "nome": "Miele (½ l)", "qta": 1, "costo": "75 bp", "peso": 0.8, "cat": "cibo", "durata": "non scade", "fonte": "Acquisti del 17–18 · Terzo mese"},
    {"chi": "zoraya", "nome": "Cavallo da sella comune", "qta": 1, "costo": "7 am", "peso": 0, "cat": "animali", "fonte": "Acquisti del 17–18 · Terzo mese"},
    {"chi": "zoraya", "nome": "Sella comune", "qta": 1, "costo": "40 bg", "peso": 10, "cat": "animali", "fonte": "Acquisti del 17–18 · Terzo mese"},
    {"chi": "zoraya", "nome": "Briglia, morso e redini", "qta": 1, "costo": "15 bg", "peso": 1.5, "cat": "animali", "fonte": "Acquisti del 17–18 · Terzo mese"},
    {"chi": "zoraya", "nome": "Bisacce da sella (paio)", "qta": 1, "costo": "6 bg", "peso": 2, "cat": "viaggio", "fonte": "Acquisti del 17–18 · Terzo mese", "note": "circa 20 kg di capienza"},
    {"chi": "zoraya", "nome": "Coperta da cavallo", "qta": 1, "costo": "6 bg", "peso": 2.5, "cat": "animali", "fonte": "Acquisti del 17–18 · Terzo mese", "note": "per le notti in quota"},
    {"chi": "zoraya", "nome": "Abiti invernali", "qta": 1, "costo": "80 bg", "peso": 3, "cat": "vestiario", "fonte": "Acquisti del 17–18 · Terzo mese"},
    {"chi": "zoraya", "nome": "Abiti leggeri (camicia di lino e brache)", "qta": 1, "costo": "20 bg", "peso": 1, "cat": "vestiario", "fonte": "Acquisti del 17–18 · Terzo mese"},
    {"chi": "zoraya", "nome": "Mantello di lana impermeabilizzato", "qta": 1, "costo": "55 bg", "peso": 2.5, "cat": "vestiario", "fonte": "Acquisti del 17–18 · Terzo mese", "note": "lana ingrassata e cerata"},
    {"chi": "zoraya", "nome": "Stivali da cavallo", "qta": 1, "costo": "18 bg", "peso": 1.5, "cat": "vestiario", "fonte": "Acquisti del 17–18 · Terzo mese"},
    {"chi": "zoraya", "nome": "Stivali di ricambio", "qta": 1, "costo": "18 bg", "peso": 1.5, "cat": "vestiario", "fonte": "Acquisti del 17–18 · Terzo mese"},
    {"chi": "zoraya", "nome": "Guanti", "qta": 1, "costo": "3 bg", "peso": 0.2, "cat": "vestiario", "fonte": "Acquisti del 17–18 · Terzo mese"},
    {"chi": "zoraya", "nome": "Berretto di lana", "qta": 1, "costo": "4 bg", "peso": 0.15, "cat": "vestiario", "fonte": "Acquisti del 17–18 · Terzo mese"},
    {"chi": "zoraya", "nome": "Calze di lana (paio)", "qta": 2, "costo": "1,5 bg", "peso": 0.15, "cat": "vestiario", "fonte": "Acquisti del 17–18 · Terzo mese"},
    {"chi": "zoraya", "nome": "Giaciglio arrotolato", "qta": 1, "costo": "2 bg", "peso": 2, "cat": "viaggio", "fonte": "Acquisti del 17–18 · Terzo mese"},
    {"chi": "zoraya", "nome": "Coperta di lana pesante", "qta": 1, "costo": "18 bg", "peso": 2.5, "cat": "viaggio", "fonte": "Acquisti del 17–18 · Terzo mese"},
    {"chi": "zoraya", "nome": "Acciarino e pietra focaia", "qta": 1, "costo": "1,5 bg", "peso": 0.1, "cat": "viaggio", "durata": "l'esca va tenuta asciutta", "fonte": "Acquisti del 17–18 · Terzo mese"},
    {"chi": "zoraya", "nome": "Torce", "qta": 6, "costo": "25 bp", "peso": 0.5, "cat": "viaggio", "durata": "circa un'ora; umide non si accendono", "fonte": "Acquisti del 17–18 · Terzo mese"},
    {"chi": "zoraya", "nome": "Otre d'acqua (2 l)", "qta": 1, "costo": "4 bg", "peso": 2.3, "cat": "viaggio", "durata": "l'acqua prende sapore di cuoio in 2–3 giorni", "fonte": "Acquisti del 17–18 · Terzo mese", "note": "peso da piena"},
    {"chi": "zoraya", "nome": "Gavetta di stagno con cucchiaio", "qta": 1, "costo": "2 bg", "peso": 0.4, "cat": "viaggio", "fonte": "Acquisti del 17–18 · Terzo mese"},
    {"chi": "zoraya", "nome": "Corda di seta (30 m)", "qta": 1, "costo": "6 am", "peso": 1.5, "cat": "viaggio", "fonte": "Acquisti del 17–18 · Terzo mese", "note": "una di canapa costerebbe ~12 bg ma peserebbe ~4,5 kg"},
    {"chi": "zoraya", "nome": "Rampino", "qta": 1, "costo": "9 bg", "peso": 1.5, "cat": "viaggio", "fonte": "Acquisti del 17–18 · Terzo mese"},
    {"chi": "zoraya", "nome": "Pozione di guarigione", "qta": 1, "costo": "1 op", "peso": 0.25, "cat": "cura", "durata": "1–2 anni, se tappata e al buio", "fonte": "Acquisti del 17–18 · Terzo mese", "note": "rara: almeno un oro piccolo (prezzo deciso dall'autrice). Una la porta Karl, l'altra Zoraya"},
    {"chi": "zoraya", "nome": "Kit di primo soccorso (bende, erbe, unguenti, acquavite, ago)", "qta": 1, "costo": "21 bg", "peso": 1.5, "cat": "cura", "durata": "erbe 6 mesi; unguenti 1–2 mesi", "fonte": "Acquisti del 17–18 · Terzo mese"},
    {"chi": "zoraya", "nome": "Antitossina (dose)", "qta": 4, "costo": "10 bg", "peso": 0.1, "cat": "cura", "durata": "un anno", "fonte": "Acquisti del 17–18 · Terzo mese", "note": "prezzo stimato"},
    {"chi": "zoraya", "nome": "Sapone e kit da igiene (pettine, telo)", "qta": 1, "costo": "4 bg", "peso": 0.5, "cat": "cura", "fonte": "Acquisti del 17–18 · Terzo mese"},
    {"chi": "zoraya", "nome": "Cote per armi", "qta": 1, "costo": "50 bp", "peso": 0.3, "cat": "armi", "fonte": "Acquisti del 17–18 · Terzo mese", "note": "Rei ha la sua"},
    {"chi": "zoraya", "nome": "Sacca da viaggio", "qta": 1, "costo": "8 bg", "peso": 1, "cat": "viaggio", "fonte": "Acquisti del 17–18 · Terzo mese", "note": "nuove per tutti"},
    {"chi": "zoraya", "nome": "Pane fresco (pagnotta)", "qta": 4, "costo": "25 bp", "peso": 0.5, "cat": "cibo", "durata": "2–3 giorni", "fonte": "Acquisti del 17–18 · Terzo mese"},
    {"chi": "zoraya", "nome": "Carne salata (kg)", "qta": 2, "costo": "2 bg", "peso": 1, "cat": "cibo", "durata": "2–4 mesi", "fonte": "Acquisti del 17–18 · Terzo mese"},
    {"chi": "zoraya", "nome": "Pesce secco (kg)", "qta": 2, "costo": "1 bg", "peso": 1, "cat": "cibo", "durata": "3–6 mesi", "fonte": "Acquisti del 17–18 · Terzo mese"},
    {"chi": "zoraya", "nome": "Sale (kg)", "qta": 1, "costo": "25 bp", "peso": 1, "cat": "cibo", "durata": "non scade", "fonte": "Acquisti del 17–18 · Terzo mese"},
    {"chi": "soma", "nome": "Cavallo da soma (cavallino robusto)", "qta": 1, "costo": "1,5 am", "peso": 0, "cat": "animali", "fonte": "Acquisti del 17–18 · Terzo mese", "note": "Aggiunto da Claude: il carico non entra sui quattro cavalli da sella"},
    {"chi": "soma", "nome": "Briglia, morso e redini", "qta": 1, "costo": "15 bg", "peso": 1.5, "cat": "animali", "fonte": "Acquisti del 17–18 · Terzo mese"},
    {"chi": "soma", "nome": "Basto da soma con cinghie", "qta": 1, "costo": "18 bg", "peso": 8, "cat": "animali", "fonte": "Acquisti del 17–18 · Terzo mese"},
    {"chi": "soma", "nome": "Ceste da basto (paio)", "qta": 1, "costo": "8 bg", "peso": 4, "cat": "viaggio", "fonte": "Acquisti del 17–18 · Terzo mese"},
    {"chi": "soma", "nome": "Coperta da cavallo", "qta": 1, "costo": "6 bg", "peso": 2.5, "cat": "animali", "fonte": "Acquisti del 17–18 · Terzo mese", "note": "per le notti in quota"},
    {"chi": "soma", "nome": "Ferri e chiodi di ricambio, striglia", "qta": 1, "costo": "3 bg", "peso": 2, "cat": "animali", "fonte": "Acquisti del 17–18 · Terzo mese"},
    {"chi": "soma", "nome": "Stivali di ricambio", "qta": 1, "costo": "18 bg", "peso": 1.5, "cat": "vestiario", "fonte": "Acquisti del 17–18 · Terzo mese"},
    {"chi": "soma", "nome": "Tenda cerata ampia (per quattro)", "qta": 1, "costo": "1,8 am", "peso": 15, "cat": "viaggio", "fonte": "Acquisti del 17–18 · Terzo mese"},
    {"chi": "soma", "nome": "Telo cerato (3×3 m)", "qta": 1, "costo": "10 bg", "peso": 3, "cat": "viaggio", "fonte": "Acquisti del 17–18 · Terzo mese", "note": "per il carico e il terreno bagnato"},
    {"chi": "soma", "nome": "Giaciglio arrotolato", "qta": 1, "costo": "2 bg", "peso": 2, "cat": "viaggio", "fonte": "Acquisti del 17–18 · Terzo mese"},
    {"chi": "soma", "nome": "Coperta di lana pesante", "qta": 1, "costo": "18 bg", "peso": 2.5, "cat": "viaggio", "fonte": "Acquisti del 17–18 · Terzo mese"},
    {"chi": "soma", "nome": "Candele di sego", "qta": 10, "costo": "20 bp", "peso": 0.05, "cat": "viaggio", "durata": "4–6 ore l'una", "fonte": "Acquisti del 17–18 · Terzo mese"},
    {"chi": "soma", "nome": "Pentolino di ferro", "qta": 1, "costo": "8 bg", "peso": 1.5, "cat": "viaggio", "fonte": "Acquisti del 17–18 · Terzo mese"},
    {"chi": "soma", "nome": "Paiolo d'ottone", "qta": 1, "costo": "24 bg", "peso": 2.5, "cat": "viaggio", "fonte": "Acquisti del 17–18 · Terzo mese"},
    {"chi": "soma", "nome": "Trappole per animali", "qta": 2, "costo": "4,5 bg", "peso": 1.5, "cat": "viaggio", "fonte": "Acquisti del 17–18 · Terzo mese"},
    {"chi": "soma", "nome": "Gallette (kg)", "qta": 12, "costo": "40 bp", "peso": 1, "cat": "cibo", "durata": "3–6 mesi all'asciutto", "fonte": "Acquisti del 17–18 · Terzo mese"},
    {"chi": "soma", "nome": "Formaggio stagionato (forma da 4 kg)", "qta": 1, "costo": "4 bg", "peso": 4, "cat": "cibo", "durata": "1–2 mesi intera; 2–3 settimane tagliata", "fonte": "Acquisti del 17–18 · Terzo mese"},
    {"chi": "soma", "nome": "Ortaggi da serbo (cipolle, aglio, rape)", "qta": 1, "costo": "1 bg", "peso": 4, "cat": "cibo", "durata": "rape 1–2 settimane; cipolle e aglio 1–2 mesi", "fonte": "Acquisti del 17–18 · Terzo mese"},
    {"chi": "soma", "nome": "Olio da cucina (½ l)", "qta": 1, "costo": "50 bp", "peso": 0.5, "cat": "cibo", "durata": "mesi", "fonte": "Acquisti del 17–18 · Terzo mese"},
    {"chi": "soma", "nome": "Vino comune (4 l, in otre)", "qta": 1, "costo": "7,2 bg", "peso": 4.5, "cat": "cibo", "durata": "aperto, 7–10 giorni", "fonte": "Acquisti del 17–18 · Terzo mese", "note": "otre compreso"},
    {"chi": "gruppo", "nome": "Avena (sacco da 10 kg) — sul carro della carovana", "qta": 6, "costo": "1,5 bg", "peso": 10, "cat": "animali", "durata": "mesi all'asciutto; bagnata ammuffisce in 3–4 giorni", "fonte": "Acquisti del 17–18 · Terzo mese", "note": "Viaggia sul carro dei viveri della carovana fino alla Torre (accordo con Orsolo); dopo la Torre va sul cavallo da soma, alleggerito dal cibo consumato"}
  ]
};
