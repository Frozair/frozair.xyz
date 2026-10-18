"use client";

import { useEffect, useId, useRef, useState } from "react";
import type { CSSProperties, KeyboardEvent } from "react";
import Link from "next/link";
import rosterSource from "../../../../public/stompy-acres/launch-roster.json";
import "./roster.css";

type HabitatRating = "strong" | "conditional" | "mismatch" | "fictional";

interface Habitat {
  rating: HabitatRating;
  confidence: "high" | "medium" | "low" | "na";
  evidence: string;
  caveat: string;
  recommendation: string;
  sources: { title: string; url: string }[];
}

interface Species {
  id: string;
  name: string;
  image: string;
  recommended: boolean;
  role: string;
  status: string;
  rationale: string;
  note: string;
  viewBox?: string;
  sourceWidth?: number;
  sourceHeight?: number;
  clipPolygon?: string;
  moveNote?: string;
  habitat?: Habitat;
}

interface Island {
  id: string;
  name: string;
  subtitle: string;
  color: string;
  tint: string;
  quota: number;
  image?: string;
  habitatBrief?: string;
  species: Species[];
}

interface Roster {
  schemaVersion: number;
  asOf: string;
  targetDate: string;
  totalTarget: number;
  selectionVersion: string;
  islands: Island[];
  revisionNote?: string;
  changeNotes?: { label: string; detail: string }[];
  habitatReview?: {
    asOf: string;
    title: string;
    note: string;
    definitions: { island: string; detail: string }[];
  };
}

const roster = rosterSource as Roster;
const allSpecies = roster.islands.flatMap(island => island.species);
const recommended = allSpecies.filter(species => species.recommended).map(species => species.id);
const coverCreature = allSpecies.find(species => species.id === "rex") ?? allSpecies[0];
const validIds = new Set(allSpecies.map(species => species.id));
const storageKey = `stompy-acres-roster-${roster.selectionVersion}`;
const habitatRatings: { id: HabitatRating; label: string; mark: string }[] = [
  { id: "strong", label: "Good broad fit", mark: "✓" },
  { id: "conditional", label: "Conditional or uncertain", mark: "?" },
  { id: "mismatch", label: "Reconsider island", mark: "!" },
  { id: "fictional", label: "Fictional", mark: "✦" },
];

function HabitatAssessment({ habitat, speciesName }: { habitat: Habitat; speciesName: string }) {
  const rating = habitatRatings.find(item => item.id === habitat.rating) ?? habitatRatings[1];
  return <div className={`sr-habitat-assessment is-${rating.id}`}>
    <p className="sr-habitat-badge"><span aria-hidden="true">{rating.mark}</span><span>{rating.label}</span></p>
    <p className="sr-habitat-recommendation">{habitat.recommendation}</p>
    <details className="sr-habitat-evidence">
      <summary>Habitat evidence <span aria-hidden="true">+</span></summary>
      <div><p>{habitat.evidence}</p>{habitat.caveat && <p><strong>Limit:</strong> {habitat.caveat}</p>}<p className="sr-habitat-confidence"><strong>Evidence confidence:</strong> {habitat.confidence === "na" ? "not applicable" : habitat.confidence}. This is not certainty of survival.</p>
        {habitat.sources.length > 0 && <ul aria-label={`${speciesName} habitat sources`}>{habitat.sources.map(source => <li key={source.url}><a href={source.url} target="_blank" rel="noopener noreferrer">{source.title}<span className="sr-source-external" aria-hidden="true"> ↗</span><span className="sr-visually-hidden"> (opens in a new tab)</span></a></li>)}</ul>}
      </div>
    </details>
  </div>;
}

function Arrow({ diagonal = false }: { diagonal?: boolean }) {
  return <svg viewBox="0 0 24 24" width="19" height="19" fill="none" aria-hidden="true"><path d={diagonal ? "M6 18 18 6M6 6h12v12" : "M5 12h14m-5-5 5 5-5 5"} stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" /></svg>;
}

function Check({ selected }: { selected: boolean }) {
  return <svg viewBox="0 0 20 20" width="20" height="20" fill="none" aria-hidden="true"><path d={selected ? "m4.5 10 3.6 3.6 7.4-7.4" : "M5 10h10"} stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>;
}

