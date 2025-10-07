type TrackSearchEventStage = "initiated" | "completed" | "unknown";

interface TrackSearchEventParams {
  email?: string | null;
  query: string;
  found?: boolean;
  timestamp?: string;
  stage?: TrackSearchEventStage;
}

export async function trackSearchEvent({
  email,
  query,
  found = false,
  timestamp,
  stage,
}: TrackSearchEventParams) {
  const trimmedQuery = query.trim();
  if (!trimmedQuery) return;

  const payload = {
    email: email || "unknown",
    query: trimmedQuery,
    found,
    stage: stage ?? (found ? "completed" : "initiated"),
    timestamp: timestamp ?? new Date().toISOString(),
  };

  try {
    await fetch("/api/track-search", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
  } catch (error) {
    if (import.meta.env.DEV) {
      console.warn("Failed to track search event", error);
    }
  }
}
