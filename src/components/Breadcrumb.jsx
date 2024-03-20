import { useLocation } from "react-router-dom";

function Breadcrumb() {
  const location = useLocation();

  return (
    <div className="breadcrumb-wrapper">
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <div className="text-center">
              <h2 className="lg-title">
                {location.pathname
                  .slice(1)
                  .replace("-", " ")
                  .toLocaleUpperCase()}
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Breadcrumb;
