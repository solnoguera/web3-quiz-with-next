import QuestionContainer from "./components/QuestionContainer/QuestionContainer";

export default function Home() {
  return (
    <main className="flex min-h-screen bg-gradient-to-br from-sky-50 to-gray-200 h-full">
      <div className="container m-auto text-gray-500 px-6 xl:px-30">
        <QuestionContainer />
      </div>
    </main>
  );
}
