import { json } from '@sveltejs/kit';

export async function POST({ request }) {
  const data = await request.json();
  console.log('Callback received:', data);

  // Perform any post-payment operations like updating the database

  return json({ message: 'Callback received successfully' });
}
