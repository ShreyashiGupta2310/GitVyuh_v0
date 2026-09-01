const requestLog = new Map<string, number[]>();

const LIMIT = 5;
const WINDOW_MS = 60_000;

export function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const timestamps = requestLog.get(ip) || [];

  const recent = timestamps.filter((t) => now - t < WINDOW_MS);

  if (recent.length >= LIMIT) {
    return true;
  }

  recent.push(now);
  requestLog.set(ip, recent);
  return false;
}