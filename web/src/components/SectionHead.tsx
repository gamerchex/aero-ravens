type Props = { n: string; label: string; title: string; id: string; children?: React.ReactNode };

/** Section heading: small index label on a ruler line, then the title. */
export function SectionHead({ n, label, title, id, children }: Props) {
  return (
    <header className="section-head">
      <p className="section-head__index">
        <span>{n}</span>
        <span className="section-head__rule" aria-hidden="true" />
        <span>{label}</span>
      </p>
      <h2 id={id} className="section-head__title">
        {title}
      </h2>
      {children && <div className="section-head__intro">{children}</div>}
    </header>
  );
}
