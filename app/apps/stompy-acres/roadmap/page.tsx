"use client";

import { useEffect, useState } from "react";
import type { CSSProperties } from "react";
import Link from "next/link";
import roadmapSource from "../../../../public/stompy-acres/release-roadmap.json";
import "./roadmap.css";

type CheckState = "implemented" | "partial" | "open";
type WorkLane = "now" | "next" | "later";
type Filter = WorkLane | "cut";
type ProductionStatus = "integrated" | "redo" | "missing";

interface Island {
  id: string;
  name: string;
  icon: string;
  color: string;
  liveSpecies: number;
  targetLabel: string;
  status: string;
  summary: string;
  ref: number;
  gateDate: string;
  gateLabel: string;
  checks: { label: string; state: CheckState; detail: string }[];
  next: string;
}

export interface ReleaseRoadmap {
  schemaVersion: number;
  title: string;
  subtitle: string;
  targetDate: string;
  asOf: string;
  nextReview: string;
  timezone: string;
  health: string;
  healthNote: string;
  scopeLabel: string;
  resourcesNote: string;
  releaseIslandCount: number;
  baseline: { version: string; wiredIslands: number; launchWiredIslands: number; signedOffIslands: number; liveSpecies: number; launchSpecies: number; launchHomeSpecies: number; note: string };
  northStar: string;
  weeklyPlan: {
    start: string; end: string; title: string; note: string;
    priorities: { id: string; title: string; owner: string; doneWhen: string; refs: number[] }[];
    days: { id: string; date: string; label: string; title: string; focus: string; proof: string }[];
    parking: string[];
    checkpoint: { date: string; title: string; pass: string; ifMiss: string };
    dependencies: string[];
  };
  firstWork: {
    title: string; note: string;
    items: { id: string; step: number; title: string; when: string; owner: string; refs: number[]; outcome: string; species: string[]; kind: "engine" | "art" | "operations" }[];
  };
  production: {
    title: string; note: string; total: number; existingBanks: number; missingBanks: number;
    integratedLooks: number; redoPackages: number; remainingPackages: number; minimumTotalPerWeek: number;
    accepted: number | null; freezeDate: string; daysToFreeze: number; minimumNewPerWeek: number;
    islands: { id: string; name: string; color: string; residents: { id: string; name: string; image?: string; bank: "available" | "missing"; productionStatus: ProductionStatus; detail: string }[] }[];
  };
  updatePolicy: { cadence: string; staleAfterDays: number; sourceLabel: string };
  islands: Island[];
  milestones: {
    id: string; title: string; start: string; end: string; dateLabel: string;
    state: "active" | "planned" | "complete" | "blocked"; outcome: string; owner: string; refs: number[]; gate: string;
  }[];
  work: {
    id: string; lane: WorkLane; title: string; owner: string; due: string;
    refs: number[]; status: string; why: string; doneWhen: string;
  }[];
  decisions: { title: string; due: string; recommendation: string; state: string }[];
  risks: { title: string; level: string; action: string; owner: string; due: string }[];
  launchGates: { label: string; state: "open" | "partial" | "passed"; proof: string }[];
  deferred: { title: string; reason: string }[];
  changes: { date: string; text: string }[];
  evidence: { label: string; detail: string }[];
}

const roadmap = roadmapSource as ReleaseRoadmap;
const productionLabels: Record<ProductionStatus, string> = { integrated: "approved look integrated in source", redo: "existing bank needs an asset redo", missing: "first complete source package pending" };
const stateLabels: Record<CheckState, string> = { implemented: "Built", partial: "In progress", open: "Needs proof" };
const filters: { value: Filter; label: string }[] = [
  { value: "now", label: "Now" }, { value: "next", label: "Next" },
  { value: "later", label: "Later" }, { value: "cut", label: "Scope cuts" },
];

function dateLabel(value: string, full = false) {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(value)) return value;
  return new Intl.DateTimeFormat("en-US", {
    month: full ? "long" : "short", day: "numeric", timeZone: "UTC",
  }).format(new Date(`${value}T12:00:00Z`));
}

