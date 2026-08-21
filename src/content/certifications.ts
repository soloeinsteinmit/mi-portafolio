import type { Certification } from "./types";

/**
 * Verified credentials only. Nothing planned, in progress, or attempted
 * appears here — a certification is added the day it is issued, not before.
 */
export const certifications: Certification[] = [
  {
    name: "Databricks Certified Data Engineer Professional",
    issuer: "Databricks",
    issued: "May 2026",
    expires: "May 2028",
    verified: true,
    note: "Advanced data engineering on the Databricks platform.",
  },
];
