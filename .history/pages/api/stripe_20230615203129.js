import Stripe from 'stripe';

const stripe = new Stripe(process.env.NEXT_PUBLIC_SECRET_KEY);
