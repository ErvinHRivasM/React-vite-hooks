export const PokemoCard = ({ id, name, sprites = [] }: any) => {
  return (
    <section>
      <h2 className="text-capitalize">
        #{id} - {name}
      </h2>
      <div>
        {sprites.map((c) => (
          <img key={c} src={c} alt={c} />
        ))}
      </div>

      {/* Images */}
      <div></div>
    </section>
  );
};
