"use client";
import Link from "next/link";
import useSurvey from "./hooks/useSurvey";
import Loader from "./components/Loader/Loader";
import Error from "./components/Error/Error";

export default function Home() {
  const { data, isFetching, isError, error } = useSurvey();
  return (
    <div>
      {!isFetching && !isError && (
        <>
          <p className="text-7xl mb-10 text-black font-bold">{data?.title}</p>
          <Link href="survey">Take Survey</Link>
        </>
      )}
      {isFetching && <Loader />}
      {isError && !isFetching && <Error />}
    </div>
  );
}
