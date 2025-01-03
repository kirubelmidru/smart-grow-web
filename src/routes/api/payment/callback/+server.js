import { json } from '@sveltejs/kit';
import { FireFunc } from "$lib/firebase/firebase.js";

export async function POST({ req }) {
  var event = await FireFunc.fetchPendingOrder(req.body.trx_ref);
  console.log("recived gang")
  FireFunc.addToVerified(event)
  await FireFunc.deletePending(req.body.trx_ref);
  res.send(200)
}
