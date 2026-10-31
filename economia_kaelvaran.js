// ============================================================
// economia_kaelvaran.js — disegna la sezione Economia
// Richiede data_economia_kaelvaran.js (KAELVARAN_ECO).
// Usato da furiosa.html e kaelvaran.html:
//   renderEconomiaKaelvaran(elemento, { registro: true, modifiche: true })
// I colori leggono le variabili CSS di entrambe le pagine.
// ============================================================

(function () {
  const VAL = {};
  if (typeof KAELVARAN_ECO !== 'undefined') KAELVARAN_ECO.valute.forEach(v => VAL[v.sigla] = v.valore);

  // ── Conversione «4 am», «1–5 ag», «5 am–1 ag», «1 ap + 2 bg», «~20 om»
  function parseCosto(str) {
    if (!str) return null;
    const s = String(str).replace(/≈|~/g, '').trim();
    const approx = /~|≈/.test(str);
    const open = /oltre|e più|\+$/.test(s);
    const rx = /(\d+(?:[.,]\d+)?)\s*(bp|bm|bg|ap|am|ag|op|om|og)\b/;
    const sum = part => {
      let tot = 0, ok = false;
      part.split('+').forEach(p => {
        const m = p.match(rx);
        if (m) { tot += parseFloat(m[1].replace(',', '.')) * VAL[m[2]]; ok = true; }
      });
      return ok ? tot : null;
    };
    if (s.includes('+')) { const v = sum(s); return v == null ? null : { min: v, max: v, approx, open }; }
    const parts = s.split(/\s*[–-]\s*/);
    if (parts.length === 2) {
      const b = parts[1].match(rx);
      if (!b) return null;
      let a = parts[0].match(rx);
      const lo = a ? parseFloat(a[1].replace(',', '.')) * VAL[a[2]] : parseFloat(parts[0]) * VAL[b[2]];
      const hi = parseFloat(b[1].replace(',', '.')) * VAL[b[2]];
      if (isNaN(lo)) return null;
      return { min: lo, max: hi, approx, open };
    }
    const v = sum(s);
    return v == null ? null : { min: v, max: v, approx, open };
  }

  const fmt = n => {
    if (n >= 1) return Math.round(n).toLocaleString('it-IT');
    return n.toLocaleString('it-IT', { maximumFractionDigits: 2 });
  };

  function equivalenza(costo) {
    const p = parseCosto(costo);
    if (!p) return '';
    const bp = p.min === p.max ? fmt(p.min) : fmt(p.min) + '–' + fmt(p.max);
    const g = p.max / 100;
    let lavoro = '';
    if (p.max >= 30000) {
      const a1 = p.min / 100 / 300, a2 = p.max / 100 / 300;
      const fa = x => x >= 10 ? fmt(x) : x.toLocaleString('it-IT', { maximumFractionDigits: 1 });
      lavoro = (a1 === a2 ? fa(a1) : fa(a1) + '–' + fa(a2)) + (a2 === 1 ? ' anno' : ' anni') + ' di lavoro';
    } else if (g >= 1) {
      lavoro = (p.min === p.max ? fmt(p.min / 100) : fmt(p.min / 100) + '–' + fmt(g)) + (g < 2 ? ' giornata' : ' giornate');
    } else {
      lavoro = 'meno di una giornata';
    }
    return `${p.approx ? '≈ ' : ''}${bp}${p.open ? '+' : ''} bp · ${lavoro}`;
  }

  // ── Stile (con fallback per le variabili delle due pagine)
  const CSS = `
.ecoK{--ek-gold:var(--gold,#c9a84c);--ek-gold-d:var(--gold-d,var(--gold-dim,#8a7333));--ek-gold-g:var(--gold-g,var(--gold-glow,rgba(201,168,76,.1)));
  --ek-t1:var(--t1,var(--text-primary,#e8e2d4));--ek-t2:var(--t2,var(--text-secondary,#b8b0a0));--ek-t3:var(--t3,var(--text-muted,#7a7468));
  --ek-card:var(--bg-card,#151a24);--ek-panel:var(--bg-panel,#111520);--ek-bg:var(--bg,var(--bg-dark,#0c0f16));--ek-hover:var(--bg-hover,#1a2333);
  --ek-border:var(--border,rgba(90,130,190,.15));--ek-border-b:var(--border-b,var(--border-bright,rgba(90,130,190,.28)));
  --ek-amber:var(--amber,var(--accent-amber,#d4a04a));--ek-fd:var(--font-d,var(--font-display,serif));--ek-fb:var(--font-b,var(--font-body,serif));
  font-family:var(--ek-fb);color:var(--ek-t2);}
.ecoK .ek-intro{background:var(--ek-card);border:1px solid var(--ek-border);border-left:3px solid var(--ek-gold-d);border-radius:4px;padding:1rem 1.3rem;margin-bottom:1.4rem;font-size:15px;line-height:1.7;color:var(--ek-t2);}
.ecoK .ek-lbl{font-family:var(--ek-fd);font-size:10px;letter-spacing:.15em;text-transform:uppercase;color:var(--ek-gold);margin:1.6rem 0 .6rem;}
.ecoK .ek-valute{display:grid;grid-template-columns:repeat(auto-fill,minmax(150px,1fr));gap:.55rem;}
.ecoK .ek-valuta{background:var(--ek-card);border:1px solid var(--ek-border);border-radius:4px;padding:.7rem .9rem;}
.ecoK .ek-sigla{font-family:var(--ek-fd);font-size:16px;color:var(--ek-gold);font-weight:600;}
.ecoK .ek-nome{font-size:12.5px;color:var(--ek-t1);margin:.15rem 0;}
.ecoK .ek-vnote{font-size:11.5px;color:var(--ek-t3);font-style:italic;line-height:1.4;}
.ecoK .ek-monete{display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:.55rem;margin-top:.6rem;}
.ecoK .ek-moneta{background:var(--ek-card);border:1px solid var(--ek-border);border-radius:4px;padding:.7rem .95rem;font-size:13px;line-height:1.55;}
.ecoK .ek-moneta b{display:block;color:var(--ek-t1);font-family:var(--ek-fd);font-size:11px;letter-spacing:.08em;text-transform:uppercase;margin-bottom:.25rem;font-weight:600;}
.ecoK .ek-conv{background:var(--ek-card);border:1px solid var(--ek-border);border-radius:4px;padding:.9rem 1.2rem;}
.ecoK .ek-conv-row{display:flex;align-items:center;gap:.6rem;flex-wrap:wrap;margin-bottom:.5rem;}
.ecoK input.ek-in,.ecoK select.ek-sel,.ecoK input.ek-search{background:var(--ek-bg);border:1px solid var(--ek-border-b);border-radius:3px;padding:6px 10px;color:var(--ek-t1);font-family:var(--ek-fb);font-size:14px;outline:none;}
.ecoK input.ek-in{width:100px;}
.ecoK input.ek-in:focus,.ecoK select.ek-sel:focus,.ecoK input.ek-search:focus{border-color:var(--ek-gold-d);}
.ecoK .ek-conv-res{font-size:13px;line-height:1.9;color:var(--ek-t2);}
.ecoK .ek-conv-res span{color:var(--ek-gold);font-family:var(--ek-fd);font-size:11.5px;}
.ecoK .ek-conv-g{font-size:12px;color:var(--ek-t3);font-style:italic;margin-top:.2rem;}
.ecoK .ek-tw{overflow-x:auto;-webkit-overflow-scrolling:touch;border:1px solid var(--ek-border);border-radius:4px;background:var(--ek-card);}
.ecoK table{width:100%;border-collapse:collapse;font-size:13px;}
.ecoK th{font-family:var(--ek-fd);font-size:9px;letter-spacing:.15em;text-transform:uppercase;color:var(--ek-t3);padding:.55rem .8rem;text-align:left;border-bottom:1px solid var(--ek-border);background:var(--ek-panel);white-space:nowrap;}
.ecoK td{padding:.5rem .8rem;border-bottom:1px solid var(--ek-border);color:var(--ek-t2);vertical-align:top;line-height:1.45;}
.ecoK tr:last-child td{border-bottom:none;}
.ecoK tbody tr:hover td{background:var(--ek-hover);}
.ecoK td.ek-n{color:var(--ek-t1);min-width:150px;}
.ecoK td.ek-c{font-family:var(--ek-fd);font-size:11.5px;color:var(--ek-amber);white-space:nowrap;}
.ecoK td.ek-e{font-size:11px;color:var(--ek-t3);white-space:nowrap;}
.ecoK td.ek-note{font-size:11.5px;color:var(--ek-t3);font-style:italic;min-width:160px;}
.ecoK .ek-gioco{display:inline-block;margin-left:.35rem;padding:0 .4rem;border:1px solid var(--ek-gold-d);border-radius:9px;font-family:var(--ek-fd);font-size:9px;letter-spacing:.06em;color:var(--ek-gold);font-style:normal;vertical-align:1px;white-space:nowrap;}
.ecoK .ek-fonte{display:block;font-style:normal;color:var(--ek-gold-d);font-size:10.5px;margin-top:.15rem;}
.ecoK .ek-tabs{display:flex;flex-wrap:wrap;gap:.35rem;margin:.6rem 0 .9rem;}
.ecoK .ek-tab{padding:5px 11px;background:none;border:1px solid var(--ek-border);border-radius:3px;color:var(--ek-t2);font-family:var(--ek-fb);font-size:13px;cursor:pointer;}
.ecoK .ek-tab:hover{color:var(--ek-t1);border-color:var(--ek-border-b);}
.ecoK .ek-tab.on{color:var(--ek-gold);border-color:var(--ek-gold-d);background:var(--ek-gold-g);}
.ecoK input.ek-search{width:100%;margin-bottom:.2rem;}
.ecoK .ek-opts{display:flex;align-items:center;gap:.5rem;font-size:12.5px;color:var(--ek-t3);margin:.5rem 0 0;cursor:pointer;user-select:none;}
.ecoK .ek-cat{font-family:var(--ek-fd);font-size:10px;letter-spacing:.14em;text-transform:uppercase;color:var(--ek-t3);margin:1.1rem 0 .4rem;}
.ecoK .ek-empty{padding:1.2rem;text-align:center;color:var(--ek-t3);font-style:italic;}
.ecoK ul.ek-mod{margin:.2rem 0 0 1.1rem;font-size:13px;line-height:1.6;}
.ecoK ul.ek-mod li{margin-bottom:.35rem;}
.ecoK .ek-foot{font-size:11.5px;color:var(--ek-t3);font-style:italic;margin-top:1.2rem;}
@media (max-width:680px){.ecoK td,.ecoK th{padding:.45rem .55rem;}.ecoK td.ek-e{white-space:normal;min-width:110px;}}
`;

  function injectCSS() {
    if (document.getElementById('ecoK-css')) return;
    const st = document.createElement('style');
    st.id = 'ecoK-css'; st.textContent = CSS;
    document.head.appendChild(st);
  }

  const esc = t => String(t ?? '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

  window.renderEconomiaKaelvaran = function (root, opts = {}) {
    if (!root || typeof KAELVARAN_ECO === 'undefined') return;
    injectCSS();
    const eco = KAELVARAN_ECO;
    const w = document.createElement('div');
    w.className = 'ecoK';
    root.appendChild(w);
    const lbl = t => { const d = document.createElement('div'); d.className = 'ek-lbl'; d.textContent = t; w.appendChild(d); };

    if (eco.intro) { const d = document.createElement('div'); d.className = 'ek-intro'; d.textContent = eco.intro; w.appendChild(d); }

    // Monete
    lbl('Sistema monetario');
    const vg = document.createElement('div'); vg.className = 'ek-valute';
    vg.innerHTML = eco.valute.map(v => `<div class="ek-valuta"><div class="ek-sigla">${v.sigla.toUpperCase()}</div><div class="ek-nome">${esc(v.nome)}</div><div class="ek-vnote">${esc(v.note)}</div></div>`).join('');
    w.appendChild(vg);
    if (eco.monete?.length) {
      const mg = document.createElement('div'); mg.className = 'ek-monete';
      mg.innerHTML = eco.monete.map(m => `<div class="ek-moneta"><b>${esc(m.titolo)}</b>${esc(m.testo)}</div>`).join('');
      w.appendChild(mg);
    }

    // Convertitore
    lbl('Convertitore rapido');
    const cv = document.createElement('div'); cv.className = 'ek-conv';
    cv.innerHTML = `<div class="ek-conv-row"><input class="ek-in" type="number" min="0" value="1" aria-label="Quantità"><select class="ek-sel" aria-label="Moneta">${eco.valute.map(v => `<option value="${v.valore}"${v.sigla === 'am' ? ' selected' : ''}>${v.sigla.toUpperCase()} — ${esc(v.nome)}</option>`).join('')}</select></div><div class="ek-conv-res"></div><div class="ek-conv-g"></div>`;
    w.appendChild(cv);
    const inp = cv.querySelector('.ek-in'), sel = cv.querySelector('.ek-sel'), res = cv.querySelector('.ek-conv-res'), gg = cv.querySelector('.ek-conv-g');
    const upd = () => {
      const base = (parseFloat(inp.value) || 0) * parseFloat(sel.value);
      res.innerHTML = eco.valute.map(v => {
        const q = base / v.valore;
        if (q < 0.01) return null;
        const d = q >= 1 ? (Number.isInteger(q) ? q.toLocaleString('it-IT') : q.toLocaleString('it-IT', { maximumFractionDigits: 2 })) : q.toLocaleString('it-IT', { maximumFractionDigits: 3 });
        return `<span>${v.sigla.toUpperCase()}</span> ${d}`;
      }).filter(Boolean).join(' &nbsp;·&nbsp; ');
      const g = base / 100;
      gg.textContent = base ? (g >= 300 ? `Circa ${(g / 300).toLocaleString('it-IT', { maximumFractionDigits: 1 })} anni di lavoro di un bracciante (${Math.round(g).toLocaleString('it-IT')} giornate).` : g >= 1 ? `Circa ${g.toLocaleString('it-IT', { maximumFractionDigits: 1 })} giornate di lavoro di un bracciante.` : 'Meno di una giornata di lavoro di un bracciante.') : '';
    };
    inp.oninput = upd; sel.onchange = upd; upd();

    // Salari
    lbl('Salari di riferimento');
    const sw = document.createElement('div'); sw.className = 'ek-tw';
    sw.innerHTML = `<table><thead><tr><th>Ruolo</th><th>Al giorno</th><th>Al mese</th><th>Note</th></tr></thead><tbody>${eco.salari.map(s => `<tr><td class="ek-n">${esc(s.ruolo)}</td><td class="ek-c">${esc(s.giorno)}</td><td class="ek-c">${esc(s.mese)}</td><td class="ek-note">${esc(s.note)}</td></tr>`).join('')}</tbody></table>`;
    w.appendChild(sw);

    // Listino
    lbl('Listino prezzi');
    const search = document.createElement('input');
    search.className = 'ek-search'; search.type = 'text'; search.placeholder = '🔍 Cerca un oggetto o un servizio…';
    w.appendChild(search);
    const optL = document.createElement('label'); optL.className = 'ek-opts';
    optL.innerHTML = `<input type="checkbox"> Solo i prezzi detti in gioco <span class="ek-gioco">◆ gioco</span>`;
    w.appendChild(optL);
    const soloGioco = optL.querySelector('input');
    const tabs = document.createElement('div'); tabs.className = 'ek-tabs'; w.appendChild(tabs);
    const out = document.createElement('div'); w.appendChild(out);
    let active = 'tutti';

    const rowHTML = v => `<tr><td class="ek-n">${esc(v.nome)}${v.gioco ? '<span class="ek-gioco" title="Prezzo detto in gioco">◆ gioco</span>' : ''}</td><td class="ek-c">${esc(v.costo)}</td><td class="ek-e">${equivalenza(v.costo)}</td><td class="ek-note">${esc(v.note)}${v.gioco ? `<span class="ek-fonte">${esc(v.gioco)}</span>` : ''}</td></tr>`;

    function render() {
      const q = search.value.toLowerCase().trim();
      let n = 0, html = '';
      eco.categorie.forEach(cat => {
        if (active !== 'tutti' && cat.id !== active) return;
        const voci = cat.voci.filter(v => (!soloGioco.checked || v.gioco) && (!q || (v.nome + ' ' + v.note + ' ' + v.costo + ' ' + (v.gioco || '')).toLowerCase().includes(q)));
        if (!voci.length) return;
        n += voci.length;
        if (active === 'tutti') html += `<div class="ek-cat">${cat.icona} ${esc(cat.nome)}</div>`;
        html += `<div class="ek-tw"><table><thead><tr><th>Oggetto / servizio</th><th>Costo</th><th>Equivale a</th><th>Note</th></tr></thead><tbody>${voci.map(rowHTML).join('')}</tbody></table></div>`;
      });
      out.innerHTML = n ? html : `<div class="ek-empty">Nessun risultato${q ? ` per «${esc(q)}»` : ''}.</div>`;
    }
    const mkTab = (id, label) => {
      const b = document.createElement('button');
      b.className = 'ek-tab' + (id === active ? ' on' : ''); b.textContent = label;
      b.onclick = () => { active = id; tabs.querySelectorAll('.ek-tab').forEach(x => x.classList.remove('on')); b.classList.add('on'); render(); };
      tabs.appendChild(b);
    };
    mkTab('tutti', '🗂 Tutte');
    eco.categorie.forEach(c => mkTab(c.id, c.icona + ' ' + c.nome));
    search.oninput = render; soloGioco.onchange = render;
    render();

    // Registro del tavolo
    if (opts.registro && eco.registro?.length) {
      lbl('Registro del tavolo — somme passate di mano in gioco');
      const rw = document.createElement('div'); rw.className = 'ek-tw';
      rw.innerHTML = `<table><thead><tr><th>Quando</th><th>Cosa</th><th>Cifra</th><th>Fonte</th></tr></thead><tbody>${eco.registro.map(r => `<tr><td class="ek-c">${esc(r.quando)}</td><td class="ek-n">${esc(r.cosa)}</td><td class="ek-c" style="white-space:normal">${esc(r.cifra)}</td><td class="ek-note">${esc(r.fonte)}</td></tr>`).join('')}</tbody></table>`;
      w.appendChild(rw);
    }

    if (opts.modifiche && eco.modifiche?.length) {
      lbl('Cosa cambia rispetto al vecchio listino di Tresil');
      const md = document.createElement('div'); md.className = 'ek-intro';
      md.innerHTML = `<ul class="ek-mod">${eco.modifiche.map(m => `<li>${esc(m)}</li>`).join('')}</ul>`;
      w.appendChild(md);
    }

    const ft = document.createElement('div'); ft.className = 'ek-foot';
    ft.textContent = `Listino aggiornato al ${eco.aggiornato}. Le voci ◆ gioco sono prezzi detti o pagati al tavolo; le altre sono stime sulla stessa scala. «Giornata» = la paga di un bracciante (1 bg); un anno di lavoro ≈ 300 giornate.`;
    w.appendChild(ft);
  };

  window.ecoKaelvaranEquivalenza = equivalenza; // utile per controlli
})();
