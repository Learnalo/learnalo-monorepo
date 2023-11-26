import { notFound } from "next/navigation";
const locales = ["en", "es"];

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default function LocaleLayout({ children, params: { locale } }) {
  if (!locales.includes(locale as any)) return notFound();
  return <>{children}</>;
}
