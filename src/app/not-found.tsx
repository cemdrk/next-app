// src/app/not-found.tsx

const NotFound = () => {
  return (
    <div className="h-screen text-center flex flex-col items-center justify-center">
      <div>
        <h1 className="inline-block mr-5 pr-5 text-2xl font-medium border-r-2 align-top leading-10">
          404
        </h1>
        <div className="inline-block text-left">
          <h2 className="leading-10">This page could not be found.</h2>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
