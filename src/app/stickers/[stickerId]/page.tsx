async function StickersId({
  params,
  searchParams,
}: {
  params: Promise<{
    stickerId: number;
  }>;
  searchParams: Promise<{ name: string; description: string }>;
}) {
  const { stickerId } = await params;
  const { name, description } = await searchParams;
  return (
    <div className="flex flex-col items-center justify-center h-full py-10 gap-4">
      <h1>Имя стикерпака: {name}</h1>
      <h2>Номер стикерпака: {stickerId}</h2>
      <h3>Описание: {description}</h3>
    </div>
  );
}
export default StickersId;
