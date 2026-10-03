/**
 * MedicationReminder — pale-sage "always take as directed" reminder banner.
 */
function MedicationReminder({ reminder }) {
  return (
    <div className="med-reminder" role="note" data-testid="medication-reminder">
      <p className="med-reminder-primary">{reminder.primary}</p>
      <p className="med-reminder-secondary">{reminder.secondary}</p>
    </div>
  );
}

export default MedicationReminder;
