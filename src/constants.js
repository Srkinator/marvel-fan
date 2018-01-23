import md5 from "crypto-js/md5";

export const BASE_URL = "http://gateway.marvel.com/";
export const PRIVATE_KEY = "432945eeba1a5b2629dffbdff4448d7c4d5d0633";
export const PUBLIC_KEY = "e4765ad6af4777e77825c37cce690718";
export const TS = new Date().getTime();
export const HASH = md5(TS + PRIVATE_KEY + PUBLIC_KEY).toString();
export const RESULTS_PER_PAGE = 100;