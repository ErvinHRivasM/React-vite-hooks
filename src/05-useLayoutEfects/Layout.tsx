import { LoadingMessage } from "../03-examples/LoadingMessage";
import { PokemoCard } from "../03-examples/PokemoCard";
import { Quote } from "../03-examples/Quote";
import { useFetch, useCounter } from "../hooks";

export const Layout = () => {
  const { counter, increment } = useCounter(1);
  const { data, hasError, isLoading } = useFetch(
    `https://www.breakingbadapi.com/api/quotes/${counter}`
  );
  const { author, quote } = !!data && data[0];

  return (
    <>
      <h1>Breakingbad Quotes</h1>
      <hr />
      {/*console.log(data)*/}
      {isLoading ? <LoadingMessage /> : <Quote author={author} quote={quote} />}
      {/*isLoading && <LoadingMessage /> *<p>Cargando...</p>*/}
      {/*<pre>{JSON.stringify(data, null, 2)}</pre>*/}
      {/*<h2>{data?.name}</h2>*/}

      <button
        className="btn btn-info mt-2"
        disabled={isLoading}
        onClick={() => increment()}
      >
        Next quote
      </button>
    </>
  );
};
