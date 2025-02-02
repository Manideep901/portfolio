import "@/styles/header.css";
import SelectTheme from "./selectTheme";

export default function Header() {
  return (
    <header className="header">
      <SelectTheme />
      <nav className="nav-bar">
        <ul>
          <li>Manideep</li>
          <li className="">
            Expirence
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="86.882"
              height="38.613"
              viewBox="0 0 86.882 38.613"
            >
              <path
                className="path"
                id="nav1"
                d="M2834.12,175.255s-65.1-2.839-71.193-12.483c-2.333-3.674,12.79-11.338,35.753-16.33a201.552,201.552,0,0,1,25.358-3.791c23.469-2,28.2,4.349,22.1,10.531-4.937,5.008-7.077,6.47-17.4,12.619s-31.5,11.507-38.806,14.1"
                transform="translate(-2762.177 -141.76)"
                fill="none"
                stroke="#000"
                strokeWidth ="1"
                style={{
                  strokeDashoffset: 0,
                  strokeDasharray: "0px, 235.23px",
                }}
              ></path>
            </svg>
          </li>
          <li className="">Projects</li>
          <li className="">Contact</li>
        </ul>
      </nav>
    </header>
  );
}