function CreatureArt({ species, enlarged = false }: { species: Species; enlarged?: boolean }) {
  const clipId = `sr-art-${useId().replace(/:/g, "")}`;
  const width = species.sourceWidth ?? 600;
  const height = species.sourceHeight ?? 600;
  const [cropX, cropY, cropWidth, cropHeight] = (species.viewBox ?? `0 0 ${width} ${height}`).split(" ").map(Number);
  return <svg className="sr-creature-portrait" viewBox={species.viewBox ?? `0 0 ${width} ${height}`} preserveAspectRatio="xMidYMid meet" role="img" aria-label={`${species.name} character artwork${enlarged ? ", enlarged" : ""}`}>
    <defs><clipPath id={clipId} clipPathUnits="userSpaceOnUse">{species.clipPolygon ? <polygon points={species.clipPolygon} /> : <rect x={cropX} y={cropY} width={cropWidth} height={cropHeight} />}</clipPath></defs>
    <image href={species.image} width={width} height={height} clipPath={`url(#${clipId})`} />
  </svg>;
}

function CreatureCard({ species, selected, onToggle, onZoom, island }: { species: Species; selected: boolean; onToggle: () => void; onZoom: () => void; island: Island }) {
  return <article className={`sr-creature ${selected ? "is-kept" : "is-benched"}`} style={{ "--sr-island-color": island.color, "--sr-island-tint": island.tint } as CSSProperties}>
    <div className="sr-creature-art">
      <span className={`sr-pick-badge ${species.recommended ? "is-recommended" : ""}`}>{species.recommended ? <><span aria-hidden="true">✦</span> Launch draft</> : "Alternate"}</span>
      <button type="button" className="sr-zoom" onClick={onZoom} aria-label={`Enlarge ${species.name} artwork`}><svg width="17" height="17" viewBox="0 0 20 20" fill="none" aria-hidden="true"><path d="M12.5 3.5h4v4m0-4L11 9m-3.5 7.5h-4v-4m0 4L9 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg></button>
      <CreatureArt species={species} />
      <span className="sr-creature-ground" aria-hidden="true" />
    </div>
    <div className="sr-creature-info"><h3 className={species.name.length > 15 ? "sr-long-name" : undefined}>{species.name}</h3><p className="sr-creature-role">{species.role}</p><span className="sr-status-badge">Art status: {species.status}</span>{species.moveNote && <span className={`sr-move-note ${species.moveNote.toLowerCase().includes("proposed") ? "is-proposed" : "is-requested"}`}>{species.moveNote}</span>}
      {species.habitat && <HabitatAssessment habitat={species.habitat} speciesName={species.name} />}
      <button type="button" className="sr-keep-toggle" aria-pressed={selected} aria-label={`${selected ? "Bench" : "Keep"} ${species.name}`} onClick={onToggle}><span className="sr-toggle-check"><Check selected={selected} /></span><span>{selected ? "Kept in this draft" : "On the bench"}</span><span className="sr-toggle-action">{selected ? "Bench" : "Keep"}</span></button>
      <details className="sr-creature-notes"><summary>Art &amp; casting notes <span aria-hidden="true">+</span></summary><div><p className="sr-art-status"><span />{species.status}</p>{species.rationale && <p>{species.rationale}</p>}{species.note && <p>{species.note}</p>}</div></details>
    </div>
  </article>;
}

