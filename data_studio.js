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
          testo: `Oltre la frana, lo spazio si apre in una sala quadrata di pietra grigia, circa cinque metri per lato. Ciò che dovrebbe essere una finestra su una parete (l'arco è ancora visibile, con tanto di cornice scolpita a motivi floreali) è invece un muro di terra e roccia compattata, come se il giardino che avrebbe dovuto affacciarsi qui si fosse riversato dentro invece che restare fuori. Radici sottili, morte da tempo, pendono immobili dalla terra pressata. Ma sopra la terra, incastonata nell'arco come se ci fosse sempre stata, una lastra di vetro perfettamente liscia e trasparente — troppo regolare, troppo pulita per essere stata soffiata da un vetraio di questo castello. Non guarda su nulla. Riflette solo la terra che ha di fronte.

Sopra la porta a sud, scolpita nella pietra dell'architrave, una piccola gargolla accovacciata regge tra le zampe anteriori qualcosa che dovrebbe essere uno scrigno, o forse un occhio chiuso — la forma non si decide mai del tutto. Le sue orbite vuote sono rivolte verso il centro della stanza, immobili.

Una singola torcia spenta in un'applique di ferro battuto. Il pavimento in mattoni regolari è interrotto da una crepa che corre da un angolo all'altro, come se l'intera stanza fosse stata posata su qualcosa che non l'ha mai sostenuta davvero.

In un angolo, quello che resta della prima guardia del corpo di Varn. Non è un cadavere nel senso consueto, è un corpo ribaltato. All'esterno, ciò che dovrebbe stare dentro, organi disposti come se qualcuno li avesse posati con cura sopra la pelle. Sotto, le ossa. Più in profondità ancora, i muscoli. E al centro di tutto, raggomitolata come un seme, in un piccolo groviglio interno che non dovrebbe poter esistere in quello spazio, la pelle, con addosso ancora i vestiti.

Non c'è sangue. Non c'è odore. È come se il corpo fosse stato capovolto da qualcosa che non conosce la differenza tra dentro e fuori.

Un varco a sud conduce verso una sala più lunga.`,
          notaDM: `Primo segno de La Fine, va giocato con calma, non un jump scare ma una scoperta che si carica lentamente man mano che i giocatori realizzano cosa stanno guardando. Nessuna prova imposta a tavolino, lascia che sia la descrizione a fare il lavoro.

Su richiesta di un PG che esamina da vicino: la pelle al centro del groviglio è ancora intatta, senza tagli né lacerazioni, non è stata aperta. È come se l'intero corpo fosse stato srotolato e poi riavvolto al contrario, strato per strato, senza mai romperne la continuità.

La finestra crollata è il primo di diversi punti simili nel piano, vale la pena ripeterlo in altre stanze come motivo ricorrente. Nessuna trappola qui, è la stanza di decompressione, serve a stabilire il tono prima che inizi l'esplorazione vera.

LA LASTRA DI VETRO e LA GARGOLLA sono i primi due elementi "storti" del piano — frammenti del laboratorio Suhek'nal trasposti in questo castello e resi privi di senso. Il vetro qui è l'eco della vetrata a tutta altezza che, lato Suhek'nal, occupa la stessa parete della Stanza 1 (lì affacciata sulla stessa terra compattata, ma concettualmente rovesciata: lì il vetro era progettato per essere trasparente, qui è un elemento del tutto estraneo all'architettura del castello). La gargolla riproduce, in forma "digerita" dall'estetica fantasy, la telecamera a obiettivo rettangolare che lato Suhek'nal sorveglia lo stesso punto. Nessun effetto meccanico: sono solo la prima crepa visibile nella finzione del duplicato. Ripeti questo tipo di dettaglio (oggetti sci-fi trasposti e resi inutili) in ogni stanza del piano, con intensità e frequenza a discrezione del DM.`
        },
        {
          numero: 2,
          titolo: "Il Corridoio dei Frammenti",
          testo: `Una sala lunga e stretta, quasi un corridoio dilatato più che una stanza vera, circa dieci metri di lunghezza per tre di larghezza. Il pavimento è cosparso di detriti, frammenti di pietra caduti dal soffitto, schegge di legno che un tempo dovevano essere una trave o un mobile, piccoli oggetti indistinguibili sepolti nella polvere. Camminarci dentro produce un rumore secco e continuo sotto gli stivali.

Le pareti mostrano tre finestre crollate in fila, ognuna con la stessa cornice scolpita vista nella sala d'arrivo. La terra che le riempie non è uniforme, in un punto sembra più fresca, come se qualcosa si fosse mosso lì di recente, smuovendo lo strato superficiale.

Lungo tutto il soffitto corre una fila di archetti decorativi scolpiti nella pietra, a intervalli regolari — un motivo architettonico che nessun mastro scalpellino avrebbe mai potuto realizzare in legno o pietra con quella precisione: le curve sono troppo sinuose, troppo continue, prive di ogni imperfezione dell'utensile a mano. Ogni due o tre archetti, una piccola gargolla identica a quella della sala d'arrivo osserva il corridoio con le sue orbite vuote.

A nord, una porta chiusa riporta verso la sala d'arrivo. A ovest, un'altra porta si apre su una stanza con al centro una struttura circolare. A sud, oltre un breve tratto di corridoio, una porta conduce verso una sala allungata. A sud est, una breve scalinata scende verso una sala più ampia in lontananza.`,
          notaDM: `Il punto di terra smossa nella terza finestra crollata è un piccolo indizio ambientale, qualcosa o qualcuno è passato di lì o si è nascosto lì di recente. Puoi usarlo per Varn Selick copia, che potrebbe aver attraversato questa stanza cercando un punto più sicuro, oppure lasciarlo come falso indizio, giusto per costruire tensione.

I detriti sparsi rendono la stanza rumorosa da attraversare in silenzio, eventuale prova di furtività con svantaggio se serve un momento di tensione con creature nei paraggi. Nessuna trappola strutturale qui, ma è un buon punto per un primo incontro con una creatura anticorpo del duplicato, vista la lunghezza della sala e le molteplici vie di fuga da gestire narrativamente.

Gli archetti troppo sinuosi ripetono, in scala architettonica, la fila di telecamere che lato Suhek'nal percorre lo stesso corridoio a intervalli regolari. Un PG con background pertinente (artigiano, scalpellino, architetto) può notare che nessuna tecnica medievale conosciuta produce quella regolarità — un piccolo indizio, se il DM vuole seminare dubbi prima ancora dello specchio della Stanza 4.`
        },
        {
          numero: 3,
          titolo: "La Fontana",
          testo: `Una sala quadrata di circa sei metri per lato. Al centro, una fontana in pietra, asciutta da tempo, con una vasca poco profonda e una scultura al centro che dovrebbe raffigurare una figura femminile versante acqua da un'anfora. La figura è leggermente sbagliata, come tutto qui, le proporzioni allungate su un lato, il volto girato in una direzione che il resto del corpo non segue. Macchie scure di umidità corrono lungo il bordo della vasca, ma non c'è traccia di acqua vera, solo un residuo secco e biancastro sul fondo.

Ai piedi della fontana, incassata nella pietra della base, una targa metallica ossidata reca un'iscrizione dedicatoria — "al fondatore, per la sua visione, che ci ha condotti oltre il confine conosciuto" — seguita da un nome. Il nome però non è scritto in nessun alfabeto che i PG possano riconoscere come appartenente a Kaelvaran, né sembra un nome che una qualunque cultura del mondo userebbe: sillabe che si ripetono senza vocali riconoscibili. La data sotto il nome, se qualcuno prova a interpretarla secondo il calendario locale, non corrisponde a nessun anno sensato — troppo lontana, o semplicemente sbagliata in un modo che non si riesce a definire.

A est, una porta di legno rinforzato riporta verso il corridoio pieno di detriti. A sud, un'apertura ad arco scende verso una sala più grande.`,
          notaDM: `La scultura distorta è un buon punto per un piccolo momento di inquietudine gratuita, niente di meccanico, solo un dettaglio che i giocatori più attenti noteranno. Se qualcuno esamina il residuo bianco sul fondo della vasca, è semplicemente calcare, nessun segreto nascosto qui.

La targa è la controparte distorta di quella, identica nel testo di dedica, che si trova nella stessa stanza lato Suhek'nal (dedicata al fondatore reale del centro ricerche). Qui è stata "digerita" e ricostruita male dal duplicato: nome illeggibile, data impossibile. Nessun enigma da risolvere — è un dettaglio che dovrebbe restare senza spiegazione fino a molto più avanti nella campagna, se mai verrà spiegato del tutto.`
        },
        {
          numero: 4,
          titolo: "La Sala dello Specchio",
          testo: `Una stanza rettangolare, forse cinque metri per sette, con il soffitto leggermente più alto delle altre. Contro una parete, tra due nicchie vuote che un tempo dovevano contenere statue, si erge uno specchio a figura intera, incorniciato in metallo scurito, incrinato in un angolo ma ancora perfettamente funzionante. Il resto della stanza è spoglio, solo polvere e qualche mattone smosso sul pavimento.

Ai due lati dell'ingresso, incassate nella pietra, due colonnine di ferro battuto corrono dal pavimento al soffitto, ciascuna intagliata con una fila di piccoli scudi araldici — tranne che gli "scudi" sono perfettamente identici l'uno all'altro, disposti con una regolarità meccanica che nessuno stemma nobiliare avrebbe mai richiesto. Da una delle colonnine sporge, semi-nascosto, un filo metallico teso all'altezza della caviglia, collegato a un piccolo meccanismo a scatto contro il muro — una trappola, ma costruita male: il meccanismo è visibile a un'occhiata attenta, il filo lucido e nuovo rispetto alla polvere di secoli intorno.

A nord, oltre un breve passaggio, si risale verso la fontana. A ovest, un ampio varco senza porta si apre sulla sala più grande del piano. A sud, un corridoio stretto scende verso un'altra sala.`,
          notaDM: `Primo specchio che i giocatori incontreranno, salvo diversa scelta del DM. Chi si guarda dentro vede il proprio riflesso con un ritardo di una frazione di secondo, quasi impercettibile, e un piccolo movimento sulla spalla nel riflesso, che nella realtà non c'è. È qui che il primo Suhek'nal comincia a osservare il proprio futuro ospite. Nessun effetto meccanico immediato, solo il seme piantato.

Le colonnine con la trappola visibile sono la prima delle due "barriere di sicurezza mal congegnate" del piano (l'altra è nella Sala Incrinata, stanza 5) — l'eco distorta dei varchi di controllo che, lato Suhek'nal, occupano le stesse due stanze e bloccavano il passaggio di determinate sostanze e apparecchiature verso i livelli inferiori. Qui il duplicato ha ricostruito solo la forma, non la funzione: una trappola artigianale, relativamente facile da individuare (un tiro di Percezione con CD bassa la nota), che scatta un dardo o un piccolo laccio senza reale pericolo mortale — abbastanza per far capire ai giocatori che qualcuno, o qualcosa, "voleva" fermare chi passa di qui, anche se non ricorda più perché.`
        },
        {
          numero: 5,
          titolo: "La Sala Incrinata",
          testo: `Una stanza quadrata, cinque metri per lato circa, con una crepa profonda che attraversa tutto il pavimento da un angolo all'altro, abbastanza larga da lasciar intravedere un vuoto sottostante di pochi centimetri. Qualche detrito sparso, nulla di significativo.

Presso il varco a ovest, incassato nel telaio di pietra, un secondo meccanismo simile a quello della sala precedente — ma qui è chiaramente danneggiato, uno dei due montanti divelto e piegato verso l'esterno, come se qualcosa di grande e determinato fosse passato con forza senza attendere che scattasse.

A nord, un varco riporta verso la sala dello specchio. A ovest, un corridoio conduce verso una sala di snodo con più uscite. A sud, una breve scalinata scende verso una sala più piccola.`,
          notaDM: `La crepa nel pavimento può essere semplicemente scenografica, oppure il DM può decidere che nasconde qualcosa sotto, un piccolo vano, un oggetto caduto lì per caso. Nessun pericolo strutturale a meno che non si voglia introdurne uno.

Il meccanismo forzato è la seconda barriera trasposta, danneggiata esattamente come la sua controparte lato Suhek'nal (vedi stanza 5 lato Suhek'nal) — stesso danno, stessa direzione di sfondamento. Buon dettaglio se il DM vuole più avanti far notare ai giocatori che le due versioni del piano non solo si somigliano, ma "ricordano" gli stessi eventi.`
        },
        {
          numero: 6,
          titolo: "La Sala Grande",
          testo: `Il vano più ampio del piano, una sala che doveva essere un salone principale, forse dieci metri per otto. Il soffitto qui è parzialmente crollato in un punto, e macerie di pietra, travi spezzate e calcinacci coprono buona parte del pavimento, costringendo a un percorso tortuoso tra i detriti. Alcune colonne, un tempo probabilmente decorative, sono spezzate a metà altezza.

Sotto le macerie si intuiscono i resti di lunghe file di tavoli — non le tavolate imbandite che ci si aspetterebbe in un salone da banchetto, ma file troppo regolari, troppo numerose, distanziate con una precisione da refettorio più che da sala di rappresentanza. Su uno dei pochi tavoli ancora in piedi, semi-sepolti dalla polvere, alcuni fogli ingialliti mostrano schizzi che sembrano anatomie di creature vermiformi, accompagnati da annotazioni in una scrittura che nessuno dei presenti riconosce.

A nord, un varco stretto sale verso due piccole stanze. A est, un passaggio riporta verso la sala dello specchio. A ovest, un lungo corridoio, quasi un ponte sospeso tra due sezioni della struttura, conduce verso una sala più distante.`,
          notaDM: `Le macerie rendono il movimento più lento e rumoroso, buon punto per un incontro con una creatura anticorpo o per un piccolo enigma ambientale, ad esempio un percorso tra i detriti che nasconde una lieve instabilità del pavimento in un punto preciso.

Questa sala è l'eco distorta della Mensa lato Suhek'nal (stessa stanza, stessa funzione originaria di sala da pranzo collettiva). I fogli con gli schizzi anatomici sono la controparte esatta del documento chiave trovabile lì — qui però sono illeggibili o comprensibili solo in parte, un assaggio incompleto della stessa informazione. Se i PG trovano prima questa versione, il documento completo lato Suhek'nal avrà più peso quando (e se) lo troveranno.`
        },
        {
          numero: 7,
          titolo: "Il Deposito",
          testo: `Una piccola stanza, forse tre metri per quattro, con scaffalature di legno marcio lungo una parete, ancora cariche di casse e contenitori in gran parte ridotti in polvere. Tra i resti, qualche oggetto ancora riconoscibile, stoviglie di metallo ossidato, un baule di legno chiuso con un lucchetto arrugginito ma non forzato.

Contro la parete opposta alle scaffalature, incassata nella pietra senza alcuna ragione apparente, una fila di catini di pietra allineati come lavabi, ciascuno con un foro di scolo al centro collegato a tubature che spariscono nel muro e non portano visibilmente da nessuna parte.

A sud, il varco riporta verso la sala grande. A est, un breve passaggio conduce verso una piccola sala ottagonale.`,
          notaDM: `Il baule chiuso può contenere un piccolo oggetto utile o semplicemente qualche moneta antica, a discrezione del DM, giusto per premiare chi si prende il tempo di cercare tra le macerie.

I catini di pietra con le tubature senza sbocco sono l'eco distorta del Bagno A lato Suhek'nal (stessa stanza) — impianti idraulici trasposti in arredo apparentemente decorativo e privo di funzione.`
        },
        {
          numero: 8,
          titolo: "La Sala dell'Astrolabio",
          testo: `Una stanza ottagonale, piccola ma con il soffitto a cupola, forse quattro metri di diametro. Al centro, incassato nel pavimento, un grande disco di metallo inciso con simboli stellari e anelli concentrici, alcuni dei quali ancora mobili se spinti con forza. È un astrolabio, o qualcosa che vorrebbe esserlo, congelato in una posizione che non corrisponde a nessuna configurazione astronomica sensata.

In alto, una piccola apertura circolare nella cupola, ostruita da un disco di pietra semitrasparente che lascia filtrare un pallido chiarore grigiastro — l'unica luce non artificiale dell'intero piano. Contro una parete, un unico foro di scolo identico a quelli visti nella stanza precedente, isolato e privo di senso in questo contesto.

A ovest, il varco riporta verso il deposito.`,
          notaDM: `L'astrolabio può essere un piccolo enigma opzionale, i giocatori possono provare a ruotare gli anelli per allinearli, senza un vero effetto meccanico a meno che il DM non voglia collegarlo a qualcosa di più ampio in seguito. Per ora è semplicemente un dettaglio inquietante e bello da esplorare, un frammento di scienza vera dei Suhek'nal filtrato attraverso l'estetica fantasy del duplicato.

Questa stanza è l'eco del Bagno B lato Suhek'nal (stessa stanza) — l'apertura nella cupola corrisponde alla finestrella opaca di quella versione, l'unica fonte di luce naturale su tutto il piano in entrambe le realtà. Vale la pena far notare ai giocatori che è l'unica luce "vera" che incontreranno qui.`
        },
        {
          numero: 9,
          titolo: "Lo Snodo",
          testo: `Una sala irregolare, più larga che profonda, forse sette metri per cinque, con il pavimento in parte ceduto verso un angolo dove si è formata una lieve pendenza. Qui confluiscono più passaggi, e l'aria è leggermente più fredda che nelle stanze precedenti.

Sul lato più basso della sala, dove il pavimento cede in pendenza, lo spazio si restringe in una piccola nicchia arredata in modo incongruo rispetto al resto: tre sedie di legno allineate contro la parete, un tavolino basso con sopra alcuni rotoli di pergamena ingialliti disposti a ventaglio, come lasciati apposta per essere sfogliati da chi attende. Uno dei rotoli è aperto: il testo, in una calligrafia insolitamente regolare, parla di un "cammino verso la forma" e di un'unione che "compie" chi la riceve, accostato a diagrammi che sembrano più schemi tecnici che illustrazioni sacre.

Appena messo piede nella sala, da qualche corridoio indefinito, arriva un urlo. Lontano, breve, impossibile da localizzare. Non si ripete subito.

A est, il lungo corridoio riporta verso la sala grande. A nord ovest, un ampio varco conduce verso una sala più vasta. A sud, un corridoio scende verso un'altra stanza.`,
          notaDM: `Buon punto di snodo narrativo. L'URLO IN LONTANANZA è un innesco atmosferico deliberato — non richiede reazione meccanica, va semplicemente lasciato cadere nel silenzio e mai spiegato subito. Ricompare identico lato Suhek'nal quando i PG raggiungono questa stessa stanza da quella versione: è un'eco che il duplicato riproduce, forse legata a un evento reale accaduto qui 45 anni fa.

La nicchia con i rotoli è l'eco distorta della sala d'attesa lato Suhek'nal (stessa stanza, fondo basso), dove lo stesso testo appare come un opuscolo devozionale dei Suhek'nal — l'Introduzione al Veth'nal. Qui è stato "digerito" in forma di pergamena, con lo stesso contenuto reso più vago e meno tecnico. Buon primo assaggio della filosofia dei Suhek'nal senza svelarla del tutto.`
        },
        {
          numero: 10,
          titolo: "Il Crocevia",
          testo: `Una sala di forma allungata, circa sei metri per quattro, con tre uscite oltre a quella d'ingresso, il che la rende un punto di passaggio quasi obbligato. Le pareti mostrano segni di umidità crescente, più evidenti man mano che ci si avvicina a un lato.

Su un lato della sala, una piccola nicchia a forma di garitta è incassata nella parete, chiusa sul fronte da una grata di ferro fine — troppo fine, troppo regolare per essere stata forgiata a mano — che un tempo doveva permettere a qualcuno seduto dentro di sorvegliare senza essere disturbato. Sul lato opposto, una fila di piccole madie di legno chiuse, allineate come se ognuna dovesse contenere gli effetti personali di qualcuno che non è più tornato a riprenderli.

A nord, una breve scalinata sale verso la sala incrinata. A ovest, un corridoio riporta verso lo snodo. A sud, un varco scuro conduce verso una sala quasi sommersa. A sud est, un altro passaggio conduce verso una sala con un altare.`,
          notaDM: `L'umidità crescente verso sud è un indizio ambientale della sala allagata poco oltre, un piccolo dettaglio che prepara i giocatori prima che la vedano.

La garitta con la grata fine e le madie sono l'eco distorta della Guardiania lato Suhek'nal (stessa stanza) — il posto di controllo a vetro e gli armadietti del personale, trasposti in arredo da castello che non ha alcuna funzione difensiva reale. Il DM può nascondere qualcosa in una delle madie chiuse, a piacere.`
        },
        {
          numero: 11,
          titolo: "La Sala dell'Altare",
          testo: `Una stanza di forma irregolare, forse sei metri di lunghezza, che si restringe verso sud in un piccolo vano più alto che largo. Qui, incassati uno nel soffitto e uno nel pavimento esattamente allineati l'uno con l'altro, due doccioni scolpiti a forma di volto — non un volto umano né animale riconoscibile, qualcosa a metà tra i due, la bocca spalancata in un'espressione che dovrebbe forse essere devozionale e invece risulta solo grottesca. Dalla bocca di quello superiore, un tempo, doveva scorrere acqua; ora non scende nulla, ma l'intera struttura sotto sembra costruita per qualcos'altro che l'acqua — canalizzazioni troppo ampie, troppo dirette, che corrono nei muri in entrambe le direzioni.

Dietro il doccione inferiore, seminascosta, una rampa di scale stretta scende verso il basso.

A nord ovest, un varco riporta verso il crocevia. A est, un passaggio conduce verso una piccola stanza piena di crepe.`,
          notaDM: `I due doccioni allineati sono l'eco distorta della Doccia di Decontaminazione ad aria compressa che occupa la stessa stanza lato Suhek'nal — stessi due ugelli (sopra e sotto), qui reinterpretati come elementi religiosi/decorativi ma con canalizzazioni che tradiscono una funzione più tecnica di quanto l'estetica voglia ammettere. Le scale dietro il doccione inferiore sono la connessione verticale reale verso il Piano 2, identica nella posizione a quella lato Suhek'nal — è la prima discesa concreta che i PG possono trovare in questo piano, se il DM decide di renderla accessibile già ora.

Nessun potere reale nei doccioni. Se un PG li esamina da vicino, può notare che le "bocche" sono cave e che un debole refolo d'aria, freddo, esce ancora a intervalli irregolari da quella superiore — ultimo residuo di un sistema spento da decenni.`
        },
        {
          numero: 12,
          titolo: "La Sala Sommersa",
          testo: `Una piccola stanza, forse tre metri per tre, quasi completamente allagata da un'infiltrazione d'acqua che filtra da una crepa nel soffitto. L'acqua arriva quasi alle ginocchia, scura e torbida, e riflette a malapena la poca luce che filtra dall'esterno. Muffa e alghe scure ricoprono le pareti fin dove arriva l'umidità.

Sotto la superficie, appena visibili, file di piccole nicchie di pietra corrono lungo una parete, disposte a intervalli regolari come se ognuna dovesse contenere qualcosa. Sono quasi tutte vuote. Da una, il bordo di quello che sembra un cencio di stoffa marcita sporge appena dall'acqua torbida.

A nord, l'unico varco riporta verso il crocevia.`,
          notaDM: `Stanza quasi vuota, pensata più per l'atmosfera che per il contenuto, ma il DM può nascondere qualcosa sul fondo dell'acqua, invisibile senza cercare attivamente, magari un piccolo oggetto perso da chi abitava qui prima della frana.

Le nicchie regolari sono l'eco distorta degli armadietti dello Spogliatoio A lato Suhek'nal (stessa stanza) — qui ridotti a semplici vani di pietra sommersi, la loro funzione originaria del tutto illeggibile senza il confronto con l'altra versione.`
        },
        {
          numero: 13,
          titolo: "La Sala delle Crepe",
          testo: `Una piccola stanza, forse tre metri per quattro, con il pavimento e le pareti attraversate da una fitta rete di crepe, alcune abbastanza larghe da poterci infilare una mano. Da alcune di queste fuoriesce un leggero refolo d'aria più fredda del resto della stanza.

Contro una parete, un basso muretto di pietra corre per tutta la lunghezza della stanza, spezzato da crepe come il resto — ma la sua forma, quasi un bancone o una divisoria bassa, non corrisponde a nessun elemento architettonico che ci si aspetterebbe qui. Su un tratto ancora integro, piegato su se stesso, un panno di stoffa spessa, perfettamente ripiegato, come se qualcuno lo avesse lasciato lì un attimo prima di sparire per sempre.

A ovest, l'unico varco riporta verso la sala dell'altare.`,
          notaDM: `Le crepe più larghe possono nascondere piccoli oggetti per chi cerca con attenzione, o essere semplicemente scenografiche. Il refolo d'aria fredda è un piccolo indizio che da qualche parte, oltre le crepe, c'è uno spazio non mappato, buon gancio se si vuole espandere il piano in futuro.

Il muretto e il panno ripiegato sono l'eco dello Spogliatoio B lato Suhek'nal (stessa stanza) — la panca e l'asciugamano piegato di quella versione, trasposti qui in forma di arredo di pietra. Il dettaglio del panno "lasciato un attimo prima di sparire" può essere ripreso letteralmente se il DM vuole enfatizzare quanto le due versioni condividano lo stesso momento di abbandono improvviso.`
        },
        {
          numero: 14,
          titolo: "La Sala Vuota",
          testo: `Un ampio salone, forse nove metri per sei, sorprendentemente spoglio rispetto alle altre stanze, quasi come se fosse stato svuotato deliberatamente. Il pavimento mostra i segni di mobili che un tempo dovevano esserci, quattro rettangoli più chiari nella polvere dove qualcosa di pesante è rimasto a lungo prima di sparire — le forme non corrispondono a nessun mobile medievale riconoscibile: troppo sottili, troppo regolari, più simili a pannelli appesi che a mobilio.

Contro una parete, uno specchio a figura intera, la cornice in un metallo scuro e opaco che non assomiglia al ferro battuto visto altrove nel castello, ancora perfettamente lucido nonostante la polvere che ricopre ogni altra superficie della stanza.

A est, un lungo corridoio riporta verso lo snodo. A ovest, un ampio varco conduce verso una sala più vasta.`,
          notaDM: `Buon momento di respiro dopo le sale più dense, oppure il DM può usarla per un incontro con Varn Selick copia, che potrebbe aver scelto proprio questo spazio spoglio per nascondersi, sentendosi meno esposto.

I quattro rettangoli nella polvere sono l'eco dei pannelli illustrativi della Galleria dei Progressi lato Suhek'nal (stessa stanza) — qui il duplicato non ha nemmeno tentato di ricostruirli, lasciando solo l'impronta di ciò che dovrebbe esserci. Lo specchio è uno dei punti di contatto con la controparte esatta, richiesto anche nelle stanze 15, 18 e 19.`
        },
        {
          numero: 15,
          titolo: "La Sala Grande Ovest",
          testo: `Il secondo salone più ampio del piano, forse otto metri per sette, con il soffitto sostenuto da una fila di archi in pietra ancora intatti. Su una parete, un'altra finestra crollata, la più grande vista finora, con radici e terra che occupano quasi metà della superficie della parete.

Al centro della sala, alcune vetrine di legno e vetro, in gran parte in frantumi, un tempo dovevano esporre qualcosa — piccoli oggetti o reliquie, ormai scomparsi o ridotti a frammenti irriconoscibili sul fondo. Uno stendardo di stoffa pende ancora dal soffitto, mezzo marcito, con un motto ricamato di cui restano leggibili solo poche parole: "...oltre ciò che è conosciuto". Contro la parete opposta, appoggiato di sbieco come se qualcuno l'avesse spostato di recente e poi abbandonato, un secondo specchio a figura intera.

A est, un varco riporta verso la sala vuota. A nord, un piccolo passaggio conduce verso una stanza minore. A ovest, un ultimo varco conduce verso una stanza isolata.`,
          notaDM: `La grande finestra crollata qui può essere il momento più forte per far notare ai giocatori questo motivo ricorrente del piano, magari con un breve dialogo tra i personaggi se si vuole enfatizzarlo.

Questa sala e la 14 sono l'eco del Salone delle Scoperte lato Suhek'nal (stessa stanza) — le vetrine e lo stendardo trasposti in reliquiario da castello, il motto identico nel senso ma "digerito" dall'estetica fantasy. Il secondo specchio, spostato di recente, è lo stesso indizio ambientale presente lato Suhek'nal: qualcuno lo ha usato di recente — Varn Selick, un Suhek'nal in movimento, o altro a discrezione del DM.`
        },
        {
          numero: 16,
          titolo: "La Piccola Sala Nord",
          testo: `Una piccola stanza, forse tre metri per quattro, insolitamente calma rispetto al resto del piano. Al centro, quello che resta di un grande cuscino rotondo, il tessuto ormai marcito e infestato di muffa ma la forma ancora riconoscibile. Una parete intera è occupata da un bassorilievo di pietra scura scolpito a imitare l'acqua che scorre, increspature scolpite con una precisione quasi innaturale — sotto, un canale asciutto alla base suggerisce che un tempo ci scorresse davvero qualcosa. Sulle altre due pareti, due lastre scure e lucide, incorniciate come specchi ma che non riflettono nulla di quanto dovrebbero: le immagini che restituiscono sono leggermente sfasate, un'eco visiva di un istante prima.

A sud, l'unico varco riporta verso la sala grande ovest.`,
          notaDM: `Questa stanza è l'eco distorta della Sala di Quiete A lato Suhek'nal (stessa stanza) — cuscino, "cascata" e coppia di specchi contrapposti, tutti presenti ma trasfigurati: la cascata d'acqua reale diventa un bassorilievo che la imita soltanto, gli specchi funzionanti diventano lastre che riflettono con un ritardo innaturale. Buon momento per un piccolo disagio puramente atmosferico, senza alcun effetto meccanico a meno che il DM non voglia usarlo per qualcosa di più avanti nella campagna.`
        },
        {
          numero: 17,
          titolo: "La Sala Isolata",
          testo: `Una piccola stanza, forse due metri per tre, raggiungibile solo attraverso un breve corridoio stretto, ancora più raccolta della precedente. Al centro, un cuscino quadrato al posto di quello rotondo, ugualmente marcito. La "cascata" scolpita qui è più stretta, un unico velo di pietra scura, e le due lastre riflettenti alle pareti restituiscono la stessa eco visiva sfasata vista nella stanza gemella. Un unico dettaglio fuori posto: un piccolo oggetto personale abbandonato al centro del pavimento, che stona con tutto il resto.

A est, l'unico varco riporta verso la sala grande ovest.`,
          notaDM: `L'oggetto abbandonato è un gancio narrativo da riempire come si preferisce, magari qualcosa appartenuto a un esploratore precedente, o un piccolo indizio su chi altro potrebbe essere passato di qui prima dei PG.

Variante minore della Sala di Quiete B lato Suhek'nal, stessa coppia di elementi (cuscino, bassorilievo a cascata, lastre-specchio) in scala ridotta.`
        },
        {
          numero: 18,
          titolo: "Il Passaggio Sud",
          testo: `Una stanza allungata e stretta, quasi un corridoio più che una sala vera, forse sette metri per tre. Su un lato, incassati nella pietra, alcuni catini bassi di dimensioni stranamente ridotte, quasi da bambino, allineati sotto altrettanti fori di scolo. Dall'altro lato, scaffalature basse cariche di piccoli involti di stoffa marcita, forme che potrebbero essere state indumenti minuscoli, ormai irriconoscibili. In un angolo, appoggiato contro il muro, uno specchio a figura intera, posizionato insolitamente in basso, come pensato per l'altezza di un bambino.

A nord, una porta riporta verso il corridoio dei detriti. A sud est, un varco conduce verso l'ultima sala del piano.`,
          notaDM: `Stanza di passaggio, utile per allungare il tragitto verso la sala finale e costruire disagio crescente prima della stanza 19. I catini in miniatura, gli involti di stoffa e lo specchio basso sono l'eco distorta dei Servizi del Daycare lato Suhek'nal (stessa stanza) — la scala ridotta di ogni oggetto è il dettaglio che dovrebbe iniziare a inquietare i giocatori prima ancora di entrare nella sala successiva.`
        },
        {
          numero: 19,
          titolo: "La Sala Finale",
          testo: `L'ultima sala del piano, ampia, forse nove metri per sette, con i segni di un utilizzo passato più intenso rispetto alle altre stanze, tracce di quello che poteva essere un focolare in un angolo, ormai freddo da tempo immemore. Alle pareti, tracce sbiadite di affreschi infantili — animali sorridenti dai contorni ormai quasi illeggibili, dipinti con una tecnica che non assomiglia a nessun altro affresco visto nel castello.

Giocattoli di legno intagliato sono sparsi ovunque sul pavimento, alcuni spezzati, altri intatti in modo quasi più inquietante: un cavallo a dondolo intagliato con un occhio dipinto mancante, blocchi di legno impilati in una torre troppo precisa per essere stata lasciata così per caso.

In un angolo, una piccola sedia a dondolo di legno e vimini, identica nella forma a un oggetto che non dovrebbe esistere in un'ambientazione come questa. Seduta sopra, composta, con le gambe che non toccano terra: una bambola, intagliata nel legno ma con un vestito di stoffa vera, cucito a mano. Il vestito è pulito, stranamente privo della polvere che copre tutto il resto della stanza.

A nord ovest, un varco riporta verso il passaggio sud. A nord, una breve scalinata sale direttamente verso la sala d'arrivo, chiudendo il percorso ad anello del piano.`,
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
          testo: `Una sala d'ingresso squadrata, pensata per accogliere. Il bancone della reception corre lungo una parete, il legno laminato ormai gonfio d'umidità, un monitor a tubo catodico spento posato di traverso, tessere identificative sparse sul pavimento come foglie cadute — nomi e foto ormai sbiaditi.

La parete di fronte all'ingresso era, un tempo, un'intera vetrata a tutta altezza — doveva affacciarsi su un cortile interno. Ora il vetro è ancora lì, intatto, ma dietro non c'è cortile: solo terra compatta, pressata contro la superficie come se il mondo esterno si fosse semplicemente riempito.

Sopra la porta, un piccolo apparecchio rettangolare con una lente scura al centro. Non si muove. Una spia rossa, spenta da tempo, è ancora visibile sotto la polvere.`,
          notaDM: `Il vetro intatto contro il muro di terra è il primo elemento del piano che stabilisce il "gemellaggio" con la versione Kaelvaran — la stessa parete, lì, è un muro di terra coperto da una lastra di vetro chiaramente fuori posto. Qui è l'esatto contrario concettuale: la parete era progettata per essere trasparente, e lo è ancora, semplicemente non c'è più nulla da vedere attraverso di essa.

La telecamera sopra la porta è la prima di una serie — verranno replicate, in forma distorta, sul lato Kaelvaran come piccole gargolle. Nessun effetto meccanico: sono morte da 45 anni, ma il DM può usarle come dettaglio ricorrente se vuole introdurre più avanti un sistema di sorveglianza ancora funzionante da qualche parte nei piani inferiori.`
        },
        {
          numero: 2,
          titolo: "Il Corridoio di Sorveglianza",
          testo: `Un corridoio lungo e stretto, il soffitto basso attraversato da canaline portacavi ormai aperte, fili scoperti che pendono in alcuni punti. Ogni pochi metri, incassata nel muro, una telecamera identica a quella dell'atrio — tutte spente, tutte con la stessa lente rettangolare rivolta verso il basso.

Il pavimento in piastrelle grigie è crepato in più punti, e in una crepa più larga delle altre la terra è visibilmente smossa, come se qualcosa fosse passato di lì di recente, magari nascondendosi.`,
          notaDM: `Le telecamere ripetute a intervalli regolari sono il motivo ricorrente da portare, trasfigurato, sul lato Kaelvaran (piccole gargolle che reggono uno scrigno o un occhio). La terra smossa nella crepa è lo stesso indizio ambientale già presente lato Kaelvaran — Varn Selick copia (o l'originale, a discrezione del DM) potrebbe essere passato di qui.`
        },
        {
          numero: 3,
          titolo: "La Fontana Commemorativa",
          testo: `Una piccola fontana ornamentale, asciutta, incassata in una nicchia della parete. La vasca è poco profonda, rivestita di piastrelle azzurre ormai scrostate. Alla base, una targa metallica, verdastra di ossido, riporta un nome e alcune parole di dedica al fondatore del centro ricerche — "per la sua visione, che ci ha condotti oltre il confine conosciuto" — seguito da una data.`,
          notaDM: `La targa è pensata per avere una controparte distorta lato Kaelvaran, ai piedi della fontana lì presente: stesso oggetto, stesso posizionamento, ma "qualcosa che non torna" nel testo o nella forma. Qui, lato Suhek'nal, il testo è del tutto coerente e leggibile — nome del fondatore del laboratorio, non necessariamente rilevante per la trama a meno che il DM non voglia collegarlo a un PNG futuro.`
        },
        {
          numero: 4,
          titolo: "La Prima Barriera",
          testo: `Un passaggio stretto, incorniciato da due colonne metalliche alte fino al soffitto, ciascuna incisa con file di piccole spie — tutte spente. È un varco di controllo, il tipo di struttura che normalmente scansiona chi lo attraversa. Cavi ancora collegati corrono lungo il pavimento fino a una scatola di comando contro la parete, con un piccolo schermo in frantumi.

Un cartello, ancora leggibile, avverte: "Accesso vietato con campioni biologici non containerizzati oltre questo punto."`,
          notaDM: `Questa è la prima di due barriere di sicurezza pensate per impedire il trasporto di determinate sostanze e apparecchiature verso i livelli inferiori del laboratorio (contenimento biologico, presumibilmente legato ai Suhek'nal stessi o ai loro esperimenti). Sono spente da 45 anni — nessun effetto meccanico reale, ma il DM può farle riattivare più avanti nella campagna se vuole introdurre un ostacolo.

Sul lato Kaelvaran, questa stanza e la successiva diventano una serie di trappole vistose ma mal congegnate — l'eco distorta di un sistema che un tempo aveva una funzione precisa.`
        },
        {
          numero: 5,
          titolo: "La Seconda Barriera",
          testo: `Identica nella struttura alla precedente, ma qui il sistema mostra segni di essere stato forzato — una delle colonne è divelta dal basamento, piegata verso l'esterno, come se qualcosa di grande e determinato fosse passato senza attendere l'autorizzazione. Sul pavimento, frammenti di plastica e metallo, i resti di un pannello di controllo esploso verso l'interno.`,
          notaDM: `Il danno visibile qui suggerisce che qualcuno, o qualcosa, ha forzato il passaggio con violenza — buon gancio per il DM: potrebbe essere stato La Fine stessa, 45 anni fa, o un tentativo disperato di fuga durante l'incidente originale. Nessuna informazione definitiva richiesta a questo punto della storia.`
        },
        {
          numero: 6,
          titolo: "La Mensa",
          testo: `Una sala ampia, file di tavoli lunghi in metallo e laminato, sedie impilate contro una parete o rovesciate a terra. Su un lato, un bancone con resti di macchine distributrici, i vetri frontali infranti, i vassoi vuoti da tempo. Nella cucina a vista dietro il bancone, pentole industriali ancora appese ai loro ganci.

Su uno dei tavoli, abbandonati a metà lettura, dei fogli con schizzi anatomici — forme vermiformi, annotazioni tecniche a margine sui meccanismi di attacco e di condivisione. Qualcuno li leggeva mentre pranzava.`,
          notaDM: `Documento chiave qui: gli schizzi anatomici dei Suhek'nal. Il dettaglio dei fogli lasciati su un tavolo della mensa, come se qualcuno li leggesse in pausa pranzo, è pensato per essere sottilmente inquietante — un ricercatore studiava i propri futuri ospiti tra un boccone e l'altro.

Lato Kaelvaran questa diventa la Sala Grande, un salone/refettorio con file di tavoli di pietra crollati — le differenze da una mensa "sci-fi" (tavoli di metallo, distributori automatici) rispetto a una sala da pranzo medievale sono un buon momento per un giocatore attento.`
        },
        {
          numero: 7,
          titolo: "Bagno A",
          testo: `Una piccola stanza con file di lavandini in ceramica bianca, gli specchi sopra ciascuno incrinati o anneriti dall'umidità. Le porte dei bagni singoli sono socchiuse, alcune mancanti. Un odore di muffa persiste anche dopo decenni.`,
          notaDM: `Ambiente puramente atmosferico. Lato Kaelvaran diventa il Deposito, con scaffalature e casse — le tubature che non portano da nessuna parte, viste in quella versione, sono l'eco distorta di questi impianti idraulici.`
        },
        {
          numero: 8,
          titolo: "Bagno B",
          testo: `Simile al precedente ma più piccolo, con un unico bagno accessibile e un lavandino. Sulla parete, un distributore di carta ormai vuoto e arrugginito. Una finestrella opaca in alto, l'unica fonte di luce naturale rimasta nell'intero piano, lascia filtrare un chiarore grigiastro.`,
          notaDM: `La finestrella opaca è un piccolo dettaglio unico su questo piano — vale la pena enfatizzarlo, dato che quasi nessun'altra stanza ha luce naturale. Lato Kaelvaran diventa la Sala dell'Astrolabio: la finestrella opaca potrebbe essere l'origine, distorta, della cupola che lascia filtrare luce in quella stanza.`
        },
        {
          numero: 9,
          titolo: "Corridoio degli Uffici",
          testo: `Un ampio spazio di passaggio, ex uffici open space: scrivanie basse divise da pannelli mobili, quasi tutti crollati o rovesciati. Faldoni e documenti coprono il pavimento in strati, alcuni ridotti in poltiglia dall'umidità.

Sul fondo, nella parte più bassa della sala, lo spazio si restringe in un angolo arredato diversamente dal resto: una piccola area d'attesa, con una scrivania di reception, alcune sedie impilate contro le pareti, e un tavolino basso con sopra riviste e opuscoli ingialliti. Uno degli opuscoli, aperto, riporta un linguaggio quasi devozionale — "il cammino verso la forma", "solo nell'unione l'ospite trova compimento" — accostato a diagrammi che assomigliano più a schemi tecnici che a immagini religiose.

Appena si entra in questa sala, da qualche parte nei corridoi, arriva un urlo. Lontano. Impossibile dire da dove.`,
          notaDM: `L'AREA D'ATTESA in fondo alla sala contiene il documento chiave "Introduzione al Veth'nal" (uno degli opuscoli sul tavolino) — la prima esposizione diretta, seppur criptica, della filosofia religiosa dei Suhek'nal, presentata come materiale informativo per "ospiti" in attesa. Il tono è deliberatamente ambiguo tra opuscolo aziendale e testo di culto.

L'URLO è l'innesco atmosferico descritto nell'atmosfera generale del piano — non richiede una reazione meccanica, solo silenzio e attenzione dei giocatori.`
        },
        {
          numero: 10,
          titolo: "La Guardiania",
          testo: `Una piccola postazione di controllo, separata dal corridoio da un vetro spesso, ormai crepato in una ragnatela di linee bianche. Dentro, una sedia girevole rovesciata, una tastiera con i tasti scoloriti, un citofono muto. Sul lato destro della stanza, una fila di armadietti metallici, alcuni aperti e vuoti, altri chiusi a chiave — qui i dipendenti dovevano lasciare tutto ciò che non poteva scendere ai livelli inferiori del laboratorio.

Uno degli armadietti chiusi vibra leggermente, quasi impercettibile, se qualcuno vi si avvicina.`,
          notaDM: `Gli armadietti chiusi sono un buon gancio opzionale — il DM può decidere cosa contengono (oggetti personali, forse qualcosa di utile, o qualcosa di meglio lasciato chiuso). La vibrazione impercettibile in uno di essi può essere lasciata come mistero irrisolto o sviluppata in seguito.

Lato Kaelvaran diventa il Crocevia — la garitta a vetro si trasforma in una piccola guardiola di legno con una grata, gli armadietti in madie o casse chiuse.`
        },
        {
          numero: 11,
          titolo: "La Doccia di Decontaminazione",
          testo: `Una stanza stretta e alta, dominata da due grandi ugelli circolari — uno incassato nel soffitto, uno nel pavimento — collegati a tubature che scompaiono nelle pareti. È una camera di decontaminazione ad aria compressa: chi la attraversa dovrebbe essere investito da un getto d'aria dall'alto e dal basso simultaneamente, pensato per "purificare" l'ingresso e l'uscita dal livello successivo del laboratorio.

Dietro l'ugello inferiore, seminascosta, una rampa di scale stretta scende verso il basso — verso il Piano 2.`,
          notaDM: `Questa è la connessione verticale verso il Piano 2 su questo lato del duplicato. Il sistema è spento da 45 anni: attraversarla non ha effetti meccanici a meno che il DM non voglia riattivarla (aria compressa reale, o qualcosa di peggio, se vuole introdurre un pericolo).

Lato Kaelvaran, l'altare originariamente previsto in questa stanza va sostituito: al suo posto, a sud, due doccioni scolpiti — uno sopra, uno sotto — eco distorta e "religiosa" degli ugelli di decontaminazione. Le scale dietro restano, portando comunque al Piano 2.`
        },
        {
          numero: 12,
          titolo: "Spogliatoio A",
          testo: `File di armadietti metallici disposti in corridoi stretti, molti con le ante spalancate, vestiti da lavoro ancora appesi ad alcuni ganci, ridotti a stracci dall'umidità. Panche di legno corrono al centro di ogni corridoio, alcune spezzate a metà.`,
          notaDM: `Ambiente atmosferico. Lato Kaelvaran diventa la Sala Sommersa, allagata — le panche spezzate e gli armadietti collassati diventano, in quella versione, macerie sommerse dall'acqua.`
        },
        {
          numero: 13,
          titolo: "Spogliatoio B",
          testo: `Più piccolo del precedente, con un'unica fila di armadietti e una zona doccia comune separata da un tramezzo basso, piastrelle bianche ormai annerite di muffa. Un asciugamano, ancora piegato, è rimasto su una panca per 45 anni.`,
          notaDM: `L'asciugamano piegato è un piccolo dettaglio umano, il tipo di cosa che rende reale l'abbandono improvviso. Lato Kaelvaran diventa la Sala delle Crepe.`
        },
        {
          numero: 14,
          titolo: "La Galleria dei Progressi",
          testo: `Una sala allungata trasformata in piccola esposizione interna: pannelli illustrativi alle pareti, alcuni ancora leggibili, che ripercorrono le tappe delle scoperte del centro ricerche — diagrammi di apparecchiature, fotografie di gruppo di ricercatori sorridenti, una linea del tempo dei "progressi" raggiunti. È materiale pensato per ispirare chi ci lavora, un piccolo museo interno più che un archivio.

Contro una parete, uno specchio a figura intera, la cornice in metallo opaco, ancora perfettamente lucido nonostante la polvere ovunque.`,
          notaDM: `Tra i pannelli, se i PG cercano con attenzione, si può nascondere il Rapporto di accesso al Piano 4 (documento chiave) — magari incorniciato come "risultato più importante mai raggiunto", con la frase finale "Contatto stabilito. Natura dell'entità: sconosciuta." lasciata lì, ironicamente, come trofeo.

Lo specchio a figura intera qui è uno dei punti di contatto con la controparte Kaelvaran — stessa stanza, stesso oggetto, richiesto esplicitamente anche in tutte le stanze 15, 18 e 19.`
        },
        {
          numero: 15,
          titolo: "Il Salone delle Scoperte",
          testo: `Continuazione della galleria precedente, ma più ampia: al centro, alcune teche di vetro (in gran parte in frantumi) che un tempo contenevano modelli in scala di apparecchiature o forse campioni conservati — ormai vuote, o con resti irriconoscibili sul fondo. Uno striscione appeso al soffitto, mezzo strappato, recita ancora parzialmente "…verso ciò che è oltre".

Un secondo specchio a figura intera è appoggiato contro la parete opposta, leggermente inclinato, come se qualcuno l'avesse spostato di recente e poi lasciato lì.`,
          notaDM: `Il secondo specchio "leggermente inclinato, spostato di recente" è un piccolo indizio ambientale — qualcuno (Varn Selick originale, o un Suhek'nal in movimento) potrebbe averlo usato di recente. Nessun effetto obbligato, solo tensione.

Lato Kaelvaran, questa e la stanza 14 diventano una galleria di trofei/reliquie fuori contesto per l'estetica del castello — con la stessa coppia di specchi presente, ma "sbagliati" in qualche modo.`
        },
        {
          numero: 16,
          titolo: "Sala di Quiete A",
          testo: `Una stanza piccola e insolitamente accogliente rispetto al resto del piano. Al centro, un grande cuscino rotondo, ormai marcito e infestato di muffa, ma ancora riconoscibile nella forma. Una parete intera è occupata da una cascata artificiale — una lastra di pietra scura su cui un tempo scorreva un velo d'acqua continuo, ora ferma, con incrostazioni calcaree che ne segnano il percorso. Sulle altre due pareti, specchi a figura intera, incorniciati in metallo scuro, che si riflettono l'uno nell'altro creando un corridoio infinito di immagini che si rimpiccioliscono.`,
          notaDM: `Sala di meditazione per il personale — pensata per la decompressione mentale in un ambiente ad alto stress psicologico. Il gioco di specchi contrapposti (corridoio infinito di riflessi) è un buon momento inquietante puramente atmosferico: nessun effetto meccanico, ma il DM può usarlo per un jump scare leggero se un PG fissa troppo a lungo il proprio riflesso moltiplicato.`
        },
        {
          numero: 17,
          titolo: "Sala di Quiete B",
          testo: `Identica nella funzione alla precedente ma più piccola, il cuscino centrale qui è quadrato invece che rotondo, altrettanto marcito. La cascata a muro qui è più stretta, un singolo velo di pietra scura ormai secco. Gli specchi contrapposti sulle pareti laterali creano lo stesso effetto di corridoio infinito.`,
          notaDM: `Variante minore della stanza 16. Il DM può usare questa coppia di stanze come momento di respiro narrativo prima del tratto finale del piano (spogliatoi/daycare).`
        },
        {
          numero: 18,
          titolo: "Servizi del Daycare",
          testo: `Una stanza mista: da un lato un piccolo bagno con sanitari a misura di bambino, dall'altro scaffalature con pannolini ormai polverosi, biberon, un fasciatoio ribaltato. Un ripostiglio adiacente conserva passeggini piegati e impilati, alcuni con la stoffa marcita.

Contro una parete, uno specchio a figura intera, questo posizionato più in basso del normale — pensato per l'altezza di un bambino.`,
          notaDM: `Il dettaglio del bagno a misura di bambino e dello specchio posizionato più in basso è pensato per essere sottilmente perturbante prima ancora di entrare nella stanza 19 — prepara il tono. Lo specchio qui è un altro dei punti di contatto richiesti con la controparte Kaelvaran.`
        },
        {
          numero: 19,
          titolo: "Il Daycare",
          testo: `Una sala colorata — o che un tempo lo era: le pareti mostrano ancora tracce di murales sbiaditi, animali sorridenti dai contorni ormai irriconoscibili. Giocattoli sparsi ovunque sul pavimento, alcuni rotti, altri intatti in modo quasi più inquietante — un cavallo a dondolo con un occhio dipinto mancante, blocchi da costruzione impilati in una torre troppo precisa per essere stata lasciata così per caso da un bambino.

In un angolo, una piccola sedia a dondolo di legno e vimini. Seduta sopra, composta, con le gambe che non toccano terra: una bambola. Il vestito è pulito, stranamente privo della polvere che copre tutto il resto della stanza.`,
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
      musica: null
    },

    {
      id: "stanza_gemme",
      titolo: "La Stanza delle Gemme (Stanza 15 — Piano 2 Suhek'nal)",
      icona: "💎",
      riassunto: "Destinazione di tutti gli specchi speciali. Le gemme in formazione. Il cuore del processo Veth'nal.",
      sezioni: [
        {
          titolo: "La Stanza delle Gemme",
          tipo: "stanza",
          testo: `Una stanza circolare, bassa. Scaffali lungo tutte le pareti, dal pavimento al soffitto. Sugli scaffali: gemme. Decine. Alcune sono opache e scure, morte. Altre pulsano debolmente di una luce interna — biancastra, ritmica, come un respiro lento.

Al centro della stanza: un piano di lavoro in metallo con sopra strumenti di precisione e una gemma più grande delle altre, ancora opaca, in un supporto che la tiene inclinata verso uno specchio sul muro.`,
          notaDM: `Ogni gemma in formazione contiene la copia di un ospite. Le gemme spente sono copie fallite o ospiti morti prima del completamento.

I Suhek'nal che hanno già preso possesso di un PG vogliono portare il proprio ospite in questa stanza per completare il processo. Quando la gemma è completa, il simbionte può eseguire il trasferimento — l'ospite originale viene liberato (ma disorientato e debilitato) e il Suhek'nal continua nel corpo copia.

Se i PG distruggono le gemme in formazione: i Suhek'nal che le stavano formando perdono la possibilità di trasferirsi e rimangono bloccati nell'ospite a tempo indeterminato. Questo può essere usato come leva negoziale.`
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
      segreto: "Immortale. Uccide qualsiasi entità viva al contatto istantaneo. Nulla la rallenta o distrae. Vaga costantemente tra i piani. Non può essere comunicata, fermata o combattuta. L'unica soluzione è la risoluzione ottimale del cristallo temporale."
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
