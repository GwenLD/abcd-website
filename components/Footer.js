import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Footer() {
  return (
    <footer className="flex flex-col md:flex-row w-full p-2 lg:p-6 bg-gray-700 text-white lg:z-40">
      <div className="w-3/6">
        <h4 class="mb-4">Port Harcourt Office Address</h4>
        <p class="m-0 p-0">Woji Estate Road, YKC Junction, Port Harcourt</p>
        <p>Tel: +234 816 643 5419</p>
      </div>
      <div className="w-3/6">
        <p class="p-0 m-0">Email Us: hr@hxi.com.ng</p>
        <p class="p-0 m-0">@Copyright 2020. All rights reserved by ABCD</p>
      </div>
      <div className="w-3/6">
        <Link href="https://twitter.com/abcdeveloperz">
          <a className="lg:inline-flex mr-6">
            <FontAwesomeIcon className="w-9" icon={["fab", "twitter"]} />
          </a>
        </Link>

        <Link href="/">
          <a className="lg:inline-flex mr-6">
            <FontAwesomeIcon className="w-9" icon={["fab", "instagram"]} />
          </a>
        </Link>

        <Link href="https://medium.com/poapool">
          <a className="lg:inline-flex mr-6">
            <FontAwesomeIcon className="w-9" icon={["fab", "medium-m"]} />
          </a>
        </Link>
      </div>
    </footer>
  );
}
