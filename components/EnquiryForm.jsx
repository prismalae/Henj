'use client';

import { useState } from 'react';
import Icon from './Icon';
import { site, primaryPhone, whatsappHref, mailtoHref } from '@/content/site';

const EMPTY = {
  name: '', company: '', email: '', phone: '', country: '',
  interest: '', quantity: '', subject: '', message: '',
};
const REQUIRED = ['name', 'email', 'phone', 'interest', 'subject', 'message'];
const LABELS = {
  name: 'Your Name', company: 'Company Name', email: 'Email Address',
  phone: 'Phone / WhatsApp', country: 'Country', interest: 'Product Interest',
  quantity: 'Estimated Quantity', subject: 'Subject', message: 'Your Message',
};
const INTERESTS = [
  'Fruits & Vegetables',
  'Pulses, Rice & Grains',
  'Spices',
  'Eggs',
  'Multiple categories',
  'Other / not sure yet',
];

export default function EnquiryForm() {
  const [values, setValues] = useState(EMPTY);
  const [errors, setErrors] = useState({});

  const set = (key) => (e) => {
    setValues((v) => ({ ...v, [key]: e.target.value }));
    setErrors((v) => ({ ...v, [key]: undefined }));
  };

  function validate() {
    const next = {};
    for (const k of REQUIRED) {
      if (!values[k].trim()) next[k] = `${LABELS[k]} is required.`;
    }
    if (values.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) {
      next.email = 'Enter a valid email address.';
    }
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  /** One plain-text summary, reused for both WhatsApp and email. */
  function summary() {
    return [
      `Enquiry from ${values.name.trim()}`,
      values.company.trim() && `Company: ${values.company.trim()}`,
      `Email: ${values.email.trim()}`,
      `Phone: ${values.phone.trim()}`,
      values.country.trim() && `Country: ${values.country.trim()}`,
      `Product interest: ${values.interest}`,
      values.quantity.trim() && `Estimated quantity: ${values.quantity.trim()}`,
      '',
      values.message.trim(),
    ]
      .filter(Boolean)
      .join('\n');
  }

  function send(channel) {
    return (e) => {
      e.preventDefault();
      if (!validate()) {
        const first = document.querySelector('.field--error input, .field--error select, .field--error textarea');
        first?.focus();
        return;
      }
      const subject = `${values.subject.trim()}: ${values.name.trim()}`;
      window.location.href =
        channel === 'whatsapp'
          ? whatsappHref(`*${subject}*\n\n${summary()}`)
          : mailtoHref(subject, summary());
    };
  }

  const field = (key, { type = 'text', textarea = false, options = null } = {}) => (
    <div className={`field${errors[key] ? ' field--error' : ''}`}>
      <label htmlFor={`f-${key}`}>
        {LABELS[key]}{REQUIRED.includes(key) && <span aria-hidden="true"> *</span>}
      </label>
      {options ? (
        <select
          id={`f-${key}`} value={values[key]} onChange={set(key)}
          required={REQUIRED.includes(key)}
          aria-invalid={errors[key] ? 'true' : undefined}
          aria-describedby={errors[key] ? `e-${key}` : undefined}
        >
          <option value="">Select a category…</option>
          {options.map((o) => <option key={o} value={o}>{o}</option>)}
        </select>
      ) : textarea ? (
        <textarea
          id={`f-${key}`} value={values[key]} onChange={set(key)}
          required={REQUIRED.includes(key)}
          aria-invalid={errors[key] ? 'true' : undefined}
          aria-describedby={errors[key] ? `e-${key}` : undefined}
        />
      ) : (
        <input
          id={`f-${key}`} type={type} value={values[key]} onChange={set(key)}
          required={REQUIRED.includes(key)}
          aria-invalid={errors[key] ? 'true' : undefined}
          aria-describedby={errors[key] ? `e-${key}` : undefined}
        />
      )}
      {errors[key] && <span className="field-error" id={`e-${key}`}>{errors[key]}</span>}
    </div>
  );

  return (
    <form noValidate onSubmit={send('email')}>
      <div className="grid grid--2" style={{ marginBottom: '1rem' }}>
        {field('name')}
        {field('company')}
        {field('email', { type: 'email' })}
        {field('phone', { type: 'tel' })}
        {field('country')}
        {field('quantity')}
        {field('interest', { options: INTERESTS })}
        {field('subject')}
      </div>
      <div style={{ display: 'grid', gap: '1rem' }}>
        {field('message', { textarea: true })}
      </div>

      <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', marginTop: '1.25rem' }}>
        <button type="button" className="btn btn--gold" onClick={send('whatsapp')}>
          <Icon name="whatsapp" size={18} /> Send on WhatsApp
        </button>
        <button type="submit" className="btn btn--green">
          <Icon name="send" size={18} /> Send Email
        </button>
      </div>

      <p style={{ marginTop: '1rem', fontSize: '0.8rem', color: 'var(--ink-soft)' }}>
        Your details open a pre-filled message to{' '}
        <a href={`https://wa.me/${primaryPhone.wa}`} style={{ color: 'var(--green-600)', fontWeight: 600 }}>
          {primaryPhone.display}
        </a>{' '}
        or <a href={`mailto:${site.email}`} style={{ color: 'var(--green-600)', fontWeight: 600 }}>{site.email}</a>. Nothing is stored on this site.
      </p>
    </form>
  );
}
