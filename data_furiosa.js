// ============================================================
// FURIOSA — data_furiosa.js
// Campagna dei Frammenti Divini
// ============================================================
// Struttura analoga a data.js (Tresil). Contenuti presi dai
// documenti di sviluppo su Drive (cartella "Furiosa/Campagna"),
// aggiornati al 4 settembre 2026 con: le schede dei quattro
// giocatori (Zoraya, Nikla, Karl, Rei), il diario in-play di Rei
// (giorni 8-9 del terzo mese), la scaletta scene/colonna sonora
// delle prime due sessioni giocate al tavolo, e la trascrizione
// Plaud della Sessione 3 (2-3 settembre 2026, conclusione dello
// scontro alla Rosa Storta e racconto completo di Whilliam).
// ============================================================

const FURIOSA_DATA = {

  meta: {
    titolo: "Archivio di Furiosa",
    sottotitolo: "Campagna dei Frammenti Divini",
    dataAttuale: "Notte fra il giorno 12 e il giorno 13 del terzo mese — il party si trova ancora a Fonte Verde, subito dopo le visioni di Furiosa avute da tutti e quattro i personaggi: la seduta si è chiusa lì",
    prossimaDestinazione: "Non ancora decisa — la sessione si è interrotta nel mezzo delle rovine di Fonte Verde, appena dopo le visioni"
  },

  sezioni: [
    { id: "panoramica", label: "Panoramica",    icona: "◈" },
    { id: "personaggi", label: "Personaggi",    icona: "◉" },
    { id: "otto-raggi", label: "Gli Otto Raggi", icona: "✦" },
    { id: "pv-rei",     label: "Rei",           icona: "R" },
    { id: "pv-zoraya",  label: "Zoraya",        icona: "Z" },
    { id: "pv-nikla",   label: "Nikla",         icona: "N" },
    { id: "pv-karl",    label: "Karl",          icona: "K" },
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
    "Wvrewvrol":            { sezione: "personaggi", voce: "wvrewvrol",  label: "Wvrewvrol" },
    "Whilliam":             { sezione: "otto-raggi", voce: "whilliam",   label: "Whilliam" },
    "Rosa Storta":          { sezione: "otto-raggi", voce: "whilliam",   label: "Whilliam", soloMaster: true }
  },

  panoramica: {
    filoGiocatori: "Zoraya arriva a Tresil portando con sé un sogno ricorrente: una donna coperta di sangue che danza, furiosa, in un bosco fatto di pietra. Nikla, dopo aver ricevuto lettere e un manuale che non sa ancora spiegarsi, si mette in viaggio; il gruppo si forma vagando per la città. Rei, sola da mesi, viene coinvolta in un incarico che si rivela una trappola: toccando un frammento di vetro prova un moto mai sentito prima, non riesce a salvare Theris, e uccide Kaf per legittima difesa — i due frammenti recuperati si fondono in uno solo in suo possesso.\n\nIl gruppo arriva alla locanda Rosa Storta, dove scopre che il locandiere, Whilliam, faceva parte di un vecchio gruppo di avventurieri — gli Otto Raggi di Kesper — legato a frammenti di vetro identici ai loro. Tre sgherri mandati da Ados, uno di quel vecchio gruppo, minacciano Whilliam per impossessarsene: nello scontro Rei ne uccide due, che si rialzano incredibilmente come non-morti, e la lotta si trascina fino al giorno dopo. Whilliam dona a Karl un guanto d'arme di famiglia, che rigenera lentamente le ferite di chi lo indossa; poco prima, salvando una bambina da un uomo che voleva farle del male, Karl aveva già iniziato a percepire misteriosi \"punti rossi\" di pericolo su persone e oggetti — capacità che nessuno del gruppo sa ancora spiegare. Whilliam racconta poi la storia degli Otto Raggi: un tempio lontano dove il vecchio gruppo trovò otto frammenti e se li divise per scherzo come souvenir, e dove Ados dichiarò il proprio amore a Lilglia, poi sua moglie, morta di recente. Conferma che è Ados il mandante degli aggressori e implora il party di trovarlo e, se possibile, salvarlo.\n\nIl gruppo parte per Pozzprofond sulle tracce di Ados. Lungo la strada Zoraya impara a cavalcare mentre le condizioni di Karl peggiorano; a Pozzprofond trovano la tomba di Berer, un altro membro degli Otto Raggi, profanata di recente — suo nipote e il fratello di Berer non conoscono Ados, ma indicano Fonte Verde, a ovest, sconsigliando vivamente di andarci. Nella notte Karl ha un crollo psicologico e si allontana da solo; il gruppo lo ritrova e si riunisce.\n\nA Fonte Verde, di notte, il party si imbatte in una processione silenziosa attorno a una casa con gli scuroni chiusi, e in una decina di cadaveri di ragazze con la gola tagliata. Dentro, un \"Gran Sacerdote\" sta officiando un rituale su una donna dalla pelle cadente, che porta al collo un anello di metallo incastonato di frammenti rosso sangue. Nello scontro che segue, Karl le strappa l'anello dal collo — lei gli spezza due costole prima che Zoraya le recida la mano — e vi incastra i frammenti già in possesso del party. Tutto si spegne: ciascuno dei quattro ha una propria visione di un'entità che si presenta come Furiosa, che chiede loro di aiutarla a essere \"ricomposta\" e offre a ognuno un dono diverso, calibrato sul proprio desiderio più profondo. Nessuno ha ancora risposto.",
    filoMaster: "Furiosa è una divinità della furia, nata dalle Sei Sorelle (le Sei Figlie della Creazione, generate da Ithar — stesso lore già presente nella campagna di Tresil), e si presenta frammentata. A Fonte Verde (Sessione 4), dopo che Karl ha incastrato in un anello di metallo i frammenti già in possesso del party, tutti e quattro i personaggi hanno avuto una visione separata di Furiosa, che ha chiesto a ciascuno di loro di essere \"ricomposta\", offrendo un dono calibrato sul desiderio di ognuno — a Karl ha chiesto esplicitamente di ergersi a suo campione. Nessuno dei quattro ha ancora risposto al patto.\n\nFuriosa vuole attraversare il velo ed entrare nell'Irkalla (il regno dei morti) per dare giustizia alle sue sei madri. Attorno a lei nasce un sistema di credenze in contrapposizione a quello delle Sei Sorelle — le sue stesse madri — ed esiste un gruppo che sta riunendo le fedi disperse in un unico Pantheon: se sia alleato o nemico di Furiosa resta da stabilire.\n\nPunto di lore ancora aperto: se i frammenti divini di questa campagna coincidano con i Frammenti delle Sei Sorelle già noti nella campagna di Tresil, o siano di natura diversa (vedi Lore Segreta). Indizio nuovo dal giorno 8: la fusione dei frammenti di Kaf e Theris in mano a Rei non ha mostrato segni di corruzione come quella di Ados — forse la corruzione dipende da chi fonde e perché, non dal semplice atto di fondere.",
    statoGiocatori: "La campagna è in corso: il party ha già affrontato quattro sessioni al tavolo. Dopo la Rosa Storta e la ricerca di Ados a Pozzprofond/Fonte Verde, il gruppo ha vissuto un rituale sanguinoso, ha recuperato un cerchio di metallo strappato a una misteriosa donna sfigurata, e tutti e quattro hanno avuto una visione di Furiosa che chiede loro di essere ricomposta.",
    statoMaster: "Quattro sessioni giocate finora (vedi Sessioni). Dopo Pozzprofond (ricerca di Berer, tomba profanata), il fratello di Berer ha indirizzato il party a Fonte Verde, a ovest, sconsigliando di andarci — dove si troverebbe Ados. Lì il party si è imbattuto in una processione notturna e in un rituale diretto da un \"Gran Sacerdote\": una donna sfigurata (nella verità di Lore Segreta, Lilglia — la moglie non-morta di Ados) portava al collo un anello di metallo incastonato di frammenti rosso sangue. Nello scontro Karl le ha strappato l'anello; subito dopo, incastrando in esso i frammenti già in possesso del party, si è verificato un blackout sensoriale seguito da quattro visioni separate — una per PG — di Furiosa, che chiede a tutti di essere \"ricomposta\" e offre poteri in linea con i desideri di ciascuno. A Karl ha chiesto esplicitamente di ergersi a suo campione."
  },

  personaggi: {
    pg: [
      {
        id: "zoraya", nome: "Zoraya Al Khmani", giocatore: "Federica",
        colore: "#5a8fd4", iniziali: "Z", immagine: "images/zoraya.webp",
        tag: ["Cantrice", "Ex allieva della Scuola della Fiamma", "Percepisce la verità e le intenzioni", "Compagna: Wvrewvrol"],
        descrizione: "25 anni, del Mare Dorato. Cantrice capace di percepire la verità e le intenzioni nascoste dietro le parole altrui. Non viaggia mai sola: al suo fianco c'è sempre Wvrewvrol, una rana che la accompagna ovunque.",
        loreGiocatori: "Figlia di un pescatore e di una tessitrice di reti che canta mentre lavora, ultima di 5 fratelli. Cresciuta tra i vicoli del porto, impara la lotta dal fratello maggiore e sviluppa presto un forte rifiuto delle gerarchie nate dalle \"vie\": non accetta che i Figli della Cenere abbiano fiamme fioche solo perché nati nello scalino più basso della società — un'ingiustizia per cui si è già presa più di una cicatrice sul volto.\n\nMandata dal padre alla Scuola della Fiamma per diventare Jyotir, durante gli anni di studio matura una discordanza crescente con ciò che vede: il Grande Jyotir servito in ogni funzione da un esercito di Figli della Cenere. Il giorno del suo esame pubblico, invece di dimostrarsi degna, canta contro l'ingiustizia delle vie e dichiara il Grande Jyotir indegno perfino di accendere un cerino — poi fugge prima che le guardie la accerchino. Probabile evento scatenante del suo attuale girovagare.\n\nHa visioni ricorrenti nel sonno: sogna una donna coperta di sangue, una corona di spine sulla fronte, che danza in un bosco fatto di alberi che non sono alberi — tronchi di pietra, tetti di tegole al posto delle chiome. La sua danza è passione e furia insieme; intorno, ai margini della luce del fuoco, restano immobili sagome di uomini, animali e ombre, incapaci di avvicinarsi. Quando per un istante gli sguardi si incrociano, quella rabbia la attraversa come una scarica — e si sveglia senza sapere se l'ha solo vista, o se ora le appartiene.",
        loreMaster: "Il sogno è quasi certamente una visione di Furiosa stessa: segno di un legame speciale tra Zoraya e la dea. È la candidata più naturale a diventarne il campione, ma la scelta non è ancora stata narrata né decisa in modo definitivo — Sessione 4 ha spostato l'ago verso Karl, a cui Furiosa ha chiesto esplicitamente di ergersi a suo campione. Il tema della \"verità\" nella sua backstory (canta la verità sulle gerarchie, sul Grande Jyotir) è un parallelo diretto con Wvrewvrol — non ancora sfruttato narrativamente. La fuga dalla Scuola della Fiamma è un candidato forte per spiegare come Zoraya arriva a incontrare Nikla e Rei.\n\nSessione 4 (Fonte Verde): è Zoraya, non Rei, a recidere la mano della donna sfigurata dopo che questa ha infilato la mano nel costato di Karl spezzandogli due costole, liberandolo. Ha poi una propria visione di Furiosa — che la riconosce come la donna del suo sogno ricorrente — le chiede di far ardere insieme la fiamma della verità e di ricomporla, e non risponde quando Zoraya le chiede se lei stessa e i suoi frammenti siano \"la chiave\".",
        note: ""
      },
      {
        id: "nikla", nome: "Nikla Kruv", giocatore: "Alessandra",
        colore: "#8f72d4", iniziali: "N", immagine: "images/nikla.webp",
        tag: ["Maga dell'inchiostro", "Sigilli", "Compagno: inchiostro senziente"],
        descrizione: "25 anni, di Ferrath (Ferromarchi). Maga dell'inchiostro: la sua magia passa attraverso i sigilli che disegna e sviluppa personalmente, componendoli in un sistema di tatuaggi. Il suo strumento — e in un certo senso il suo famiglio — è un inchiostro senziente e maledetto: non lancia gli incantesimi in modo diretto, è l'inchiostro stesso a canalizzarne l'effetto.",
        loreGiocatori: "Orfana, cresciuta nelle fogne di Ferrath dopo la morte dei genitori (operai, morti in un incidente sul lavoro quando lei aveva 6 anni). Cresciuta da Mr. Percival Mirr, che la prende in simpatia e la introduce ai segreti delle fogne — la figura paterna più vicina che abbia mai avuto, da cui eredita un forte senso critico verso il mondo.\n\nCarattere curioso e flessibile, ma con una visione del mondo diadica: giusto o sbagliato, nessuna scala di grigio. Una volta guadagnata la sua fiducia, è leale per sempre. Arrampicatrice esperta (ogni superficie delle fogne era \"casa\"); pessima cuoca.\n\nDa mesi cerca una biblioteca nascosta di testi antichi legati alla Volontà magica dei Primi Uomini — l'ha mancata per poco: un gruppo di tagliagole l'ha trovata per prima e sta bruciando i volumi per scaldarsi.",
        loreMaster: "Ipotesi di lore non confermata: l'inchiostro senziente potrebbe essere un fatato antico, un ex strumento di espressione del Mondo dei Sogni Condiviso — forse \"mezzo fatato\", cosa che la stessa Nikla potrebbe ignorare. Rischi e lato oscuro del suo utilizzo ancora da sviluppare. Possibile aggancio con la sottocultura/\"frangia nascosta\" di Ferrath già nota in lore, dato il suo passato nelle fogne — da esplorare.\n\nPossiede due frammenti: il proprio e quello di Refistas, recuperato dalla sua borsa sottratta ai banditi (non un dono di una sorella, come inizialmente frainteso da un errore di trascrizione — Nikla non ha sorelle in scena). Sessione 4 (Fonte Verde): durante l'evocazione d'ombra viene colpita da un pugnale al petto e crolla, gravemente ferita/morente; ha una visione di Furiosa che le offre conoscenza perduta e accesso rhetorico al \"codice sorgente\" (vedi Lore Segreta — non un indizio letterale), interrotta da qualcosa che tenta di tirarla via: nella finzione narrativa è la Morte stessa, poiché Nikla era in quel momento morente in scena.",
        note: "I suoi sigilli possono essere progettati e consultati nell'Officina Sigilli dell'archivio."
      },
      {
        id: "karl", nome: "Karl Brenner", giocatore: "Jacopo",
        colore: "#c4954a", iniziali: "K", immagine: "images/karl.webp",
        tag: ["Paladino", "Plasmare il metallo", "Ex guardia cittadina"],
        descrizione: "26 anni, di Ferrath (Ferromarchi) — come Nikla. Paladino capace di plasmare il metallo a proprio piacimento (accenno di metalbending, coerente con la Volontà Ferromarchi — poco esplorato finora, non essendo di suo particolare interesse), un dono che unisce alla sua fede e alla sua forza in combattimento.",
        loreGiocatori: "Famiglia medio-borghese: padre pragmatico e artigiano del legno/metallo, madre affettuosa ma sottomessa in casa. Svogliato e poco entusiasta della vita, finché non si innamora perdutamente di Claudia, che dà scopo alla sua esistenza. La mette incinta; la famiglia di lei li allontana per motivi economici. Karl si arruola nella guardia cittadina per garantire un reddito solido, e la sposa: nasce la figlia Hetel Brenner — entrambe, Claudia e Hetel, uccise da briganti una sera in cui Karl era di ronda. Ne segue un trigger di depressione e senso di colpa profondo; inizia la storia gravemente malnutrito ed emaciato, molto più magro del suo fisico massiccio abituale.\n\nCarattere paziente e gentile, morale solida ma difficoltà a esprimere emozioni; dopo la tragedia alterna deflessione umorale ad aggressività manifesta. Rudimenti di combattimento con spada e scudo; carpenteria e artigianato di base.",
        loreMaster: "Personaggio non presente nei documenti di sviluppo originali — emerso solo dalla scheda ricevuta il 1 settembre 2026. Non è chiaro se sia un quarto membro stabile del party o se il suo inserimento sostituisca/riconfiguri la composizione a tre nota in precedenza: da chiarire con il tavolo. Resta aperto anche chi sia la bambina che Karl racconta di aver protetto da un uomo che voleva farle del male (Sessione 3), e come si concili con la sua scheda.\n\nSessione 3: la vista dei \"punti rossi\" di pericolo/connessione NON nasce con il guanto d'arme — Karl la manifesta per la prima volta poche ore prima di arrivare alla Rosa Storta, mentre salva una bambina da un uomo che voleva farle del male; si ripete poco dopo vedendo Nikla e Rei entrare nella locanda, e ancora vedendo Zoraya scendere le scale — sulle tre ragazze un oggetto risalta enormemente nella sua vista sfocata (la cintura di Nikla, il fermaglio di Zoraya). Capacità ancora senza spiegazione neppure per i giocatori stessi. Solo dopo, dentro la locanda, Whilliam gli fa indossare un guanto d'arme di famiglia: frammenti del guanto gli penetrano dolorosamente nella mano per fissare e riparare lentamente i tessuti rotti al suo interno — è la funzione dell'armatura di Whilliam, un effetto distinto e non collegato ai punti rossi.\n\nSessione 4 (Fonte Verde): nel combattimento contro il \"Gran Sacerdote\" e la donna sfigurata, Karl le strappa dal collo l'anello di metallo con i frammenti rosso sangue — lei gli infila la mano nel costato spezzandogli due costole, e viene salvato da Zoraya che le recide la mano. Incastra in quell'anello il proprio frammento e quello di Rei e tenta di aggiungere anche quelli di Nikla: si verifica un blackout sensoriale seguito da una visione di Furiosa, che gli mostra la notte in cui morirono Claudia e Hetel (con la scarsella al polso — la stessa di sempre, che porta senza mai farci caso: la paga dell'ultimo mese, la chiave di casa, il coltellino con cui intaglia il legno per un regalo alla figlia; nessun mistero, solo un dettaglio che nella visione nota per la prima volta). Furiosa gli dice che ciò che è stato è stato, che loro — Claudia ed Hetel, NON le \"Sei Madri\" di Furiosa — volevano solo vivere, si sono aggrappate alla vita con le unghie e i denti; gli chiede esplicitamente di ergersi a suo campione, e gli promette un potere descritto come \"dieci unghie, dieci vite puoi ancorare al corpo\" — risvegliando in lui un talento sopito per plasmare il metallo: il guanto d'arme non si fonde alla sua mano, è Karl a iniziare a percepirne il materiale e la sua malleabilità, sentendo che può plasmarlo con molta più facilità di prima. Nessuna risposta di Karl alla proposta ancora giocata al tavolo.",
        note: ""
      },
      {
        id: "rei", nome: "Rei", giocatore: "Giulia",
        colore: "#c45a5a", iniziali: "R", immagine: "images/rei.webp",
        tag: ["Assassina", "Anima strappata", "Oltre il velo"],
        descrizione: "Assassina la cui anima è stata strappata: una metà vive ancora nel mondo reale, l'altra resta oltre il velo, in un altrove che nessun altro personaggio può percepire come lei.",
        loreGiocatori: "Il suo aggancio alla campagna comincia in un bar di una zona malfamata: viene avvicinata da un tale, Kaf, che vuole ingaggiarla per inscenare un alterco pubblico con un secondo uomo, Theris — il piano di Kaf è ucciderlo durante la rissa per rubargli un frammento e far ricadere la colpa su di lei. Per motivi personali, l'incarico le riporta alla mente un'avventura vissuta tempo fa con un vecchio gruppo, sotto un \"vecchio maestro\" che le insegnò a uccidere \"come un lavoro, senza volontà\".\n\nGiorno 8 del terzo mese: mentre è con Theris, lui lancia sul tavolo con frustrazione il proprio frammento di vetro. Rei lo tocca — qualcosa in lei si smuove, un moto mai provato prima — e cerca di salvarlo, ma fallisce: Theris muore. Segue uno scontro in cui Rei uccide Kaf, che l'avrebbe uccisa per prima. I due frammenti recuperati si fondono in uno solo in tasca sua, e da quel momento toccarlo non produce più alcun effetto.\n\nGiorno 9: alla locanda Rosa Storta scopre che Whilliam ne è il locandiere. Tre uomini entrano e lo minacciano; Rei, spinta per la prima volta da un vero moto di protezione — non più il \"lavoro senza volontà\" del suo addestramento — si offre di occuparsene e ne colpisce a morte due. I tre, incredibilmente, si rialzano come non-morti (vedi Sessione 3).",
        loreMaster: "Kaf e Theris erano due degli otto membri del vecchio gruppo di avventurieri di Ados, gli \"Otto Raggi di Kesper\" (vedi Lore Segreta) — entrambi ora morti in scena, entrambi per mano di Rei. Il frammento fuso Kaf+Theris è ora in possesso di Rei. Sessione 3: Rei finisce uno dei tre non-morti spappolandogli la testa con un calderone, poi vomita per lo shock. Elementi ancora da sviluppare: chi/cosa è \"la Madre Nera\" che Rei teme possa averla trovata; chi è il suo \"vecchio maestro\".\n\nSessione 4 (Fonte Verde): durante il rituale, Rei combatte evitando per quanto possibile di usare lame sulla gola altrui (la solita paura delle convulsioni), viene sommersa e ferita più volte, aiuta a raccogliere i frammenti e ha una propria visione di Furiosa, che le chiede di \"rinascere completa\" e le offre \"la libertà di essere completi\" — la stessa formula già annotata come battuta di Furiosa nel primo contatto (vedi \"Furiosa — la Divinità\"). Rei le tende la mano nella visione.",
        note: ""
      }
    ],
    png: [
      {
        id: "wvrewvrol", nome: "Wvrewvrol", giocatore: "", tipo: "png",
        colore: "#5ab48f", iniziali: "W",
        tag: ["PNG comico", "Spiritello", "Legato a Zoraya"],
        descrizione: "Spiritello della verità imbarazzante. Non nasce da un singolo evento, ma dall'accumulo di ogni \"non dovevi dirlo\" della storia: è lo spirito di tutte le verità vomitate fuori nei momenti sbagliati. Non riesce a mentire nemmeno volendo — la verità gli esce di bocca come un singhiozzo, per quanto imbarazzante o pericolosa. Ha sempre e solo forma di rana (confermato in Sessione 3: non ha una forma umanoide alternativa). Il suo nome è Wvrewvrol; si definisce \"gran cavaliere della verità raggiante\".",
        loreGiocatori: "Si è legato a Zoraya perché lei è, letteralmente, la verità più grande e ingombrante che lui abbia mai incontrato camminare su due gambe — e per la prima volta le sue uscite non vengono accolte con orrore, ma (quasi) capite. La sua saliva ha proprietà rigenerative fatate, ma funziona bene solo su ferite superficiali: davanti a una ferita grave si blocca, o peggio, ne annuncia ad alta voce la gravità. Odia leccare le ferite (confermato in gioco, Sessione 3) — lo fa comunque perché è l'unico modo in cui la sua magia funziona. Se catturato o interrogato non può mentire per proteggere il gruppo — utile gancio per una missione di salvataggio.",
        loreMaster: "Aggancio narrativo di come entra nel party ancora da definire. Parallelo tematico con la backstory di Zoraya (entrambi legati al tema della verità detta nel momento sbagliato) — non ancora sfruttato.",
        note: ""
      }
    ]
  },

  // ── GLI OTTO RAGGI — vecchio gruppo di avventurieri di Ados ──
  // Ciò che i giocatori sanno di ciascuno dei membri, per lo più
  // dal racconto di Whilliam in Sessione 3. I dettagli riservati
  // (lettere, taccuino di Refistas, meccaniche di corruzione)
  // restano solo in Lore Segreta.
  ottoRaggi: {
    intro: "Il vecchio gruppo di avventurieri di Ados — \"Gli Otto Raggi di Kesper\", dal nome di una ruota leggendaria a otto raggi. In un tempio senza nome, molto a est, il gruppo trovò otto frammenti di vetro e se li divise per scherzo, come souvenir, senza sospettarne il potere: fu lì che Ados dichiarò il proprio amore a Lilglia. Whilliam ha raccontato per esteso questa storia al party nella Sessione 3, confermando anche che Ados è il mandante dei tre uomini che lo hanno assalito alla Rosa Storta.",
    membri: [
      {
        id: "ados", nome: "Ados", iniziali: "A", colore: "#8f4444",
        tag: ["Leader informale", "Mandante degli assalitori"],
        testo: "Scaltro e forte, era il leader informale del gruppo. Marito di Lilglia, morta di recente a 82 anni. Whilliam ha confermato che è lui il mandante dei tre uomini che hanno assalito la Rosa Storta, e ha implorato il party di andare a cercarlo e, se possibile, salvarlo — ricordando che \"è una brava persona, che illuminava gli altri\". A Pozzprofond, il fratello di Berer ha indicato ai PG Fonte Verde, a ovest, come il luogo dove si troverebbe Ados — sconsigliando però di andarci. Il party si è recato a Fonte Verde ed è finito in un rituale notturno (vedi Sessione 4); Ados stesso non si è ancora fatto vedere in scena."
      },
      {
        id: "lilglia", nome: "Lilglia", iniziali: "L", colore: "#c4954a",
        tag: ["Moglie di Ados", "Guaritrice", "Deceduta"],
        testo: "Moglie di Ados, grande guaritrice del gruppo. Morta di recente all'età di 82 anni (dettaglio raccontato da Whilliam in Sessione 3). Il tempio dove il gruppo trovò gli otto frammenti fu anche il luogo in cui lei e Ados si dichiararono per la prima volta il proprio amore."
      },
      {
        id: "kaf", nome: "Kaf", iniziali: "K", colore: "#7a7a7a",
        tag: ["Deceduto"],
        testo: "Veloce con le mani, interessato solo al denaro. Aveva ingaggiato Rei per incastrare Theris e rubargli il frammento — un piano finito male: Kaf è morto in combattimento per mano di Rei, che gli ha preso il frammento (giorno 8 del terzo mese)."
      },
      {
        id: "refistas", nome: "Refistas", iniziali: "R", colore: "#5a8fd4",
        tag: ["Studioso", "Deceduto"],
        testo: "Studioso, un vero \"tuttologo\" metodico più che uno specialista. Ucciso dai banditi sulla strada per Tresil, mentre andava a un appuntamento con Whilliam alla Rosa Storta — un incontro che quindi non è mai avvenuto."
      },
      {
        id: "whilliam", nome: "Whilliam", iniziali: "W", colore: "#c4954a",
        tag: ["Locandiere della Rosa Storta", "Vivo"],
        testo: "Semplice, enorme, immune alle lusinghe; adora Ados e farebbe di tutto per lui. Identificato in gioco come il locandiere della Rosa Storta stesso. Minacciato alla locanda dai tre uomini mandati da Ados, difeso da Rei e dal party nello scontro; nello scontro finale (Sessione 3) dichiara \"Sono già morti, ragazzo!\", indossa il busto della sua armatura di famiglia (lo guarisce non appena indossata) e affida a Karl il guanto d'arme dello stesso set (rigenera lentamente le ferite di chi lo indossa). A scontro concluso racconta per esteso al party la storia degli Otto Raggi, conferma che Ados è il mandante dei tre aggressori, rivela di aver già rispedito il proprio frammento ad Ados tramite un messo — pentendosene amaramente — e chiede al party di andare a cercare Ados e, se possibile, di salvarlo."
      },
      {
        id: "berer", nome: "Berer", iniziali: "B", colore: "#5ab48f",
        tag: ["Esploratore", "Deceduto"],
        testo: "L'esploratore del gruppo, grande amico di Refistas. Morto poco prima che Refistas si ritirasse dalla vita da avventuriero. Sepolto da Refistas nel villaggio di Pozzprofond, ai piedi del castagno su cui giocava da bambino — proprio la destinazione verso cui il party è ora diretto."
      },
      {
        id: "elia", nome: "Elia", iniziali: "E", colore: "#c47070",
        tag: ["Deceduta"],
        testo: "Morta di parto, dando alla luce due gemelli. Il suo frammento è stato donato a un orfanotrofio."
      },
      {
        id: "theris", nome: "Theris", iniziali: "T", colore: "#8f72d4",
        tag: ["Deceduto"],
        testo: "La vittima designata nel piano di Kaf. Morto in scena (giorno 8 del terzo mese) — Rei ha tentato invano di salvarlo. Prima di morire le ha lasciato il proprio frammento, poi fusosi con quello di Kaf."
      }
    ]
  },

  // ── PUNTI DI VISTA — ciò che ogni PG sa, ricorda, ha vissuto ──
  // Contenuti soggettivi: non necessariamente la verità oggettiva
  // (quella è in Lore Segreta), ma quello che il personaggio stesso
  // sa, crede, ha sognato o percepito. Ricostruiti da backstory dei
  // giocatori, diario in-play di Rei e trascrizioni Plaud delle sessioni.
  // Aggiornato al 12 settembre 2026 (Sessione 4).
  //
  // CONVENZIONE per i prossimi aggiornamenti: la prima voce di ogni
  // sezioni[] di ciascun PG deve essere il recap dell'ULTIMA sessione
  // giocata, con label "Ultima sessione — <titolo>". Quando si aggiunge
  // la sessione successiva, rinominare la voce esistente con il titolo
  // della sessione a cui si riferisce (perde il prefisso "Ultima
  // sessione — ") e anteporre la nuova come primo elemento dell'array.
  puntiDiVista: {
    rei: {
      nome: "Rei", giocatore: "Giulia", colore: "#c45a5a", iniziali: "R", immagine: "images/rei.webp",
      sottotitolo: "Ciò che Rei sa, ricorda e ha vissuto — la sua verità, non necessariamente quella oggettiva.",
      sezioni: [
        {
          label: "Ultima sessione — Fonte Verde e la visione di Furiosa",
          testo: "A Fonte Verde, di notte, il gruppo si imbatte in una processione silenziosa attorno a una casa chiusa e in un rituale in cui un \"Gran Sacerdote\" sgozza una donna. Davanti alla porta compare una donna dalla pelle cadente, un osso visibile allo zigomo, con al collo un anello di metallo incastonato di frammenti rosso sangue — Rei non le dà un nome, non la riconosce. Nello scontro che segue, mentre cerca di evitare — per la solita paura delle convulsioni — di usare le lame sulla gola di chiunque, Rei viene sommersa e ferita più volte; quando Karl strappa l'anello dal collo della donna e questa gli infila la mano nel costato, è Zoraya a reciderle la mano per liberarlo.\n\nSubito dopo, mentre Karl incastra i frammenti nell'anello, tutto si spegne. Rei si ritrova di nuovo nel non-luogo di pietra nera e acqua che già conosce dalle sue visioni precedenti — stavolta con una figura davanti a sé che finalmente ha un volto e un nome. Le dice di essere \"nata da un'ombra, sfruttata\", di lottare per la libertà dalle catene, di \"rinascere completa\"; le chiede di essere ricomposta, promettendole \"la libertà di essere completi\". Rei le chiede chi sia — \"Io sono Furiosa... i miei frammenti ti chiamano\" — e le tende la mano. Rei l'afferra. Un attimo dopo è di nuovo circondata dagli altri, nel caos della scena reale."
        },
        {
          label: "Il suo aggancio alla storia",
          testo: "Tutto comincia in un bar di una zona malfamata: un tale, Kaf, la avvicina per farle inscenare un alterco pubblico con un secondo uomo, Theris — dietro, un piano che lei ignora fino all'ultimo: Kaf vuole ucciderlo durante la rissa per rubargli un pezzo di vetro e far ricadere la colpa su di lei.\n\nCon Theris — un uomo \"perso ma presente\", pieno di ricordi di una vita di avventure che lei invidia — quel pezzo di vetro lanciato sul tavolo con frustrazione le smuove qualcosa che non aveva mai provato prima. Cerca di salvarlo. Fallisce: Theris muore. Poco dopo uccide anche Kaf, che l'avrebbe uccisa per prima — e dalle sue tasche recupera un secondo frammento, che si fonde con quello di Theris in un solo pezzo. Da quel momento toccarlo non produce più nulla: nessuna visione, nessuno specchio, nessuna \"altra sé\", a differenza di prima — ma la storia continua a risuonarle dentro. Tra gli averi di Theris trova un appunto per un appuntamento alla locanda Rosa Storta, e un nome: William."
        },
        {
          label: "La Rosa Storta — giorno 9",
          testo: "Alla locanda osserva tutto come \"l'unica spettatrice di uno strano spettacolo\": i pochi avventori sembrano attori di un teatrino organizzato. William è il locandiere — gentile col \"ragazzo derelitto\" trascinatosi dentro — e due giovani donne che si avvicendano nella sala non la convincono. Il suo primo pensiero, vedendole, è che la Madre Nera l'abbia trovata; scarta presto l'idea, ma resta certa che ognuno di loro sia stato attirato lì per un incontro col destino.\n\nQuando tre uomini loschi minacciano il locandiere, si offre di occuparsene — e nel momento stesso in cui lo dice si stupisce di se stessa: non è più il \"lavoro senza volontà\" del suo addestramento, ma un vero moto di protezione verso un estraneo, sensazione mai provata prima. Nello scontro ne colpisce a morte due; subito dopo un lampo di visione la travolge e perde i sensi. Al risveglio è coperta di sangue, la locanda è un macello, e i tre uomini — nonostante i colpi mortali — si sono rialzati come non-morti. Prova quasi invidia per chi, come le due ragazze, riesce ancora a provare disgusto autentico davanti alla violenza: \"dilettanti\", pensa, e subito dopo si vergogna di averlo pensato.\n\nA un certo punto, davanti a Whilliam che si sta rompendo in lacrime, scopre di piangere anche lei, senza motivo apparente che sappia spiegarsi: chiede se sia una malattia. Le viene detto che si tratta solo di essere commossa — parola che sembra non conoscere davvero.\n\nCuriosamente, nel suo diario Rei non chiama mai le due donne per nome — restano \"le due ragazze\" fino alla fine, anche dopo aver deciso di viaggiare con loro verso Pozzprofond."
        },
        {
          label: "Sogni e visioni",
          testo: "Due volte, toccando qualcosa legato ai frammenti, si è ritrovata a fluttuare nel nulla, senza peso, davanti a una superficie che riflette come un lago ghiacciato. La prima volta, toccando la propria immagine, un'esplosione di emozioni troppo forte da sopportare l'ha scagliata lontano — si è ritrovata piccola e indifesa, rannicchiata sotto i colpi di quelle emozioni, finché non ha alzato lo sguardo e visto due piedi coperti di sangue: una voce di donna le ha detto \"non è ancora finita!\".\n\nLa seconda volta, dopo aver sgozzato un uomo alla Rosa Storta, la stessa scena si è ripetuta — stavolta durante le convulsioni che gli altri hanno scambiato per crisi epilettica, mentre lei fluttuava di nuovo tra quelle stelle."
        },
        {
          label: "Cose che solo lei sa",
          testo: "La paura della Madre Nera — un'entità o organizzazione che teme la stia cercando, la cui natura resta oscura anche a lei stessa. Il ricordo del suo vecchio maestro, che le insegnò a uccidere \"come un lavoro, senza volontà\" — e il contrasto tra quell'addestramento e il nuovo impulso protettivo che ha sentito nascere verso Whilliam è, per lei, qualcosa di completamente inedito.\n\nLa morte, per Rei, è \"come un elastico\": da un lato l'attrae, quasi naturale, memoria di un muscolo; dall'altro la respinge come un'indigestione. Uccidere le procura disgusto e ripugnanza — eppure sente che qualcosa accade in lei ogni volta che entra in contatto con la morte, qualcosa che non sa spiegare."
        },
        {
          label: "Dal suo diario",
          testo: "Scritto di suo pugno (fonte: \"Copia di Terzo mese\", cartella Diario Rei):\n\n\"I suoi occhi… i suoi ricordi… sembrava così perso, eppure così presente […] Avrei voluto provare tutto quel dolore pur di provare qualcosa. E qualcosa in me si è mosso.\"\n\n\"Che senso ha desistere quando è la morte stessa a venirmi a cercare? Quando è l'unica cosa che so davvero fare bene?\"\n\n\"Voglio scegliere perché so cosa volere, desiderare, non perché eseguo ordini o seguo un istinto primario… E credo che tutto questo possa avvicinarmi un po' alla mia verità.\"\n\n\"Non mi sento terribilmente sola da quando sono rinata? […] Perché non dovrei anche io concedermi questa nuova esperienza?\""
        },
        {
          label: "Domande che si porta dietro",
          testo: "Chi o cosa sia davvero la Madre Nera, e se la stia ancora cercando. Chi fosse il suo vecchio maestro, e perché le abbia insegnato a uccidere senza volontà. Cosa significhino le sue visioni — quella voce femminile, quei piedi insanguinati, quella bambina rannicchiata che piange. Perché ora, per la prima volta, sente nascere in sé un moto di protezione verso qualcun altro. E ora, chi è davvero Furiosa, e cosa significa esattamente \"ricomporla\"."
        }
      ]
    },
    zoraya: {
      nome: "Zoraya", giocatore: "Federica", colore: "#5a8fd4", iniziali: "Z", immagine: "images/zoraya.webp",
      sottotitolo: "Ciò che Zoraya sa, ricorda e ha vissuto.",
      sezioni: [
        {
          label: "Ultima sessione — Fonte Verde e la visione di Furiosa",
          testo: "Alla processione notturna di Fonte Verde, Zoraya si oppone alle guardie dagli occhi bianchi mentre la casa prende fuoco attorno a loro; nel caos che segue aiuta Karl, che si è aperto un varco a spintoni per raggiungere la donna sfigurata, restandogli \"a traino\". Quando quest'ultima gli infila la mano nel costato spezzandogli due costole, è Zoraya a reciderle di netto la mano per liberarlo.\n\nQuando tutto si spegne, si ritrova sospesa nella stessa landa vuota del suo sogno ricorrente — e stavolta la donna coperta di sangue la riconosce, come se l'avesse aspettata. Le appoggia la mano enorme sul viso e le parla di non accettare più \"i ciechi\", di far ardere insieme la fiamma della verità, di ricomporla per donare a tutti la libertà di accettare la verità stessa. Zoraya, spiazzata, chiede di lei e dei suoi compagni: sono i frammenti? È questa la chiave? Furiosa si morde le labbra fino a sanguinare invece di risponderle — e la visione si chiude prima che Zoraya abbia una risposta."
        },
        {
          label: "Chi è e da dove viene",
          testo: "Figlia di un pescatore del Mare Dorato e di una tessitrice di reti che canta mentre lavora, ultima di cinque fratelli. Cresciuta tra i vicoli del porto, impara la lotta dal fratello maggiore e sviluppa presto un rifiuto viscerale delle gerarchie nate dalle \"vie\" — un'ingiustizia per cui porta ancora sul volto piccole cicatrici permanenti.\n\nMandata alla Scuola della Fiamma per diventare Jyotir, matura con gli anni una discordanza crescente con ciò che vede: il Grande Jyotir servito da un esercito di Figli della Cenere per ogni funzione minima. Il giorno del suo esame pubblico, invece di dimostrarsi degna, canta contro quell'ingiustizia e dichiara il Grande Jyotir indegno perfino di accendere un cerino — poi fugge prima che le guardie la accerchino. Da allora è in viaggio, alla ricerca di un luogo — e di persone — capaci di capire quanto la verità sia legata alla giustizia."
        },
        {
          label: "Il sogno ricorrente",
          testo: "Sogna, a intervalli, di trovarsi in un bosco fatto di alberi che non sono alberi — tronchi di pietra, tetti di tegole al posto delle chiome. Al centro arde un fuoco enorme, e in quella luce danza una donna coperta di sangue, una corona di spine sulla fronte che non la ferisce mai: ogni suo passo è insieme dolore e furia. Ai margini dell'ombra, sagome di uomini, animali e ombre restano immobili, incapaci — o non disposte — ad avvicinarsi alla luce di quel fuoco, che Zoraya percepisce come verità troppo grande per essere guardata senza vacillare.\n\nQuando per un istante gli sguardi si incrociano, quella rabbia la attraversa come una scarica; si sveglia sempre con il cuore che batte ancora al ritmo di quel ballo, senza sapere se quella furia l'ha solo vista o se ora le appartiene."
        },
        {
          label: "La notte alla Rosa Storta",
          testo: "Tiene Rei tra le braccia durante le convulsioni, cercando di evitare che si morda la lingua o soffochi — e da quella posizione vede tutto: Rei che sgozza l'uomo sulle scale, i tre corpi che si rialzano dopo essere stati dati per morti. Quando lo scontro finisce, si ritrova nel suo angolo a vomitare così a lungo da non avere \"più niente\" da vomitare.\n\nQuando Karl, sopraffatto dall'orrore, cerca di andarsene nella notte, è lei a corrergli dietro e a fermarlo — insiste perché tutti restino finché non si sarà capito \"l'inizio e la fine di questa storia\". Usa il proprio dono da Jyotir (percepire se qualcuno mente, cantando mentre l'altro parla) per confermare che Whilliam sta dicendo la verità sugli Otto Raggi — gesto che lo fa scoppiare in lacrime. Più tardi si toglie il proprio fermaglio e lo porge al misterioso avventore ubriaco del mattino dopo, per testare la sua capacità di \"vedere rosso\" sugli oggetti del gruppo."
        },
        {
          label: "Cose che solo lei sa",
          testo: "Non viaggia mai sola: al suo fianco c'è sempre Wvrewvrol, la rana-spiritello che non riesce a mentire e che, a modo suo, la protegge quanto lei protegge lui — è stata la prima persona, dopo la sua fuga dalla Scuola della Fiamma, a non trattare le sue uscite di troppa verità come un difetto da correggere. Percepisce le emozioni e le intenzioni nascoste dietro le parole altrui — dote che usa apertamente, senza vergognarsene, come prova della propria formazione da Jyotir."
        },
        {
          label: "Domande che si porta dietro",
          testo: "Chi sia davvero la donna del suo sogno, e perché quella furia sembri toccarla personalmente ogni volta. Cosa significhi essere stata l'unica, quella notte, capace di percepire con certezza che Whilliam non mentiva. Se valga la pena restare legata a un gruppo che ha appena visto uccidere tre persone — e uccidere di nuovo, forse, prima che il viaggio verso Pozzprofond sia finito. E ora: la donna del suo sogno era davvero Furiosa? Perché non le ha risposto quando ha chiesto dei frammenti e della chiave?"
        }
      ]
    },
    nikla: {
      nome: "Nikla", giocatore: "Alessandra", colore: "#8f72d4", iniziali: "N", immagine: "images/nikla.webp",
      sottotitolo: "Ciò che Nikla sa, ricorda e ha vissuto.",
      sezioni: [
        {
          label: "Ultima sessione — Fonte Verde e la visione di Furiosa",
          testo: "Durante lo scontro nella casa in fiamme a Fonte Verde, Nikla tenta un'evocazione d'ombra — i tatuaggi si muovono, l'inchiostro forma un cerchio sul corpo del sacerdote a terra, una figura d'ombra lo assale prima di sbriciolarsi in polvere. Mentre sta ultimando l'evocazione viene colpita da un pugnale al petto e crolla.\n\nUn dolore al petto, poi si ritrova sospesa in una piana d'acqua sotto un cielo stellato: Furiosa le parla con voce rotta, \"di carne e sangue\", dicendole che dopo che le Sei Madri sono state escluse, pochi hanno ancora accesso al \"codice sorgente\" — e che ricomponendola potrebbe aiutarla a plasmare la realtà secondo la propria volontà, ottenendo in dono tutta la conoscenza perduta. Mentre parla, qualcosa la tira via da dietro — un velo, una bocca piena di denti che sembra succhiare via le stelle stesse. Furiosa le afferra le spalle un istante: \"Rapiti! Non arrenderti! Rifiutalo!\" — poi la visione si interrompe di colpo."
        },
        {
          label: "Chi è e da dove viene",
          testo: "Orfana, cresciuta nelle fogne di Ferrath dopo la morte dei genitori, operai scomparsi in un incidente sul lavoro quando lei aveva 6 anni. Cresciuta da Mr. Percival Mirr, la figura paterna più vicina che abbia mai avuto, da cui eredita un forte senso critico verso il mondo. Vede tutto in bianco e nero, giusto o sbagliato, senza scale di grigio — ma una volta guadagnata la sua fiducia, è leale per sempre.\n\nDa mesi cerca una biblioteca nascosta di testi antichi legati alla Volontà magica dei Primi Uomini — l'ha mancata per poco: dei tagliagole l'hanno trovata prima di lei e stanno bruciando i volumi per scaldarsi. Il suo strumento — e in un certo senso il suo famiglio — è un inchiostro senziente e maledetto, che canalizza la sua magia attraverso sigilli tatuati."
        },
        {
          label: "Il frammento di Refistas",
          testo: "Nikla possiede due frammenti: il proprio, e uno recuperato — non ricevuto in dono, come si era inizialmente pensato — dalla borsa di Refistas, sottratta ai banditi che lo avevano ucciso. Quando avvicina i due pezzi, questi si attaccano fra loro, come calamitati."
        },
        {
          label: "La notte alla Rosa Storta",
          testo: "Durante lo scontro lancia un'evocazione informe contro uno degli uomini rialzati, e più tardi una gelatina viola che gli avvolge testa e gola. Resta accanto a Rei mentre questa sbava e convulsiona, spaventata e senza sapere come aiutarla. È la prima volta in vita sua che si ubriaca, ed è la prima volta che uccide una persona — lo dice a voce alta, con un candore di cui lei stessa sembra sorpresa. Preleva un dito e una mano da uno dei cadaveri prima che i corpi vengano spostati in ghiacciaia, componenti per la sua evocazione d'ombra — un gesto che compie in silenzio, senza spiegarlo agli altri."
        },
        {
          label: "Cose che solo lei sa",
          testo: "Ha già un legame non del tutto chiarito con un fatato: il suo inchiostro senziente, forse un antico strumento del Mondo dei Sogni Condiviso. La sua visione del mondo, rigidamente diadica, viene messa alla prova per la prima volta da quello che ha visto quella notte — non sa più distinguere con la stessa sicurezza di prima cosa sia giusto e cosa sbagliato."
        },
        {
          label: "Domande che si porta dietro",
          testo: "Cos'era quella cosa che la tirava via durante la visione di Furiosa, e cosa intendeva Furiosa per \"codice sorgente\"?"
        }
      ]
    },
    karl: {
      nome: "Karl", giocatore: "Jacopo", colore: "#c4954a", iniziali: "K", immagine: "images/karl.webp",
      sottotitolo: "Ciò che Karl sa, ricorda e ha vissuto.",
      sezioni: [
        {
          label: "Ultima sessione — Fonte Verde e la visione di Furiosa",
          testo: "A Fonte Verde, Karl è il primo a capire che bisogna \"disinnescare\" il Gran Sacerdote e la donna sfigurata al suo fianco — i suoi punti rossi lo guidano dritto a loro. Si apre un varco a spintoni e coltellate, con Zoraya al seguito, e strappa dal collo della donna l'anello di metallo con i frammenti rosso sangue incastonati; lei gli infila la mano nel costato spezzandogli due costole, prima che Zoraya le recida la mano e lo liberi.\n\nCon l'anello recuperato, urla a Rei di dargli il proprio frammento e cerca di raggiungere anche Nikla per prendere il suo — viene colpito alla schiena mentre ci prova. Incastra comunque i frammenti che ha: tutto si spegne, luce e suono, tranne che per lui.\n\nSi ritrova in un buio su una piana d'acqua e pietra nera. Una casa in fiamme; voci — Claudia, sua figlia — che chiamano da dentro; alla scarsella al polso, la stessa di sempre a cui non fa mai caso, sente la paga dell'ultimo mese, la chiave di casa e il coltellino con cui intaglia il legno per un regalo alla figlia. Poi una figura femminile alta come tre uomini, coperta di sangue, insieme compassionevole e furiosa: Furiosa. Gli dice che ciò che è stato è stato, che loro — Claudia ed Hetel — volevano solo vivere, si sono aggrappate alla vita con le unghie e i denti; gli promette che insieme potranno costruire un mondo dove sia impossibile uccidere chi desidera aggrapparsi alla vita, e gli chiede di ergersi a suo campione. Gli offre un dono — \"dieci unghie, dieci vite puoi ancorare al corpo\" — e risveglia in lui un talento sopito: il guanto d'arme non si fonde con la sua mano, comincia semplicemente a percepirne il metallo e la sua malleabilità, sentendo che può plasmarlo con molta più facilità di prima. \"Ricomponetemi. Le mie parti vi chiamano\", gli dice per ultimo."
        },
        {
          label: "Chi è e da dove viene",
          testo: "Famiglia medio-borghese di Ferrath: padre pragmatico e artigiano, madre affettuosa ma sottomessa in casa. Svogliato e poco entusiasta della vita, finché non si innamora perdutamente di Claudia, che dà scopo alla sua esistenza — la mette incinta, la famiglia di lei li allontana per motivi economici, e Karl si arruola nella guardia cittadina per garantire un reddito solido. La sposa: nasce la figlia Hetel — entrambe, Claudia e Hetel, uccise da briganti una sera in cui lui era di ronda. Da allora alterna deflessione umorale ad aggressività manifesta, e porta ancora addosso i segni di una malnutrizione grave, come se il corpo non si fosse mai davvero ripreso da quella notte."
        },
        {
          label: "La Rosa Storta — la notte dello scontro",
          testo: "Arriva alla locanda ferito e malmesso, accolto con gentilezza da Whilliam. Quando i tre uomini si rialzano dopo essere stati dati per morti, sceglie di non porsi troppe domande: Whilliam gli fa indossare un guanto d'arme di famiglia — dieci aghi che gli penetrano dolorosamente la mano, frammenti dell'armatura che iniziano a fissare e riparare lentamente i tessuti rotti al suo interno, prima che il guanto si adatti — e lui lo usa per colpire, non per uccidere: \"per me quello lì deve stare giù, non ho intenzione di ucciderlo\". Tiene bloccato uno degli uomini nonostante le costole rotte e i tentativi di mordere, finché anche quello smette di muoversi.\n\nDopo lo scontro, sopraffatto — \"sarà che non mangiavo da giorni […] ma tutta questa roba mi ricorda altro\" — esce nella notte sotto la pioggia e crolla in un vicolo, tra sonno e delirio, prima di rientrare la mattina dopo."
        },
        {
          label: "La vista rossa",
          testo: "Non è indossare il guanto d'arme a far scattare la vista rossa: il primo punto lo vede poche ore prima, mentre salva una bambina da un uomo che voleva farle del male, poco prima di mettere piede alla Rosa Storta. Si ripete poco dopo, vedendo Nikla e Rei entrare nella locanda, e ancora quando Zoraya scende le scale: su tutte e tre le ragazze un oggetto risalta enormemente nella sua vista sfocata — la cintura di Nikla, il fermaglio di Zoraya — mentre tutto il resto gli appare grigio, sbiadito, \"come Frodo quando mette l'anello\", ma al contrario. Non sa cosa significhino quei punti, né se siano legati in qualche modo al guanto che indosserà solo più tardi quella notte: sa solo che sono davvero l'unica cosa rossa che quelle persone hanno addosso, e che continua a vederli anche il mattino dopo, ancora più intensi."
        },
        {
          label: "La bambina salvata",
          testo: "Salvare quella bambina, poche ore prima di entrare alla Rosa Storta, gli lascia addosso una domanda che non si pone spesso: agisce d'istinto, senza esitare, eppure non ricorda di essere mai stato così pronto a intervenire prima — un gesto che non sa ancora bene come conciliare con quello che ricorda della propria vita a Ferrath."
        },
        {
          label: "Domande che si porta dietro",
          testo: "Perché vede questi punti rossi — sulla bambina che ha salvato, su Nikla, su Rei, su Zoraya — e cosa li lega tra loro. Se abbia senso, per lui, restare con un gruppo che ha appena visto — e fatto — cose che preferirebbe non aver mai visto. Se accettare o no di diventare il campione di Furiosa."
        }
      ]
    }
  },

  // Cronologia sessioni — tre sessioni giocate finora.
  // La Sessione 3 (trascrizione Plaud, 2-3 settembre 2026) ha permesso di
  // confermare che il "Blocco 5" della scaletta manoscritta originale
  // (villaggio, rituale di Lilglia) NON è ancora stato giocato: è stato
  // rimosso dal riassunto della Sessione 2 e resta materiale futuro.
  // Vedi Scaletta Sessioni — Scene e Colonna Sonora.md, cartella
  // Furiosa/Campagna su Drive, per i dettagli del riscontro.
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
      titolo: "La Rosa Storta",
      luogo: "Locanda Rosa Storta",
      riassunto: "Giorno 9 del terzo mese: il party arriva alla locanda Rosa Storta, dove scopre che Whilliam (uno degli Otto Raggi di Kesper) ne è il locandiere. Tre sgherri legati ad Ados entrano per minacciarlo — sono venuti a utilizzare i frammenti. Rei, spinta per la prima volta da un vero moto di protezione, si offre di occuparsene e nello scontro ne colpisce a morte due — che incredibilmente si rialzano come non-morti. Lo scontro prosegue e si conclude nella Sessione 3.",
      eventiChiave: [
        "Il party arriva alla Rosa Storta; Whilliam identificato come il locandiere",
        "Tre sgherri di Ados minacciano Whilliam — combattimento",
        "Rei colpisce a morte due dei tre uomini, che si rialzano come non-morti",
        "Lo scontro resta in sospeso, concluso nella Sessione 3"
      ],
      tag: ["Rosa Storta"],
      nuova: false,
      economia: [],
      oggetti: [],
      approfondimenti: [
        {
          titolo: "Scaletta scene e colonna sonora (originale)",
          testo: "Ingresso alla Rosa Storta — \"Engwith\"\nEntrano 3 sgherri di Ados — \"Cordyceps\" (sono venuti a utilizzare i frammenti)\nCombattimento — \"The Cove Battle\"\nRacconto Whilliam — \"Turn Turn Turn Again\""
        },
        {
          titolo: "Nota DM — il Blocco 5 della scaletta manoscritta (villaggio, Lilglia) è contenuto futuro",
          testo: "La scaletta manoscritta originale proseguiva con un Blocco 5 (viaggio, un villaggio \"tutti crazy\" in attesa del ritorno di Ados, un rituale notturno diretto da uno zombie chiamato Lilglia, combattimento, unione dei frammenti, visioni personalizzate, villaggio salvato). Questo materiale NON è ancora stato giocato al tavolo: la Sessione 3 copre solo la conclusione dello scontro alla Rosa Storta e la partenza per Pozzprofond. Il Blocco 5 resta una scaletta/piano per una sessione futura, non un evento già accaduto. Chi/cosa sia \"Lilglia\" è comunque stato chiarito: è la moglie/amata defunta di Ados (vedi Lore Segreta e Sessione 3) — lo zombie del Blocco 5 è quindi presumibile foreshadowing coerente, non ancora confermato in scena."
        }
      ]
    },
    {
      data: "Sessione 3",
      titolo: "Il resoconto di Whilliam e la partenza per Pozzprofond",
      luogo: "Locanda Rosa Storta",
      riassunto: "Notte fra il giorno 9 e il giorno 10 del terzo mese. Prosegue e si conclude lo scontro con i tre uomini rialzati come non-morti: Rei ne finisce uno spappolandogli la testa con un calderone (e vomita per lo shock); i corpi vengono portati in una ghiacciaia, Nikla preleva un dito e una mano da uno dei cadaveri. Whilliam fa indossare a Karl un guanto d'arme di famiglia (rigenera lentamente le ferite di chi lo indossa) e racconta la storia completa degli Otto Raggi di Kesper: un tempio senza nome, molto lontano a est, dove il vecchio gruppo trovò i frammenti e se li divise per scherzo come souvenir; lì Ados dichiarò il proprio amore a Lilglia, poi sposata e morta di recente a 82 anni. Whilliam conferma che Ados è il mandante dei tre aggressori e implora il party di salvarlo; rivela di aver già spedito via il proprio frammento tramite il messo che gli aveva portato la lettera di Ados. Nel corso della sessione emergono anche due nuove capacità/misteri: Karl inizia a percepire \"punti rossi\" di pericolo/connessione su persone e oggetti (senza spiegazione), e viene chiarito — incrociando la scena con il diario di Rei — che le \"due donne sospette\" della locanda sono in realtà Nikla e Zoraya stesse. Il gruppo parte infine per il villaggio di Pozzprofond, sulle tracce di Ados.",
      eventiChiave: [
        "Conclusione dello scontro: Rei finisce uno dei non-morti con un calderone",
        "I corpi portati in ghiacciaia; Nikla preleva un dito e una mano da un cadavere",
        "Whilliam fa indossare a Karl un guanto d'arme di famiglia",
        "Whilliam racconta la storia completa degli Otto Raggi di Kesper e del tempio senza nome",
        "Confermato: Ados è il mandante dei tre aggressori; Whilliam implora di salvarlo",
        "Whilliam ha già spedito via il proprio frammento tramite un messo",
        "Karl inizia a percepire \"punti rossi\" di pericolo/connessione — mistero aperto",
        "Chiarito: le \"due donne sospette\" della locanda sono Nikla e Zoraya",
        "Il party parte per il villaggio di Pozzprofond"
      ],
      tag: ["Rosa Storta", "Whilliam", "Otto Raggi di Kesper"],
      nuova: false,
      economia: [],
      oggetti: [],
      approfondimenti: [
        {
          titolo: "Fonte",
          testo: "Trascrizione automatica (Plaud) della seduta al tavolo, incrociata con il diario personale di Rei e con le correzioni fornite direttamente dall'utente. Il file completo della trascrizione è archiviato in Furiosa/Trascrizioni/Sessione 3.md."
        },
        {
          titolo: "Nota DM — misteri aperti emersi in questa sessione",
          testo: "Il meccanismo dietro la capacità di Karl di vedere \"punti rossi\". Chi sia la bambina che Karl racconta di aver protetto da un uomo che voleva farle del male, e come si concili con la sua scheda. (Perché Nikla abbia prelevato un dito e una mano da un cadavere è invece già chiaro al DM: componenti per la sua evocazione d'ombra — non un mistero da sciogliere.)"
        }
      ]
    },
    {
      data: "Sessione 4",
      titolo: "Fonte Verde — il rituale e la ricomposizione",
      luogo: "Villaggio ai margini della foresta → Pozzprofond → Fonte Verde",
      riassunto: "Dopo una notte di riposo a Tresil, il party riparte al mattino del giorno 11 del terzo mese con quattro cavalli inviati da Whilliam. Pernottano in un villaggio ai margini della foresta che porta a Pozzprofond — è qui che Zoraya impara le basi della cavalcata, mentre le condizioni di Karl peggiorano (febbre, ferita infetta). Il mattino seguente (giorno 12) ripartono e arrivano a Pozzprofond nel tardo pomeriggio: cercano Berer, la cui tomba, ai piedi del castagno, risulta profanata di recente. Il nipote di Berer e suo padre (fratello di Berer) confermano di non conoscere Ados, ma indicano Fonte Verde, a ovest, come il luogo dove si troverebbe — sconsigliando vivamente di andarci. Il gruppo decide di nascondere i frammenti in locanda prima di procedere.\n\nKarl ha un crollo psicologico (attacco di panico, percezioni alterate, tentativo di allontanarsi da solo); dopo un inseguimento notturno sotto la pioggia, Rei lo ferma con la sua catena e il gruppo si riunisce.\n\nQuella stessa notte il gruppo si sposta verso Fonte Verde, dove arriva verso l'una o le due di notte (ormai giorno 13): il party si imbatte in una processione silenziosa di villici con candele attorno a una casa con gli scuroni chiusi, e in una decina di cadaveri di ragazze con la gola tagliata. Dentro, un \"Gran Sacerdote\" sgozza una donna in un rituale; compare una donna dalla pelle cadente e un osso visibile allo zigomo, con al collo un anello di metallo incastonato di frammenti rosso sangue. Guardie dagli occhi bianchi intervengono, la casa prende fuoco nel caos dello scontro. Karl strappa l'anello dal collo della donna (che gli spezza due costole prima che Zoraya le recida la mano), poi vi incastra i frammenti del party. Tutto si spegne: seguono quattro visioni separate — una per PG — di un'entità che si presenta come Furiosa, che chiede a ciascuno di \"ricomporla\" e offre un dono diverso, calibrato sul desiderio di ciascuno (vedi le pagine Punto di Vista di ogni PG per il dettaglio soggettivo). La seduta si interrompe qui.",
      eventiChiave: [
        "Partenza da Tresil con quattro cavalli inviati da Whilliam; notte in un villaggio ai margini della foresta",
        "Zoraya impara a cavalcare; le condizioni di Karl peggiorano (febbre, ferita infetta)",
        "Arrivo a Pozzprofond nel tardo pomeriggio; tomba di Berer trovata profanata",
        "Il fratello di Berer indica Fonte Verde, a ovest, come luogo di Ados — sconsigliando di andarci",
        "I frammenti vengono nascosti in locanda",
        "Crollo psicologico di Karl; inseguimento notturno; Rei lo ferma e il gruppo si riunisce",
        "Quella notte, il gruppo si sposta verso Fonte Verde, dove arriva verso l'una-le due di notte",
        "A Fonte Verde: processione notturna, cadaveri di ragazze, rituale del Gran Sacerdote",
        "Compare una donna sfigurata con un anello di metallo e frammenti rosso sangue al collo",
        "Combattimento contro le guardie dagli occhi bianchi; la casa prende fuoco",
        "Karl strappa l'anello alla donna; Zoraya le recide la mano per liberarlo",
        "Karl incastra i frammenti del party nell'anello — blackout sensoriale",
        "Visioni separate di Furiosa per tutti e quattro i PG, che chiede di essere \"ricomposta\""
      ],
      tag: ["Pozzprofond", "Fonte Verde", "Furiosa", "Visioni"],
      nuova: true,
      economia: [],
      oggetti: [
        { nome: "Anello di metallo con frammenti rosso sangue", descrizione: "Strappato dal collo della donna sfigurata a Fonte Verde. Ora incastonato con i frammenti in possesso del party (quelli di Rei e, parzialmente, il tentativo di aggiungere quello di Nikla). Possibile \"chiave\" fisica di cui parla Furiosa — vedi Lore Segreta." }
      ],
      approfondimenti: [
        {
          titolo: "Fonte",
          testo: "Trascrizione automatica (Plaud) della seduta. Diversi speaker restano incerti nella trascrizione originale (in particolare nelle Scene 0 e 5-7); il file completo è archiviato in Furiosa/Trascrizioni/Sessione 4.md."
        },
        {
          titolo: "Nota DM — correzione di trascrizione",
          testo: "La direzione verso Ados/Fonte Verde è stata data dal fratello di Berer (il padre del ragazzo sedicenne trovato in casa), non da un fantomatico \"padre di Berer\" (Berer non ha genitori in scena)."
        },
        {
          titolo: "Nota DM — misteri aperti emersi in questa sessione",
          testo: "Chi sia davvero la donna sfigurata del rituale, e se sia sopravvissuta all'incendio nonostante la mano recisa. Cosa ne è stato di Ados e del Gran Sacerdote — nessuno dei due si è mostrato in scena. Se e come i quattro PG risponderanno alle rispettive offerte di Furiosa — nessuno ha ancora accettato o rifiutato in scena. (Le risposte che il DM già conosce per i primi due punti sono in Lore Segreta, non qui: questa pagina resta visibile anche in modalità Giocatore.)"
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
        testo: "È la forza della disperazione, la pulsione estrema alla vita. È nata dalle Sei Sorelle (le Sei Figlie della Creazione, generate da Ithar — lore già esistente in Tresil/Kaelvaran); per questo le chiama le sue \"6 madri\". Il suo obiettivo dichiarato è attraversare il velo ed entrare nell'Irkalla, il regno dei morti, per dare giustizia alle sue madri.\n\nAttorno a lei nasce un sistema di credenze in contrapposizione a quello delle Sei Sorelle — le sue stesse madri — ed esiste un gruppo che sta riunendo le fedi disperse in un unico Pantheon (alleato o nemico di Furiosa? da stabilire).\n\nTemi/nucleo: il decadimento degli esseri umani nasce dal nascondere la verità — mentire, non accettare, razionalizzare. La verità è il divino: ha bellezza, grazia, una forza immensa. Vedere il divino soffocato e negato dagli uomini è ciò che genera in Furiosa frustrazione, e quindi furia. È una combattente. Odia le bugie. (Nota: lo stesso tema della verità attraversa sia il sogno di Zoraya sia la sua backstory personale — cantare la verità le è costato la fuga dalla Scuola della Fiamma.)\n\nCollegamento con la lore esistente: le Sei Sorelle crearono il Mondo dei Sogni Condiviso e scomparvero nella Frattura dopo aver sconfitto Ithar; i loro Frammenti sono già un oggetto noto nella campagna di Tresil (uno è stato recuperato a Roccia Brillante e distrutto da Naru). Resta da stabilire se i frammenti divini di questa campagna siano gli stessi Frammenti delle Sei Sorelle o di natura diversa, legata specificamente a Furiosa. Indizio dal giorno 8: la fusione Kaf+Theris in mano a Rei non ha mostrato corruzione come quella di Ados — forse la corruzione dipende da chi fonde e perché.\n\nDirezione futura — contatto e patto: una volta che il party riunirà i frammenti del suo sigillo, Furiosa stabilirà un contatto diretto con i personaggi. Offrirà loro potenziamenti in cambio della loro devozione: il prezzo è impegnarsi ad aiutarla a riportarla pienamente in vita.\n\nLe sue parole per quel momento (appunto del master, da usare come battuta di Furiosa nel primo contatto): \"Ricomponetemi e insieme costruiremo un mondo in cui sia possibile la vera libertà. Di essere completi. Di far poter tutelare ciò che ci rende vivi. Di perseguire la conoscenza. Di vedere e accettare la verità stessa.\"\n\nSessione 4 — il primo contatto è avvenuto: dopo il rituale a Fonte Verde (vedi Sessione 4 e \"Ados e gli Otto Raggi di Kesper\"), Karl ha incastrato nell'anello di metallo strappato alla donna sfigurata i frammenti già in possesso del party; ne è seguito un blackout sensoriale e quattro visioni separate, una per PG, tutte con la formula \"Ricomponetemi\" ma calibrate sul desiderio di ciascuno: a Karl ha chiesto di ergersi a suo campione, promettendogli di poter \"ancorare dieci vite\" al corpo (dieci unghie/dieci vite) — mentre gli rivela che ha un talento sopito che grazie a lei si risveglia, ed egli inizia a percepire di poter plasmare con molta più facilità il metallo del guanto d'arme che indossa (il guanto non si fonde alla mano: è solo la percezione del metallo e della sua malleabilità a risvegliarsi); a Nikla ha promesso accesso a \"conoscenza perduta\" e la capacità di plasmare la realtà secondo la propria volontà, dicendole che \"dopo che le Sei Madri sono state escluse, pochi hanno accesso al codice sorgente\" — frase da trattare come retorica/metafora di Furiosa per \"conoscenza proibita\", non come rivelazione letterale: lei stessa resta ignara della vera natura di Kaelvaran (vedi \"Il Progettatore\"); a Zoraya ha parlato di \"far ardere la fiamma della verità\" e della libertà di donare a tutti l'accettazione della verità; a Rei ha ripetuto la formula già annotata sopra, \"la libertà di essere completi\". Nessuno dei quattro ha ancora risposto esplicitamente al patto.\n\nIl vero obiettivo di Furiosa (lei stessa non lo formula così esplicitamente, lo vive come devozione filiale) non è solo dare giustizia alle sue madri: è ricostruire le sei Madri stesse. Attraversare il velo verso l'Irkalla è il mezzo per raggiungere ciò che resta di loro nel regno dei morti e restituirle all'esistenza — non solo onorarle o vendicarle. Vedi anche la voce \"Il Progettatore — la vera natura di Kaelvaran\" per lo strato di verità che Furiosa stessa ignora.\n\nCosa significa \"riunire i frammenti\" — precisato: Furiosa stessa è stata scomposta. I frammenti che il party sta già rincorrendo (quelli degli Otto Raggi di Kesper, vedi \"Ados e gli Otto Raggi di Kesper\") sono, nella sua ottica, le parti di sé stessa: la chiave. Non le chiede solo per tornare a parlare col mondo — le vuole ricomposte come chiave fisica, per aprire un luogo preciso. Vedi \"La Stazione d'Accesso e il Progetto Tikan\" per dove e perché."
      },
      {
        id: "stazione-tikan",
        nome: "La Stazione d'Accesso e il Progetto Tikan",
        colore: "#5a6e8f",
        condiviso: false,
        testo: "Al centro dell'Atollo Centrale (lore già nota pubblicamente in Kaelvaran, vedi kaelvaran.html — l'anomalia geografica/temporale invalicabile attorno a cui è disposto l'Anello Fratturato) si trova la stazione di accesso al log di comando di Kaelvaran. È, in sostanza, l'interfaccia con cui si potrebbe leggere e alterare il funzionamento stesso del mondo — un'arma capace, se toccata da chi non dovrebbe, di distruggere l'intero mondo.\n\nFuriosa vuole che il party trovi tutte le parti della chiave — che lei chiama parti di sé — e le porti fisicamente al centro dell'arcipelago, alla stazione, per liberarla. Lei stessa non spiega ai PG cosa accadrà esattamente una volta lì (né forse lo sa fino in fondo): dal suo punto di vista, riunirsi con la chiave/sé stessa e raggiungere quel luogo È liberazione.\n\nIl Progetto Tikan (già citato pubblicamente in kaelvaran.html come la branca più segreta della Guardia delle Sette Memorie, nata dopo l'Ultima Frattura Registrata del 4644 D.C., mai a rendere pubblici i propri risultati) è, nello strato segreto della campagna, molto più di un ente di ricerca: sono i custodi dell'arma. Il loro compito reale è impedire che chiunque raggiunga o attivi la stazione al cuore dell'Atollo.\n\nQuando il party, cercando i frammenti/la chiave, si avvicinerà troppo a quel filone, il Progetto Tikan li intercetterà. Il loro approccio in due fasi: prima valutano — sono \"buoni\" o \"cattivi\", sono controllabili o no; poi, in base al verdetto, li fermano oppure provano a reclutarli. Non sono necessariamente ostili di default: sono pragmatici e mossi dalla paura di cosa succederebbe se l'arma finisse nelle mani sbagliate (o venisse anche solo toccata).\n\nNota del DM — collegamento non ancora dichiarato canonico: la stazione/log di comando potrebbe essere letteralmente l'interfaccia che le Sei Figlie hanno usato per sigillare il Progettatore fuori da Kaelvaran (vedi \"Il Progettatore — la vera natura di Kaelvaran\") — il che spiegherebbe perché riaprirla con la chiave di Furiosa sia così pericoloso. Da tenere aperta come direzione, non ancora da rivelare in scena."
      },
      {
        id: "il-progettatore",
        nome: "Il Progettatore — la vera natura di Kaelvaran",
        colore: "#4a4a6e",
        condiviso: false,
        testo: "Strato più profondo della cosmologia di questa campagna, riservato al DM — da rivelare (se mai) solo molto avanti, e mai a Furiosa stessa, che lo ignora.\n\nKaelvaran non è un mondo \"reale\" in senso ultimo: è una simulazione creata da un Progettatore esterno. Le Sei Figlie (le stesse note a Tresil come le Sei Sorelle, e in questa campagna come le \"Madri\" di Furiosa) non erano dee nel senso classico, ma sotto-programmi creati dal Progettatore per aiutarlo a sviluppare la simulazione. Non avevano una vera volontà propria: eseguivano un compito — proprio come ogni entità che loro stesse crearono (Furiosa inclusa) e come i Primi Uomini che avevano accesso alla Fonte, il Mondo dei Sogni Condiviso. Nessuno di loro possedeva un vero atto volitivo, a differenza degli esseri umani nati dopo la Frattura.\n\nLe Sei Figlie, interpretando a modo loro il compito ricevuto, si ribellarono al Progettatore. Ipotesi di lavoro del DM (non ancora dichiarata canonica in scena): questa ribellione È l'evento che la lore pubblica di Tresil racconta come lo scontro tra Ithar e le Figlie. In questa lettura, Ithar è il volto in-mondo del Progettatore, e la \"vittoria\" delle Figlie fu in realtà un sacrificio — loro stesse e tutte le proprie creazioni (comprese le forme che sarebbero poi confluite in Furiosa) si immolarono per sigillare il Progettatore fuori da Kaelvaran. Quell'atto è il Collasso/la Frattura già nota ai PG di Tresil.\n\nLe Figlie speravano che gli esseri umani nati dopo la Frattura — dotati di vera libertà di scelta, a differenza loro — riuscissero un giorno a sviluppare abbastanza potere e consapevolezza da rendersi conto della vera natura \"fittizia\" del proprio mondo, e magari a fare ciò che loro non potevano: scegliere liberamente, invece di eseguire.\n\nNota del DM: questa lettura fa combaciare la cosmologia pubblica di Tresil (Ithar/Sei Figlie/Frattura) con la nuova lore di Furiosa, e risponde in parte a th-05. È una direzione, non un vincolo: tenerla aperta finché non serve renderla esplicita in scena. Se il party riuscisse davvero a ricostruire le sei Madri (obiettivo reale di Furiosa), l'implicazione inespressa è che potrebbe riaprire la porta al Progettatore — Furiosa stessa non lo sa.\n\nSessione 4: nella sua visione a Nikla, Furiosa ha detto \"dopo che le Sei Madri sono state escluse, pochi hanno accesso al codice sorgente\" — deciso al tavolo che è retorica/millanteria di Furiosa (un modo per dire \"conoscenza perduta e proibita\"), non un indizio letterale: Furiosa resta ignara della vera natura simulata di Kaelvaran. Tenerlo a mente se il termine dovesse tornare in scena in futuro."
      }
    ],
    personaggi: [
      {
        id: "ados-kesper",
        nome: "Ados e gli Otto Raggi di Kesper",
        colore: "#c4954a",
        condiviso: false,
        testo: "Gli \"8 Raggi di Kesper\" era il nome del vecchio gruppo di avventurieri di Ados — dalla ruota di Kesper, il carro leggendario di una delle Sei Figlie, a otto raggi come loro. Il gruppo trovò otto frammenti di vetro apparentemente senza valore in un tempio senza nome, molto lontano a est, e se li divise uno a testa per scherzo, come souvenir, senza mai sospettare avessero un potere. In quel tempio Ados dichiarò il proprio amore a Lilglia.\n\nI membri: Ados (leader, scaltro e forte — oggi ossessionato dal recuperare tutti i frammenti dopo aver ucciso per sbaglio la moglie Lilglia, il cui frammento si è fuso col suo, corrompendolo). Kaf — morto, ucciso da Rei (giorno 8 del terzo mese); il suo frammento si è fuso con quello di Theris ed è ora in possesso di Rei. Refistas (studioso metodico, ucciso dai banditi sulla strada per Tresil mentre andava a un appuntamento con Whilliam alla Rosa Storta — nei suoi ultimi giorni indagava sui frammenti in un taccuino). Whilliam — identificato in gioco come il locandiere della Rosa Storta stesso; minacciato dai tre uomini mandati da Ados (tutti e tre uccisi da Rei, poi rialzati come non-morti e definitivamente abbattuti in Sessione 3); ha già spedito via il proprio frammento tramite il messo che gli aveva portato la lettera di Ados. Berer (esploratore, morto poco prima che Refistas si ritirasse — sepolto da Refistas a Pozzprofond, ai piedi di un castagno, col proprio frammento). Elia (morta di parto, il suo frammento donato a un orfanotrofio). Theris — morto in scena (giorno 8), Rei ha tentato invano di salvarlo. Lilglia — moglie/amata di Ados, sposata dopo l'episodio del tempio, morta di recente all'età di 82 anni; il suo frammento si è fuso con quello di Ados, corrompendolo.\n\nStato dei frammenti: Ados ha il proprio + quello di Lilglia (fusi e corrotti). Kaf+Theris fusi, in possesso di Rei (fusione SENZA segni di corruzione — dato rilevante per l'ipotesi di Refistas, vedi sotto). Quello di Berer è ancora sepolto a Pozzprofond, mai reclamato. Quello di Elia è a destinazione sconosciuta dopo l'orfanotrofio. Quello di Refistas è ora in possesso di Nikla, che ne è entrata in possesso recuperando la sua borsa dai banditi che lo avevano ucciso (non un dono, come inizialmente ipotizzato — vedi Punto di Vista di Nikla). Whilliam ha spedito il proprio via tramite un messo (presumibilmente verso Ados) — non più in suo possesso.\n\nSviluppi dal tavolo (Sessione 3): confermato che Ados è il mandante dei tre uomini della Rosa Storta, tutti e tre abbattuti definitivamente dal party; Whilliam implora il party di \"salvare Ados\". Chiarito anche chi fossero le \"due giovani donne sospette\" osservate nella stessa locanda: sono Nikla e Zoraya stesse, non NPC misteriosi — mistero risolto (vedi PNG e Alleati.md per il dettaglio dei tratti/soprannomi ipotizzati). Resta aperto il legame con \"la Madre Nera\" temuta da Rei.\n\nIpotesi di Refistas (dal suo taccuino, non confermata): il cristallo/frammenti sarebbero magia antica non più concessa agli uomini, capace di spezzare il velo se riuniti — possibile collegamento diretto con la corruzione di Ados e con l'obiettivo di Furiosa di attraversare il velo verso l'Irkalla. Da confermare/correggere alla luce del dato sulla fusione Kaf+Theris priva di corruzione.\n\nChi è Lilglia — risolto: è la moglie/amata defunta di Ados descritta sopra. Il Blocco 5 della scaletta manoscritta originale (un villaggio con una setta che venera/teme un'entità chiamata \"Lilglia\", diretta da uno zombie dello stesso nome) resta però contenuto NON ancora giocato al tavolo — foreshadowing coerente con l'ipotesi che Ados stia cercando di riportarla in vita, ma non ancora confermato in scena.\n\nSessione 4 — Fonte Verde, confermato (solo DM, i PG non lo sanno): la \"donna sfigurata\" (pelle cadente, osso visibile allo zigomo) apparsa durante il rituale notturno È Lilglia, non-morta — la conferma diretta del Blocco 5. Portava al collo una corda di cuoio con un anello di metallo incastonato di frammenti rosso sangue: quasi certamente il proprio frammento e/o quello di Ados, o entrambi, montati come reliquia/fulcro del rituale del Gran Sacerdote che la co-officiava. Nikla ha sentito verso quell'anello la stessa attrazione mentale che prova per i frammenti di Rei e Zoraya, e repulsione verso Lilglia stessa. Nello scontro Karl le ha strappato l'anello dal collo (lei gli ha infilato la mano nel costato spezzandogli due costole; Zoraya le ha reciso la mano per liberarlo) — l'anello, non i frammenti sciolti, si è rivelato essere il fulcro fisico su cui Karl ha poi incastrato i frammenti del party per innescare le visioni di Furiosa (vedi \"Furiosa — la Divinità\"): è ragionevole che questo stesso anello sia, o diventi, la \"chiave\" fisica di cui parla Furiosa. Ados stesso non si è mostrato in scena: dove sia lui, cosa ne sia stato del Gran Sacerdote, e se Lilglia sia stata distrutta insieme alla mano recisa o sia sopravvissuta e fuggita nell'incendio, resta da chiarire al tavolo."
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
      { id: "th-06", testo: "Chi diventerà il campione di Furiosa: Sessione 4 ha spostato l'ago — Furiosa ha chiesto esplicitamente a Karl di ergersi a suo campione durante la sua visione, offrendogli un dono legato al risveglio del suo talento di plasmare il metallo del guanto d'arme. Non ancora accettato/rifiutato in scena; Zoraya resta comunque una candidata plausibile vista la sua connessione onirica pregressa." },
      { id: "th-07", testo: "Cosa è successo esattamente al frammento di Refistas dopo la sua morte (bottino dei banditi? recuperabile?)." },
      { id: "th-08", testo: "Dove/quando il party trova le lettere di Ados e il taccuino di Refistas nella trama — il diario di Whilliam è più vicino ora che è un PNG raggiungibile." },
      { id: "th-09", testo: "Confermare o correggere l'ipotesi di Refistas sulla vera natura dei frammenti, alla luce della fusione Kaf+Theris priva di corruzione." },
      { id: "th-11", testo: "Chi è Karl Brenner nel party — quarto membro stabile o sostituto? Chi sia la bambina che Karl racconta di aver protetto da un uomo che voleva farle del male, poche ore prima di arrivare alla Rosa Storta (Sessione 3) — da conciliare con la sua scheda." },
      { id: "th-12", testo: "Chi/cosa è \"la Madre Nera\" che Rei teme possa averla trovata, e chi è il suo \"vecchio maestro\"." },
      { id: "th-14", testo: "Chi è \"il ragazzo derelitto\" di cui Whilliam si prende cura alla locanda (non più menzionato in Sessione 3)." },
      { id: "th-15", testo: "Cosa faceva esattamente il frammento di Theris quando Rei lo toccava la prima volta (visioni/specchio/\"altra sé\") — perché ha smesso di funzionare una volta fuso con quello di Kaf." },
      { id: "th-16", testo: "Se il rituale del Blocco 5 (villaggio, zombie di nome Lilglia — ancora non giocato) confermerà il legame con la Lilglia moglie di Ados, la cui identità/backstory è ora nota (vedi Lore Segreta)." },
      { id: "th-17", testo: "Confermare la suddivisione esatta tra Sessione 1 e Sessione 2 nella scaletta scene/colonna sonora — attualmente solo un'ipotesi di lavoro." },
      { id: "th-19", testo: "Meccanismo dietro la capacità di Karl di percepire \"punti rossi\" di pericolo/connessione — emersa in Sessione 3, distinta dal guanto d'arme." },
      { id: "th-20", testo: "Ipotesi di lavoro: Ithar (lore pubblica di Tresil) è il volto in-mondo del Progettatore che le Sei Figlie hanno sigillato fuori da Kaelvaran nella Frattura — da confermare/sviluppare, vedi Lore Segreta (\"Il Progettatore\")." },
      { id: "th-21", testo: "Se e quando i PG scopriranno la vera natura \"fittizia\" di Kaelvaran, e se Furiosa stessa arriverà mai a saperlo (lei crede solo di dover onorare/ricostruire le sue madri)." },
      { id: "th-22", testo: "Quando e come il Progetto Tikan intercetterà il party durante la ricerca dei frammenti/chiave — con quale primo approccio (valutazione buoni/cattivi, controllabili o no) prima di scegliere se fermarli o reclutarli." },
      { id: "th-23", testo: "Rapporto esatto tra la stazione d'accesso al log di comando al centro dell'Atollo e \"Il Progettatore\" — è davvero l'interfaccia con cui le Sei Figlie l'hanno sigillato fuori da Kaelvaran? (ipotesi di lavoro, non confermata)." },
      { id: "th-24", testo: "Cosa ne è stato di Ados e del Gran Sacerdote dopo il rituale di Fonte Verde — nessuno dei due si è mostrato in scena (Sessione 4)." },
      { id: "th-25", testo: "Se Lilglia (la donna sfigurata, non-morta) sia sopravvissuta all'incendio di Fonte Verde nonostante la mano recisa da Zoraya, o sia stata distrutta — i PG non sanno ancora che sia lei." },
      { id: "th-27", testo: "Se e come i quattro PG risponderanno alle rispettive offerte di Furiosa (Sessione 4) — nessuno ha ancora accettato o rifiutato in scena." },
      { id: "th-28", testo: "L'anello di metallo strappato a Lilglia a Fonte Verde, ora con i frammenti del party incastonati: è la \"chiave\" fisica di cui parla Furiosa? Cosa succede se ci si prova a incastrare anche i frammenti mancanti (Berer, Elia, Refistas, Whilliam, Ados)?" }
    ]
  }

};
