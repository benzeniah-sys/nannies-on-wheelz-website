import React from "react";
import { Phone, MapPin, Sparkles, Car, Home, Users, ArrowRight, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

const BRAND = {
  purple: "#B24BB6",
  pink: "#E94EAF",
  ink: "#121212",
  muted: "#5A5A5A",
  bg: "#FFF7FD",
};

function Badge({ children }) {
  return (
    <span
      className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-sm"
      style={{ borderColor: "rgba(178,75,182,0.25)", background: "rgba(178,75,182,0.06)" }}
    >
      <Sparkles size={16} style={{ color: BRAND.pink }} />
      <span className="text-zinc-800">{children}</span>
    </span>
  );
}

function SectionTitle({ eyebrow, title, desc }) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      {eyebrow ? (
        <div className="text-sm font-semibold tracking-wide" style={{ color: BRAND.pink }}>
          {eyebrow}
        </div>
      ) : null}
      <h2 className="mt-2 text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">{title}</h2>
      {desc ? <p className="mt-3 text-base text-zinc-600">{desc}</p> : null}
    </div>
  );
}

const services = [
  { icon: Home, title: "In-Home Nanny Services", body: "Reliable, nurturing care in the comfort of your home — routines, play, meals, and more." },
  { icon: Car, title: "Transportation Services", body: "Safe pick-ups and drop-offs for school, activities, appointments, and daily schedules." },
  { icon: Sparkles, title: "Customized Care", body: "Tell us what your family needs — we’ll help create a plan that fits your lifestyle." },
];

const steps = [
  { title: "Tell us what you need", body: "Share your schedule, child’s age, and the type of support you’re looking for." },
  { title: "We match you with the right nanny", body: "We focus on fit, reliability, and your family’s preferences." },
  { title: "Get started with confidence", body: "Ongoing communication and support so your care stays consistent." },
];

