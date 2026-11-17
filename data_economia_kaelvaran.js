// ============================================================
// data_economia_kaelvaran.js — Economia di Kaelvaran (listino unico)
// Usato da furiosa.html (sezioni Economia e Inventario) e da
// kaelvaran.html (Manuale — Il Mondo Fratturato, capitolo Economia).
// ------------------------------------------------------------
// Rivisto il 17 novembre 2026 sulla scala storica dell'Inghilterra
// del 1300 circa: 1 bronzo grande (bg) ≈ 1 penny ≈ la paga di un
// giorno di un bracciante. I due listini (questo e quello del vault,
// 06 - Culture e lingua/Listino prezzi di Kaelvaran.md) sono stati
// unificati: vale questo file, il vault ne è la copia leggibile.
//
// Le voci con  gioco: "…"  sono nate al tavolo. Dove la cifra detta
// in gioco era diversa da quella realistica, il costo qui è quello
// realistico e la cifra del tavolo è scritta nelle note e resta nel
// registro (ciò che è stato pagato in gioco non cambia).
// Il vecchio listino è in data_economia_kaelvaran.js.bak-2026-11-17.
// Scrivete il costo con le sigle (es. "4 am", "1–5 ag", "1 ap + 2 bg"):
// l'equivalenza in bp e in giornate la calcola la pagina.
// ============================================================

