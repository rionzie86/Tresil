// ============================================================
// data_economia_kaelvaran.js — Economia di Kaelvaran (listino 2026)
// Usato da furiosa.html (sezione Economia) e da kaelvaran.html
// (Manuale — Il Mondo Fratturato, capitolo Economia).
// ------------------------------------------------------------
// Aggiornato il 31 ottobre 2026 sui prezzi detti al tavolo nella
// campagna Furiosa (sessioni 1–10) e sul canone del libro (Guida di
// Stile §10: un cavallo costa da 1 a 5 argenti grandi).
// Il vecchio listino (data.js di Tresil / data_economia.js) resta
// invariato per la campagna di Tresil.
//
// Le voci con  gioco: "…"  sono prezzi detti o pagati in gioco:
// hanno la precedenza su qualsiasi stima. Le altre sono stime di
// listino ricalibrate sulla stessa scala (1 bg = la giornata di un
// bracciante).
// L'equivalenza in bronzi piccoli e in giornate di lavoro viene
// calcolata da sola dalla pagina a partire dal campo «costo»:
// scrivete il costo con le sigle (es. "4 am", "1–5 ag", "1 ap + 2 bg").
// ============================================================

const KAELVARAN_ECO = {

  aggiornato: "31 ottobre 2026",

  intro: "Una sola scala di monete vale in tutta l'area di Tresil e dell'Atollo: nove tagli, dal bronzo piccolo all'oro grande, ognuno pari a dieci del taglio inferiore. La misura di tutto è la giornata di un bracciante, un bronzo grande. Sopra quella soglia i prezzi salgono in fretta: un buon pasto costa una manciata di bronzi, una spada decente mesi di lavoro, un cavallo anni. Per questo quasi tutti viaggiano a piedi, di stazione di posta in stazione di posta.",

  valute: [
    { sigla: "bp", nome: "Bronzo piccolo",  valore: 1,         note: "Moneta base: una pagnotta, mezzo boccale di birra" },
    { sigla: "bm", nome: "Bronzo medio",    valore: 10,        note: "= 10 bp · un pasto semplice" },
    { sigla: "bg", nome: "Bronzo grande",   valore: 100,       note: "= 10 bm · la giornata di un bracciante" },
    { sigla: "ap", nome: "Argento piccolo", valore: 1000,      note: "= 10 bg · un giorno di biblioteca" },
    { sigla: "am", nome: "Argento medio",   valore: 10000,     note: "= 10 ap · una spada comune" },
    { sigla: "ag", nome: "Argento grande",  valore: 100000,    note: "= 10 am · un cavallo da poco" },
    { sigla: "op", nome: "Oro piccolo",     valore: 1000000,   note: "= 10 ag · un destriero, una bottega" },
    { sigla: "om", nome: "Oro medio",       valore: 10000000,  note: "= 10 op · una locanda intera" },
    { sigla: "og", nome: "Oro grande",      valore: 100000000, note: "= 10 om · patrimoni di casata" }
  ],

  // Monete locali e usi regionali (canone del libro, 19 ottobre 2026)
  monete: [
    { titolo: "Bronzi di Tresil", testo: "A Tresil e nei villaggi del suo territorio le monete di valore più basso sono di bronzo: bronzi piccoli, medi e grandi." },
    { titolo: "Rami di Ferrath", testo: "A Ferrath le monete più piccole sono di una lega di rame e zinco e si chiamano monete di rame, o semplicemente rami (piccoli e grandi). Chi viene da Ferrath può averne ancora in tasca; fuori dai Ferromarchi si accettano a malincuore. Il cambio tra rami e bronzi non è ancora fissato." },
    { titolo: "Argento e oro", testo: "Argenti e ori seguono la stessa scala ovunque. Chi dice «un argento» senza specificare, a Tresil, intende di solito un argento piccolo; per i prezzi importanti si dice sempre il taglio." }
  ],

  salari: [
    { ruolo: "Contadino / bracciante",   giorno: "1 bg",      mese: "~25 bg",    note: "La base economica del mondo" },
    { ruolo: "Operaio (Tresil)",         giorno: "1–2 bg",    mese: "~40 bg",    note: "Lavori manuali in città" },
    { ruolo: "Garzone di bottega",       giorno: "5–8 bm",    mese: "~15 bg",    note: "Vitto spesso compreso" },
    { ruolo: "Guardia / soldato",        giorno: "3–5 bg",    mese: "~1 am",     note: "Milizia o guardia privata" },
    { ruolo: "Scriba / amanuense",       giorno: "3–8 bg",    mese: "~1 am",     note: "Lavoro intellettuale" },
    { ruolo: "Artigiano",                giorno: "5–10 bg",   mese: "~2 am",     note: "Fabbri, falegnami, vasai" },
    { ruolo: "Mastro di gilda",          giorno: "2–5 ap",    mese: "5–10 am",   note: "Con bottega e garzoni" },
    { ruolo: "Mercante medio",           giorno: "—",         mese: "2–20 am",   note: "Dipende dai traffici" }
  ],

  categorie: [
    {
      id: "beni-primari", nome: "Beni primari e cibo", icona: "🌾",
      voci: [
        { nome: "Pane comune (1 pagnotta)",        costo: "1 bp",     note: "Abbondante e accessibile" },
        { nome: "Farina (1 kg)",                   costo: "1 bp",     note: "" },
        { nome: "Cereali / grano (1 kg)",          costo: "2 bp",     note: "" },
        { nome: "Ortaggi freschi (5 porzioni)",    costo: "5 bp",     note: "" },
        { nome: "Salsicce (un paio)",              costo: "3 bp",     note: "Dal macellaio" },
        { nome: "Uova (10)",                       costo: "1 bm",     note: "" },
        { nome: "Gallina viva",                    costo: "3 bm",     note: "" },
        { nome: "Pernici o quaglie (3)",           costo: "5 bm",     note: "Selvaggina da cortile, già spellate" },
        { nome: "Pecora",                          costo: "5 bg",     note: "Lana e carne" },
        { nome: "Maiale vivo",                     costo: "1 ap",     note: "Macellato a stagione" },
        { nome: "Bue da lavoro",                   costo: "1 am",     note: "" },
        { nome: "Sale (1 kg)",                     costo: "2 bm",     note: "" },
        { nome: "Spezie comuni (100 g)",           costo: "5 bm",     note: "Pepe, cannella; lo zafferano costa il doppio" },
        { nome: "Olio da cucina (1 l)",            costo: "3 bm",     note: "" },
        { nome: "Formaggio stagionato (1 kg)",     costo: "5 bm",     note: "" },
        { nome: "Carne salata (1 kg)",             costo: "4 bm",     note: "Si conserva" },
        { nome: "Pesce secco (1 kg)",              costo: "3 bm",     note: "" },
        { nome: "Birra (boccale)",                 costo: "2 bp",     note: "Al Corvo Impiccato, il prezzo per sedersi senza dare nell'occhio", gioco: "Sessione 1 · Cap 2" },
        { nome: "Vino comune (boccale)",           costo: "3 bp",     note: "" },
        { nome: "Vino comune (caraffa)",           costo: "1 bm",     note: "Le locande non lasciano portar via la caraffa" },
        { nome: "Acquavite (bottiglia)",           costo: "3 bm",     note: "" },
        { nome: "Vino pregiato (bottiglia)",       costo: "2 ap",     note: "Da tavola signorile" },
        { nome: "Legna da ardere (fascio)",        costo: "5 bp",     note: "" },
        { nome: "Carbone (sacco)",                 costo: "1 bm",     note: "Per forni e fucine" },
        { nome: "Fieno (balla)",                   costo: "3 bm",     note: "" },
        { nome: "Avena (sacco 10 kg)",             costo: "1 bg",     note: "Foraggio pregiato" }
      ]
    },
    {
      id: "animali-trasporto", nome: "Animali e trasporto", icona: "🐴",
      voci: [
        { nome: "Cavallo (fascia comune)",         costo: "1–5 ag",   note: "Da uno a cinque argenti grandi, a seconda dei denti", gioco: "Sessione 8 · Cap 17 · Guida §10" },
        { nome: "Brocco (cavallo da poco)",        costo: "1 ag",     note: "I più economici della fattoria: criniera spelacchiata, vanno bene per arrivare", gioco: "Sessione 8 · Cap 17" },
        { nome: "Cavallo da sella",                costo: "2–5 ag",   note: "Per viaggi lunghi" },
        { nome: "Cavallo da guerra / destriero",   costo: "1–3 op",   note: "Addestrato e raro" },
        { nome: "Rivendita di un cavallo",         costo: "8 am",     note: "Quanto si recupera da un brocco rivenduto in fretta, tolta la parte di chi fa da tramite", gioco: "Sessione 8 · Cap 17 (due brocchi = 16 am)" },
        { nome: "Mulo",                            costo: "5 am–1 ag", note: "Robusto e ostinato" },
        { nome: "Asino",                           costo: "3–5 am",   note: "Bestia da soma leggera" },
        { nome: "Cane da guardia",                 costo: "3 ap",     note: "Addestrato" },
        { nome: "Piccioni viaggiatori (paio)",     costo: "1 ap",     note: "Per messaggi" },
        { nome: "Stalla per notte (1 animale)",    costo: "2 bp–1 bm", note: "Dipende dalla locanda" },
        { nome: "Fieno e acqua per notte",         costo: "2 bp",     note: "" },
        { nome: "Ferratura",                       costo: "5 bg",     note: "Ogni due o tre mesi" },
        { nome: "Sella in cuoio",                  costo: "2–5 am",   note: "" },
        { nome: "Bardatura completa",              costo: "1–3 am",   note: "Morso, redini, staffe" },
        { nome: "Nolo di un cavallo (al giorno)",  costo: "5 bg–1 ap", note: "Da riportare alla scuderia; chi lo perde lo ripaga" },
        { nome: "Carretto (2 ruote)",              costo: "5 am",     note: "" },
        { nome: "Carro (4 ruote)",                 costo: "2–3 ag",   note: "Per commercio, animali esclusi" },
        { nome: "Barca a remi",                    costo: "3 am",     note: "" },
        { nome: "Barca a vela (piccola)",          costo: "5 ag–1 op", note: "" },
        { nome: "Passaggio su nave (per persona)", costo: "1 ap + 2 bg", note: "Rotta costiera" }
      ]
    },
    {
      id: "locande-servizi", nome: "Locande e viaggio", icona: "🏨",
      voci: [
        { nome: "Stazione di posta (notte)",       costo: "5 bp–1 bm", note: "Lungo le strade principali; pulci comprese nel prezzo", gioco: "Cap 17 (senza cifra)" },
        { nome: "Pernottamento — malfamato",       costo: "5 bp",     note: "Paglia e compagnia dubbia" },
        { nome: "Pernottamento — modesto",         costo: "2 bm",     note: "Letto pulito; se non ci dormi, la notte dopo si ripaga", gioco: "Cap 13 (regola dell'oste di Pozzprofond)" },
        { nome: "Pernottamento — signorile",       costo: "1 ap",     note: "Camera privata" },
        { nome: "Pasto semplice — modesto",        costo: "1 bm",     note: "" },
        { nome: "Pasto completo — modesto",        costo: "3 bm",     note: "Carne e pane" },
        { nome: "Pasto completo — signorile",      costo: "1 bg",     note: "" },
        { nome: "Bagno caldo",                     costo: "2 bm",     note: "" },
        { nome: "Lavanderia (abiti)",              costo: "1 bm",     note: "Un giorno" },
        { nome: "Barbiere / taglio capelli",       costo: "5 bp",     note: "" },
        { nome: "Traghetto / barca breve",         costo: "1–5 bp",   note: "Fiume o canale" },
        { nome: "Noleggio carretto (1 giorno)",    costo: "5 bm",     note: "" },
        { nome: "Messaggero in città",             costo: "2 bm",     note: "" },
        { nome: "Corriere urgente (extraurbano)",  costo: "5 bg–1 ap", note: "Dipende dalla distanza" },
        { nome: "Scorta armata (1 giorno, a testa)", costo: "5 bg–1 ap", note: "Più cara in montagna e verso est" },
        { nome: "Annuncio in bacheca",             costo: "1–3 bm",   note: "Alla Rosa dei Venti l'oste lo appende accanto alle richieste di lavoro" }
      ]
    },
    {
      id: "abbigliamento", nome: "Abbigliamento", icona: "👗",
      voci: [
        { nome: "Abiti usati dal rigattiere (giubba e brache)", costo: "4 bm", note: "Qualche strappo, orli consumati, presentabili", gioco: "Sessione 10 · Cap 19 (Karl)" },
        { nome: "Tunica di lana e velo semplice (usati)", costo: "3 bm", note: "Tirando sul prezzo; senza contrattare, un bronzo grande", gioco: "Sessione 10 · Cap 19 (Zoraya)" },
        { nome: "Vestiario semplice (nuovo)",      costo: "5 bm",     note: "Lino grezzo" },
        { nome: "Vestiario da viaggio",            costo: "1 bg",     note: "Resistente e pratico" },
        { nome: "Abiti da artigiano",              costo: "2 bg",     note: "Lana e cotone" },
        { nome: "Vestiario invernale",             costo: "5 bg",     note: "Pesante e caldo" },
        { nome: "Abito borghese / da festa",       costo: "1 ap",     note: "Ben cucito" },
        { nome: "Abito nobile su misura",          costo: "1–5 am",   note: "Tinture pregiate: a Tresil i colori dicono la classe" },
        { nome: "Mantello comune",                 costo: "5 bm",     note: "" },
        { nome: "Mantello pregiato",               costo: "5 bg",     note: "Cappuccio foderato" },
        { nome: "Stivali in cuoio",                costo: "3 bg",     note: "" },
        { nome: "Sandali semplici",                costo: "1 bm",     note: "" },
        { nome: "Guanti in cuoio",                 costo: "1 bg",     note: "" },
        { nome: "Cappello / copricapo",            costo: "5 bm–3 bg", note: "Piume e stoffe costano di più" },
        { nome: "Tessuto comune (1 m)",            costo: "1 bm",     note: "Lino, lana grezza" },
        { nome: "Tessuto pregiato (1 m)",          costo: "1 ap",     note: "Seta, velluto" },
        { nome: "Ago e filo",                      costo: "2 bp",     note: "" }
      ]
    },
    {
      id: "armi-armature", nome: "Armi e armature", icona: "⚔️",
      voci: [
        { nome: "Spada media «di un mastro», con fodero e miscela", costo: "4 am", note: "Marchio di gilda al tallone; l'armaiolo ne chiedeva sei, Rei l'ha stimata due", gioco: "Sessione 9 · Cap 18" },
        { nome: "Spada comune",                    costo: "2 am",     note: "Non è roba fine: il prezzo onesto secondo Rei", gioco: "Sessione 9 · Cap 18 (stima di Rei)" },
        { nome: "Spada con marchio di gilda",      costo: "3–5 am",   note: "Firmata da un mastro" },
        { nome: "Fodero in cuoio",                 costo: "3 ap",     note: "" },
        { nome: "Miscela per pulire la lama (boccetta)", costo: "2 bm", note: "" },
        { nome: "Pugnale / coltello da lancio",    costo: "3–5 ap",   note: "" },
        { nome: "Lancia",                          costo: "5 ap",     note: "" },
        { nome: "Ascia da guerra",                 costo: "1 am",     note: "" },
        { nome: "Martello da guerra",              costo: "1 am",     note: "" },
        { nome: "Arco corto",                      costo: "5 ap",     note: "" },
        { nome: "Arco lungo",                      costo: "1 am",     note: "" },
        { nome: "Balestra",                        costo: "3 am",     note: "" },
        { nome: "Frecce (20)",                     costo: "2 bg",     note: "" },
        { nome: "Dardi per balestra (20)",         costo: "3 bg",     note: "" },
        { nome: "Scudo in legno",                  costo: "5 ap",     note: "" },
        { nome: "Scudo di frassino cerchiato di ferro", costo: "1 am", note: "Da Mastro Balsan, «al prezzo giusto o quasi»: la cifra esatta non è stata detta", gioco: "Sessione 9 · Cap 18 (prezzo stimato)" },
        { nome: "Scudo in ferro",                  costo: "2 am",     note: "" },
        { nome: "Armatura di cuoio",               costo: "1 am",     note: "" },
        { nome: "Armatura di maglia",              costo: "5 am–1 ag", note: "" },
        { nome: "Armatura di piastre (parziale)",  costo: "2 ag",     note: "" },
        { nome: "Armatura completa su misura",     costo: "2–5 op",   note: "Le armature di famiglia non hanno prezzo" }
      ]
    },
    {
      id: "equipaggiamento", nome: "Equipaggiamento da avventura", icona: "🎒",
      voci: [
        { nome: "Zaino da viaggio",                costo: "1 bg",     note: "Tela cerata" },
        { nome: "Sacca / borsellino di cuoio",     costo: "5 bm",     note: "" },
        { nome: "Tenda da campo",                  costo: "2 bg",     note: "" },
        { nome: "Sacco a pelo / coperta spessa",   costo: "5 bm",     note: "" },
        { nome: "Razioni da viaggio (1 giorno)",   costo: "1 bm",     note: "Pane secco e carne salata" },
        { nome: "Razioni da campo (7 giorni)",     costo: "1 bg",     note: "Con formaggi e legumi" },
        { nome: "Otre d'acqua (2 l)",              costo: "1 bp",     note: "" },
        { nome: "Fiaschetta in pelle o metallo",   costo: "1 bm",     note: "" },
        { nome: "Corda (10 m, canapa)",            costo: "5 bm",     note: "" },
        { nome: "Rampino",                         costo: "3 bg",     note: "" },
        { nome: "Torcia",                          costo: "1 bp",     note: "Circa un'ora" },
        { nome: "Lanterna semplice",               costo: "2 bm",     note: "Quattro ore con l'olio" },
        { nome: "Olio per lanterna (fiasca)",      costo: "1 bm",     note: "" },
        { nome: "Acciarino e pietra focaia",       costo: "1 bm",     note: "" },
        { nome: "Candele (10)",                    costo: "5 bp",     note: "" },
        { nome: "Piccone / pala",                  costo: "2–5 bm",   note: "" },
        { nome: "Grimaldelli (set)",               costo: "3 ap",     note: "Possederli, a Tresil, è già sospetto" },
        { nome: "Bussola",                         costo: "2 ap",     note: "" },
        { nome: "Mappa locale (a mano)",           costo: "2 bm",     note: "" },
        { nome: "Mappa regionale accurata",        costo: "2 ap",     note: "Verso est non ne esistono di affidabili" },
        { nome: "Cannocchiale",                    costo: "5 am",     note: "Raro" },
        { nome: "Telo cerato (3×3 m)",             costo: "5 bm",     note: "" }
      ]
    },
    {
      id: "inchiostri-scrittura", nome: "Inchiostri, carta e lettura", icona: "🖋️",
      voci: [
        { nome: "Boccetta di vetro vuota",         costo: "1 bm",     note: "Dal vetraio: il vetro costa più di quello che ci si mette dentro", gioco: "Cap 13 (Pozzprofond)" },
        { nome: "Inchiostro di seppia (riempire una boccetta)", costo: "1 bp", note: "Dal pescivendolo, a boccette portate da sé; nel libro pagato in rami di Ferrath", gioco: "Cap 13 (quattro rami piccoli per quattro boccette)" },
        { nome: "Inchiostro da scrivere (boccetta)", costo: "1–2 bm", note: "Bottega di articoli da scrittura" },
        { nome: "Inchiostro di qualità rara",      costo: "1 ap e oltre", note: "Pigmenti, metalli, ingredienti rituali: il prezzo lo fa la ricetta" },
        { nome: "Pergamena (foglio)",              costo: "1 bm",     note: "" },
        { nome: "Penna a serbatoio",               costo: "2 ap",     note: "Si carica da sé e versa l'inchiostro nel pennino" },
        { nome: "Materiali da scrittura (set)",    costo: "5 bg",     note: "Inchiostro, penne, pergamene" },
        { nome: "Libro comune (copiato a mano)",   costo: "5 bg–2 ap", note: "Prezzo per volume" },
        { nome: "Trattato o ricettario raro",      costo: "1–5 am",   note: "Se è in vendita" },
        { nome: "Biblioteche della Croce — garanzia di un cittadino", costo: "1 ap", note: "Firma del garante e lasciapassare valido fino alla stessa ora del giorno dopo", gioco: "Sessioni 9–10 · Cap 18" },
        { nome: "Biblioteche della Croce — ricerche (al giorno)", costo: "1 ap", note: "Una ricerca può durare fino a due settimane: «quindici argenti piccoli per leggere»", gioco: "Sessione 9 · Cap 18" },
        { nome: "Bollo della garanzia",            costo: "3 bm",     note: "Pagato dal garante; al tavolo «tre monete di rame», che a Tresil sono bronzi", gioco: "Sessione 10 (cifra da confermare)" }
      ]
    },
    {
      id: "strumenti-mestieri", nome: "Strumenti e mestieri", icona: "🔨",
      voci: [
        { nome: "Kit da guaritore",                costo: "5 ap",     note: "Bende, erbe, unguenti" },
        { nome: "Kit da carpentiere",              costo: "3 ap",     note: "" },
        { nome: "Kit da fabbro",                   costo: "5 ap",     note: "Pinze, martello, incudine da campo" },
        { nome: "Kit da cuoiaio",                  costo: "2 ap",     note: "" },
        { nome: "Kit da cucito",                   costo: "5 bp",     note: "" },
        { nome: "Strumento musicale semplice",     costo: "2 bg",     note: "Flauto, tamburello" },
        { nome: "Strumento musicale pregiato",     costo: "5 am",     note: "Liuto, violino" },
        { nome: "Mazzo di carte",                  costo: "2 bm",     note: "" },
        { nome: "Lanterna pregiata (ferro e vetri colorati)", costo: "1–3 ap", note: "Lavoro di bottega; le lanterne della memoria non si comprano" },
        { nome: "Sigillo di cera personale",       costo: "1 ap",     note: "" },
        { nome: "Bilancia da mercante",            costo: "3 ap",     note: "Con pesi certificati" },
        { nome: "Abaco",                           costo: "1 bg",     note: "" },
        { nome: "Lucchetto in ferro",              costo: "2 bg",     note: "" },
        { nome: "Catena (1 m)",                    costo: "1 bg",     note: "" },
        { nome: "Limatura di ferro (sacchetto)",   costo: "5 bm",     note: "Dalle fucine" },
        { nome: "Trappola per animali",            costo: "2 bg",     note: "" },
        { nome: "Rete da pesca",                   costo: "3 bg",     note: "" }
      ]
    },
    {
      id: "servizi-cure", nome: "Cure, servizi e burocrazia", icona: "📜",
      voci: [
        { nome: "Guaritore (ferite comuni)",       costo: "1 ap–1 am", note: "Dipende dalla gravità; alcuni chiedono favori invece di denaro" },
        { nome: "Chierico o guaritore di fama",    costo: "1 am–1 ag", note: "Per chi è ridotto «da moribondo»" },
        { nome: "Braccio nuovo",                   costo: "~20 om",   note: "Solo su ferita fresca, da guaritori molto bravi: «un principe ci pensa due volte»", gioco: "Sessione 10 · Cap 19 (Gabbo)" },
        { nome: "Dentista",                        costo: "5 bm–1 ap", note: "" },
        { nome: "Documento ufficiale (redazione)", costo: "1 ap",     note: "Presso uno scriba" },
        { nome: "Lasciapassare / passaporto",      costo: "3 ap",     note: "Timbro incluso" },
        { nome: "Notaio / sigillo ufficiale",      costo: "5 bm",     note: "Per un documento semplice" },
        { nome: "Consulenza legale (1 ora)",       costo: "2 ap",     note: "Ordine dei Magistrati" },
        { nome: "Causa legale (mediazione di gilda)", costo: "5 ap–1 am", note: "" },
        { nome: "Permesso commerciale (Tresil)",   costo: "1 ag",     note: "All'anno" },
        { nome: "Traduttore (1 giorno)",           costo: "5 bg",     note: "" },
        { nome: "Istruzione privata (1 mese)",     costo: "5 ap",     note: "Lettura, aritmetica" },
        { nome: "Funerale semplice",               costo: "2 ap",     note: "" },
        { nome: "Funerale con cerimonia",          costo: "1 ag",     note: "" }
      ]
    },
    {
      id: "compensi-patrimoni", nome: "Compensi, patrimoni e varie", icona: "💰",
      voci: [
        { nome: "Ingaggio per una sceneggiata (un litigio in pubblico)", costo: "4 am", note: "Uno subito come pegno, tre a lavoro fatto", gioco: "Sessione 1 · Cap 2 (Kaf a Rei)" },
        { nome: "Posta di una mano a carte (Via dei Pozzi)", costo: "1 bp", note: "Da Gabbo si paga un bronzo o una storia, che si vinca o si perda", gioco: "Sessione 10 · Cap 19" },
        { nome: "Mancia generosa / dono a un ragazzo per partire", costo: "2 am", note: "Quanto Nikla ha dato a Raffa: per lui, una fortuna", gioco: "Sessione 6 · Cap 14" },
        { nome: "Locanda di città (l'edificio)",   costo: "1–3 om",   note: "Due sacchetti d'oro dei tre della Rosa Storta bastavano «per comprare tre locande come questa»", gioco: "Sessione 8 · Cap 17 (stima)" },
        { nome: "Bottega artigiana con attrezzi",  costo: "2–5 op",   note: "" },
        { nome: "Casa popolare (una stanza in affitto, al mese)", costo: "5 bg", note: "Anche otto persone per stanza, senza bagno né cucina" },
        { nome: "Casa di famiglia con officina",   costo: "5 op",     note: "Ai Cantieri" }
      ]
    }
  ],

  // Registro del tavolo (solo pagina Furiosa): prezzi e somme passati di
  // mano in gioco, in ordine di sessione. «fonte» = sessione e capitolo.
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
    { quando: "Sessione 8", cosa: "Sacchetto di Whilliam (dai tre della Rosa Storta)", cifra: "+4 om e 2 op",          fonte: "Cap 17" },
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
    { quando: "Sessione 10", cosa: "Tunica e velo per Zoraya",                         cifra: "3 bm (o 1 bg senza velo)", fonte: "Cap 19 · nota Sessione 10" }
  ],

  // Cosa è cambiato rispetto al vecchio listino di Tresil (per il master)
  modifiche: [
    "Cavalli: da 1–5 am a 1–5 argenti grandi (canone del gioco e del libro). Muli, asini, selle e carri riallineati di conseguenza.",
    "Spade: la spada comune vale 2 am e una spada «di un mastro» 4 am, come al tavolo; pugnali, archi, scudi e armature ricalcolati sulla stessa scala.",
    "Corrette le equivalenze sbagliate del vecchio listino (per esempio «5 ag = 5000 bp»: in realtà 5 ag = 500.000 bp). Ora la pagina le calcola da sola dalla sigla.",
    "Salari: il mese dell'artigiano e del mercante riportati sulla scala giornaliera (un mercante medio guadagnava, per errore, più di una locanda al mese).",
    "Nuove categorie: inchiostri e biblioteche (prezzi della Croce detti in gioco) e compensi e patrimoni (ingaggi, mance, il valore di una locanda)."
  ]
};
