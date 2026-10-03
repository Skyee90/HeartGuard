import PixelDocumentIcon from "../pixel-art/PixelDocumentIcon";

/**
 * SourcesSection — document icon, sources description, and "View sources" link.
 */
function SourcesSection({ sources }) {
  return (
    <div className="med-card med-sources" data-testid="sources-section">
      <div className="med-sources-left">
        <div className="med-sources-icon" aria-hidden="true">
          <PixelDocumentIcon size={36} />
        </div>
        <div className="med-sources-text">
          <h2 className="med-card-title">Sources &amp; more information</h2>
          <p className="med-card-body">
            Information from trusted medical sources such as{" "}
            {sources.map((s, i) => (
              <span key={s.name}>
                {i > 0 && (i === sources.length - 1 ? ", and " : ", ")}
                <a href={s.url} className="med-sources-inline-link" rel="noreferrer noopener">
                  {s.name}
                </a>
              </span>
            ))}
            .
          </p>
        </div>
      </div>
      <a
        href="#"
        className="med-sources-link"
        id="view-sources-btn"
        aria-label="View all sources for this medicine information"
      >
        View sources →
      </a>
    </div>
  );
}

export default SourcesSection;
