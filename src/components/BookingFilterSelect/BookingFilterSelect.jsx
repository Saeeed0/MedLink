function BookingFilterSelect({label}) {
  return <>
  <div className="col-md-3 p-0">
              <div className="border rounded-start-3 p-2 bg-light">
                <div className="dropdown w-100">
                  <button
                    className="btn bg-light w-100 text-start border-0"
                    type="button"
                    data-bs-toggle="dropdown"
                  >
                    {label}
                  </button>
                  <ul className="dropdown-menu w-100">
                    <li>
                      <a className="dropdown-item" href="#">
                        Dermatology (Skin)
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Dentistry (Teeth)
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
  </>;
}

export default BookingFilterSelect;
