import { json } from '@sveltejs/kit';
import { FireFunc } from "$lib/firebase/firebase.js";

export async function POST({ request }) {
    try {
        // Parse the request body
        console.log("Received request:", request);
        const { trx_ref } = await request.json();
        console.log("Received request:", trx_ref);
        // Fetch the pending order
        const event = await FireFunc.fetchPendingOrder(trx_ref);
        console.log("Received event:", event);

        // Add the event to verified orders
        await FireFunc.addToVerified(event);

        // Delete the pending order
        await FireFunc.deletePending(trx_ref);

        // Send a success response
        return json({ message: "Order processed successfully." }, { status: 200 });
    } catch (error) {
        console.error("Error processing order:", error);
        // Send an error response
        return json({ error: "Failed to process the order." }, { status: 500 });
    }
}
export async function GET({ request }) {
  try {
      // Parse the request body
      console.log("Received request:", request);
      // const { trx_ref } = await request.json();
      // console.log("Received request:", trx_ref);
      // // Fetch the pending order
      // const event = await FireFunc.fetchPendingOrder(trx_ref);
      // console.log("Received event:", event);

      // // Add the event to verified orders
      // await FireFunc.addToVerified(event);

      // // Delete the pending order
      // await FireFunc.deletePending(trx_ref);

      // Send a success response
      return json({ message: "Order processed successfully." }, { status: 200 });
  } catch (error) {
      console.error("Error processing order:", error);
      // Send an error response
      return json({ error: "Failed to process the order." }, { status: 500 });
  }
}
