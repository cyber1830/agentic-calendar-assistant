import Link from "next/link";
import { ArrowRight, CalendarDays, Check, Sparkles } from "lucide-react";

const features = ["Ask about your agenda in plain language", "Find free time before scheduling", "Create Google Meet events and invite attendees", "Reschedule or cancel without leaving the chat"];

export default function Home() {
  return (
    <main className="app-shell-bg min-h-svh overflow-hidden">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6 lg:px-8">
        <div className="flex items-center gap-2 font-semibold tracking-tight"><span className="flex size-9 items-center justify-center rounded-xl bg-primary text-primary-foreground"><CalendarDays className="size-5" /></span>Meeting Assistant</div>
        <Link href="/sign-in" className="text-sm font-semibold text-primary hover:underline">Sign in <ArrowRight className="ml-1 inline size-4" /></Link>
      </nav>
      <section className="mx-auto grid max-w-6xl items-center gap-14 px-6 pb-24 pt-16 lg:grid-cols-[1.05fr_.95fr] lg:px-8 lg:pt-24">
        <div><div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-card/70 px-3 py-1.5 text-xs font-semibold text-primary shadow-sm"><Sparkles className="size-3.5" /> Your calendar, with an extra pair of hands</div><h1 className="max-w-3xl font-heading text-5xl leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl">Spend less time scheduling. <span className="text-primary">Make more time.</span></h1><p className="mt-6 max-w-xl text-lg leading-8 text-muted-foreground">A conversational AI assistant that understands your calendar, finds availability, and handles the meeting details for you.</p><div className="mt-9 flex flex-wrap gap-3"><Link href="/sign-in" className="inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/20 transition hover:-translate-y-0.5">Connect your calendar <ArrowRight className="size-4" /></Link><a href="#how-it-works" className="rounded-xl border border-border bg-card/70 px-5 py-3 text-sm font-semibold">See how it works</a></div></div>
        <div className="rounded-3xl border border-primary/15 bg-card/80 p-4 shadow-2xl shadow-primary/10"><div className="rounded-2xl border border-border bg-background p-5"><div className="mb-6 flex items-center gap-3 border-b border-border pb-4"><span className="flex size-9 items-center justify-center rounded-xl bg-accent text-primary"><Sparkles className="size-4" /></span><div><p className="text-sm font-semibold">Meeting Assistant</p><p className="text-xs text-muted-foreground">Ready to help</p></div><span className="ml-auto size-2 rounded-full bg-emerald-500" /></div><div className="ml-auto max-w-[85%] rounded-2xl rounded-br-md bg-primary px-4 py-3 text-sm text-primary-foreground">Find me a 30-minute slot with the design team tomorrow afternoon.</div><div className="mt-4 max-w-[90%] rounded-2xl rounded-bl-md bg-secondary px-4 py-3 text-sm leading-6 text-secondary-foreground">I found two open times: <strong>2:00 PM</strong> and <strong>4:30 PM</strong>. Which works better?</div><div className="mt-5 flex gap-2"><span className="rounded-lg border border-primary/20 bg-accent px-3 py-2 text-xs font-semibold text-primary">2:00 PM</span><span className="rounded-lg border border-border px-3 py-2 text-xs font-semibold">4:30 PM</span></div></div></div>
      </section>
      <section id="how-it-works" className="mx-auto max-w-6xl px-6 pb-24 lg:px-8"><div className="grid gap-4 rounded-3xl border border-border bg-card/60 p-7 sm:grid-cols-2 lg:grid-cols-4">{features.map((feature) => <div key={feature} className="flex gap-3 text-sm leading-6 text-muted-foreground"><Check className="mt-1 size-4 shrink-0 text-primary" />{feature}</div>)}</div></section>
    </main>
  );
}
