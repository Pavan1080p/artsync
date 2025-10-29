interface Props {
  params: {
    artistId: string;
  };
}

export default function ArtistPortfolio({ params }: Props) {
  const { artistId } = params;
  
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Artist Portfolio: {artistId}</h1>
      {/* Individual artist content */}
    </div>
  );
}