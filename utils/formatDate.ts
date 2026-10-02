export function formatDate(date: string) {
  const parsedDate = new Date(`${date}T00:00:00`);

  return parsedDate.toLocaleDateString('pt-BR', {
    month: 'long',
    year: 'numeric',
  });
}

export function formatPeriod(
  startDate: string,
  endDate: string | null,
) {
  const start = formatDate(startDate);
  const end = endDate ? formatDate(endDate) : 'Atual';

  return `${start} — ${end}`;
}