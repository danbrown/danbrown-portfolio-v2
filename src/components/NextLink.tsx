import Link, { LinkProps } from "next/link";
import { Link as WipsieLink, LinkProps as WipsieLinkProps } from "@wipsie/ui";

const NextLink: React.FC<LinkProps | WipsieLinkProps> = (props) => (
  <Link {...(props as LinkProps)}>
    <WipsieLink {...(props as WipsieLinkProps)}>
      {(props as WipsieLinkProps).children}
    </WipsieLink>
  </Link>
);

export default NextLink;
