// @flow
import hostValidation from 'host-validation';

// NOTE(@mxstbr):
// - Host header only contains the domain, so something like 'build-api-asdf123.now.sh' or 'spectrum.chat'
// - Referer header contains the entire URL, so something like 'https://build-api-asdf123.now.sh/forward' or 'https://spectrum.chat/forward'
// That means we have to check the Host slightly differently from the Referer to avoid things like 'my-domain-spectrum.chat' to be able to hack our users

// Hosts, without http(s):// and paths
const trustedHosts = [
  process.env.NOW_URL &&
    new RegExp(`^${process.env.NOW_URL.replace('https://', '')}$`),
  /^tryretool\.com$/,
  /^retool\.com$/,
  /^retool\.be$/,
  // All subdomains
  /^.*\.tryretool\.com$/,
  /^.*\.retool\.com$/,
  /^.*\.retool\.be$/,
].filter(Boolean);

// Referers, with http(s):// and paths
const trustedReferers = [
  process.env.NOW_URL && new RegExp(`^${process.env.NOW_URL}($|\/.*)`),
  /^https:\/\/tryretool\.com($|\/.*)/,
  /^https:\/\/retool\.com($|\/.*)/,
  /^https:\/\/retool\.be($|\/.*)/,
  // All subdomains
  /^https:\/\/.*\.tryretool\.com($|\/.*)/,
  /^https:\/\/.*\.retool\.com($|\/.*)/,
  /^https:\/\/.*\.retool\.be($|\/.*)/,
].filter(Boolean);

export default hostValidation({
  hosts: trustedHosts,
  referers: trustedReferers,
  mode: 'either',
});
