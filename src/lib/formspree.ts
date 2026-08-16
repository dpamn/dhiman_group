export function getFormspreeEndpoint(): string | undefined {
  const endpoint = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT?.trim();
  return endpoint || undefined;
}

export type FormspreePayload = Record<string, string>;

export async function submitToFormspree(
  endpoint: string,
  data: FormspreePayload,
): Promise<void> {
  const response = await fetch(endpoint, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    let message = "Unable to send your message. Please try again.";
    try {
      const body = (await response.json()) as { error?: string };
      if (body.error) {
        message = body.error;
      }
    } catch {
      // Use default message when response body is not JSON.
    }
    throw new Error(message);
  }
}