export default function LaunchRosterPage() {
  const [view, setView] = useState("launch");
  const [selected, setSelected] = useState<string[]>(recommended);
  const [loaded, setLoaded] = useState(false);
  const [saveState, setSaveState] = useState("Loading your draft…");
  const [notice, setNotice] = useState("");
  const [zoomed, setZoomed] = useState<Species | null>(null);
  const [copyFallback, setCopyFallback] = useState("");
  const zoomDialog = useRef<HTMLDialogElement>(null);
  const copyDialog = useRef<HTMLDialogElement>(null);
  const fallbackText = useRef<HTMLTextAreaElement>(null);
  const selectedSet = new Set(selected);
  const tabs = [{ id: "launch", name: "All islands" }, ...roster.islands];
  const perIslandTarget = roster.totalTarget / roster.islands.length;
  const selectedCount = selected.length;
  const onTarget = selectedCount === roster.totalTarget;
  const aboveTarget = selectedCount > roster.totalTarget;
  const changedCount = allSpecies.filter(species => selectedSet.has(species.id) !== species.recommended).length;
  const islandsToShow = view === "launch" ? roster.islands : roster.islands.filter(island => island.id === view);

  useEffect(() => {
    try {
      const stored = window.localStorage.getItem(storageKey);
      if (stored) {
        const draft: unknown = JSON.parse(stored);
        if (draft && typeof draft === "object" && "selection" in draft && Array.isArray(draft.selection)) {
          setSelected(Array.from(new Set(draft.selection.filter((id): id is string => typeof id === "string" && validIds.has(id)))));
        }
      }
    } catch { /* Keep the recommendation if a browser blocks storage or a draft is invalid. */ }
    setLoaded(true);
  }, []);

  useEffect(() => {
    if (!loaded) return;
    try {
      window.localStorage.setItem(storageKey, JSON.stringify({ schemaVersion: 1, selection: selected, savedAt: new Date().toISOString() }));
      setSaveState("Draft saved on this device");
    } catch {
      setSaveState("Storage unavailable · export to keep your draft");
    }
  }, [selected, loaded]);

  useEffect(() => {
    if (!notice) return;
    const timer = window.setTimeout(() => setNotice(""), 4500);
    return () => window.clearTimeout(timer);
  }, [notice]);

  useEffect(() => {
    if (zoomed) zoomDialog.current?.showModal();
  }, [zoomed]);

  useEffect(() => {
    if (!copyFallback) return;
    copyDialog.current?.showModal();
    fallbackText.current?.focus();
    fallbackText.current?.select();
  }, [copyFallback]);

  function toggleSpecies(id: string) {
    setSelected(current => current.includes(id) ? current.filter(item => item !== id) : [...current, id]);
  }

  function exportText() {
    return [
      `Stompy Acres · launch roster draft`,
      `${new Intl.DateTimeFormat("en-US", { month: "long", day: "numeric", year: "numeric", timeZone: "UTC" }).format(new Date(`${roster.targetDate}T12:00:00Z`))} · ${selectedCount}/${roster.totalTarget} species selected${onTarget ? "" : " · count needs review"}`,
      "",
      ...roster.islands.flatMap(island => {
        const names = island.species.filter(species => selectedSet.has(species.id)).map(species => species.name);
        return [`${island.name} (${names.length}; target ${island.quota})`, names.length ? names.join(", ") : "No species selected", ""];
      }),
      ...(roster.revisionNote ? [roster.revisionNote, ""] : []),
      ...(roster.changeNotes?.flatMap(change => [`${change.label}: ${change.detail}`]) ?? []),
      "Draft for discussion. Selections do not change the game or the shared release plan.",
    ].join("\n");
  }

  async function copySelections() {
    const value = exportText();
    try {
      await navigator.clipboard.writeText(value);
      setNotice("Roster draft copied. Paste it into our chat to make the call.");
    } catch {
      setCopyFallback(value);
    }
  }

  function downloadSelections() {
    const url = URL.createObjectURL(new Blob([exportText()], { type: "text/plain;charset=utf-8" }));
    const anchor = document.createElement("a");
    anchor.href = url;
    anchor.download = "stompy-acres-launch-roster-draft.txt";
    anchor.click();
    window.setTimeout(() => URL.revokeObjectURL(url), 1000);
    setNotice("Roster draft downloaded.");
  }

  function resetSelections() {
    setSelected([...recommended]);
    setNotice(`${roster.totalTarget}-species proposal restored on this device.`);
  }

  function handleTabKey(event: KeyboardEvent<HTMLButtonElement>, index: number) {
    let nextIndex = index;
    if (event.key === "ArrowRight") nextIndex = (index + 1) % tabs.length;
    else if (event.key === "ArrowLeft") nextIndex = (index - 1 + tabs.length) % tabs.length;
    else if (event.key === "Home") nextIndex = 0;
    else if (event.key === "End") nextIndex = tabs.length - 1;
    else return;
    event.preventDefault();
    setView(tabs[nextIndex].id);
    document.getElementById(`sr-tab-${tabs[nextIndex].id}`)?.focus();
  }

  return <article className="sr-roster">
    <a href="#sr-cast" className="sr-skip-link">Skip to the creature roster</a>
    <div className="sr-wrap">
      <header className="sr-header"><Link href="/apps/stompy-acres" className="sr-brand"><img src="/stompy-acres/icon.webp" alt="" width="46" height="46" /><span>Stompy Acres<small>RELEASE FIELD GUIDE / 02</small></span></Link><Link href="/apps/stompy-acres/roadmap" className="sr-roadmap-link">Release roadmap <Arrow /></Link></header>

      <section className="sr-hero" aria-labelledby="sr-title"><div className="sr-hero-copy"><p className="sr-eyebrow"><span className="sr-live-dot" /> THE DECEMBER 1 CASTING BOARD</p><h1 id="sr-title">Meet the cast.<br /><em>Find your favorites.</em></h1><p>{roster.islands.length} islands. <strong>{roster.totalTarget} launch species.</strong> Review every resident.</p><div className="sr-hero-key"><span><i className="sr-key-dot is-keep" />Keep for launch</span><span><i className="sr-key-dot is-bench" />Save for later</span></div><div className="sr-hero-actions"><a href="#sr-cast" className="sr-review-cast">Review launch cast <Arrow /></a>{roster.habitatReview && <a href="#sr-habitat" className="sr-review-cast sr-review-habitat">Habitat check <Arrow /></a>}</div></div>
        <aside className={`sr-cast-counter ${aboveTarget ? "is-over" : ""}`} aria-label="Current draft size"><p className="sr-eyebrow">YOUR LAUNCH DRAFT</p><div className="sr-counter-creature" aria-hidden="true"><CreatureArt species={coverCreature} /></div><div className="sr-counter-number"><strong>{selectedCount}</strong><span>/ {roster.totalTarget}<small>species</small></span></div><div className="sr-counter-slots" aria-hidden="true">{Array.from({ length: roster.totalTarget }, (_, index) => <span key={index} className={index < selectedCount ? "is-filled" : ""} />)}</div><p className="sr-counter-status">{onTarget ? <><Check selected />Draft matches the {roster.totalTarget}-species target</> : aboveTarget ? <><span aria-hidden="true">!</span>{selectedCount - roster.totalTarget} over the launch target</> : <><span aria-hidden="true">+</span>{roster.totalTarget - selectedCount} spots to fill</>}</p><span className="sr-counter-detail">{allSpecies.length} residents to review · {roster.islands.length} islands</span></aside>
      </section>

      <section className="sr-scope-band" aria-label="Confirmed launch size"><span className="sr-scope-icon" aria-hidden="true"><Check selected /></span><p><strong>{perIslandTarget}</strong> species per island <span className="sr-scope-symbol">×</span> <strong>{roster.islands.length}</strong> <span className="sr-scope-symbol">=</span> <strong>{roster.totalTarget}</strong> for launch</p><span className="sr-scope-confirmed">Launch size confirmed</span></section>
      {roster.habitatReview && <section id="sr-habitat" className="sr-habitat-review" aria-labelledby="sr-habitat-title">
        <div className="sr-habitat-review-heading"><div><p className="sr-eyebrow">EVERY RESIDENT / HABITAT CHECK</p><h2 id="sr-habitat-title">{roster.habitatReview.title}</h2></div><p className="sr-habitat-date">Reviewed {new Intl.DateTimeFormat("en-US", { month: "short", day: "numeric", year: "numeric", timeZone: "UTC" }).format(new Date(`${roster.habitatReview.asOf}T12:00:00Z`))}</p></div>
        <p className="sr-habitat-review-note">{roster.habitatReview.note}</p>
        <ul className="sr-habitat-totals" aria-label="Habitat assessment results">{habitatRatings.map(rating => <li key={rating.id} className={`is-${rating.id}`}><span className="sr-habitat-total-mark" aria-hidden="true">{rating.mark}</span><strong>{allSpecies.filter(species => species.habitat?.rating === rating.id).length}</strong><span>{rating.label}</span></li>)}</ul>
        <p className="sr-habitat-method">Ratings are game design judgments from incomplete fossil evidence, not proof of exact habitat or survival. The cast spans different places and eras; these animals did not all coexist.</p>
        {roster.habitatReview.definitions?.length > 0 && <details className="sr-habitat-definitions"><summary>What each island means for this check <span aria-hidden="true">+</span></summary><dl>{roster.habitatReview.definitions.map(definition => <div key={definition.island}><dt>{definition.island}</dt><dd>{definition.detail}</dd></div>)}</dl></details>}
      </section>}
      {(roster.revisionNote || Boolean(roster.changeNotes?.length)) && <details className="sr-revision-history"><summary>Previous casting proposals <span aria-hidden="true">+</span></summary><section className="sr-revision-panel" aria-labelledby="sr-revision-title"><div className="sr-revision-heading"><p className="sr-eyebrow">ISLAND HOMES / REVIEW DRAFT</p><h2 id="sr-revision-title">The island reshuffle.</h2>{roster.revisionNote && <p>{roster.revisionNote}</p>}</div>{Boolean(roster.changeNotes?.length) && <div className="sr-change-notes">{roster.changeNotes?.map(change => <article key={change.label}><h3>{change.label}</h3><p>{change.detail}</p></article>)}</div>}</section></details>}

      <div className="sr-draft-note"><span><span className="sr-save-dot" />{saveState}</span><p>The species placements below are a review draft. Tap <b>Bench</b> or <b>Keep</b>, then copy your cast into our chat.</p></div>

      <nav className="sr-island-navigation" aria-label="Roster views"><div className="sr-island-tabs" role="tablist" aria-label="Choose a roster view">{tabs.map((tab, index) => {
        const island = index ? roster.islands[index - 1] : null;
        const count = island ? island.species.filter(species => selectedSet.has(species.id)).length : selectedCount;
        return <button key={tab.id} type="button" id={`sr-tab-${tab.id}`} role="tab" aria-selected={view === tab.id} aria-controls="sr-roster-panel" tabIndex={view === tab.id ? 0 : -1} onClick={() => setView(tab.id)} onKeyDown={event => handleTabKey(event, index)} className={`sr-island-tab ${view === tab.id ? "is-active" : ""}`} style={{ "--sr-tab-color": island?.color ?? "#315b3c", "--sr-tab-tint": island?.tint ?? "#e5ebd8" } as CSSProperties}>
          <span className="sr-tab-mark" aria-hidden="true">{index ? `0${index}` : <svg width="21" height="21" viewBox="0 0 22 22" fill="none"><rect x="3" y="3" width="6" height="6" rx="1.5" fill="currentColor" /><rect x="13" y="3" width="6" height="6" rx="1.5" fill="currentColor" /><rect x="3" y="13" width="6" height="6" rx="1.5" fill="currentColor" /><rect x="13" y="13" width="6" height="6" rx="1.5" fill="currentColor" /></svg>}</span><span className="sr-tab-name">{tab.name}<small>{island ? `${island.species.length} residents` : `${roster.islands.length} island rosters`}</small></span><span className="sr-tab-count">{count}<small>/{island?.quota ?? roster.totalTarget}</small></span>
        </button>;
      })}</div><div className="sr-navigation-foot"><span>Launch target: {perIslandTarget} species on every island.</span><span><i aria-hidden="true">✦</i> Draft residents are preselected</span></div></nav>

      <div id="sr-cast" className="sr-cast-anchor" />
      <div id="sr-roster-panel" role="tabpanel" aria-labelledby={`sr-tab-${view}`} tabIndex={0}>
        {islandsToShow.map((island, islandIndex) => {
          const count = island.species.filter(species => selectedSet.has(species.id)).length;
          const speciesToShow = island.species;
          const needsReview = count !== island.quota;
          return <section className="sr-island-section" key={island.id} style={{ "--sr-island-color": island.color, "--sr-island-tint": island.tint } as CSSProperties} aria-labelledby={`sr-island-${island.id}`}>
            <div className="sr-island-heading"><div className="sr-island-heading-copy"><p className="sr-eyebrow">ISLAND {String(roster.islands.findIndex(item => item.id === island.id) + 1).padStart(2, "0")} / THE PROPOSED CAST</p><h2 id={`sr-island-${island.id}`}>{island.name}<span className={`sr-island-total ${needsReview ? "is-over" : ""}`}>{count}<small> / {island.quota}</small><span>selected / target</span></span></h2><p>{island.subtitle}</p></div>{island.image && <img src={island.image} className="sr-island-scenery" alt={`${island.name} island concept`} width="650" height="320" loading={islandIndex ? "lazy" : "eager"} />}</div>
            {island.habitatBrief && <p className="sr-island-habitat-brief"><strong>Habitat:</strong> {island.habitatBrief}</p>}
            <div className="sr-creature-grid">{speciesToShow.map(species => <CreatureCard key={species.id} species={species} island={island} selected={selectedSet.has(species.id)} onToggle={() => toggleSpecies(species.id)} onZoom={() => setZoomed(species)} />)}</div>
            {view === "launch" && <button className="sr-browse-island" type="button" onClick={() => { setView(island.id); document.getElementById("sr-cast")?.scrollIntoView({ block: "start", behavior: "auto" }); document.getElementById(`sr-tab-${island.id}`)?.focus({ preventScroll: true }); }}>Review the {island.name} cast <Arrow /></button>}
            {view !== "launch" && <p className="sr-island-help">{island.quota} species is the launch target for {island.name}. Island moves marked “Proposed new home” still need your review.</p>}
          </section>;
        })}
      </div>

      <section className="sr-final-note"><span aria-hidden="true">✦</span><div><h2>A first cast worth falling in love with.</h2><p>Accepted concepts; illustration sizes are not runtime scale. Casting a creature here does not confirm its game readiness. Open a card’s notes for the art and implementation status.</p></div><Link href="/apps/stompy-acres/roadmap">Back to the release plan <Arrow /></Link></section>
      <footer className="sr-footer"><span>STOMPY ACRES / RELEASE CASTING</span><span>Art &amp; evidence snapshot · {new Intl.DateTimeFormat("en-US", { month: "long", day: "numeric", year: "numeric", timeZone: "UTC" }).format(new Date(`${roster.asOf}T12:00:00Z`))}</span></footer>
    </div>

    <div className="sr-draft-dock"><div className="sr-draft-dock-inner"><div className={`sr-dock-tally ${aboveTarget ? "is-over" : ""}`}><span className="sr-dock-icon"><Check selected={onTarget} /></span><strong>{selectedCount}<small> / {roster.totalTarget}</small></strong><span>{onTarget ? `${roster.totalTarget}-species draft · review needed` : aboveTarget ? "Over target · review the cast" : `${roster.totalTarget - selectedCount} launch spots open`}<small>Local draft · share to decide</small></span></div><div className="sr-dock-actions"><button type="button" className="sr-reset" onClick={resetSelections} disabled={!loaded || changedCount === 0}>Reset picks</button><button type="button" className="sr-download" onClick={downloadSelections} disabled={!loaded} aria-label="Download roster draft as a text file"><svg width="19" height="19" viewBox="0 0 22 22" fill="none" aria-hidden="true"><path d="M11 3v10m-4-4 4 4 4-4M4 14v4h14v-4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg><span>Export</span></button><button type="button" className="sr-copy" onClick={copySelections} disabled={!loaded}>Copy my cast <Arrow /></button></div></div></div>
    <div className="sr-toast" role="status" aria-live="polite">{notice && <span>{notice}</span>}</div>

    <dialog ref={zoomDialog} className="sr-art-dialog" onClose={() => setZoomed(null)} onClick={event => { if (event.target === event.currentTarget) zoomDialog.current?.close(); }} aria-labelledby="sr-zoom-title">{zoomed && <div className="sr-art-dialog-inner"><button type="button" className="sr-dialog-close" onClick={() => zoomDialog.current?.close()} aria-label="Close artwork preview">×</button><CreatureArt species={zoomed} enlarged /><div><h2 id="sr-zoom-title">{zoomed.name}</h2><p>{zoomed.status}</p></div></div>}</dialog>
    <dialog ref={copyDialog} className="sr-copy-dialog" onClose={() => setCopyFallback("")} aria-labelledby="sr-copy-title"><button type="button" className="sr-dialog-close" onClick={() => copyDialog.current?.close()} aria-label="Close copy draft">×</button><h2 id="sr-copy-title">Your roster draft</h2><p>Copy the selected text and paste it into our chat.</p><textarea ref={fallbackText} value={copyFallback} readOnly aria-label="Roster draft to copy" rows={14} /><button type="button" className="sr-copy" onClick={() => copyDialog.current?.close()}>Done <Check selected /></button></dialog>
  </article>;
}
