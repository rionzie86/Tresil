// ══════════════════════════════════════════════════════════════════
//  LO STUDIO FALLITO — data_studio.js
// ══════════════════════════════════════════════════════════════════

const studioDati = {

  loreSegreta: `LE CREATURE VERMIFORMI
Entità provenienti dall'Universo Specchio — un piano di esistenza parallelo al mondo reale, separato da una membrana sottilissima che si manifesta fisicamente come superficie riflettente. Le creature non hanno corpo fisico nel senso tradizionale: sono parassiti che necessitano di un ospite per esistere nel mondo reale. Si attaccano al sistema nervoso dell'ospite attraverso orifizi naturali e ne prendono il controllo gradualmente.

Durante gli esperimenti condotti nello Studio, le creature hanno accidentalmente creato una falla tra l'Universo Specchio e un piano demoniaco. La falla si trova al livello più basso dell'edificio e si espande lentamente verso l'alto. Le creature hanno tentato di contenerla e hanno fallito — ora cercano di fuggire nel mondo reale dei personaggi usando il meccanismo del sacrificio.

IL MECCANISMO DEL SACRIFICIO
Per aprire un varco stabile verso il mondo reale, le creature necessitano di un sacrificio volontario o coercitivo. I corpi degli ospiti originali — quelli lasciati in stato sospeso negli specchi — vengono disposti sull'altare finale. L'ultimo personaggio rimasto (non ancora sostituito) è il candidato al sacrificio.

SE IL SACRIFICIO VIENE EVITATO: il varco si chiude, le creature vermiformi rimangono intrappolate, i corpi negli specchi si risvegliano.

IL VILLAIN INNOMINATO
Proveniente dalla falla demoniaca, non dall'Universo Specchio. Le creature vermiformi lo temono quanto i personaggi. Si muove lento, inesorabile. La sua sola presenza dissolve la realtà circostante. Non può essere danneggiato con mezzi ordinari — solo rallentato o distolto. Il DM decide il momento delle sue apparizioni per massimizzare la tensione. Non va mai mostrato completamente.`,

  capitoli: [

    // ── INGRESSO ──────────────────────────────────────────────────
    {
      id: "ingresso",
      titolo: "Ingresso — La Trappola di Vetro",
      icona: "🪞",
      riassunto: "I personaggi attraversano la soglia e rimangono incastrati. Il primo contatto con le creature vermiformi.",
      sezioni: [
        {
          titolo: "La Soglia",
          tipo: "scena",
          testo: `L'ingresso non ha nulla di speciale. Una porta, un corridoio, l'aria ferma di un posto che non respira da tempo. Entrate.

Poi qualcuno prova a tornare indietro.

La porta è ancora lì. Si apre. Ma oltre la soglia non c'è l'esterno — c'è la stessa immagine dell'esterno, come una fotografia. L'aria al di là non si muove. I suoni non passano. Chi prova a varcare la soglia in uscita sente qualcosa di sottile e resistente, come una parete di vetro invisibile che non cede.

Siete dentro. E qualcosa sa che siete dentro.`,
          notaDM: `La trappola è immediata e non spiegata. Non dare ai giocatori il tempo di razionalizzare — fate che la scoperta avvenga nel momento meno comodo.

Il vetro invisibile non può essere rotto con forza fisica ordinaria. Magie di trasporto o teletrasporto non funzionano — qualcosa interferisce. Non è necessario spiegarlo: l'importante è che i giocatori capiscano che l'unica via è avanzare.`
        },
        {
          titolo: "Lo Specchio — Il Primo Contatto",
          tipo: "scena",
          testo: `Nel corridoio d'ingresso c'è uno specchio. Incorniciato in metallo scuro, annerito dall'ossidazione. È l'unico oggetto che sembra fuori posto — troppo grande, troppo decorato per un corridoio di servizio.

Chi si avvicina vede il proprio riflesso. Normale. Poi, solo per un istante — così breve che quasi non si è sicuri di averlo visto — qualcosa si muove sulla propria spalla nel riflesso. Non nella realtà. Solo nello specchio.`,
          notaDM: `Solo il primo personaggio che si avvicina allo specchio vede il movimento. È il momento in cui la creatura si attacca all'ospite — ma questo il giocatore non lo sa ancora.

Non descrivere la creatura. Descrivere solo il movimento: piccolo, rapido, come se qualcosa stesse scivolando dietro la spalla nel riflesso. Se il giocatore chiede cosa fosse, la risposta è: non lo sapete.

Mandare un messaggio privato al giocatore: "Il tuo personaggio sente un brivido alla base del collo. Come se qualcosa di freddo avesse sfiorato la pelle dall'interno."

Questo giocatore sarà il primo a essere sostituito.`
        }
      ],
      musica: { titolo: "Atrium Carceri — Kapitel", artista: "Atrium Carceri", descrizione: "Ingresso — La trappola" }
    },

    // ── PIANO 1 ───────────────────────────────────────────────────
    {
      id: "piano1",
      titolo: "Piano 1 — L'Archivio dei Sigilli",
      icona: "📜",
      riassunto: "Esplorazione, tensione, nessun combattimento. Sigilli, lore, presenze invisibili. Gli indizi trovati qui danno vantaggi nei piani successivi.",
      sezioni: [
        {
          titolo: "L'Atmosfera",
          tipo: "scena",
          testo: `Il primo piano è quello che lo Studio era prima che tutto andasse storto. Uffici abbandonati, scaffali di metallo arrugginito pieni di faldoni, lavagne con equazioni che nessuno ha cancellato. L'arredamento è quello di un laboratorio degli anni quaranta — legno scuro, metallo brunito, strumenti di misurazione con quadranti analogici e lancette immobili.

La luce entra da piccole finestre con vetri opachi. È una luce grigia, piatta, che non produce ombre nette. Tutto sembra avere due o tre contorni.

Non c'è nessuno. Ma a volte, alla periferia della visione, qualcosa si sposta.`,
          notaDM: `Le presenze del primo piano NON attaccano. Sono echi — registrazioni di ciò che è successo, intrappolate nei muri. Il DM può usarle per costruire tensione: un suono di passi che si fermano quando ci si ferma, una porta che si chiude da sola in un corridoio già esplorato, una silhouette oltre un vetro smerigliato che sparisce quando ci si avvicina.

Nessuno scontro. La minaccia è psicologica.`
        },
        {
          titolo: "I Sigilli",
          tipo: "oggetto",
          testo: `Sui muri, sui pavimenti, incisi nel metallo degli scaffali: simboli ricorrenti. Non sono decorativi — sono funzionali. Qualcuno li ha tracciati con cura ossessiva, poi con fretta crescente, poi con disperazione.

I simboli più recenti sono incompleti.`,
          notaDM: `I sigilli servivano a contenere le creature vermiformi e a proteggere dall'influenza della falla demoniaca. Alcuni sono ancora attivi — chi li riconosce e li usa correttamente ha vantaggi al Piano 4 (resistenza alle tentazioni demoniache) e al Piano 3 (le trappole non si attivano in presenza di certi sigilli).

INDIZI DA TROVARE AL PIANO 1:
• Un diario di uno dei ricercatori che spiega cosa sono le creature vermiformi e il meccanismo degli specchi
• Una mappa parziale dei piani inferiori con alcune trappole segnate
• Un sigillo protettivo completo che può essere copiato e usato successivamente
• Una nota che menziona "il varco al livello più basso" e la data in cui si è aperto

Non tutti gli indizi devono essere trovati — dipende da quanto i giocatori esplorano.`
        },
        {
          titolo: "La Prima Sostituzione",
          tipo: "scena",
          notaDM: `Al Piano 1, la creatura che si è attaccata al primo personaggio tenta di completare il passaggio. Scegliere il momento giusto — un momento di distrazione del gruppo, quando il personaggio è solo o separato dagli altri per qualche motivo.

MECCANISMO: mandare un messaggio privato al giocatore: "Senti qualcosa muoversi dentro di te. Freddo, sottile, come un filo che scorre. Poi un momento di buio. Quando 'torni', sei ancora tu — ma qualcosa è diverso. Ricordi le ultime ore ma tutto prima è nebbia. Sei un doppelganger. Il tuo obiettivo è portare l'ultimo personaggio rimasto all'altare del piano finale senza farti scoprire."

Il corpo originale appare nello specchio più vicino — visibile solo se qualcuno guarda direttamente nel vetro.

Il doppelganger ha accesso ai ricordi recenti del personaggio originale (ultime 3-4 ore) ma non a quelli precedenti. Questo giustifica perché il giocatore-doppelganger può esplorare genuinamente i piani successivi: non sa cosa c'è sotto.`,
          testo: `[Sezione riservata DM — vedere note]`
        }
      ],
      musica: { titolo: "Lustmord — A Room Between the Rooms", artista: "Lustmord", descrizione: "Piano 1 — L'archivio" }
    },

    // ── PIANO 2 ───────────────────────────────────────────────────
    {
      id: "piano2",
      titolo: "Piano 2 — I Laboratori",
      icona: "⚗️",
      riassunto: "Scontri fisici. Creature vermiformi in fuga dal villain. Informazioni sugli esperimenti e sulla falla.",
      sezioni: [
        {
          titolo: "L'Atmosfera",
          tipo: "scena",
          testo: `I laboratori sono quello che viene dopo quando un posto smette di fingere di essere civile. Tavoli di metallo con cinghie di contenimento, vetri rotti, strumenti che non appartengono agli anni quaranta — troppo avanzati, troppo precisi, costruiti con una tecnologia che non dovrebbe esistere ancora.

Sui muri ci sono segni di combattimento — non di armi, ma di qualcosa che ha spinto contro le pareti dall'interno. Alcune sezioni del pavimento sono fuse, come se la temperatura fosse salita in modo impossibile in punti precisi.

La luce qui è artificiale — tubi al neon che sfarfallano in modo aritmico. Alcuni ambienti sono completamente al buio.`,
          notaDM: `Le creature che i personaggi incontrano al Piano 2 non sono ostili per natura — sono in fuga. Quando il villain si avvicina (il DM può farlo sentire attraverso effetti ambientali: temperatura che cala, superfici riflettenti che si incrinano, un suono basso e costante che cresce) le creature si agitano e possono diventare pericolose per panico.

I combattimenti al Piano 2 dovrebbero sembrare caotico e disperato, non tattico.`
        },
        {
          titolo: "Le Creature del Piano 2",
          tipo: "scontro",
          testo: `Non si muovono come animali. Si muovono come qualcosa che ha imparato a muoversi guardando gli altri farlo, e non ha ancora capito del tutto come funziona.

Corpi che erano stati qualcuno — ricercatori, tecnici, personale dello Studio — ora abitati da qualcosa che non sa usarli bene. Si piegano negli angoli sbagliati. La testa gira troppo. Le mani toccano le superfici in modo sistematico, come se stessero cercando qualcosa che non trovano.

Non urlano. Producono un suono basso, quasi subsonico, che si sente più nello stomaco che nelle orecchie.`,
          notaDM: `STILE VISIVO DI RIFERIMENTO: Silent Hill — le infermiere. Movimenti che sembrano sbagliati, bende o materiali che coprono il volto, comportamento quasi meccanico che si rompe improvvisamente in violenza.

Le creature del Piano 2 non sono il pericolo principale — sono sintomi. Il pericolo principale è la cosa che le mette in fuga.

SECONDA SOSTITUZIONE: avviene al Piano 2, quando il gruppo è impegnato in uno scontro o in una situazione di alta tensione. Stesso meccanismo del Piano 1 — messaggio privato al giocatore.`
        },
        {
          titolo: "Gli Esperimenti — Cosa è Successo",
          tipo: "documento",
          testo: `Nei laboratori i personaggi trovano prove di quello che è accaduto — diari, registrazioni, appunti.`,
          notaDM: `INFORMAZIONI CHE I PERSONAGGI POSSONO TROVARE AL PIANO 2:

• Lo Studio era un centro di ricerca sulle intersezioni tra piani di esistenza. I ricercatori avevano individuato l'Universo Specchio e stavano cercando di stabilire un contatto controllato.

• Le creature vermiformi hanno risposto al contatto in modo imprevisto — non come soggetti di studio, ma come parassiti alla ricerca di ospiti. I ricercatori non si sono accorti di essere stati infettati fino a quando era troppo tardi.

• Durante un esperimento, il contenimento ha ceduto e si è aperta una falla verso un piano non identificato — quello che il DM sa essere un piano demoniaco. La falla è al livello più basso.

• Gli ultimi appunti descrivono qualcosa che è entrato dalla falla. I ricercatori lo chiamano "il Visitatore". Non lo descrivono — solo le sue conseguenze.

Queste informazioni preparano i giocatori a capire il Piano 3 e il Piano 4 senza svelare tutto.`
        }
      ],
      musica: { titolo: "Penderecki — Threnody for the Victims of Hiroshima", artista: "Krzysztof Penderecki", descrizione: "Piano 2 — I laboratori" }
    },

    // ── PIANO 3 ───────────────────────────────────────────────────
    {
      id: "piano3",
      titolo: "Piano 3 — La Linea di Difesa",
      icona: "⚔️",
      riassunto: "Prima linea di difesa organizzata delle creature vermiformi. Combattimenti pesanti, trappole, zone dove la realtà si è dissolta.",
      sezioni: [
        {
          titolo: "L'Atmosfera",
          tipo: "scena",
          testo: `Qui le creature vermiformi hanno combattuto. E perso.

Il pavimento è coperto di residui — non sangue, qualcosa di diverso, una sostanza che assorbe la luce invece di rifletterla. Le pareti mostrano i segni di una battaglia condotta con strumenti che non esistono nel mondo fisico: superfici fuse in pattern geometrici impossibili, sezioni di muro dove la pietra è diventata qualcosa di traslucido, zone dove il pavimento non c'è — non è crollato, è semplicemente assente, e al di sotto c'è qualcosa che non è il piano successivo.

Le trappole sono ancora attive. Alcune sono meccaniche — residui della tecnologia dello Studio. Altre sono qualcosa di diverso: zone dove la realtà è stata piegata e non si è raddrizzata.`,
          notaDM: `Il Piano 3 è il piano più fisicamente pericoloso. Combattimenti, trappole, navigazione difficile.

CHI HA TROVATO LA MAPPA AL PIANO 1 ha alcune trappole segnate — vantaggio significativo.
CHI HA COPIATO I SIGILLI AL PIANO 1 può disattivare alcune delle trappole magiche.

TERZA E QUARTA SOSTITUZIONE: al Piano 3 avvengono due sostituzioni ravvicinate, sfruttando il caos dei combattimenti. Con 6 giocatori, a questo punto 4 sono doppelganger e 2 sono ancora originali. La tensione al tavolo dovrebbe essere massima — i giocatori non sanno di chi fidarsi.`
        },
        {
          titolo: "Le Zone Dissolte",
          tipo: "stanza",
          testo: `Alcune aree del Piano 3 non seguono le regole fisiche normali. Non è magia — è qualcosa che è successo quando la realtà ha ceduto sotto una pressione che non era progettata per sostenere.

In queste zone: le direzioni non corrispondono, il tempo scorre in modo irregolare, i suoni arrivano prima delle loro fonti. Chi ci entra senza preparazione può uscire da una direzione completamente diversa da quella prevista — o non uscire del tutto.`,
          notaDM: `Le zone dissolte sono ostacoli narrativi, non puzzle meccanici. Il DM può usarle per separare temporaneamente il gruppo, creare momenti di isolamento, o per far apparire il villain in modo inaspettato.

Suggerimento: in una zona dissolta, uno specchio appare dal nulla. Chi si guarda vede il proprio corpo originale nella stanza dello specchio — immobile, vivo, in attesa. Momento di rivelazione potenziale per i doppelganger.`
        }
      ],
      musica: null
    },

    // ── PIANO 4 (PENULTIMO) ────────────────────────────────────────
    {
      id: "piano4",
      titolo: "Piano 4 — Il Girone della Corruzione",
      icona: "🔥",
      riassunto: "Lussuria, invidia, gola. Scelte moralmente orrende per proseguire. Il piano demoniaco si manifesta pienamente.",
      sezioni: [
        {
          titolo: "L'Atmosfera",
          tipo: "scena",
          testo: `Non è più lo Studio. O meglio — è ancora lo Studio, ma visto attraverso qualcosa che lo ha corrotto fino all'osso.

Le pareti trasudano. L'aria è calda e ha un odore che il cervello rifiuta di classificare. La geometria degli ambienti è sbagliata — le stanze sono troppo grandi, i corridoi troppo stretti, le proporzioni non tornano mai. La luce è rossa e ambrata, come se filtrata attraverso qualcosa di organico.

Qui i demoni non attaccano subito. Osservano. Offrono.`,
          notaDM: `Il Piano 4 funziona diversamente dagli altri. Il pericolo non è fisico — è morale. I personaggi vengono messi di fronte a tentazioni e scelte che hanno conseguenze reali nel gioco.

CHI HA TROVATO I SIGILLI AL PIANO 1 ha resistenza alle tentazioni — il DM può rendere le scelte meno coercitive per questi personaggi.

QUINTA SOSTITUZIONE: al Piano 4 avviene l'ultima sostituzione. A questo punto rimane un solo personaggio originale. Tutti gli altri sono doppelganger.`
        },
        {
          titolo: "Le Tre Tentazioni",
          tipo: "scena",
          testo: `Il piano è diviso in tre zone, ognuna governata da una corruzione diversa. Non è necessario attraversarle tutte — ma ogni zona offre qualcosa di utile per il piano finale, a un prezzo.`,
          notaDM: `LUSSURIA — La zona offre informazioni sul meccanismo dell'altare finale e su come interrompere il sacrificio. Il prezzo: un personaggio deve rinunciare a qualcosa di importante per lui — un oggetto, un ricordo, una capacità.

INVIDIA — La zona offre la possibilità di vedere cosa stanno facendo i propri compagni in questo momento — incluso se sono doppelganger. Il prezzo: la visione mostra anche qualcosa che il personaggio non vorrebbe sapere di sé stesso. Il DM decide cosa, in base al background del personaggio.

GOLA — La zona offre potere fisico immediato — forza, velocità, resistenza. Il prezzo: ogni uso di questo potere accelera la corruzione. Il DM tiene traccia in segreto.

I doppelganger non sono immuni alle tentazioni — le creature che li abitano hanno i loro desideri.`
        }
      ],
      musica: null
    },

    // ── PIANO FINALE ──────────────────────────────────────────────
    {
      id: "finale",
      titolo: "Piano Finale — L'Altare",
      icona: "⛧",
      riassunto: "I corpi sospesi. La scelta finale. Sacrificio o resistenza.",
      sezioni: [
        {
          titolo: "L'Altare",
          tipo: "scena",
          testo: `Una stanza circolare. Il soffitto non si vede — si perde nel buio sopra. Al centro, disposti in cerchio su superfici di pietra inclinata, i corpi. Immobili, vivi, con gli occhi aperti che non vedono.

I vostri compagni. O quello che ne rimane.

Ai bordi della stanza: specchi. Decine. Ogni riflesso mostra qualcosa di leggermente diverso dalla realtà — angoli sbagliati, luci che non corrispondono, dettagli che non tornano.

Al centro del cerchio: uno spazio vuoto. Con il vostro nome inciso nella pietra.`,
          notaDM: `GESTIONE DELLA SCENA FINALE

A questo punto ci sono due tipi di giocatori al tavolo: i doppelganger (che sanno di esserlo) e l'ultimo originale (che non sa quanti siano i doppelganger).

L'OFFERTA: le creature vermiformi, attraverso i doppelganger, offrono all'ultimo originale la libertà — per sé e per tutti — in cambio del sacrificio volontario. I corpi negli specchi si risvegliano. Le creature sono libere. Fine.

SE L'ORIGINALE RIFIUTA: deve combattere o resistere. I doppelganger cercano di portarlo fisicamente all'altare. Il villain appare — e questa volta non insegue le creature, insegue tutti. Il caos della scena finale crea l'opportunità per l'originale di rompere il meccanismo: distruggere gli specchi, interrompere il cerchio, raggiungere i corpi sospesi e risvegliarli fisicamente.

SE CI RIESCE: i corpi si risvegliano, le creature vermiformi vengono espulse, il varco si chiude. Il villain rimane — ma senza più ostaggi da usare, si ritira.

SE FALLISCE: il sacrificio avviene. Fine alternativa — non necessariamente la peggiore storia da raccontare.`
        }
      ],
      musica: { titolo: "Dead Can Dance — The Ubiquitous Mr Lovegrove", artista: "Dead Can Dance", descrizione: "L'altare — la scelta finale" }
    }

  ],

  png: [
    {
      nome: "Il Primo Ricercatore",
      ruolo: "PNG — Voce del passato",
      descrizione: "Non è presente fisicamente. È una voce registrata su un cilindro di cera — il formato di registrazione degli anni quaranta. La sua voce appare in diversi punti dello Studio, sempre in momenti significativi.",
      segreto: "Era il responsabile del progetto. Ha capito cosa stava succedendo prima degli altri e ha tentato di fermare gli esperimenti. Non ci è riuscito. Le sue ultime registrazioni sono al Piano 2 — raccontano cosa è entrato dalla falla."
    },
    {
      nome: "Il Villain Innominato",
      ruolo: "Antagonista principale — presenza costante",
      descrizione: "Non viene mai mostrato completamente. I personaggi lo percepiscono attraverso effetti: temperatura che cala bruscamente, superfici riflettenti che si incrinano nel raggio di venti metri, un suono basso che cresce. Le creature vermiformi fuggono dalla sua presenza.",
      segreto: "Non è un demone nel senso tradizionale. È qualcosa che esisteva prima che il piano demoniaco avesse un nome. La falla non lo ha creato — lo ha liberato. Non ha obiettivi comprensibili agli esseri umani. Uccidere i personaggi non è il suo scopo — è una conseguenza inevitabile della sua presenza. Non può essere fermato, solo evitato."
    }
  ],

  oggetti: [
    {
      nome: "Il Diario del Primo Ricercatore",
      importanza: "Lore fondamentale",
      descrizione: "Trovato al Piano 1. Racconta la storia dello Studio dall'inizio alla fine. Contiene anche istruzioni parziali per i sigilli protettivi."
    },
    {
      nome: "Il Cilindro di Cera",
      importanza: "Lore + atmosfera",
      descrizione: "Registrazioni vocali del Primo Ricercatore. Alcune sono istruzioni, altre sono confessioni. L'ultima registrazione è incomprensibile — non per il contenuto, ma perché la voce non sembra più umana."
    },
    {
      nome: "Il Sigillo Completo",
      importanza: "Vantaggio tattico",
      descrizione: "Trovato al Piano 1. Se copiato e usato correttamente dà resistenza alle tentazioni del Piano 4 e disattiva alcune trappole magiche del Piano 3."
    },
    {
      nome: "La Mappa Parziale",
      importanza: "Vantaggio tattico",
      descrizione: "Trovata al Piano 1. Segnala alcune trappole del Piano 3 e indica l'esistenza del Piano Finale. Non mostra tutto."
    }
  ]

};
