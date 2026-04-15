══════════════════════════════════════════════════════
 ARCHIVIO DI TRESIL — Istruzioni
══════════════════════════════════════════════════════

COME USARE
──────────
1. Apri "index.html" con qualsiasi browser (Chrome, Firefox, Edge, Safari)
2. Funziona completamente offline — nessuna connessione necessaria
3. Il pannello Admin si apre cliccando "⚙ Pannello Admin" in fondo alla sidebar

PASSWORD ADMIN
──────────────
  tresil2025

(Puoi cambiarla aprendo admin.html con un editor di testo
 e modificando la riga: const ADMIN_PW = 'tresil2025';)

STRUTTURA FILES
───────────────
  index.html    — la webapp principale
  admin.html    — pannello per modificare i contenuti
  data.js       — tutti i contenuti della campagna
  maps/         — cartella dove mettere le mappe (da aggiungere)
  README.txt    — questo file

COME AGGIORNARE I CONTENUTI
────────────────────────────
METODO 1 — Pannello Admin (per aggiornamenti veloci):
  • Apri index.html → clicca "Pannello Admin"
  • Modifica personaggi, sessioni, lore, glossario, thread
  • Le modifiche si salvano nel browser (localStorage)
  • Per renderle permanenti: usa "Esporta" → scarica data.js → 
    sostituisci il file nella cartella tresil-wiki/

METODO 2 — Passando da Claude (per aggiornamenti strutturali):
  • Porta il file data.js attuale a Claude
  • Descrivi cosa aggiungere o modificare
  • Scarica il nuovo data.js e sostituiscilo

AGGIUNGERE LE MAPPE
────────────────────
1. Salva le immagini nella cartella maps/
   es: maps/tresil.jpg e maps/regione.jpg
2. Porta i file a Claude per aggiungere le zone cliccabili

LINK IPERTESTUALI NEI TESTI
─────────────────────────────
I termini nel glossario (data.js → glossario) diventano
automaticamente link cliccabili in tutti i testi.
Per aggiungere un nuovo termine: Pannello Admin → Glossario.

NOTE SALVATE
─────────────
Le note nella sezione "Note DM" si salvano nel browser.
NON vengono perse ricaricando la pagina, MA vanno perse
se si svuota la cache del browser. Per sicurezza, copia
le note importanti nel file data.js.

══════════════════════════════════════════════════════
