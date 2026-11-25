import type { Metadata } from "next";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";

export const metadata: Metadata = {
  title: "Privacy policy | Freddie Poser",
  description: "Privacy policy for KnowledgeWork, a personal tool.",
};

export default function Privacy() {
  return (
    <main className="mx-auto max-w-2xl px-6 py-16 sm:py-24">
      <header className="space-y-3">
        <Link href="/" className="font-mono text-xs text-muted-foreground hover:underline">
          &larr; freddieposer.com
        </Link>
        <h1 className="font-display text-2xl font-semibold tracking-tight sm:text-3xl">
          Privacy policy
        </h1>
        <p className="text-sm text-muted-foreground">KnowledgeWork. Last updated 25 November 2026.</p>
      </header>

      <Separator className="my-10" />

      <div className="space-y-6 text-sm leading-relaxed">
        <p>
          KnowledgeWork is a personal tool written and used by Freddie Poser. It is not offered to the public. It signs in to Google so that its owner can read and organise his own email, calendar, contacts and documents from his own computer.
        </p>
        <h2 className="font-display text-lg font-semibold">What it accesses</h2>
        <p>
          Only the Google account data of the person who signs in, and only the services they approve on Google&apos;s consent screen (for example Gmail, Calendar, Drive, Docs, Sheets and Contacts).
        </p>
        <h2 className="font-display text-lg font-semibold">How the data is used</h2>
        <p>
          Data is fetched on demand and used only to show and organise that person&apos;s own information for them. Sign-in tokens are stored on the user&apos;s own device. Nothing is sold, shared with third parties or used for advertising, and no data is kept on a server run by KnowledgeWork.
        </p>
        <p>
          KnowledgeWork&apos;s use and transfer of information received from Google APIs adheres to the{" "}
          <a
            href="https://developers.google.com/terms/api-services-user-data-policy"
            className="underline"
          >
            Google API Services User Data Policy
          </a>
          , including the Limited Use requirements.
        </p>
        <h2 className="font-display text-lg font-semibold">Removing access</h2>
        <p>
          Access can be withdrawn at any time from{" "}
          <a href="https://myaccount.google.com/permissions" className="underline">
            your Google account&apos;s third-party access page
          </a>
          , which stops any further reading of your data.
        </p>
        <h2 className="font-display text-lg font-semibold">Contact</h2>
        <p>
          Questions about this policy can go to Freddie Poser through the links on the{" "}
          <Link href="/" className="underline">
            home page
          </Link>
          .
        </p>
      </div>
    </main>
  );
}
