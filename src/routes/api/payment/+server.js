import { json } from '@sveltejs/kit';
import axios from 'axios';

const CHAPA_SECRET_KEY = 'CHASECK_TEST-ij9Gbg3A0sGAYidFLASZhZMPRIaimbGr';

export async function POST({ request }) {
  const { email, amount, currency, tx_ref, return_url } = await request.json();

  try {
    const response = await axios.post(
      'https://api.chapa.co/v1/transaction/initialize',
      {
        email,
        amount,
        currency,
        tx_ref,
        return_url,
        callback_url: 'http://localhost:5173/api/payment/callback', // Your callback route
      },
      {
        headers: {
          Authorization: `Bearer ${CHAPA_SECRET_KEY}`,
        },
      }
    );

    return json(response.data);
  } catch (error) {
    return json({ error: 'Failed to initialize payment', details: error.response?.data }, { status: 500 });
  }
}

