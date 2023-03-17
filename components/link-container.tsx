import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

interface LinkContainerProps {
  locations: string[];
}

const LinkContainer = ({ locations }: LinkContainerProps) => {
  const router = useRouter();
  return (
    <div className="link-container">
      {locations.map((location) => (
        <Link
          className="link"
          href={{ pathname: "", query: { name: location } }}
          key={location}
          aria-current={router.query.name === location ? "location" : "false"}
        >
          {location}
        </Link>
      ))}
      <Link className="link" href={{ pathname: "/" }}>
        Reset
      </Link>
    </div>
  );
};

export default React.memo(LinkContainer);
