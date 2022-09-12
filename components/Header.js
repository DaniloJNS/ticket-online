import {
  Navbar,
  Typography,
  Button,
} from "@material-tailwind/react";
import Link from "next/link";

export default function Header() {
  const navList = (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a href="/" className="flex items-center">
          Blog
        </a>
      </Typography>
      <Typography as="li" color="blue-gray" className="p-1 font-normal">
        <a href="/" className="flex items-center">
          Cinema
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue"
        className="p-1 font-normal"
      >
        <a href="/" className="flex items-center">
          Eventos
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a href="/" className="flex items-center">
          Shows
        </a>
      </Typography>
    </ul>
  );

  return (
    <Navbar className="mx-auto py-2 px-4 lg:px-8 lg:py-4 mb-5">
      <div className="container mx-auto flex items-center justify-between text-blue-gray-900">
        <Link href="/">
          <Typography
            as="a"
            variant="small"
            className="mr-4 cursor-pointer py-1.5 font-normal"
          >
            <span>Ticket Online</span>
          </Typography>
        </Link>
        <div className="hidden lg:block">{navList}</div>
        <Button variant="gradient" size="sm" className="hidden lg:inline-block">
          <span>Buy Now</span>
        </Button>
      </div>
    </Navbar>
  );
}
