import { useState } from 'react';
import Section from './Section.jsx';
import Reveal from './Reveal.jsx';
import TiltCard from './TiltCard.jsx';
import { profile } from '../data.js';

const API = import.meta.env.VITE_API_URL || '';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState({ type: 'idle', msg: '' });
  const set = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  const submit = (e) => {
  e.preventDefault();
  const text =
    `Hello Jobit,\n\n` +
    `Name: ${form.name}\n` +
    `Email: ${form.email}\n` +
    `Subject: ${form.subject || '-'}\n\n` +
    `${form.message}`;

const url = `https://wa.me/919744101907?text=${encodeURIComponent(text)}`;  window.open(url, '_blank', 'noopener');

  setForm({ name: '', email: '', subject: '', message: '' });
  setStatus({ type: 'ok', msg: 'Opening WhatsApp — press Send there to deliver your message.' });
};

  return (
    <Section id="contact" num="09" title="Contact" sub="Open a secure channel">
      <div className="contact">
        <Reveal from="left">
          <div className="contact-info">
            <p>Have a support issue, an admin role or a project in mind? Send a transmission.</p>
            <TiltCard className="info panel"><small>EMAIL</small><b>{profile.email}</b></TiltCard>
            <TiltCard className="info panel"><small>PHONE</small><b>{profile.phone}</b></TiltCard>
            <TiltCard className="info panel"><small>BASE</small><b>{profile.location}</b></TiltCard>
            <div className="socials">
              {profile.socials.map((s) => <a key={s.label} href={s.url} target="_blank" rel="noreferrer">{s.label}</a>)}
            </div>
          </div>
        </Reveal>
        <Reveal from="right">
          <form className="form panel bracket" onSubmit={submit}>
            <div className="two">
              <label>Name<input required value={form.name} onChange={set('name')} placeholder="Your name" /></label>
              <label>Email<input required type="email" value={form.email} onChange={set('email')} placeholder="you@email.com" /></label>
            </div>
            <label>Subject<input value={form.subject} onChange={set('subject')} placeholder="What's this about?" /></label>
            <label>Message<textarea required rows="5" value={form.message} onChange={set('message')} placeholder="Tell me more ..." /></label>
            <button className="btn" disabled={status.type === 'loading'}><span>Send Transmission</span></button>
            {status.msg && <p className={`status ${status.type}`}>{status.msg}</p>}
          </form>
        </Reveal>
      </div>
    </Section>
  );
}
