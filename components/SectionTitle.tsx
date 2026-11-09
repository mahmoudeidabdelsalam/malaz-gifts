type SectionTitleProps = {
  label?: string;
  title: string;
  centered?: boolean;
};

export function SectionTitle({
  label,
  title,
  centered = true,
}: SectionTitleProps) {
  return (
    <div className={centered ? "text-center" : "text-start"}>
      {label && (
        <p className="mb-2 font-cairo text-sm font-bold text-gold-text">
          {label}
        </p>
      )}
      <h2 className="section-title">{title}</h2>
      {centered && <div aria-hidden="true" className="gold-bar mt-4" />}
    </div>
  );
}
