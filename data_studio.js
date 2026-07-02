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
• Introduzione al Veth'nal — un manuale interno che spiega la filosofia e il processo di simbiosi. Scritto in modo accademico ma con tono quasi religioso.
• Rapporto di accesso al Piano 4 — descrive l'esperimento che ha aperto la falla. L'ultima riga è: "Contatto stabilito. Natura dell'entità: sconosciuta. Procedura di emergenza attivata."
• Schizzi anatomici dei Suhek'nal in forma vermiforme — con note sui meccanismi di attacco e condivisione.

Questi documenti preparano i PG a capire cosa sta succedendo senza spiegarlo direttamente.`
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
