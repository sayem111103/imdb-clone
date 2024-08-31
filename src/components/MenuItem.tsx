import Link from "next/link";
import React from "react";
import { IconType } from "react-icons";

const MenuItem = ({
  title,
  route,
  Icon,
}: {
  title: string;
  route: string;
  Icon: IconType;
}) => {
  return (
    <div>
      <Link href={route}>
        <Icon className="sm:hidden hover:text-yellow-300" />
        <p className="hidden hover:text-yellow-300 sm:inline text-sm">{title}</p>
      </Link>
    </div>
  );
};

export default MenuItem;
