import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";
import { useState, useEffect } from "react";
function Navbar() {
  const [click, setClick] = useState(false);
  const [navar, setNavar] = useState(false);

  const handleClick = () => setClick(!click);
  const mobleClick = () => setClick(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY >= 70) {
        setNavar(true);
      } else {
        setNavar(false);
      }
    });
  }, []);

  return (
    <header className={navar ? "nav-active" : ""}>
      <nav className={navar ? "container nav-p" : "container"}>
        <Link href="/">
          <a className="logo">
            Wildan<span>.</span>
          </a>
        </Link>
        <div className={click ? "nav-menu active" : "nav-menu"}>
          <ul className="nav-list">
            <li className="nav-item">
              <Link href="/">
                <a onClick={mobleClick}>About Me</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/Blog">
                <a onClick={mobleClick}>Blog</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/Contact">
                <a onClick={mobleClick}>Contact Me</a>
              </Link>
            </li>
          </ul>
        </div>
        <div id="btn" onClick={handleClick}>
          {click ? <FaTimes /> : <FaBars />}
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
