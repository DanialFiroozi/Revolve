function Pagination({ action }) {
  return (
    <div className="col-12 d-flex justify-content-center">
      <div className="pagination mt-5">
        <ul className="list-inline ">
          <li className="list-inline-item">
            <a onClick={action} href="#">
              Load More
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Pagination;
