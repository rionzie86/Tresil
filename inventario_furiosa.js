// ============================================================
// inventario_furiosa.js — sezione Inventario di furiosa.html
// Layout «schede per persona», pensato prima per il telefono.
// Richiede: data_inventario.js (FURIOSA_INVENTARIO),
//           economia_kaelvaran.js (window.ecoKaelvaranParse),
//           data_furiosa.js (colori e iniziali dei PG).
// Uso: renderInventarioFuriosa(elemento, { master: true|false })
// ============================================================
(function () {
  const ORDINE = [['og', 1e8], ['om', 1e7], ['op', 1e6], ['ag', 1e5], ['am', 1e4], ['ap', 1e3], ['bg', 100], ['bm', 10], ['bp', 1]];
  const CAT = {
    animali: 'Cavalli e finimenti', armi: 'Armi', vestiario: 'Vestiario', viaggio: 'Viaggio e campo',
    cibo: 'Cibo', cura: 'Cure e igiene', scrittura: 'Scrittura e inchiostri', magia: 'Doni e magia',
    reperti: 'Reperti', ricordi: 'Ricordi', altro: 'Altro'
  };
  const CAT_ORD = Object.keys(CAT);
  const ADDOSSO = /^(Abiti invernali|Mantello|Stivali da cavallo|Guanti|Berretto|Sacca da viaggio)/;
  const ROTOLO = /^(Giaciglio|Coperta di lana)/;
  const ZONE = {
    sella:   { t: 'Sella e finimenti', ico: '⛀' },
    addosso: { t: 'Addosso al cavaliere', ico: '◍' },
    rotolo:  { t: 'Rotolo dietro la sella', ico: '◒' },
    appeso:  { t: 'Appeso alla sella', ico: '◡' },
    bisacce: { t: 'Bisacce', ico: '▣', max: 20 },
    basto:   { t: 'Basto e finimenti', ico: '⛀' },
    ceste:   { t: 'Ceste del basto', ico: '▣' },
    carro:   { t: 'Sul carro della carovana', ico: '⛟' }
  };
  const esc = s => String(s ?? '').replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  const nf = (n, d = 0) => n.toLocaleString('it-IT', { maximumFractionDigits: d });
  const kg = k => nf(k, k < 10 ? 1 : 0) + ' kg';

  function monete(bp) {
    if (!bp) return '0';
    let r = Math.round(Math.abs(bp)), out = [];
    for (const [s, v] of ORDINE) {
      if (r >= v) { const q = Math.floor(r / v); out.push(q + ' ' + s); r -= q * v; }
      if (out.length === 3) break;
    }
    return (bp < 0 ? '−' : '') + (r > 0 ? '≈ ' : '') + out.join(' ');
  }
  function lavoro(bp) {
    const g = bp / 100;
    if (g < 1) return 'meno di una giornata';
    if (g < 300) { const t = nf(g, g < 10 ? 1 : 0); return t + (t === '1' ? ' giornata' : ' giornate'); }
    const t = nf(g / 300, g < 3000 ? 1 : 0); return t + (t === '1' ? ' anno' : ' anni') + ' di lavoro';
  }
  function valore(costo, qta = 1) {
    if (!costo || typeof window.ecoKaelvaranParse !== 'function') return null;
    const s = String(costo).replace(/^[−-]/, '');
    const p = window.ecoKaelvaranParse(s);
    if (!p) return null;
    const segno = /^[−-]/.test(String(costo)) ? -1 : 1;
    return { min: p.min * qta * segno, max: p.max * qta * segno, mid: (p.min + p.max) / 2 * qta * segno };
  }
  function dove(o) {
    if (o.dove) return o.dove;
    if (!o.peso) return null;
    if (/sul carro/.test(o.nome)) return 'carro';
    if (o.chi === 'soma') return o.cat === 'animali' ? 'basto' : 'ceste';
    if (o.cat === 'animali' || /^Bisacce/.test(o.nome)) return 'sella';
    if (ADDOSSO.test(o.nome)) return 'addosso';
    if (ROTOLO.test(o.nome)) return 'rotolo';
    if (/^Otre/.test(o.nome)) return 'appeso';
    return 'bisacce';
  }

  const CSS = `
.invA{max-width:760px;font-size:15px;}
.invA .ia-intro{font-size:13px;color:var(--t3);font-style:italic;margin-bottom:1rem;line-height:1.5;}
.invA .ia-card{background:var(--bg-card);border:1px solid var(--border);border-radius:6px;padding:.8rem 1rem;margin-bottom:.8rem;}
.invA .ia-borsa-v{font-family:var(--font-d);font-size:20px;color:var(--gold);margin:.1rem 0;}
.invA .ia-lbl{font-family:var(--font-d);font-size:11px;letter-spacing:.12em;text-transform:uppercase;color:var(--t3);}
.invA .ia-sub{font-size:12.5px;color:var(--t3);line-height:1.45;}
.invA .ia-chips{display:flex;gap:6px;overflow-x:auto;padding:2px 0 8px;margin-bottom:.4rem;scrollbar-width:none;}
.invA .ia-chip{flex-shrink:0;display:flex;align-items:center;gap:6px;padding:5px 12px 5px 6px;border:1px solid var(--border-b);border-radius:20px;background:none;color:var(--t2);font-family:var(--font-b);font-size:14px;cursor:pointer;}
.invA .ia-chip.on{border-color:var(--gold);color:var(--gold);background:var(--gold-g);}
.invA .ia-dot{width:22px;height:22px;border-radius:50%;display:inline-flex;align-items:center;justify-content:center;font-size:11px;color:#0a0c0f;font-weight:700;flex-shrink:0;}
.invA .ia-head{display:flex;align-items:center;gap:10px;}
.invA .ia-name{font-family:var(--font-d);font-size:15px;letter-spacing:.06em;color:var(--t1);}
.invA .ia-right{margin-left:auto;text-align:right;}
.invA .ia-bar{height:8px;border-radius:4px;background:var(--bg-panel);overflow:hidden;margin:.55rem 0 .3rem;border:1px solid var(--border);}
.invA .ia-bar i{display:block;height:100%;}
.invA .ia-tools{display:flex;gap:8px;align-items:center;flex-wrap:wrap;margin:.2rem 0 .8rem;}
.invA .ia-tools input[type=search]{flex:1;min-width:160px;background:var(--bg-panel);border:1px solid var(--border-b);border-radius:4px;color:var(--t1);padding:7px 10px;font-family:var(--font-b);font-size:15px;}
.invA .ia-tools label{font-size:13px;color:var(--t2);display:flex;gap:5px;align-items:center;}
.invA details.ia-sec{border:1px solid var(--border);border-radius:6px;margin-bottom:.55rem;background:var(--bg-card);}
.invA details.ia-sec>summary{list-style:none;cursor:pointer;display:flex;align-items:center;gap:8px;padding:.6rem .9rem;font-family:var(--font-d);font-size:12px;letter-spacing:.08em;text-transform:uppercase;color:var(--gold);}
.invA details.ia-sec>summary::-webkit-details-marker{display:none;}
.invA details.ia-sec>summary::before{content:'▸';color:var(--t3);transition:transform .15s;}
.invA details.ia-sec[open]>summary::before{transform:rotate(90deg);}
.invA details.ia-sec>summary .ia-right{font-family:var(--font-b);font-size:13px;letter-spacing:0;text-transform:none;color:var(--t3);}
.invA .ia-list{padding:0 .9rem .4rem;}
.invA details.ia-it{border-top:1px solid var(--border);}
.invA details.ia-it>summary{list-style:none;cursor:pointer;display:flex;gap:10px;padding:.5rem 0;align-items:flex-start;}
.invA details.ia-it>summary::-webkit-details-marker{display:none;}
.invA .ia-it-n{color:var(--t1);line-height:1.35;}
.invA .ia-it-q{color:var(--t3);font-size:13px;white-space:nowrap;}
.invA .ia-it-v{margin-left:auto;text-align:right;white-space:nowrap;color:var(--t1);font-size:14px;line-height:1.3;}
.invA .ia-it-v small{display:block;color:var(--t3);font-size:12px;}
.invA .ia-it-d{font-size:13px;color:var(--t2);padding:0 0 .6rem;line-height:1.5;}
.invA .ia-it-d span{display:block;}
.invA .ia-perso .ia-it-n{text-decoration:line-through;color:var(--t3);}
.invA .ia-pers{color:var(--t3);font-style:italic;font-size:13px;}
.invA .b{display:inline-block;margin-left:5px;padding:0 6px;border:1px solid var(--border-b);border-radius:9px;font-size:10px;color:var(--t2);vertical-align:1px;}
.invA .b.mag{border-color:var(--purple);color:var(--purple);}
.invA .b.rep{border-color:var(--amber);color:var(--amber);}
.invA .b.ver{border-color:var(--red);color:var(--red);}
.invA .ia-zone{display:flex;justify-content:space-between;gap:8px;padding:.45rem 0;border-top:1px solid var(--border);font-size:14px;}
.invA .ia-zone b{font-weight:600;color:var(--t1);}
.invA .ia-zlist{font-size:12.5px;color:var(--t3);line-height:1.45;padding-bottom:.4rem;}
.invA .ia-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:.6rem;}
.invA .ia-grid .ia-card{cursor:pointer;margin:0;}
.invA .ia-grid .ia-card:hover{border-color:var(--border-b);}
.invA table{width:100%;border-collapse:collapse;font-size:13.5px;}
.invA td{padding:5px 0;border-top:1px solid var(--border);vertical-align:top;color:var(--t2);}
.invA td.r{text-align:right;white-space:nowrap;color:var(--t1);padding-left:8px;}
.invA .ia-dm{border:1px dashed var(--gold-d);border-radius:6px;padding:.8rem 1rem;font-size:13px;color:var(--t2);margin-top:1rem;}
`;

  window.renderInventarioFuriosa = function (root, opts = {}) {
    const INV = typeof FURIOSA_INVENTARIO !== 'undefined' ? FURIOSA_INVENTARIO : null;
    if (!INV) { root.insertAdjacentHTML('beforeend', '<div class="card"><div class="card-body empty">Inventario non trovato: controlla che data_inventario.js sia nella stessa cartella di furiosa.html.</div></div>'); return; }
    if (!document.getElementById('invA-css')) { const st = document.createElement('style'); st.id = 'invA-css'; st.textContent = CSS; document.head.appendChild(st); }

    const pgs = (typeof FURIOSA_DATA !== 'undefined' && FURIOSA_DATA.personaggi?.pg) || [];
    const port = INV.portatori.map(p => {
      const pg = pgs.find(x => x.id === p.id) || {};
      return { ...p, colore: p.colore || pg.colore || '#9a9080', iniziali: p.iniziali || pg.iniziali || p.nome[0], giocatore: pg.giocatore || '' };
    });
    const items = INV.oggetti.map(o => { const qta = o.qta || 1; return { ...o, qta, v: valore(o.costo, qta), conta: !o.stato }; });
    const soldi = (INV.denaro || []).map(d => ({ ...d, v: valore(d.cifra) }));
    const borsa = soldi.find(d => d.chi === 'gruppo');
    const dot = p => `<span class="ia-dot" style="background:${p.colore}">${esc(p.iniziali)}</span>`;

    function stats(id) {
      const its = items.filter(o => o.chi === id && o.stato !== 'perso');
      const ogg = its.filter(o => o.conta && o.v).reduce((a, o) => a + o.v.mid, 0);
      const carico = its.filter(o => o.peso && dove(o) !== 'carro').reduce((a, o) => a + o.peso * o.qta, 0);
      const den = soldi.filter(d => d.chi === id);
      return { its, ogg, carico, den };
    }
    function barra(p, s) {
      if (!p.limite || !s.carico) return '';
      const tot = s.carico + (p.cavaliere || 0), pc = Math.min(100, tot / p.limite * 100);
      const col = tot > p.limite ? 'var(--red)' : tot > p.limite * 0.95 ? 'var(--amber)' : 'var(--green)';
      return `<div class="ia-bar"><i style="width:${pc}%;background:${col}"></i></div>
        <div class="ia-sub">Cavallo: <b style="color:${col}">${kg(tot)} su ~${p.limite}</b> — ${kg(s.carico)} di carico${p.cavaliere ? ` + cavaliere ~${p.cavaliere} kg` : ''}</div>`;
    }

    const wrap = document.createElement('div'); wrap.className = 'invA'; root.appendChild(wrap);
    wrap.innerHTML = `<div class="ia-intro">${esc(INV.intro)} Aggiornato a: ${esc(INV.aggiornato)}.</div>`;

    // ── borsa comune, sempre in alto
    if (borsa) {
      const c = document.createElement('div'); c.className = 'ia-card';
      c.innerHTML = `<div class="ia-lbl">Borsa comune${borsa.verificare ? ' <span class="b ver" title="Da verificare">?</span>' : ''}</div>
        <div class="ia-borsa-v">${borsa.v ? monete(borsa.v.mid) : 'da contare'}</div>
        <div class="ia-sub">${esc(borsa.nome.replace(/^Borsa comune ?/, '').replace(/[()]/g, ''))}${borsa.v ? ' · ' + lavoro(borsa.v.mid) : ''}</div>
        ${borsa.conti ? `<details class="ia-sec" style="margin:.6rem 0 0"><summary>Entrate e uscite</summary><div class="ia-list"><table>
          ${borsa.conti.map(r => `<tr><td>${esc(r.cosa)}<br><span class="ia-sub">${esc(r.fonte || '')}</span></td><td class="r">${esc(r.cifra)}</td></tr>`).join('')}
          <tr><td><b style="color:var(--t1)">Resta</b></td><td class="r"><b style="color:var(--gold)">${esc(borsa.cifra)}</b></td></tr></table></div></details>` : ''}`;
      wrap.appendChild(c);
    }

    // ── schede
    let sel = 'tutti';
    const chips = document.createElement('div'); chips.className = 'ia-chips'; wrap.appendChild(chips);
    const tools = document.createElement('div'); tools.className = 'ia-tools';
    tools.innerHTML = `<input type="search" placeholder="Cerca un oggetto…"><label><input type="checkbox"> persi e venduti</label>`;
    wrap.appendChild(tools);
    const q = tools.querySelector('input[type=search]'), cP = tools.querySelector('input[type=checkbox]');
    q.oninput = draw; cP.onchange = draw;
    const body = document.createElement('div'); wrap.appendChild(body);

    function drawChips() {
      const lista = [{ id: 'tutti', nome: 'Tutti', colore: 'var(--gold)', iniziali: '∑' }, ...port.filter(p => p.id !== 'gruppo')];
      chips.innerHTML = lista.map(p => `<button class="ia-chip${sel === p.id ? ' on' : ''}" data-id="${p.id}">${dot(p)}${esc(p.nome)}</button>`).join('');
      chips.querySelectorAll('.ia-chip').forEach(b => b.onclick = () => { sel = b.dataset.id; drawChips(); draw(); });
    }

    function rigaOgg(o) {
      const badge = (o.stato === 'magico' ? '<span class="b mag" title="Dono di Furiosa">✦</span>' : '')
        + (o.stato === 'reperto' ? '<span class="b rep" title="Reperto">◆</span>' : '')
        + (o.stato === 'prestito' ? '<span class="b" title="In prestito">↔</span>' : '')
        + (o.verificare ? '<span class="b ver" title="Da verificare">?</span>' : '');
      const val = o.v ? monete(o.v.mid) : o.stato === 'magico' || o.stato === 'reperto' ? '<span class="ia-pers">non in vendita</span>' : o.stato === 'perso' ? '' : '<span class="ia-pers">personale</span>';
      const peso = o.peso ? kg(o.peso * o.qta) : '';
      const desc = o.desc || (INV.descrizioni || {})[o.nome];
      const det = [
        desc ? `<span style="color:var(--t1)">${esc(desc)}</span>` : '',
        o.qta > 1 && o.costo ? `${esc(o.costo)} l'uno` : '',
        o.note ? esc(o.note) : '',
        o.durata ? `⧗ Si conserva: ${esc(o.durata)}` : '',
        dove(o) ? `Dove: ${ZONE[dove(o)].t.toLowerCase()}` : '',
        o.fonte ? `<i>${esc(o.fonte)}</i>` : ''
      ].filter(Boolean);
      return `<details class="ia-it${o.stato === 'perso' ? ' ia-perso' : ''}"><summary>
          <span class="ia-it-n">${esc(o.nome)}${badge}</span>${o.qta > 1 ? `<span class="ia-it-q">×${o.qta}</span>` : ''}
          <span class="ia-it-v">${val}${peso ? `<small>${peso}</small>` : ''}</span></summary>
          <div class="ia-it-d">${det.map(d => `<span>${d}</span>`).join('')}</div></details>`;
    }

    function distribuzione(p, its) {
      const z = {};
      its.filter(o => o.peso && o.stato !== 'perso').forEach(o => { const d = dove(o); (z[d] = z[d] || []).push(o); });
      const ord = ['addosso', 'sella', 'bisacce', 'rotolo', 'appeso', 'basto', 'ceste', 'carro'].filter(k => z[k]);
      if (!ord.length) return '';
      return `<details class="ia-sec"><summary>Come è caricato<span class="ia-right">${ord.length} posti</span></summary><div class="ia-list">
        ${ord.map(k => {
          const w = z[k].reduce((a, o) => a + o.peso * o.qta, 0), mx = ZONE[k].max;
          const col = mx && w > mx ? 'var(--red)' : 'var(--t1)';
          return `<div class="ia-zone"><span>${ZONE[k].ico} ${ZONE[k].t}</span><b style="color:${col}">${kg(w)}${mx ? ' su ' + mx : ''}</b></div>
            <div class="ia-zlist">${z[k].map(o => esc(o.nome) + (o.qta > 1 ? ' ×' + o.qta : '')).join(' · ')}</div>`;
        }).join('')}</div></details>`;
    }

    function scheda(p) {
      const s = stats(p.id);
      const s2 = q.value.trim().toLowerCase();
      const its = s.its.concat(cP.checked ? items.filter(o => o.chi === p.id && o.stato === 'perso') : [])
        .filter(o => !s2 || [o.nome, o.note, o.fonte, o.durata, CAT[o.cat]].join(' ').toLowerCase().includes(s2));
      const den = s.den.filter(d => d !== borsa);
      let h = `<div class="ia-card"><div class="ia-head">${dot(p)}<div><div class="ia-name">${esc(p.nome)}</div>
          <div class="ia-sub">${p.giocatore ? esc(p.giocatore) + ' · ' : ''}${s.its.length} oggetti</div></div>
          <div class="ia-right"><div style="color:var(--gold)">${s.ogg ? monete(s.ogg) : '—'}</div><div class="ia-sub">valore comprato</div></div></div>
          ${barra(p, s)}
          ${den.map(d => `<div class="ia-sub" style="margin-top:.4rem">💰 ${esc(d.nome)}: <b style="color:var(--t1)">${d.v ? monete(d.v.mid) : 'da contare'}</b>${d.note ? ' — ' + esc(d.note) : ''}</div>`).join('')}
        </div>`;
      if (!s2) h += distribuzione(p, s.its);
      const perCat = {};
      its.forEach(o => (perCat[o.cat || 'altro'] = perCat[o.cat || 'altro'] || []).push(o));
      const cats = CAT_ORD.filter(c => perCat[c]).concat(Object.keys(perCat).filter(c => !CAT[c]));
      h += cats.map((c, i) => {
        const l = perCat[c], w = l.reduce((a, o) => a + (o.peso || 0) * o.qta, 0);
        return `<details class="ia-sec"${s2 || i === 0 ? ' open' : ''}><summary>${esc(CAT[c] || c)}<span class="ia-right">${l.length}${w ? ' · ' + kg(w) : ''}</span></summary>
          <div class="ia-list">${l.map(rigaOgg).join('')}</div></details>`;
      }).join('');
      if (!its.length) h += '<div class="ia-sub" style="padding:.5rem 0">Nessun oggetto corrisponde alla ricerca.</div>';
      return h;
    }

    function panoramica() {
      const s2 = q.value.trim().toLowerCase();
      if (s2) return port.map(p => {
        const n = items.filter(o => o.chi === p.id && (cP.checked || o.stato !== 'perso') && [o.nome, o.note, o.fonte].join(' ').toLowerCase().includes(s2));
        return n.length ? `<details class="ia-sec" open><summary>${dot(p)} ${esc(p.nome)}<span class="ia-right">${n.length}</span></summary><div class="ia-list">${n.map(rigaOgg).join('')}</div></details>` : '';
      }).join('') || '<div class="ia-sub">Nessun oggetto corrisponde alla ricerca.</div>';
      return `<div class="ia-grid">${port.filter(p => p.id !== 'gruppo').map(p => {
        const s = stats(p.id);
        return `<div class="ia-card" data-id="${p.id}"><div class="ia-head">${dot(p)}<div class="ia-name">${esc(p.nome)}</div>
          <div class="ia-right" style="color:var(--gold)">${s.ogg ? monete(s.ogg) : '—'}</div></div>
          ${barra(p, s) || `<div class="ia-sub" style="margin-top:.4rem">${s.its.length} oggetti</div>`}</div>`;
      }).join('')}</div>`
      + (() => { const g = items.filter(o => o.chi === 'gruppo' && (cP.checked || o.stato !== 'perso'));
          return g.length ? `<details class="ia-sec" style="margin-top:.8rem"><summary>Del gruppo<span class="ia-right">${g.length}</span></summary><div class="ia-list">${g.map(rigaOgg).join('')}</div></details>` : ''; })();
    }

    function draw() {
      body.innerHTML = sel === 'tutti' ? panoramica() : scheda(port.find(p => p.id === sel));
      body.querySelectorAll('.ia-grid .ia-card').forEach(c => c.onclick = () => { sel = c.dataset.id; drawChips(); draw(); wrap.scrollIntoView({ block: 'start' }); });
    }

    // ── note per il master
    const tail = document.createElement('div'); wrap.appendChild(tail);
    if (opts.master) tail.insertAdjacentHTML('beforeend', `<div class="ia-dm"><b style="color:var(--gold)">Come si aggiorna (solo master).</b> I dati stanno in <code>data_inventario.js</code> e si aggiornano a ogni trascrizione caricata: oggetti nuovi con prezzo (sigle del listino) e peso, quelli venduti o usati segnati <i>perso</i>, e una riga nei conti della borsa comune.</div>`);

    drawChips(); draw();
  };
})();
