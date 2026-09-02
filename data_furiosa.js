// ============================================================
// FURIOSA — data_furiosa.js
// Campagna dei Frammenti Divini
// ============================================================
// Struttura analoga a data.js (Tresil). Contenuti presi dai
// documenti di sviluppo su Drive (cartella "Furiosa/Campagna"),
// aggiornati al 2 settembre 2026 con: le schede dei quattro
// giocatori (Zoraya, Nikla, Karl, Rei), il diario in-play di Rei
// (giorni 8-9 del terzo mese) e la scaletta scene/colonna sonora
// delle prime due sessioni giocate al tavolo.
// ============================================================

const FURIOSA_DATA = {

  meta: {
    titolo: "Archivio di Furiosa",
    sottotitolo: "Campagna dei Frammenti Divini",
    dataAttuale: "Giorno 9 del terzo mese — due sessioni giocate al tavolo",
    prossimaDestinazione: "Alla Rosa Storta, dopo lo scontro con i tre sgherri e la scena del villaggio — sviluppi futuri ancora da definire"
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
    "Verolinguo":           { sezione: "personaggi", voce: "verolinguo", label: "Verolinguo" },
    "Whilliam":             { sezione: "personaggi", voce: "whilliam",   label: "Whilliam" },
    "Rosa Storta":          { sezione: "personaggi", voce: "whilliam",   label: "Whilliam", soloMaster: true }
  },

  panoramica: {
    filoGiocatori: "Il gruppo viaggia per Kaelvaran raccogliendo frammenti divini sparsi per il mondo. Ovunque si trovino, non sono gli unici a cercarli: sette, cultisti e mostri si contendono lo stesso bottino — a volte il party arriva prima di loro, a volte deve strapparglieli dalle mani. Durante il viaggio qualcosa di più grande si fa strada: voci di una \"profezia di distruzione\" il cui significato resta, per ora, oscuro.",
    filoMaster: "Quando tutti i frammenti divini saranno riuniti, apparirà Furiosa, divinità della furia nata dalle Sei Sorelle (le Sei Figlie della Creazione, generate da Ithar — stesso lore già presente nella campagna di Tresil). Farà delle protagoniste i suoi araldi, e una di loro diventerà il suo campione — Zoraya, per la sua connessione onirica con la dea, resta la candidata più naturale, ma la scelta non è ancora stata decisa in modo definitivo; da rivalutare anche alla luce del nuovo arco di Rei, che nel diario del giorno 9 mostra per la prima volta un vero moto di volontà/protezione.\n\nFuriosa vuole attraversare il velo ed entrare nell'Irkalla (il regno dei morti) per dare giustizia alle sue sei madri. Attorno a lei nasce un sistema di credenze in contrapposizione a quello delle Sei Sorelle — le sue stesse madri — ed esiste un gruppo che sta riunendo le fedi disperse in un unico Pantheon: se sia alleato o nemico di Furiosa resta da stabilire.\n\nPunto di lore ancora aperto: se i frammenti divini di questa campagna coincidano con i Frammenti delle Sei Sorelle già noti nella campagna di Tresil, o siano di natura diversa (vedi Lore Segreta). Indizio nuovo dal giorno 8: la fusione dei frammenti di Kaf e Theris in mano a Rei non ha mostrato segni di corruzione come quella di Ados — forse la corruzione dipende da chi fonde e perché, non dal semplice atto di fondere.",
    statoGiocatori: "La campagna è in corso: il party ha già affrontato due sessioni al tavolo, con un primo scontro alla Rosa Storta e l'inizio della sottotrama del villaggio.",
    statoMaster: "Due sessioni giocate finora (vedi Sessioni). Gancio d'apertura consumato: Rei è stata avvicinata da Kaf in un bar malfamato per incastrare Theris; nello scontro che ne è seguito sia Kaf che Theris sono morti, e i loro frammenti si sono fusi in mano a Rei. Il filo prosegue ora alla locanda Rosa Storta, dove il party ha incontrato Whilliam (uno degli Otto Raggi di Kesper) e affrontato tre sgherri legati ad Ados."
  },

  personaggi: {
    pg: [
      {
        id: "zoraya", nome: "Zoraya Al Khmani", giocatore: "Federica",
        colore: "#5a8fd4", iniziali: "Z",
        tag: ["Cantrice", "Ex allieva della Scuola della Fiamma", "Percepisce la verità e le intenzioni", "Compagna: Wvrewol"],
        descrizione: "25 anni, del Mare Dorato. Cantrice capace di percepire la verità e le intenzioni nascoste dietro le parole altrui. Non viaggia mai sola: al suo fianco c'è sempre Wvrewol, una rana che la accompagna ovunque.",
        loreGiocatori: "Figlia di un pescatore e di una tessitrice di reti che canta mentre lavora, ultima di 5 fratelli. Cresciuta tra i vicoli del porto, impara la lotta dal fratello maggiore e sviluppa presto un forte rifiuto delle gerarchie nate dalle \"vie\": non accetta che i Figli della Cenere abbiano fiamme fioche solo perché nati nello scalino più basso della società — un'ingiustizia per cui si è già presa più di una cicatrice sul volto.\n\nMandata dal padre alla Scuola della Fiamma per diventare Jyotir, durante gli anni di studio matura una discordanza crescente con ciò che vede: il Grande Jyotir servito in ogni funzione da un esercito di Figli della Cenere. Il giorno del suo esame pubblico, invece di dimostrarsi degna, canta contro l'ingiustizia delle vie e dichiara il Grande Jyotir indegno perfino di accendere un cerino — poi fugge prima che le guardie la accerchino. Probabile evento scatenante del suo attuale girovagare.\n\nHa visioni ricorrenti nel sonno: sogna una donna coperta di sangue, una corona di spine sulla fronte, che danza in un bosco fatto di alberi che non sono alberi — tronchi di pietra, tetti di tegole al posto delle chiome. La sua danza è passione e furia insieme; intorno, ai margini della luce del fuoco, restano immobili sagome di uomini, animali e ombre, incapaci di avvicinarsi. Quando per un istante gli sguardi si incrociano, quella rabbia la attraversa come una scarica — e si sveglia senza sapere se l'ha solo vista, o se ora le appartiene.",
        loreMaster: "Il sogno è quasi certamente una visione di Furiosa stessa: segno di un legame speciale tra Zoraya e la dea. È la candidata più naturale a diventarne il campione, ma la scelta non è ancora stata narrata né decisa in modo definitivo. Il tema della \"verità\" nella sua backstory (canta la verità sulle gerarchie, sul Grande Jyotir) è un parallelo diretto con Verolinguo — non ancora sfruttato narrativamente. La fuga dalla Scuola della Fiamma è un candidato forte per spiegare come Zoraya arriva a incontrare Nikla e Rei.",
        note: ""
      },
      {
        id: "nikla", nome: "Nikla Kruv", giocatore: "Alessandra",
        colore: "#8f72d4", iniziali: "N",
        tag: ["Maga dell'inchiostro", "Sigilli", "Compagno: inchiostro senziente"],
        descrizione: "25 anni, di Ferrath (Ferromarchi). Maga dell'inchiostro: la sua magia passa attraverso i sigilli che disegna e sviluppa personalmente, componendoli in un sistema di tatuaggi. Il suo strumento — e in un certo senso il suo famiglio — è un inchiostro senziente e maledetto: non lancia gli incantesimi in modo diretto, è l'inchiostro stesso a canalizzarne l'effetto.",
        loreGiocatori: "Orfana, cresciuta nelle fogne di Ferrath dopo la morte dei genitori (operai, morti in un incidente sul lavoro quando lei aveva 6 anni). Cresciuta da Mr. Percival Mirr, che la prende in simpatia e la introduce ai segreti delle fogne — la figura paterna più vicina che abbia mai avuto, da cui eredita un forte senso critico verso il mondo.\n\nCarattere curioso e flessibile, ma con una visione del mondo diadica: giusto o sbagliato, nessuna scala di grigio. Una volta guadagnata la sua fiducia, è leale per sempre. Arrampicatrice esperta (ogni superficie delle fogne era \"casa\"); pessima cuoca.\n\nDa mesi cerca una biblioteca nascosta di testi antichi legati alla Volontà magica dei Primi Uomini — l'ha mancata per poco: un gruppo di tagliagole l'ha trovata per prima e sta bruciando i volumi per scaldarsi.",
        loreMaster: "Ipotesi di lore non confermata: l'inchiostro senziente potrebbe essere un fatato antico, un ex strumento di espressione del Mondo dei Sogni Condiviso — forse \"mezzo fatato\", cosa che la stessa Nikla potrebbe ignorare. Rischi e lato oscuro del suo utilizzo ancora da sviluppare. Possibile aggancio con la sottocultura/\"frangia nascosta\" di Ferrath già nota in lore, dato il suo passato nelle fogne — da esplorare.",
        note: "I suoi sigilli possono essere progettati e consultati nell'Officina Sigilli dell'archivio."
      },
      {
        id: "karl", nome: "Karl Brenner", giocatore: "Jacopo",
        colore: "#c4954a", iniziali: "K",
        tag: ["Paladino", "Plasmare il metallo", "Ex guardia cittadina"],
        descrizione: "26 anni, di Ferrath (Ferromarchi) — come Nikla. Paladino capace di plasmare il metallo a proprio piacimento (accenno di metalbending, coerente con la Volontà Ferromarchi — poco esplorato finora, non essendo di suo particolare interesse), un dono che unisce alla sua fede e alla sua forza in combattimento.",
        loreGiocatori: "Famiglia medio-borghese: padre pragmatico e artigiano del legno/metallo, madre affettuosa ma sottomessa in casa. Svogliato e poco entusiasta della vita, finché non si innamora perdutamente di \"X\" (identità ancora non chiarita), che dà scopo alla sua esistenza. La mette incinta; la famiglia di lei li allontana per motivi economici. Karl si arruola nella guardia cittadina per garantire un reddito solido.\n\nSposa Claudia Brenner, hanno una figlia, Hetel Brenner — entrambe uccise da briganti una sera in cui Karl era di ronda. Ne segue un trigger di depressione e senso di colpa profondo; inizia la storia gravemente malnutrito ed emaciato, molto più magro del suo fisico massiccio abituale.\n\nCarattere paziente e gentile, morale solida ma difficoltà a esprimere emozioni; dopo la tragedia alterna deflessione umorale ad aggressività manifesta. Rudimenti di combattimento con spada e scudo; carpenteria e artigianato di base.",
        loreMaster: "Personaggio non presente nei documenti di sviluppo originali — emerso solo dalla scheda ricevuta il 1 settembre 2026. Non è chiaro se sia un quarto membro stabile del party o se il suo inserimento sostituisca/riconfiguri la composizione a tre nota in precedenza: da chiarire con il tavolo. Aperto anche chi sia \"X\" e come si incastri cronologicamente rispetto agli eventi di Rei del giorno 8-9.",
        note: ""
      },
      {
        id: "rei", nome: "Rei", giocatore: "Giulia",
        colore: "#c45a5a", iniziali: "R",
        tag: ["Assassina", "Anima strappata", "Oltre il velo"],
        descrizione: "Assassina la cui anima è stata strappata: una metà vive ancora nel mondo reale, l'altra resta oltre il velo, in un altrove che nessun altro personaggio può percepire come lei.",
        loreGiocatori: "Il suo aggancio alla campagna comincia in un bar di una zona malfamata: viene avvicinata da un tale, Kaf, che vuole ingaggiarla per inscenare un alterco pubblico con un secondo uomo, Theris — il piano di Kaf è ucciderlo durante la rissa per rubargli un frammento e far ricadere la colpa su di lei. Per motivi personali, l'incarico le riporta alla mente un'avventura vissuta tempo fa con un vecchio gruppo, sotto un \"vecchio maestro\" che le insegnò a uccidere \"come un lavoro, senza volontà\".\n\nGiorno 8 del terzo mese: mentre è con Theris, lui lancia sul tavolo con frustrazione il proprio frammento di vetro. Rei lo tocca — qualcosa in lei si smuove, un moto mai provato prima — e cerca di salvarlo, ma fallisce: Theris muore. Segue uno scontro in cui Rei uccide Kaf, che l'avrebbe uccisa per prima. I due frammenti recuperati si fondono in uno solo in tasca sua, e da quel momento toccarlo non produce più alcun effetto.\n\nGiorno 9: alla locanda Rosa Storta scopre che Whilliam ne è il locandiere. Tre uomini entrano e lo minacciano; Rei, spinta per la prima volta da un vero moto di protezione — non più il \"lavoro senza volontà\" del suo addestramento — si offre di occuparsene e sgozza uno dei tre.",
        loreMaster: "Kaf e Theris erano due degli otto membri del vecchio gruppo di avventurieri di Ados, gli \"Otto Raggi di Kesper\" (vedi Lore Segreta) — entrambi ora morti in scena. Il frammento fuso Kaf+Theris è ora in possesso di Rei. Elementi nuovi dal diario ancora da sviluppare: chi/cosa è \"la Madre Nera\" che Rei teme possa averla trovata; chi è il suo \"vecchio maestro\"; identità e mandante dei tre uomini della Rosa Storta e delle due donne sospette osservate nella stessa scena.",
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
        loreMaster: "Aggancio narrativo di come entra nel party ancora da definire. Parallelo tematico con la backstory di Zoraya (entrambi legati al tema della verità detta nel momento sbagliato) — non ancora sfruttato.",
        note: ""
      },
      {
        id: "whilliam", nome: "Whilliam", giocatore: "", tipo: "png",
        colore: "#c4954a", iniziali: "W",
        tag: ["Uno degli Otto Raggi di Kesper", "Locandiere della Rosa Storta"],
        descrizione: "Uno degli Otto Raggi di Kesper: semplice, enorme, immune alle lusinghe, adorava Ados e avrebbe fatto di tutto per lui. Identificato in gioco (giorno 9) come il locandiere della Rosa Storta stesso — non un semplice avventore in attesa, come si ipotizzava dalla lore precedente.",
        loreGiocatori: "Osservato prendersi cura con gentilezza di \"un ragazzo derelitto\" trascinatosi dentro il locale (PNG minore, non ancora sviluppato). Minacciato da tre uomini loschi, difeso da Rei nello scontro — uno dei tre è stato ucciso. Non ha ancora incontrato o riconosciuto Rei come possibile \"messaggera\" al posto di Refistas, che non arrivò mai al loro appuntamento.",
        loreMaster: "Probabilmente possiede ancora il proprio frammento (dedotto dalle parole dei tre aggressori, non confermato). Teneva un diario sulle stranezze crescenti di Ados — dove/quando il party lo trova nella trama è più vicino ora che Whilliam è un PNG raggiungibile in scena.",
        note: ""
      }
    ]
  },

  // Cronologia sessioni — due sessioni giocate finora.
  // NOTA: la suddivisione esatta tra le due sessioni non è confermata
  // dall'utente — qui è impostata in corrispondenza delle due pause
  // rilevate negli appunti manoscritti originali (vedi Scaletta Sessioni
  // — Scene e Colonna Sonora.md, cartella Furiosa/Campagna su Drive).
  sessioni: [
    {
      data: "Sessione 1",
      titolo: "Prologo — l'incontro e il primo sangue",
      luogo: "Terra Amata / dintorni",
      riassunto: "Prologo del gruppo: arrivo di Zoraya a Tresil, il sogno di Furiosa, il vagare per la città. Nikla riassume la propria situazione (lettere e manuale ricevuti), poi il gruppo si mette in viaggio. Dopo tre mesi vissuti da sola, una ragazza (presumibilmente Rei) viene aggredita — probabile riferimento agli eventi con Kaf e Theris (giorno 8 del terzo mese, dal diario di Rei): un moto mai provato prima al tocco di un frammento di vetro, il tentativo fallito di salvare Theris, e uno scontro in cui Rei uccide Kaf per legittima difesa. I due frammenti recuperati si fondono in uno solo in suo possesso.",
      eventiChiave: [
        "Zoraya arriva a Tresil; sogno di Furiosa",
        "Nikla riassume la propria posizione; riceve lettere e un manuale",
        "Il gruppo si mette in viaggio",
        "Una ragazza viene aggredita — combattimento",
        "Theris muore nonostante il tentativo di salvarlo; Kaf viene ucciso nello scontro",
        "I frammenti di Kaf e Theris si fondono in uno solo, in possesso di Rei"
      ],
      tag: ["Prologo", "Primo sangue"],
      nuova: false,
      economia: [],
      oggetti: [],
      approfondimenti: [
        {
          titolo: "Scaletta scene e colonna sonora (originale)",
          testo: "Zoraya arriva a Tresil — Terra Amata / Sogno: \"The Fires of Ragnarok\"\nGira vagando — Terra Amata\n\nNikla, riassunto — \"Anguish\" (lettere e manuale)\nIn viaggio — (brano non specificato)\n\n3 mesi vissuti da sola — \"Main Theme\" / la ragazza viene aggredita (vedi gli oggetti rossi) →\nCombattimento — \"The Cove Battle\"\nLa vista di Nikla e Rei (rosso) — \"Main Theme\""
        }
      ]
    },
    {
      data: "Sessione 2",
      titolo: "La Rosa Storta e il villaggio",
      luogo: "Locanda Rosa Storta, poi un villaggio non ancora nominato",
      riassunto: "Giorno 9 del terzo mese: il party arriva alla locanda Rosa Storta, dove scopre che Whilliam (uno degli Otto Raggi di Kesper) ne è il locandiere. Tre sgherri legati ad Ados entrano per minacciarlo — sono venuti a utilizzare i frammenti. Rei si offre di occuparsene e nello scontro uccide uno dei tre; Whilliam racconta la propria storia. Il gruppo prosegue poi verso un villaggio dove tutti sembrano \"impazziti\" (\"Ados è via, tornerà domani\"): di notte, per non far adorare Lilglia, la setta locale si riunisce per un sacrificio, diretto da uno zombie di nome Lilglia. Segue un combattimento, l'unione dei frammenti, visioni personalizzate per i personaggi e il salvataggio del villaggio.",
      eventiChiave: [
        "Il party arriva alla Rosa Storta; Whilliam identificato come il locandiere",
        "Tre sgherri di Ados minacciano Whilliam — combattimento, uno degli sgherri ucciso da Rei",
        "Whilliam racconta la propria storia (dettagli da trascrivere)",
        "Il party raggiunge un villaggio dove la popolazione è sconvolta: \"Ados è via, tornerà domani\"",
        "Una setta locale si riunisce di notte per un sacrificio legato a \"Lilglia\"",
        "Uno zombie chiamato Lilglia dirige il rituale",
        "Combattimento finale, unione dei frammenti, visioni personalizzate per i personaggi, villaggio salvato"
      ],
      tag: ["Rosa Storta", "Villaggio", "Rituale"],
      nuova: true,
      economia: [],
      oggetti: [],
      approfondimenti: [
        {
          titolo: "Scaletta scene e colonna sonora (originale)",
          testo: "Ingresso alla Rosa Storta — \"Engwith\"\nEntrano 3 sgherri di Ados — \"Cordyceps\" (sono venuti a utilizzare i frammenti)\nCombattimento — \"The Cove Battle\"\nRacconto Whilliam — \"Turn Turn Turn Again\"\n\nViaggio — \"Godhome\" – Poker Bard\nIl villaggio, tutti crazy — \"Tragedy\" (\"Ados è via, tornerà domani\")\nNotte, % per non adorare Lilglia —\nLa setta si riunisce e sacrificio —\nLilglia zombie fa da dirigente del rituale —\nCombattimento —\nL'unione dei frammenti —\nVisioni personalizzate —\nSalvare il villaggio §"
        },
        {
          titolo: "Nota DM — chi/cosa è Lilglia?",
          testo: "Attenzione: il nome \"Lilglia\" compare qui (zombie che dirige il rituale del villaggio) ma è ANCHE il nome già noto in Lore Segreta come la moglie defunta di Ados, il cui frammento si è fuso col suo corrompendolo. Non è confermato se si tratti della stessa entità — è un'ipotesi plausibile e narrativamente forte (spiegherebbe uno zombie legato a un culto vicino ad Ados), ma va trattata come ipotesi non decisa finché non viene confermata dal tavolo."
        }
      ]
    }
  ],

  // ── LORE SEGRETA (solo DM) ─────────────────────────
  lore: {
    cosmologia: [
      {
        id: "furiosa-divinita",
        nome: "Furiosa — la Divinità",
        colore: "#c45a5a",
        condiviso: false,
        testo: "È la forza della disperazione, la pulsione estrema alla vita. È nata dalle Sei Sorelle (le Sei Figlie della Creazione, generate da Ithar — lore già esistente in Tresil/Kaelvaran); per questo le chiama le sue \"6 madri\". Il suo obiettivo è attraversare il velo ed entrare nell'Irkalla, il regno dei morti, per dare giustizia alle sue madri.\n\nAttorno a lei nasce un sistema di credenze in contrapposizione a quello delle Sei Sorelle — le sue stesse madri — ed esiste un gruppo che sta riunendo le fedi disperse in un unico Pantheon (alleato o nemico di Furiosa? da stabilire).\n\nTemi/nucleo: il decadimento degli esseri umani nasce dal nascondere la verità — mentire, non accettare, razionalizzare. La verità è il divino: ha bellezza, grazia, una forza immensa. Vedere il divino soffocato e negato dagli uomini è ciò che genera in Furiosa frustrazione, e quindi furia. È una combattente. Odia le bugie. (Nota: lo stesso tema della verità attraversa sia il sogno di Zoraya sia la sua backstory personale — cantare la verità le è costato la fuga dalla Scuola della Fiamma.)\n\nCollegamento con la lore esistente: le Sei Sorelle crearono il Mondo dei Sogni Condiviso e scomparvero nella Frattura dopo aver sconfitto Ithar; i loro Frammenti sono già un oggetto noto nella campagna di Tresil (uno è stato recuperato a Roccia Brillante e distrutto da Naru). Resta da stabilire se i frammenti divini di questa campagna siano gli stessi Frammenti delle Sei Sorelle o di natura diversa, legata specificamente a Furiosa. Indizio dal giorno 8: la fusione Kaf+Theris in mano a Rei non ha mostrato corruzione come quella di Ados — forse la corruzione dipende da chi fonde e perché."
      }
    ],
    personaggi: [
      {
        id: "ados-kesper",
        nome: "Ados e gli Otto Raggi di Kesper",
        colore: "#c4954a",
        condiviso: false,
        testo: "Gli \"8 Raggi di Kesper\" era il nome del vecchio gruppo di avventurieri di Ados — dalla ruota di Kesper, il carro leggendario di una delle Sei Figlie, a otto raggi come loro. Il gruppo trovò otto frammenti di vetro apparentemente senza valore in un palazzo sotterraneo inesplorato, e se li divise uno a testa come simbolo del legame — senza mai sospettare avessero un potere.\n\nI membri: Ados (leader, scaltro e forte — oggi ossessionato dal recuperare tutti i frammenti dopo aver ucciso per sbaglio la moglie Lilglia, il cui frammento si è fuso col suo, corrompendolo). Kaf — morto (ucciso da Rei, giorno 8 del terzo mese); il suo frammento si è fuso con quello di Theris ed è ora in possesso di Rei. Refistas (studioso metodico, ucciso dai banditi sulla strada per Tresil mentre andava a un appuntamento con Whilliam alla Rosa Storta — nei suoi ultimi giorni indagava sui frammenti in un taccuino). Whilliam — identificato in gioco come il locandiere della Rosa Storta stesso; minacciato da tre uomini legati alla vecchia compagnia (uno ucciso da Rei); probabilmente possiede ancora il proprio frammento. Berer (esploratore, morto poco prima che Refistas si ritirasse — sepolto da Refistas a Pozzprofond, ai piedi di un castagno, col proprio frammento). Elia (morta di parto, il suo frammento donato a un orfanotrofio). Theris — morto in scena (giorno 8), Rei ha tentato invano di salvarlo.\n\nStato dei frammenti: Ados ha il proprio + quello di Lilglia (fusi e corrotti). Kaf+Theris fusi, in possesso di Rei (fusione SENZA segni di corruzione — dato rilevante per l'ipotesi di Refistas, vedi sotto). Quello di Berer è ancora sepolto a Pozzprofond, mai reclamato. Quello di Elia è a destinazione sconosciuta dopo l'orfanotrofio. Quello di Refistas è di stato sconosciuto — finito nel bottino dei banditi? Ancora sul corpo? Whilliam presumibilmente ha ancora il suo.\n\nSviluppi dal tavolo (giorno 9): tre uomini hanno minacciato Whilliam alla Rosa Storta (uno ucciso da Rei, due dispersi) — dalle loro parole, probabile legame con la vecchia compagnia. Identità e mandante non confermati: possibile collegamento con Ados stesso (che nella Lettera V aveva già minacciato di morte l'intero gruppo) o con \"la Madre Nera\" temuta da Rei. Osservate anche due giovani donne sospette nella stessa locanda, ruolo non sviluppato.\n\nIpotesi di Refistas (dal suo taccuino, non confermata): il cristallo/frammenti sarebbero magia antica non più concessa agli uomini, capace di spezzare il velo se riuniti — possibile collegamento diretto con la corruzione di Ados e con l'obiettivo di Furiosa di attraversare il velo verso l'Irkalla. Da confermare/correggere alla luce del dato sulla fusione Kaf+Theris priva di corruzione.\n\nPossibile collegamento non confermato: nella Sessione 2, un villaggio è terrorizzato da una setta che venera/teme un'entità chiamata \"Lilglia\", con uno zombie dello stesso nome a dirigere un rituale — stesso nome della moglie defunta di Ados. Se sia la stessa entità (magari risorta o corrotta a sua volta) è un'ipotesi narrativamente forte ma NON decisa: va trattata come pista aperta, non come fatto stabilito."
      }
    ]
  },

  // ── THREAD APERTI — punti di sviluppo ancora da definire ──
  thread: {
    sviluppo: [
      { id: "th-01", testo: "Classi/ruoli meccanici D&D ancora da fissare per Zoraya e Rei (Nikla è alchimista, Karl ha rudimenti di spada/scudo e un accenno di metalbending)." },
      { id: "th-02", testo: "Relazioni/legami tra i quattro protagonisti prima dell'inizio della campagna, incluso come Karl si inserisce rispetto agli altri tre." },
      { id: "th-03", testo: "Dettagli della \"profezia di distruzione\" citata nella trama principale." },
      { id: "th-04", testo: "Il gruppo che unifica le fedi in un Pantheon: chi sono, obiettivi, alleati o nemici di Furiosa?" },
      { id: "th-05", testo: "Rapporto tra i frammenti divini di questa campagna e i Frammenti delle Sei Sorelle già noti a Tresil." },
      { id: "th-06", testo: "Chi diventerà il campione di Furiosa e come si arriva a quella scelta (Zoraya è candidata naturale, ma da rivalutare anche alla luce del nuovo arco di Rei)." },
      { id: "th-07", testo: "Cosa è successo esattamente al frammento di Refistas dopo la sua morte (bottino dei banditi? recuperabile?)." },
      { id: "th-08", testo: "Dove/quando il party trova le lettere di Ados e il taccuino di Refistas nella trama — il diario di Whilliam è più vicino ora che è un PNG raggiungibile." },
      { id: "th-09", testo: "Confermare o correggere l'ipotesi di Refistas sulla vera natura dei frammenti, alla luce della fusione Kaf+Theris priva di corruzione." },
      { id: "th-10", testo: "Aggancio narrativo di Verolinguo — come entra concretamente nel party." },
      { id: "th-11", testo: "Chi è Karl Brenner nel party — quarto membro stabile o sostituto? Chi è \"X\", la donna di cui si innamora nella sua backstory?" },
      { id: "th-12", testo: "Chi/cosa è \"la Madre Nera\" che Rei teme possa averla trovata, e chi è il suo \"vecchio maestro\"." },
      { id: "th-13", testo: "Identità e mandante dei tre uomini della Rosa Storta e delle due donne sospette osservate nella stessa scena." },
      { id: "th-14", testo: "Chi è \"il ragazzo derelitto\" di cui Whilliam si prende cura alla locanda." },
      { id: "th-15", testo: "Cosa faceva esattamente il frammento di Theris quando Rei lo toccava la prima volta (visioni/specchio/\"altra sé\") — perché ha smesso di funzionare una volta fuso con quello di Kaf." },
      { id: "th-16", testo: "Se \"Lilglia\" (lo zombie che dirige il rituale del villaggio, Sessione 2) sia la stessa Lilglia moglie defunta di Ados — ipotesi forte ma non confermata." },
      { id: "th-17", testo: "Confermare la suddivisione esatta tra Sessione 1 e Sessione 2 nella scaletta scene/colonna sonora — attualmente solo un'ipotesi di lavoro." }
    ]
  }

};
