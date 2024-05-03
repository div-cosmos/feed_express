import { useRouteError } from "react-router-dom";

const PageError = () => {
  const error = useRouteError();
  console.log(error);
  return <div>Page Not Found</div>;
};

export default PageError;
