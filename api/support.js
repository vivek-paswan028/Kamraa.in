// Serverless API: /api/support (Vercel)
// Env vars required on server: RESEND_API_KEY, SUPPORT_TO_EMAIL
// Optional: SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY

const { Resend } = require('resend');
const { createClient } = require('@supabase/supabase-js');
const { z } = require('zod');

const schema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  topic: z.string().default('general'),
  subject: z.string().min(1),
  message: z.string().min(1),
});

function readBody(req) {
  return new Promise((resolve, reject) => {
    let data = '';
    req.on('data', chunk => { data += chunk; });
    req.on('end', () => {
      try {
        const json = data ? JSON.parse(data) : {};
        resolve(json);
      } catch (e) {
        reject(e);
      }
    });
    req.on('error', reject);
  });
}

module.exports = async function handler(req, res) {
  // Allow CORS preflight if needed
  if (req.method === 'OPTIONS') {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    return res.status(204).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  try {
    const body = await readBody(req);
    const parsed = schema.parse(body);

    const { name, email, topic, subject, message } = parsed;

    // Optional: store in Supabase if configured
    if (process.env.SUPABASE_URL && process.env.SUPABASE_SERVICE_ROLE_KEY) {
      try {
        const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY);
        await supabase.from('support_tickets').insert({
          name,
          email,
          topic,
          subject,
          message,
          status: 'new',
        });
      } catch (e) {
        // Do not block on storage error; log only
        console.error('Supabase insert error', e);
      }
    }

    // Send email via Resend
    const resendKey = process.env.RESEND_API_KEY;
    const toEmail = process.env.SUPPORT_TO_EMAIL || 'support@kamraa.in';
    if (!resendKey) {
      return res.status(500).json({ error: 'RESEND_API_KEY not configured' });
    }

    const resend = new Resend(resendKey);

    const html = `
      <div>
        <h2>New Support Ticket</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Topic:</strong> ${topic}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <pre style="white-space:pre-wrap;font-family:inherit">${message}</pre>
      </div>
    `;

    await resend.emails.send({
      from: 'Kamraa Support <no-reply@kamraa.in>',
      to: [toEmail],
      reply_to: email,
      subject: `[Support] ${topic} • ${subject}`,
      html,
    });

    res.status(200).json({ ok: true });
  } catch (error) {
    console.error('Support API error', error);
    const msg = error?.message || 'Unknown error';
    res.status(400).json({ error: msg });
  }
};
