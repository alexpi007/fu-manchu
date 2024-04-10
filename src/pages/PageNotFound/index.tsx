import { useNavigate } from 'react-router-dom';

function PageNotFound() {
  const navigate = useNavigate();

  return (
    <div id="error-page" className="flex flex-col gap-8 justify-center items-center h-screen">
      <h1 className="text-4xl font-bold">Oops!</h1>
      <p>Page not found</p>
      <button className="btn" onClick={() => navigate(-1)}>
        &larr; Go back
      </button>
    </div>
  );
}

export default PageNotFound;
