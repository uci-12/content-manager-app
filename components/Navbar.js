import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar-brand">
          <Link href="/">
            <h1 className="navbar-item">Content Manager</h1>
          </Link>
          <span className="navbar-burger burger" data-target="navbarMenu">
            <span></span>
            <span></span>
            <span></span>
          </span>
        </div>
        <div id="navbarMenu" className="navbar-menu">
          <div className="navbar-end">
            <div className=" navbar-item">
              <div className="control has-icons-left">
                <input className="input is-rounded" type="email" placeholder="Search" />
                <span className="icon is-left">
                  <i className="fa fa-search"></i>
                </span>
              </div>
            </div>
            <Link href="/">
              <div className="navbar-item is-active is-size-5 has-text-weight-semibold">
                Home
              </div>
            </Link>
            <Link href="/resources/new">
              <div className="navbar-item is-size-5 has-text-weight-semibold">
                Add
              </div>
            </Link>
            <Link href="/">
              <div className="navbar-item is-size-5 has-text-weight-semibold">
                Features
              </div>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;