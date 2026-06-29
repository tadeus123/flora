/** Client-safe: publishable key present */
export function isStripePublishableConfigured(): boolean {
  const key = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY ?? "";
  return key.startsWith("pk_");
}

/** Server-only: both keys present */
export function isStripeFullyConfigured(): boolean {
  const secret = process.env.STRIPE_SECRET_KEY ?? "";
  const publishable = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY ?? "";
  return secret.startsWith("sk_") && publishable.startsWith("pk_");
}
