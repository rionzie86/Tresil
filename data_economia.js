// ============================================================
// data_economia.js — Sistema monetario di Tresil / Kaelvaran
// Condiviso tra tresil.html e torre.html
// ============================================================

const TRESIL_ECO = {

  valute: [
    { sigla: "bp", nome: "Bronzo piccolo",  valore: 1,          note: "Moneta base" },
    { sigla: "bm", nome: "Bronzo medio",    valore: 10,         note: "= 10 bp" },
    { sigla: "bg", nome: "Bronzo grande",   valore: 100,        note: "= 100 bp · Salario giornaliero contadino" },
    { sigla: "ap", nome: "Argento piccolo", valore: 1000,       note: "= 10 bg" },
    { sigla: "am", nome: "Argento medio",   valore: 10000,      note: "= 10 ap" },
    { sigla: "ag", nome: "Argento grande",  valore: 100000,     note: "= 10 am" },
    { sigla: "op", nome: "Oro piccolo",     valore: 1000000,    note: "= 10 ag" },
    { sigla: "om", nome: "Oro medio",       valore: 10000000,   note: "= 10 op" },
    { sigla: "og", nome: "Oro grande",      valore: 100000000,  note: "= 10 om" }
  ],

  salari: [
    { ruolo: "Contadino / bracciante",     giorno: "1 bg",    mese: "~25 bg",  note: "Base economica del mondo" },
    { ruolo: "Operaio (Tresil)",           giorno: "1–2 bg",  mese: "~40 bg",  note: "Lavori manuali in città" },
    { ruolo: "Artigiano",                  giorno: "5–10 bg", mese: "~2 ap",   note: "Fabbri, falegnami, vasai" },
    { ruolo: "Guardia / soldato",          giorno: "3–5 bg",  mese: "~1 ap",   note: "Milizia o guardia privata" },
    { ruolo: "Mercante medio",             giorno: "—",       mese: "5–20 op", note: "Dipende dai traffici" },
    { ruolo: "Scriba / amanuense",         giorno: "3–8 bg",  mese: "~1 ap",   note: "Lavoro intellettuale" }
  ],

  categorie: [
    {
      id: "beni-primari",
      nome: "Beni primari e cibo",
      icona: "🌾",
      voci: [
        { nome: "Pane comune (1 pagnotta)",       costo: "1 bp",        note: "Abbondante e accessibile" },
        { nome: "Farina (1 kg)",                  costo: "1 bp",        note: "" },
        { nome: "Cereali / grano (1 kg)",          costo: "2 bp",        note: "Fonte di energia essenziale" },
        { nome: "Ortaggi freschi (5 porzioni)",    costo: "5 bp",        note: "" },
        { nome: "Uova (10)",                       costo: "1 bm",        note: "= 10 bp" },
        { nome: "Gallina viva",                    costo: "1 bm",        note: "= 10 bp" },
        { nome: "Pecora",                          costo: "3 bm",        note: "= 30 bp · lana e carne" },
        { nome: "Maiale vivo",                     costo: "1 am",        note: "= 1000 bp · macellato stagionale" },
        { nome: "Bue da lavoro",                   costo: "3 am",        note: "= 3000 bp" },
        { nome: "Sale (1 kg)",                     costo: "2 bm",        note: "Spezia importante" },
        { nome: "Spezie comuni (100g)",             costo: "5 bm",        note: "Pepe, cannella, zafferano" },
        { nome: "Olio da cucina (1L)",             costo: "3 bm",        note: "" },
        { nome: "Formaggio stagionato (1 kg)",     costo: "5 bm",        note: "" },
        { nome: "Carne salata (1 kg)",             costo: "4 bm",        note: "Conserva bene" },
        { nome: "Pesce secco (1 kg)",              costo: "3 bm",        note: "" },
        { nome: "Vino comune (boccale)",           costo: "3 bp",        note: "" },
        { nome: "Vino pregiato (bottiglia)",       costo: "2 ag",        note: "= 2000 bp" },
        { nome: "Birra debole (boccale)",          costo: "2 bp",        note: "" },
        { nome: "Legna da ardere (fascio)",        costo: "5 bp",        note: "Essenziale per cuocere e scaldarsi" },
        { nome: "Carbone (sacco)",                 costo: "1 bm",        note: "Per forni e fucine" },
        { nome: "Fieno (balla)",                   costo: "3 bm",        note: "Per cavalli e animali da soma" },
        { nome: "Avena (sacco 10 kg)",             costo: "1 bg",        note: "Foraggio pregiato per cavalli" }
      ]
    },
    {
      id: "animali-trasporto",
      nome: "Animali e trasporto",
      icona: "🐴",
      voci: [
        { nome: "Asino",                           costo: "5 ag",        note: "= 5000 bp · bestia da soma leggera" },
        { nome: "Mulo",                            costo: "8 ag",        note: "= 8000 bp · robusto e ostinato" },
        { nome: "Cavallo da soma",                 costo: "5 ag",        note: "= 5000 bp · lento ma resistente" },
        { nome: "Cavallo da sella",                costo: "1 am",        note: "= 10.000 bp · per viaggi" },
        { nome: "Cavallo da combattimento",        costo: "5 am",        note: "= 50.000 bp · addestrato e raro" },
        { nome: "Cane da guardia",                 costo: "3 ag",        note: "= 3000 bp · addestrato" },
        { nome: "Piccione viaggiatore (paio)",     costo: "1 ap",        note: "= 1000 bp · per messaggi" },
        { nome: "Stalla per notte (1 animale)",    costo: "2 bp–1 bm",   note: "Dipende dalla locanda" },
        { nome: "Ferratura cavallo",               costo: "2 am",        note: "= 2000 bp · ogni 2–3 mesi" },
        { nome: "Sella in cuoio",                  costo: "5 ag",        note: "= 5000 bp" },
        { nome: "Bardatura completa",              costo: "1 am",        note: "= 10.000 bp · morso, redini, staffe" },
        { nome: "Carretto (2 ruote)",              costo: "5 am",        note: "= 50.000 bp" },
        { nome: "Carro (4 ruote)",                 costo: "2 op",        note: "= 2.000.000 bp · per commercio" },
        { nome: "Barca a remi",                    costo: "5 am",        note: "= 50.000 bp" },
        { nome: "Barca a vela (piccola)",          costo: "5 op",        note: "= 5.000.000 bp" },
        { nome: "Passaggio su nave (per persona)", costo: "1 ap + 2 bg", note: "Rotta costiera" }
      ]
    },
    {
      id: "locande-servizi",
      nome: "Locande e servizi",
      icona: "🏨",
      voci: [
        { nome: "Pernottamento — malfamato",       costo: "5 bp",        note: "Paglia, pulci e compagnia dubbia" },
        { nome: "Pernottamento — modesto",         costo: "2 bm",        note: "= 20 bp · letto pulito" },
        { nome: "Pernottamento — signorile",       costo: "1 ag",        note: "= 1000 bp · camera privata" },
        { nome: "Pasto semplice — modesto",        costo: "1 bm",        note: "= 10 bp" },
        { nome: "Pasto completo — modesto",        costo: "3 bm",        note: "= 30 bp · carne e pane" },
        { nome: "Pasto completo — signorile",      costo: "1 bg",        note: "= 100 bp" },
        { nome: "Bagno caldo",                     costo: "2 bm",        note: "= 20 bp" },
        { nome: "Lavanderia (abiti)",              costo: "1 bm",        note: "= 10 bp · 1 giorno" },
        { nome: "Barbiere / taglio capelli",       costo: "5 bp",        note: "" },
        { nome: "Traghetto / barca breve",         costo: "1–5 bp",      note: "Attraversata di fiume o canale" },
        { nome: "Noleggio carretto (1 giorno)",    costo: "5 bm",        note: "= 50 bp" },
        { nome: "Servizio di scorta (1 giorno)",   costo: "1 ap",        note: "= 1000 bp · per persona" },
        { nome: "Messaggero in città",             costo: "2 bm",        note: "= 20 bp" },
        { nome: "Corriere urgente (extraurbano)",  costo: "1 ag–1 ap",   note: "Dipende dalla distanza" }
      ]
    },
    {
      id: "abbigliamento",
      nome: "Abbigliamento",
      icona: "👗",
      voci: [
        { nome: "Abiti semplici (contadino)",      costo: "5 bm",        note: "= 50 bp · lino grezzo" },
        { nome: "Abiti comuni (artigiano)",        costo: "2 ag",        note: "= 2000 bp · lana e cotone" },
        { nome: "Abiti borghesi",                  costo: "1 am",        note: "= 10.000 bp · ben cuciti" },
        { nome: "Abiti nobili",                    costo: "1–5 op",      note: "= 1–5 milioni bp · su misura" },
        { nome: "Mantello in lana",                costo: "3 ag",        note: "= 3000 bp" },
        { nome: "Stivali in cuoio",                costo: "3 ag",        note: "= 3000 bp" },
        { nome: "Sandali semplici",                costo: "1 bm",        note: "= 10 bp" },
        { nome: "Tessuto comune (1 m)",            costo: "1 bm",        note: "= 10 bp · lino, lana grezza" },
        { nome: "Tessuto pregiato (1 m)",          costo: "1 ag",        note: "= 1000 bp · seta, velluto" }
      ]
    },
    {
      id: "armi-armature",
      nome: "Armi e armature",
      icona: "⚔️",
      voci: [
        { nome: "Pugnale",                         costo: "2 bm",        note: "= 20 bp" },
        { nome: "Lancia",                          costo: "3 ag",        note: "= 3000 bp" },
        { nome: "Ascia da guerra",                 costo: "5 ag",        note: "= 5000 bp" },
        { nome: "Martello da guerra",              costo: "5 ag",        note: "= 5000 bp" },
        { nome: "Spada (qualità standard)",        costo: "1 ag",        note: "= 1000 bp" },
        { nome: "Spada (qualità artigiana)",       costo: "3–5 am",      note: "= 30.000–50.000 bp · con marchio di gilda" },
        { nome: "Arco corto",                      costo: "5 ag",        note: "= 5000 bp" },
        { nome: "Arco lungo",                      costo: "1 am",        note: "= 10.000 bp" },
        { nome: "Balestra",                        costo: "3 am",        note: "= 30.000 bp" },
        { nome: "Frecce (20)",                     costo: "5 bm",        note: "= 50 bp" },
        { nome: "Scudo in legno",                  costo: "3 ag",        note: "= 3000 bp" },
        { nome: "Scudo in ferro",                  costo: "5 ag",        note: "= 5000 bp" },
        { nome: "Armatura di cuoio",               costo: "5 ag",        note: "= 5000 bp" },
        { nome: "Armatura di maglia",              costo: "1 am",        note: "= 10.000 bp" },
        { nome: "Armatura di piastre (parziale)",  costo: "5 am",        note: "= 50.000 bp" },
        { nome: "Armatura completa",               costo: "2–5 op",      note: "= 2–5 milioni bp · su misura" }
      ]
    },
    {
      id: "equipaggiamento",
      nome: "Equipaggiamento da avventura",
      icona: "🎒",
      voci: [
        { nome: "Zaino da viaggio",                costo: "1 ag",        note: "= 1000 bp · tela cerata" },
        { nome: "Tenda da campo",                  costo: "2 bg",        note: "= 200 bp" },
        { nome: "Razioni da viaggio (1 giorno)",   costo: "1 bm",        note: "= 10 bp · pane secco e carne salata" },
        { nome: "Razioni da campo (7 giorni)",     costo: "1 bg",        note: "= 100 bp" },
        { nome: "Corda (10 m, canapa)",            costo: "5 bm",        note: "= 50 bp" },
        { nome: "Rampino",                         costo: "1 ag",        note: "= 1000 bp" },
        { nome: "Torcia (singola)",                costo: "1 bp",        note: "Durata ~1 ora" },
        { nome: "Lanterna semplice",               costo: "2 bm",        note: "= 20 bp · 4 ore con olio" },
        { nome: "Acciarino e pietra focaia",       costo: "1 bm",        note: "= 10 bp" },
        { nome: "Grimaldelli (set)",               costo: "3 ag",        note: "= 3000 bp" },
        { nome: "Bussola",                         costo: "2 ag",        note: "= 2000 bp" },
        { nome: "Mappa locale (disegnata a mano)", costo: "2 bm",        note: "= 20 bp" },
        { nome: "Mappa regionale (accurata)",      costo: "2 ag",        note: "= 2000 bp" },
        { nome: "Candele (10 pezzi)",              costo: "5 bp",        note: "" },
        { nome: "Pergamena (foglio)",              costo: "1 bm",        note: "= 10 bp" }
      ]
    },
    {
      id: "servizi-burocratici",
      nome: "Servizi e burocrazia",
      icona: "📜",
      voci: [
        { nome: "Documento ufficiale (redazione)", costo: "1 ap",        note: "= 1000 bp · presso uno scriba" },
        { nome: "Passaporto / lasciapassare",      costo: "3 ap",        note: "= 3000 bp" },
        { nome: "Permesso commerciale (Tresil)",   costo: "1 ag",        note: "= 100.000 bp / anno" },
        { nome: "Consulenza legale (1 ora)",       costo: "2 ap",        note: "= 2000 bp" },
        { nome: "Traduttore (1 giorno)",           costo: "3 ag",        note: "= 3000 bp" },
        { nome: "Guarigione dal guaritore",        costo: "1 ap–1 ag",   note: "Dipende dalla gravità" },
        { nome: "Istruzione privata (1 mese)",     costo: "5 ag",        note: "= 500.000 bp" },
        { nome: "Funerale semplice",               costo: "2 ap",        note: "= 2000 bp" },
        { nome: "Funerale con cerimonia",          costo: "1 ag",        note: "= 100.000 bp" }
      ]
    }
  ]
};
