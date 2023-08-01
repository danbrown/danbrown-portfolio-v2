/* eslint-disable react/display-name */
import { useTheme, Link } from "@wipsie/ui";
import { DefaultLayout } from "../components/DefaultLayout";
import NextLink from "@components/NextLink";

export default function Home() {
  const theme = useTheme();

  return (
    <DefaultLayout meta={{}}>
      <NextLink href="/">Um </NextLink>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
      consequuntur reprehenderit, exercitationem quia reiciendis earum deleniti
      assumenda nemo laboriosam eligendi!
    </DefaultLayout>
  );
}
