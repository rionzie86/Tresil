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
// Aggiornato ulteriormente il 4 settembre 2026 (2): corretto il
// nome dello spiritello-rana (Wvrewvrol, non più "Verolinguo");
// Whilliam spostato dai PNG principali al gruppo "Gli Otto Raggi"
// (ottoRaggi), reso visibile dentro la pagina Personaggi.
// ============================================================

const FURIOSA_DATA = {

  meta: {
    titolo: "Archivio di Furiosa",
    sottotitolo: "Campagna dei Frammenti Divini",
    dataAttuale: "Giorno 9-10 del terzo mese — tre sessioni giocate al tavolo",
    prossimaDestinazione: "In viaggio verso il villaggio di Pozzprofond, sulle tracce di Ados",
    immagine: "images/furiosa_hero.webp"
  },

  sezioni: [
    { id: "panoramica", label: "Panoramica",    icona: "◈", gruppo: "principale" },
    { id: "personaggi", label: "Personaggi",    icona: "◉", gruppo: "principale" },
    { id: "sessioni",   label: "Sessioni",      icona: "◎", gruppo: "principale" },
    { id: "pv-rei",     label: "Rei",           icona: "R", gruppo: "pdv" },
    { id: "pv-zoraya",  label: "Zoraya",        icona: "Z", gruppo: "pdv" },
    { id: "pv-nikla",   label: "Nikla",         icona: "N", gruppo: "pdv" },
    { id: "pv-karl",    label: "Karl",          icona: "K", gruppo: "pdv" },
    { id: "lore",       label: "Lore Segreta",  icona: "◑", gruppo: "dm" },
    { id: "thread",     label: "Thread Aperti", icona: "◐", gruppo: "dm" },
    { id: "note",       label: "Note DM",       icona: "◻", gruppo: "dm" }
  ],

  // Termini che diventano link cliccabili nei testi
  glossario: {
    "Furiosa":              { sezione: "lore", voce: "furiosa-divinita", label: "Furiosa — la Divinità", soloMaster: true },
    "frammenti divini":     { sezione: "lore", voce: "furiosa-divinita", label: "Furiosa — la Divinità",  soloMaster: true },
    "Otto Raggi di Kesper": { sezione: "lore", voce: "ados-kesper",      label: "Ados e gli Otto Raggi di Kesper (lore completa)", soloMaster: true },
    "Wvrewvrol":            { sezione: "personaggi", voce: "wvrewvrol",  label: "Wvrewvrol" },
    "Ados":                 { sezione: "otto-raggi", voce: "ados",       label: "Ados" },
    "Lilglia":              { sezione: "otto-raggi", voce: "lilglia",    label: "Lilglia" },
    "Kaf":                  { sezione: "otto-raggi", voce: "kaf",        label: "Kaf" },
    "Refistas":             { sezione: "otto-raggi", voce: "refistas",   label: "Refistas" },
    "Whilliam":             { sezione: "otto-raggi", voce: "whilliam",   label: "Whilliam" },
    "Berer":                { sezione: "otto-raggi", voce: "berer",      label: "Berer" },
    "Elia":                 { sezione: "otto-raggi", voce: "elia",       label: "Elia" },
    "Theris":               { sezione: "otto-raggi", voce: "theris",     label: "Theris" },
    "Rosa Storta":          { sezione: "otto-raggi", voce: "whilliam",   label: "Whilliam", soloMaster: true }
  },

  panoramica: {
    filoGiocatori: "Zoraya, Nikla, Rei e Karl si sono ritrovati a viaggiare insieme dopo un violento scontro che ha lasciato nelle mani di Rei un frammento di vetro dal potere sconosciuto. La strada li ha portati alla locanda Rosa Storta, dove hanno conosciuto Whilliam e affrontato tre uomini mandati da un certo Ados — e ora sono diretti al villaggio di Pozzprofond, sulle sue tracce.",
    filoMaster: "Quando tutti i frammenti divini saranno riuniti, apparirà Furiosa, divinità della furia nata dalle Sei Sorelle (le Sei Figlie della Creazione, generate da Ithar — stesso lore già presente nella campagna di Tresil). Farà delle protagoniste i suoi araldi, e una di loro diventerà il suo campione — Zoraya, per la sua connessione onirica con la dea, resta la candidata più naturale, ma la scelta non è ancora stata decisa in modo definitivo; da rivalutare anche alla luce del nuovo arco di Rei, che nel diario del giorno 9 mostra per la prima volta un vero moto di volontà/protezione.\n\nFuriosa vuole attraversare il velo ed entrare nell'Irkalla (il regno dei morti) per dare giustizia alle sue sei madri. Attorno a lei nasce un sistema di credenze in contrapposizione a quello delle Sei Sorelle — le sue stesse madri — ed esiste un gruppo che sta riunendo le fedi disperse in un unico Pantheon: se sia alleato o nemico di Furiosa resta da stabilire.\n\nPunto di lore ancora aperto: se i frammenti divini di questa campagna coincidano con i Frammenti delle Sei Sorelle già noti nella campagna di Tresil, o siano di natura diversa (vedi Lore Segreta). Indizio nuovo dal giorno 8: la fusione dei frammenti di Kaf e Theris in mano a Rei non ha mostrato segni di corruzione come quella di Ados — forse la corruzione dipende da chi fonde e perché, non dal semplice atto di fondere.",
    statoGiocatori: "La campagna è in corso: il party ha già affrontato tre sessioni al tavolo. Dopo lo scontro alla Rosa Storta e il racconto di Whilliam sugli Otto Raggi di Kesper, il gruppo è ora in viaggio verso il villaggio di Pozzprofond, sulle tracce di Ados.",
    statoMaster: "Tre sessioni giocate finora (vedi Sessioni). Gancio d'apertura consumato: Rei è stata avvicinata da Kaf in un bar malfamato per incastrare Theris; nello scontro che ne è seguito sia Kaf che Theris sono morti, e i loro frammenti si sono fusi in mano a Rei. Alla locanda Rosa Storta il party ha incontrato Whilliam (uno degli Otto Raggi di Kesper), affrontato e abbattuto definitivamente i tre sgherri non-morti di Ados, e ascoltato il racconto completo della sottotrama di Ados. Il gruppo è ora diretto a Pozzprofond, sulle tracce di Ados."
  },

  personaggi: {
    pg: [
      {
        id: "zoraya", nome: "Zoraya Al Khmani", giocatore: "Federica",
        colore: "#5a8fd4", iniziali: "Z",
        immagine: "images/zoraya.webp", immaginePos: "center 22%",
        tag: ["Cantrice", "Ex allieva della Scuola della Fiamma", "Percepisce la verità e le intenzioni", "Compagna: Wvrewvrol"],
        descrizione: "25 anni, del Mare Dorato. Cantrice capace di percepire la verità e le intenzioni nascoste dietro le parole altrui. Non viaggia mai sola: al suo fianco c'è sempre Wvrewvrol, una rana che la accompagna ovunque.",
        loreGiocatori: "Figlia di un pescatore e di una tessitrice di reti che canta mentre lavora, ultima di 5 fratelli. Cresciuta tra i vicoli del porto, impara la lotta dal fratello maggiore e sviluppa presto un forte rifiuto delle gerarchie nate dalle \"vie\": non accetta che i Figli della Cenere abbiano fiamme fioche solo perché nati nello scalino più basso della società — un'ingiustizia per cui si è già presa più di una cicatrice sul volto.\n\nMandata dal padre alla Scuola della Fiamma per diventare Jyotir, durante gli anni di studio matura una discordanza crescente con ciò che vede: il Grande Jyotir servito in ogni funzione da un esercito di Figli della Cenere. Il giorno del suo esame pubblico, invece di dimostrarsi degna, canta contro l'ingiustizia delle vie e dichiara il Grande Jyotir indegno perfino di accendere un cerino — poi fugge prima che le guardie la accerchino. Probabile evento scatenante del suo attuale girovagare.\n\nHa visioni ricorrenti nel sonno: sogna una donna coperta di sangue, una corona di spine sulla fronte, che danza in un bosco fatto di alberi che non sono alberi — tronchi di pietra, tetti di tegole al posto delle chiome. La sua danza è passione e furia insieme; intorno, ai margini della luce del fuoco, restano immobili sagome di uomini, animali e ombre, incapaci di avvicinarsi. Quando per un istante gli sguardi si incrociano, quella rabbia la attraversa come una scarica — e si sveglia senza sapere se l'ha solo vista, o se ora le appartiene.",
        loreMaster: "Il sogno è quasi certamente una visione di Furiosa stessa: segno di un legame speciale tra Zoraya e la dea. È la candidata più naturale a diventarne il campione, ma la scelta non è ancora stata narrata né decisa in modo definitivo. Il tema della \"verità\" nella sua backstory (canta la verità sulle gerarchie, sul Grande Jyotir) è un parallelo diretto con Wvrewvrol — non ancora sfruttato narrativamente. La fuga dalla Scuola della Fiamma è un candidato forte per spiegare come Zoraya arriva a incontrare Nikla e Rei.",
        note: ""
      },
      {
        id: "nikla", nome: "Nikla Kruv", giocatore: "Alessandra",
        colore: "#8f72d4", iniziali: "N",
        immagine: "images/nikla.webp", immaginePos: "center 15%",
        tag: ["Maga dell'inchiostro", "Sigilli", "Compagno: inchiostro senziente"],
        descrizione: "25 anni, di Ferrath (Ferromarchi). Maga dell'inchiostro: la sua magia passa attraverso i sigilli che disegna e sviluppa personalmente, componendoli in un sistema di tatuaggi. Il suo strumento — e in un certo senso il suo famiglio — è un inchiostro senziente e maledetto: non lancia gli incantesimi in modo diretto, è l'inchiostro stesso a canalizzarne l'effetto.",
        loreGiocatori: "Orfana, cresciuta nelle fogne di Ferrath dopo la morte dei genitori (operai, morti in un incidente sul lavoro quando lei aveva 6 anni). Cresciuta da Mr. Percival Mirr, che la prende in simpatia e la introduce ai segreti delle fogne — la figura paterna più vicina che abbia mai avuto, da cui eredita un forte senso critico verso il mondo.\n\nCarattere curioso e flessibile, ma con una visione del mondo diadica: giusto o sbagliato, nessuna scala di grigio. Una volta guadagnata la sua fiducia, è leale per sempre. Arrampicatrice esperta (ogni superficie delle fogne era \"casa\"); pessima cuoca.\n\nDa mesi cerca una biblioteca nascosta di testi antichi legati alla Volontà magica dei Primi Uomini — l'ha mancata per poco: un gruppo di tagliagole l'ha trovata per prima e sta bruciando i volumi per scaldarsi.",
        loreMaster: "Ipotesi di lore non confermata: l'inchiostro senziente potrebbe essere un fatato antico, un ex strumento di espressione del Mondo dei Sogni Condiviso — forse \"mezzo fatato\", cosa che la stessa Nikla potrebbe ignorare. Rischi e lato oscuro del suo utilizzo ancora da sviluppare. Possibile aggancio con la sottocultura/\"frangia nascosta\" di Ferrath già nota in lore, dato il suo passato nelle fogne — da esplorare.",
        note: "I suoi sigilli possono essere progettati e consultati nell'Officina Sigilli dell'archivio."
      },
      {
        id: "karl", nome: "Karl Brenner", giocatore: "Jacopo",
        colore: "#c4954a", iniziali: "K",
        immagine: "images/karl.webp", immaginePos: "center 22%",
        tag: ["Paladino", "Plasmare il metallo", "Ex guardia cittadina"],
        descrizione: "26 anni, di Ferrath (Ferromarchi) — come Nikla. Paladino capace di plasmare il metallo a proprio piacimento (accenno di metalbending, coerente con la Volontà Ferromarchi — poco esplorato finora, non essendo di suo particolare interesse), un dono che unisce alla sua fede e alla sua forza in combattimento.",
        loreGiocatori: "Famiglia medio-borghese: padre pragmatico e artigiano del legno/metallo, madre affettuosa ma sottomessa in casa. Svogliato e poco entusiasta della vita, finché non si innamora perdutamente di Claudia, che dà scopo alla sua esistenza. La mette incinta; la famiglia di lei li allontana per motivi economici, ma i due si sposano lo stesso — Karl si arruola nella guardia cittadina per garantire un reddito solido.\n\nHanno una figlia, Hetel Brenner — Claudia ed Hetel vengono entrambe uccise da briganti una sera in cui Karl era di ronda. Ne segue un trigger di depressione e senso di colpa profondo; inizia la storia gravemente malnutrito ed emaciato, molto più magro del suo fisico massiccio abituale.\n\nCarattere paziente e gentile, morale solida ma difficoltà a esprimere emozioni; dopo la tragedia alterna deflessione umorale ad aggressività manifesta. Rudimenti di combattimento con spada e scudo; carpenteria e artigianato di base.",
        loreMaster: "Personaggio non presente nei documenti di sviluppo originali — emerso solo dalla scheda ricevuta il 1 settembre 2026. Non è chiaro se sia un quarto membro stabile del party o se il suo inserimento sostituisca/riconfiguri la composizione a tre nota in precedenza: da chiarire con il tavolo. Sessione 3: emerso un dettaglio ulteriore — Karl racconta di aver protetto in passato una bambina da un uomo che voleva farle del male, da conciliare con la sua scheda.\n\nSessione 3: Whilliam gli fa indossare un guanto d'arme di famiglia (si lega dolorosamente alla mano, poi rigenera lentamente le ferite di chi lo indossa — nessun altro effetto). Separatamente, Karl inizia a percepire \"punti rossi\" di pericolo/connessione su persone e oggetti (la cintura di Nikla, il fermaglio di Zoraya) — capacità non legata al guanto, ancora senza spiegazione neppure per i giocatori stessi.",
        note: ""
      },
      {
        id: "rei", nome: "Rei", giocatore: "Giulia",
        colore: "#c45a5a", iniziali: "R",
        immagine: "images/rei.webp", immaginePos: "center 18%",
        tag: ["Assassina", "Anima strappata", "Oltre il velo"],
        descrizione: "Assassina la cui anima è stata strappata: una metà vive ancora nel mondo reale, l'altra resta oltre il velo, in un altrove che nessun altro personaggio può percepire come lei.",
        loreGiocatori: "Il suo aggancio alla campagna comincia in un bar di una zona malfamata: viene avvicinata da un tale, Kaf, che vuole ingaggiarla per inscenare un alterco pubblico con un secondo uomo, Theris — il piano di Kaf è ucciderlo durante la rissa per rubargli un frammento e far ricadere la colpa su di lei. Per motivi personali, l'incarico le riporta alla mente un'avventura vissuta tempo fa con un vecchio gruppo, sotto un \"vecchio maestro\" che le insegnò a uccidere \"come un lavoro, senza volontà\".\n\nGiorno 8 del terzo mese: mentre è con Theris, lui lancia sul tavolo con frustrazione il proprio frammento di vetro. Rei lo tocca — qualcosa in lei si smuove, un moto mai provato prima — e cerca di salvarlo, ma fallisce: Theris muore. Segue uno scontro in cui Rei uccide Kaf, che l'avrebbe uccisa per prima. I due frammenti recuperati si fondono in uno solo in tasca sua, e da quel momento toccarlo non produce più alcun effetto.\n\nGiorno 9: alla locanda Rosa Storta scopre che Whilliam ne è il locandiere. Tre uomini entrano e lo minacciano; Rei, spinta per la prima volta da un vero moto di protezione — non più il \"lavoro senza volontà\" del suo addestramento — si offre di occuparsene e ne colpisce a morte due. I tre, incredibilmente, si rialzano come non-morti (vedi Sessione 3).",
        loreMaster: "Kaf e Theris erano due degli otto membri del vecchio gruppo di avventurieri di Ados, gli \"Otto Raggi di Kesper\" (vedi Lore Segreta) — entrambi ora morti in scena, entrambi per mano di Rei. Il frammento fuso Kaf+Theris è ora in possesso di Rei. Sessione 3: Rei finisce uno dei tre non-morti spappolandogli la testa con un calderone, poi vomita per lo shock. Elementi ancora da sviluppare: chi/cosa è \"la Madre Nera\" che Rei teme possa averla trovata; chi è il suo \"vecchio maestro\".",
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
        testo: "Scaltro e forte, era il leader informale del gruppo. Marito di Lilglia, morta di recente a 82 anni. Whilliam ha confermato che è lui il mandante dei tre uomini che hanno assalito la Rosa Storta, e ha implorato il party di andare a cercarlo e, se possibile, salvarlo — ricordando che \"è una brava persona, che illuminava gli altri\". Il party è ora in viaggio verso Pozzprofond sulle sue tracce."
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
  // giocatori, diario in-play di Rei e trascrizione Plaud della
  // Sessione 3. Aggiornato al 4 settembre 2026.
  puntiDiVista: {
    rei: {
      nome: "Rei", giocatore: "Giulia", colore: "#c45a5a", iniziali: "R",
      sottotitolo: "Ciò che Rei sa, ricorda e ha vissuto — la sua verità, non necessariamente quella oggettiva.",
      sezioni: [
        {
          label: "Il suo aggancio alla storia",
          testo: "Tutto comincia in un bar di una zona malfamata: un tale, Kaf, la avvicina per farle inscenare un alterco pubblico con un secondo uomo, Theris — dietro, un piano che lei ignora fino all'ultimo: Kaf vuole ucciderlo durante la rissa per rubargli un pezzo di vetro e far ricadere la colpa su di lei.\n\nCon Theris — un uomo \"perso ma presente\", pieno di ricordi di una vita di avventure che lei invidia — quel pezzo di vetro lanciato sul tavolo con frustrazione le smuove qualcosa che non aveva mai provato prima. Cerca di salvarlo. Fallisce: Theris muore. Poco dopo uccide anche Kaf, che l'avrebbe uccisa per prima — e dalle sue tasche recupera un secondo frammento, che si fonde con quello di Theris in un solo pezzo. Da quel momento toccarlo non produce più nulla: nessuna visione, nessuno specchio, nessuna \"altra sé\", a differenza di prima — ma la storia continua a risuonarle dentro. Tra gli averi di Theris trova un appunto per un appuntamento alla locanda Rosa Storta, e un nome: William."
        },
        {
          label: "La Rosa Storta — giorno 9",
          testo: "Alla locanda osserva tutto come \"l'unica spettatrice di uno strano spettacolo\": i pochi avventori sembrano attori di un teatrino organizzato. William è il locandiere — gentile col \"ragazzo derelitto\" trascinatosi dentro — e due giovani donne che si avvicendano nella sala non la convincono. Il suo primo pensiero, vedendole, è che la Madre Nera l'abbia trovata; scarta presto l'idea, ma resta certa che ognuno di loro sia stato attirato lì per un incontro col destino.\n\nQuando tre uomini loschi minacciano il locandiere, si offre di occuparsene — e nel momento stesso in cui lo dice si stupisce di se stessa: non è più il \"lavoro senza volontà\" del suo addestramento, ma un vero moto di protezione verso un estraneo, sensazione mai provata prima. Nello scontro ne colpisce a morte due; subito dopo un lampo di visione la travolge e perde i sensi. Al risveglio è coperta di sangue, la locanda è un macello, e i tre uomini — nonostante i colpi mortali — si sono rialzati come non-morti. Prova quasi invidia per chi, come le due ragazze, riesce ancora a provare disgusto autentico davanti alla violenza: \"dilettanti\", pensa, e subito dopo si vergogna di averlo pensato.\n\nCuriosamente, nel suo diario Rei non chiama mai le due donne per nome — restano \"le due ragazze\" fino alla fine, anche dopo aver deciso di viaggiare con loro verso Pozzprofond."
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
          testo: "Chi o cosa sia davvero la Madre Nera, e se la stia ancora cercando. Chi fosse il suo vecchio maestro, e perché le abbia insegnato a uccidere senza volontà. Cosa significhino le sue visioni — quella voce femminile, quei piedi insanguinati, quella bambina rannicchiata che piange. Perché ora, per la prima volta, sente nascere in sé un moto di protezione verso qualcun altro."
        }
      ]
    },
    zoraya: {
      nome: "Zoraya", giocatore: "Federica", colore: "#5a8fd4", iniziali: "Z",
      sottotitolo: "Ciò che Zoraya sa, ricorda e ha vissuto.",
      sezioni: [
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
          testo: "Chi sia davvero la donna del suo sogno, e perché quella furia sembri toccarla personalmente ogni volta. Cosa significhi essere stata l'unica, quella notte, capace di percepire con certezza che Whilliam non mentiva. Se valga la pena restare legata a un gruppo che ha appena visto uccidere tre persone — e uccidere di nuovo, forse, prima che il viaggio verso Pozzprofond sia finito."
        }
      ]
    },
    nikla: {
      nome: "Nikla", giocatore: "Alessandra", colore: "#8f72d4", iniziali: "N",
      sottotitolo: "Ciò che Nikla sa, ricorda e ha vissuto.",
      sezioni: [
        {
          label: "Chi è e da dove viene",
          testo: "Orfana, cresciuta nelle fogne di Ferrath dopo la morte dei genitori, operai scomparsi in un incidente sul lavoro quando lei aveva 6 anni. Cresciuta da Mr. Percival Mirr, la figura paterna più vicina che abbia mai avuto, da cui eredita un forte senso critico verso il mondo. Vede tutto in bianco e nero, giusto o sbagliato, senza scale di grigio — ma una volta guadagnata la sua fiducia, è leale per sempre.\n\nDa mesi cerca una biblioteca nascosta di testi antichi legati alla Volontà magica dei Primi Uomini — l'ha mancata per poco: dei tagliagole l'hanno trovata prima di lei e stanno bruciando i volumi per scaldarsi. Il suo strumento — e in un certo senso il suo famiglio — è un inchiostro senziente e maledetto, che canalizza la sua magia attraverso sigilli tatuati."
        },
        {
          label: "Il frammento e le sue visioni",
          testo: "Toccando il frammento di Theris ha una visione: la stessa cosa vista quando è svenuta durante lo scontro — un lago ghiacciato con un riflesso, simile ma non identica. Non riesce a spiegarsi perché quel pezzo di vetro le mostri qualcosa; sa solo che ha bisogno di rivederlo, e che quando lo tocca di nuovo, semplicemente, non succede più nulla — \"un altro buco nell'acqua\".\n\nScopre di possedere più di un frammento: il proprio, e uno ricevuto in dono dalla sorella — un dettaglio che lei stessa, messa alle strette, rivela quasi controvoglia: \"non era un regalo, ma lo puoi tenere\". Quando avvicina i due pezzi, questi si attaccano fra loro."
        },
        {
          label: "La notte alla Rosa Storta",
          testo: "Durante lo scontro lancia un'evocazione informe contro uno degli uomini rialzati, e più tardi una gelatina viola che gli avvolge testa e gola. Resta accanto a Rei mentre questa sbava e convulsiona, spaventata e senza sapere come aiutarla. È la prima volta in vita sua che si ubriaca, ed è la prima volta che uccide una persona — lo dice a voce alta, con un candore di cui lei stessa sembra sorpresa.\n\nQuando scopre di piangere senza motivo apparente, davanti a Whilliam che si sta rompendo in lacrime a sua volta, non capisce cosa le stia succedendo: chiede se sia una malattia. Le viene detto che si tratta solo di essere commossa — parola che sembra non conoscere. Preleva un dito e una mano da uno dei cadaveri prima che i corpi vengano spostati in ghiacciaia — un gesto che compie in silenzio, senza spiegarlo a nessuno, nemmeno a se stessa nel racconto che ne resta."
        },
        {
          label: "Cose che solo lei sa",
          testo: "Ha già un legame non del tutto chiarito con un fatato: il suo inchiostro senziente, forse un antico strumento del Mondo dei Sogni Condiviso. La sua visione del mondo, rigidamente diadica, viene messa alla prova per la prima volta da quello che ha visto quella notte — non sa più distinguere con la stessa sicurezza di prima cosa sia giusto e cosa sbagliato. Ha una sorella, mai nominata altrove nei suoi racconti, che le ha regalato uno dei due frammenti che ora possiede."
        },
        {
          label: "Domande che si porta dietro",
          testo: "Perché ha sentito il bisogno di prelevare un dito e una mano da un cadavere. Cosa significhino davvero i simboli sui frammenti, e perché toccarli le mostri delle visioni. Chi sia sua sorella, e perché le abbia regalato proprio quel pezzo di vetro. Perché, quella notte, ha pianto senza riuscire a spiegarsi il motivo."
        }
      ]
    },
    karl: {
      nome: "Karl", giocatore: "Jacopo", colore: "#c4954a", iniziali: "K",
      sottotitolo: "Ciò che Karl sa, ricorda e ha vissuto.",
      sezioni: [
        {
          label: "Chi è e da dove viene",
          testo: "Famiglia medio-borghese di Ferrath: padre pragmatico e artigiano, madre affettuosa ma sottomessa in casa. Svogliato e poco entusiasta della vita, finché non si innamora perdutamente di Claudia, che dà scopo alla sua esistenza — la mette incinta, la famiglia di lei li allontana per motivi economici, ma i due si sposano lo stesso e Karl si arruola nella guardia cittadina per garantire un reddito solido.\n\nHanno una figlia, Hetel — Claudia ed Hetel vengono entrambe uccise da briganti una sera in cui lui era di ronda. Da allora alterna deflessione umorale ad aggressività manifesta, e porta ancora addosso i segni di una malnutrizione grave, come se il corpo non si fosse mai davvero ripreso da quella notte."
        },
        {
          label: "La Rosa Storta — la notte dello scontro",
          testo: "Arriva alla locanda ferito e malmesso, accolto con gentilezza da Whilliam. Quando i tre uomini si rialzano dopo essere stati dati per morti, sceglie di non porsi troppe domande: Whilliam gli fa indossare un guanto d'arme di famiglia — dieci aghi che gli penetrano dolorosamente la mano prima che il guanto si adatti — e lui lo usa per colpire, non per uccidere: \"per me quello lì deve stare giù, non ho intenzione di ucciderlo\". Tiene bloccato uno degli uomini nonostante le costole rotte e i tentativi di mordere, finché anche quello smette di muoversi.\n\nDopo lo scontro, sopraffatto — \"sarà che non mangiavo da giorni […] ma tutta questa roba mi ricorda altro\" — esce nella notte sotto la pioggia e crolla in un vicolo, tra sonno e delirio, prima di rientrare la mattina dopo."
        },
        {
          label: "La vista rossa",
          testo: "Nello stesso momento in cui indossa il guanto, comincia a percepire dei punti rossi su persone e oggetti — la cintura di Nikla, il fermaglio di Zoraya — mentre tutto il resto gli appare grigio, sbiadito, \"come Frodo quando mette l'anello\", ma al contrario. Non sa cosa significhino quei punti, se siano legati al guanto o a qualcos'altro in lui: sa solo che sono davvero l'unica cosa rossa che quelle persone hanno addosso, e che continuano a vederli anche il mattino dopo, ancora più intensi."
        },
        {
          label: "Un ricordo che riaffiora",
          testo: "La mattina dopo lo scontro, ancora confuso e provato, gli riaffiora — o qualcuno gli fa notare — un ricordo di sé stesso che protegge una bambina da un uomo che voleva farle del male: un dettaglio del suo passato che nemmeno lui aveva mai raccontato prima, e che non sa ancora bene come conciliare con quello che ricorda della propria vita a Ferrath."
        },
        {
          label: "Domande che si porta dietro",
          testo: "Perché vede questi punti rossi, e cosa significhi che appaiono proprio sugli oggetti di Nikla e Zoraya. Chi fosse davvero quella bambina che ricorda di aver protetto, e come si lega al resto della sua storia. Se abbia senso, per lui, restare con un gruppo che ha appena visto — e fatto — cose che preferirebbe non aver mai visto."
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
      riassunto: "2-3 settembre 2026 (fuori gioco). Prosegue e si conclude lo scontro con i tre uomini rialzati come non-morti: Rei ne finisce uno spappolandogli la testa con un calderone (e vomita per lo shock); i corpi vengono portati in una ghiacciaia, Nikla preleva un dito e una mano da uno dei cadaveri. Whilliam fa indossare a Karl un guanto d'arme di famiglia (rigenera lentamente le ferite di chi lo indossa) e racconta la storia completa degli Otto Raggi di Kesper: un tempio senza nome, molto lontano a est, dove il vecchio gruppo trovò i frammenti e se li divise per scherzo come souvenir; lì Ados dichiarò il proprio amore a Lilglia, poi sposata e morta di recente a 82 anni. Whilliam conferma che Ados è il mandante dei tre aggressori e implora il party di salvarlo; rivela di aver già spedito via il proprio frammento tramite il messo che gli aveva portato la lettera di Ados. Nel corso della sessione emergono anche due nuove capacità/misteri: Karl inizia a percepire \"punti rossi\" di pericolo/connessione su persone e oggetti (senza spiegazione), e viene chiarito — incrociando la scena con il diario di Rei — che le \"due donne sospette\" della locanda sono in realtà Nikla e Zoraya stesse. Il gruppo parte infine per il villaggio di Pozzprofond, sulle tracce di Ados.",
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
      nuova: true,
      economia: [],
      oggetti: [],
      approfondimenti: [
        {
          titolo: "Fonte",
          testo: "Trascrizione automatica (Plaud) della seduta al tavolo del 2-3 settembre 2026, caricata e integrata il 4 settembre 2026, incrociata con il diario personale di Rei e con le correzioni fornite direttamente dall'utente. Il file completo della trascrizione è archiviato in Furiosa/Trascrizioni/Sessione 3 — 2-3 settembre 2026.md."
        },
        {
          titolo: "Nota DM — misteri aperti emersi in questa sessione",
          testo: "Perché Nikla ha prelevato un dito e una mano dal cadavere. Il meccanismo dietro la capacità di Karl di vedere \"punti rossi\". Chi sia \"X\", la ragazza che Karl racconta di aver protetto da bambina da un uomo che voleva farle del male, e come si concili con la sua scheda."
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
        testo: "Gli \"8 Raggi di Kesper\" era il nome del vecchio gruppo di avventurieri di Ados — dalla ruota di Kesper, il carro leggendario di una delle Sei Figlie, a otto raggi come loro. Il gruppo trovò otto frammenti di vetro apparentemente senza valore in un tempio senza nome, molto lontano a est, e se li divise uno a testa per scherzo, come souvenir, senza mai sospettare avessero un potere. In quel tempio Ados dichiarò il proprio amore a Lilglia.\n\nI membri: Ados (leader, scaltro e forte — oggi ossessionato dal recuperare tutti i frammenti dopo aver ucciso per sbaglio la moglie Lilglia, il cui frammento si è fuso col suo, corrompendolo). Kaf — morto, ucciso da Rei (giorno 8 del terzo mese); il suo frammento si è fuso con quello di Theris ed è ora in possesso di Rei. Refistas (studioso metodico, ucciso dai banditi sulla strada per Tresil mentre andava a un appuntamento con Whilliam alla Rosa Storta — nei suoi ultimi giorni indagava sui frammenti in un taccuino). Whilliam — identificato in gioco come il locandiere della Rosa Storta stesso; minacciato dai tre uomini mandati da Ados (tutti e tre uccisi da Rei, poi rialzati come non-morti e definitivamente abbattuti in Sessione 3); ha già spedito via il proprio frammento tramite il messo che gli aveva portato la lettera di Ados. Berer (esploratore, morto poco prima che Refistas si ritirasse — sepolto da Refistas a Pozzprofond, ai piedi di un castagno, col proprio frammento). Elia (morta di parto, il suo frammento donato a un orfanotrofio). Theris — morto in scena (giorno 8), Rei ha tentato invano di salvarlo. Lilglia — moglie/amata di Ados, sposata dopo l'episodio del tempio, morta di recente all'età di 82 anni; il suo frammento si è fuso con quello di Ados, corrompendolo.\n\nStato dei frammenti: Ados ha il proprio + quello di Lilglia (fusi e corrotti). Kaf+Theris fusi, in possesso di Rei (fusione SENZA segni di corruzione — dato rilevante per l'ipotesi di Refistas, vedi sotto). Quello di Berer è ancora sepolto a Pozzprofond, mai reclamato. Quello di Elia è a destinazione sconosciuta dopo l'orfanotrofio. Quello di Refistas è di stato sconosciuto — finito nel bottino dei banditi? Ancora sul corpo? Whilliam ha spedito il proprio via tramite un messo (presumibilmente verso Ados) — non più in suo possesso.\n\nSviluppi dal tavolo (Sessione 3): confermato che Ados è il mandante dei tre uomini della Rosa Storta, tutti e tre abbattuti definitivamente dal party; Whilliam implora il party di \"salvare Ados\". Chiarito anche chi fossero le \"due giovani donne sospette\" osservate nella stessa locanda: sono Nikla e Zoraya stesse, non NPC misteriosi — mistero risolto (vedi PNG e Alleati.md per il dettaglio dei tratti/soprannomi ipotizzati). Resta aperto il legame con \"la Madre Nera\" temuta da Rei.\n\nIpotesi di Refistas (dal suo taccuino, non confermata): il cristallo/frammenti sarebbero magia antica non più concessa agli uomini, capace di spezzare il velo se riuniti — possibile collegamento diretto con la corruzione di Ados e con l'obiettivo di Furiosa di attraversare il velo verso l'Irkalla. Da confermare/correggere alla luce del dato sulla fusione Kaf+Theris priva di corruzione.\n\nChi è Lilglia — risolto: è la moglie/amata defunta di Ados descritta sopra. Il Blocco 5 della scaletta manoscritta originale (un villaggio con una setta che venera/teme un'entità chiamata \"Lilglia\", diretta da uno zombie dello stesso nome) resta però contenuto NON ancora giocato al tavolo — foreshadowing coerente con l'ipotesi che Ados stia cercando di riportarla in vita, ma non ancora confermato in scena."
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
      { id: "th-11", testo: "Chi è Karl Brenner nel party — quarto membro stabile o sostituto? (Sessione 3: racconta anche di aver protetto da bambina una ragazza da un uomo che voleva farle del male — da conciliare con la sua scheda, incluso il legame con Claudia)." },
      { id: "th-12", testo: "Chi/cosa è \"la Madre Nera\" che Rei teme possa averla trovata, e chi è il suo \"vecchio maestro\"." },
      { id: "th-14", testo: "Chi è \"il ragazzo derelitto\" di cui Whilliam si prende cura alla locanda (non più menzionato in Sessione 3)." },
      { id: "th-15", testo: "Cosa faceva esattamente il frammento di Theris quando Rei lo toccava la prima volta (visioni/specchio/\"altra sé\") — perché ha smesso di funzionare una volta fuso con quello di Kaf." },
      { id: "th-16", testo: "Se il rituale del Blocco 5 (villaggio, zombie di nome Lilglia — ancora non giocato) confermerà il legame con la Lilglia moglie di Ados, la cui identità/backstory è ora nota (vedi Lore Segreta)." },
      { id: "th-17", testo: "Confermare la suddivisione esatta tra Sessione 1 e Sessione 2 nella scaletta scene/colonna sonora — attualmente solo un'ipotesi di lavoro." },
      { id: "th-18", testo: "Perché Nikla ha prelevato un dito e una mano da uno dei cadaveri alla Rosa Storta (Sessione 3)." },
      { id: "th-19", testo: "Meccanismo dietro la capacità di Karl di percepire \"punti rossi\" di pericolo/connessione — emersa in Sessione 3, distinta dal guanto d'arme." }
    ]
  }

};
