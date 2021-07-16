import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";
import { cloneElement, ReactElement } from "react";

interface ActiveLinkProps extends LinkProps {
  children: ReactElement;
  shouldMatchExactHref?: boolean;
}

export function ActiveLink({
  children, shouldMatchExactHref = false, ...rest
}: ActiveLinkProps) {
  const { asPath } = useRouter();

  const isActive = shouldMatchExactHref ?
    asPath === rest.href || asPath === rest.as ?
      true : false
    :
    asPath.startsWith(String(rest.href)) || asPath.startsWith(String(rest.as)) ?
      true : false
    ;

  return (
    <Link
      {...rest}
    >
      {cloneElement(children, {
        color: isActive ? "blue.800" : "gray.360"
      })}
    </Link>
  )
}