function dayDifference(end: string, start: string) {
  return Math.round((Date.parse(`${end}T00:00:00Z`) - Date.parse(`${start}T00:00:00Z`)) / 86400000);
}

function DueDate({ value }: { value: string }) {
  return /^\d{4}-\d{2}-\d{2}$/.test(value) ? <time dateTime={value}>{dateLabel(value)}</time> : <span>{value}</span>;
}

function todayInZone(timeZone: string) {
  const parts = new Intl.DateTimeFormat("en-US", { timeZone, year: "numeric", month: "2-digit", day: "2-digit" }).formatToParts(new Date());
  return ["year", "month", "day"].map(type => parts.find(part => part.type === type)?.value).join("-");
}

function Arrow({ diagonal = false }: { diagonal?: boolean }) {
  return <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d={diagonal ? "M6 18 18 6M6 6h12v12" : "M4 12h15m-6-6 6 6-6 6"} stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>;
}

function BoardRefs({ refs }: { refs: number[] }) {
  if (refs.length === 0) return null;
  return <span className="sa-board-refs" aria-label={`Project board cards ${refs.map(ref => `number ${ref}`).join(", ")}`}>{refs.map(ref => <span key={ref}>#{ref}</span>)}</span>;
}

function IslandMap({ island }: { island: Island }) {
  const isSnow = island.id.includes("snow");
  const isLagoon = island.id.includes("lagoon");
  const isSwamp = island.id.includes("swamp");
  const isGiants = island.id.includes("giant");
  const top = isSnow ? "#f4f5e7" : isSwamp ? "#9aaa6b" : isLagoon ? "#e7d69e" : isGiants ? "#b4c482" : "#a3c36b";
  const tree = isSwamp ? "#4d6d52" : "#426548";
  return <svg className="sa-island-map" viewBox="0 0 240 140" role="img" aria-label={`${island.name} biome map illustration`}>
    <ellipse cx="120" cy="117" rx="78" ry="12" fill="#263c34" opacity=".08" />
    <ellipse cx="120" cy="104" rx="99" ry="27" fill={isSnow ? "#dbe9e9" : isLagoon ? "#a8dcd5" : "#c8e1d5"} opacity=".75" />
    <path d="m35 83 24-19 28-5 21-23 32 7 23 17 30 10 13 18-20 19-41 9-36-4-35 2-28-13z" fill={isSnow ? "#b6c9c1" : "#8e9b65"} />
    <path d="m35 76 24-19 28-5 21-23 32 7 23 17 30 10 13 18-20 19-41 9-36-4-35 2-28-13z" fill={top} />
    {isLagoon ? <><path d="M69 77c20-24 47-29 68-15 11 7 23 5 41 11-5 14-14 23-40 21-30-3-44 2-69-17" fill="#74c8be" /><path d="m81 69 24-8 23 1" stroke="#fff9e8" strokeWidth="3" fill="none" opacity=".7" /><path d="m60 65 0-20m0 5-11-4m11 1 10-6" stroke="#66815b" strokeWidth="4" strokeLinecap="round" /><path d="m172 66 0-20m0 5-11-5m11 2 11-5" stroke="#66815b" strokeWidth="4" strokeLinecap="round" /></> : <>
      <path d={isSnow ? "m103 74 24-40 28 43z" : isGiants ? "m104 70 24-41 28 45z" : "m111 70 16-22 24 26z"} fill={isSnow ? "#c5d4c5" : "#8c9b70"} />
      {isSnow ? <path d="m115 54 12-20 14 23-12-6-6 6z" fill="#fffdf3" /> : null}
      {[{ x: 66, y: 64, s: isGiants ? 1.2 : .9 }, { x: 87, y: 84, s: .9 }, { x: 159, y: 69, s: 1.1 }, { x: 175, y: 87, s: .8 }].map(({ x, y, s }, i) => <g key={i} transform={`translate(${x} ${y}) scale(${s})`}><path d="M0 4V-10" stroke="#647254" strokeWidth="4" strokeLinecap="round" /><path d="m-12-5 12-25L12-5z" fill={isSnow ? "#e5eee0" : tree} /><path d="m-10-14 10-17 10 17z" fill={isSnow ? "#fcfbf1" : "#5c8153"} /></g>)}
      {isSwamp ? <path d="M103 91c12-12 21-5 31-6s18-7 27 1c-10 12-24 5-34 11s-21 0-24-6" fill="#6eaaa0" /> : <path d="M108 100c8-10 10-19 7-26" stroke={isSnow ? "#cadce1" : "#e5d9ae"} strokeWidth="5" fill="none" strokeLinecap="round" />}
    </>}
    <circle cx="116" cy="87" r="6" fill="#f5bd7b" /><circle cx="124" cy="83" r="4" fill="#f5bd7b" /><path d="m113 92-2 4m9-4 2 4" stroke="#b68250" strokeWidth="2" strokeLinecap="round" />
  </svg>;
}

export default function ReleaseRoadmapPage() {
  const [filter, setFilter] = useState<Filter>("now");
  const [today, setToday] = useState(roadmap.asOf);
  useEffect(() => {
    const updateDate = () => setToday(todayInZone(roadmap.timezone));
    updateDate();
    const interval = window.setInterval(updateDate, 60000);
    return () => window.clearInterval(interval);
  }, []);
  const age = Math.max(0, dayDifference(today, roadmap.asOf));
  const stale = age > roadmap.updatePolicy.staleAfterDays || today > roadmap.nextReview;
  const daysLeft = Math.max(0, dayDifference(roadmap.targetDate, today));
  const tasks = roadmap.work.filter(task => task.lane === filter);
  const target = new Date(`${roadmap.targetDate}T12:00:00Z`);
  const targetMonth = new Intl.DateTimeFormat("en-US", { month: "short", timeZone: "UTC" }).format(target);

  return <article className="sa-roadmap">
    <a href="#sa-islands" className="sa-skip-link">Skip to island readiness</a>
    <div className="sa-roadmap-wrap">
      <header className="sa-roadmap-header">
        <Link href="/apps/stompy-acres" className="sa-roadmap-brand"><img src="/stompy-acres/icon.webp" alt="" width="46" height="46" /><span>Stompy Acres<small>RELEASE FIELD GUIDE / 01</small></span></Link>
        <Link href="/apps/stompy-acres" className="sa-back-link">The game <Arrow diagonal /></Link>
      </header>

      <section className="sa-roadmap-hero" aria-labelledby="sa-roadmap-title">
        <div className="sa-hero-copy"><p className="sa-eyebrow"><span className="sa-live-dot" /> THE ROAD TO RELEASE</p><h1 id="sa-roadmap-title">{roadmap.title}</h1><p className="sa-hero-subtitle">{roadmap.subtitle}</p><div className="sa-proposal"><span className="sa-diamond" /> {roadmap.scopeLabel}</div><Link href="/apps/stompy-acres/roster" className="sa-casting-link">View locked roster <Arrow /></Link></div>
        <div className="sa-date-card"><div className="sa-date-top"><span>TARGET RELEASE</span><span>{target.getUTCFullYear()}</span></div><div className="sa-date-display"><span>{targetMonth}</span><strong>{String(target.getUTCDate()).padStart(2, "0")}</strong><span className="sa-days-left"><b>{daysLeft}</b> days<br />to go</span></div><div className="sa-date-bottom"><span className="sa-health"><span />{roadmap.health}</span><span>Target, subject to release gates</span></div></div>
      </section>

      <div className="sa-freshness"><span className={stale ? "sa-freshness-state is-stale" : "sa-freshness-state"}><span />{stale ? "Review overdue" : "Evidence snapshot"}</span><span>Verified <time dateTime={roadmap.asOf}>{dateLabel(roadmap.asOf)}</time></span><span>Next review <time dateTime={roadmap.nextReview}>{dateLabel(roadmap.nextReview)}</time></span><a href="#sa-updates">How this stays current <Arrow /></a></div>

      <section id="sa-this-week" className="sa-week" aria-labelledby="sa-week-title">
        <div className="sa-section-heading"><div><p className="sa-eyebrow">THIS WEEK / {dateLabel(roadmap.weeklyPlan.start)}–{dateLabel(roadmap.weeklyPlan.end)}</p><h2 id="sa-week-title">{roadmap.weeklyPlan.title}</h2></div><span className="sa-week-proposal">Recommended focus</span></div>
        <p className="sa-week-note">{roadmap.weeklyPlan.note}</p>
        <div className="sa-week-outcomes" aria-label="Three outcomes to earn">{roadmap.weeklyPlan.priorities.map((priority, index) => <article key={priority.id}>
          <span className="sa-week-priority" aria-label={`Priority ${index + 1}`}>0{index + 1}</span><div><h3>{priority.title}</h3><footer><span>{priority.owner}</span><BoardRefs refs={priority.refs} /></footer><details><summary>Done when <span aria-hidden="true">+</span></summary><p>{priority.doneWhen}</p></details></div>
        </article>)}</div>
        <ol className="sa-week-days" aria-label="Daily focus plan">{roadmap.weeklyPlan.days.map((day, index) => <li key={day.id}>
          <div className="sa-week-day-top"><span>{day.label}</span><time dateTime={day.date}>{dateLabel(day.date)}</time></div><span className="sa-week-day-number" aria-hidden="true">0{index + 1}</span><h3>{day.title}</h3>
          <details><summary>Work + proof <span aria-hidden="true">+</span></summary><div><p><b>Focus</b>{day.focus}</p><p><b>Proof</b>{day.proof}</p></div></details>
        </li>)}</ol>
        <div className="sa-week-parking"><strong>Recommended pause</strong><ul>{roadmap.weeklyPlan.parking.map(item => <li key={item}>{item}</li>)}</ul></div>
        <div className="sa-week-checkpoint"><div><p className="sa-eyebrow">DECISION CHECKPOINT / <time dateTime={roadmap.weeklyPlan.checkpoint.date}>{dateLabel(roadmap.weeklyPlan.checkpoint.date)}</time></p><h3>{roadmap.weeklyPlan.checkpoint.title}</h3></div><div><p><b>Pass</b>{roadmap.weeklyPlan.checkpoint.pass}</p><p><b>If we miss</b>{roadmap.weeklyPlan.checkpoint.ifMiss}</p></div></div>
        <div className="sa-week-dependencies"><strong>Before we can prove it</strong><ul>{roadmap.weeklyPlan.dependencies.map(item => <li key={item}>{item}</li>)}</ul></div>
      </section>

      <section id="sa-first-work" className="sa-first-work" aria-labelledby="sa-first-work-title">
        <div className="sa-section-heading"><div><p className="sa-eyebrow">THE CAST IS LOCKED / START HERE</p><h2 id="sa-first-work-title">{roadmap.firstWork.title}</h2></div><a href="#sa-production" className="sa-section-link">See all 40 production needs <Arrow /></a></div>
        <div className="sa-first-work-grid">{roadmap.firstWork.items.map(item => <article key={item.id} className={`sa-first-card is-${item.kind}`}>
          <div className="sa-first-card-top"><span className="sa-first-number" aria-label={`Priority ${item.step}`}>{item.step}</span><span className="sa-first-when">{item.when}</span></div>
          <p className="sa-first-track">{({ engine: "PLAYABLE FOUNDATION", art: "CREATURE PRODUCTION", operations: "RELEASE FOUNDATIONS" })[item.kind]}</p><h3>{item.title}</h3>
          <p className="sa-first-outcome"><span>PROOF WE NEED</span>{item.outcome}</p>
          {item.species.length > 0 && <ul className="sa-first-species" aria-label="Focus species">{item.species.map(name => <li key={name}>{name}</li>)}</ul>}
          <div className="sa-first-owner"><span>{item.owner}</span><BoardRefs refs={item.refs} /></div>
        </article>)}</div>
        <p className="sa-first-note"><span aria-hidden="true">↗</span>{roadmap.firstWork.note}</p>
      </section>

      <section className="sa-overview" aria-label="Where we are now">
        <figure className="sa-game-preview"><img src="/stompy-acres/forest.webp" alt="Actual Stompy Acres gameplay, with dinosaurs roaming a leafy green island" width="1600" height="717" /><figcaption><span>THE WORLD IS ALREADY GROWING</span><span>Actual gameplay · early build</span></figcaption></figure>
        <div className="sa-baseline"><p className="sa-eyebrow">WHERE WE ARE</p><div className="sa-ready-number"><strong>{roadmap.baseline.signedOffIslands}<span> / {roadmap.releaseIslandCount}</span></strong><span>islands signed off</span></div><div className="sa-baseline-grid"><div><strong>{roadmap.baseline.launchWiredIslands}<small>/{roadmap.releaseIslandCount}</small></strong><span>launch islands in source</span></div><div><strong>{roadmap.baseline.launchSpecies}<small>/40</small></strong><span>source species defined</span></div></div><p className="sa-baseline-note">{roadmap.baseline.note}</p><span className="sa-version">BUILD {roadmap.baseline.version}</span></div>
      </section>

      <section id="sa-islands" className="sa-section" aria-labelledby="sa-islands-title">
        <div className="sa-section-heading"><div><p className="sa-eyebrow">01 / THE RELEASE ROSTER</p><h2 id="sa-islands-title">Five places worth discovering.</h2></div><a href="#sa-launch-gates" className="sa-section-link">What counts as ready <Arrow /></a></div>
        <div className="sa-readiness-legend" aria-label="Readiness key"><span><i className="sa-status-dot is-implemented" />Built</span><span><i className="sa-status-dot is-partial" />In progress</span><span><i className="sa-status-dot is-open" />Needs proof</span></div>
        <div className="sa-islands-grid">{roadmap.islands.map((island, index) => <article className="sa-island-card" key={island.id} style={{ "--island-accent": island.color } as CSSProperties}>
          <div className="sa-island-art"><span className="sa-island-number">0{index + 1}</span><IslandMap island={island} /><span className="sa-island-species">{island.liveSpecies} / 8 roster definitions</span></div><div className="sa-island-content"><h3>{island.name}</h3><p className="sa-island-status">{island.status}</p><div className="sa-island-checks">{island.checks.map(check => <span key={check.label} title={`${stateLabels[check.state]}: ${check.detail}`}><i className={`sa-status-dot is-${check.state}`} /><span>{check.label}<span className="sa-sr-only">: {stateLabels[check.state]}</span></span></span>)}</div><details className="sa-island-detail"><summary>{island.gateLabel} <span>{dateLabel(island.gateDate)}</span></summary><div><p>{island.summary}</p><p><b>Next:</b> {island.next}</p><ul>{island.checks.map(check => <li key={check.label}><b>{check.label}:</b> {check.detail}</li>)}</ul><p>{island.targetLabel}</p><BoardRefs refs={[island.ref]} /></div></details></div>
        </article>)}</div>
      </section>

      <section className="sa-section sa-plan-section" aria-labelledby="sa-plan-title"><div className="sa-section-heading"><div><p className="sa-eyebrow">02 / THE PATH TO DECEMBER</p><h2 id="sa-plan-title">Build. Prove. Ship.</h2></div><span className="sa-small-note">{roadmap.resourcesNote}</span></div><div className="sa-timeline" style={{ "--milestone-count": roadmap.milestones.length } as CSSProperties}>{roadmap.milestones.map((milestone, index) => <details key={milestone.id} className={`sa-milestone ${milestone.state === "active" ? "is-active" : ""}`}><summary><span className="sa-milestone-node">{index + 1}</span><span className="sa-milestone-date">{milestone.dateLabel}</span><strong>{milestone.title}</strong><span className="sa-milestone-state">{({ active: "IN FOCUS", planned: "PLANNED", complete: "COMPLETE", blocked: "BLOCKED" })[milestone.state]}</span><span className="sa-milestone-more">View gate <span>+</span></span></summary><div className="sa-milestone-detail"><p>{milestone.outcome}</p><p><b>Exit gate</b><br />{milestone.gate}</p><span>{milestone.owner}</span><BoardRefs refs={milestone.refs} /></div></details>)}</div><div className="sa-north-star"><span aria-hidden="true">✳</span><p>{roadmap.northStar}</p><span className="sa-north-star-label">THE NORTH STAR</span></div></section>

      <section className="sa-section" aria-labelledby="sa-work-title"><div className="sa-section-heading"><div><p className="sa-eyebrow">03 / THE DIRECTOR’S DESK</p><h2 id="sa-work-title">Keep the next move clear.</h2></div><span className="sa-small-note">{roadmap.healthNote}</span></div><div className="sa-work-filters" role="group" aria-label="Filter work by release horizon">{filters.map(item => <button key={item.value} type="button" aria-pressed={filter === item.value} onClick={() => setFilter(item.value)}>{item.label}<span>{item.value === "cut" ? roadmap.deferred.length : roadmap.work.filter(task => task.lane === item.value).length}</span></button>)}</div><div className="sa-task-grid" aria-live="polite" aria-atomic="false">{filter === "cut" ? roadmap.deferred.map((item, index) => <article className="sa-task-card is-cut" key={item.title}><div className="sa-task-top"><span className="sa-task-track">SCOPE NOTE</span><span>0{index + 1}</span></div><h3>{item.title}</h3><p>{item.reason}</p><span className="sa-cut-label">Confirmed / proposed — see note</span></article>) : tasks.length ? tasks.map(task => <article className="sa-task-card" key={task.id}><div className="sa-task-top"><span className="sa-task-track">{task.status}</span><DueDate value={task.due} /></div><h3>{task.title}</h3><div className="sa-task-owner"><span>{task.owner}</span><BoardRefs refs={task.refs} /></div><details><summary>What gets us there <span>+</span></summary><div><p>{task.why}</p><p><b>Done when</b><br />{task.doneWhen}</p></div></details></article>) : <p className="sa-empty-state">No work assigned to this horizon.</p>}</div></section>

      <section id="sa-production" className="sa-production" aria-labelledby="sa-production-title">
        <div className="sa-section-heading"><div><p className="sa-eyebrow">40 SPECIES / THE PRODUCTION BOARD</p><h2 id="sa-production-title">{roadmap.production.title}</h2></div><Link href="/apps/stompy-acres/roster" className="sa-section-link">View locked roster <Arrow /></Link></div>
        <div className="sa-production-totals">
          <div className="sa-production-integrated"><strong>{roadmap.production.integratedLooks}</strong><span>looks integrated<small>Selected art in source</small></span></div>
          <div className="sa-production-redo"><strong>{roadmap.production.redoPackages}</strong><span>asset redos<small>Existing banks; older looks</small></span></div>
          <div className="sa-production-missing"><strong>{roadmap.production.missingBanks}</strong><span>first packages<small>Complete source packages pending</small></span></div>
        </div>
        <div className="sa-production-pace"><strong>{roadmap.production.minimumTotalPerWeek.toFixed(1)}<small> species/week minimum</small></strong><span>{roadmap.production.remainingPackages} packages in {roadmap.production.daysToFreeze} days · by {dateLabel(roadmap.production.freezeDate)}<small>Before polish, worlds &amp; QA</small></span></div>
        <div className="sa-production-legend"><span><i className="sa-bank-mark is-integrated" />Look integrated</span><span><i className="sa-bank-mark is-redo" />Asset redo</span><span><i className="sa-bank-mark is-missing" />First package</span><span>{roadmap.production.existingBanks} existing packages · {roadmap.production.missingBanks} first complete packages pending. Source integration ≠ release acceptance.</span></div>
        <div className="sa-production-grid">{roadmap.production.islands.map(island => {
          const integrated = island.residents.filter(resident => resident.productionStatus === "integrated").length;
          const redo = island.residents.filter(resident => resident.productionStatus === "redo").length;
          const missing = island.residents.filter(resident => resident.productionStatus === "missing").length;
          return <article className="sa-production-island" key={island.id} style={{ "--production-accent": island.color } as CSSProperties}>
            <header><h3>{island.name}</h3><span className="sa-production-island-counts"><span><i className="sa-bank-mark is-integrated" /><b>{integrated}</b> integrated</span><span><i className="sa-bank-mark is-redo" /><b>{redo}</b> redo</span><span><i className="sa-bank-mark is-missing" /><b>{missing}</b> first</span></span></header>
            <ul>{island.residents.map(resident => <li key={resident.id} className={`is-${resident.productionStatus}`}><i className={`sa-bank-mark is-${resident.productionStatus}`} aria-hidden="true" /><span>{resident.name}<small className="sa-sr-only"> — {productionLabels[resident.productionStatus]}</small></span><details><summary aria-label={`${resident.name} production details`}>i</summary><p>{resident.detail}</p></details></li>)}</ul>
          </article>;
        })}</div>
        <p className="sa-production-note">{roadmap.production.note}</p>
        <div className="sa-production-acceptance"><span aria-hidden="true">◌</span><p><strong>{roadmap.production.accepted === null ? "Release acceptance still needs proof." : `${roadmap.production.accepted} / ${roadmap.production.total} species accepted for release.`}</strong> Each species needs its final look, working behavior, collection flow, and phone checks.</p></div>
      </section>

      <section className="sa-decisions-section" aria-labelledby="sa-decisions-title"><div><p className="sa-eyebrow">MAKE THE CALL</p><h2 id="sa-decisions-title">Decisions protect the date.</h2><p className="sa-small-note">A small number of clear calls keep the release moving.</p></div><div className="sa-decisions">{roadmap.decisions.map(decision => <details key={decision.title}><summary><span className="sa-decision-icon" aria-hidden="true">↗</span><strong>{decision.title}</strong><span className="sa-decision-date">By {dateLabel(decision.due)}</span><span className="sa-decision-open">{decision.state}</span></summary><p>{decision.recommendation}</p></details>)}</div></section>

      <section id="sa-launch-gates" className="sa-section sa-proof-section" aria-labelledby="sa-proof-title"><div className="sa-section-heading"><div><p className="sa-eyebrow">04 / READY TO RELEASE</p><h2 id="sa-proof-title">A date needs proof.</h2></div><span className="sa-small-note">Every gate must pass before release.</span></div><div className="sa-proof-grid">{roadmap.launchGates.map((gate, index) => <details className="sa-proof-gate" key={gate.label}><summary><span className="sa-gate-number">0{index + 1}</span><strong>{gate.label}</strong><span className="sa-gate-status"><i className={`sa-status-dot is-${gate.state}`} />{({ partial: "In progress", open: "Needs proof", passed: "Passed" })[gate.state]}</span><span className="sa-proof-plus">+</span></summary><p>{gate.proof}</p></details>)}</div><details className="sa-risks"><summary><span className="sa-risk-icon" aria-hidden="true">!</span><strong>{roadmap.risks.length} risks to keep in view</strong><span>Open risk register +</span></summary><div className="sa-risk-grid">{roadmap.risks.map(risk => <article key={risk.title}><span className="sa-risk-level">{risk.level}</span><h3>{risk.title}</h3><p>{risk.action}</p><span className="sa-small-note">{risk.owner} · {dateLabel(risk.due)}</span></article>)}</div></details></section>

      <section id="sa-updates" className="sa-updates-section" aria-labelledby="sa-updates-title"><div><p className="sa-eyebrow">A LIVING FIELD GUIDE</p><h2 id="sa-updates-title">Same destination.<br />A clearer path, every review.</h2><p>{roadmap.updatePolicy.cadence}</p><span className="sa-update-tag"><span />{roadmap.updatePolicy.sourceLabel}</span></div><div className="sa-update-log"><h3>Latest field notes</h3>{roadmap.changes.map((change, index) => <div key={`${change.date}-${index}`}><time dateTime={change.date}>{dateLabel(change.date)}</time><p>{change.text}</p></div>)}<details className="sa-evidence"><summary>Evidence behind this plan <span>+</span></summary><dl>{roadmap.evidence.map(item => <div key={item.label}><dt>{item.label}</dt><dd>{item.detail}</dd></div>)}</dl></details></div></section>

      <footer className="sa-roadmap-footer"><Link href="/apps/stompy-acres" className="sa-footer-brand">Stompy Acres <Arrow diagonal /></Link><span>Five islands. Room for one more dino.</span><span>Last verified <time dateTime={roadmap.asOf}>{dateLabel(roadmap.asOf)}</time> · {target.getUTCFullYear()}</span></footer>
    </div>
  </article>;
}
