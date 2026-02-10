import http from 'k6/http';
import { check, sleep } from 'k6';

export function login(baseUrl, username, password, expiresInMins = 30) {
  const url = `${baseUrl}/auth/login`;
  const payload = JSON.stringify({ username, password, expiresInMins });
  const params = { headers: { 'Content-Type': 'application/json' } };

  const res = http.post(url, payload, params);
  check(res, { 'login status is 200': (r) => r.status === 200 });

  const body = res.json();
  return {
    accessToken: body.accessToken,
    refreshToken: body.refreshToken,
  };
}

export function authHeaders(token) {
  return { headers: { Authorization: `Bearer ${token}` } };
}

export function think(minSeconds = 0.5, maxSeconds = 1.5) {
  const t = minSeconds + Math.random() * (maxSeconds - minSeconds);
  sleep(t);
}