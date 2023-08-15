"use client";
import useSurvey from "./hooks/useSurvey";
import Loader from "./components/Loader/Loader";
import Error from "./components/Error/Error";
import Landing from "./components/Landing/Landing";

export default function Home() {
  const { data, isFetching, isError } = useSurvey();
  return (
    <div>
      {!isFetching && !isError && (
        <Landing title={data.title} image={data.image} />
      )}
      {isFetching && <Loader />}
      {isError && !isFetching && <Error />}
    </div>
  );
}
