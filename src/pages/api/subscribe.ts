import type { APIRoute } from 'astro';

export const prerender = false;

const BREVO_LIST_ID = 2;

export const POST: APIRoute = async ({ request }) => {
  const apiKey = process.env.BREVO_API_KEY;

  if (!apiKey) {
    return new Response(JSON.stringify({ ok: false, error: 'server misconfigured' }), { status: 500 });
  }

  let body: { prenom?: string; email?: string; rgpd?: boolean };
  try {
    body = await request.json();
  } catch {
    return new Response(JSON.stringify({ ok: false, error: 'invalid body' }), { status: 400 });
  }

  const prenom = (body.prenom ?? '').trim();
  const email = (body.email ?? '').trim();

  if (!prenom || !email || !body.rgpd) {
    return new Response(JSON.stringify({ ok: false, error: 'missing fields' }), { status: 400 });
  }

  try {
    const brevoRes = await fetch('https://api.brevo.com/v3/contacts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'api-key': apiKey,
      },
      body: JSON.stringify({
        email,
        attributes: { PRENOM: prenom },
        listIds: [BREVO_LIST_ID],
        updateEnabled: true,
      }),
    });

    if (!brevoRes.ok && brevoRes.status !== 400) {
      // 400 from Brevo is often "contact already exists" — not a failure for our purposes
      console.warn('Brevo API error', brevoRes.status, await brevoRes.text());
    }
  } catch (err) {
    console.warn('Brevo inaccessible', err);
  }

  return new Response(JSON.stringify({ ok: true }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
};