const KAELVARAN_ECO = {

  aggiornato: "17 novembre 2026",

  intro: "Una sola scala di monete vale in tutta l'area di Tresil e dell'Atollo: nove tagli, dal bronzo piccolo all'oro grande, ognuno pari a dieci del taglio inferiore. La misura di tutto è la giornata di un bracciante: un bronzo grande, che compra quattro pagnotte o un pasto caldo. Sopra quella soglia i prezzi salgono in fretta: un paio di stivali costa due settimane di lavoro, una spada decente un mese o due, un cavallo comune due anni e mezzo. Per questo quasi tutti viaggiano a piedi, e i contadini arano con i buoi.",

  valute: [
    { sigla: "bp", nome: "Bronzo piccolo",  valore: 1,         note: "Uno spicciolo: un centesimo di giornata" },
    { sigla: "bm", nome: "Bronzo medio",    valore: 10,        note: "= 10 bp · un boccale di birra" },
    { sigla: "bg", nome: "Bronzo grande",   valore: 100,       note: "= 10 bm · la giornata di un bracciante, quattro pagnotte" },
    { sigla: "ap", nome: "Argento piccolo", valore: 1000,      note: "= 10 bg · dieci giornate: un paio di stivali, una notte nella camera migliore della città" },
    { sigla: "am", nome: "Argento medio",   valore: 10000,     note: "= 10 ap · cento giornate: una spada di bottega; un cavallo comune ne vale 6–8" },
    { sigla: "ag", nome: "Argento grande",  valore: 100000,    note: "= 10 am · tre anni di lavoro: un buon cavallo da sella" },
    { sigla: "op", nome: "Oro piccolo",     valore: 1000000,   note: "= 10 ag · un destriero, una locanda" },
    { sigla: "om", nome: "Oro medio",       valore: 10000000,  note: "= 10 op · la rendita di un barone" },
    { sigla: "og", nome: "Oro grande",      valore: 100000000, note: "= 10 om · patrimoni di casata" }
  ],

  // Monete locali e usi regionali (canone del libro, 19 ottobre 2026)
  monete: [
    { titolo: "Bronzi di Tresil", testo: "A Tresil e nei villaggi del suo territorio le monete di valore più basso sono di bronzo: bronzi piccoli, medi e grandi. Il bronzo piccolo è poco più di un gettone: sotto i dieci o venti bronzi piccoli quasi niente si compra da solo." },
    { titolo: "Rami di Ferrath", testo: "A Ferrath le monete più piccole sono di una lega di rame e zinco e si chiamano monete di rame, o semplicemente rami (piccoli e grandi). Chi viene da Ferrath può averne ancora in tasca; fuori dai Ferromarchi si accettano a malincuore. Il cambio tra rami e bronzi non è ancora fissato." },
    { titolo: "Argento e oro", testo: "Argenti e ori seguono la stessa scala ovunque. Chi dice «un argento» senza specificare, a Tresil, intende di solito un argento piccolo; per i prezzi importanti si dice sempre il taglio. Un contadino può passare la vita senza toccare una moneta d'oro." }
  ],

  salari: [
    { ruolo: "Contadino / bracciante",        giorno: "1–1,5 bg",  mese: "~25 bg",   note: "La base del mondo; lavora a giornata 200–250 giorni l'anno (1300: 1–1,5 d)" },
    { ruolo: "Donna o ragazzo aiutante",      giorno: "50 bp–1 bg", mese: "~15 bg",  note: "" },
    { ruolo: "Garzone di bottega",            giorno: "50–80 bp",  mese: "~15 bg",   note: "Vitto spesso compreso" },
    { ruolo: "Operaio (Tresil)",              giorno: "1,5–2 bg",  mese: "~40 bg",   note: "Lavori manuali in città" },
    { ruolo: "Carrettiere, stalliere, messaggero di casa", giorno: "—", mese: "5–9 bg", note: "60–100 bg l'anno più vitto e alloggio (1300: 5 s – 8 s 8 d)" },
    { ruolo: "Maestro artigiano",             giorno: "3–5 bg",    mese: "~80 bg",   note: "Carpentieri, muratori, fabbri (1351: 3–4 d)" },
    { ruolo: "Scriba / amanuense",            giorno: "3–6 bg",    mese: "~1 am",    note: "Lavoro intellettuale" },
    { ruolo: "Guardia / arciere",             giorno: "3–5 bg",    mese: "~1 am",    note: "Milizia o guardia privata (1346: 3 d)" },
    { ruolo: "Arciere a cavallo, fante corazzato", giorno: "6 bg", mese: "~1,5 am",  note: "(1346: 6 d)" },
    { ruolo: "Uomo d'arme mercenario",        giorno: "12 bg",     mese: "~3,5 am",  note: "Con cavallo e armatura propri (1316: 12 d)" },
    { ruolo: "Cavaliere mercenario",          giorno: "24 bg",     mese: "~7 am",    note: "(1316: 2 s)" },
    { ruolo: "Mastro di gilda",               giorno: "1–2 ap",    mese: "3–5 am",   note: "Con bottega e garzoni" },
    { ruolo: "Mercante medio",                giorno: "—",         mese: "2–10 am",  note: "Dipende dai traffici" },
    { ruolo: "Barone (rendita)",              giorno: "—",         mese: "4–10 ag",  note: "48–120 ag l'anno (1300: 200–500 £)" }
  ],

  categorie: [
    {
      id: "beni-primari", nome: "Beni primari e cibo", icona: "🌾",
      voci: [
        { nome: "Pane comune (1 pagnotta)",        costo: "25 bp",    note: "Quattro pagnotte per una giornata di paga" },
        { nome: "Farina (1 kg)",                   costo: "35 bp",    note: "" },
        { nome: "Cereali / grano (1 kg)",          costo: "25–30 bp", note: "In carestia il triplo o il quadruplo" },
        { nome: "Orzo o legumi secchi (1 kg)",     costo: "30 bp",    note: "Si conservano un anno" },
        { nome: "Ortaggi freschi (5 porzioni)",    costo: "25 bp",    note: "" },
        { nome: "Salsicce (un paio)",              costo: "30 bp",    note: "Dal macellaio" },
        { nome: "Uova (10)",                       costo: "40 bp",    note: "" },
        { nome: "Gallina viva",                    costo: "50 bp–1 bg", note: "" },
        { nome: "Pernici o quaglie (3)",           costo: "1 bg",     note: "Selvaggina da cortile, già spellate" },
        { nome: "Oca",                             costo: "6–8 bg",   note: "" },
        { nome: "Pecora",                          costo: "10–17 bg", note: "Lana e carne" },
        { nome: "Maiale vivo",                     costo: "24–36 bg", note: "Macellato a stagione" },
        { nome: "Mucca",                           costo: "70–120 bg", note: "" },
        { nome: "Bue da lavoro",                   costo: "150–160 bg", note: "" },
        { nome: "Sale (1 kg)",                     costo: "25 bp",    note: "In carestia sei volte tanto" },
        { nome: "Pepe (100 g)",                    costo: "2–6 bg",   note: "Spezia d'importazione" },
        { nome: "Zafferano (100 g)",               costo: "30–40 bg", note: "" },
        { nome: "Olio da cucina (1 l)",            costo: "1 bg",     note: "" },
        { nome: "Miele (1 l)",                     costo: "1,5 bg",   note: "Non scade; serve anche sulle ferite" },
        { nome: "Formaggio stagionato (1 kg)",     costo: "1 bg",     note: "Forma intera 1–2 mesi; tagliata 2–3 settimane" },
        { nome: "Carne fresca (1 kg)",             costo: "1–1,5 bg", note: "" },
        { nome: "Carne salata (1 kg)",             costo: "1,5–2 bg", note: "2–4 mesi, asciutta e ventilata" },
        { nome: "Pesce secco o salato (1 kg)",     costo: "1 bg",     note: "3–6 mesi" },
        { nome: "Gallette / pane biscottato (1 kg)", costo: "40 bp",  note: "3–6 mesi all'asciutto" },
        { nome: "Frutta secca locale (1 kg)",      costo: "1,5 bg",   note: "Mele secche e noci; uva passa e datteri d'importazione 2–9 bg" },
        { nome: "Birra (boccale)",                 costo: "10–15 bp", note: "Al Corvo Impiccato, al tavolo, due bronzi piccoli: il prezzo per sedersi senza dare nell'occhio", gioco: "Sessione 1 · Cap 2" },
        { nome: "Vino comune (boccale)",           costo: "40 bp",    note: "" },
        { nome: "Vino comune (caraffa)",           costo: "1 bg",     note: "Le locande non lasciano portar via la caraffa" },
        { nome: "Acquavite (bottiglia)",           costo: "3–5 bg",   note: "" },
        { nome: "Vino pregiato (bottiglia)",       costo: "1,5–2 bg", note: "Da tavola signorile" },
        { nome: "Legna da ardere (fascio)",        costo: "25 bp",    note: "" },
        { nome: "Carbone (sacco)",                 costo: "1–2 bg",   note: "Per forni e fucine" },
        { nome: "Fieno (balla)",                   costo: "50 bp",    note: "" },
        { nome: "Avena (sacco 10 kg)",             costo: "1–1,5 bg", note: "Un cavallo in viaggio ne mangia 3 kg al giorno" }
      ]
    },
    {
      id: "animali-trasporto", nome: "Animali e trasporto", icona: "🐴",
      voci: [
        { nome: "Cavallino da lavoro o da soma",   costo: "3 ap–2,5 am", note: "Da tiro o da soma: un contadino fortunato ne ha uno" },
        { nome: "Brocco (cavallo da poco)",        costo: "3–6 am",   note: "I più economici della fattoria. Al tavolo Nikla li ha pagati circa un argento grande l'uno", gioco: "Sessione 8 · Cap 17" },
        { nome: "Cavallo da sella comune",         costo: "6–8 am",   note: "Circa due anni e mezzo di paga di un contadino" },
        { nome: "Buon cavallo da sella",           costo: "1–2,5 ag", note: "Al tavolo e nel libro «un cavallo costa da uno a cinque argenti grandi»: è il prezzo di un buon cavallo", gioco: "Sessione 8 · Cap 17 · Guida §10" },
        { nome: "Cavallo da guerra / destriero",   costo: "7–20 ag",  note: "Addestrato e raro" },
        { nome: "Rivendita di un cavallo",         costo: "8 am",     note: "Quanto si recupera da un brocco rivenduto in fretta", gioco: "Sessione 8 · Cap 17 (due brocchi = 16 am)" },
        { nome: "Mulo",                            costo: "2,5–4 am", note: "Robusto e ostinato" },
        { nome: "Asino",                           costo: "35–50 bg", note: "Bestia da soma leggera" },
        { nome: "Cane da guardia",                 costo: "12–24 bg", note: "Addestrato" },
        { nome: "Piccioni viaggiatori (paio)",     costo: "2–4 bg",   note: "Per messaggi" },
        { nome: "Stalla per notte (1 animale)",    costo: "50 bp–1 bg", note: "Senza foraggio" },
        { nome: "Stalla e foraggio per notte (1 cavallo)", costo: "2–3 bg", note: "" },
        { nome: "Ferratura (quattro ferri)",       costo: "3–4 bg",   note: "Dura 6–8 settimane di strada" },
        { nome: "Sella comune",                    costo: "25–60 bg", note: "" },
        { nome: "Sella pregiata",                  costo: "2,5–7 am", note: "" },
        { nome: "Briglia, morso e redini",         costo: "12–24 bg", note: "" },
        { nome: "Basto da soma",                   costo: "12–24 bg", note: "" },
        { nome: "Bisacce da sella",                costo: "5–8 bg",   note: "" },
        { nome: "Coperta da cavallo",              costo: "5–8 bg",   note: "" },
        { nome: "Nolo di un cavallo (al giorno)",  costo: "3–6 bg",   note: "Da riportare alla scuderia; chi lo perde lo ripaga" },
        { nome: "Carretto cerchiato di ferro",     costo: "50 bg",    note: "" },
        { nome: "Carro (4 ruote)",                 costo: "2,5–7 am", note: "Per commercio, animali esclusi" },
        { nome: "Barca a remi",                    costo: "1,2–2,4 am", note: "" },
        { nome: "Barca a vela (piccola)",          costo: "1,2–3,6 ag", note: "" },
        { nome: "Passaggio su nave (per persona)", costo: "6–24 bg",  note: "Rotta costiera" }
      ]
    },
    {
      id: "locande-servizi", nome: "Locande e viaggio", icona: "🏨",
      voci: [
        { nome: "Stazione di posta (notte)",       costo: "25–50 bp", note: "Lungo le strade principali; pulci comprese nel prezzo", gioco: "Cap 17 (senza cifra)" },
        { nome: "Pernottamento — malfamato",       costo: "25–50 bp", note: "Paglia e compagnia dubbia" },
        { nome: "Pernottamento — modesto",         costo: "1–2 bg",   note: "Letto pulito; se non ci dormi, la notte dopo si ripaga", gioco: "Cap 13 (regola dell'oste di Pozzprofond)" },
        { nome: "Pernottamento — signorile",       costo: "4–6 bg",   note: "Camera privata" },
        { nome: "Pasto semplice",                  costo: "50 bp–1 bg", note: "" },
        { nome: "Pasto completo — modesto",        costo: "1–2 bg",   note: "Carne e pane" },
        { nome: "Pasto completo — signorile",      costo: "5 bg",     note: "" },
        { nome: "Bagno caldo",                     costo: "1–2 bg",   note: "" },
        { nome: "Lavanderia (abiti)",              costo: "50 bp",    note: "Un giorno" },
        { nome: "Barbiere / taglio capelli",       costo: "25–50 bp", note: "" },
        { nome: "Traghetto / barca breve",         costo: "25 bp–1 bg", note: "A piedi o a cavallo" },
        { nome: "Guida per una notte",             costo: "1 bg",     note: "Guida di montagna: 2–3 bg al giorno" },
        { nome: "Noleggio carretto (1 giorno)",    costo: "3–4 bg",   note: "" },
        { nome: "Messaggero in città",             costo: "25–50 bp", note: "" },
        { nome: "Corriere extraurbano (per giorno di viaggio)", costo: "2–6 bg", note: "" },
        { nome: "Scorta armata (1 giorno, a testa)", costo: "3–12 bg", note: "Da un arciere a un uomo d'arme; più cara in montagna e verso est. Miss Eria paga il gruppo un bronzo grande a testa", gioco: "Sessione 12" },
        { nome: "Annuncio in bacheca",             costo: "25–50 bp", note: "Alla Rosa dei Venti l'oste lo appende accanto alle richieste di lavoro" }
      ]
    },
    {
      id: "abbigliamento", nome: "Abbigliamento", icona: "👗",
      voci: [
        { nome: "Abiti usati dal rigattiere (giubba e brache)", costo: "10–20 bg", note: "Qualche strappo, orli consumati, presentabili. Al tavolo Karl li ha pagati quattro bronzi medi", gioco: "Sessione 10 · Cap 19 (Karl)" },
        { nome: "Tunica di lana e velo semplice (usati)", costo: "8–15 bg", note: "Al tavolo Zoraya li ha avuti per tre bronzi medi, tirando sul prezzo", gioco: "Sessione 10 · Cap 19 (Zoraya)" },
        { nome: "Camicia di lino",                 costo: "8 bg",     note: "" },
        { nome: "Tunica di lana nuova",            costo: "36 bg",    note: "" },
        { nome: "Abiti da artigiano",              costo: "36–70 bg", note: "Tabarro e sopravveste" },
        { nome: "Vestiario invernale",             costo: "60–100 bg", note: "Pesante e caldo" },
        { nome: "Abito borghese / da festa",       costo: "1,2–2,4 am", note: "Ben cucito" },
        { nome: "Abito nobile su misura",          costo: "2,5–12 ag", note: "Tinture pregiate: a Tresil i colori dicono la classe" },
        { nome: "Mantello di lana",                costo: "36–60 bg", note: "" },
        { nome: "Mantello foderato di pelliccia",  costo: "80 bg–1,5 am", note: "Cappuccio foderato" },
        { nome: "Scarpe",                          costo: "4–6 bg",   note: "" },
        { nome: "Stivali da cavallo",              costo: "12–24 bg", note: "" },
        { nome: "Sandali semplici",                costo: "1–2 bg",   note: "" },
        { nome: "Guanti",                          costo: "2–4 bg",   note: "Di lana o di cuoio" },
        { nome: "Berretto di lana",                costo: "3–6 bg",   note: "" },
        { nome: "Cappello con piume o stoffe pregiate", costo: "10–15 bg", note: "" },
        { nome: "Calze di lana (paio)",            costo: "1–2 bg",   note: "" },
        { nome: "Tessuto comune (1 m)",            costo: "9–16 bg",  note: "Una tunica ne vuole 2–2,5 m" },
        { nome: "Lana fine (1 m)",                 costo: "65–80 bg", note: "" },
        { nome: "Seta (1 m)",                      costo: "1,3–1,6 am", note: "" },
        { nome: "Ago e filo",                      costo: "50 bp",    note: "" }
      ]
    },
    {
      id: "armi-armature", nome: "Armi e armature", icona: "⚔️",
      voci: [
        { nome: "Spada media «di un mastro», con fodero e miscela", costo: "2,5–7 am", note: "Marchio di gilda al tallone. Al tavolo l'armaiolo ne chiedeva sei argenti medi, Rei l'ha stimata due, è stata pagata quattro: un prezzo realistico per un'arma di bottega", gioco: "Sessione 9 · Cap 18" },
        { nome: "Spada da poco",                   costo: "6–12 bg",  note: "Da contadino" },
        { nome: "Spada comune",                    costo: "25–60 bg", note: "Al tavolo Rei ne stimava il prezzo onesto in due argenti medi", gioco: "Sessione 9 · Cap 18 (stima di Rei)" },
        { nome: "Fodero in cuoio",                 costo: "3–6 bg",   note: "" },
        { nome: "Miscela per pulire la lama (boccetta)", costo: "1 bg", note: "" },
        { nome: "Olio per le lame (fiaschetta)",   costo: "1 bg",     note: "" },
        { nome: "Pugnale / coltello",              costo: "2–6 bg",   note: "" },
        { nome: "Coltello da lancio",              costo: "3–5 bg",   note: "" },
        { nome: "Lancia",                          costo: "6–12 bg",  note: "" },
        { nome: "Ascia o martello da guerra",      costo: "12–36 bg", note: "" },
        { nome: "Arco corto",                      costo: "6–12 bg",  note: "" },
        { nome: "Arco lungo",                      costo: "12–18 bg", note: "" },
        { nome: "Balestra",                        costo: "36–72 bg", note: "" },
        { nome: "Frecce (20)",                     costo: "10–15 bg", note: "" },
        { nome: "Dardi per balestra (20)",         costo: "12–20 bg", note: "" },
        { nome: "Scudo in legno",                  costo: "6–12 bg",  note: "" },
        { nome: "Scudo di frassino cerchiato di ferro", costo: "24–36 bg", note: "Da Mastro Balsan, «al prezzo giusto o quasi»: la cifra esatta non è stata detta", gioco: "Sessione 9 · Cap 18 (prezzo stimato)" },
        { nome: "Armatura di cuoio",               costo: "60 bg",    note: "" },
        { nome: "Elmo",                            costo: "40–200 bg", note: "" },
        { nome: "Giaco di maglia",                 costo: "1–1,2 ag", note: "" },
        { nome: "Corazza parziale a piastre",      costo: "5–12 am",  note: "" },
        { nome: "Armatura completa su misura",     costo: "2–4 ag",   note: "Le armature di famiglia non hanno prezzo" }
      ]
    },
    {
      id: "equipaggiamento", nome: "Equipaggiamento da viaggio", icona: "🎒",
      voci: [
        { nome: "Sacca o zaino da viaggio",        costo: "6–12 bg",  note: "Tela cerata" },
        { nome: "Borsellino di cuoio",             costo: "1–2 bg",   note: "" },
        { nome: "Tenda da campo (per due)",        costo: "60–120 bg", note: "" },
        { nome: "Coperta di lana pesante",         costo: "12–24 bg", note: "" },
        { nome: "Pagliericcio arrotolato",         costo: "2 bg",     note: "" },
        { nome: "Telo cerato (3×3 m)",             costo: "8–12 bg",  note: "" },
        { nome: "Razioni da viaggio (1 giorno)",   costo: "1–1,5 bg", note: "Pane secco e carne salata" },
        { nome: "Razioni da campo (7 giorni)",     costo: "7–10 bg",  note: "Con formaggi e legumi" },
        { nome: "Otre o borraccia",                costo: "3–4 bg",   note: "L'acqua prende sapore di cuoio in 2–3 giorni" },
        { nome: "Fiaschetta in pelle o metallo",   costo: "2–4 bg",   note: "" },
        { nome: "Pentolino di ferro",              costo: "6–12 bg",  note: "" },
        { nome: "Pentola di coccio",               costo: "50 bp",    note: "" },
        { nome: "Corda di canapa (10 m)",          costo: "3–6 bg",   note: "Bagnata e lasciata così marcisce" },
        { nome: "Rampino",                         costo: "6–12 bg",  note: "" },
        { nome: "Torcia",                          costo: "25 bp",    note: "Circa un'ora" },
        { nome: "Lanterna semplice",               costo: "3–6 bg",   note: "Quattro ore con l'olio" },
        { nome: "Olio per lanterna (1 l)",         costo: "1 bg",     note: "" },
        { nome: "Acciarino e pietra focaia",       costo: "1–2 bg",   note: "" },
        { nome: "Candele di sego (10)",            costo: "2 bg",     note: "4–6 ore l'una" },
        { nome: "Candele di cera (10)",            costo: "6–7 bg",   note: "" },
        { nome: "Piccone / pala",                  costo: "3–6 bg",   note: "" },
        { nome: "Grimaldelli (set)",               costo: "24–60 bg", note: "Possederli, a Tresil, è già sospetto" },
        { nome: "Bussola",                         costo: "60–120 bg", note: "Strumento da navigatori" },
        { nome: "Mappa locale (a mano)",           costo: "2–6 bg",   note: "" },
        { nome: "Mappa regionale accurata",        costo: "2,4–4,8 am", note: "Verso est non ne esistono di affidabili" },
        { nome: "Cannocchiale",                    costo: "2,5–5 am", note: "Raro" }
      ]
    },
    {
      id: "inchiostri-scrittura", nome: "Inchiostri, carta e lettura", icona: "🖋️",
      voci: [
        { nome: "Boccetta di vetro vuota",         costo: "1–2 bg",   note: "Dal vetraio. Al tavolo Rei le ha pagate un bronzo medio l'una", gioco: "Cap 13 (Pozzprofond)" },
        { nome: "Inchiostro di seppia (riempire una boccetta)", costo: "50 bp", note: "Dal pescivendolo, a boccette portate da sé. Al tavolo: quattro rami piccoli di Ferrath per quattro boccette", gioco: "Cap 13" },
        { nome: "Inchiostro da scrivere (boccetta)", costo: "50 bp–1 bg", note: "Bottega di articoli da scrittura" },
        { nome: "Inchiostro di qualità rara",      costo: "1 ap e oltre", note: "Pigmenti, metalli, ingredienti rituali: il prezzo lo fa la ricetta" },
        { nome: "Pergamena (foglio)",              costo: "1–2 bg",   note: "" },
        { nome: "Carta (foglio)",                  costo: "50 bp",    note: "" },
        { nome: "Penna a serbatoio",               costo: "3–6 ap",   note: "Si carica da sé e versa l'inchiostro nel pennino; lavoro da orafo" },
        { nome: "Materiali da scrittura (set)",    costo: "10–15 bg", note: "Inchiostro, penne, pergamene" },
        { nome: "Libro comune (copiato a mano)",   costo: "1–5 am",   note: "Prezzo per volume: mesi di lavoro di un copista" },
        { nome: "Trattato o ricettario raro",      costo: "5 am–2 ag", note: "Se è in vendita" },
        { nome: "Biblioteche della Croce — garanzia di un cittadino", costo: "1 ap", note: "Firma del garante e lasciapassare valido fino alla stessa ora del giorno dopo", gioco: "Sessioni 9–10 · Cap 18" },
        { nome: "Biblioteche della Croce — ricerche (al giorno)", costo: "1 ap", note: "Dieci giornate di paga: leggere è un lusso. Una ricerca può durare fino a due settimane", gioco: "Sessione 9 · Cap 18" },
        { nome: "Bollo della garanzia",            costo: "1–3 bg",   note: "Pagato dal garante; al tavolo «tre monete di rame», che a Tresil sono bronzi", gioco: "Sessione 10 (cifra da confermare)" }
      ]
    },
    {
      id: "strumenti-mestieri", nome: "Strumenti e mestieri", icona: "🔨",
      voci: [
        { nome: "Kit da guaritore",                costo: "15–30 bg", note: "Bende, erbe, unguenti" },
        { nome: "Bende di lino (1 m)",             costo: "3–5 bg",   note: "" },
        { nome: "Erbe e unguenti (sacchetto)",     costo: "5 bg",     note: "Erbe secche 6 mesi; unguenti grassi 1–2 mesi" },
        { nome: "Kit da carpentiere",              costo: "10–20 bg", note: "Ascia, sega, succhiello" },
        { nome: "Kit da fabbro",                   costo: "4–8 am",   note: "Pinze, martello, incudine da campo" },
        { nome: "Kit da cuoiaio",                  costo: "10–20 bg", note: "" },
        { nome: "Kit da cucito",                   costo: "1–2 bg",   note: "" },
        { nome: "Strumento musicale semplice",     costo: "2–5 bg",   note: "Flauto, tamburello" },
        { nome: "Strumento musicale pregiato",     costo: "1–3 am",   note: "Liuto, violino" },
        { nome: "Mazzo di carte",                  costo: "1–2 bg",   note: "" },
        { nome: "Lanterna pregiata (ferro e vetri colorati)", costo: "2–5 ap", note: "Lavoro di bottega; le lanterne della memoria non si comprano" },
        { nome: "Sigillo di cera personale",       costo: "5–10 bg",  note: "" },
        { nome: "Bilancia da mercante",            costo: "2–4 ap",   note: "Con pesi certificati" },
        { nome: "Abaco",                           costo: "3–5 bg",   note: "" },
        { nome: "Lucchetto in ferro",              costo: "3–6 bg",   note: "" },
        { nome: "Catena (1 m)",                    costo: "2–4 bg",   note: "" },
        { nome: "Limatura di ferro (sacchetto)",   costo: "1 bg",     note: "Dalle fucine" },
        { nome: "Trappola per animali",            costo: "3–6 bg",   note: "" },
        { nome: "Rete da pesca",                   costo: "6–12 bg",  note: "" }
      ]
    },
    {
      id: "servizi-cure", nome: "Cure, servizi e burocrazia", icona: "📜",
      voci: [
        { nome: "Guaritore (ferite comuni)",       costo: "2 bg–2 ap", note: "Dipende dalla gravità; alcuni chiedono favori invece di denaro" },
        { nome: "Chierico o guaritore di fama",    costo: "1–5 am",   note: "Per chi è ridotto «da moribondo»" },
        { nome: "Pozione di guarigione",          costo: "1–2 op",   note: "Rara e cara: almeno un oro piccolo (decisione dell'autrice, 17/11/2026)" },
        { nome: "Antitossina (una dose)",         costo: "1 ap",     note: "Contro veleni e morsi; prezzo stimato" },
        { nome: "Braccio nuovo",                   costo: "~20 om",   note: "Solo su ferita fresca, da guaritori molto bravi: «un principe ci pensa due volte»", gioco: "Sessione 10 · Cap 19 (Gabbo)" },
        { nome: "Dentista / cavadenti",            costo: "1–5 bg",   note: "" },
        { nome: "Documento ufficiale (redazione)", costo: "2–6 bg",   note: "Presso uno scriba" },
        { nome: "Lasciapassare / passaporto",      costo: "12–24 bg", note: "Timbro incluso" },
        { nome: "Notaio / sigillo ufficiale",      costo: "3–6 bg",   note: "Per un documento semplice" },
        { nome: "Consulenza legale",               costo: "12 bg",    note: "Ordine dei Magistrati" },
        { nome: "Causa legale (mediazione di gilda)", costo: "5 ap–1 am", note: "" },
        { nome: "Permesso commerciale (Tresil, un anno)", costo: "1,2–2,4 am", note: "" },
        { nome: "Traduttore (1 giorno)",           costo: "3–6 bg",   note: "" },
        { nome: "Istruzione privata (1 mese)",     costo: "40 bg",    note: "Lettura, aritmetica" },
        { nome: "Funerale semplice",               costo: "24–60 bg", note: "" },
        { nome: "Funerale con cerimonia",          costo: "2,4–12 am", note: "" }
      ]
    },
    {
      id: "compensi-patrimoni", nome: "Compensi, patrimoni e varie", icona: "💰",
      voci: [
        { nome: "Ingaggio per una sceneggiata (un litigio in pubblico)", costo: "4 am", note: "Uno subito come pegno, tre a lavoro fatto: più di un anno di paga di un contadino, un'esca esagerata apposta («spropositato», dice Kaf)", gioco: "Sessione 1 · Cap 2 (Kaf a Rei)" },
        { nome: "Posta di una mano a carte (Via dei Pozzi)", costo: "1 bp", note: "Da Gabbo si paga uno spicciolo o una storia, che si vinca o si perda", gioco: "Sessione 10 · Cap 19" },
        { nome: "Mancia generosa / dono a un ragazzo per partire", costo: "2 am", note: "Quanto Nikla ha dato a Raffa: otto mesi di paga, per lui una fortuna", gioco: "Sessione 6 · Cap 14" },
        { nome: "Locanda di città (l'edificio)",   costo: "5 ag–1,5 op", note: "Due sacchetti d'oro dei tre della Rosa Storta bastavano «per comprare tre locande come questa»", gioco: "Sessione 8 · Cap 17 (stima)" },
        { nome: "Bottega artigiana con attrezzi",  costo: "2–10 ag",  note: "" },
        { nome: "Casa popolare (una stanza in affitto, al mese)", costo: "6–10 bg", note: "Anche otto persone per stanza, senza bagno né cucina" },
        { nome: "Casa di famiglia con officina",   costo: "5–12 ag",  note: "Ai Cantieri" }
      ]
    }
  ],

  // Registro del tavolo (solo pagina Furiosa): prezzi e somme passati di
  // mano in gioco, in ordine di sessione. «fonte» = sessione e capitolo.
  // Ciò che è stato pagato in gioco resta com'è stato pagato.
  registro: [
    { quando: "Sessione 1", cosa: "Birra al Corvo Impiccato",                         cifra: "2 bp",                  fonte: "Cap 2" },
    { quando: "Sessione 1", cosa: "Kaf ingaggia Rei per il litigio con Theris",        cifra: "1 am subito + 3 am dopo", fonte: "Cap 2" },
    { quando: "Sessione 1", cosa: "Nella sacca di Refistas",                          cifra: "14 ap, 1 ag, ~20 bm",   fonte: "Cap 4" },
    { quando: "Sessione 1", cosa: "Artiglio d'orso comprato da Nikla",                cifra: "1 rame piccolo (Ferrath)", fonte: "Cap 4" },
    { quando: "Sessione 6", cosa: "Quattro boccette di vetro dal vetraio (Rei)",       cifra: "1 bm l'una",            fonte: "Cap 13" },
    { quando: "Sessione 6", cosa: "Inchiostro di seppia per quattro boccette",         cifra: "4 rami piccoli",        fonte: "Cap 13" },
    { quando: "Sessione 6", cosa: "Nikla regala a Raffa i soldi per partire",          cifra: "2 am",                  fonte: "Cap 14" },
    { quando: "Sessione 8", cosa: "Prezzo di un cavallo",                              cifra: "1–5 ag",                fonte: "Cap 17 · Guida §10" },
    { quando: "Sessione 8", cosa: "Due brocchi comprati da Nikla a una fattoria",      cifra: "i più economici (~1 ag l'uno)", fonte: "Cap 17" },
    { quando: "Sessione 8", cosa: "Brocchi rivenduti fuori dalle mura di Tresil",      cifra: "+16 am",                fonte: "Cap 17" },
    { quando: "Sessione 8", cosa: "Sacchetto di Whilliam (dai tre della Rosa Storta)", cifra: "+4 op e 2 ag",          fonte: "Cap 17 (cifra corretta il 17/11/2026: prima 4 om e 2 op)" },
    { quando: "Sessione 9", cosa: "Biblioteca: garanzia di un cittadino",              cifra: "1 ap",                  fonte: "Cap 18" },
    { quando: "Sessione 9", cosa: "Biblioteca: ricerche, al giorno (fino a 2 settimane)", cifra: "1 ap",              fonte: "Cap 18" },
    { quando: "Sessione 9", cosa: "Karl lascia sul tavolo dei genitori",               cifra: "4 monete d'argento (taglio non detto)", fonte: "nota Sessione 9" },
    { quando: "Sessione 9", cosa: "Scudo di frassino da Mastro Balsan",                cifra: "«prezzo giusto» (non detto)", fonte: "Cap 18" },
    { quando: "Sessione 9", cosa: "Spada media dall'armaiolo, con fodero e miscela",  cifra: "4 am (chiesti 6, stimata 2)", fonte: "Cap 18" },
    { quando: "Sessione 10", cosa: "Posta a carte da Gabbo",                           cifra: "1 bronzo o una storia", fonte: "Cap 19" },
    { quando: "Sessione 10", cosa: "Un braccio nuovo (ferita fresca)",                 cifra: "~20 om",                fonte: "Cap 19" },
    { quando: "Sessione 10", cosa: "Rei lascia sulla mensola di Gabbo",                cifra: "2 ap",                  fonte: "Cap 19 (al tavolo: da chiarire)" },
    { quando: "Sessione 10", cosa: "Bollo della garanzia pagato da Greta",             cifra: "3 bronzi",              fonte: "nota Sessione 10" },
    { quando: "Sessione 10", cosa: "Lasciapassare della biblioteca pagato da Nikla",   cifra: "1 ap (Cap 19 in bozza: 2 ap, firma e primo giorno)", fonte: "nota Sessione 10" },
    { quando: "Sessione 10", cosa: "Abiti usati per Karl",                             cifra: "4 bm",                  fonte: "Cap 19" },
    { quando: "Sessione 10", cosa: "Tunica e velo per Zoraya",                         cifra: "3 bm (o 1 bg senza velo)", fonte: "Cap 19 · nota Sessione 10" },
    { quando: "Sessione 12", cosa: "Paga della scorta di Miss Eria",                   cifra: "1 bg al giorno a testa, pasti esclusi", fonte: "Sessione 12" }
  ],

  // Cosa è cambiato (per il master)
  modifiche: [
    "17 novembre 2026: listino rifatto sulla scala storica del 1300 (1 bg ≈ 1 penny ≈ una giornata di bracciante) e unificato con quello del vault. I prezzi realistici hanno la precedenza; dove al tavolo si era detta un'altra cifra, la si trova nelle note e nel registro.",
    "Cavalli: un cavallo comune vale 6–8 am (due anni e mezzo di paga); «da uno a cinque argenti grandi», canone del libro, è il prezzo di un buon cavallo da sella.",
    "Spade: una spada comune 25–60 bg; una spada di bottega con marchio 2,5–7 am, quindi i 4 am pagati per la spada del mastro sono un prezzo giusto.",
    "Sono saliti molto vestiti, stoffe, candele, inchiostro, birra e locande, che il vecchio listino dava a pochi bronzi piccoli; sono scesi armi, kit da mestiere, locande intere e patrimoni.",
    "Salari: il maestro artigiano scende a 3–5 bg al giorno; aggiunti arcieri, uomini d'arme, cavalieri e servitori a paga annua.",
    "Da decidere nel libro: la birra al Corvo (2 bp → proposta 2 bm), le boccette e l'inchiostro di Nikla. Deciso il 17/11: il sacchetto di Whilliam vale 4 ori piccoli e 2 argenti grandi (prima 4 om e 2 op)."
  ]
};
