import Link from "next/link";

interface Props extends React.ComponentProps<"a"> {}

export default function NavItem(props: Props) {
  return (
    <Link href={props.href} className={props.className}>
      {props.children}
    </Link>
  );
}
