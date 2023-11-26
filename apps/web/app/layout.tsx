import "@ui/styles/globals.css";

export default function LocaleLayout({ children, params: { locale } }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
