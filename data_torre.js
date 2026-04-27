// ============================================================
// data_torre.js — La Torre della Follia
// ============================================================

const TORRE_DATA = {

  meta: {
    titolo: "La Torre della Follia",
    sottotitolo: "One Shot — Kaelvaran",
    tipo: "One Shot",
    stato: "In sviluppo"
  },

  // ── AMBIENTAZIONE ──────────────────────────────────
  ambientazione: [
    {
      id: "la-torre",
      nome: "La Torre",
      testo: `La torre sorge su un promontorio isolato, visibile da miglia di distanza. Nessuno ricorda chi l'abbia costruita né quando. Gli abitanti dei villaggi vicini la chiamano semplicemente "la Torre" — come se fosse sempre esistita, come se non ci fosse bisogno di un nome più specifico.

L'esterno è di pietra grigia scura, levigata dal vento del mare. Le finestre, dove esistono, sono strette e irregolari. La porta d'ingresso non ha serratura — si apre sempre, per chiunque si avvicini abbastanza.

All'interno, la torre è più grande di quanto sembri dall'esterno. I piani si moltiplicano. Le scale non sempre portano dove ci si aspetta. Alcuni corridoi si ripetono. Alcune stanze cambiano.`,
      tag: ["Dungeon", "Magia", "Mistero"]
    },
    {
      id: "il-promontorio",
      nome: "Il Promontorio",
      testo: `Il promontorio su cui sorge la torre è una lingua di roccia che si protende sul mare. La vegetazione è rada — qualche arbusto spinoso, erba secca, licheni. Il vento è costante e porta con sé il sale e, a volte, qualcosa di più difficile da nominare.

Il sentiero che porta alla torre è stretto e sconnesso. Ci vogliono circa quaranta minuti di cammino dal villaggio più vicino. Il promontorio non ha mai avuto un nome ufficiale, ma i locali lo chiamano "il Dente".`,
      tag: ["Esterno", "Accesso"]
    },
    {
      id: "villaggio-radice",
      nome: "Radice",
      testo: `Il villaggio di Radice è l'insediamento più vicino alla torre — un centinaio di abitanti, per lo più pescatori e contadini. I radichesi non parlano volentieri della torre. Ci sono stati episodi nel passato. Non amano ricordarli.

Hanno però una regola non scritta: non si va alla torre da soli. Non si va di notte. E se qualcuno entra e non torna entro tre giorni, non lo si va a cercare.`,
      tag: ["Villaggio", "Punto di partenza"]
    }
  ],

  // ── ECONOMIA ───────────────────────────────────────
  economia: {
    valute: [
      { sigla: "mo", nome: "Moneta d'Oro",    valore: 100, note: "Raramente usata al di fuori delle città" },
      { sigla: "ma", nome: "Moneta d'Argento", valore: 10,  note: "Valuta comune" },
      { sigla: "mr", nome: "Moneta di Rame",   valore: 1,   note: "Per piccole transazioni" }
    ],
    salari: [
      { ruolo: "Contadino / pescatore", giorno: "2 ma",  mese: "6 mo",   note: "Media stagionale" },
      { ruolo: "Artigiano",             giorno: "5 ma",  mese: "15 mo",  note: "Varia per mestiere" },
      { ruolo: "Guardia cittadina",     giorno: "8 ma",  mese: "24 mo",  note: "Più vitto e alloggio" },
      { ruolo: "Mercenario",            giorno: "1 mo",  mese: "30 mo",  note: "Dipende dal rischio" },
    ],
    categorie: [
      {
        id: "vitto",
        nome: "Vitto & Alloggio",
        icona: "🍞",
        voci: [
          { nome: "Pasto semplice",          costo: "3 mr",  note: "Pane, formaggio, brodo" },
          { nome: "Pasto completo",           costo: "1 ma",  note: "Locanda di villaggio" },
          { nome: "Notte in locanda",         costo: "5 ma",  note: "Camera condivisa" },
          { nome: "Notte in locanda (privata)",costo: "2 mo", note: "Camera singola" },
        ]
      },
      {
        id: "equipaggiamento",
        nome: "Equipaggiamento",
        icona: "⚔",
        voci: [
          { nome: "Torcia",          costo: "1 mr",  note: "Dura circa 1 ora" },
          { nome: "Corda (15m)",     costo: "5 ma",  note: "Canapa resistente" },
          { nome: "Rampino",         costo: "2 mo",  note: "Con gancio in ferro" },
          { nome: "Spada corta",     costo: "10 mo", note: "Qualità standard" },
          { nome: "Armatura di cuoio",costo:"25 mo", note: "Leggera, discreta" },
        ]
      }
    ]
  },

  // ── MAPPE ──────────────────────────────────────────
  mappe: {
    torre: [
      { id: "pin-ingresso",    nome: "Ingresso",          x: 50, y: 88, tooltip: "La porta che si apre da sola",       colore: "#c9a84c" },
      { id: "pin-piano1",      nome: "Primo Piano",       x: 50, y: 68, tooltip: "Il salone dei ritratti",             colore: "#5a8fd4" },
      { id: "pin-piano2",      nome: "Secondo Piano",     x: 50, y: 50, tooltip: "La biblioteca — i libri cambiano",   colore: "#8f72d4" },
      { id: "pin-piano3",      nome: "Terzo Piano",       x: 50, y: 32, tooltip: "Le stanze dei sogni",                colore: "#c45a5a" },
      { id: "pin-sommita",     nome: "La Sommità",        x: 50, y: 12, tooltip: "Ciò che aspetta in cima",            colore: "#c9a84c" },
    ]
  },

  // ── SVILUPPO CAPITOLI (solo DM) ────────────────────
  capitoli: [
    {
      id: "cap-1",
      numero: 1,
      titolo: "La Porta Aperta",
      stato: "completato",
      luogo: "Ingresso e Primo Piano",
      musica: [
        {
          label: "Atmosfera — Arrivo",
          spotifyUri: "https://open.spotify.com/embed/track/3n3Ppam7vgaVa1iaRUIOKE",
          note: "Brano ambient per l'ingresso nella torre"
        },
        {
          label: "Tensione — Il Salone",
          spotifyUri: "https://open.spotify.com/embed/track/0wwPcA6wtMf6HUMpIRdeP7",
          note: "Per quando esplorano il salone dei ritratti"
        }
      ],
      riassunto: `I personaggi raggiungono il promontorio del Dente dopo essere stati ingaggiati dal sindaco di Radice per investigare la scomparsa di due giovani del villaggio, spariti tre giorni fa dopo aver scommesso di trascorrere una notte nella torre.

La porta si apre da sola al loro avvicinarsi. All'interno trovano il salone dei ritratti: decine di quadri che raffigurano persone diverse, alcune in abiti di secoli fa. I ritratti guardano tutti verso lo stesso punto della stanza — un camino spento, in cui qualcuno ha lasciato un paio di scarpe.`,
      eventiChiave: [
        "La porta si apre senza che nessuno la tocchi",
        "Il salone è più grande dell'esterno della torre lascerebbe supporre",
        "I ritratti si muovono — di poco, appena fuori dall'angolo visivo",
        "Le scarpe appartengono a uno dei due ragazzi scomparsi",
        "Le scale portano al secondo piano, ma anche in basso — verso qualcosa che non dovrebbe esserci"
      ],
      noteDM: `I ritratti sono il primo segnale che la torre "registra" chi la visita. Ogni ritratto è una persona che è entrata. I PG vedranno i propri ritratti comparire nel corso dell'avventura — prima sfocati, poi sempre più definiti.

Le scarpe sono una traccia voluta. Il ragazzo le ha lasciate consapevolmente — aveva capito che togliersi le scarpe lo rendeva "più silenzioso" per qualcosa che sentiva muoversi sopra di lui. Questa intuizione era giusta.

Non affrettare le scale verso il basso — lascia che i giocatori decidano. Il piano sotterraneo è il capitolo 3.`,
      oggetti: [
        { nome: "Le scarpe di Fen",    note: "Appartengono a Fen, 16 anni, uno dei due ragazzi scomparsi. Dentro c'è un biglietto piegato: 'non fare rumore'" },
        { nome: "Ritratto sfocato",    note: "Un quadro con una sagoma indefinita — il colore della capigliatura assomiglia a uno dei PG" }
      ]
    },

    {
      id: "cap-2",
      numero: 2,
      titolo: "La Biblioteca Mutevole",
      stato: "in corso",
      luogo: "Secondo Piano",
      musica: [
        {
          label: "Esplorazione — Biblioteca",
          spotifyUri: "https://open.spotify.com/embed/track/2WfaOiMkCvy7F5fcp2zZ8L",
          note: "Musica per l'esplorazione tranquilla"
        },
        {
          label: "Scoperta — I libri cambiano",
          spotifyUri: "https://open.spotify.com/embed/track/5S0VP7cCuEWMFpMSoYZiJf",
          note: "Quando i giocatori si accorgono del fenomeno"
        }
      ],
      riassunto: `Il secondo piano è interamente occupato da una biblioteca. Gli scaffali arrivano al soffitto — che è troppo alto. I libri sono reali, sfogliabili, scritti in lingue diverse. Ma se si torna a cercarne uno già visto, non è più al suo posto. A volte i titoli cambiano. A volte il contenuto.

In un angolo della biblioteca c'è una scrivania con un diario aperto. L'inchiostro è fresco. Le ultime pagine sono scritte dalla mano dell'altra ragazza scomparsa — Mira, 14 anni — e descrivono quello che ha visto nei giorni passati nella torre.`,
      eventiChiave: [
        "I libri si riorganizzano — i PG lo capiscono solo al secondo giro",
        "Il diario di Mira: sopravvive nascondendosi e annotando schemi",
        "Un libro si apre da solo su una mappa della torre — ma la mappa è sbagliata",
        "Qualcosa si muove tra gli scaffali. Non è ostile. Non ancora.",
        "Mira è ancora viva — il diario è di oggi"
      ],
      noteDM: `La biblioteca risponde alle domande — ma in modo obliquo. Se un PG cerca un libro su un argomento specifico con intenzione, lo trova. Il contenuto però è sempre leggermente sbagliato: date errate, nomi alterati, conclusioni invertite. La torre non mente, ma distorce.

La creatura tra gli scaffali è una forma di fatato — nato dall'ossessione di un vecchio studioso che ha trascorso anni nella torre. Non è aggressivo, ma è territoriale. Può diventare un alleato se trattato con rispetto.

Il diario di Mira è fondamentale: contiene la chiave per capire come "leggere" la torre. Non darglielo troppo in fretta — lascia che lo scoprano un pezzo alla volta.`,
      oggetti: [
        { nome: "Diario di Mira",       note: "24 pagine scritte negli ultimi 3 giorni. Contiene osservazioni sui pattern della torre, schizzi delle stanze, un sistema di simboli inventato da Mira per orientarsi" },
        { nome: "La mappa sbagliata",   note: "Una mappa della torre trovata in un libro. È accurata per il 70% — il 30% rimanente descrive stanze che non esistono, o stanze che esistono ma al posto sbagliato" },
        { nome: "Il libro che risponde", note: "Un volume rilegato in cuoio grigio. Se vi si scrive una domanda nell'ultima pagina, una risposta appare entro un'ora. Ma è sempre parziale." }
      ]
    },

    {
      id: "cap-3",
      numero: 3,
      titolo: "Le Stanze dei Sogni",
      stato: "pianificato",
      luogo: "Terzo Piano e Sommità",
      musica: [
        {
          label: "Il Terzo Piano",
          spotifyUri: "https://open.spotify.com/embed/track/6NPVjNh8Jhru9xjaMr1g8z",
          note: "Atmosfera onirica e disorientante"
        },
        {
          label: "La Sommità — Confronto finale",
          spotifyUri: "https://open.spotify.com/embed/track/0e7X7yCkB1vel9Y2KKQE1w",
          note: "Per il momento culminante"
        }
      ],
      riassunto: `Il terzo piano è fatto di stanze che non obbediscono alla fisica. Alcune sono più piccole dell'ingresso ma contengono foreste. Alcune hanno più porte di quante ne abbiano pareti. In una delle stanze, Fen dorme — non riesce a svegliarsi, non dal giorno in cui è entrato.

Mira è al terzo piano. È sveglia, lucida, spaventata, ma funzionale. Ha trovato il modo di muoversi tra le stanze usando il sistema di simboli del suo diario. Ha capito che la torre non è vuota — c'è qualcosa in cima che la abita. Qualcosa che non è ostile, ma che non capisce del tutto cosa siano gli esseri umani.`,
      eventiChiave: [
        "Fen è in un sonno che assomiglia al mondo dei sogni — qualcuno lo tiene lì",
        "Mira guida i PG attraverso le stanze usando i suoi simboli",
        "La sommità: un'entità che colleziona memorie. Non sa di fare del male.",
        "Per liberare Fen bisogna negoziare — non combattere",
        "La torre, dopo la risoluzione, comincia lentamente a cambiare"
      ],
      noteDM: `L'entità alla sommità è il punto centrale dell'avventura. Non è un villain — è una cosa antica che ha imparato a esistere assorbendo le esperienze di chi entra nella torre. Tiene Fen nel mondo dei sogni perché il suo sogno era particolarmente ricco — non per crudeltà, ma per curiosità.

La risoluzione ideale non è uno scontro. I PG devono capire cosa vuole l'entità (connessione, comprensione, storie) e offrirglielo in cambio di Fen. Se attaccano, la torre diventa ostile — non impossibile da superare, ma molto più pericolosa.

Finale aperto: la torre rimane. L'entità rimane. Il rapporto tra l'entità e Radice potrebbe diventare qualcosa di diverso in futuro.`,
      oggetti: [
        { nome: "Il sistema di simboli di Mira", note: "Una chiave pratica per navigare il terzo piano. Funziona finché Mira è sveglia e concentrata." },
        { nome: "Frammento di memoria",          note: "L'entità può offrire ai PG un frammento — un ricordo di qualcuno che è entrato prima di loro. Potrebbe contenere informazioni utili per la campagna principale." }
      ]
    }
  ]

};
