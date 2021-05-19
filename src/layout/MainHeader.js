import { NavLink } from "react-router-dom";

const MainHeader = () => {
  return (
    <header className="p-3 bg-dark text-white">
      <div className="container">
        <div className="d-flex  justify-content-between ">
          Pub Quiz
          <div className="text-end">
            <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 align-items-center justify-content-end mb-md-0">
              <li>
                <NavLink
                  to="/"
                  className="nav-link px-2 text-white"
                  activeClassName="active"
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/admin"
                  className="nav-link px-2 text-white"
                  activeClassName="active"
                >
                  Admin
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/live"
                  className="nav-link px-2 text-white"
                  activeClassName="active"
                >
                  Live
                </NavLink>
              </li>
            </ul>
          {/* <div className="text-end">
         <button type="button" className="btn btn-outline-light me-2">
           Login
         </button>
         <button type="button" className="btn btn-warning">
           Sign-up
         </button>
       </div> */}
        </div>
        </div>

      </div>
    </header>
  );
};

export default MainHeader;

// <header class="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom p-3 bg-dark text-white"">
//       <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
//         <span class="fs-4">Simple header</span>
//       </a>

//       <ul class="nav nav-pills">
//         <li class="nav-item"><a href="#" class="nav-link active" aria-current="page">Home</a></li>
//         <li class="nav-item"><a href="#" class="nav-link">Features</a></li>
//         <li class="nav-item"><a href="#" class="nav-link">Pricing</a></li>
//         <li class="nav-item"><a href="#" class="nav-link">FAQs</a></li>
//         <li class="nav-item"><a href="#" class="nav-link">About</a></li>
//       </ul>
//     </header>