export default function App() {
  return (
    <div className="min-h-screen bg-white text-zinc-900">
      <div className="border-b" style={{ background: BRAND.bg, borderColor: "rgba(178,75,182,0.15)" }}>
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-2 sm:px-6">
          <div className="flex items-center gap-3 text-sm text-zinc-700">
            <Phone size={16} style={{ color: BRAND.pink }} />
            <a className="font-semibold hover:underline" href="tel:18778421245">1-877-842-1245</a>
          </div>
          <div className="hidden items-center gap-2 text-sm text-zinc-700 sm:flex">
            <MapPin size={16} style={{ color: BRAND.purple }} />
            <span>Serving families • Atlanta office available (Press 3)</span>
          </div>
        </div>
      </div>

      <header className="sticky top-0 z-40 border-b bg-white/80 backdrop-blur" style={{ borderColor: "rgba(0,0,0,0.06)" }}>
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
          <div className="flex items-center gap-3">
            <img src="/logo.png" alt="Nannies on Wheelz logo" className="h-10 w-auto" />
            <div>
              <div className="text-base font-extrabold" style={{ color: BRAND.ink }}>Nannies on Wheelz</div>
              <div className="text-xs" style={{ color: BRAND.muted }}>Gliding through the city one toddler at a time!</div>
            </div>
          </div>

          <nav className="hidden items-center gap-6 text-sm font-semibold text-zinc-700 md:flex">
            <a href="#services" className="hover:text-zinc-900">Services</a>
            <a href="#how" className="hover:text-zinc-900">How it works</a>
            <a href="#app" className="hover:text-zinc-900">App</a>
            <a href="#areas" className="hover:text-zinc-900">Service areas</a>
            <a href="#forms" className="hover:text-zinc-900">Forms</a>
            <a href="#contact" className="hover:text-zinc-900">Contact</a>
          </nav>

          <div className="flex items-center gap-2">
            <a href="#contact" className="hidden rounded-full px-4 py-2 text-sm font-bold text-white shadow-sm sm:inline-flex"
               style={{ background: `linear-gradient(135deg, ${BRAND.purple}, ${BRAND.pink})` }}>
              Book a nanny
            </a>
            <a href="tel:18778421245" className="rounded-full border px-4 py-2 text-sm font-bold"
               style={{ borderColor: "rgba(178,75,182,0.25)", color: BRAND.purple }}>
              Call
            </a>
          </div>
        </div>
      </header>

      <section className="relative overflow-hidden">
        <div className="absolute inset-0" style={{
          background:
            "radial-gradient(800px 300px at 20% 20%, rgba(233,78,175,0.16), transparent 60%), radial-gradient(900px 340px at 70% 10%, rgba(178,75,182,0.18), transparent 55%)",
        }} />
        <div className="relative mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-2 lg:items-center lg:py-20">
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <Badge>Top-notch nanny service to fit your needs</Badge>
            <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-zinc-900 sm:text-5xl">Childcare that moves with your family.</h1>
            <p className="mt-4 text-base text-zinc-600 sm:text-lg">In-home nanny care, reliable transportation, and flexible support tailored to your routine.</p>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a href="#contact" className="inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-bold text-white shadow-sm"
                 style={{ background: `linear-gradient(135deg, ${BRAND.purple}, ${BRAND.pink})` }}>
                Get matched today <ArrowRight size={18} />
              </a>
              <a href="#services" className="inline-flex items-center justify-center gap-2 rounded-full border px-5 py-3 text-sm font-bold"
                 style={{ borderColor: "rgba(178,75,182,0.25)", color: BRAND.purple }}>
                See services
              </a>
            </div>

            <div className="mt-6 flex flex-wrap gap-4 text-sm text-zinc-700">
              {["Flexible scheduling", "Family-focused care", "Transportation support"].map((t) => (
                <div key={t} className="flex items-center gap-2">
                  <CheckCircle2 size={18} style={{ color: BRAND.pink }} />{t}
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.05 }} className="relative">
            <div className="rounded-3xl border bg-white p-6 shadow-sm" style={{ borderColor: "rgba(178,75,182,0.18)" }}>
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="text-sm font-semibold" style={{ color: BRAND.pink }}>App coming soon</div>
                  <div className="mt-1 text-2xl font-extrabold text-zinc-900">Book from your phone</div>
                  <p className="mt-2 text-sm text-zinc-600">We’re building an easier way to request, schedule, and customize services.</p>
                </div>
                <div className="grid h-12 w-12 place-items-center rounded-2xl text-white"
                     style={{ background: `linear-gradient(135deg, ${BRAND.pink}, ${BRAND.purple})` }}>
                  <Sparkles size={22} />
                </div>
              </div>

              <div className="mt-5 grid gap-3">
                {["Request care", "Choose transportation add-ons", "Get updates & confirmations"].map((t) => (
                  <div key={t} className="flex items-center gap-2 rounded-2xl border px-4 py-3" style={{ borderColor: "rgba(0,0,0,0.06)" }}>
                    <CheckCircle2 size={18} style={{ color: BRAND.purple }} />
                    <div className="text-sm font-semibold text-zinc-800">{t}</div>
                  </div>
                ))}
              </div>

              <div className="mt-5 rounded-2xl border p-4" style={{ borderColor: "rgba(178,75,182,0.18)", background: "rgba(233,78,175,0.06)" }}>
                <div className="text-sm font-bold text-zinc-900">Need help now?</div>
                <div className="mt-1 text-sm text-zinc-700">
                  Call us at <a className="font-extrabold hover:underline" href="tel:18778421245" style={{ color: BRAND.purple }}>1-877-842-1245</a>
                </div>
              </div>
            </div>

            <div className="pointer-events-none absolute -bottom-8 -left-8 h-40 w-40 rounded-full" style={{ background: "rgba(178,75,182,0.10)" }} />
            <div className="pointer-events-none absolute -top-10 -right-10 h-44 w-44 rounded-full" style={{ background: "rgba(233,78,175,0.10)" }} />
          </motion.div>
        </div>
      </section>

      <section id="services" className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <SectionTitle eyebrow="Services" title="Care options that fit real life" desc="Choose in-home care, transportation support, or a customized plan built around your family’s routine." />
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {services.map((s) => (
            <motion.div key={s.title} whileHover={{ y: -4 }} className="rounded-3xl border bg-white p-6 shadow-sm" style={{ borderColor: "rgba(178,75,182,0.18)" }}>
              <div className="grid h-12 w-12 place-items-center rounded-2xl text-white" style={{ background: `linear-gradient(135deg, ${BRAND.purple}, ${BRAND.pink})` }}>
                <s.icon size={22} />
              </div>
              <div className="mt-4 text-xl font-extrabold text-zinc-900">{s.title}</div>
              <p className="mt-2 text-sm text-zinc-600">{s.body}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section id="how" className="border-y" style={{ background: BRAND.bg, borderColor: "rgba(178,75,182,0.12)" }}>
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
          <SectionTitle eyebrow="How it works" title="Simple, supportive, and family-first" desc="We keep the process easy — from your first call to your first day of care." />
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {steps.map((st, i) => (
              <div key={st.title} className="rounded-3xl border bg-white p-6 shadow-sm" style={{ borderColor: "rgba(0,0,0,0.06)" }}>
                <div className="text-sm font-extrabold" style={{ color: BRAND.pink }}>Step {i + 1}</div>
                <div className="mt-2 text-lg font-extrabold text-zinc-900">{st.title}</div>
                <p className="mt-2 text-sm text-zinc-600">{st.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="app" className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <SectionTitle eyebrow="App" title="App coming soon" desc="We’re building a faster way to book, customize, and manage care. Want updates? Call us and ask to join the app list." />
        <div className="mt-10 rounded-3xl border bg-white p-6 shadow-sm" style={{ borderColor: "rgba(178,75,182,0.18)" }}>
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <div className="text-2xl font-extrabold text-zinc-900">Stay in the loop</div>
              <p className="mt-2 text-sm text-zinc-600">Call us at <span className="font-extrabold" style={{ color: BRAND.purple }}>1-877-842-1245</span> to learn more.</p>
            </div>
            <a href="tel:18778421245" className="inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-bold text-white shadow-sm"
               style={{ background: `linear-gradient(135deg, ${BRAND.purple}, ${BRAND.pink})` }}>
              Call now <Phone size={18} />
            </a>
          </div>
        </div>
      </section>

      <section id="areas" className="border-y" style={{ background: BRAND.bg, borderColor: "rgba(178,75,182,0.12)" }}>
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
          <SectionTitle eyebrow="Service areas" title="Where we serve" desc="We provide care where families need it most. Ask about availability in your neighborhood." />

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            <div className="rounded-3xl border bg-white p-6 shadow-sm" style={{ borderColor: "rgba(0,0,0,0.06)" }}>
              <div className="flex items-center justify-between gap-3">
                <div>
                  <div className="text-sm font-extrabold" style={{ color: BRAND.pink }}>Atlanta, GA</div>
                  <div className="mt-1 text-xl font-extrabold text-zinc-900">Atlanta Office</div>
                  <p className="mt-2 text-sm text-zinc-600">Call and press 3 to connect with our Atlanta team.</p>
                </div>
                <div className="grid h-12 w-12 place-items-center rounded-2xl text-white" style={{ background: `linear-gradient(135deg, ${BRAND.pink}, ${BRAND.purple})` }}>
                  <MapPin size={22} />
                </div>
              </div>
              <div className="mt-4 overflow-hidden rounded-2xl border" style={{ borderColor: "rgba(0,0,0,0.06)" }}>
                <iframe title="Atlanta service area map" className="h-64 w-full" loading="lazy" referrerPolicy="no-referrer-when-downgrade"
                        src="https://www.google.com/maps?q=Atlanta%2C%20GA&output=embed" />
              </div>
            </div>

            <div className="rounded-3xl border bg-white p-6 shadow-sm" style={{ borderColor: "rgba(0,0,0,0.06)" }}>
              <div className="flex items-center justify-between gap-3">
                <div>
                  <div className="text-sm font-extrabold" style={{ color: BRAND.pink }}>Pennsylvania</div>
                  <div className="mt-1 text-xl font-extrabold text-zinc-900">Main Service Area</div>
                  <p className="mt-2 text-sm text-zinc-600">We currently support families across Pennsylvania. Ask about your area.</p>
                </div>
                <div className="grid h-12 w-12 place-items-center rounded-2xl text-white" style={{ background: `linear-gradient(135deg, ${BRAND.purple}, ${BRAND.pink})` }}>
                  <MapPin size={22} />
                </div>
              </div>
              <div className="mt-4 overflow-hidden rounded-2xl border" style={{ borderColor: "rgba(0,0,0,0.06)" }}>
                <iframe title="Pennsylvania service area map" className="h-64 w-full" loading="lazy" referrerPolicy="no-referrer-when-downgrade"
                        src="https://www.google.com/maps?q=Pennsylvania&output=embed" />
              </div>
            </div>
          </div>

          <div className="mt-8 rounded-3xl border bg-white p-6 shadow-sm" style={{ borderColor: "rgba(178,75,182,0.18)" }}>
            <div className="text-lg font-extrabold text-zinc-900">Need a specific neighborhood?</div>
            <p className="mt-2 text-sm text-zinc-600">Call us and we’ll confirm availability and transportation coverage.</p>
            <a href="tel:18778421245" className="mt-4 inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-bold text-white shadow-sm"
               style={{ background: `linear-gradient(135deg, ${BRAND.purple}, ${BRAND.pink})` }}>
              Call 1-877-842-1245 <Phone size={18} />
            </a>
          </div>
        </div>
      </section>

      <section id="forms" className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <SectionTitle eyebrow="Forms" title="Book a nanny or apply to join our team" desc="Fill out the form that fits your needs. Submissions go straight to your inbox once your form endpoint is connected." />

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <div className="rounded-3xl border bg-white p-6 shadow-sm" style={{ borderColor: "rgba(178,75,182,0.18)" }}>
            <div className="text-xl font-extrabold text-zinc-900">Book a Nanny</div>
            <p className="mt-2 text-sm text-zinc-600">Tell us what your family needs and we’ll reach back out.</p>

            <form className="mt-5 space-y-3" action="https://formspree.io/f/YOUR_BOOKING_FORM_ID" method="POST">
              <input type="hidden" name="form_type" value="Book a Nanny" />
              <div className="grid gap-3 sm:grid-cols-2">
                <input className="w-full rounded-2xl border px-4 py-3 text-sm" style={{ borderColor: "rgba(0,0,0,0.10)" }} name="parent_name" placeholder="Parent/Guardian name" required />
                <input className="w-full rounded-2xl border px-4 py-3 text-sm" style={{ borderColor: "rgba(0,0,0,0.10)" }} name="phone" placeholder="Phone number" required />
              </div>
              <input className="w-full rounded-2xl border px-4 py-3 text-sm" style={{ borderColor: "rgba(0,0,0,0.10)" }} type="email" name="email" placeholder="Email" required />
              <div className="grid gap-3 sm:grid-cols-2">
                <input className="w-full rounded-2xl border px-4 py-3 text-sm" style={{ borderColor: "rgba(0,0,0,0.10)" }} name="city" placeholder="City" />
                <select className="w-full rounded-2xl border px-4 py-3 text-sm" style={{ borderColor: "rgba(0,0,0,0.10)" }} name="service_type" defaultValue="In-home nanny">
                  <option>In-home nanny</option>
                  <option>Transportation</option>
                  <option>Customized care</option>
                </select>
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                <input className="w-full rounded-2xl border px-4 py-3 text-sm" style={{ borderColor: "rgba(0,0,0,0.10)" }} name="schedule" placeholder="Schedule (days/times)" />
                <input className="w-full rounded-2xl border px-4 py-3 text-sm" style={{ borderColor: "rgba(0,0,0,0.10)" }} name="children" placeholder="# of children / ages" />
              </div>
              <textarea className="min-h-[120px] w-full rounded-2xl border px-4 py-3 text-sm" style={{ borderColor: "rgba(0,0,0,0.10)" }} name="details" placeholder="Tell us more (pick-up/drop-off details, routines, special requests)…" />
              <button type="submit" className="inline-flex w-full items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-bold text-white shadow-sm"
                      style={{ background: `linear-gradient(135deg, ${BRAND.purple}, ${BRAND.pink})` }}>
                Submit booking request <ArrowRight size={18} />
              </button>
              <p className="text-xs text-zinc-500">Replace <span className="font-semibold">YOUR_BOOKING_FORM_ID</span> with your Formspree form ID.</p>
            </form>
          </div>

          <div className="rounded-3xl border bg-white p-6 shadow-sm" style={{ borderColor: "rgba(178,75,182,0.18)" }}>
            <div className="text-xl font-extrabold text-zinc-900">Hiring / Apply</div>
            <p className="mt-2 text-sm text-zinc-600">Interested in joining Nannies on Wheelz? Apply below.</p>

            <form className="mt-5 space-y-3" action="https://formspree.io/f/YOUR_HIRING_FORM_ID" method="POST">
              <input type="hidden" name="form_type" value="Hiring" />
              <div className="grid gap-3 sm:grid-cols-2">
                <input className="w-full rounded-2xl border px-4 py-3 text-sm" style={{ borderColor: "rgba(0,0,0,0.10)" }} name="full_name" placeholder="Full name" required />
                <input className="w-full rounded-2xl border px-4 py-3 text-sm" style={{ borderColor: "rgba(0,0,0,0.10)" }} name="phone" placeholder="Phone number" required />
              </div>
              <input className="w-full rounded-2xl border px-4 py-3 text-sm" style={{ borderColor: "rgba(0,0,0,0.10)" }} type="email" name="email" placeholder="Email" required />
              <div className="grid gap-3 sm:grid-cols-2">
                <select className="w-full rounded-2xl border px-4 py-3 text-sm" style={{ borderColor: "rgba(0,0,0,0.10)" }} name="position" defaultValue="Nanny">
                  <option>Nanny</option>
                  <option>Driver / Transportation support</option>
                  <option>Floater / On-call</option>
                </select>
                <input className="w-full rounded-2xl border px-4 py-3 text-sm" style={{ borderColor: "rgba(0,0,0,0.10)" }} name="city" placeholder="City" />
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                <input className="w-full rounded-2xl border px-4 py-3 text-sm" style={{ borderColor: "rgba(0,0,0,0.10)" }} name="experience" placeholder="Years of experience" />
                <input className="w-full rounded-2xl border px-4 py-3 text-sm" style={{ borderColor: "rgba(0,0,0,0.10)" }} name="availability" placeholder="Availability" />
              </div>
              <input className="w-full rounded-2xl border px-4 py-3 text-sm" style={{ borderColor: "rgba(0,0,0,0.10)" }} name="resume_link" placeholder="Resume link (Google Drive/Dropbox)" />
              <textarea className="min-h-[120px] w-full rounded-2xl border px-4 py-3 text-sm" style={{ borderColor: "rgba(0,0,0,0.10)" }} name="message" placeholder="Tell us about yourself (certifications, driving, childcare experience)…" />
              <button type="submit" className="inline-flex w-full items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-bold text-white shadow-sm"
                      style={{ background: `linear-gradient(135deg, ${BRAND.purple}, ${BRAND.pink})` }}>
                Submit application <ArrowRight size={18} />
              </button>
              <p className="text-xs text-zinc-500">Replace <span className="font-semibold">YOUR_HIRING_FORM_ID</span> with your Formspree form ID.</p>
            </form>
          </div>
        </div>
      </section>

      <section id="contact" className="border-t" style={{ borderColor: "rgba(0,0,0,0.06)" }}>
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
          <SectionTitle eyebrow="Contact" title="Let’s talk about your family’s needs" desc="Call us to book a nanny, ask about transportation services, or learn about hiring." />

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            <div className="rounded-3xl border bg-white p-6 shadow-sm" style={{ borderColor: "rgba(178,75,182,0.18)" }}>
              <div className="text-lg font-extrabold text-zinc-900">Call us</div>
              <p className="mt-2 text-sm text-zinc-600">We’re happy to help and answer questions.</p>

              <div className="mt-4 flex flex-col gap-3">
                <a href="tel:18778421245" className="inline-flex items-center justify-between rounded-2xl border px-4 py-3 text-sm font-bold"
                   style={{ borderColor: "rgba(178,75,182,0.25)" }}>
                  <span className="flex items-center gap-2"><Phone size={18} style={{ color: BRAND.pink }} /> 1-877-842-1245</span>
                  <span style={{ color: BRAND.purple }}>Tap to call</span>
                </a>

                <div className="rounded-2xl border px-4 py-3" style={{ borderColor: "rgba(0,0,0,0.06)", background: "rgba(178,75,182,0.04)" }}>
                  <div className="text-sm font-extrabold text-zinc-900">Phone menu</div>
                  <ul className="mt-2 space-y-1 text-sm text-zinc-700">
                    <li><span className="font-bold" style={{ color: BRAND.pink }}>Press 1</span> — Hiring inquiries</li>
                    <li><span className="font-bold" style={{ color: BRAND.pink }}>Press 2</span> — Book a nanny</li>
                    <li><span className="font-bold" style={{ color: BRAND.pink }}>Press 3</span> — Atlanta office</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="rounded-3xl border bg-white p-6 shadow-sm" style={{ borderColor: "rgba(178,75,182,0.18)" }}>
              <div className="text-lg font-extrabold text-zinc-900">Quick info</div>
              <div className="mt-4 space-y-4 text-sm text-zinc-700">
                <div className="flex items-start gap-3"><Users size={18} style={{ color: BRAND.purple }} /><div><div className="font-extrabold text-zinc-900">Hiring</div><div>Interested in joining the team? Call and press 1.</div></div></div>
                <div className="flex items-start gap-3"><Car size={18} style={{ color: BRAND.pink }} /><div><div className="font-extrabold text-zinc-900">Transportation</div><div>Safe, reliable support for busy family schedules.</div></div></div>
                <div className="flex items-start gap-3"><MapPin size={18} style={{ color: BRAND.purple }} /><div><div className="font-extrabold text-zinc-900">Atlanta office</div><div>Call and press 3 to connect with our Atlanta team.</div></div></div>
              </div>

              <div className="mt-6 rounded-2xl border p-4" style={{ borderColor: "rgba(0,0,0,0.06)" }}>
                <div className="text-sm font-extrabold text-zinc-900">Customize your care</div>
                <p className="mt-1 text-sm text-zinc-600">Need something special? Let us know — we’ll help build a plan that fits.</p>
              </div>
            </div>
          </div>

          <div className="mt-10 text-center text-sm text-zinc-600">© {new Date().getFullYear()} Nannies on Wheelz. All rights reserved.</div>
        </div>
      </section>
    </div>
  );
}
