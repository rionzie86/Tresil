// ============================================================
// TRESIL WIKI — data.js v2
// ============================================================

const TRESIL_DATA = {

  meta: {
    titolo: "Archivio di Tresil",
    sottotitolo: "Campagna D&D — Archivio del Dungeon Master",
    dataAttuale: "34 del 4° mese",
    prossimaDestinazione: "Conceria di Fossolento — infiltrazione notturna"
  },

  mappe: {
    tresil: [
      {
        id: "pin-fontana-opale",
        nome: "La Fontana d'Opale",
        x: 51.5, y: 63.2,
        tooltip: "Locanda di Siona Vass — quartiere popolare",
        sezione: "fazioni", ancora: null,
        colore: "#5ab48f"
      },
      {
        id: "pin-balsan",
        nome: "Casa di Balsan",
        x: 47.8, y: 60.8,
        tooltip: "Abitazione di Balsan — artigiano salvato dal gruppo",
        sezione: "personaggi", ancora: "pg-balsan",
        colore: "#5a8fd4"
      },
      {
        id: "pin-mugnai",
        nome: "Via Antichi Mugnai 12/b",
        x: 40.2, y: 62.0,
        tooltip: "La casa del gruppo — acquistata dalla padrona di Miss Sunshineflower",
        sezione: null, ancora: null,
        colore: "#c9a84c"
      },
      {
        id: "pin-kareen",
        nome: "Casa di Kareen",
        x: 35.8, y: 55.5,
        tooltip: "Kareen Vella — lavandaia, ha trovato Han nella fontana",
        sezione: null, ancora: null,
        colore: "#5a8fd4"
      },
      {
        id: "pin-biblioteca",
        nome: "Biblioteca e Università",
        x: 63.4, y: 51.8,
        tooltip: "Rettrice: Melira Voan — centro del sapere di Tresil",
        sezione: "personaggi", ancora: "pg-melira",
        colore: "#8f72d4"
      },
      {
        id: "pin-villa-urbech",
        nome: "Villa Urbech",
        x: 54.8, y: 46.2,
        tooltip: "Villa maledetta — patto con fatato corrotto dalla famiglia Urbech",
        sezione: "sessioni", ancora: "sess-s-11",
        colore: "#c45a5a"
      }
    ]
  },

  sezioni: [
    { id: "panoramica",    label: "Panoramica",      icona: "◈" },
    { id: "personaggi",    label: "Personaggi",      icona: "◉" },
    { id: "sessioni",      label: "Sessioni",        icona: "◎" },
    { id: "ambientazione", label: "Ambientazione",   icona: "◇" },
    { id: "fazioni",       label: "Fazioni & Gilde", icona: "◆" },
    { id: "oggetti",       label: "Oggetti",         icona: "◌" },
    { id: "economia",      label: "Economia",        icona: "◎" },
    { id: "mappe",         label: "Mappe",           icona: "◉" },
    { id: "lore",          label: "Lore Segreta",    icona: "◑" },
    { id: "thread",        label: "Thread Aperti",   icona: "◐" },
    { id: "note",          label: "Note DM",         icona: "◻" }
  ],

  glossario: {
    "fatati":                    { sezione: "lore",          voce: "fatati-natura",    label: "Fatati — vera natura" },
    "fatato":                    { sezione: "lore",          voce: "fatati-natura",    label: "Fatati — vera natura" },
    "M":                         { sezione: "lore",          voce: "M-antagonista",    label: "M — l'antagonista",         soloMaster: true },
    "Ravok":                     { sezione: "lore",          voce: "ravok",            label: "Ravok",                     soloMaster: true },
    "collari":                   { sezione: "oggetti",       voce: "ichnusite",        label: "Ichnusite & collari" },
    "collare":                   { sezione: "oggetti",       voce: "ichnusite",        label: "Ichnusite & collari" },
    "ichnusite":                 { sezione: "oggetti",       voce: "ichnusite",        label: "Ichnusite & collari",       soloMaster: true },
    "mondo dei sogni":           { sezione: "ambientazione", voce: "piani",            label: "I Tre Piani" },
    "mondo dei sogni condivisi": { sezione: "ambientazione", voce: "piani",            label: "I Tre Piani" },
    "Primo Olmo":                { sezione: "lore",          voce: "primi-sorelle",    label: "I Primi & le Sei Sorelle" },
    "Sei Sorelle":               { sezione: "lore",          voce: "primi-sorelle",    label: "I Primi & le Sei Sorelle" },
    "Viandante dei Sogni":       { sezione: "lore",          voce: "viandante",        label: "Il Viandante dei Sogni",    soloMaster: true },
    "Shpada":                    { sezione: "oggetti",       voce: "shpada",           label: "Shpada" },
    "Tresil":                    { sezione: "ambientazione", voce: "tresil-citta",     label: "Tresil — la città" },
    "Casa della Fase":           { sezione: "ambientazione", voce: "casa-fase-nano",    label: "La Casa della Fase del Nano" },
    "nano scontroso":            { sezione: "ambientazione", voce: "casa-fase-nano",    label: "La Casa della Fase del Nano" },
    "Elia Varnis":               { sezione: "personaggi",    voce: "elia",             label: "Elia Varnis" },
    "Aurora di Mare":            { sezione: "ambientazione", voce: "aurora-del-mare",  label: "Aurora di Mare" },
    "ballata":                   { sezione: "ambientazione", voce: "ballata-ruder",    label: "Ballata dei Briganti di Ruder" },
    "Fossolento":                { sezione: "ambientazione", voce: "fossolento",       label: "Fossolento" },
    "Kaelvaran":                 { sezione: "ambientazione", voce: "kaelvaran",        label: "Kaelvaran — il mondo" },
    "Sesto Continente":          { sezione: "ambientazione", voce: "sesto-continente", label: "Il Sesto Continente" },
    "Larimar":                   { sezione: "personaggi",    voce: "larimar",          label: "Larimar" },
    "Naru":                      { sezione: "personaggi",    voce: "naru",             label: "Naru" },
    "Osiris":                    { sezione: "personaggi",    voce: "osiris",           label: "Osiris" },
    "Han":                       { sezione: "personaggi",    voce: "han",              label: "Han" },
    "Verlek":                    { sezione: "personaggi",    voce: "verlek",           label: "Verlek Tre Occhi" },
    "Axelions":                  { sezione: "personaggi",    voce: "axelions",         label: "Axelions" },
    "Balsan":                    { sezione: "personaggi",    voce: "balsan",           label: "Balsan" },
    "Tobin Hurrell":             { sezione: "personaggi",    voce: "tobin-hurrell",    label: "Tobin Hurrell" },
    "Serca":                     { sezione: "personaggi",    voce: "serca",            label: "Serca" },
    "Eldran Vossi":              { sezione: "personaggi",    voce: "eldran-vossi",     label: "Eldran Vossi" },
    "Lina Storta":               { sezione: "personaggi",    voce: "lina-storta",      label: "Lina Storta" },
    "Jorad":                     { sezione: "personaggi",    voce: "jorad",            label: "Jorad" },
    "Kareen":                    { sezione: "personaggi",    voce: "kareen",           label: "Kareen Vella" },
    "Kareen Vella":              { sezione: "personaggi",    voce: "kareen",           label: "Kareen Vella" },
    "Rock":                      { sezione: "personaggi",    voce: "rock",             label: "Rock" },
    "Siona":                     { sezione: "personaggi",    voce: "siona",            label: "Siona Vass" },
    "Siona Vass":                { sezione: "personaggi",    voce: "siona",            label: "Siona Vass" },
    "Fontana d'Opale":           { sezione: "personaggi",    voce: "siona",            label: "Siona Vass — Fontana d'Opale" },
    "Rosa d'Ombra":              { sezione: "fazioni",       voce: "rosa-ombra",       label: "Rosa d'Ombra" },
    "Mano d'Ottone":             { sezione: "fazioni",       voce: "mano-ottone",      label: "Mano d'Ottone" },
    "Consiglio dei Tre":         { sezione: "ambientazione", voce: "tresil-citta",     label: "Tresil — la città" },
    "collana di pietra lunare":  { sezione: "oggetti",       voce: "collana-luna",     label: "Collana di Pietra Lunare" },
    "Pietra del Patto":          { sezione: "oggetti",       voce: "pietra-patto",     label: "Pietra del Patto",          soloMaster: true },
    "frammento":                 { sezione: "oggetti",       voce: "frammenti",        label: "Frammenti delle Sei Sorelle" },
    "frammenti":                 { sezione: "oggetti",       voce: "frammenti",        label: "Frammenti delle Sei Sorelle" }
  },

  personaggi: {
    pg: [
      {
        id: "larimar", nome: "Larimar", giocatore: "Laura", tipo: "pg",
        colore: "#7F77DD", iniziali: "L",
        tag: ["Semi-fatata", "Mondo dei sogni", "Nutrimento onirico", "Telepatia con Naru"],
        descrizione: "Semi-fatata. Altezza ~1,55–1,58 m. Capelli trasformati in neri per non attirare attenzione. Piume sul collo dopo il contatto con Han.",
        loreGiocatori: "Può camminare liberamente nel mondo dei sogni — per lei è dormire, ma nel reale è inconscia. Le bastano 2 ore a notte. Si nutre di emozioni nel mondo dei sogni: amplifica l'emozione del sognatore, la estrae fisicamente, il sogno fa un rebound verso il polo opposto. Ha acquisito la capacità di sognare (prima non la aveva). Possiede la collana di pietra lunare. Ha dichiarato di non voler usare poteri in pubblico sulla nave.",
        loreMaster: "Il suo vero aspetto — noto ai giocatori ma ignoto a Larimar come personaggio — è quello della creatura gobba verdastra che appare nei sogni di Han: pelle verdastra bianchiccia umida, sopracciglio molto prominente, capelli con chiazze vuote, armata di lancia. Han la percepisce così normalmente. Osiris lo ha intravisto un paio di volte in un riflesso.\n\nHa visto nel sogno di Osiris che questa sogna Larimar chiedere un legame fatato — non l'ha detto a nessuno.\n\nNella sessione del bosco di Ruder ha visto la bolla di Han circondata da fatati che lo osservavano.",
        note: "Prima comunicazione telepatica bidirezionale involontaria con Naru durante la traversata. Larimar è la più leggibile per Naru tra i compagni."
      },
      {
        id: "naru", nome: "Naru", giocatore: "Jacopo", tipo: "pg",
        colore: "#E24B4A", iniziali: "N",
        tag: ["Volontà = realtà", "Shpada", "'Abominio'", "Telepatia involontaria"],
        descrizione: "Altezza ~1,68 m. Ha ricevuto il coltellino d'osso da Verlek Tre Occhi (valore affettivo). Ha detto al gruppo di non entrare nei suoi sogni.",
        loreGiocatori: "La sua volontà plasma la realtà. Possiede Shpada, una katana che muta forma rispondendo alla sua volontà — può richiamarla a distanza, percepirne la presenza, ricoprirsene per poi estrarla dalla propria pelle. Ha scoperto di poter influenzare carne e salute con la volontà. Ha incontrato Yome Musashi (prove). Sta sviluppando capacità telepatiche involontarie.",
        loreMaster: "L'ordine di Naru implanta un incubo rituale nei discepoli: attraverso questo incubo i maestri trasmettono i poteri. Naru è stato impiantato per errore a 8 anni. Il rituale cancella tutti i ricordi precedenti. Naru non sa che i ricordi sono stati cancellati — per lui non c'è un 'prima'.\n\nCrede di non sognare perché non ricorda il suo unico sogno ricorrente: lago di latte, coste di pietra nera, tentacoli che cercano di ghermirlo. Larimar ha vissuto questo sogno dall'interno nella prima sessione, riportandone una cicatrice reale.\n\nLo spirito del bosco di Ruder lo ha chiamato 'abominio' percependone la natura anomala.",
        note: "Telepatia in sviluppo: canale con Larimar (bidirezionale, richiede concentrazione), canale con Han (persistente e passivo — come 'ridotto a icona', rimane attivo senza concentrazione). Con estranei percepisce solo emozioni di superficie. Non riesce a raggiungere Musashi. Conflitto irrisolto con Osiris dopo il litigio a Poz Profondo."
      },
      {
        id: "osiris", nome: "Osiris", giocatore: "Giulia", tipo: "pg",
        colore: "#1D9E75", iniziali: "O",
        tag: ["Legame con oggetti", "Moneta della fortuna", "Trauma fratello"],
        descrizione: "Altezza ~1,60–1,63 m. I genitori, ex avventurieri diventati abbienti, le hanno trasmesso il valore sacro dell'ospitalità.",
        loreGiocatori: "Forte legame con gli oggetti, affinità con armi da lancio. Possiede la moneta della fortuna (proprietà a lei sconosciute). Conflitto irrisolto con Naru dopo la notte nel bosco di Ruder.",
        loreMaster: "Ha intravisto il vero aspetto di Larimar (creatura verdastra) in un riflesso un paio di volte ma non l'ha detto a nessuno.\n\nSogna inconsciamente Larimar che le chiede un legame fatato. Larimar lo sa, Osiris no.\n\nSogni con traumi: fratello che la rifiuta, senso di abbandono, mostri nel bosco.\n\nÈ la più difficile da percepire telepaticamente per Naru — motivo ancora da definire.",
        note: "Andata a letto senza chiarimento con Naru dopo il litigio ('La famiglia fa schifo')."
      },
      {
        id: "han", nome: "Han", giocatore: "PNG", tipo: "png",
        colore: "#BA7517", iniziali: "H",
        tag: ["Discendente Primo Olmo", "Umanizzazione rapida", "Piante sì — animali no"],
        descrizione: "Ex mezzo bambino mezzo uccello. Ora simile a un adolescente allampanato con naso aquilino, piume residue, buco nel petto allargato. Trovato originariamente nella fontana con collare inciso 'Han', senza memoria.",
        loreGiocatori: "Discendente del Primo Olmo. Umanizzazione in corso: piume quasi tutte scomparse, becco caduto. Ha perso il legame con gli animali. Conserva il potere sulle piante. Ora abbastanza umano da viaggiare senza attirare attenzione. Sogna per la prima volta dopo la liberazione dal bosco.\n\nLontano dalla terra ferma non riesce a mangiare né bere — vomita ripetutamente. Il contatto con la terra lo ristabilizza. Si è rivelato involontariamente vegano: tollera solo alimenti vegetali.\n\nNaru ha stabilito con lui una connessione telepatica persistente e bidirezionale — rimane attiva passivamente come 'ridotto a icona' senza richiedere concentrazione.\n\nNome falso in copertura a Fossolento: Delforio.",
        loreMaster: "Bolla onirica con striature dorate anomale ('occhio di tigre'). Nel sogno appare il Viandante dei Sogni — futuro mentore di Larimar.\n\nHa vomitato vermi neri e marroni senza memoria dell'evento.\n\nIl gatto di Verlek lo ha graffiato in modo anomalo — gli animali percepiscono qualcosa di strano in lui.",
        note: "Ha abbracciato Osiris spontaneamente singhiozzando — primo contatto fisico diretto autonomo. Forte imbarazzo dopo il primo utilizzo del bagno."
      }
    ],
    png: [
      {
        id: "verlek", nome: "Verlek Tre Occhi", tipo: "png",
        colore: "#888780", iniziali: "VT",
        tag: ["Mercante itinerante", "Intagliatore di ossa", "Poz Profondo"],
        descrizione: "Mercante itinerante e intagliatore di ossa. Vive a Poz Profondo con la nipotina Sora nella Casa Azzurrina.",
        loreGiocatori: "Già incontrato in precedenza: fu derubato da briganti, il gruppo lo aiutò. Ha fornito informazioni sulla conceria di Fossolento. Ha regalato a Naru un coltellino d'osso intagliato a mano.",
        loreMaster: "", note: "La statuetta incompiuta sul tornio è un dettaglio di colore. I genitori di Sora sono scomparsi in mare — nessun subplot previsto."
      },
      {
        id: "sora", nome: "Sora", tipo: "png",
        colore: "#888780", iniziali: "S",
        tag: ["Nipote di Verlek", "Poz Profondo"],
        descrizione: "Nipotina di Verlek Tre Occhi. Bambina solare.",
        loreGiocatori: "Vive con il nonno Verlek nella Casa Azzurrina di Poz Profondo.",
        loreMaster: "", note: ""
      },
      {
        id: "viandante", nome: "Il Viandante dei Sogni", tipo: "png",
        colore: "#7F77DD", iniziali: "VD",
        tag: ["Solo Master", "Futuro mentore di Larimar"],
        descrizione: "Figura misteriosa che appare nel sogno di Han: uomo barbuto dal singolo occhio.",
        loreGiocatori: "",
        loreMaster: "È un viandante del mondo dei sogni. Diventerà il mentore di Larimar. Nome e dettagli ancora da definire. La sua comparsa nella bolla dorata anomala di Han suggerisce connessione con la stirpe del Primo Olmo.",
        note: "", soloMaster: true
      },
      {
        id: "balsan", nome: "Balsan", tipo: "png",
        colore: "#888780", iniziali: "B",
        tag: ["Ex avventuriero", "Fabbro", "Figura fidata", "Casa del gruppo"],
        descrizione: "Ex avventuriero e fabbro di grande talento, specializzato in piccoli meccanismi complessi — serrature, ingranaggi, congegni di precisione. Uomo apparentemente burbero, con mani callose e poche parole, ma dal cuore d'oro che fatica a nascondere. Vive a Tresil da anni dopo aver abbandonato la vita d'avventura. Non parla mai della moglie.",
        loreGiocatori: "Ha viaggiato in passato con i genitori di Osiris — erano compagni d'avventura. Ha liberato Han dal collare. Ha contattato Tarn Orest per indagare su Ravok. Dopo essere stato salvato dal gruppo li ha invitati a restare a casa sua a tempo indeterminato, ed è sempre pronto ad aiutarli. Si comporta in modo particolarmente affettuoso con Larimar e Han.\n\nHa smesso di forgiare qualsiasi tipo di arma. Il gruppo ha dedotto — senza che lui lo confermasse — che un cliente a cui aveva forgiato un bel coltello ha poi ucciso sua figlia. Non ne ha mai parlato direttamente.\n\nSembra avere una tresca con Kareen.",
        loreMaster: "Il trauma della figlia è reale e profondo. Non ne parlerà mai spontaneamente — ma potrebbe aprirsi se qualcuno si guadagna davvero la sua fiducia in modo del tutto disinteressato. La sua riluttanza a forgiare armi è assoluta: nessuna somma di denaro o argomento lo farà cambiare idea.\n\nIl rapporto con Kareen è romantico ma entrambi lo tengono sottotraccia — lei per pudore davanti al figlio Rock, lui per il suo carattere schivo.",
        note: "Ha partecipato alla quest della Casa della Fase del Nano con i genitori di Osiris e sua zia per riportare in vita la madre di Osiris. È uno dei pochi a conoscere quella storia — e l'ha rivelata solo ubriaco."
      },
      {
        id: "kareen", nome: "Kareen Vella", tipo: "png",
        colore: "#5ab48f", iniziali: "KV",
        tag: ["Lavandaia", "Informatrice", "Madre di Rock", "Quartiere"],
        descrizione: "Lavandaia energica e sempre sorridente, Kareen è il cuore pulsante del suo vicolo. Conosce i segreti di ogni famiglia del quartiere — non per pettegolezzo, ma perché la gente si confida con lei naturalmente. Madre di Rock, un ragazzino vivace e sveglio. Tratta chiunque come se fosse sua responsabilità personale prendersene cura.",
        loreGiocatori: "È stata lei a trovare Han caduto nella fontana — collare inciso 'Han', senza memoria. Ha una soffitta piena di vestiti mai ritirati dai clienti, accumulati negli anni. Ogni Festa delle Lanterne vende quello che riesce e dona il ricavato in beneficenza. Osiris ha ingaggiato suo figlio Rock per raccogliere informazioni nel quartiere con i suoi amici.\n\nSembra avere una tresca con Balsan.",
        loreMaster: "",
        note: "Rock è un PNG utile per far arrivare al gruppo voci e informazioni dal basso — i ragazzini di strada sentono tutto. Kareen non sa che il figlio lavora per Osiris e probabilmente non sarebbe contenta."
      },
      {
        id: "rock", nome: "Rock", tipo: "png",
        colore: "#5ab48f", iniziali: "R",
        tag: ["Figlio di Kareen", "Informatore", "Ragazzino"],
        descrizione: "Figlio di Kareen Vella, ragazzino vivace e curioso con un naso infallibile per i guai — e per le informazioni interessanti. Conosce ogni angolo del quartiere e ha una rete di amici altrettanto svegli.",
        loreGiocatori: "Osiris lo ha ingaggiato per raccogliere voci e informazioni nel quartiere insieme ai suoi amici. È entusiasta del compito e si prende molto sul serio il ruolo.",
        loreMaster: "Kareen non sa che il figlio lavora per Osiris. Se lo scoprisse potrebbe essere una fonte di tensione con il gruppo — o di complicità, dipende da come viene gestito.",
        note: ""
      },
      {
        id: "siona", nome: "Siona Vass", tipo: "png",
        colore: "#c9a84c", iniziali: "SV",
        tag: ["Fontana d'Opale", "Locandiera", "Quartiere"],
        descrizione: "Proprietaria della Fontana d'Opale, la locanda di quartiere più amata di Tresil. Capelli biondo scuro intrecciati, occhi color nocciola sempre premurosi. Generosa, inclusiva e instancabile — tiene in piedi il locale con la stessa cura con cui si prenderebbe cura di una famiglia numerosa. Ogni mattina getta un fiore bianco nella fontana al centro del locale come offerta alla prosperità del quartiere.",
        loreGiocatori: "Ha gestito con calma la situazione del marinaio che aveva rigurgitato un fatato nel suo locale. La Fontana d'Opale è uno dei luoghi di ritrovo abituali del gruppo nel quartiere. Cucina casereccia, ambiente allegro, prezzi onesti.",
        loreMaster: "",
        note: "La Fontana d'Opale è un ottimo punto d'incontro neutrale per il gruppo — Siona non fa domande ma ascolta tutto."
      },
      {
        id: "tarn", nome: "Tarn Orest", tipo: "png",
        colore: "#888780", iniziali: "TO",
        tag: ["Vicecapitano guardie muro est"],
        descrizione: "Vicecapitano delle guardie del muro est. Vecchio amico di Balsan.",
        loreGiocatori: "Sta indagando su Ravok. Ha comunicato: quartiere di Ravok raso al suolo, Brana Kar morta nel sonno.",
        loreMaster: "", note: ""
      },
      {
        id: "axelions", nome: "Axelions", tipo: "png",
        colore: "#378ADD", iniziali: "AX",
        tag: ["Discendente dei Primi", "Laboratorio Sole Velato"],
        descrizione: "Discendente dei Primi. Trovato in sospensione in un laboratorio nelle caverne di Sole Velato.",
        loreGiocatori: "Vissuto prima della scomparsa delle 6 Sorelle. Ha chiamato la katana di Naru 'Shpada'. Ha promesso di far sapere dove si trova la madre di Larimar.",
        loreMaster: "", note: ""
      },
      {
        id: "melira", nome: "Melira Voan", tipo: "png",
        colore: "#888780", iniziali: "MV",
        tag: ["Rettrice università di storia", "Tresil"],
        descrizione: "Rettrice dell'università di storia di Tresil. Donna di mezza età, veste sempre con abiti color smeraldo.",
        loreGiocatori: "Ha informato il gruppo delle proprietà della collana di pietra lunare di Larimar: si ricarica alla luce lunare, si rompe se esposta a luna nuova completamente nera.",
        loreMaster: "", note: "Per ora non ha un ruolo narrativo rilevante oltre a questa interazione."
      },
      {
        id: "yome", nome: "Yome Musashi", tipo: "png",
        colore: "#888780", iniziali: "YM",
        tag: ["Prove di Naru", "Da definire"],
        descrizione: "Ha incontrato Naru e parlato con lui di prove.",
        loreGiocatori: "Dettagli ancora da definire.",
        loreMaster: "", note: ""
      },
      {
        id: "elia", nome: "Elia Varnis", tipo: "png",
        colore: "#378ADD", iniziali: "EV",
        tag: ["Capitano Aurora del Mare", "Ex cartografo", "Spedizione perduta"],
        descrizione: "Capitano dell'Aurora di Mare. Ex cartografo navale, conosce le coste settentrionali come pochi. Si orienta senza strumenti osservando il colore dell'acqua.",
        loreGiocatori: "Ha trasportato il gruppo da Poz Profondo a Fossolento. Taciturno. Ha abbandonato una carriera accademica dopo una spedizione fallita a nord di Ichikita, di cui non parla.",
        loreMaster: "Sta cercando qualcosa — o qualcuno — perduto durante la spedizione a nord di Ichikita. Connessione con eventi soprannaturali da definire. Potenziale alleato o PNG rilevante nelle sessioni in mare.",
        note: "Il soprannome 'Due Denti' del nostromo Branik viene da una rissa proprio a Fossolento — possibile spunto locale."
      },
      {
        id: "nerek", nome: "Nerek Voss", tipo: "png",
        colore: "#D85A30", iniziali: "NV",
        tag: ["Capo Rosa d'Ombra"],
        descrizione: "Capo della Rosa d'Ombra.",
        loreGiocatori: "Ha ucciso Rosco perché aveva provato a prendere qualcosa di M.",
        loreMaster: "", note: ""
      },
      {
        id: "tobin-hurrell", nome: "Tobin Hurrell", tipo: "png",
        colore: "#888780", iniziali: "TH",
        tag: ["Guardia portuale", "Fossolento"],
        descrizione: "Soldato semplice, guardia portuale di Fossolento. Elmo e mezza armatura, spada alla cintura. Burocratico ma non ostile, sbrigativo.",
        loreGiocatori: "Ha registrato l'arrivo del gruppo e riscosso la tassa di sbarco. Ha suggerito la foresteria di Serca. Ha glissato due volte sulla conceria — attività sospette tollerate per ragioni economiche.",
        loreMaster: "Ha guardato verso sud quando menzionata la conceria. Ha ricevuto uno scrigno da Rugan quartiermastro dell'Aurora del Mare firmando ricevuta — contenuto ignoto.",
        note: ""
      },
      {
        id: "serca", nome: "Serca", tipo: "png",
        colore: "#888780", iniziali: "SC",
        tag: ["Locandiera", "Fossolento", "Ex marinaia"],
        descrizione: "Locandiera del 'Il Nodo' a Fossolento. Anziana, corporatura robusta, uncino al posto di un braccio. Ex donna di mare. Carattere diretto, volgare e sarcastico ma con ironia bonaria. Pelo lungo tre dita sul mento.",
        loreGiocatori: "Gestisce la foresteria 'Il Nodo'. Tollera gli stranieri della conceria per ragioni economiche ma non li ama. Ha accolto il gruppo con sarcasmo — chiama Osiris 'capitano' con ironia.",
        loreMaster: "",
        note: "Ottima fonte di informazioni sul villaggio — ascolta tutto senza fare domande."
      },
      {
        id: "eldran-vossi", nome: "Eldran Vossi", tipo: "png",
        colore: "#888780", iniziali: "BB",
        tag: ["Capovillaggio", "Fossolento"],
        descrizione: "Capovillaggio di Fossolento. Uomo affabile e goloso, dente d'oro luccicante. Tono ottimista e promozionale riguardo al villaggio. Si è avvicinato spontaneamente al gruppo durante il pranzo.",
        loreGiocatori: "Ha fornito una mappa del villaggio. Ha rivelato la scogliera inclinata con scalinate sotto la conceria — usata storicamente per l'alaggio delle balene, possibile via d'accesso. Ha un appuntamento con il gruppo per una mappa più dettagliata.",
        loreMaster: "Atteggiamento laissez-faire verso la compagnia nella conceria: 'fintanto che non infrangono la legge' con sorriso e dente d'oro. Ha ricevuto denaro dalla conceria. Il suo cognome 'Vossi' potrebbe avere un legame con Nerik Voss — da verificare.",
        note: ""
      },
      {
        id: "lina-storta", nome: "Lina Storta", tipo: "png",
        colore: "#D85A30", iniziali: "LS",
        tag: ["Mercenaria", "Conceria", "Potenziale alleata"],
        descrizione: "Mercenaria, figura di riferimento della conceria. Staziona sul tetto con arco e freccia incoccata ma non tesa durante il giorno. Capace di gestire i mercenari più violenti.",
        loreGiocatori: "Ha respinto il gruppo all'ingresso della conceria. Ha avvertito spontaneamente Osiris che i gestori sono persone pericolose — momento inaspettato di umanità.",
        loreMaster: "Potenziale alleata insoddisfatta. Il suo avvertimento suggerisce dissidenza interna o almeno una coscienza. Da avvicinare con cautela.",
        note: ""
      },
      {
        id: "jorad", nome: "Jorad", tipo: "png",
        colore: "#D85A30", iniziali: "J",
        tag: ["Intermediario", "Conceria", "Fossolento"],
        descrizione: "Figura che fa da tramite tra gli stranieri della conceria e il loro capo. Non incontrato direttamente dal gruppo.",
        loreGiocatori: "È l'unico punto di contatto degli stranieri con il loro capo. Il capo delle guardie locali lo ha minacciato esplicitamente accusandolo di contrabbando.",
        loreMaster: "",
        note: ""
      },
      {
        id: "gemelli-conceria", nome: "Gli Stranieri della Conceria", tipo: "png",
        colore: "#D85A30", iniziali: "SC",
        tag: ["Mercenari", "Conceria", "Sospetti"],
        descrizione: "Tre stranieri frequentano la locanda: due gemelli (piccola spada, armatura leggera di cuoio) e una ragazza portavoce. Un quarto individuo con cicatrici visibili (mignolo mancante, pezzo di naso mancante, cicatrice sulla testa semi-rasata) rimane a dormire alla conceria e non frequenta la locanda.",
        loreGiocatori: "Non conoscono il loro capo — parlano solo con Jorad come intermediario. Due di loro si allontanano dalla locanda in serata. Uno dei gemelli sembra poco autonomo nelle decisioni.",
        loreMaster: "Osiris ipotizza che uno dei gemelli possa essere Ravok, il fatato mutaforma — da verificare con cautela.",
        note: ""
      },
      {
        id: "pellin-fossolento", nome: "Pellin", tipo: "png",
        colore: "#5ab48f", iniziali: "P",
        tag: ["Ragazzino", "Informatore", "Fossolento"],
        descrizione: "Ragazzino del villaggio di Fossolento. Parla sottovoce lontano dagli adulti, disposto a condividere informazioni in cambio di monete.",
        loreGiocatori: "Ha udito rumori notturni provenire dai vecchi attracchi delle baleniere. Ha visto una cassa gettata in mare. Ha assistito a una discussione tra le guardie e Jorad della conceria, con minacce esplicite.",
        loreMaster: "",
        note: "Da non confondere con Pellin di Fossolento menzionato nei PNG del villaggio nel data originale."
      }
    ]
  },

  sessioni: [

    // ── S01 · 25 del 3° mese ───────────────────────────────────
    {
      id: "s-01", data: "25 del 3° mese", luogo: "Tresil — Porto e vicoli",
      titolo: "Inizio campagna — Primo incontro",
      nuova: false,
      eventiChiave: [
        "Naru e Osiris arrivano a Tresil separatamente; Osiris si trasferisce da Balsan",
        "Naru incontra Larimar in un vicolo: qualcuno le appoggia sul collo un ferro per rivelarla come fatata",
        "Naru mette in fuga i rapitori",
        "Naru e Larimar passano la notte in locanda",
        "Larimar entra nel sogno di Naru: lago di latte, scogliere di carbone, cielo viola — qualcosa si muove sotto; Naru fugge terrorizzato",
        "Larimar viene attratta dal lago ma ha la certezza che se lo toccasse verrebbe divorata; qualcosa la afferra alla gamba",
        "Al risveglio Larimar ha una cicatrice reale sulla gamba",
        "Durante la notte Balsan viene rapito — Osiris se ne accorge e segue i rapitori"
      ],
      economia: [], oggetti: [], approfondimenti: [],
      tag: ["Primo incontro", "Cicatrice Larimar", "Sogno di Naru", "Rapimento Balsan"],
      riassunto: "Il gruppo si forma. Naru salva Larimar da un tentativo di cattura. Larimar entra nel sogno di Naru e ne riporta una cicatrice reale. Balsan viene rapito nella notte."
    },

    // ── S02 · 26 del 3° mese ───────────────────────────────────
    {
      id: "s-02", data: "26 del 3° mese", luogo: "Tresil — covo dei rapitori",
      titolo: "Il covo — salvataggio di Balsan",
      nuova: false,
      eventiChiave: [
        "Naru e Larimar indagano pedinando i rapitori di fatati; Larimar trasforma i capelli in neri per non attirare attenzione",
        "Osiris, Naru e Larimar si incontrano nel vicolo davanti al covo",
        "All'interno: diversi fatati imprigionati e artigiani rapiti (4, uno morirà)",
        "Sconfiggono gli scagnozzi e liberano fatati e artigiani",
        "Torvin Rask salvato — uno degli artigiani era una spia e aveva rivelato informazioni per costruire un artefatto di controllo",
        "Scoperti i collari di lega d'argento: bruciano e prosciugano i fatati",
        "Ravok emerge per la prima volta: voce sentita da Osiris, fisionomia mutevole — forse un fatato",
        "Un bambino-fatato con cane ha un collare spezzato con tracce di sangue → il gruppo segue le tracce e trova il fatato di nebbia",
        "I tre salvano il fatato di nebbia — nasce la fiducia reciproca nel gruppo",
        "Balsan interpella Tarn Orest (vicecapitano guardie muro est) per indagare su Ravok",
        "Consegnano una prigioniera dal covo — impazzita per un'intrusione mentale di Larimar (ha visto una persona impiccata a lei cara)"
      ],
      economia: [], oggetti: [], approfondimenti: [],
      tag: ["Covo", "Collari argento", "Ravok emerge", "Torvin Rask", "Fatato di nebbia", "Tarn Orest"],
      riassunto: "Il gruppo assalta il covo, libera Balsan, fatati e artigiani. Scoperti i collari d'argento. Ravok emerge come fisionomia mutevole. Il gruppo salva un fatato di nebbia e forma un legame."
    },

    // ── S03 · 28–29 del 3° mese ────────────────────────────────
    {
      id: "s-03", data: "28 del 3° mese", luogo: "Tresil — biblioteca, quartieri",
      titolo: "Indagini su Ravok e il suo passato",
      nuova: false,
      eventiChiave: [
        "Il gruppo indaga sulla prigioniera Brana Kar: la settima vittima salvata 15 anni fa era Erietta Karr — probabilmente sua sorella",
        "Ravok: serial killer impiccato 15 anni fa, rapiva e uccideva ragazze dicendo fossero fatate — ma qualcosa non torna",
        "Tarn Orest comunica: quartiere dove abitava Ravok 15 anni fa raso al suolo",
        "29 del 3° mese: Brana Kar trovata morta nel sonno"
      ],
      economia: [], oggetti: [], approfondimenti: [],
      tag: ["Ravok passato", "Brana Kar", "Tarn Orest"],
      riassunto: "Indagini su Ravok: era un serial killer impiccato 15 anni fa. Il suo quartiere è stato raso al suolo. Brana Kar muore nel sonno il giorno seguente."
    },

    // ── S04 · 30 del 3° mese ───────────────────────────────────
    {
      id: "s-04", data: "30 del 3° mese", luogo: "Tresil — Festa delle Lanterne",
      titolo: "La Festa delle Lanterne",
      nuova: false,
      eventiChiave: [
        "Una serata di festa cittadina: sfide fisiche, di talento, di astuzia e artistiche",
        "Una fatata si fa inseguire dal gruppo e quando Larimar la raggiunge le dona la collana di pietra lunare",
        "Il gruppo crea insieme una lanterna condividendo intenti — momento di coesione",
        "Balsan, in una serata in cui ha bevuto molto, rivela la storia della Casa della Fase del Nano",
        "La Casa della Fase compare solo durante la Festa delle Lanterne — un nano scontroso assegna a chi entra una quest da completare all'interno",
        "Chi esce avendo completato la quest riceve in dono la possibilità di esaudire un desiderio",
        "Balsan rivela: lui e i suoi vecchi compagni (compresi i genitori di Osiris e sua zia) entrarono nella casa per far riportare in vita la madre di Osiris, morta in un'avventura precedente",
        "La madre di Osiris fu effettivamente riportata in vita"
      ],
      economia: [],
      oggetti: [
        { nome: "Collana di pietra lunare", note: "Donata a Larimar da una fatata. Si ricarica alla luce lunare, si rompe alla luna nuova nera.", acquisito: true }
      ],
      approfondimenti: [],
      tag: ["Festa delle Lanterne", "Collana lunare", "Casa della Fase", "Nano scontroso", "Madre di Osiris", "Balsan rivelazione"],
      riassunto: "Serata della Festa delle Lanterne. Sfide di ogni tipo. Larimar riceve la collana di pietra lunare. Il gruppo crea una lanterna comune. Balsan ubriaco rivela come la madre di Osiris fu riportata in vita dalla Casa della Fase del Nano."
    },

    // ── S05 · 33 del 3° mese ───────────────────────────────────
    {
      id: "s-05", data: "33 del 3° mese", luogo: "Tresil — quartieri, biblioteca",
      titolo: "Il caso Al Amin",
      nuova: false,
      eventiChiave: [
        "Indagine sulla famiglia Al Amin — mercanti importanti di Tresil",
        "La famiglia aveva un doppio contratto con la compagnia mercantile solnari Paima (tramite Tre Lune Trasporti)",
        "La successione familiare ferma per più di due settimane ha lasciato attiva solo la parte di debito",
        "Karima Al Amin ha fatto sparire una lanterna perché costretto in sogno da una shutendoji che lo stava facendo impazzire lentamente"
      ],
      economia: [], oggetti: [], approfondimenti: [],
      tag: ["Al Amin", "Shutendoji", "Sogni manipolati", "Tre Lune Trasporti"],
      riassunto: "Indagine sulla famiglia Al Amin. Un membro è stato manipolato tramite sogno da una shutendoji e costretto a far sparire una lanterna. Contratto truffaldino con compagnia solnari."
    },

    // ── S06 · 4 del 4° mese ────────────────────────────────────
    {
      id: "s-06", data: "4 del 4° mese", luogo: "Pozz de Ferr — terme",
      titolo: "Le terme a Pozz de Ferr",
      nuova: false,
      eventiChiave: [
        "Tre giorni di riposo alle terme di Pozz de Ferr (3 giorni a nord-est da Tresil)",
        "Larimar ottiene il passaporto",
        "Naru incontra Yome Musashi, che gli parla di prove",
        "Naru dice esplicitamente a Larimar e Han di non frugare nei suoi sogni",
        "Periodo di interazione libera tra i personaggi — dinamiche del gruppo"
      ],
      economia: [], oggetti: [], approfondimenti: [],
      tag: ["Terme", "Pozz de Ferr", "Yome Musashi", "Passaporto Larimar", "Riposo"],
      riassunto: "Tre giorni di riposo alle terme. Larimar ottiene il passaporto. Naru incontra Yome Musashi. Naru mette in chiaro che i suoi sogni sono off-limits."
    },

    // ── S07 · 6 del 4° mese ────────────────────────────────────
    {
      id: "s-07", data: "6 del 4° mese", luogo: "Sole Velato — caverne",
      titolo: "La caverna dei sogni & Axelions",
      nuova: false,
      eventiChiave: [
        "Un gruppo di avventurieri in vacanza affida al gruppo un compito nel villaggio di Sole Velato",
        "Entrando nella caverna entrano in un sogno",
        "Larimar vede le bolle di sogno sospese sopra i corpi addormentati dei compagni",
        "Larimar estrae Osiris dalla bolla, poi tenta con Naru: tentacoli neri fuoriescono dal sogno di Naru",
        "Una volta recuperato Naru si spostano nel sogno — al risveglio sono in una parte diversa della caverna (hanno viaggiato nel sogno con i corpi)",
        "Sul fondo: laboratorio tecnologico con creature metà macchina metà biologica",
        "Axelions trovato in sospensione — fattezze Aenari ma con capelli e barba",
        "Larimar sposta il sogno (la coscienza del vecchio)",
        "Axelions rivela: è un discendente dei Primi; i Primi percepivano il mondo dei sogni come fisico; i sogni sono vascelli",
        "Axelions chiama la katana di Naru 'Shpada' e la spezza — la spada cambia forma seguendo le prove",
        "Axelions promette di far sapere dove si trova la madre di Larimar",
        "Tutte le creature assorbite tornano",
        "Ritorno a Tresil: ricerche all'Accademia di Storia con Melira Voan",
        "Melira rivela le proprietà della collana di pietra lunare"
      ],
      economia: [], oggetti: [], approfondimenti: [],
      tag: ["Axelions", "I Primi", "Shpada", "Laboratorio antico", "Sogni vascelli", "Madre di Larimar"],
      riassunto: "Caverne di Sole Velato: il gruppo viaggia nel sogno con i corpi. Axelions rivela i segreti dei Primi e nomina la Shpada. Promessa sulla madre di Larimar. Ricerche con Melira Voan."
    },

    // ── S08 · 11 del 4° mese ───────────────────────────────────
    {
      id: "s-08", data: "11 del 4° mese", luogo: "Tresil — porto e quartieri",
      titolo: "L'arrivo della nave Aenari",
      nuova: false,
      eventiChiave: [
        "Il gruppo è presente allo sbarco e vede la delegazione Aenari con schiavi umani e collari di vetro",
        "Gli Aenari invocano il diritto di prelazione sui fuggitivi Aenari",
        "Il gruppo cerca il discendente dell'Aenari fuggito a Tresil ~30 anni fa — trovano solo la moglie",
        "La moglie stava scappando spaventata: temeva che lei e il marito fossero l'obiettivo degli Aenari",
        "LORE MASTER — storia ricostruita: un Aenari si rifugiò a Tresil ~30 anni fa, ebbe due figli; 20 anni fa arrivò la prima nave Aenari",
        "Nella prima notte dell'arrivo: il padre scomparve, la figlia maggiore fu trovata squartata nel suo letto",
        "Il figlio minore sopravvisse — è lui il 'discendente Aenari' nei nostri appunti",
        "Tempistica sospetta: la nave Aenari si sposta poi verso Sole Velato (laboratorio di Axelions)",
        "Possibile collegamento tra gli Aenari, gli esperimenti antichi e i collari"
      ],
      economia: [], oggetti: [], approfondimenti: [],
      tag: ["Nave Aenari", "Schiavi", "Collari vetro", "Discendente Aenari", "Figlia squartata", "Sole Velato"],
      riassunto: "Sbarco Aenari con schiavi e collari di vetro. Il gruppo trova solo la moglie terrorizzata del discendente. Il padre scomparve e la figlia maggiore fu squartata 20 anni fa. Gli Aenari si dirigono verso Sole Velato."
    },

    // ── S09 · 12 del 4° mese ───────────────────────────────────
    {
      id: "s-09", data: "12 del 4° mese", luogo: "Tresil",
      titolo: "Han trovato — 5 esplosioni simultanee",
      nuova: false,
      eventiChiave: [
        "Kareen trova Han caduto in una fontana: mezzo bambino mezzo uccello, collare con scritto 'Han', senza alcun ricordo",
        "Balsan libera Han dal collare",
        "Han ha una forte attrazione verso Larimar e la vede con il suo vero aspetto (creatura gobba verdastra) — Osiris lo ha già intravisto un paio di volte",
        "Il giorno seguente: 5 attacchi coordinati simultanei a Tresil (due banche, una casa sicura di Rosco e altri edifici)",
        "Il gruppo affronta tre scagnozzi di M. e un fatato con collare che assaltano la casa sicura di Rosco",
        "Il fatato è ingabbiato da un filo rosso nel mondo dei sogni — Larimar lo scopre",
        "Uno degli umani porta un bracciale e dà ordini al fatato",
        "Recuperati: lettera con istruzioni firmate R. (probabilmente Ravok) indirizzata a M., specchio, e un braccio",
        "Lo specchio rivela: il capo di Rosco ha ucciso Rosco perché aveva tentato di prendere qualcosa di M.",
        "Rosco faceva parte della Rosa d'Ombra, guidata da Nerek Voss",
        "M. appare nel mondo dei sogni e si presenta come futuro padrone di Han — Larimar interviene e salva Han",
        "Han implode in una piuma dopo un litigio con Larimar — Osiris sente la necessità di rimediare",
        "Larimar ha convulsioni, sviene, ha visioni e comincia ad aver fame",
        "Nel mondo dei sogni: fatato con cicatrice da collare che si nutre di disperazione",
        "Larimar capisce di potersi nutrire di paura nel mondo dei sogni",
        "Larimar torna nel mondo dei sogni: creatura tipo dissennatore con 10 catene tiene Han prigioniero",
        "Chiarimento Han–Larimar: abbraccio → Han diventa più alto con ciocche multicolore, a Larimar spuntano piume sul collo",
        "Osiris molto delusa perché Larimar dice di essere stanca di seguirla in cose pericolose"
      ],
      economia: [],
      oggetti: [
        { nome: "Lettera R.→M.", note: "Istruzioni firmate probabilmente da Ravok, indirizzate a M. Recuperata dalla casa sicura di Rosco.", acquisito: true },
        { nome: "Specchio", note: "Ha rivelato il capo di Rosco e la morte di Rosco per mano di Nerek Voss.", acquisito: true }
      ],
      approfondimenti: [],
      tag: ["Han trovato", "5 esplosioni", "Bracciale+collare", "Lettera R→M", "M nel sogno", "Trasformazione Han/Larimar", "Rosa d'Ombra"],
      riassunto: "Han trovato nella fontana senza memoria. Cinque attacchi simultanei. Scagnozzi di M. con fatato controllato. Lettera R→M recuperata. M. appare nel sogno. Han salvato. Trasformazione di Han e Larimar."
    },

    // ── S10 · 13 del 4° mese ───────────────────────────────────
    {
      id: "s-10", data: "13 del 4° mese", luogo: "Villaggio di Roccia Brillante",
      titolo: "Il villaggio nel sogno distorto",
      nuova: false,
      eventiChiave: [
        "Ingaggiati da Alexis Duvindale per recuperare una pietra a Roccia Brillante",
        "Arrivati al limite del villaggio: entrano in un sogno",
        "Han chiamato 'carne impura' da un fatato e trattato come spazzatura",
        "Larimar divora il fatato — ne acquisisce l'intera storia, i ricordi e le 4 regole del mondo condiviso",
        "Regole del mondo condiviso: (1) non uccidere umani per cibarsi, (2) non portare umani nel mondo condiviso, (3) non interferire con le vite umane, (4) non procreare con gli umani",
        "Naru richiama Shpada da se stesso estraendola dalla propria pelle",
        "Naru scopre la possibile influenza della sua volontà sulla carne e sulla salute",
        "Osiris prova un'affinità con ogni oggetto da lancio",
        "Un pazzo era entrato in possesso di una scheggia delle Sei Sorelle e aveva chiuso il villaggio nel suo sogno cercando di evocare una divinità del chaos",
        "Recuperano il frammento dalla mente del pazzo",
        "Naru resiste alla forte tentazione di tenere il frammento e lo distrugge — causando un po' di caos"
      ],
      economia: [],
      oggetti: [
        { nome: "Frammento delle Sei Sorelle", note: "Recuperato dal pazzo. Distrutto da Naru.", acquisito: false }
      ],
      approfondimenti: [],
      tag: ["Roccia Brillante", "Regole mondo condiviso", "Shpada", "Frammento distrutto"],
      riassunto: "Villaggio chiuso in un sogno distorto da un pazzo con un frammento divino. Larimar divora un fatato e acquisisce le regole del mondo condiviso. Naru distrugge il frammento."
    },

    // ── S11 · 23 del 4° mese ───────────────────────────────────
    {
      id: "s-11", data: "23 del 4° mese", luogo: "Tresil — Villa Urbech",
      titolo: "Duvindale Alexis e Villa Urbech",
      nuova: false,
      eventiChiave: [
        "Ingaggiati da Alexis Duvindale (cugino dei Duvindale dei 12) per bonificare Villa Urbech",
        "La maledizione di Villa Urbech: la famiglia Urbech era legata a un fatato tramite un patto",
        "Un discendente della famiglia trascurò il patto, corrompendo le qualità del fatato",
        "La corruzione scatenò una maledizione di sfortuna sul discendente, sulla sua famiglia e su chiunque possedesse la casa",
        "Momento critico durante la missione — il gruppo se ne esce senza perdite",
        "Al ritorno: Duvindale si rivela un derelitto — ha comprato la casa della yazza con i soldi della quest",
        "Osiris scopre di avere una particolare fortuna e ottiene la moneta della fortuna",
        "Nota: la casa che il gruppo acquisterà in futuro è un'altra, in una zona diversa di Tresil"
      ],
      economia: [],
      oggetti: [
        { nome: "Moneta della fortuna", note: "Ottenuta da Osiris dopo la quest. Proprietà sconosciute a lei.", acquisito: true }
      ],
      approfondimenti: [],
      tag: ["Duvindale", "Villa Urbech", "Fatato corrotto", "Maledizione sfortuna", "Moneta fortuna"],
      riassunto: "Quest a Villa Urbech per Alexis Duvindale. Maledizione da patto con fatato tradito. Momento critico superato. Duvindale si rivela un derelitto. Osiris ottiene la moneta della fortuna."
    },

    // ── S12 · 26 del 4° mese ───────────────────────────────────
    {
      id: "s-12", data: "26 del 4° mese", luogo: "Tresil — strade e La Fontana d'Opale",
      titolo: "Miss Sunshineflower e il fatato rigurgitato",
      nuova: false,
      eventiChiave: [
        "Han cerca Miss Sunshineflower — il gatto della proprietaria della casa che il gruppo acquisterà in futuro",
        "Han gira per Tresil da solo alla ricerca del gatto scomparso",
        "Alla locanda La Fontana d'Opale: un marinaio in fuga rigurgita un fatato che stava usando il marinaio come vettore volontariamente",
        "Il fatato viene liberato e se ne va",
        "Siona Vass (proprietaria della Fontana d'Opale) gestisce la situazione con il gruppo"
      ],
      economia: [], oggetti: [], approfondimenti: [],
      tag: ["Miss Sunshineflower", "Fatato vettore", "Fontana d'Opale", "Siona Vass"],
      riassunto: "Han cerca il gatto Miss Sunshineflower per la città. Alla Fontana d'Opale un marinaio rigurgita un fatato che lo usava come vettore volontario. Il fatato viene liberato."
    },

    // ── S13 · 28 del 4° mese ───────────────────────────────────
    {
      id: "s-13", data: "28 del 4° mese", luogo: "Strada Tresil → Bosco di Ruder",
      titolo: "Partenza da Tresil — Han rapito dal bosco",
      nuova: false,
      eventiChiave: [
        "Il gruppo lascia Tresil in direzione Poz Profondo",
        "Durante il viaggio Han viene attirato e rapito dal Bosco di Ruder — l'albero del Primo Olmo lo chiama",
        "Il gruppo se ne accorge subito e reagisce nella stessa sessione",
        "Inizio della ricerca di Han nel bosco"
      ],
      economia: [], oggetti: [], approfondimenti: [],
      tag: ["Partenza Tresil", "Han rapito", "Bosco di Ruder", "Primo Olmo"],
      riassunto: "Il gruppo parte da Tresil. Han viene attirato e rapito dal Bosco di Ruder. Il gruppo reagisce immediatamente."
    },

    // ── S14 · 29 del 4° mese ───────────────────────────────────
    {
      id: "s-14", data: "29 del 4° mese", luogo: "Bosco di Ruder",
      titolo: "Il patto del Primo Olmo — recupero di Han",
      nuova: false,
      eventiChiave: [
        "Larimar percepisce dall'alba la mancanza della colonna verde",
        "Nel bosco: la bolla onirica di Han è circondata da fatati che lo osservano",
        "Han trovato incastonato nella corteccia dell'albero gigante — ultimo discendente del Primo Olmo",
        "L'albero rivela: Han è erede del patto del Primo Olmo; il bosco è corrotto dagli spiriti Varlmenn",
        "Rito Varlmenn: chiodo nel cranio del brigante + rogo",
        "Lo spirito dell'albero libera Han e chiama Naru 'abominio' — percepisce la sua natura anomala",
        "Han si umanizza ulteriormente: perde quasi tutte le piume, perde il legame con gli animali, conserva il potere sulle piante",
        "Larimar vede per la prima volta Han con il buco nel petto allargato"
      ],
      economia: [], oggetti: [], approfondimenti: [],
      tag: ["Bosco di Ruder", "Primo Olmo", "Rito Varlmenn", "Han liberato", "Naru = abominio"],
      riassunto: "Han ritrovato nell'albero del Primo Olmo. Rito Varlmenn eseguito. Han liberato e ulteriormente umanizzato. Lo spirito chiama Naru 'abominio'."
    },

    // ── S15 · 30–33 del 4° mese ────────────────────────────────
    {
      id: "s-15", data: "30 del 4° mese", luogo: "Poz Profondo → Aurora del Mare → Fossolento",
      titolo: "Da Poz Profondo a Fossolento",
      nuova: false,
      eventiChiave: [
        "30 del 4° — Arrivo a Poz Profondo, colazione con Verlek Tre Occhi, coltellino d'osso intagliato a Naru",
        "Litigio emotivo: Osiris si sente abbandonata per la vicenda di Han nel bosco",
        "Han abbraccia Osiris singhiozzando — primo contatto fisico diretto autonomo",
        "Larimar veglia nel mondo dei sogni: bolla dorata di Han (striature anomale) e sogno del legame fatato di Osiris",
        "Colazione da Verlek: informazioni sulla conceria di Fossolento",
        "Han fa crescere un fiore — conferma: piante ok, legame con animali perso",
        "Osiris identifica la conceria come probabile covo di Ravok",
        "Vendita di 4 cavalli a Rorac (+2 am +5 ap), imbarco sull'Aurora del Mare",
        "Han usa il bagno per la prima volta — forte imbarazzo",
        "Han lontano dalla terra inizia a stare male: non riesce a mangiare né bere, vomita ripetutamente",
        "Naru sviluppa telepatia in tre fasi durante la traversata: percepisce presenza, poi pensieri, poi comunicazione",
        "Prima comunicazione telepatica bidirezionale involontaria tra Naru e Larimar — lei lo sente come voce vicina",
        "33 del 4° — Fossolento avvistata all'orizzonte",
        "Nomi falsi adottati: Osiris → Sirio/Syrio Han, Naru → Uran, Larimar → Almira"
      ],
      economia: [
        { desc: "Vendita 4 cavalli a Rorac", importo: "+2 am +5 ap", tipo: "entrata" }
      ],
      oggetti: [
        { nome: "Coltellino d'osso", note: "Regalo di Verlek Tre Occhi a Naru. Valore affettivo.", acquisito: true }
      ],
      approfondimenti: [],
      tag: ["Poz Profondo", "Verlek", "Litigio Osiris", "Han mal di mare", "Telepatia Naru–Larimar", "Conceria identificata", "Aurora del Mare", "Nomi falsi"],
      riassunto: "Colazione con Verlek. Litigio emotivo. Han abbraccia Osiris. Larimar veglia sui sogni. Imbarco sull'Aurora del Mare. Han si ammala gravemente lontano dalla terra. Naru sviluppa la telepatia: prima comunicazione con Larimar. Fossolento in vista. Il gruppo adotta nomi falsi."
    },

    // ── S16 · 33–34 del 4° mese ────────────────────────────────
    {
      id: "s-16", data: "33 del 4° mese", luogo: "Fossolento — porto, locanda, conceria",
      titolo: "Arrivo a Fossolento — Intrighi e sopralluogo",
      nuova: true,
      eventiChiave: [
        "Sbarco a Fossolento: tassa doganale pagata (1 bg + 2 bm a testa) al soldato Tobin Hurrell",
        "Copertura regge: delegazione di una compagnia navale di Ferramarchi con base a Perugia",
        "Hurrell glissa due volte sulla conceria — attività sospette tollerate per ragioni economiche",
        "Han scende dalla scialuppa a carponi, bacia il suolo, si allontana nel bosco e si riprende a contatto con la terra",
        "Han si rivela involontariamente vegano: tollera solo alimenti vegetali",
        "Il gruppo si insedia alla foresteria 'Il Nodo' gestita da Serca — ex marinaia con uncino al braccio",
        "Osservati tre stranieri alla locanda: due gemelli, una ragazza portavoce, uno con cicatrici — probabilmente della conceria",
        "Gli stranieri non conoscono il loro capo e parlano solo con Jorad come intermediario",
        "⭐ Naru verifica la telepatia durante la cena: Larimar lo sente chiaramente — canale confermato",
        "⭐ Telepatia di Naru: richiede legame preesistente — con estranei percepisce solo emozioni di superficie",
        "Passeggiata notturna nel bosco: Han si rinvigorisce accarezzando alberi, ma qualcosa nel bosco non risponde più",
        "⭐ Naru tenta di contattare Musashi in meditazione: nessuna risposta — il ciondolo non è un canale",
        "⭐ Larimar veglia tutta la notte nel mondo dei sogni: ~230 bolle nel villaggio, nessun fatato visibile",
        "⭐ Naru stabilisce connessione telepatica persistente e bidirezionale con Han — rimane attiva passivamente come 'ridotto a icona'",
        "Pellin (ragazzino del villaggio) rivela rumori notturni agli attracchi delle baleniere e una cassa gettata in mare",
        "Lina Storta (mercenaria sul tetto della conceria) respinge il gruppo ma avverte spontaneamente: i gestori sono pericolosi",
        "⭐ Il gruppo discute in Shizenka del legame Nerek Voss → Rosco → M tramite collare e specchio",
        "Incontro con Eldran Vossi (capovillaggio): fornisce mappa del villaggio con scogliera e scalinate",
        "⭐ Bossi rivela: sotto la conceria esiste una scogliera inclinata con scalinate — possibile via d'accesso notturno",
        "⭐ Piano operativo: sopralluogo onirico di Larimar nella conceria + infiltrazione fisica dalla scogliera di notte",
        "⭐ Il gruppo ipotizza che uno dei gemelli possa essere Ravok — da verificare",
        "⭐ Larimar ricorda a Naru che anche Han è stato chiamato 'abominio' — potrebbe essere semi-fatato",
        "Discussione filosofica: i fatati nascono da atti di volontà; Ravok potrebbe non aver capito cosa fosse Larimar"
      ],
      economia: [
        { desc: "Tassa di sbarco (4 persone)", importo: "-4 bg -8 bm", tipo: "uscita" },
        { desc: "Monete a Pellin per informazioni", importo: "-piccolo importo", tipo: "uscita" }
      ],
      oggetti: [
        { nome: "Mappa di Fossolento", note: "Fornita da Eldran Vossi. Vecchia ma accurata — segnala scogliera inclinata e scalinate sotto la conceria.", acquisito: true }
      ],
      approfondimenti: [],
      tag: ["Fossolento", "Telepatia Naru–Han", "Lina Storta", "Eldran Vossi", "Scogliera", "Piano notturno", "Gemelli sospetti", "Jorad", "Nessun fatato", "Veglia Larimar"],
      riassunto: "Sbarco a Fossolento. Han si riprende a contatto con la terra. Copertura regge con Hurrell. Insediamento alla locanda di Serca. Tre stranieri sospetti osservati alla locanda (un quarto con cicatrici dorme alla conceria). Telepatia di Naru confermata e ampliata: canale persistente con Han. Larimar veglia senza trovare fatati. Bossi fornisce mappa con accesso dalla scogliera. Piano operativo: sopralluogo onirico + infiltrazione notturna dalla scogliera."
    }

  ],



  ambientazione: {
    kaelvaran: [
      {
        id: "kaelvaran", nome: "Kaelvaran — il mondo", tag: ["Mondo"],
        testo: "Il nome del mondo conosciuto. Comprende il Sesto Continente (l'atollo) e altri continenti oltre le acque ancora in parte inesplorati."
      },
      {
        id: "sesto-continente", nome: "Il Sesto Continente", tag: ["Atollo", "Oceano Centrale"],
        testo: "Un grande atollo che circonda l'Oceano Centrale — distesa d'acqua nel cuore dell'atollo in cui è ancora impossibile navigare. L'atollo è popolato da cinque culture umane: Ferromarchi, Shizenka, Varlmenn, Solnari, Aenari. Le isole erano un tempo separate da faide e guerre navali prima della fondazione di Tresil."
      },
      {
        id: "piani", nome: "I Tre Piani — cosmologia", tag: ["Cosmologia", "Sogni", "Fatati"],
        testo: "MONDO REALE — dove vivono gli umani. Fonte di volontà, emozioni, storie. Gli umani generano i sogni.\n\nMONDO DEI SOGNI — piano intermedio. Bolle-sogno individuali degli addormentati. I fatati camminano liberi. Morire nel sogno = morire nella realtà.\n\nMONDO DEI SOGNI CONDIVISI — piano originario. La volontà plasma la realtà. Il collegamento con il mondo reale è stato spezzato con la caduta delle Sei Sorelle. La colonna verde era un canale artificiale verso questo piano, creato dall'albero di Ruder tramite Han. Ora chiuso."
      }
    ],
    isolaDiTresil: [
      {
        id: "tresil-citta", nome: "Tresil — la città", tag: ["Capitale", "Neutrale", "500.000 abitanti"],
        testo: "Città neutrale e crocevia del mondo, circa 500.000 abitanti. Fondata da Eirikr di Stølagård, Ayumi Kohana e Tiero Venn'Aresh. Lingua: Tresiliano. Governa il Consiglio dei Tre (9 anni, 1 rinnovo).\n\nZone antiche: Porto Vecchio, Città Vecchia, Vecchio Castello.\nZone moderne: Nuovo Porto, Quartieri Residenziali, Distretto del Sapere, Zona Borghese, Quartieri Popolari, Sobborghi."
      },
      {
        id: "fossolento", nome: "Fossolento", tag: ["Destinazione attuale", "Ex città baleniera", "Solo Master"],
        soloMaster: false,
        testo: "Piccolo villaggio costiero a nord di Tresil, lungo la costa occidentale. Case basse in pietra salmastra, reti da pesca stese al sole, vento costante di alghe e legno bagnato.\n\nORIGINI: Fondato ~350 anni fa come avamposto di pesca e caccia alle balene. Per un secolo prosperò grazie alla grande conceria sulla scogliera.\n\nLA CONCERIA: ~70 anni fa le balene sparirono. Le spedizioni tornarono con equipaggi ridotti o traumatizzati. Voci di 'canti sotto la superficie' e 'ombre troppo grandi'. La conceria fallì e fu abbandonata in fretta. Nessuno del villaggio ci lavora o si avvicina — è considerata 'un posto morto'.\n\nSITUAZIONE ATTUALE: Da circa un mese un gruppo di sconosciuti ha preso possesso della conceria. Ricevono grandi casse da Tresil. Hanno portato denaro e movimento. Il villaggio è diviso: alcuni sono contenti dei soldi, altri inquieti ma tacciono.\n\nEVENTO RECENTE: La guardia ha fermato uno sbarco illegale notturno — una piccola imbarcazione con merci non dichiarate diretta alla conceria. Tensione salita, ma il gruppo continua indisturbato.\n\nVOCI IN GIRO: 'Stanno riavviando la caccia alle balene' (ma non si vedono balene) — 'Stanno scavando sotto' — 'Usano materiali non naturali' — 'Si sentono rumori notturni dalla scogliera' — 'Non importa cosa fanno, finché pagano.'"
      },
      {
        id: "fossolento-png", nome: "Fossolento — PNG del villaggio", tag: ["Fossolento", "PNG", "Solo Master"],
        soloMaster: true,
        testo: "ELDRAN VOSSI — Capovillaggio. Pragmatico, stanco. Fa finta di non vedere problemi se portano stabilità.\n\nMARA KESTREL — Guardia cittadina (capo). Rigida, sospettosa. È stata lei a fermare lo sbarco illegale.\n\nTOBIN RELL — Guardia semplice. Giovane e impressionabile. Ha visto qualcosa quella notte... ma non parla volentieri.\n\nHARL FENRIC — Guardiacaccia/esploratore. Vive ai margini del villaggio. Dice che 'il bosco evita la conceria'.\n\nSERKA DOVRAN — Oste della locanda. Sempre informata. Fa domande più di quante risposte dia.\n\nDRAMO KULL — Vecchio baleniere. Uno dei pochi sopravvissuti dell'era della conceria. Beve troppo e parla di 'cose sotto la pelle del mare'.\n\nLINA MARETH — Pescatrice. Pratica e diretta. Nota che i pesci stanno cambiando comportamento.\n\nORVEN TAL — Mercante locale. Felice dell'arrivo del gruppo. Sta guadagnando più di quanto abbia mai fatto.\n\nVELRA NOX — Portavoce del gruppo della conceria. Elegante, calma, sempre vaga. Non risponde mai direttamente.\n\nPELLIN — Ragazzo del villaggio. Curioso. Si aggira vicino alla conceria e potrebbe aver visto troppo."
      },
      {
        id: "poz-profondo", nome: "Poz Profondo", tag: ["Paese costiero", "Verlek e Sora"],
        testo: "Paese costiero separato da Fossolento. Un'unica locanda. Porto con servizio nave verso Fossolento. Casa Azzurrina: abitazione di Verlek e Sora, ex collegata a un faro."
      },
      {
        id: "casa-fase-nano", nome: "La Casa della Fase del Nano", tag: ["Tresil", "Magia", "Leggenda"],
        testo: "Casa misteriosa che compare a Tresil solo durante la Festa delle Lanterne.\n\nUn nano scontroso accoglie chi bussa alla porta e assegna a ogni visitatore una quest da completare all'interno della casa. Chi esce avendo portato a termine il compito riceve in dono la possibilità di esaudire un desiderio.\n\nBalsan — in una serata di eccesso — ha rivelato che lui e i suoi vecchi compagni di avventura (tra cui i genitori di Osiris e sua zia) entrarono nella casa per far riportare in vita la madre di Osiris, morta in una precedente avventura. La madre fu effettivamente riportata in vita.\n\nNota: i giocatori conoscono questa storia grazie alla confessione di Balsan. Non sanno se la casa comparirà di nuovo né a quali condizioni."
      },
      {
        id: "ballata-ruder", nome: "La Ballata dei Briganti del Bosco di Ruder", tag: ["Canzone", "Bosco di Ruder", "Cultura popolare"],
        testo: "Ballata popolare conosciuta da Larimar. Narra della fine dei briganti del Bosco di Ruder.\n\n―\n\nNel folto cupo del Bosco Ruder,\ndove il sole si perde e il vento s'illude,\nvivea un branco di cuori di pietra,\nsenza legge, né fede, né meta.\n\nSulla via che porta a Tresil lontana,\ntra carri stanchi e polvere vana,\ntendean agguati senza pietà,\nné pianto umano li fermava già.\n\nUna madre passava coi figli al fianco,\nma il destino li rese cenere e fango;\ninermi caddero sotto la lama,\ne il bosco tacque, soffocando il dramma.\n\nLa donna rimase tra pianto e terrore,\nspogliata d'ogni bene e d'ogni onore,\nlasciata sola sulla via scura,\ncon l'eco viva della sua sventura.\n\nMa il fato osserva, silente e severo,\ne attende il tempo, paziente e sincero:\nché nella notte, tra fuoco e tizzoni,\ngli uomini scordano gli antichi timori.\n\nUn resto di carne, lasciato incauto,\nattirò nel buio un passo più alto:\nocchi di brace e fame antica,\nuna madre d'artigli, feroce e nemica.\n\nNon furon spade né lance d'acciaio\na chiudere il conto di tanto guaio,\nma zanne e furia della selva viva\nche giustizia antica nel sangue scriveva.\n\nAll'alba, il bosco tornò a respirare,\nsenza più ombre pronte a colpire e rubare;\ne tra i rami, nel vento che mormora piano,\nsi dice: 'il fato non dimentica invano.'"
      },
      {
        id: "bosco-ruder", nome: "Bosco di Ruder", tag: ["Foresta", "Patto Primo Olmo"],
        testo: "Foresta attraversata dalla strada principale. Sede di un grande albero senziante, ultimo discendente del Primo Olmo. Il bosco era corrotto dagli spiriti Varlmenn. Liberato dopo il rito (chiodo + rogo)."
      },
      {
        id: "villaggi", nome: "Villaggi limitrofi", tag: ["Villaggi"],
        testo: "ROCCIASCURA (~200 ab.) · PONTEBREZZA (~350 ab.) · COLLERAGGIO (~180 ab.) · GRANOMASSO (~120 ab.) · FONTELUCENTE (~220 ab.) · SOLE VELATO (laboratorio Axelions) · ROCCIA BRILLANTE (quest Duvindale) · POZZ DE FERR (riposo, 3gg NE)"
      }
    ],
    mareERotte: [
      {
        id: "aurora-del-mare", nome: "Aurora del Mare", tag: ["Nave", "Rotta Fossolento"],
        testo: "Nave commerciale costruita ~20 anni fa nei cantieri meridionali di Tresil. Originariamente trasportava spezie e tessuti. Dopo danni in una tempesta anomala al nord fu acquistata da Elia Varnis, che rinforzò lo scafo e adattò le vele per navigazioni controcorrente.\n\nROTTA ATTUALE: Tresil → Poz Profondo → Fossolento → Ichikita → tratti di mare meno conosciuti. Tratta Tresil–Isole di Ferro ~6 volte l'anno. Poz Profondo–Fossolento: 3 giorni, 1 ap + 2 bg a testa.\n\nEQUIPAGGIO:\n• ELIA VARNIS (Capitano) — Ex cartografo navale. Si orienta senza strumenti osservando il colore dell'acqua. Ha abbandonato una carriera accademica dopo una spedizione fallita a nord di Ichikita, di cui non parla mai. Da allora taciturno e ossessionato dalle correnti. Alcuni credono stia cercando qualcosa — o qualcuno — perduto in quella spedizione.\n• RUGAN DELVERO (Quartiermastro) — Pragmatico e severo. Responsabile delle scorte e della disciplina. L'unico che riesce a contraddire il capitano senza conseguenze.\n• SELA NORR (Timoniera) — Precisa e silenziosa. Riflessi eccezionali anche nelle tempeste.\n• BRANIK 'DUE DENTI' (Nostromo) — Rozzo ma affidabile. Coordina il lavoro sul ponte. Il soprannome viene da una rissa in porto a Fossolento.\n• IRIA VELM (Vedetta) — Sempre sull'albero maestro. Vista incredibile. Dice di 'sentire' le navi prima di vederle.\n• TOMAS GRELL (Cuoco) — Ex contrabbandiere. Cucina piatti raffinati con risorse minime.\n• LUDO FERIK (Mozzo) — Giovane e curioso. Annota tutto su un diario segreto.\n• MAERA SONT (Guaritrice) — Esperta di erbe delle coste di Tresil e Ichikita. Spesso consultata dal capitano."
      },
      {
        id: "sistema-monetario", nome: "Sistema monetario", tag: ["Economia"],
        testo: "bp → bm (×10) → bg (×100) → ap (×1.000) → am (×10.000) → ag (×100.000) → op (×1.000.000).\n\nSalario contadino: ~1 bg/giorno. Salario operaio Tresil: 1–2 bg/giorno."
      }
    ],
    altriContinenti: [
      {
        id: "oltre-atollo", nome: "Oltre l'Atollo", tag: ["Inesplorato"],
        testo: "IMPERO VARBARI — citato come destinazione di alcune rotte.\nISOLE DI FERRO — territorio Varlmenn, tappa dell'Aurora del Mare.\nCHIQUITA — città menzionata da Verlek come sua destinazione. Da esplorare."
      }
    ]
  },

  fazioni: {
    ufficiali: [
      { id: "lega-mercanti",     nome: "Lega dei Mercanti",            testo: "La più antica e influente gilda. Patto del Sale e del Ferro. Figure: Siran Voles, Melina Druan." },
      { id: "maestri-artigiani", nome: "Gilda dei Maestri Artigiani",  testo: "Fabbri, falegnami, tessitori. Pietra dei Maestri. Figure: Kivan Berrol, Ilna Resti." },
      { id: "maestri-scena",     nome: "Corporazione Maestri di Scena",testo: "Attori, musicisti. Figure: Alvera Nomié, Roderin Falca, Menrik Tolhar." },
      { id: "navigatori",        nome: "Compagnia dei Navigatori",     testo: "Marinai, capitani. Ancora di bronzo come buon auspicio. Figure: Lurien Sest." },
      { id: "magistrati",        nome: "Ordine dei Magistrati",        testo: "Giudici, avvocati. Motto: 'La Legge È Luce'. Figure: Maren Telos." },
      { id: "focolare",          nome: "Confraternita del Focolare",   testo: "Osti e tavernieri. Figure: Siona Vass, Horlen Valt." },
      { id: "sigillo-cera",      nome: "Accademia del Sigillo di Cera",testo: "Scribes, copisti. Note creditizie. Figure: Miro Elan." }
    ],
    criminali: [
      { id: "mano-ottone",    nome: "Mano d'Ottone",       testo: "Armaioli e trafficanti. Forgia segreta sotto il Quartiere del Ferro. Figure: Kivan Berrol, Kolan Varek." },
      { id: "lanterna-spenta",nome: "Lanterna Spenta",     testo: "Spie e informatori. Capo: Niro Vesk. Patto con vetro scuro." },
      { id: "rosa-ombra",     nome: "Rosa d'Ombra",        testo: "Contrabbandieri. Capo: Nerek Voss. Ha ucciso Rosco per roba di M." },
      { id: "corvi-cenere",   nome: "Corvi di Cenere",     testo: "Ladri nel Quartiere Vecchio. Figure: Sira Yenhal." },
      { id: "martelli-sangue",nome: "Martelli di Sangue",  testo: "Assassini. Leader: La Maschera Nera." },
      { id: "sussurratori",   nome: "Sussurratori d'Opale",testo: "Veggenti e medium. Figure: Ena Sildra. Luna nuova, spirali di sabbia." }
    ],
    banda: {
      soloMaster: true,
      nome: "Banda di Ravok — Fossolento",
      testo: "12 membri nella ex conceria balene. Fanatici (5): Durs il Grigio, Maret Occhi-Rossi, Tork e Benn, Sera la Senza-Nome, Jorad il Predicatore. Opportunisti (6): Vekko, Lina Storta, Orn il Tranquillo, Deva e Polik, Mila la Silenziosa. Artigiano (1): Gedrun il Fabbro — produce i collari, bersaglio prioritario."
    },
    taverne: [
      { nome: "Rosa dei Venti",         desc: "Porto, avventurieri. Horlen Valt." },
      { nome: "Lira di Fuoco",          desc: "Artisti. Kelim Brat." },
      { nome: "Perla Nera",             desc: "Esotici. Melina Druan." },
      { nome: "Focolare del Viandante", desc: "Pellegrini. Ela Vinn." },
      { nome: "Lanterna Spenta",        desc: "Malavita. Niro Vesk." },
      { nome: "Fontana d'Opale",        desc: "Famiglie. Siona Vass." }
    ]
  },

  oggetti: {
    notiAiGiocatori: [
      {
        id: "collana-luna", nome: "Collana di Pietra Lunare", possessore: "Larimar", stato: "Integra",
        tag: ["Curativo", "Larimar"],
        descrizione: "Collana con ciondolo di pietra lunare donata a Larimar da una fatata durante la Festa delle Lanterne.\n\nProprietà (scoperte grazie a Melira Voan):\n• Permette una volta al giorno di rigenerare le ferite di chi la indossa.\n• Si ricarica esponendola alla luce lunare.\n• Si rompe irreversibilmente se esposta alla luce di luna nuova completamente nera.",
        loreMaster: ""
      },
      {
        id: "shpada", nome: "Shpada", possessore: "Naru", stato: "Attiva",
        tag: ["Arma", "Naru", "Volontà"],
        descrizione: "Katana di Naru, battezzata 'Shpada' da Axelions. Risponde alla volontà di Naru:\n• Muta forma\n• Naru può richiamarla a distanza\n• Naru può ricoprirsene per poi estrarla dalla propria pelle",
        loreMaster: ""
      },
      {
        id: "moneta-fortuna", nome: "Moneta della fortuna", possessore: "Osiris", stato: "In possesso",
        tag: ["Osiris", "Proprietà sconosciute"],
        descrizione: "Moneta ottenuta da Osiris dopo la quest Duvindale. Osiris non conosce le sue proprietà.",
        loreMaster: "Se lanciata con una domanda binaria (es. 'testa = destra, croce = sinistra'), indica la scelta più vantaggiosa per chi la lancia."
      },
      {
        id: "coltellino-osso", nome: "Coltellino d'osso", possessore: "Naru", stato: "In possesso",
        tag: ["Naru", "Valore affettivo"],
        descrizione: "Regalo di Verlek Tre Occhi a Naru. Manico intagliato a mano. Valore affettivo oltre che pratico.",
        loreMaster: ""
      }
    ],
    soloMaster: [
      {
        id: "ichnusite", nome: "Ichnusite & collari",
        tag: ["Materiale", "Controllo fatati"],
        descrizione: "Lega di argento che brucia e prosciuga i fatati. Usata per produrre collari e bracciali abbinati. Chi porta il bracciale controlla il fatato finché lo indossa.",
        loreMaster: "L'ichnusite arriva a Tresil come merce e viene spedita a Fossolento. Percorso di approvvigionamento da definire."
      },
      {
        id: "frammenti", nome: "Frammenti delle Sei Sorelle",
        tag: ["Cosmologia", "Divinità", "Pericoloso"],
        descrizione: "Frammenti della volontà delle Sei Sorelle. Fungono da porta verso il mondo dei sogni condiviso. Un frammento è stato recuperato a Roccia Brillante e distrutto da Naru dopo aver resistito alla tentazione del potere.",
        loreMaster: "Esistono altri frammenti nel mondo. Ciascuno è un residuo della volontà di una delle Sei Sorelle. Distruggerne uno ha effetti cosmologici ancora da definire."
      },
      {
        id: "pietra-patto", nome: "Pietra del Patto",
        tag: ["Tresil", "Giustizia", "Raro utilizzo"],
        descrizione: "Lastra nel Vecchio Castello usata nei processi più importanti. Si scalda se chi giura mente.",
        loreMaster: "Ogni utilizzo mette a repentaglio la stabilità di Tresil. I giocatori non la conoscono ancora."
      }
    ]
  },

  lore: {
    antagonisti: [
      {
        id: "M-antagonista", nome: "M — l'antagonista", colore: "#D4537E",
        testo: "Carnemista: mezzo umano e mezzo fatato. Obiettivo: controllare Tresil senza violenza.\n\nSistema: collare sul fatato + bracciale sull'umano. Massimo 9 fatati — oltre 9 l'identità si sfalda.\n\nPrima apparizione nel mondo dei sogni: si è presentato a Larimar come futuro padrone di Han."
      },
      {
        id: "ravok", nome: "Ravok — strumento e vittima", colore: "#D85A30",
        testo: "Fatato mutaforma. Primo fatato legato a M. Costretto a impersonare il serial killer giustiziato 15 anni fa.\n\nBase: ex conceria balene di Fossolento (costa sud). Produce collari con ichnusite. I briganti che derubarono Verlek erano probabilmente nella sua rete."
      }
    ],
    cosmologia: [
      {
        id: "fatati-natura", nome: "Fatati — vera natura", colore: "#7F77DD",
        testo: "I fatati sono emanazioni di sogni, credenze ed emozioni umane.\n\nREGOLE DEL MONDO CONDIVISO:\n1. Non uccidere umani per cibarsi.\n2. Non portare umani nel mondo condiviso.\n3. Non interferire con le vite umane.\n4. Non procreare con gli umani (la carne mista è imprevedibile)."
      },
      {
        id: "primi-sorelle", nome: "I Primi & le Sei Sorelle", colore: "#378ADD",
        testo: "I Primi: prima generazione diversificata degli umani, 300 generazioni prima della caduta delle Sorelle. Percepivano il mondo dei sogni come fisico.\n\nLe Sei Sorelle: le divinità di Kaelvaran. I frammenti della loro volontà fungono da porte verso il mondo dei sogni condiviso.\n\nChi era nel mondo dei sogni quando le 6 caddero rimase intrappolato o divenne fatato.\n\nAxelions = discendente dei Primi. Han = discendente del Primo Olmo."
      }
    ],
    personaggi: [
      {
        id: "naru-abominio", nome: "Naru — l'incubo impiantato", colore: "#E24B4A",
        testo: "L'ordine implanta un incubo rituale nei discepoli per trasmettere i poteri. Naru fu impiantato per errore a 8 anni. Il rituale cancella i ricordi — Naru non sa di averli persi.\n\nIl suo sogno ricorrente (che non ricorda): lago di latte, coste nere, tentacoli. Larimar lo ha vissuto dall'interno nella prima sessione riportandone una cicatrice reale."
      },
      {
        id: "larimar-aspetto", nome: "Larimar — vero aspetto", colore: "#7F77DD", condiviso: true,
        testo: "Noto ai giocatori, ignoto a Larimar come personaggio.\n\nVero aspetto: creatura gobba, pelle verdastra bianchiccia umida, sopracciglio prominente, capelli con chiazze vuote, armata di lancia. Han la percepisce così. Osiris lo ha intravisto in un riflesso."
      },
      {
        id: "osiris-sogno", nome: "Osiris — sogno del legame fatato", colore: "#1D9E75",
        testo: "Osiris sogna Larimar che le dice 'Io mi voglio legare a te.' Larimar lo sa. Osiris no. Non lo ammetterebbe mai consciamente."
      },
      {
        id: "viandante", nome: "Il Viandante dei Sogni", colore: "#7F77DD",
        testo: "Uomo barbuto dal singolo occhio che appare nel sogno di Han. Viandante del mondo dei sogni. Diventerà il mentore di Larimar. Nome da definire. Connessione con la stirpe del Primo Olmo."
      }
    ],
    oggettiMateriali: [
      {
        id: "lore-ichnusite", nome: "Ichnusite — lore completa", colore: "#BA7517",
        testo: "Vedi Oggetti → Ichnusite & collari.\n\nPercorso approvvigionamento: arriva a Tresil come merce, viene spedita a Fossolento. Ancora da definire nella lore."
      },
      {
        id: "lore-frammenti", nome: "Frammenti delle Sei Sorelle — lore", colore: "#378ADD",
        testo: "Residui della volontà delle Sei Sorelle. Porte verso il mondo dei sogni condiviso. Esistono altri frammenti nel mondo. Distruggerne uno ha effetti cosmologici da definire."
      },
      {
        id: "lore-pietra-patto", nome: "Pietra del Patto — lore", colore: "#888780",
        testo: "Lastra nel Vecchio Castello. Si scalda se si mente durante un giuramento. Ogni utilizzo mette a repentaglio la stabilità di Tresil. I giocatori non la conoscono ancora."
      },
      {
        id: "lore-moneta", nome: "Moneta della fortuna — proprietà", colore: "#1D9E75",
        testo: "Osiris non conosce le proprietà.\n\nSe lanciata con una domanda binaria, indica la scelta più vantaggiosa per chi la lancia."
      }
    ],
    connessioni: [
      {
        id: "ainari", nome: "Ainari & connessioni sospette", colore: "#888780",
        testo: "Nave Ainari arrivata a Tresil con schiavi e collari di vetro. Gli Ainari si sono poi mossi verso Sole Velato (laboratorio Axelions). Tempistica sospetta. Possibile collegamento con esperimenti antichi."
      }
    ]
  },

  thread: {
    urgenti: [
      { id: "t1",  testo: "Piano notturno: sopralluogo onirico di Larimar nella conceria + infiltrazione dalla scogliera",              soloMaster: false, risolto: false },
      { id: "t2",  testo: "Il conflitto Osiris–Naru irrisolto — come evolverà?",                     soloMaster: false, risolto: false },
      { id: "t3",  testo: "Larimar userà l'informazione sul sogno di Osiris (legame fatato)?",        soloMaster: true,  risolto: false },
      { id: "t4",  testo: "Uno dei gemelli è Ravok? Come verificarlo senza esporsi?",                 soloMaster: false, risolto: false },
      { id: "t5",  testo: "Chi sono i contatti locali di Ravok a Fossolento? Chi è Jorad?",           soloMaster: true,  risolto: false },
      { id: "t6",  testo: "Lina Storta può essere corrotta o convinta a collaborare?",                soloMaster: false, risolto: false },
      { id: "t7",  testo: "Cosa conteneva la cassa gettata in mare agli attracchi delle baleniere?",  soloMaster: true,  risolto: false },
      { id: "t8",  testo: "Eldran Vossi è davvero ingenuo o è coinvolto? Legame con Nerek Voss?",            soloMaster: true,  risolto: false }
    ],
    han: [
      { id: "t9",  testo: "Han è diventato vegano involontario — è permanente? È legato alla perdita della componente fatata?", soloMaster: false, risolto: false },
      { id: "t10", testo: "Han non riesce a mangiare né bere in mare — è una condizione fatata o qualcos'altro?",               soloMaster: false, risolto: false },
      { id: "t11", testo: "Qualcosa nel bosco di Fossolento non risponde più a Han — cosa è cambiato?",                         soloMaster: false, risolto: false },
      { id: "t12", testo: "Il buco nel petto allargato — conseguenze fisiche e magiche?",                                       soloMaster: false, risolto: false },
      { id: "t13", testo: "L'umanizzazione è reversibile?",                                                                     soloMaster: false, risolto: false },
      { id: "t14", testo: "La bolla dorata di Han — interferenza esterna o natura speciale? I fatati che la osservavano chi erano?", soloMaster: true, risolto: false }
    ],
    lore: [
      { id: "t15", testo: "Dove è la madre di Larimar? (promessa Axelions)",                        soloMaster: false, risolto: false },
      { id: "t16", testo: "Chi è il Viandante dei Sogni? Quando incontrerà Larimar?",               soloMaster: true,  risolto: false },
      { id: "t17", testo: "Cosa sa Naru di sé che non ha condiviso?",                               soloMaster: true,  risolto: false },
      { id: "t18", testo: "La telepatia Naru–Han è ora persistente — come si evolverà? Osiris lo scoprirà?", soloMaster: false, risolto: false },
      { id: "t19", testo: "Naru non percepisce Musashi — è troppo distante o il legame si è interrotto?", soloMaster: true, risolto: false },
      { id: "t20", testo: "Perché non piove a Tresil da quando il gruppo è arrivato? È naturale o soprannaturale?", soloMaster: true, risolto: false },
      { id: "t21", testo: "Nessun fatato nel mondo dei sogni di Fossolento — coincidenza o segnale?", soloMaster: true, risolto: false },
      { id: "t22", testo: "Ravok era davvero ignaro della vera natura di Larimar quando la aveva col collare?", soloMaster: true, risolto: false },
      { id: "t23", testo: "Il cagnolino di Arla — descritto con dettaglio insolito dal DM. Rilevanza futura?", soloMaster: true, risolto: false },
      { id: "t24", testo: "Elia Varnis: cosa ha perso nella spedizione a nord di Ichikita? Tornerà rilevante?", soloMaster: true, risolto: false },
      { id: "t25", testo: "Yome Musashi e le prove di Naru — quando torna?",                        soloMaster: false, risolto: false },
      { id: "t26", testo: "Cosa sa ancora Torvin Rask?",                                            soloMaster: false, risolto: false },
      { id: "t27", testo: "Connessione Ainari / laboratorio Axelions?",                             soloMaster: true,  risolto: false },
      { id: "t28", testo: "Perché Osiris è più difficile da percepire telepaticamente per Naru?",   soloMaster: true,  risolto: false }
    ],
    risolti: []
  },

  economia: {
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
          { nome: "Fieno + acqua per notte",         costo: "2 bp",        note: "Per cavallo o mulo" },
          { nome: "Avena per notte",                 costo: "5 bp",        note: "Foraggio pregiato" },
          { nome: "Ferratura cavallo",               costo: "2 am",        note: "= 2000 bp · ogni 2–3 mesi" },
          { nome: "Sella in cuoio",                  costo: "5 ag",        note: "= 5000 bp" },
          { nome: "Bardatura completa",              costo: "1 am",        note: "= 10.000 bp · morso, redini, staffe" },
          { nome: "Carretto (2 ruote)",              costo: "5 am",        note: "= 50.000 bp" },
          { nome: "Carro (4 ruote)",                 costo: "2 op",        note: "= 2.000.000 bp · per commercio" },
          { nome: "Barca a remi",                    costo: "5 am",        note: "= 50.000 bp" },
          { nome: "Barca a vela (piccola)",          costo: "5 op",        note: "= 5.000.000 bp" },
          { nome: "Passaggio su nave (per persona)", costo: "1 ap + 2 bg", note: "Rotta costiera · es. Poz Profondo–Fossolento" }
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
          { nome: "Bagno caldo",                     costo: "2 bm",        note: "= 20 bp · nelle locande modeste" },
          { nome: "Lavanderia (abiti)",              costo: "1 bm",        note: "= 10 bp · 1 giorno" },
          { nome: "Barbiere / taglio capelli",       costo: "5 bp",        note: "" },
          { nome: "Traghetto / barca breve",         costo: "1–5 bp",      note: "Attraversata di fiume o canale" },
          { nome: "Noleggio carretto (1 giorno)",    costo: "5 bm",        note: "= 50 bp · con o senza animale" },
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
          { nome: "Vestiario semplice",              costo: "3 bm",        note: "= 30 bp" },
          { nome: "Vestiario da viaggio",            costo: "1 bg",        note: "= 100 bp · resistente e pratico" },
          { nome: "Vestiario invernale",             costo: "5 ag",        note: "= 5000 bp · pesante e caldo" },
          { nome: "Vestito elegante",                costo: "1 am",        note: "= 10.000 bp" },
          { nome: "Mantello (comune)",               costo: "5 bm",        note: "= 50 bp" },
          { nome: "Mantello (pregiato)",             costo: "5 ag",        note: "= 5000 bp · con cappuccio foderato" },
          { nome: "Stivali in cuoio",                costo: "3 ag",        note: "= 3000 bp" },
          { nome: "Guanti in cuoio",                 costo: "1 ag",        note: "= 1000 bp" },
          { nome: "Cappello / copricapo",            costo: "5 bm–3 ag",   note: "Dipende dalla qualità" },
          { nome: "Lana grezza (1 kg)",              costo: "2 bm",        note: "= 20 bp · materiale grezzo" },
          { nome: "Ago e filo",                      costo: "2 bp",        note: "" },
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
          { nome: "Dardi balestra (20)",             costo: "1 bg",        note: "= 100 bp" },
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
          { nome: "Sacca da viaggio",                costo: "5 bm",        note: "= 50 bp · borsa di pelle" },
          { nome: "Tenda da campo",                  costo: "2 bg",        note: "= 200 bp" },
          { nome: "Sacco a pelo",                    costo: "5 bm",        note: "= 50 bp · tessuto spesso" },
          { nome: "Razioni da viaggio (1 giorno)",   costo: "1 bm",        note: "= 10 bp · pane secco e carne salata" },
          { nome: "Razioni da campo (7 giorni)",     costo: "1 bg",        note: "= 100 bp · con formaggi e legumi" },
          { nome: "Otre d'acqua (2L)",               costo: "1 bp",        note: "" },
          { nome: "Fiasca d'acqua in pelle",         costo: "1 bm",        note: "= 10 bp" },
          { nome: "Corda (10 m, canapa)",            costo: "5 bm",        note: "= 50 bp · resistente" },
          { nome: "Rampino",                         costo: "1 ag",        note: "= 1000 bp · metallo temprato" },
          { nome: "Torcia (singola)",                costo: "1 bp",        note: "Durata ~1 ora" },
          { nome: "Lanterna semplice",               costo: "2 bm",        note: "= 20 bp · 4 ore con olio" },
          { nome: "Fiasca olio per lanterna",        costo: "1 bm",        note: "= 10 bp · 4 ore di luce" },
          { nome: "Acciarino e pietra focaia",       costo: "1 bm",        note: "= 10 bp · essenziale" },
          { nome: "Piccone da scavo",                costo: "5 bm",        note: "= 50 bp · ferro robusto" },
          { nome: "Pala",                            costo: "2 bm",        note: "= 20 bp" },
          { nome: "Grimaldelli (set)",               costo: "3 ag",        note: "= 3000 bp · utensili da scassinatore" },
          { nome: "Bussola",                         costo: "2 ag",        note: "= 2000 bp · metallo e vetro" },
          { nome: "Mappa locale (disegnata a mano)", costo: "2 bm",        note: "= 20 bp" },
          { nome: "Mappa regionale (accurata)",      costo: "2 ag",        note: "= 2000 bp" },
          { nome: "Cannocchiale",                    costo: "5 am",        note: "= 50.000 bp · raro" },
          { nome: "Sacco di juta",                   costo: "1 bp",        note: "Per bottino e provviste" },
          { nome: "Borsa porta-ingredienti",         costo: "3 bm",        note: "= 30 bp · scomparti per spezie" },
          { nome: "Candele (10 pezzi)",              costo: "5 bp",        note: "" },
          { nome: "Pergamena (foglio)",              costo: "1 bm",        note: "= 10 bp" }
        ]
      },
      {
        id: "strumenti-mestieri",
        nome: "Strumenti e mestieri",
        icona: "🔨",
        voci: [
          { nome: "Kit da guaritore",                costo: "5 ag",        note: "= 5000 bp · bende, erbe, unguenti" },
          { nome: "Kit da carpentiere",              costo: "3 ag",        note: "= 3000 bp · martello, scalpello, pialla" },
          { nome: "Kit da fabbro",                   costo: "5 ag",        note: "= 5000 bp · pinze, martello, incudine da campo" },
          { nome: "Kit da cuoiaio",                  costo: "2 ag",        note: "= 2000 bp · aghi, spago cerato, forme" },
          { nome: "Kit da cucito",                   costo: "5 bp",        note: "Ago, filo, bottoni" },
          { nome: "Strumento musicale (semplice)",   costo: "2 ag",        note: "= 2000 bp · flauto, tamburello" },
          { nome: "Strumento musicale (pregiato)",   costo: "5 am",        note: "= 50.000 bp · liuto, violino" },
          { nome: "Materiali da scrittura (set)",    costo: "3 ag",        note: "= 3000 bp · inchiostro, penne, pergamene" },
          { nome: "Sigillo di cera personale",       costo: "1 ag",        note: "= 1000 bp" },
          { nome: "Bilancia da mercante",            costo: "3 ag",        note: "= 3000 bp · con pesi certificati" },
          { nome: "Abaco",                           costo: "1 ag",        note: "= 1000 bp" },
          { nome: "Lucchetto (ferro)",               costo: "2 ag",        note: "= 2000 bp" },
          { nome: "Catena (1 m, ferro)",             costo: "1 ag",        note: "= 1000 bp" },
          { nome: "Trappola per animali",            costo: "2 ag",        note: "= 2000 bp" },
          { nome: "Rete da pesca",                   costo: "3 ag",        note: "= 3000 bp" },
          { nome: "Telo cerato (3x3 m)",             costo: "5 bm",        note: "= 50 bp · riparo improvvisato" }
        ]
      },
      {
        id: "servizi-burocratici",
        nome: "Servizi legali e burocratici",
        icona: "📜",
        voci: [
          { nome: "Documento ufficiale (redazione)", costo: "1 ap",        note: "= 1000 bp · presso uno scriba" },
          { nome: "Passaporto / lasciapassare",      costo: "3 ap",        note: "= 3000 bp · timbro ufficiale incluso" },
          { nome: "Permesso commerciale (Tresil)",   costo: "1 ag",        note: "= 100.000 bp / anno" },
          { nome: "Consulenza legale (1 ora)",       costo: "2 ap",        note: "= 2000 bp · presso l'Ordine dei Magistrati" },
          { nome: "Causa legale (mediazione gilda)", costo: "5 ap–1 ag",   note: "Dipende dalla complessità" },
          { nome: "Traduttore (1 giorno)",           costo: "3 ag",        note: "= 3000 bp" },
          { nome: "Notaio / sigillo ufficiale",      costo: "5 bm",        note: "= 50 bp · per documento semplice" },
          { nome: "Guarigione dal guaritore",        costo: "1 ap–1 ag",   note: "= 1000–100.000 bp · dipende dalla gravità" },
          { nome: "Dentista",                        costo: "5 bm–1 ap",   note: "= 50–1000 bp" },
          { nome: "Istruzione privata (1 mese)",     costo: "5 ag",        note: "= 500.000 bp · lettura, aritmetica" },
          { nome: "Funerale semplice",               costo: "2 ap",        note: "= 2000 bp" },
          { nome: "Funerale con cerimonia",          costo: "1 ag",        note: "= 100.000 bp" }
        ]
      }
    ]
  }
};

