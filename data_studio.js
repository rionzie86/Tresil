// ══════════════════════════════════════════════════════════════════
//  LO STUDIO FALLITO — data_studio.js
//  Versione 2 — aggiornata con lore completa
// ══════════════════════════════════════════════════════════════════

const studioDati = {

  // ── LORE SEGRETA DM ───────────────────────────────────────────
  loreSegreta: `I SUHEK'NAL
Creature vermiformi originarie di un piano parallelo. In forma libera sono vermi translucidi lunghi pochi centimetri. La loro biologia è progettata per la simbiosi: si attaccano a un ospite volontario, entrano in uno stato di condivisione (Veth'kor) durante il quale una gemma registra ogni informazione del corpo ospite, poi si trasferiscono nella copia perfetta lasciando libero l'originale.

Questo processo — il Veth'nal — è sacro per la loro cultura. Prendere un ospite con la forza è considerato impuro. Lo stanno facendo per necessità: La Fine li sta decimando da 45 anni.

IL VETH'NAL — IL CULTO DELL'OSPITE PERFETTO
I Suhek'nal hanno una filosofia evolutiva chiamata Veth'nal (il cammino verso la forma). Credono che la forma vermiforme sia uno stato larvale spirituale — non fisicamente, ma ontologicamente. Solo nell'unione con l'ospite giusto il simbionte raggiunge la sua forma completa. L'ospite perfetto non è il più forte: è quello con cui il simbionte risuona completamente, creando qualcosa di nuovo che non è né l'uno né l'altro.

I tre gradi del Veth'nal:
• Veth'suu — il primo contatto. Il simbionte osserva l'ospite dal riflesso dello specchio.
• Veth'kor — la condivisione. Il simbionte percepisce i ricordi, le emozioni, la storia dell'ospite. La gemma inizia a registrare.
• Veth'nal — la forma completa. La gemma è formata, il trasferimento avviene. Il simbionte vive nella copia perfetta.

Simbionti che usano ospiti forzati sono chiamati Veth'saar — corrotti. La comunità li tollera solo per la crisi attuale.

LA FINE
Entità entrata dalla falla demoniaca 45 anni fa. Non ha forma definita — è percepita come un'assenza che si muove: dove passa, l'aria diventa stagnante, le superfici perdono colore, i suoni si smorzano. Lentissima. Immortale. Uccide qualsiasi entità viva al contatto. Più vite tocca, più l'influsso del suo piano demoniaco si espande nell'ambiente circostante.

Non si distrae. Non si rallenta. L'unica strategia è tenersi a distanza.

IL LABORATORIO
Fondato dai Suhek'nal per sviluppare tecnologie di connessione con altri piani. I piani scendono (1 è il più alto, 4 il più profondo). 45 anni fa un esperimento al Piano 4 ha aperto un varco verso un piano demoniaco. La Fine è entrata. Il laboratorio è stato messo in quarantena — tutte le uscite sigillate.

40 anni fa i Suhek'nal hanno replicato l'esperimento al Piano 1 creando un varco verso Kaelvaran per attirare ospiti. Il duplicato Kaelvaran del laboratorio è emerso spontaneamente, adattandosi al mondo: stile fantasy medievale, trappole e creature generate dall'ambiente.

I DUPLICATI
Ogni varco forzato genera un duplicato dello spazio nel mondo di destinazione, adattato al contesto di quel mondo:
• Piano 1 duplicato Kaelvaran — aspetto castello medievale, trappole fantasy, creature locali
• Piano 4 duplicato demoniaco — girone infernale, geometrie impossibili, calore

Gli specchi sono i punti di contatto tra le versioni parallele.

MECCANICA DEGLI SPECCHI
• Specchi normali: collegano la stessa stanza tra versione Kaelvaran e versione Suhek'nal
• Specchi speciali (segnalati in mappa): portano direttamente alla Stanza 15 del Piano 2 Suhek'nal (la stanza delle gemme), indipendentemente da dove ci si trova

LA STANZA DELLE GEMME (Stanza 15, Piano 2 Suhek'nal)
Le gemme in formazione registrano le informazioni degli ospiti. Una per ospite. Quando completa, il Suhek'nal può eseguire il trasferimento nella copia. Le gemme non attirano La Fine finché non sono completamente formate.

IL CRISTALLO TEMPORALE
Fonte di energia che alimenta il primo varco (verso il piano demoniaco) al Piano 4. Un secondo cristallo alimenta la quarantena. Per la risoluzione standard: spegnere il cristallo dei portali quando La Fine è nel duplicato Kaelvaran — così rimane intrappolata lì. Ma questo non è ideale.

RISOLUZIONE OTTIMALE (da scoprire tramite indizi):
Il cristallo temporale, se sovraccaricato, implode creando effetti caotici. Se fatto implodere all'interno del varco demoniaco, risucchia ogni realtà nella propria realtà d'origine — La Fine torna nel suo piano, i Suhek'nal nel loro, i PG a Kaelvaran. Richiede di trovare gli scritti sui cristalli temporali.

VARN SELICK
Criminale, ex capo di un culto del cannibalismo nei sobborghi di una città. Stava cercando di evocare e soggiogare un incubo della prima era. I PG lo hanno sconfitto due giorni fa ma è fuggito, lasciando tracce che li hanno portati fino alla frana.

Fisicamente: uomo sulla cinquantina, corporatura robusta, capelli grigi rasati ai lati e lunghi in cima sempre legati. Una bruciatura estesa copre il lato sinistro del collo e sale fino alla mandibola. Occhi chiari quasi incolori. Vestiti pratici e scuri. Freddo, intelligente, capace di ispirare devozione cieca.

• VARN ORIGINALE: vaga disorientato tra i piani 1 e 3. Paranoico e pericoloso. Potrebbe attaccare i PG scambiandoli per nemici o allearsi con loro se capisce la situazione.
• VARN COPIA (Suhek'nal): vaga nel Piano 1 Kaelvaran cercando di nascondersi. Comportamento leggermente diverso — più calmo, più controllato. Chi conosce bene Varn potrebbe notare qualcosa di storto.

Le sue guardie del corpo: una morta al contatto con La Fine, l'altra vittima di una trappola al Piano 1.`,

  // ── PANORAMICA ────────────────────────────────────────────────
  panoramica: `Qualcuno ha aperto una porta che non avrebbe dovuto aprire.

Lo Studio era un luogo di ricerca — creature che cercavano di capire cosa c'è oltre il confine del loro mondo. Hanno trovato una risposta. La risposta li ha trovati a sua volta.

Ora lo Studio è silenzioso. E voi siete dentro. E la porta attraverso cui siete entrati non porta più fuori.

Ci sono cose qui dentro che non vogliono farvi del male. Ce ne sono altre che non sanno fare altro. E qualcosa — lento, inevitabile, senza nome — vi sta già cercando.`,

  // ── STRUTTURA ─────────────────────────────────────────────────
  struttura: {
    piani: [
      {
        id: "piano1",
        nome: "Piano 1",
        versioni: ["Kaelvaran", "Suhek'nal"],
        stanze: 19,
        tema_kaelvaran: "La familiarità distorta. Castello medievale generato spontaneamente. Trappole, enigmi, creature locali. Esplorazione e tensione. La Fine arriva mentre esplorano.",
        tema_suheknal: "Il laboratorio come era. Uffici, archivi, strumenti di misurazione anni 40/50. Documenti sui Suhek'nal e sul Veth'nal. Prime tracce di cosa è andato storto.",
        ingresso: "Stanza 1 (in alto a destra della mappa) — accesso da una frana in un burrone. L'apertura è emersa dalla roccia come se fosse sempre stata lì."
      },
      {
        id: "piano2",
        nome: "Piano 2",
        versioni: ["Kaelvaran", "Suhek'nal"],
        stanze: 25,
        tema_kaelvaran: "La struttura si fa più instabile. Il castello medievale mostra crepe dove il laboratorio originale affiora. Scontri più intensi.",
        tema_suheknal: "I laboratori attivi. Tavoli di contenimento, strumenti avanzati, la stanza delle gemme (stanza 15). Informazioni sulla falla demoniaca e su La Fine.",
        stanza_gemme: "Stanza 15 — destinazione di tutti gli specchi speciali. Le gemme in formazione degli ospiti attuali."
      },
      {
        id: "piano3",
        nome: "Piano 3",
        versioni: ["Kaelvaran", "Suhek'nal"],
        stanze: 25,
        tema_kaelvaran: "Il duplicato si corrode. Elementi demoniaci affiorano nel medievale. Trappole ancora attive, zone dissolte.",
        tema_suheknal: "La prima linea di difesa. Segni di battaglia contro La Fine. Residui di combattimento, trappole, zone dove la realtà si è dissolta. La Fine è più presente qui."
      },
      {
        id: "piano4",
        nome: "Piano 4",
        versioni: ["Kaelvaran-demoniaco", "Suhek'nal"],
        stanze: 17,
        tema_kaelvaran: "Il duplicato demoniaco. Girone infernale, geometrie impossibili, calore insopportabile. Il cristallo temporale.",
        tema_suheknal: "Il laboratorio profondo. L'origine della falla. Il varco demoniaco ancora aperto. La fonte di energia."
      }
    ]
  },

  // ── CAPITOLI (da sviluppare stanza per stanza) ─────────────────
  capitoli: [

    {
      id: "ingresso",
      titolo: "Ingresso — La Frana",
      icona: "🪨",
      riassunto: "Un'apertura nella roccia di un burrone. Non c'era ieri. Le tracce di Varn portano dentro.",
      sezioni: [
        {
          titolo: "L'Accesso",
          tipo: "scena",
          testo: `Il burrone scende ripido. Le tracce di Varn Selick finiscono qui — impronte nel fango, una striscia di sangue sul bordo della roccia, e poi niente. Solo la frana.

Nell'ammasso di roccia e terra c'è un'apertura. Non sembra un crollo — sembra che qualcosa sia emerso dall'interno spingendo verso fuori. I bordi sono lisci, come se la pietra avesse ceduto gradualmente nel tempo.

Dall'interno non viene né luce né suono. Solo aria ferma.`,
          notaDM: `I PG stanno inseguendo Varn Selick — capo di un culto del cannibalismo, sconfitto due giorni fa ma fuggito. Le tracce li hanno portati fino a qui.

Uno degli indizi che potrebbero trovare nelle vicinanze: il corpo della prima guardia del corpo di Varn, morta qualche metro dentro l'ingresso. Non ha ferite visibili. La pelle ha perso ogni colore, come carta sbiancata. Toccando il corpo: freddo innaturale. Nessuna traccia di cosa l'abbia uccisa.

Questo è il primo segno de La Fine — che i PG non sanno ancora cosa sia.`
        }
      ],
      musica: { titolo: "Atrium Carceri — Kapitel", artista: "Atrium Carceri", descrizione: "Ingresso" }
    },

    {
      id: "piano1_kaelvaran",
      titolo: "Piano 1 — Versione Kaelvaran",
      icona: "🏰",
      riassunto: "Un castello medievale che non dovrebbe esistere. Generato spontaneamente dal varco 40 anni fa. Trappole, enigmi, creature. E uno specchio che mente.",
      sezioni: [
        {
          titolo: "L'Atmosfera",
          tipo: "scena",
          testo: `Non è quello che vi aspettavate dall'interno di una frana.

Corridoi in pietra grigia, torce spente nelle applique di ferro battuto, pavimenti di mattoni disposti in pattern regolari. È un castello — o qualcosa che ha deciso di sembrarlo. La struttura è coerente ma non del tutto giusta: le proporzioni sono leggermente sbagliate, i corridoi finiscono dove non dovrebbero, alcune stanze sembrano più grandi dall'interno di quanto sembrerebbero dall'esterno.

L'aria è ferma. Non ci sono finestre. Non c'è cielo.`,
          notaDM: `Il Piano 1 Kaelvaran è un duplicato generato spontaneamente 40 anni fa quando i Suhek'nal hanno aperto il varco verso Kaelvaran. Si è adattato all'estetica del mondo — ha l'aspetto di una struttura medievale fantasy.

Trappole, enigmi e creature non sono stati piazzati da nessuno: sono emersi spontaneamente come anticorpi del duplicato. Non hanno una logica narrativa precisa — sono il prodotto di un ambiente che ha assorbito 40 anni di Kaelvaran.

LA FINE appare mentre i PG esplorano — il DM sceglie il momento più efficace. Segnali premonitori: silenzio totale improvviso, torce (se accese) che si spengono progressivamente in una direzione, freddo crescente. La Fine è lenta — basta camminare per non farsi raggiungere. Ma non si ferma mai.

VARN SELICK COPIA vaga in questo piano cercando di nascondersi. Comportamento leggermente più calmo e controllato dell'originale. Se i PG lo incontrano potrebbe essere il primo momento di disorientamento — non capiscono perché Varn sembra diverso.

SPECCHI: alcuni specchi in questo piano portano alla stessa stanza nel Piano 1 Suhek'nal. Alcuni specchi speciali portano direttamente alla Stanza 15 del Piano 2 Suhek'nal (la stanza delle gemme). Il primo Suhek'nal si attacca al primo PG che si guarda in uno specchio — un piccolo movimento sulla propria spalla, visibile solo nel riflesso.`
        }
      ],
      stanze: [
        {
          numero: 1,
          titolo: "La Sala d'Arrivo",
          testo: `• Sala di pietra grigia; arco di finestra murato di terra e radici morte
• Sopra la terra, una lastra di vetro perfetta e trasparente — non dovrebbe esistere qui
• Sopra la porta, gargolla che regge uno scrigno/occhio, orbite vuote rivolte alla stanza
• Crepa diagonale nel pavimento, torcia spenta
• Corpo rovesciato della guardia di Varn: pelle intatta, organi/ossa disposte da dentro a fuori, niente sangue né odore`,
          notaDM: `Primo segno de La Fine, va giocato con calma, non un jump scare ma una scoperta che si carica lentamente man mano che i giocatori realizzano cosa stanno guardando. Nessuna prova imposta a tavolino, lascia che sia la descrizione a fare il lavoro.

Su richiesta di un PG che esamina da vicino: la pelle al centro del groviglio è ancora intatta, senza tagli né lacerazioni, non è stata aperta. È come se l'intero corpo fosse stato srotolato e poi riavvolto al contrario, strato per strato, senza mai romperne la continuità.

La finestra crollata è il primo di diversi punti simili nel piano, vale la pena ripeterlo in altre stanze come motivo ricorrente. Nessuna trappola qui, è la stanza di decompressione, serve a stabilire il tono prima che inizi l'esplorazione vera.

LA LASTRA DI VETRO e LA GARGOLLA sono i primi due elementi "storti" del piano — frammenti del laboratorio Suhek'nal trasposti in questo castello e resi privi di senso. Il vetro qui è l'eco della vetrata a tutta altezza che, lato Suhek'nal, occupa la stessa parete della Stanza 1 (lì affacciata sulla stessa terra compattata, ma concettualmente rovesciata: lì il vetro era progettato per essere trasparente, qui è un elemento del tutto estraneo all'architettura del castello). La gargolla riproduce, in forma "digerita" dall'estetica fantasy, la telecamera a obiettivo rettangolare che lato Suhek'nal sorveglia lo stesso punto. Nessun effetto meccanico: sono solo la prima crepa visibile nella finzione del duplicato. Ripeti questo tipo di dettaglio (oggetti sci-fi trasposti e resi inutili) in ogni stanza del piano, con intensità e frequenza a discrezione del DM.`
        },
        {
          numero: 2,
          titolo: "Il Corridoio dei Frammenti",
          testo: `• Corridoio lungo e stretto, detriti rumorosi sotto i piedi
• Tre finestre murate di terra in fila, una con terra smossa di recente
• Fila di archetti scolpiti troppo sinuosi per mano umana, con piccole gargolle ripetute a intervalli`,
          notaDM: `Il punto di terra smossa nella terza finestra crollata è un piccolo indizio ambientale, qualcosa o qualcuno è passato di lì o si è nascosto lì di recente. Puoi usarlo per Varn Selick copia, che potrebbe aver attraversato questa stanza cercando un punto più sicuro, oppure lasciarlo come falso indizio, giusto per costruire tensione.

I detriti sparsi rendono la stanza rumorosa da attraversare in silenzio, eventuale prova di furtività con svantaggio se serve un momento di tensione con creature nei paraggi. Nessuna trappola strutturale qui, ma è un buon punto per un primo incontro con una creatura anticorpo del duplicato, vista la lunghezza della sala e le molteplici vie di fuga da gestire narrativamente.

Gli archetti troppo sinuosi ripetono, in scala architettonica, la fila di telecamere che lato Suhek'nal percorre lo stesso corridoio a intervalli regolari. Un PG con background pertinente (artigiano, scalpellino, architetto) può notare che nessuna tecnica medievale conosciuta produce quella regolarità — un piccolo indizio, se il DM vuole seminare dubbi prima ancora dello specchio della Stanza 4.`
        },
        {
          numero: 3,
          titolo: "La Fontana",
          testo: `• Fontana asciutta, statua femminile con proporzioni sbagliate
• Targa alla base: dedica "al fondatore", nome in un alfabeto irriconoscibile, data impossibile`,
          notaDM: `La scultura distorta è un buon punto per un piccolo momento di inquietudine gratuita, niente di meccanico, solo un dettaglio che i giocatori più attenti noteranno. Se qualcuno esamina il residuo bianco sul fondo della vasca, è semplicemente calcare, nessun segreto nascosto qui.

La targa è la controparte distorta di quella, identica nel testo di dedica, che si trova nella stessa stanza lato Suhek'nal (dedicata al fondatore reale del centro ricerche). Qui è stata "digerita" e ricostruita male dal duplicato: nome illeggibile, data impossibile. Nessun enigma da risolvere — è un dettaglio che dovrebbe restare senza spiegazione fino a molto più avanti nella campagna, se mai verrà spiegato del tutto.`
        },
        {
          numero: 4,
          titolo: "La Sala dello Specchio",
          testo: `• Stanza spoglia, due nicchie vuote che dovevano contenere statue
• Specchio a figura intera incrinato: riflesso con ritardo impercettibile, piccolo movimento sulla spalla
• Colonnine con trappola visibile e mal fatta (filo teso, meccanismo a scatto)`,
          notaDM: `Primo specchio che i giocatori incontreranno, salvo diversa scelta del DM. Chi si guarda dentro vede il proprio riflesso con un ritardo di una frazione di secondo, quasi impercettibile, e un piccolo movimento sulla spalla nel riflesso, che nella realtà non c'è. È qui che il primo Suhek'nal comincia a osservare il proprio futuro ospite. Nessun effetto meccanico immediato, solo il seme piantato.

Le colonnine con la trappola visibile sono la prima delle due "barriere di sicurezza mal congegnate" del piano (l'altra è nella Sala Incrinata, stanza 5) — l'eco distorta dei varchi di controllo che, lato Suhek'nal, occupano le stesse due stanze e bloccavano il passaggio di determinate sostanze e apparecchiature verso i livelli inferiori. Qui il duplicato ha ricostruito solo la forma, non la funzione: una trappola artigianale, relativamente facile da individuare (un tiro di Percezione con CD bassa la nota), che scatta un dardo o un piccolo laccio senza reale pericolo mortale — abbastanza per far capire ai giocatori che qualcuno, o qualcosa, "voleva" fermare chi passa di qui, anche se non ricorda più perché.`
        },
        {
          numero: 5,
          titolo: "La Sala Incrinata",
          testo: `• Crepa profonda nel pavimento, vuoto sottostante di pochi centimetri
• Meccanismo di trappola danneggiato/forzato vicino al varco`,
          notaDM: `La crepa nel pavimento può essere semplicemente scenografica, oppure il DM può decidere che nasconde qualcosa sotto, un piccolo vano, un oggetto caduto lì per caso. Nessun pericolo strutturale a meno che non si voglia introdurne uno.

Il meccanismo forzato è la seconda barriera trasposta, danneggiata esattamente come la sua controparte lato Suhek'nal (vedi stanza 5 lato Suhek'nal) — stesso danno, stessa direzione di sfondamento. Buon dettaglio se il DM vuole più avanti far notare ai giocatori che le due versioni del piano non solo si somigliano, ma "ricordano" gli stessi eventi.`
        },
        {
          numero: 6,
          titolo: "La Sala Grande",
          testo: `• Salone crollato, macerie e colonne spezzate, percorso tortuoso
• Impronte di lunghe file di tavoli sotto le macerie, troppo regolari per un salone
• Fogli con schizzi anatomici di creature vermiformi, semisepolti su un tavolo`,
          notaDM: `Le macerie rendono il movimento più lento e rumoroso, buon punto per un incontro con una creatura anticorpo o per un piccolo enigma ambientale, ad esempio un percorso tra i detriti che nasconde una lieve instabilità del pavimento in un punto preciso.

Questa sala è l'eco distorta della Mensa lato Suhek'nal (stessa stanza, stessa funzione originaria di sala da pranzo collettiva). I fogli con gli schizzi anatomici sono la controparte esatta del documento chiave trovabile lì — qui però sono illeggibili o comprensibili solo in parte, un assaggio incompleto della stessa informazione. Se i PG trovano prima questa versione, il documento completo lato Suhek'nal avrà più peso quando (e se) lo troveranno.`
        },
        {
          numero: 7,
          titolo: "Il Deposito",
          testo: `• Scaffalature marce, casse ridotte in polvere, baule chiuso non forzato
• Fila di catini di pietra con tubature che non portano da nessuna parte`,
          notaDM: `Il baule chiuso può contenere un piccolo oggetto utile o semplicemente qualche moneta antica, a discrezione del DM, giusto per premiare chi si prende il tempo di cercare tra le macerie.

I catini di pietra con le tubature senza sbocco sono l'eco distorta del Bagno A lato Suhek'nal (stessa stanza) — impianti idraulici trasposti in arredo apparentemente decorativo e privo di funzione.`
        },
        {
          numero: 8,
          titolo: "La Sala dell'Astrolabio",
          testo: `• Stanza ottagonale a cupola, astrolabio inciso nel pavimento, anelli ancora mobili
• Apertura nella cupola: unica luce naturale di tutto il piano
• Foro di scolo isolato, privo di senso in questo contesto`,
          notaDM: `L'astrolabio può essere un piccolo enigma opzionale, i giocatori possono provare a ruotare gli anelli per allinearli, senza un vero effetto meccanico a meno che il DM non voglia collegarlo a qualcosa di più ampio in seguito. Per ora è semplicemente un dettaglio inquietante e bello da esplorare, un frammento di scienza vera dei Suhek'nal filtrato attraverso l'estetica fantasy del duplicato.

Questa stanza è l'eco del Bagno B lato Suhek'nal (stessa stanza) — l'apertura nella cupola corrisponde alla finestrella opaca di quella versione, l'unica fonte di luce naturale su tutto il piano in entrambe le realtà. Vale la pena far notare ai giocatori che è l'unica luce "vera" che incontreranno qui.`
        },
        {
          numero: 9,
          titolo: "Lo Snodo",
          testo: `• Sala di passaggio, pavimento in leggera pendenza verso un angolo
• Nicchia con tre sedie, tavolino e rotoli di pergamena su "il cammino verso la forma"
• Appena entrati: un urlo lontano, breve, impossibile da localizzare`,
          notaDM: `Buon punto di snodo narrativo. L'URLO IN LONTANANZA è un innesco atmosferico deliberato — non richiede reazione meccanica, va semplicemente lasciato cadere nel silenzio e mai spiegato subito. Ricompare identico lato Suhek'nal quando i PG raggiungono questa stessa stanza da quella versione: è un'eco che il duplicato riproduce, forse legata a un evento reale accaduto qui 45 anni fa.

La nicchia con i rotoli è l'eco distorta della sala d'attesa lato Suhek'nal (stessa stanza, fondo basso), dove lo stesso testo appare come un opuscolo devozionale dei Suhek'nal — l'Introduzione al Veth'nal. Qui è stato "digerito" in forma di pergamena, con lo stesso contenuto reso più vago e meno tecnico. Buon primo assaggio della filosofia dei Suhek'nal senza svelarla del tutto.`
        },
        {
          numero: 10,
          titolo: "Il Crocevia",
          testo: `• Punto di passaggio obbligato, umidità crescente verso un lato
• Garitta con grata troppo fine per essere forgiata a mano
• Fila di madie di legno chiuse`,
          notaDM: `L'umidità crescente verso sud è un indizio ambientale della sala allagata poco oltre, un piccolo dettaglio che prepara i giocatori prima che la vedano.

La garitta con la grata fine e le madie sono l'eco distorta della Guardiania lato Suhek'nal (stessa stanza) — il posto di controllo a vetro e gli armadietti del personale, trasposti in arredo da castello che non ha alcuna funzione difensiva reale. Il DM può nascondere qualcosa in una delle madie chiuse, a piacere.`
        },
        {
          numero: 11,
          titolo: "La Sala dell'Altare",
          testo: `• Due doccioni scolpiti (volto ibrido), allineati soffitto/pavimento, canalizzazioni sproporzionate
• Refolo d'aria fredda residuo da quello superiore
• Scale nascoste dietro il doccione inferiore, scendono al Piano 2`,
          notaDM: `I due doccioni allineati sono l'eco distorta della Doccia di Decontaminazione ad aria compressa che occupa la stessa stanza lato Suhek'nal — stessi due ugelli (sopra e sotto), qui reinterpretati come elementi religiosi/decorativi ma con canalizzazioni che tradiscono una funzione più tecnica di quanto l'estetica voglia ammettere. Le scale dietro il doccione inferiore sono la connessione verticale reale verso il Piano 2, identica nella posizione a quella lato Suhek'nal — è la prima discesa concreta che i PG possono trovare in questo piano, se il DM decide di renderla accessibile già ora.

Nessun potere reale nei doccioni. Se un PG li esamina da vicino, può notare che le "bocche" sono cave e che un debole refolo d'aria, freddo, esce ancora a intervalli irregolari da quella superiore — ultimo residuo di un sistema spento da decenni.`
        },
        {
          numero: 12,
          titolo: "La Sala Sommersa",
          testo: `• Stanza allagata fino alle ginocchia, muffa e alghe scure sulle pareti
• Nicchie di pietra sommerse, quasi tutte vuote; in una, un cencio di stoffa marcita`,
          notaDM: `Stanza quasi vuota, pensata più per l'atmosfera che per il contenuto, ma il DM può nascondere qualcosa sul fondo dell'acqua, invisibile senza cercare attivamente, magari un piccolo oggetto perso da chi abitava qui prima della frana.

Le nicchie regolari sono l'eco distorta degli armadietti dello Spogliatoio A lato Suhek'nal (stessa stanza) — qui ridotti a semplici vani di pietra sommersi, la loro funzione originaria del tutto illeggibile senza il confronto con l'altra versione.`
        },
        {
          numero: 13,
          titolo: "La Sala delle Crepe",
          testo: `• Fitta rete di crepe, refolo d'aria fredda da alcune
• Muretto basso incongruo, con un panno perfettamente ripiegato`,
          notaDM: `Le crepe più larghe possono nascondere piccoli oggetti per chi cerca con attenzione, o essere semplicemente scenografiche. Il refolo d'aria fredda è un piccolo indizio che da qualche parte, oltre le crepe, c'è uno spazio non mappato, buon gancio se si vuole espandere il piano in futuro.

Il muretto e il panno ripiegato sono l'eco dello Spogliatoio B lato Suhek'nal (stessa stanza) — la panca e l'asciugamano piegato di quella versione, trasposti qui in forma di arredo di pietra. Il dettaglio del panno "lasciato un attimo prima di sparire" può essere ripreso letteralmente se il DM vuole enfatizzare quanto le due versioni condividano lo stesso momento di abbandono improvviso.`
        },
        {
          numero: 14,
          titolo: "La Sala Vuota",
          testo: `• Salone spoglio, quattro impronte sottili e regolari nella polvere (non da mobili medievali)
• Specchio a figura intera, insolitamente pulito e lucido`,
          notaDM: `Buon momento di respiro dopo le sale più dense, oppure il DM può usarla per un incontro con Varn Selick copia, che potrebbe aver scelto proprio questo spazio spoglio per nascondersi, sentendosi meno esposto.

I quattro rettangoli nella polvere sono l'eco dei pannelli illustrativi della Galleria dei Progressi lato Suhek'nal (stessa stanza) — qui il duplicato non ha nemmeno tentato di ricostruirli, lasciando solo l'impronta di ciò che dovrebbe esserci. Lo specchio è uno dei punti di contatto con la controparte esatta, richiesto anche nelle stanze 15, 18 e 19.`
        },
        {
          numero: 15,
          titolo: "La Sala Grande Ovest",
          testo: `• Vetrine di vetro in frantumi al centro della sala
• Stendardo mezzo marcito: "...oltre ciò che è conosciuto"
• Secondo specchio a figura intera, appoggiato di sbieco, spostato di recente
• Grande finestra murata di terra, la più grande del piano`,
          notaDM: `La grande finestra crollata qui può essere il momento più forte per far notare ai giocatori questo motivo ricorrente del piano, magari con un breve dialogo tra i personaggi se si vuole enfatizzarlo.

Questa sala e la 14 sono l'eco del Salone delle Scoperte lato Suhek'nal (stessa stanza) — le vetrine e lo stendardo trasposti in reliquiario da castello, il motto identico nel senso ma "digerito" dall'estetica fantasy. Il secondo specchio, spostato di recente, è lo stesso indizio ambientale presente lato Suhek'nal: qualcuno lo ha usato di recente — Varn Selick, un Suhek'nal in movimento, o altro a discrezione del DM.`
        },
        {
          numero: 16,
          titolo: "La Piccola Sala Nord",
          testo: `• Cuscino rotondo marcito al centro della stanza
• Parete con bassorilievo che imita una cascata, canale asciutto sotto
• Due lastre scure contrapposte che riflettono con un lieve ritardo innaturale`,
          notaDM: `Questa stanza è l'eco distorta della Sala di Quiete A lato Suhek'nal (stessa stanza) — cuscino, "cascata" e coppia di specchi contrapposti, tutti presenti ma trasfigurati: la cascata d'acqua reale diventa un bassorilievo che la imita soltanto, gli specchi funzionanti diventano lastre che riflettono con un ritardo innaturale. Buon momento per un piccolo disagio puramente atmosferico, senza alcun effetto meccanico a meno che il DM non voglia usarlo per qualcosa di più avanti nella campagna.`
        },
        {
          numero: 17,
          titolo: "La Sala Isolata",
          testo: `• Versione ridotta della sala precedente: cuscino quadrato, cascata più stretta, stesse lastre-specchio
• Un oggetto personale abbandonato al centro, fuori posto`,
          notaDM: `L'oggetto abbandonato è un gancio narrativo da riempire come si preferisce, magari qualcosa appartenuto a un esploratore precedente, o un piccolo indizio su chi altro potrebbe essere passato di qui prima dei PG.

Variante minore della Sala di Quiete B lato Suhek'nal, stessa coppia di elementi (cuscino, bassorilievo a cascata, lastre-specchio) in scala ridotta.`
        },
        {
          numero: 18,
          titolo: "Il Passaggio Sud",
          testo: `• Catini in miniatura, quasi da bambino, allineati sotto fori di scolo
• Involti di stoffa marcita su scaffali bassi
• Specchio a figura intera posizionato molto in basso`,
          notaDM: `Stanza di passaggio, utile per allungare il tragitto verso la sala finale e costruire disagio crescente prima della stanza 19. I catini in miniatura, gli involti di stoffa e lo specchio basso sono l'eco distorta dei Servizi del Daycare lato Suhek'nal (stessa stanza) — la scala ridotta di ogni oggetto è il dettaglio che dovrebbe iniziare a inquietare i giocatori prima ancora di entrare nella sala successiva.`
        },
        {
          numero: 19,
          titolo: "La Sala Finale",
          testo: `• Tracce di focolare, affreschi infantili sbiaditi alle pareti
• Giocattoli di legno: cavallo a dondolo con occhio mancante, torre di blocchi troppo precisa
• In un angolo, sedia a dondolo con una bambola seduta: vestito pulito, senza polvere`,
          notaDM: `Questa sala chiude il giro, permettendo ai giocatori di tornare verso l'ingresso senza dover ripercorrere tutto il piano a ritroso. Buon punto per un ultimo incontro prima di eventualmente scendere al piano successivo.

Questa sala è l'eco distorta del Daycare lato Suhek'nal (stessa stanza, stessa disposizione) — i giocattoli, il cavallo a dondolo con l'occhio mancante, e soprattutto LA BAMBOLA SULLA SEDIA A DONDOLO sono identici, dettaglio per dettaglio, alla loro controparte esatta dall'altra parte dello specchio. Il vestito pulito, privo di polvere in entrambe le versioni, è il segnale più forte del piano: qualcosa attraversa regolarmente il confine tra le due realtà per prendersi cura di questo singolo oggetto, o lo mantiene così deliberatamente. Non spiegare mai questo dettaglio a tavolino — lasciare che i giocatori lo notino da soli, magari in due sessioni diverse, una per versione, è l'effetto voluto.`
        }
      ],
      musica: { titolo: "A Room Between the Rooms", artista: "Lustmord", descrizione: "Piano 1 Kaelvaran" }
    },

    {
      id: "piano1_suheknal",
      titolo: "Piano 1 — Versione Suhek'nal",
      icona: "🔬",
      riassunto: "Il laboratorio originale. Uffici abbandonati, archivi, strumenti di ricerca anni 40/50. Le prime tracce di cosa sono i Suhek'nal.",
      sezioni: [
        {
          titolo: "L'Atmosfera",
          tipo: "scena",
          testo: `Attraverso lo specchio, tutto cambia.

Corridoi in linoleum grigio screpolato. Lampade fluorescenti a soffitto — alcune ancora accese, con un ronzio basso e continuo, altre spente o rotte. Scrivanie di legno scuro con sopra strumenti di misurazione analogici, quadranti con lancette ferme, dossier impilati. Cassetti aperti, sedie rovesciate. Qualcuno è andato via in fretta.

L'aria sa di ozono e di qualcosa che non si riesce a identificare.`,
          notaDM: `Questo è il laboratorio com'era prima dell'incidente — o quasi. 45 anni di abbandono hanno lasciato il segno, ma la struttura tiene.

DOCUMENTI DA TROVARE AL PIANO 1 SUHEK'NAL:
• Introduzione al Veth'nal — un manuale interno che spiega la filosofia e il processo di simbiosi. Scritto in modo accademico ma con tono quasi religioso. (Stanza 9, sala d'attesa)
• Rapporto di accesso al Piano 4 — descrive l'esperimento che ha aperto la falla. L'ultima riga è: "Contatto stabilito. Natura dell'entità: sconosciuta. Procedura di emergenza attivata." (Stanza 14/15, galleria)
• Schizzi anatomici dei Suhek'nal in forma vermiforme — con note sui meccanismi di attacco e condivisione. (Stanza 6, mensa — lasciati su un tavolo, forse letti durante una pausa)

Questi documenti preparano i PG a capire cosa sta succedendo senza spiegarlo direttamente.

STRUTTURA FISICA: questo piano occupa esattamente lo stesso spazio della versione Kaelvaran — stessa pianta, stessi collegamenti, stessa numerazione delle stanze. Cambia solo cosa ci si trova dentro. Ogni stanza ha (o può avere) uno specchio a figura intera che comunica con la controparte esatta lato Kaelvaran — è così che il primo Suhek'nal osserva il proprio futuro ospite, ed è così che i PG, se attraversano per errore, potrebbero ritrovarsi dall'altra parte.

URLA IN LONTANANZA: quando i PG raggiungono la Stanza 9 (da qualunque direzione), un urlo distante rimbalza nei corridoi — impossibile localizzarlo con precisione, non si ripete subito. Non è un mostro: è un residuo, un'eco che il duplicato riproduce ogni tanto, forse legata a un momento reale accaduto qui 45 anni fa. Nessun incontro immediato: è un innesco atmosferico, la prima cosa che rompe il silenzio del piano.`
        }
      ],
      stanze: [
        {
          numero: 1,
          titolo: "L'Atrio",
          testo: `• Bancone reception, monitor CRT spento, tessere identificative sparse sul pavimento
• Vetrata a tutta altezza intatta: dietro, solo terra compattata
• Telecamera spenta sopra la porta, spia rossa sotto la polvere`,
          notaDM: `Il vetro intatto contro il muro di terra è il primo elemento del piano che stabilisce il "gemellaggio" con la versione Kaelvaran — la stessa parete, lì, è un muro di terra coperto da una lastra di vetro chiaramente fuori posto. Qui è l'esatto contrario concettuale: la parete era progettata per essere trasparente, e lo è ancora, semplicemente non c'è più nulla da vedere attraverso di essa.

La telecamera sopra la porta è la prima di una serie — verranno replicate, in forma distorta, sul lato Kaelvaran come piccole gargolle. Nessun effetto meccanico: sono morte da 45 anni, ma il DM può usarle come dettaglio ricorrente se vuole introdurre più avanti un sistema di sorveglianza ancora funzionante da qualche parte nei piani inferiori.`
        },
        {
          numero: 2,
          titolo: "Il Corridoio di Sorveglianza",
          testo: `• Canaline portacavi aperte, fili scoperti che pendono
• Telecamere identiche a intervalli regolari lungo il corridoio
• Una crepa nel pavimento con terra smossa di recente`,
          notaDM: `Le telecamere ripetute a intervalli regolari sono il motivo ricorrente da portare, trasfigurato, sul lato Kaelvaran (piccole gargolle che reggono uno scrigno o un occhio). La terra smossa nella crepa è lo stesso indizio ambientale già presente lato Kaelvaran — Varn Selick copia (o l'originale, a discrezione del DM) potrebbe essere passato di qui.`
        },
        {
          numero: 3,
          titolo: "La Fontana Commemorativa",
          testo: `• Fontana ornamentale asciutta, piastrelle azzurre scrostate
• Targa alla base dedicata al fondatore del centro ricerche, leggibile e coerente`,
          notaDM: `La targa è pensata per avere una controparte distorta lato Kaelvaran, ai piedi della fontana lì presente: stesso oggetto, stesso posizionamento, ma "qualcosa che non torna" nel testo o nella forma. Qui, lato Suhek'nal, il testo è del tutto coerente e leggibile — nome del fondatore del laboratorio, non necessariamente rilevante per la trama a meno che il DM non voglia collegarlo a un PNG futuro.`
        },
        {
          numero: 4,
          titolo: "La Prima Barriera",
          testo: `• Varco di controllo tra due colonne di spie spente
• Cartello: vietato l'accesso con campioni biologici non containerizzati`,
          notaDM: `Questa è la prima di due barriere di sicurezza pensate per impedire il trasporto di determinate sostanze e apparecchiature verso i livelli inferiori del laboratorio (contenimento biologico, presumibilmente legato ai Suhek'nal stessi o ai loro esperimenti). Sono spente da 45 anni — nessun effetto meccanico reale, ma il DM può farle riattivare più avanti nella campagna se vuole introdurre un ostacolo.

Sul lato Kaelvaran, questa stanza e la successiva diventano una serie di trappole vistose ma mal congegnate — l'eco distorta di un sistema che un tempo aveva una funzione precisa.`
        },
        {
          numero: 5,
          titolo: "La Seconda Barriera",
          testo: `• Identica alla precedente ma forzata: una colonna divelta e piegata
• Pannello di controllo esploso verso l'interno`,
          notaDM: `Il danno visibile qui suggerisce che qualcuno, o qualcosa, ha forzato il passaggio con violenza — buon gancio per il DM: potrebbe essere stato La Fine stessa, 45 anni fa, o un tentativo disperato di fuga durante l'incidente originale. Nessuna informazione definitiva richiesta a questo punto della storia.`
        },
        {
          numero: 6,
          titolo: "La Mensa",
          testo: `• File di tavoli lunghi in metallo, sedie impilate o rovesciate
• Distributori automatici infranti, cucina a vista con pentole appese
• Fogli con schizzi anatomici lasciati su un tavolo, a metà lettura`,
          notaDM: `Documento chiave qui: gli schizzi anatomici dei Suhek'nal. Il dettaglio dei fogli lasciati su un tavolo della mensa, come se qualcuno li leggesse in pausa pranzo, è pensato per essere sottilmente inquietante — un ricercatore studiava i propri futuri ospiti tra un boccone e l'altro.

Lato Kaelvaran questa diventa la Sala Grande, un salone/refettorio con file di tavoli di pietra crollati — le differenze da una mensa "sci-fi" (tavoli di metallo, distributori automatici) rispetto a una sala da pranzo medievale sono un buon momento per un giocatore attento.`
        },
        {
          numero: 7,
          titolo: "Bagno A",
          testo: `• Fila di lavandini in ceramica, specchi incrinati o anneriti
• Porte dei bagni singoli socchiuse, alcune mancanti`,
          notaDM: `Ambiente puramente atmosferico. Lato Kaelvaran diventa il Deposito, con scaffalature e casse — le tubature che non portano da nessuna parte, viste in quella versione, sono l'eco distorta di questi impianti idraulici.`
        },
        {
          numero: 8,
          titolo: "Bagno B",
          testo: `• Bagno singolo, distributore di carta vuoto e arrugginito
• Finestrella opaca in alto: unica luce naturale del piano`,
          notaDM: `La finestrella opaca è un piccolo dettaglio unico su questo piano — vale la pena enfatizzarlo, dato che quasi nessun'altra stanza ha luce naturale. Lato Kaelvaran diventa la Sala dell'Astrolabio: la finestrella opaca potrebbe essere l'origine, distorta, della cupola che lascia filtrare luce in quella stanza.`
        },
        {
          numero: 9,
          titolo: "Corridoio degli Uffici",
          testo: `• Ex uffici open space, scrivanie e pannelli mobili crollati, faldoni ovunque
• Nell'angolo più basso: area d'attesa con reception, sedie, tavolino con opuscoli su "il cammino verso la forma"
• Appena entrati: un urlo lontano, breve, impossibile da localizzare`,
          notaDM: `L'AREA D'ATTESA in fondo alla sala contiene il documento chiave "Introduzione al Veth'nal" (uno degli opuscoli sul tavolino) — la prima esposizione diretta, seppur criptica, della filosofia religiosa dei Suhek'nal, presentata come materiale informativo per "ospiti" in attesa. Il tono è deliberatamente ambiguo tra opuscolo aziendale e testo di culto.

L'URLO è l'innesco atmosferico descritto nell'atmosfera generale del piano — non richiede una reazione meccanica, solo silenzio e attenzione dei giocatori.`
        },
        {
          numero: 10,
          titolo: "La Guardiania",
          testo: `• Postazione dietro un vetro spesso crepato, citofono muto
• Fila di armadietti sul lato destro; uno vibra leggermente se ci si avvicina`,
          notaDM: `Gli armadietti chiusi sono un buon gancio opzionale — il DM può decidere cosa contengono (oggetti personali, forse qualcosa di utile, o qualcosa di meglio lasciato chiuso). La vibrazione impercettibile in uno di essi può essere lasciata come mistero irrisolto o sviluppata in seguito.

Lato Kaelvaran diventa il Crocevia — la garitta a vetro si trasforma in una piccola guardiola di legno con una grata, gli armadietti in madie o casse chiuse.`
        },
        {
          numero: 11,
          titolo: "La Doccia di Decontaminazione",
          testo: `• Due grandi ugelli allineati (soffitto/pavimento) per decontaminazione ad aria compressa
• Dietro l'ugello inferiore, scale nascoste che scendono al Piano 2`,
          notaDM: `Questa è la connessione verticale verso il Piano 2 su questo lato del duplicato. Il sistema è spento da 45 anni: attraversarla non ha effetti meccanici a meno che il DM non voglia riattivarla (aria compressa reale, o qualcosa di peggio, se vuole introdurre un pericolo).

Lato Kaelvaran, l'altare originariamente previsto in questa stanza va sostituito: al suo posto, a sud, due doccioni scolpiti — uno sopra, uno sotto — eco distorta e "religiosa" degli ugelli di decontaminazione. Le scale dietro restano, portando comunque al Piano 2.`
        },
        {
          numero: 12,
          titolo: "Spogliatoio A",
          testo: `• File di armadietti aperti, vestiti da lavoro ridotti a stracci
• Panche di legno al centro, alcune spezzate`,
          notaDM: `Ambiente atmosferico. Lato Kaelvaran diventa la Sala Sommersa, allagata — le panche spezzate e gli armadietti collassati diventano, in quella versione, macerie sommerse dall'acqua.`
        },
        {
          numero: 13,
          titolo: "Spogliatoio B",
          testo: `• Fila di armadietti, zona doccia comune ammuffita
• Un asciugamano piegato, rimasto su una panca per 45 anni`,
          notaDM: `L'asciugamano piegato è un piccolo dettaglio umano, il tipo di cosa che rende reale l'abbandono improvviso. Lato Kaelvaran diventa la Sala delle Crepe.`
        },
        {
          numero: 14,
          titolo: "La Galleria dei Progressi",
          testo: `• Pannelli illustrativi con foto di gruppo e diagrammi delle scoperte
• Un pannello centrale, più curato degli altri, dedicato alla scoperta di un'energia capace di "assottigliare il confine tra le realtà"
• Specchio a figura intera contro una parete
• Tra i pannelli, occultato: il rapporto sull'accesso al Piano 4`,
          notaDM: `Tra i pannelli, se i PG cercano con attenzione, si può nascondere il Rapporto di accesso al Piano 4 (documento chiave) — magari incorniciato come "risultato più importante mai raggiunto", con la frase finale "Contatto stabilito. Natura dell'entità: sconosciuta." lasciata lì, ironicamente, come trofeo.

IL PANNELLO CENTRALE è il primo punto in cui i PG possono capire che questo popolo ha scoperto un'energia — il cristallo — capace di connettere realtà diverse. Il testo del pannello è celebrativo, quasi trionfale, e mostra un diagramma semplificato: una sfera pulsante al centro, con linee che si diramano verso altre "sfere" più piccole disegnate attorno. Nessun dettaglio tecnico qui, solo l'annuncio della scoperta — i dettagli tecnici sono al Piano 2 (vedi capitolo "Lo Sviluppo dei Cristalli").

Lo specchio a figura intera qui è uno dei punti di contatto con la controparte Kaelvaran — stessa stanza, stesso oggetto, richiesto esplicitamente anche in tutte le stanze 15, 18 e 19.`
        },
        {
          numero: 15,
          titolo: "Il Salone delle Scoperte",
          testo: `• Teche di vetro in gran parte in frantumi al centro
• Striscione mezzo strappato: "...verso ciò che è oltre"
• Un modellino in scala, sotto una delle teche superstiti, mostra una sfera pulsante collegata a più "finestre" verso altri mondi
• Secondo specchio, leggermente inclinato, spostato di recente`,
          notaDM: `Il modellino in scala è il seguito naturale del pannello nella Galleria (stanza 14): qui il concetto diventa più concreto — non solo "un'energia che assottiglia il confine", ma una rappresentazione visiva di un'unica fonte capace di collegare più realtà contemporaneamente. Buon punto per un PG che vuole capire meglio prima di scendere ai piani inferiori.

Il secondo specchio "leggermente inclinato, spostato di recente" è un piccolo indizio ambientale — qualcuno (Varn Selick originale, o un Suhek'nal in movimento) potrebbe averlo usato di recente. Nessun effetto obbligato, solo tensione.

Lato Kaelvaran, questa e la stanza 14 diventano una galleria di trofei/reliquie fuori contesto per l'estetica del castello — con la stessa coppia di specchi presente, ma "sbagliati" in qualche modo.`
        },
        {
          numero: 16,
          titolo: "Sala di Quiete A",
          testo: `• Cuscino rotondo al centro
• Parete a cascata d'acqua, ora ferma, incrostazioni calcaree
• Specchi a figura intera contrapposti: corridoio infinito di riflessi`,
          notaDM: `Sala di meditazione per il personale — pensata per la decompressione mentale in un ambiente ad alto stress psicologico. Il gioco di specchi contrapposti (corridoio infinito di riflessi) è un buon momento inquietante puramente atmosferico: nessun effetto meccanico, ma il DM può usarlo per un jump scare leggero se un PG fissa troppo a lungo il proprio riflesso moltiplicato.`
        },
        {
          numero: 17,
          titolo: "Sala di Quiete B",
          testo: `• Variante più piccola: cuscino quadrato, cascata più stretta
• Stessi specchi contrapposti della sala gemella`,
          notaDM: `Variante minore della stanza 16. Il DM può usare questa coppia di stanze come momento di respiro narrativo prima del tratto finale del piano (spogliatoi/daycare).`
        },
        {
          numero: 18,
          titolo: "Servizi del Daycare",
          testo: `• Bagno a misura di bambino, scaffali con pannolini e biberon
• Ripostiglio con passeggini piegati e impilati
• Specchio a figura intera posizionato più in basso, per l'altezza di un bambino`,
          notaDM: `Il dettaglio del bagno a misura di bambino e dello specchio posizionato più in basso è pensato per essere sottilmente perturbante prima ancora di entrare nella stanza 19 — prepara il tono. Lo specchio qui è un altro dei punti di contatto richiesti con la controparte Kaelvaran.`
        },
        {
          numero: 19,
          titolo: "Il Daycare",
          testo: `• Murales sbiaditi, animali sorridenti ormai irriconoscibili
• Giocattoli sparsi: cavallo a dondolo con occhio mancante, torre di blocchi troppo precisa
• In un angolo, sedia a dondolo con una bambola: vestito pulito, senza polvere`,
          notaDM: `La bambola pulita, priva di polvere, in una stanza altrimenti coperta da 45 anni di abbandono, è il dettaglio più inquietante e importante di questa stanza — qualcuno, o qualcosa, l'ha toccata di recente, o la mantiene così deliberatamente. Il DM decide se e quando dare seguito a questo indizio: può restare un mistero mai risolto, o diventare un gancio per un incontro futuro (magari con un Suhek'nal che imita comportamenti umani osservati, o con qualcosa di più inquietante).

Nessun effetto meccanico imposto: lasciate che siano i giocatori a decidere se toccarla, spostarla, o andarsene senza guardare indietro.`
        }
      ],
      musica: null
    },

    {
      id: "piano2_kaelvaran",
      titolo: "Piano 2 — Versione Kaelvaran",
      icona: "⚔️",
      riassunto: "Il castello medievale mostra le crepe. Scontri. Zone dove il laboratorio originale affiora attraverso la pietra.",
      sezioni: [
        {
          titolo: "L'Atmosfera",
          tipo: "scena",
          testo: `Qualcosa è cambiato al secondo piano.

Le pareti sono ancora di pietra medievale, ma in alcuni punti la superficie si è screpolata rivelando qualcosa di diverso sotto — metallo, linoleum, cavi. Come se due realtà stessero cercando di occupare lo stesso spazio e nessuna delle due stesse vincendo.

Le creature qui sono più aggressive. E gli specchi sono ovunque.`,
          notaDM: `Il Piano 2 Kaelvaran è dove il duplicato inizia a degradarsi — la sovrapposizione con il laboratorio originale è più visibile.

LA STANZA 15 è raggiungibile dagli specchi speciali di qualsiasi piano. Chi entra dalla stanza 15 si trova nel Piano 2 Suhek'nal — nella stanza delle gemme.`
        }
      ],
      stanze: [
        {
          numero: 1,
          titolo: "Sala di Controllo Corrotta",
          testo: `• Piccola sala di pietra, una crepa nel muro rivela un pannello con quadranti di metallo dietro la roccia
• Un candelabro di ferro battuto è fuso in modo innaturale con un tubo metallico che spunta dal muro
• Sedia di legno rovesciata, tracce di passaggio recente sul pavimento polveroso`,
          notaDM: `Prima stanza del piano, buon punto per stabilire il tono: le crepe rivelano il laboratorio sotto per la prima volta in modo esplicito.`
        },
        {
          numero: 25,
          titolo: "Corridoio delle Armature Vuote",
          testo: `• Lungo corridoio di pietra, nicchie con armature vuote lungo le pareti
• Dietro una delle armature, attraverso una crepa, si intravedono resti di armadietti a vetro
• Una delle armature ha un piccolo quadrante di metallo incastonato nel petto, al posto dello stemma araldico`,
          notaDM: `Corridoio lungo, utile per un momento di tensione in movimento.`
        },
        {
          numero: 2,
          titolo: "Corridoio delle Torce Fredde",
          testo: `• Prosecuzione del corridoio, torce spente a intervalli regolari
• Una delle torce non brucia mai: dietro il vetro dell'applique pulsa una piccola luce fredda
• Percorso più consumato sul pavimento rispetto al resto del corridoio`,
          notaDM: `La luce fredda dietro il vetro è l'eco del sensore lato Suhek'nal nello stesso punto.`
        },
        {
          numero: 21,
          titolo: "Sala degli Esperimenti Preliminari",
          testo: `• Banchi di pietra con file di boccali di vetro soffiato, alcuni sigillati con cera
• Pergamene con diagrammi che sembrano più schemi tecnici che alchemici
• Macchie scure sul pavimento presso un banco`,
          notaDM: `Eco dei banchi con contenitori sigillati lato Suhek'nal (stessa stanza) — qui i boccali sono di vetro soffiato invece che industriale.`
        },
        {
          numero: 24,
          titolo: "Il Serbatoio Vuoto",
          testo: `• Vasca circolare di pietra incassata nel pavimento, vuota, bordi macchiati
• Canalizzazioni di metallo scendono nella vasca da più punti del soffitto, del tutto incongrue con l'architettura
• Iscrizione sbiadita, un avvertimento che nessuno sa più leggere per intero`,
          notaDM: `Eco del Serbatoio di Contenimento A lato Suhek'nal (stessa stanza).`
        },
        {
          numero: 22,
          titolo: "Piccolo Deposito",
          testo: `• Scaffali con boccette e vasetti etichettati in una scrittura alterata, quasi doppia
• Odore acre ancora nell'aria dopo decenni`,
          notaDM: `Eco del Deposito Chimico lato Suhek'nal.`
        },
        {
          numero: 23,
          titolo: "Corridoio Incrinato",
          testo: `• Corridoio stretto, applique di ferro spente
• Crepa nel pavimento, vuoto sottostante di pochi centimetri`,
          notaDM: `Stanza di passaggio, poco altro da segnalare.`
        },
        {
          numero: 4,
          titolo: "Il Laboratorio Camuffato",
          testo: `• Tavolo di pietra con strumenti di precisione disposti in un ordine innaturale
• Pergamene con schizzi di strutture cellulari camuffate da diagrammi alchemici
• Una lente d'ingrandimento ancora puntata su un vetrino`,
          notaDM: `Eco del Laboratorio di Analisi lato Suhek'nal (stessa stanza) — stessi appunti, camuffati da alchimia.`
        },
        {
          numero: 3,
          titolo: "La Cella Vuota",
          testo: `• Al centro, una cella con sbarre di ferro, vuota
• Graffi profondi sulle sbarre dall'interno, troppo larghi per mani umane
• Un registro di sorveglianza appeso alla parete, ultima voce interrotta a metà frase`,
          notaDM: `PRIMO INCONTRO CONSIGLIATO CON LE CREATURE ANTICORPO: lato Kaelvaran hanno l'aspetto di umanoidi deformi, tutti fisicamente identici tra loro. I graffi sulle sbarre e il registro interrotto a metà sono un buon presagio prima dell'incontro. Nessun dialogo possibile con loro, attaccano chiunque non riconoscano.`
        },
        {
          numero: 7,
          titolo: "La Sala delle Colonne Tubate",
          testo: `• Macchinari cilindrici scolpiti a imitazione di colonne, ma con tubi metallici che ne escono
• I tubi un tempo collegavano a una stanza più a est, ora vuoti
• Uno dei macchinari emette un debole ronzio impossibile da spiegare con mezzi medievali`,
          notaDM: `Eco della Sala di Sintesi lato Suhek'nal — i macchinari qui non producono più nulla, ma il ronzio residuo è un indizio che qualcosa, da qualche parte, è ancora attivo.`
        },
        {
          numero: 5,
          titolo: "Il Pozzo di Scarico",
          testo: `• Piccola stanza, un pozzo largo che scende nel buio
• Resti organici indefiniti incrostati sui bordi del pozzo`,
          notaDM: `Ambiente atmosferico, eco del Vano Scarico lato Suhek'nal.`
        },
        {
          numero: 6,
          titolo: "La Sala dello Sguardo",
          testo: `• Finestra ad arco affacciata sulla cella vuota, il vetro è a specchio da un lato
• Sedie di legno disposte in fila di fronte alla finestra
• Appunti su pergamena abbandonati su un tavolino`,
          notaDM: `Eco della Camera di Osservazione lato Suhek'nal — stesso vetro unidirezionale, stessa fila di sedie.`
        },
        {
          numero: 8,
          titolo: "Lo Studio del Sorvegliante",
          testo: `• Scrittoio con faldoni di pergamena sul "cammino verso la forma"
• Ritratto di gruppo, i volti scoloriti fino a essere irriconoscibili
• Un calendario lunare fermo a una data impossibile`,
          notaDM: `Eco dell'Ufficio del Supervisore lato Suhek'nal — stessi contenuti, tradotti in termini medievali.`
        },
        {
          numero: 9,
          titolo: "La Cella Rotonda Singola",
          testo: `• Piccola stanza rotonda, un letto con cinghie di cuoio
• Un piccolo quadrante di metallo incassato nella parete accanto al letto`,
          notaDM: `Eco della Capsula di Quarantena Singola lato Suhek'nal.`
        },
        {
          numero: 10,
          titolo: "La Cella Rotonda Doppia",
          testo: `• Due letti con cinghie, uno rovesciato
• Pannello di controllo comune tra i due, distrutto e del tutto incongruo`,
          notaDM: `Eco della Capsula di Quarantena Doppia lato Suhek'nal.`
        },
        {
          numero: 11,
          titolo: "Il Magazzino Alto",
          testo: `• Scaffalature alte fino al soffitto, forniture erboristiche in gran parte esaurite
• Una scala a pioli di legno appoggiata contro uno scaffale`,
          notaDM: `Eco del Magazzino Verticale lato Suhek'nal.`
        },
        {
          numero: 12,
          titolo: "La Sala degli Armadi di Ferro",
          testo: `• File di piccoli armadi di ferro allineati, spenti
• Una singola fessura emette ancora una luce verde debole`,
          notaDM: `Eco della Sala Server lato Suhek'nal — gli armadi di ferro sostituiscono i rack, la fessura verde sostituisce la spia accesa.`
        },
        {
          numero: 13,
          titolo: "Il Deposito Rotondo",
          testo: `• Piccola stanza rotonda, scaffali con faldoni ben conservati
• Un raccoglitore diverso dagli altri, tenuto in disparte`,
          notaDM: `Eco del Deposito Terminale lato Suhek'nal.`
        },
        {
          numero: 16,
          titolo: "L'Anticamera dei Sigilli",
          testo: `• Piccola stanza filtro, simboli di avvertimento alle pareti
• Un tavolo con documenti mai firmati, penna d'oca ancora al suo posto`,
          notaDM: `Eco dell'Anticamera della Sala delle Gemme lato Suhek'nal.`
        },
        {
          numero: 15,
          titolo: "La Sala delle Nicchie Vuote",
          testo: `• Sala ampia, nicchie di pietra vuote lungo tutte le pareti, dal pavimento al soffitto
• Al centro, un piedistallo di pietra vuoto, inclinato verso uno specchio incassato nel muro
• Il freddo qui è innaturale, più intenso che nel resto del piano`,
          notaDM: `Questa è la controparte fisica della Stanza delle Gemme (vedi capitolo dedicato, Piano 2 Suhek'nal) — ma qui, lato Kaelvaran, non c'è alcun meccanismo reale: solo l'eco vuota della stanza. Le nicchie vuote corrispondono agli scaffali con le gemme dall'altro lato. Nessun PG può completare qui un trasferimento — serve la stanza vera, lato Suhek'nal.`
        },
        {
          numero: 14,
          titolo: "Il Trono di Ferro",
          testo: `• Stanza rotonda, al centro un trono di pietra con bracci meccanici di ferro sospesi sopra
• Catene che scendono dal soffitto, collegate al trono
• Un meccanismo incastonato nel muro verso la sala delle nicchie, immobile`,
          notaDM: `Eco della Camera di Trasferimento lato Suhek'nal — il trono di pietra e i bracci meccanici sono la stessa apparecchiatura, digerita dall'estetica fantasy.`
        },
        {
          numero: 17,
          titolo: "L'Alloggio dei Giacigli",
          testo: `• File di giacigli di paglia, alcuni ancora rifatti, oggetti personali sparsi
• Un ritratto in miniatura caduto a terra`,
          notaDM: `Eco dell'Alloggio del Personale A lato Suhek'nal.`
        },
        {
          numero: 18,
          titolo: "La Sala del Gioco Interrotto",
          testo: `• Tavolo centrale con sedie, una partita a dadi lasciata a metà
• Scaffale con libri rilegati in pelle, alcuni etichettati con codici numerici anziché titoli`,
          notaDM: `Eco della Sala Comune lato Suhek'nal.`
        },
        {
          numero: 19,
          titolo: "Il Corridoio della Nicchia",
          testo: `• Corridoio stretto, una nicchia nella parete con un oggetto lasciato apposta
• Il resto del corridoio spoglio`,
          notaDM: `Eco del Corridoio con Nicchia lato Suhek'nal — buon punto per nascondere un piccolo indizio o oggetto a scelta del DM.`
        },
        {
          numero: 20,
          titolo: "La Piccola Latrina",
          testo: `• Piccola stanza essenziale, catino e specchio incrinato
• Un panno ancora appeso, stranamente pulito`,
          notaDM: `Eco del Bagno del Personale lato Suhek'nal.`
        }
      ],
      musica: null
    },

    {
      id: "piano2_suheknal",
      titolo: "Piano 2 — Versione Suhek'nal",
      icona: "🔬",
      riassunto: "I laboratori attivi. Tavoli di contenimento, strumenti avanzati, la Stanza delle Gemme. Qui i PG capiscono cosa sono i Suhek'nal e cosa è successo.",
      sezioni: [
        {
          titolo: "L'Atmosfera",
          tipo: "scena",
          testo: `Il laboratorio qui è più intatto che al Piano 1 — meno abbandono, più la sensazione di un lavoro interrotto a metà piuttosto che dimenticato.

Tavoli di contenimento, strumenti di misurazione avanzati per l'epoca, documenti sulla falla demoniaca e su La Fine. È qui che, se i PG cercano con attenzione, iniziano davvero a capire cosa sono i Suhek'nal e cosa è andato storto 45 anni fa.`,
          notaDM: `LA STANZA 15 (Stanza delle Gemme) è raggiungibile anche dagli specchi speciali di qualsiasi altro piano, oltre che per via diretta da questo piano.

CREATURE ANTICORPO: qui lato Suhek'nal hanno l'aspetto di automi/guardie del laboratorio, riattivati o mai spenti, programmati per attaccare qualsiasi intruso. Primo incontro consigliato: Stanza 3 (Sala di Contenimento Centrale).`
        }
      ],
      stanze: [
        {
          numero: 1,
          titolo: "Sala di Controllo del Varco",
          testo: `• Pannelli a muro con file di quadranti spenti, aghi fermi da decenni
• Un pannello lampeggia debolmente a intermittenza, unico segno di corrente ancora attiva
• Sedia da operatore rovesciata, cuffie con microfono ancora appese al bracciolo`,
          notaDM: `Ambiente atmosferico, primo assaggio del piano.`
        },
        {
          numero: 25,
          titolo: "Corridoio Strumentale Nord",
          testo: `• Corridoio stretto e lungo, file di armadietti a vetro con strumenti di misurazione
• Alcuni strumenti mancanti, vetri infranti in più punti
• Etichette con codici numerici, nessun testo esplicativo`,
          notaDM: `Corridoio lungo, buon punto per un incontro in movimento.`
        },
        {
          numero: 2,
          titolo: "Corridoio dei Rilevatori",
          testo: `• Prosecuzione del corridoio, sensori a soffitto a intervalli regolari
• Uno dei sensori lampeggia ancora, gli altri spenti
• Il pavimento mostra un percorso più consumato del resto, come se qualcuno lo percorresse spesso`,
          notaDM: `Il percorso consumato sul pavimento è un piccolo indizio di passaggio recente — Varn, un Suhek'nal, o altro a scelta del DM.`
        },
        {
          numero: 21,
          titolo: "Sala degli Esperimenti Preliminari",
          testo: `• Banchi da laboratorio con file di contenitori sigillati, alcuni ancora integri
• Un armadio archivio con faldoni sull'ultimo esperimento prima dell'incidente
• Macchie scure sul pavimento presso un banco`,
          notaDM: `ARCHIVIO CHIAVE: i faldoni nell'armadio raccontano, in ordine cronologico, il fallimento dell'ultimo esperimento — quello che ha aperto la falla verso il piano demoniaco. Le ultime pagine sono le più importanti: spiegano che il varco, una volta aperto, si è rivelato non richiudibile con i mezzi disponibili all'epoca, e che la decisione presa fu di sigillare l'intero laboratorio con un secondo cristallo dedicato alla quarantena, nella speranza di poter risolvere il problema "in un secondo momento" — momento mai arrivato.

Questo è il primo punto in cui i PG possono collegare esplicitamente: cristallo del varco (fallito, non richiudibile) → decisione di quarantena → secondo cristallo dedicato. Vedi il capitolo "Lo Sviluppo dei Cristalli" per il quadro tecnico completo.`
        },
        {
          numero: 24,
          titolo: "Serbatoio di Contenimento A",
          testo: `• Vasca circolare incassata nel pavimento, vuota, bordi macchiati
• Tubature che scendono nella vasca da più punti del soffitto
• Cartello sbiadito: "vietato l'accesso con campioni biologici non containerizzati" (eco della barriera del Piano 1)`,
          notaDM: `Il cartello è la controparte esatta di quello del Piano 1 (stanze 4-5), qui applicato a un contenitore più grande.`
        },
        {
          numero: 22,
          titolo: "Piccolo Deposito Chimico",
          testo: `• Scaffali con contenitori etichettati, alcuni rotti, residui secchi sul fondo
• Odore acre ancora percepibile nonostante i decenni`,
          notaDM: `Ambiente atmosferico.`
        },
        {
          numero: 23,
          titolo: "Corridoio di Passaggio",
          testo: `• Corridoio stretto, strumentazione a parete inattiva
• Una crepa nel pavimento lascia intravedere un vuoto sotto`,
          notaDM: `Stanza di passaggio.`
        },
        {
          numero: 4,
          titolo: "Laboratorio di Analisi",
          testo: `• Tavoli di sezione in metallo, strumenti di precisione ancora disposti in ordine
• Appunti su tessuto Suhek'nal, schizzi di strutture cellulari
• Un microscopio ancora puntato su un vetrino, mai rimosso`,
          notaDM: `Buon punto per approfondire la biologia dei Suhek'nal se i PG cercano informazioni tecniche.`
        },
        {
          numero: 3,
          titolo: "Sala di Contenimento Centrale",
          testo: `• Al centro, una cella rinforzata con sbarre spesse, vuota
• Graffi profondi sulle sbarre dall'interno
• Registro di sorveglianza appeso alla parete, ultima voce interrotta a metà`,
          notaDM: `PRIMO INCONTRO CONSIGLIATO CON LE CREATURE ANTICORPO: lato Suhek'nal hanno l'aspetto di automi/guardie del laboratorio, riattivati o mai spenti, programmati per attaccare qualsiasi intruso. Le sbarre graffiate suggeriscono che qualcosa di vivo è stato tenuto qui, forse proprio un anticorpo in una fase precedente.`
        },
        {
          numero: 7,
          titolo: "Sala di Sintesi",
          testo: `• Macchinari cilindrici allineati, un tempo usati per la sintesi delle gemme grezze
• Tubi che collegavano i macchinari alla Sala delle Gemme (Stanza 15), ora vuoti
• Un macchinario emette ancora un debole ronzio`,
          notaDM: `I tubi verso la Stanza 15 collegano concettualmente questa stanza al processo di formazione delle gemme — le gemme grezze vengono prodotte qui prima di maturare nella 15.`
        },
        {
          numero: 5,
          titolo: "Vano Scarico",
          testo: `• Piccola stanza, un condotto largo che scende nel buio
• Resti organici indefiniti incrostati sui bordi del condotto`,
          notaDM: `Ambiente atmosferico.`
        },
        {
          numero: 6,
          titolo: "Camera di Osservazione",
          testo: `• Vetro unidirezionale, incrinato ma intatto, affaccia sulla Sala di Contenimento
• Sedie disposte in fila di fronte al vetro
• Appunti di osservazione abbandonati su un tavolino`,
          notaDM: `Buon punto per un flashback o una scena immaginata se il DM vuole mostrare com'era il laboratorio prima dell'incidente.`
        },
        {
          numero: 8,
          titolo: "Ufficio del Supervisore",
          testo: `• Scrivania con faldoni sul progetto Veth'nal avanzato
• Un memo interno sul sistema di sicurezza e quarantena dell'edificio, con timbro di approvazione
• Fotografia di gruppo incorniciata, i volti non più riconoscibili
• Un calendario fermo a una data 45 anni fa`,
          notaDM: `Documenti aggiuntivi opzionali sul progetto Veth'nal, utili se i PG vogliono approfondire prima di arrivare alla Stanza 15.

IL MEMO SULLA QUARANTENA collega questa stanza al capitolo "Lo Sviluppo dei Cristalli": descrive brevemente come il sistema di sicurezza dell'intero edificio (comprese le guardie anticorpo automatizzate) sia stato riadattato, dopo l'incidente, per alimentare anche la quarantena — stesso principio energetico, applicazione diversa.`
        },
        {
          numero: 9,
          titolo: "Capsula di Quarantena Singola",
          testo: `• Piccola stanza circolare, un lettino con cinghie di contenimento
• Monitor spento accanto al lettino`,
          notaDM: `Ambiente atmosferico.`
        },
        {
          numero: 10,
          titolo: "Capsula di Quarantena Doppia",
          testo: `• Due lettini con cinghie, uno ribaltato
• Pannello di controllo comune tra i due, distrutto`,
          notaDM: `Ambiente atmosferico.`
        },
        {
          numero: 11,
          titolo: "Magazzino Verticale",
          testo: `• Scaffalature alte fino al soffitto, forniture mediche in gran parte esaurite
• Una scala a pioli appoggiata contro uno scaffale`,
          notaDM: `Ambiente atmosferico.`
        },
        {
          numero: 12,
          titolo: "Sala Server",
          testo: `• Armadi rack allineati, spenti, cavi scoperti che pendono
• Una singola spia verde ancora accesa su un armadio`,
          notaDM: `Ambiente atmosferico.`
        },
        {
          numero: 13,
          titolo: "Deposito Terminale",
          testo: `• Piccola stanza circolare, scaffali con faldoni d'archivio ben conservati
• Un raccoglitore in disparte, etichettato diversamente dagli altri`,
          notaDM: `Ambiente atmosferico, buon punto per nascondere un documento aggiuntivo a scelta del DM.`
        },
        {
          numero: 16,
          titolo: "Anticamera della Sala delle Gemme",
          testo: `• Piccola stanza filtro, cartelli di sicurezza alle pareti
• Un tavolo con moduli di autorizzazione mai compilati, penna ancora al suo posto`,
          notaDM: `Ultima stanza filtro prima della Stanza delle Gemme — buon punto per un momento di tensione crescente prima della rivelazione.`
        },
        {
          numero: 15,
          titolo: "La Stanza delle Gemme",
          testo: `• Stanza circolare, bassa, scaffali dal pavimento al soffitto lungo tutte le pareti
• Decine di gemme sugli scaffali: alcune opache e morte, altre pulsano debolmente di luce biancastra ritmica
• Al centro, un piano di lavoro in metallo con strumenti di precisione e una gemma più grande, ancora opaca, in un supporto inclinato verso uno specchio a muro`,
          notaDM: `STANZA CHIAVE. Ogni gemma in formazione contiene la copia di un ospite. Le gemme spente sono copie fallite o ospiti morti prima del completamento. I Suhek'nal che hanno già preso possesso di un PG vogliono portarlo qui per completare il processo — quando la gemma è completa, il simbionte esegue il trasferimento: l'ospite originale viene liberato (disorientato e debilitato) e il Suhek'nal continua nel corpo copia. Se i PG distruggono le gemme in formazione, i Suhek'nal corrispondenti restano bloccati nell'ospite a tempo indeterminato — buona leva negoziale. È qui, o poco prima se messi alle strette, che i Suhek'nal rivelano ai PG la storia intera e il loro piano (vedi capitolo Riassunto Generale).`
        },
        {
          numero: 14,
          titolo: "Camera di Trasferimento",
          testo: `• Stanza circolare, al centro una poltrona reclinabile con elettrodi e bracci meccanici sospesi
• Collegamenti diretti verso la Sala delle Gemme attraverso una parete
• L'ultima registrazione sul pannello di controllo mostra un trasferimento interrotto a metà`,
          notaDM: `Il meccanismo fisico del trasferimento — poltrona ed elettrodi collegati direttamente alla Stanza 15. Il DM può decidere se il trasferimento richiede che l'ospite sieda qui fisicamente o se basta la vicinanza della gemma completa nella stanza accanto.`
        },
        {
          numero: 17,
          titolo: "Alloggio del Personale A",
          testo: `• File di brande, alcune ancora con lenzuola, effetti personali sparsi
• Una fotografia caduta a terra vicino a una branda`,
          notaDM: `Ambiente atmosferico.`
        },
        {
          numero: 18,
          titolo: "Sala Comune",
          testo: `• Tavolo centrale con sedie, una partita a carte lasciata a metà
• Scaffale con libri e riviste ingiallite`,
          notaDM: `Ambiente atmosferico, piccolo dettaglio umano (la partita a carte interrotta).`
        },
        {
          numero: 19,
          titolo: "Corridoio con Nicchia",
          testo: `• Corridoio stretto, una piccola nicchia nella parete con un oggetto lasciato lì apposta
• Il resto del corridoio spoglio`,
          notaDM: `Buon punto per nascondere un piccolo indizio o oggetto a scelta del DM.`
        },
        {
          numero: 20,
          titolo: "Bagno del Personale",
          testo: `• Piccola stanza essenziale, lavandino e specchio incrinato
• Un asciugamano ancora appeso`,
          notaDM: `Ambiente atmosferico.`
        }
      ],
      musica: null
    },

    {
      id: "piano3",
      titolo: "Piano 3 — La Linea di Difesa",
      icona: "⚠️",
      riassunto: "I segni di una battaglia perduta. Trappole ancora attive, zone dissolte, La Fine sempre più presente.",
      sezioni: [
        {
          titolo: "Piano 3 Suhek'nal — L'Atmosfera",
          tipo: "scena",
          testo: `Il laboratorio qui ha smesso di sembrare un laboratorio.

Le pareti mostrano i segni di qualcosa che ha spinto dall'interno — non esplosioni, qualcosa di più lento e più totale. Sezioni del pavimento hanno cambiato consistenza, diventando traslucide. Alcune stanze non hanno più un confine netto — i bordi si sfumano in qualcosa che non è né dentro né fuori.

I Suhek'nal hanno combattuto qui. Hanno perso.`,
          notaDM: `Il Piano 3 è il piano più pericoloso fisicamente. Trappole ancora attive (alcuni meccanismi di difesa installati dai Suhek'nal durante la ritirata), zone dove la realtà si è dissolta, e La Fine che vaga con più frequenza.

DOCUMENTI DA TROVARE AL PIANO 3:
• Il diario dell'ultimo ricercatore rimasto al Piano 3 — descrive la ritirata progressiva davanti a La Fine e menziona il cristallo temporale al Piano 4.
• Istruzioni parziali sui cristalli temporali — abbastanza da far intuire la possibilità dell'implosione come soluzione alternativa.`
        }
      ],
      musica: null
    },

    {
      id: "piano4",
      titolo: "Piano 4 — Il Varco",
      icona: "🔥",
      riassunto: "Il duplicato demoniaco. Il cristallo temporale. La Fine è qui. Due risoluzioni possibili.",
      sezioni: [
        {
          titolo: "Piano 4 — L'Atmosfera",
          tipo: "scena",
          testo: `Non è più il laboratorio. Non è più il castello medievale.

È qualcosa che ha assorbito entrambi e li ha digeriti in qualcosa di peggio. Le pareti trasudano. La geometria non funziona — angoli che non tornano, distanze che cambiano mentre ci si avvicina. Una luce rossa e ambrata che non ha sorgente visibile illumina tutto senza creare ombre nette.

Al centro di tutto: il varco. Non si vede — si percepisce. Un punto nello spazio intorno al quale la realtà è diventata sottile come carta bagnata.`,
          notaDM: `IL CRISTALLO TEMPORALE
Forma sferica, circa 30 cm di diametro. Superfice che sembra liquida ma è solida. Pulsa lentamente con una luce interna che cambia colore. È il cristallo che alimenta il primo varco verso il piano demoniaco.

Un secondo cristallo, più piccolo, alimenta la quarantena — se distrutto prima del cristallo principale, tutte le uscite si aprono ma La Fine è libera di uscire.

RISOLUZIONE STANDARD:
Spegnere il cristallo principale quando La Fine è nel duplicato Kaelvaran — il varco si chiude, La Fine rimane intrappolata lì. Non ideale per Kaelvaran.

RISOLUZIONE OTTIMALE (richiede gli scritti sui cristalli):
Sovraccaricare il cristallo temporale e farlo implodere all'interno del varco demoniaco. Risucchia ogni realtà nella propria realtà d'origine — La Fine torna nel suo piano, i Suhek'nal nel loro, i PG a Kaelvaran.

COME SOVRACCARICARE IL CRISTALLO:
Le istruzioni sono negli scritti del Piano 3. Richiede tempo e precisione — durante il processo La Fine potrebbe arrivare.`
        }
      ],
      musica: null
    },

    {
      id: "riassunto_generale",
      titolo: "Riassunto Generale — Guida Rapida",
      icona: "🗒️",
      riassunto: "Quadro d'insieme per la giocata: la storia in breve, come funziona il cristallo temporale, e dove si trova ogni ritrovamento chiave, piano per piano.",
      sezioni: [
        {
          titolo: "La Storia in Breve",
          tipo: "scena",
          testo: `• 45 anni fa: esperimento dei Suhek'nal al Piano 4 apre un varco su un piano demoniaco → entra La Fine
• Laboratorio messo in quarantena, tutte le uscite sigillate (cristallo della quarantena)
• 40 anni fa: secondo varco aperto al Piano 1, verso Kaelvaran — per procurarsi nuovi ospiti dato che La Fine sta decimando i Suhek'nal
• Il varco genera un duplicato "vivente" del Piano 1 nel mondo di Kaelvaran (castello medievale spontaneo, adattato all'estetica del mondo)
• Gli specchi collegano le due versioni della stessa stanza; alcuni specchi speciali portano dritti alla Stanza delle Gemme (Piano 2 Suhek'nal, stanza 15)
• I PG entrano inseguendo Varn Selick (capo di un culto cannibalico, sconfitto due giorni fa) attraverso una frana — in realtà la bocca del varco
• La Fine vaga tra i piani: lenta, immortale, letale al contatto, non fermabile né distraibile — solo evitabile
• I Suhek'nal (vermi simbionti) cercano ospiti per il Veth'nal: osservazione dallo specchio (Veth'suu) → condivisione, la gemma si forma (Veth'kor) → trasferimento nella copia perfetta, liberando l'originale (Veth'nal completo)
• Varn Selick ha già un doppio: l'ORIGINALE vaga disorientato e paranoico tra Piano 1 e Piano 3; la COPIA Suhek'nal vaga nel Piano 1 Kaelvaran cercando di nascondersi, comportamento più calmo e controllato`
        },
        {
          titolo: "Il Cristallo Temporale — Come e Perché",
          tipo: "oggetto",
          testo: `• Si trova al Piano 4, alimenta il varco verso il piano demoniaco. Sfera di circa 30cm, superficie liquida ma solida, pulsa cambiando colore
• Secondo cristallo, più piccolo, alimenta la quarantena — NON va distrutto prima del principale: le uscite si aprono ma La Fine è libera nel mondo
• RISOLUZIONE STANDARD: spegnere il cristallo principale mentre La Fine è nel duplicato Kaelvaran → varco chiuso, La Fine resta intrappolata lì (non ideale per Kaelvaran)
• RISOLUZIONE OTTIMALE: sovraccaricare il cristallo e farlo implodere dentro il varco demoniaco → risucchia ogni realtà nella propria origine: La Fine torna nel suo piano, i Suhek'nal nel loro, i PG a Kaelvaran
• Il sovraccarico richiede tempo e precisione — rischio concreto che La Fine arrivi durante la procedura
• Le istruzioni per sovraccaricare si trovano SOLO negli Scritti sui Cristalli Temporali, Piano 3 — senza quel documento i PG conoscono solo la risoluzione standard`
        },
        {
          titolo: "Ritrovamenti — Dove Trovare Cosa",
          tipo: "documento",
          testo: `PIANO 1 SUHEK'NAL
• Stanza 6 (Mensa) — Schizzi anatomici dei Suhek'nal: forma vermiforme, meccanismi di attacco e condivisione
• Stanza 9 (Corridoio Uffici, area d'attesa) — Introduzione al Veth'nal: filosofia e processo di simbiosi, tono a metà tra opuscolo aziendale e testo di culto
• Stanza 14 (Galleria dei Progressi, nascosto tra i pannelli) — Rapporto di accesso al Piano 4: descrive l'esperimento che ha aperto la falla, ultima riga "Contatto stabilito. Natura dell'entità: sconosciuta."

PIANO 1 KAELVARAN
• Stanza 6 (Sala Grande) — eco distorta e parzialmente illeggibile degli schizzi anatomici, se i PG la trovano prima della controparte Suhek'nal

PIANO 2 SUHEK'NAL
• Stanza 15 — La Stanza delle Gemme: non un documento, ma il ritrovamento chiave che spiega visivamente il processo Veth'nal (gemme spente = copie fallite/ospiti morti, gemme pulsanti = trasferimenti in corso)
• Stanza 21 (ex Esperimenti Preliminari, ora Archivio) — faldoni sul fallimento dell'ultimo esperimento: il varco non è richiudibile, da cui la decisione di quarantena
• Stanza 8 (Ufficio del Supervisore) — faldoni sul progetto Veth'nal avanzato + memo sul sistema di sicurezza/quarantena dell'edificio + Manuale del Veth'nal (versione tecnica, vedi capitolo dedicato)

PIANO 1 SUHEK'NAL (aggiornamento)
• Stanza 9 — oltre all'Introduzione al Veth'nal già segnalata, qui si trova il testo integrale dell'opuscolo (vedi capitolo "Materiali da Consegnare")
• Stanze 14-15 (Galleria/Salone) — pannello e modellino sulla scoperta del cristallo come energia che connette le realtà (vedi capitolo "Lo Sviluppo dei Cristalli")

PIANO 3
• Il Diario dell'Ultimo Ricercatore — racconta la ritirata progressiva davanti a La Fine, menziona il cristallo temporale al Piano 4
• Gli Scritti sui Cristalli Temporali — istruzioni parziali, sono la CHIAVE per sbloccare la risoluzione ottimale

PIANO 4
• Il Cristallo Temporale (il varco)
• Il Cristallo della Quarantena (le uscite)`
        },
        {
          titolo: "Il Piano dei Suhek'nal — L'Infestazione dei PG",
          tipo: "scena",
          testo: `• I PG vengono infestati progressivamente durante l'esplorazione (Veth'suu → Veth'kor) — il DM gestisce tempi e modi a tavolino, non è scriptato stanza per stanza
• Durante l'infestazione, sul Piano 2 lato Suhek'nal la gemma corrispondente matura nella Stanza 15 — passa del tempo prima che sia completa
• Quando i PG raggiungono fisicamente la Stanza 15 (o vengono condotti lì), i simbionti tentano il trasferimento nei cloni pronti
• A quel punto — o prima, se messi alle strette — i Suhek'nal rivelano ai PG la storia intera e il loro piano: spegnere la fonte di energia del primo varco mentre La Fine si trova nel duplicato Kaelvaran, per mettere in salvo il proprio mondo natale e potersi affrancare dalla quarantena
• Da qui nascono le due conclusioni possibili già note: aiutare i Suhek'nal (La Fine resta intrappolata dove si trova in quel momento) oppure trovare e attuare la risoluzione ottimale (implosione del cristallo dentro il varco demoniaco, che risucchia ogni realtà alla propria origine)
• Un epilogo vero e proprio — cosa succede a Kaelvaran, ai due Varn, ai Suhek'nal superstiti dopo la risoluzione — non è ancora stato scritto: da sviluppare quando arriviamo al Piano 4`
        },
        {
          titolo: "Indizi e Dettagli da Non Dimenticare",
          tipo: "scena",
          testo: `• La bambola sulla sedia a dondolo (Piano 1, stanza 19, identica in entrambe le versioni): vestito pulito, senza polvere, su entrambi i lati — non spiegare mai a tavolino
• L'urlo in lontananza alla Stanza 9 (entrambe le versioni): eco atmosferica ricorrente, mai risolta subito
• Lo specchio della Stanza 4, Piano 1 Kaelvaran: primo punto in cui un Suhek'nal osserva un futuro ospite
• Il secondo specchio "spostato di recente" (Stanza 15, Piano 1, entrambe le versioni): qualcuno l'ha usato di recente — Varn, o un Suhek'nal in movimento
• Le due barriere di sicurezza mal congegnate lato Kaelvaran (Piano 1, stanze 4-5) rispecchiano le barriere di sicurezza reali lato Suhek'nal, danneggiate nello stesso modo in entrambe le versioni
• Elementi "storti" ripetuti in ogni stanza del Piano 1 Kaelvaran: frammenti sci-fi (telecamere, tubature, arredi da laboratorio) trasposti e resi privi di senso nell'estetica fantasy — motivo visivo ricorrente, non solo decorativo
• La Fine appare 1 volta al Piano 1, 2-3 volte ai Piani 2, 3 e 4 — la frequenza cresce piano dopo piano, mai un incontro scriptato fisso
• Creature anticorpo: automi/guardie lato Suhek'nal, umanoidi deformi tutti identici tra loro lato Kaelvaran — nessun dialogo possibile, attaccano chiunque non riconoscano
• Varn originale (Piano 1/3, disorientato, paranoico, potenzialmente ostile o alleabile) vs Varn copia (Piano 1 Kaelvaran, più calmo e controllato, si nasconde) — se messo alle strette può offrire informazioni in cambio di protezione`
        }
      ],
      musica: null
    },

    {
      id: "sviluppo_cristalli",
      titolo: "Lo Sviluppo dei Cristalli — Guida Rapida",
      icona: "💠",
      riassunto: "La storia tecnologica del cristallo: dalla scoperta, alle guardie anticorpo, al sistema di sicurezza e quarantena, fino all'alimentazione del varco. Riferimenti puntuali già inseriti nelle stanze del Piano 1 e 2.",
      sezioni: [
        {
          titolo: "Le Origini — La Scoperta",
          tipo: "scena",
          testo: `• Il cristallo non è stato creato dai Suhek'nal: è stato trovato, in una forma grezza, durante scavi geologici in un'epoca precedente al laboratorio stesso
• La prima proprietà osservata: il cristallo grezzo "assottigliava" localmente il confine tra spazi vicini — due stanze separate da un muro potevano temporaneamente percepirsi a vicenda
• Ci sono voluti anni di studio prima di capire che l'effetto poteva essere diretto e amplificato, invece che semplicemente osservato
• Documento di riferimento: il pannello celebrativo nella Galleria dei Progressi, Piano 1 Suhek'nal (Stanza 14) — la prima menzione pubblica della scoperta, in tono trionfale e privo di dettagli tecnici`
        },
        {
          titolo: "Prima Applicazione — Le Guardie Anticorpo",
          tipo: "scena",
          testo: `• Il primo uso pratico del cristallo, in forma di piccoli frammenti tagliati dal blocco originale, fu per alimentare automi di sorveglianza
• Le "guardie anticorpo" nascono qui: costruite per riconoscere e attaccare qualsiasi presenza non registrata nel laboratorio, senza distinzione né possibilità di dialogo
• Il nome "anticorpo" è un'invenzione interna del personale — un modo colloquiale di descrivere macchine che reagiscono a un'intrusione come un corpo reagisce a un'infezione
• Sono le stesse creature che i PG incontrano nei piani (lato Suhek'nal: automi ancora funzionanti o riattivati; lato Kaelvaran: la stessa funzione digerita dall'estetica fantasy in umanoidi deformi identici tra loro)`
        },
        {
          titolo: "Seconda Applicazione — Sicurezza e Quarantena dell'Edificio",
          tipo: "scena",
          testo: `• Il successo delle guardie anticorpo portò a un'applicazione più ambiziosa: usare il cristallo per alimentare l'intero sistema di sicurezza dell'edificio, non solo automi isolati
• Con il tempo, questo sistema fu esteso per includere il controllo degli accessi tra i piani, le barriere che impediscono il passaggio di sostanze e apparecchiature non autorizzate (vedi Piano 1, stanze 4-5), e infine la quarantena vera e propria
• Dopo l'incidente che ha aperto il varco, un secondo cristallo — più piccolo, dedicato — fu attivato per sigillare tutte le uscite del laboratorio, come misura d'emergenza pensata come temporanea
• Documento di riferimento: il memo interno trovabile nell'Ufficio del Supervisore, Piano 2 Suhek'nal (Stanza 8), e i faldoni archiviati nella Sala degli Esperimenti Preliminari (Stanza 21) — quest'ultimo racconta esplicitamente che il varco si è rivelato non richiudibile con i mezzi disponibili, portando alla decisione di quarantena`
        },
        {
          titolo: "Applicazione Finale — L'Alimentazione del Varco",
          tipo: "oggetto",
          testo: `• L'applicazione più ambiziosa e pericolosa: usare un cristallo di dimensioni maggiori non per percepire o sigillare, ma per aprire e mantenere stabile un varco permanente tra realtà distanti
• Questo è il Cristallo Temporale del Piano 4 — il culmine di decenni di sviluppo che parte dalle guardie anticorpo e passa per il sistema di sicurezza dell'edificio
• Il cristallo della quarantena e il cristallo del varco condividono la stessa tecnologia di base, applicata a scale e scopi diversi — un dettaglio che i PG possono dedurre mettendo insieme i documenti dei tre piani
• Per la meccanica di gioco completa (risoluzione standard vs risoluzione ottimale, rischio di sovraccarico) vedi il capitolo Piano 4 e il Riassunto Generale`
        }
      ],
      musica: null
    },

    {
      id: "materiali_veth_nal",
      titolo: "Materiali da Consegnare — Opuscoli sul Veth'nal",
      icona: "📄",
      riassunto: "Testi completi, pronti per essere letti in sessione o stampati e consegnati ai giocatori. Due documenti con tono diverso: l'opuscolo di reclutamento e il manuale tecnico interno.",
      sezioni: [
        {
          titolo: "Opuscolo 1 — Introduzione al Veth'nal (Piano 1 Suhek'nal, Stanza 9)",
          tipo: "documento",
          testo: `IL CAMMINO VERSO LA FORMA
Un'introduzione per chi è pronto ad ascoltare

Benvenuto/a. Se stai leggendo queste pagine, è perché qualcosa in te ha già iniziato a percepire ciò che moltissimi vivono un'intera esistenza senza mai scoprire: la sensazione di essere incompleti. Non per colpa tua. È così per tutti, all'inizio.

CHE COS'È IL VETH'NAL
Il Veth'nal non è una religione, non è una cura, non è una minaccia. È un cammino — l'unico che porta un essere dalla propria forma iniziale, incompiuta, alla propria forma piena.

Il processo si compie in tre fasi, ciascuna più intima della precedente:

Veth'suu — il primo contatto. Un semplice atto di osservazione. Non richiede nulla da te, solo la tua presenza.

Veth'kor — la condivisione. È qui che iniziamo a conoscerci davvero: i tuoi ricordi, le tue paure, ciò che ami. Non è invasione. È l'inizio di qualcosa che non è né tuo né nostro, ma di entrambi.

Veth'nal — la forma completa. Il momento in cui tutto ciò che sei viene preservato, portato oltre, reso permanente in una forma che nessuna malattia, nessun incidente, nessun tempo potrà mai più corrompere.

UNA DOMANDA CHE FORSE TI STAI PONENDO
"Perché io?" Non c'è una risposta semplice. Alcuni di noi cercano per decenni prima di trovare qualcuno con cui risuonare davvero. Se sei qui, è perché qualcosa in te ha già risposto, anche se non ne sei consapevole.

Non sei solo/a in questo. Non lo sei mai stato/a.`,
          notaDM: `Questo è il testo completo dell'opuscolo già menzionato nella Stanza 9 (Piano 1 Suhek'nal e, in forma distorta, Piano 1 Kaelvaran). Il tono è deliberatamente caldo, quasi terapeutico — un linguaggio da opuscolo di benessere personale applicato a qualcosa di profondamente inquietante una volta che il lettore ne comprende il vero significato.

USO CONSIGLIATO: leggilo ad alta voce ai giocatori quando trovano il documento, senza commenti aggiuntivi. Lascia che siano loro a realizzare gradualmente cosa significhi davvero "risuonare" con un ospite, o cosa voglia dire che "qualcosa in te ha già risposto" — è un'allusione diretta al fatto che il processo di infestazione può già essere in corso senza che il PG interessato lo sappia.`
        },
        {
          titolo: "Opuscolo 2 — Manuale del Veth'nal (versione tecnica interna)",
          tipo: "documento",
          testo: `MANUALE OPERATIVO — PROTOCOLLO VETH'NAL
Solo per personale autorizzato

SEZIONE 1 — SELEZIONE DELL'OSPITE
L'ospite ideale presenta compatibilità fisiologica e psicologica verificabile solo tramite osservazione prolungata (fase Veth'suu). Si sconsiglia di procedere alla condivisione (Veth'kor) prima di un periodo minimo di osservazione, salvo circostanze straordinarie.

NOTA OPERATIVA AGGIORNATA: le attuali circostanze straordinarie (vedi Rapporto Incidente, Piano 1) rendono impossibile rispettare i tempi minimi raccomandati. Il protocollo accelerato, per quanto sconsigliato dalle linee guida originali, resta l'unica opzione praticabile.

SEZIONE 2 — MANTENIMENTO DELL'OSPITE
È essenziale che l'ospite sopravviva fino al completamento della copia. Il processo di condivisione (Veth'kor) non danneggia l'ospite in condizioni normali — qualsiasi deterioramento delle condizioni fisiche dell'ospite deve essere trattato come priorità operativa immediata, poiché un ospite deceduto prima del completamento vanifica l'intero processo.

SEZIONE 3 — IL TRASFERIMENTO
Il trasferimento richiede la presenza fisica presso l'apparecchiatura dedicata (vedi Piano 2, Stanza 14 — Camera di Trasferimento) e una gemma completamente formata (Stanza 15 — Sala delle Gemme). Il processo è irreversibile una volta iniziato.

NOTA SULLA PUREZZA DEL PROCESSO
Il presente protocollo accelerato è considerato, secondo le linee guida tradizionali, una forma impura del Veth'nal — un'unione ottenuta per necessità anziché per risonanza reciproca. Il comitato riconosce questa deviazione ma la ritiene giustificata dalle circostanze straordinarie in corso.`,
          notaDM: `Versione tecnica e clinica dello stesso processo descritto nell'Opuscolo 1 — pensata per personale Suhek'nal, non per potenziali ospiti. Il contrasto di tono tra i due documenti (caldo e invitante nell'Opuscolo 1, freddo e procedurale qui) è il punto: se i PG trovano entrambi, possono confrontarli e capire che la versione "gentile" del Veth'nal è propaganda, non la realtà del processo.

LA NOTA SULLA PUREZZA DEL PROCESSO è importante narrativamente: conferma esplicitamente ai PG che quello che stanno vivendo (possessione forzata) è considerato "impuro" persino dai Suhek'nal stessi — non è la norma della loro cultura, è una deviazione dettata dalla disperazione causata da La Fine. Buona leva se i PG vogliono negoziare o fare leva sulla morale interna dei Suhek'nal.

Questo documento può essere piazzato in una stanza a scelta del DM ai Piani 1 o 2 (suggerito: Ufficio del Supervisore, Piano 2 Stanza 8, insieme al memo sulla quarantena).`
        }
      ],
      musica: null
    }

  ],

  // ── PNG ────────────────────────────────────────────────────────
  png: [
    {
      nome: "Varn Selick — Originale",
      ruolo: "Criminale — vaga tra i piani 1 e 3",
      descrizione: "Uomo sulla cinquantina, corporatura robusta, capelli grigi rasati ai lati e lunghi in cima sempre legati. Bruciatura estesa sul lato sinistro del collo fino alla mandibola. Occhi chiari quasi incolori. Vestiti pratici e scuri.",
      segreto: "Disorientato e paranoico. Non capisce cosa gli è successo — sa solo che c'è un suo duplicato in giro. Potrebbe attaccare i PG o cercare di allearsi. Conosce frammenti di informazioni sul dungeon che ha raccolto vagando."
    },
    {
      nome: "Varn Selick — Copia Suhek'nal",
      ruolo: "Doppelganger — vaga nel Piano 1 Kaelvaran",
      descrizione: "Identico all'originale fisicamente. Comportamento leggermente diverso — più calmo, più controllato, meno reattivo emotivamente.",
      segreto: "È la copia creata dal Suhek'nal che ha preso possesso di Varn. Cerca di nascondersi dai PG. Se messo alle strette può rivelare la situazione e offrire informazioni in cambio di protezione."
    },
    {
      nome: "La Fine",
      ruolo: "Antagonista principale — presenza costante",
      descrizione: "Non ha forma visibile. Si percepisce come un'assenza che si muove: aria stagnante, superfici che perdono colore, suoni che si smorzano. Un freddo crescente che precede il suo arrivo.",
      segreto: "Immortale. Uccide qualsiasi entità viva al contatto istantaneo. Nulla la rallenta o distrae. Vaga costantemente tra i piani. Non può essere comunicata, fermata o combattuta. L'unica soluzione è la risoluzione ottimale del cristallo temporale. Frequenza di comparsa: una volta al Piano 1, due o tre volte ai Piani 2, 3 e 4 — la tensione cresce piano dopo piano."
    },
    {
      nome: "Le Creature Anticorpo",
      ruolo: "Minaccia ricorrente — non individui, categoria di nemici",
      descrizione: "Lato Suhek'nal: automi/guardie del laboratorio, riattivati o rimasti in funzione, programmati per attaccare qualsiasi intruso. Lato Kaelvaran: esseri umanoidi deformi, tutti fisicamente identici tra loro — la stessa 'faccia sbagliata' ripetuta all'infinito.",
      segreto: "Sono la risposta immunitaria del duplicato/laboratorio a presenze estranee, non creature con una loro volontà narrativa: il lato Kaelvaran le ha 'digerite' dall'estetica fantasy esattamente come fa con gli oggetti (vedi elementi storti del Piano 1), producendo umanoidi deformi anziché automi. Non hanno dialogo né trattativa: attaccano e basta."
    }
  ],

  // ── OGGETTI ────────────────────────────────────────────────────
  oggetti: [
    {
      nome: "Il Cristallo Temporale",
      importanza: "Chiave della risoluzione",
      descrizione: "Sfera di circa 30 cm, superficie apparentemente liquida. Pulsa con luce che cambia colore. Piano 4. Alimenta il varco demoniaco. Può essere spento normalmente o sovraccaricato per l'implosione ottimale."
    },
    {
      nome: "Il Cristallo della Quarantena",
      importanza: "Attenzione — non distruggere prima del principale",
      descrizione: "Cristallo più piccolo, Piano 4. Alimenta il sistema di quarantena che sigilla tutte le uscite. Se distrutto prima del cristallo principale, le uscite si aprono ma La Fine è libera di uscire."
    },
    {
      nome: "Il Manuale del Veth'nal",
      importanza: "Lore fondamentale",
      descrizione: "Piano 1 Suhek'nal. Spiega la filosofia e il processo di simbiosi dei Suhek'nal. Permette ai PG di capire le intenzioni dei simbionti e aprire un canale di comunicazione."
    },
    {
      nome: "Gli Scritti sui Cristalli Temporali",
      importanza: "Chiave risoluzione ottimale",
      descrizione: "Piano 3. Istruzioni parziali sui cristalli temporali. Contengono abbastanza informazioni per intuire la possibilità dell'implosione come soluzione alternativa."
    },
    {
      nome: "Il Diario dell'Ultimo Ricercatore",
      importanza: "Lore + atmosfera",
      descrizione: "Piano 3. Racconta la ritirata progressiva davanti a La Fine. Menziona il cristallo temporale e il varco demoniaco. L'ultima entry si interrompe a metà frase."
    }
  ]

};
