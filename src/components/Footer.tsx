export default function Footer() {
  return (
    <footer
      className="relative z-10 text-center py-8 px-[5%] border-t text-text-muted text-sm"
      style={{ borderColor: "rgba(255,255,255,0.07)" }}
    >
      <p>
        Designed &amp; Built by{" "}
        <span className="text-accent font-medium">Dava Adi</span>{" "}
        &mdash; {new Date().getFullYear()}
      </p>
    </footer>
  );
}
