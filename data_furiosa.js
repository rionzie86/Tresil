// ============================================================
// FURIOSA — data_furiosa.js
// Campagna dei Frammenti Divini
// ============================================================
// Struttura analoga a data.js (Tresil). Contenuti presi dai
// documenti di sviluppo su Drive (cartella "Furiosa/Campagna",
// aggiornati al 13 agosto 2026) + dettagli forniti in chat.
// Nessuna sessione è stata ancora giocata al tavolo.
// ============================================================

const FURIOSA_DATA = {

  meta: {
    titolo: "Archivio di Furiosa",
    sottotitolo: "Campagna dei Frammenti Divini",
    dataAttuale: "Campagna non ancora iniziata",
    prossimaDestinazione: "Aggancio d'apertura — il bar malfamato di Rei"
  },

  sezioni: [
    { id: "panoramica", label: "Panoramica",    icona: "◈" },
    { id: "personaggi", label: "Personaggi",    icona: "◉" },
    { id: "sessioni",   label: "Sessioni",      icona: "◎" },
    { id: "lore",       label: "Lore Segreta",  icona: "◑" },
    { id: "thread",     label: "Thread Aperti", icona: "◐" },
    { id: "note",       label: "Note DM",       icona: "◻" }
  ],

  // Termini che diventano link cliccabili nei testi
  glossario: {
    "Furiosa":              { sezione: "lore", voce: "furiosa-divinita", label: "Furiosa — la Divinità", soloMaster: true },
    "frammenti divini":     { sezione: "lore", voce: "furiosa-divinita", label: "Furiosa — la Divinità",  soloMaster: true },
    "Ados":                 { sezione: "lore", voce: "ados-kesper",      label: "Ados e gli Otto Raggi di Kesper", soloMaster: true },
    "Otto Raggi di Kesper": { sezione: "lore", voce: "ados-kesper",      label: "Ados e gli Otto Raggi di Kesper", soloMaster: true },
    "Verolinguo":           { sezione: "personaggi", voce: "verolinguo", label: "Verolinguo" }
  },

  panoramica: {
    filoGiocatori: "Il gruppo viaggia per Kaelvaran raccogliendo frammenti divini sparsi per il mondo. Ovunque si trovino, non sono gli unici a cercarli: sette, cultisti e mostri si contendono lo stesso bottino — a volte il party arriva prima di loro, a volte deve strapparglieli dalle mani. Durante il viaggio qualcosa di più grande si fa strada: voci di una \"profezia di distruzione\" il cui significato resta, per ora, oscuro.",
    filoMaster: "Quando tutti i frammenti divini saranno riuniti, apparirà Furiosa, divinità della furia nata dalle Sei Sorelle (le Sei Figlie della Creazione, generate da Ithar — stesso lore già presente nella campagna di Tresil). Farà delle protagoniste i suoi araldi, e una di loro diventerà il suo campione — Zoraya, per la sua connessione onirica con la dea, è la candidata più naturale, ma la scelta non è ancora stata decisa in modo definitivo.\n\nFuriosa vuole attraversare il velo ed entrare nell'Irkalla (il regno dei morti) per dare giustizia alle sue sei madri. Attorno a lei nasce un sistema di credenze in contrapposizione a quello delle Sei Sorelle — le sue stesse madri — ed esiste un gruppo che sta riunendo le fedi disperse in un unico Pantheon: se sia alleato o nemico di Furiosa resta da stabilire.\n\nPunto di lore ancora aperto: se i frammenti divini di questa campagna coincidano con i Frammenti delle Sei Sorelle già noti nella campagna di Tresil, o siano di natura diversa (vedi Lore Segreta).",
    statoGiocatori: "La campagna non ha ancora sessioni giocate al tavolo: il gruppo si sta ancora formando.",
    statoMaster: "Nessuna sessione giocata finora. Il gancio d'apertura è pronto: Rei viene avvicinata da un tale, Kaf, in un bar malfamato, per incastrare un certo Theris e rubargli un frammento — entrambi ex membri del vecchio gruppo di avventurieri di Ados (vedi Lore Segreta → Ados e gli Otto Raggi di Kesper)."
  },

  personaggi: {
    pg: [
      {
        id: "zoraya", nome: "Zoraya", giocatore: "", tipo: "pg",
        colore: "#5a8fd4", iniziali: "Z",
        tag: ["Cantrice", "Percepisce la verità e le intenzioni", "Compagna: Wvrewol"],
        descrizione: "Cantrice capace di percepire la verità e le intenzioni nascoste dietro le parole altrui. Non viaggia mai sola: al suo fianco c'è sempre Wvrewol, una rana che la accompagna ovunque.",
        loreGiocatori: "Ha visioni ricorrenti nel sonno: sogna una donna coperta di sangue, una corona di spine sulla fronte, che danza in un bosco fatto di alberi che non sono alberi — tronchi di pietra, tetti di tegole al posto delle chiome. La sua danza è passione e furia insieme; intorno, ai margini della luce del fuoco, restano immobili sagome di uomini, animali e ombre, incapaci di avvicinarsi. Quando per un istante gli sguardi si incrociano, quella rabbia la attraversa come una scarica — e si sveglia senza sapere se l'ha solo vista, o se ora le appartiene.",
        loreMaster: "Il sogno è quasi certamente una visione di Furiosa stessa: segno di un legame speciale tra Zoraya e la dea. È la candidata più naturale a diventarne il campione, ma la scelta non è ancora stata narrata né decisa in modo definitivo.",
        note: ""
      },
      {
        id: "nikla", nome: "Nikla", giocatore: "", tipo: "pg",
        colore: "#8f72d4", iniziali: "N",
        tag: ["Maga dell'inchiostro", "Sigilli", "Compagno: inchiostro senziente"],
        descrizione: "Maga dell'inchiostro: la sua magia passa attraverso i sigilli che disegna e sviluppa personalmente, componendoli in un sistema di tatuaggi. Il suo strumento — e in un certo senso il suo famiglio — è un inchiostro senziente e maledetto: non lancia gli incantesimi in modo diretto, è l'inchiostro stesso a canalizzarne l'effetto.",
        loreGiocatori: "Da mesi cerca una biblioteca nascosta di testi antichi legati alla Volontà magica dei Primi Uomini — l'ha mancata per poco: un gruppo di tagliagole l'ha trovata per prima e sta bruciando i volumi per scaldarsi.",
        loreMaster: "Ipotesi di lore non confermata: l'inchiostro senziente potrebbe essere un fatato antico, un ex strumento di espressione del Mondo dei Sogni Condiviso — forse \"mezzo fatato\", cosa che la stessa Nikla potrebbe ignorare. Rischi e lato oscuro del suo utilizzo ancora da sviluppare.",
        note: "I suoi sigilli possono essere progettati e consultati nell'Officina Sigilli dell'archivio."
      },
      {
        id: "karl", nome: "Karl", giocatore: "", tipo: "pg",
        colore: "#c4954a", iniziali: "K",
        tag: ["Paladino", "Plasmare il metallo"],
        descrizione: "Paladino capace di plasmare il metallo a proprio piacimento — piegarlo, modellarlo e rimodellarlo — un dono che unisce alla sua fede e alla sua forza in combattimento.",
        loreGiocatori: "",
        loreMaster: "",
        note: ""
      },
      {
        id: "rei", nome: "Rei", giocatore: "", tipo: "pg",
        colore: "#c45a5a", iniziali: "R",
        tag: ["Assassina", "Anima strappata", "Oltre il velo"],
        descrizione: "Assassina la cui anima è stata strappata: una metà vive ancora nel mondo reale, l'altra resta oltre il velo, in un altrove che nessun altro personaggio può percepire come lei.",
        loreGiocatori: "Il suo aggancio alla campagna comincia in un bar di una zona malfamata: viene avvicinata da un tale, Kaf, che vuole ingaggiarla per inscenare un alterco pubblico con un secondo uomo, Theris — il piano di Kaf è ucciderlo durante la rissa per rubargli un frammento e far ricadere la colpa su di lei. Per motivi personali, l'incarico le riporta alla mente un'avventura vissuta tempo fa con un vecchio gruppo.",
        loreMaster: "Kaf e Theris sono due degli otto membri del vecchio gruppo di avventurieri di Ados, gli \"Otto Raggi di Kesper\" (vedi Lore Segreta). Il frammento che Kaf vuole rubare è uno di quelli che il gruppo si divise anni fa.",
        note: ""
      }
    ],
    png: [
      {
        id: "verolinguo", nome: "Verolinguo", giocatore: "", tipo: "png",
        colore: "#5ab48f", iniziali: "V",
        tag: ["PNG comico", "Spiritello", "Legato a Zoraya"],
        descrizione: "Spiritello della verità imbarazzante. Non nasce da un singolo evento, ma dall'accumulo di ogni \"non dovevi dirlo\" della storia: è lo spirito di tutte le verità vomitate fuori nei momenti sbagliati. Non riesce a mentire nemmeno volendo — la verità gli esce di bocca come un singhiozzo, per quanto imbarazzante o pericolosa. Corporatura sostanzialmente umana ma con dettagli leggermente inquietanti: occhi da geco, lingua sottile e appuntita spesso penzolante, tratti del viso innaturalmente regolari (zona uncanny valley).",
        loreGiocatori: "Si è legato a Zoraya perché lei è, letteralmente, la verità più grande e ingombrante che lui abbia mai incontrato camminare su due gambe — e per la prima volta le sue uscite non vengono accolte con orrore, ma (quasi) capite. La sua saliva ha proprietà rigenerative fatate, ma funziona bene solo su ferite superficiali: davanti a una ferita grave si blocca, o peggio, ne annuncia ad alta voce la gravità. Se catturato o interrogato non può mentire per proteggere il gruppo — utile gancio per una missione di salvataggio.",
        loreMaster: "Aggancio narrativo di come entra nel party ancora da definire.",
        note: ""
      }
    ]
  },

  // Cronologia sessioni — vuota, nessuna ancora giocata al tavolo.
  // Stessa struttura di TRESIL_DATA.sessioni:
  // { data, titolo, luogo, riassunto, eventiChiave:[], tag:[], nuova:bool,
  //   economia:[], oggetti:[], approfondimenti:[] }
  sessioni: [],

  // ── LORE SEGRETA (solo DM) ─────────────────────────
  lore: {
    cosmologia: [
      {
        id: "furiosa-divinita",
        nome: "Furiosa — la Divinità",
        colore: "#c45a5a",
        condiviso: false,
        testo: "È la forza della disperazione, la pulsione estrema alla vita. È nata dalle Sei Sorelle (le Sei Figlie della Creazione, generate da Ithar — lore già esistente in Tresil/Kaelvaran); per questo le chiama le sue \"6 madri\". Il suo obiettivo è attraversare il velo ed entrare nell'Irkalla, il regno dei morti, per dare giustizia alle sue madri.\n\nAttorno a lei nasce un sistema di credenze in contrapposizione a quello delle Sei Sorelle — le sue stesse madri — ed esiste un gruppo che sta riunendo le fedi disperse in un unico Pantheon (alleato o nemico di Furiosa? da stabilire).\n\nTemi/nucleo (chiarimento del 9 agosto 2026, dal sogno di Zoraya): il decadimento degli esseri umani nasce dal nascondere la verità — mentire, non accettare, razionalizzare. La verità è il divino: ha bellezza, grazia, una forza immensa. Vedere il divino soffocato e negato dagli uomini è ciò che genera in Furiosa frustrazione, e quindi furia. È una combattente. Odia le bugie.\n\nCollegamento con la lore esistente: le Sei Sorelle crearono il Mondo dei Sogni Condiviso e scomparvero nella Frattura dopo aver sconfitto Ithar; i loro Frammenti sono già un oggetto noto nella campagna di Tresil (uno è stato recuperato a Roccia Brillante e distrutto da Naru). Resta da stabilire se i frammenti divini di questa campagna siano gli stessi Frammenti delle Sei Sorelle o di natura diversa, legata specificamente a Furiosa — due indizi possibili puntano nella stessa direzione (l'origine \"palazzo sotterraneo\" degli Otto Raggi di Kesper, e l'ipotesi di Refistas sul velo) ma restano congetture non confermate."
      }
    ],
    personaggi: [
      {
        id: "ados-kesper",
        nome: "Ados e gli Otto Raggi di Kesper",
        colore: "#c4954a",
        condiviso: false,
        testo: "Gli \"8 Raggi di Kesper\" era il nome del vecchio gruppo di avventurieri di Ados — dalla ruota di Kesper, il carro leggendario di una delle Sei Figlie, a otto raggi come loro. Il gruppo trovò otto frammenti di vetro apparentemente senza valore in un palazzo sotterraneo inesplorato, e se li divise uno a testa come simbolo del legame — senza mai sospettare avessero un potere.\n\nI membri: Ados (leader, scaltro e forte — oggi ossessionato dal recuperare tutti i frammenti dopo aver ucciso per sbaglio la moglie Lilglia, il cui frammento si è fuso col suo, corrompendolo). Kaf (veloce di mani, oggi pieno di debiti di gioco — è lui che ingaggia Rei contro Theris). Refistas (studioso metodico, ucciso dai banditi sulla strada per Tresil mentre andava a un appuntamento con Whilliam — nei suoi ultimi giorni indagava sui frammenti in un taccuino). Whilliam (semplice, enorme, devoto ad Ados, teneva un diario sulle sue stranezze crescenti). Berer (esploratore, morto poco prima che Refistas si ritirasse — sepolto da Refistas a Pozzprofond, ai piedi di un castagno, col proprio frammento). Elia (morta di parto, il suo frammento donato a un orfanotrofio). Theris (bersaglio del piano di Kaf, dettagli del personaggio ancora da sviluppare).\n\nStato dei frammenti: Ados ha il proprio + quello di Lilglia (fusi e corrotti). Kaf presumibilmente ha ancora il suo. Theris ce l'ha ancora — bersaglio del piano di Kaf/Rei. Quello di Berer è ancora sepolto a Pozzprofond, mai reclamato. Quello di Elia è a destinazione sconosciuta dopo l'orfanotrofio. Quello di Refistas è di stato sconosciuto — finito nel bottino dei banditi? Ancora sul corpo? Whilliam presumibilmente ha ancora il suo.\n\nIpotesi di Refistas (dal suo taccuino, non confermata): il cristallo/frammenti sarebbero magia antica non più concessa agli uomini, capace di spezzare il velo se riuniti — possibile collegamento diretto con la corruzione di Ados e con l'obiettivo di Furiosa di attraversare il velo verso l'Irkalla."
      }
    ]
  },

  // ── THREAD APERTI — punti di sviluppo ancora da definire ──
  thread: {
    sviluppo: [
      { id: "th-01", testo: "Nomi completi, classi/ruoli meccanici, background dettagliato e personalità dei quattro protagonisti (Zoraya, Nikla, Karl, Rei)." },
      { id: "th-02", testo: "Relazioni/legami tra i quattro protagonisti prima dell'inizio della campagna." },
      { id: "th-03", testo: "Dettagli della \"profezia di distruzione\" citata nella trama principale." },
      { id: "th-04", testo: "Il gruppo che unifica le fedi in un Pantheon: chi sono, obiettivi, alleati o nemici di Furiosa?" },
      { id: "th-05", testo: "Rapporto tra i frammenti divini di questa campagna e i Frammenti delle Sei Sorelle già noti a Tresil." },
      { id: "th-06", testo: "Chi diventerà il campione di Furiosa e come si arriva a quella scelta (Zoraya è candidata naturale — da confermare)." },
      { id: "th-07", testo: "Cosa è successo esattamente al frammento di Refistas dopo la sua morte (bottino dei banditi? recuperabile?)." },
      { id: "th-08", testo: "Se Kaf e Whilliam hanno davvero ancora i propri frammenti, o se sono già stati persi/ceduti." },
      { id: "th-09", testo: "Background e personalità di Theris." },
      { id: "th-10", testo: "Dove/quando il party trova il diario di Whilliam, le lettere di Ados e il taccuino di Refistas nella trama." },
      { id: "th-11", testo: "Confermare o correggere l'ipotesi di Refistas sulla vera natura dei frammenti (magia antica, potere di spezzare il velo)." },
      { id: "th-12", testo: "Aggancio narrativo di Verolinguo — come entra concretamente nel party." }
    ]
  }

};
